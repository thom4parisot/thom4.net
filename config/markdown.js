import mdAnchor from 'markdown-it-anchor'
import mdAttrs from 'markdown-it-attrs'
import mdContainer from 'markdown-it-container'
import { full as mdEmoji } from 'markdown-it-emoji'
import mdFootnote from 'markdown-it-footnote'
import mdIterator from 'markdown-it-for-inline'
import mdMark from 'markdown-it-mark'
import mdSpans from 'markdown-it-bracketed-spans'

import emojiPairs from 'markdown-it-emoji/lib/data/full.mjs'

import slugify from '@sindresorhus/slugify'

export function mdAccessibleEmojis (md, options) {
  const emoToText = Object.fromEntries(
    Object.entries(emojiPairs).map(([key, value]) => ([value, key]))
  )

  const emoRe = new RegExp(`(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])`, 'g')

  md.core.ruler.before('emoji', 'emoji_to_text', function replace (state) {
    let token
    const blockTokens = state.tokens

    for (let j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') { continue }
      let tokens = blockTokens[j].children

      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
      for (let idx = tokens.length - 1; idx >= 0; idx--) {
        token = tokens[idx]

        if (token.type === 'text' && emoRe.test(token.content)) {

          tokens[idx].content = tokens[idx].content.replace(emoRe, function (match, emoji, src) {
            if (emoToText[emoji]) {
              return `:${emoToText[emoji]}:`
            }

            return emoji
          })
        }
      }
    }
  })

  md.renderer.rules.emoji = function renderEmoji (token, idx) {
    return `<span class="emoji emoji--${token[idx].markup}" aria-hidden="true">${token[idx].content}</span>`
  }
}


export default function setupMarkdown (eleventyConfig) {
  eleventyConfig.amendLibrary('md', (mdLib) => {
    const lib = mdLib
      .use(mdSpans)
      .use(mdAttrs)
      .use(mdMark)
      .use(mdFootnote)
      .use(mdAnchor, {
        level: 1,
        collisionSuffix: 'v',
        permalink: mdAnchor.permalink.headerLink({
          safariReaderFix: true
        }),
        slugify (header) {
          return slugify(header)
        }
      })
      .use(mdContainer, 'ins', {
        render (tokens, idx) {
          const {type, info} = tokens[idx]

          if (type === 'container_ins_open') {
            const [, datetime] = info.match(/datetime="?([\d-]+)"?/)

            return `<ins class="section"${ datetime ? ` datetime="${datetime}"` : ''}>`
          }
          else if (type === 'container_ins_close') {
            return '</ins>\n'
          }
        }
      })
      .use(mdIterator, 'external_link', 'link_open', function (tokens, idx) {
        const href = tokens[idx].attrGet('href')

        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
          tokens[idx].attrJoin('class', 'external-link')
          tokens[idx].attrJoin('rel', 'noopener')
          tokens[idx].attrJoin('rel', 'noreferrer')
          tokens[idx].attrSet('target', '_blank')
        }
      })
      .use(mdEmoji)
      .use(mdAccessibleEmojis)

      eleventyConfig.addBundle("html", {
        transforms: [
          async function postProcessHtmlBundle (content) {
            return mdLib.render(content)
          }
        ]
      })

    return lib
  })
}
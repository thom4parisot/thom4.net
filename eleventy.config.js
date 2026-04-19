import { env } from 'node:process'
import { dirname } from 'node:path'
import { randomUUID } from 'node:crypto'

import { escapeAttribute } from 'entities'
import mime from 'mime/lite'
import mdAnchor from 'markdown-it-anchor'
import mdAttrs from 'markdown-it-attrs'
import mdContainer from 'markdown-it-container'
import mdFootnote from 'markdown-it-footnote'
import mdMark from 'markdown-it-mark'
import mdSpans from 'markdown-it-bracketed-spans'
import toml from '@iarna/toml'
import slugify from '@sindresorhus/slugify'
import { bbox } from '@turf/bbox'

import { HtmlBasePlugin, IdAttributePlugin, RenderPlugin } from '@11ty/eleventy'
import Image, { eleventyImageOnRequestDuringServePlugin } from '@11ty/eleventy-img'
import navigationPlugin from '@11ty/eleventy-navigation'
import { dateToRfc3339, getNewestCollectionItemDate } from '@11ty/eleventy-plugin-rss'
import syntaxPlugin from '@11ty/eleventy-plugin-syntaxhighlight'

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
  eleventyConfig.setQuietMode(true)

  eleventyConfig.addDataExtension('toml', (contents) => toml.parse(contents))

  eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
    excerpt_separator: '<!--more-->'
	})

  // @see https://www.11ty.dev/docs/languages/liquid/#shortcode-parameter-parsing
  // eleventyConfig.setLiquidParameterParsing('builtin')

  // @see https://www.11ty.dev/docs/languages/webc/
  eleventyConfig.addBundle('css')
  eleventyConfig.addBundle('js')

  // @see https://www.11ty.dev/docs/plugins/id-attribute/
  eleventyConfig.addPlugin(IdAttributePlugin, {
    checkDuplicates: false
  })

  // @see https://www.11ty.dev/docs/plugins/html-base/
  eleventyConfig.addPlugin(HtmlBasePlugin)

  // @see https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(navigationPlugin)

  // @see https://www.11ty.dev/docs/plugins/render/
  eleventyConfig.addPlugin(RenderPlugin)

  // @see https://www.11ty.dev/docs/plugins/syntaxhighlight/
  eleventyConfig.addPlugin(syntaxPlugin, {
    codeAttributes: {},
    preAttributes: {}
  })

  // @see https://github.com/11ty/eleventy/blob/main/src/Engines/Liquid.js
  // @see https://liquidjs.com/tutorials/options.html
  eleventyConfig.setLiquidOptions({
    extname: 'liquid',
    jekyllWhere: true,
		jsTruthy: true,
    locale: 'fr-FR'
	})

  eleventyConfig.amendLibrary('md', (mdLib) => {
    const lib = mdLib
      .use(mdSpans)
      .use(mdAttrs)
      .use(mdMark)
      .use(mdFootnote)
      .use(mdAnchor, {
        level: 1,
        collisionSuffix: 'v',
        permalink: mdAnchor.permalink.linkInsideHeader({
          ariaHidden: true,
          class: 'header-anchor',
          placement: 'before',
          symbol: '§'
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

      eleventyConfig.addBundle("html", {
        transforms: [
          async function postProcessHtmlBundle (content) {
            return mdLib.render(content)
          }
        ]
      })

    return lib
  })

  /**
   * Photography Section
   */
  eleventyConfig.addPlugin(eleventyImageOnRequestDuringServePlugin)

  eleventyConfig.addShortcode("photography", async function (src, alt = '', className = '') {
    const fullSrc = `${dirname(this.page.inputPath)}/${src}`

		const metadata = await Image(fullSrc, {
      transformOnRequest: env.ELEVENTY_RUN_MODE === "serve",
			widths: ['auto'],
		})

    const sources = Object.values(metadata).flat().map(entry => {
      return `<source type="${entry.sourceType}" src="${entry.url}" srcset="${entry.srcset}" width="${entry.width}" height="${entry.height}">`
    })

    return [
      ...sources,
      `<img src="${metadata.jpeg.at(0).url}" alt="${escapeAttribute(alt)}" class="${className}" loading="lazy" decoding="async" itemprop="image">`
    ].join('')
	})

  eleventyConfig.addShortcode("bundledImage", async function (page, src, size = 840, alt = '', className = '') {
    const fullSrc = `${dirname(page.inputPath)}/${src}`

		const html = await Image(fullSrc, {
      transformOnRequest: env.ELEVENTY_RUN_MODE === "serve",
      formats: ['webp', 'jpeg'],
			widths: [size],
      htmlOptions: {
        imgAttributes: {
          alt
        }
      }
		})

    return Image.generateHTML(html, { alt })
	})

  eleventyConfig.addShortcode("image", async function (src, size = 840, alt = '', className = '') {
		const html = await Image(src, {
      transformOnRequest: env.ELEVENTY_RUN_MODE === "serve",
      formats: ['webp', 'jpeg'],
			widths: [size],
      htmlOptions: {
        imgAttributes: {
          alt,
          class: className
        }
      }
		})

    return Image.generateHTML(html, { alt, class: className })
	})

  /**
   * Configuration
   */
  eleventyConfig.setInputDirectory('source')
  eleventyConfig.setDataDirectory('../_data'),
  eleventyConfig.setDataFileBaseName('index'),
  eleventyConfig.setIncludesDirectory('../_includes')
  eleventyConfig.setLayoutsDirectory('../_includes/layouts')
  eleventyConfig.setTemplateFormats(["html", "liquid", "md", "njk"])

  eleventyConfig.ignores.add("source/talks/**/slides/**.md")
  eleventyConfig.ignores.add("source/talks/**/_*.md")
  eleventyConfig.ignores.add("source/_drafts/**/*.md")

  eleventyConfig.addCollection('photography-series', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/photography/**/index.md')
  })

  eleventyConfig.addCollection('randomPhotographySeries', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/photography/**/index.md')
      .map(series => ({ series, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ series }) => series)
      .slice(0, 6)
  })

  eleventyConfig.addCollection('posts', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/posts/**/*.md').toReversed()
  })

  eleventyConfig.addCollection('journal', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/journal/**/*.md').toReversed()
  })

  eleventyConfig.addCollection('reading-notes', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/reading-notes/**/index.md').toReversed()
  })

  eleventyConfig.addCollection('talks', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/talks/*/*.md').toReversed()
  })

  /**
   * Talks
   */
  eleventyConfig.addPassthroughCopy({
    'public/.htaccess': '.htaccess',
    'public': 'assets',
    'images': 'images',
    'node_modules/prismjs': 'assets/prismjs/',
    'node_modules/maplibre-gl/dist/maplibre-gl.js': 'assets/maplibre-gl/maplibre-gl.js',
    'node_modules/maplibre-gl/dist/maplibre-gl.css': 'assets/maplibre-gl/maplibre-gl.css',
    'node_modules/reveal.js/dist': 'assets/reveal/',
    'node_modules/reveal-random-colors': 'assets/reveal/plugin/random-colors',
    'node_modules/normalize.css/normalize.css': 'assets/css/normalize.css',
    'source/talks': 'talks',
  })

  eleventyConfig.addLiquidFilter('dateToRfc3339', dateToRfc3339)
  eleventyConfig.addLiquidFilter('getNewestCollectionItemDate', getNewestCollectionItemDate)

  eleventyConfig.addFilter('is_empty_txt', (any, alt = '') => !any ? alt : false)
  eleventyConfig.addFilter('values', (object) => Object.values(object))
  eleventyConfig.addFilter('mimeType', (string) => mime.getType(string))
  eleventyConfig.addFilter('random', () => randomUUID())
  eleventyConfig.addFilter('bbox', (geojson) => bbox(JSON.parse(geojson)))

  eleventyConfig.addShortcode("currentBuildDate", () => (new Date()).toISOString())

  eleventyConfig.addShortcode('slideshare', id => {
    return `<iframe type="text/html" class="video-container" src="https://slideshare.net/slideshow/embed_code/${id}" allow="fullscreen"></iframe>`
  })

  eleventyConfig.addShortcode('youtube', id => {
    return `<iframe type="text/html" class="video-container"
  src="http://www.youtube.com/embed/${id}?enablejsapi=1&origin=https://thom4.net" allow="fullscreen"></iframe>`
  })

  eleventyConfig.addShortcode('dailymotion', id => {
    return `<iframe type="text/html" src="https://dailymotion.com/embed/video/${id}" allow="fullscreen"></iframe>`
  })

  eleventyConfig.addShortcode('vimeo', id => {
    return `<iframe type="text/html" src="https://player.vimeo.com/video/${id}" allow="fullscreen"></iframe>`
  })

  eleventyConfig.addShortcode('soundcloud', (id, title) => {
    return `<iframe type="text/html" allow="fullscreen" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A${id}&auto_play=false" title="${title}"></iframe>`
  })

  eleventyConfig.addShortcode('mindmeister', id => {
    return `<iframe class="video-container" type="text/html" allow="fullscreen"  src="https://www.mindmeister.com/maps/public_map_shell/${id}"></iframe>`
  })
  eleventyConfig.addShortcode('repost', (url, title, domain) => {
    return `<blockquote class="repost">
      <p>
        Ce billet a été initialement publié sur
        <a href="http://${domain}" class="domain-link" rel="external">${domain}</a>
        sous l'intitulé <a href="${url}" class="source-link u-repost-of" rel="external">${title}</a>.
      </p>
    </blockquote>`
  })
};
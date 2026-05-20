import { dirname, join } from 'node:path'
import { env } from 'node:process'

import { escapeAttribute } from 'entities'
import Image from '@11ty/eleventy-img'

export default function setupShortcodes (eleventyConfig) {
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

  /**
   * Photography section
   */
  eleventyConfig.addShortcode("photography", async function (src, alt = '', className = '') {
    const fullSrc = `${dirname(this.page.inputPath)}/${src}`

		const metadata = await Image(fullSrc, {
      transformOnRequest: env.ELEVENTY_RUN_MODE === "serve",
      outputDir: './_site/images/generated/',
      urlPath: '/images/generated/',
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

  eleventyConfig.addShortcode("bundledImage", async function (src, size = 840, alt = '', className = '') {
    const html = await Image(join(this.eleventy.directories.input, src), {
      transformOnRequest: env.ELEVENTY_RUN_MODE === "serve",
      formats: ['webp', 'jpeg'],
      outputDir: './_site/images/generated/',
      urlPath: '/images/generated/',
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
      outputDir: './_site/images/generated/',
      urlPath: '/images/generated/',
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
}
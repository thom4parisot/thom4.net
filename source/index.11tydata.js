import { HtmlBasePlugin } from "@11ty/eleventy"

export default {
  lang: 'fr-FR',
  layout: 'page',

  eleventyComputed: {
    image ({ cover, image, metadata }) {
      if (image) {
        return image
      }

      if (cover) {
        if (Object.hasOwn(cover, 'url')) {
          return HtmlBasePlugin.applyBaseToUrl(cover.url, metadata.url)
        }

        return HtmlBasePlugin.applyBaseToUrl(cover, metadata.url)
      }
    }
  }
}
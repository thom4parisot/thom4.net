import readingTime from 'reading-time'

export default {
  lang: 'fr-FR',
  layout: 'post.liquid',
  eleventyComputed: {
    readingTime ({ page }) {
      return readingTime(page.rawInput)
    },

    permalink ({ permalink, page, year }) {
      if (permalink) {
        return permalink
      }

      return `/${year}/${page.fileSlug}/`
    },

    year ({ page }) {
      return page.date.getFullYear()
    },
  }
}
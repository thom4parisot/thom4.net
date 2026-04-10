export default {
  lang: 'fr-FR',
  layout: 'post-journal',
  eleventyComputed: {
    section ({ categories }) {
      if (categories.length > 2) {
        return categories.at(1)
      }

      return ''
    },

    serie ({ categories }) {
      if (categories.length > 2) {
        return categories.at(-1)
      }

      return ''
    },

    year ({ page }) {
      return page.date.getFullYear()
    },
  }
}
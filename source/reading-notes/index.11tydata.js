export default {
  layout: 'reading-notes.liquid',
  eleventyComputed: {
    image ({ isbn }) {
      if (isbn) {
        return `https://images.epagine.fr/${isbn.slice(-3)}/${isbn}_1_75.jpg`
      }

      return ''
    },
    permalink: '/reading-notes/{{ page.fileSlug }}/',
    quotes_count ({ page }) {
      return ((page.rawInput || '').match(/^\n>( |\n)/gm) || []).length
    }
  }
}
import { readFile } from 'node:fs/promises'
import { basename, dirname } from 'node:path'

export default {
  layout: 'talk.liquid',
  permalink: '/{{ page.filePathStem }}/',
  theme: 'thom4',
  eleventyComputed: {
    cover ({ cover, page }) {
      if (cover) {
        return `${page.filePathStem}/${cover}`
      }
    },

    async slides ({ page, slides = [] }) {
      if (!Array.isArray(slides) || !slides.length) {
        return []
      }

      const baseDir = `${dirname(page.inputPath)}/${basename(page.inputPath, '.md')}/slides`
      const contents = await Promise.all(
        slides.map(({ file }) => readFile(`${baseDir}/${file}`, { encoding: 'utf8' }))
      )

      return contents
    }
  }
}
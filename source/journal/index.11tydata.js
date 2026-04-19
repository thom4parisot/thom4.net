import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import mime from 'mime/lite'

export default {
  lang: 'fr-FR',
  layout: 'post-journal',
  eleventyComputed: {
    async geo ({ geo, page }) {
      if (Object.hasOwn(geo, 'file')) {
        const filePath = join(dirname(page.inputPath), geo.file)
        const fileContent = await readFile(filePath, { encoding: 'utf8'})
        geo.json = fileContent
        geo.mimeType = mime.getType(geo.file)
      }

      return geo
    },

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
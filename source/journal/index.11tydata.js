import { access, constants, readFile } from 'node:fs/promises'
import { basename, dirname, extname, join, relative } from 'node:path'
import mime from 'mime/lite'

export default {
  lang: 'fr-FR',
  layout: 'post-journal',
  eleventyComputed: {
    permalink ({ date, permalink, page }) {
      if (permalink) {
        return permalink
      }

      const yyyymmdd = date.toISOString().split('T')[0].replace(/-/g, '/')

      return `${yyyymmdd}/${page.fileSlug}/`
    },
    async geo ({ geo, page, eleventy }) {
      // webgeo data as a file
      if (Object.hasOwn(geo, 'file')) {
        const filePath = join(dirname(page.inputPath), geo.file)
        const fileContent = await readFile(filePath, { encoding: 'utf8'})
        geo.json = fileContent
        geo.mimeType = mime.getType(geo.file)

        // image alternative
        const imageName = `${basename(geo.file, extname(geo.file))}.webp`
        const imagePath = `${dirname(page.inputPath)}/${imageName}`

        try {
          await access(imagePath, constants.R_OK)
          geo.image = '/' + relative(eleventy.directories.input, imagePath)
        } catch (error) {
          console.error(`No alternative image found for %s in %s`, geo.file, page.inputPath)
        }
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
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

    image ({ geo, image }) {
      if (!image && geo?.image) {
        return geo.image
      }
    },

    geo: {
      async image ({ eleventy, geo, page }) {
        if (geo?.file) {
          const imageName = `${basename(geo.file, extname(geo.file))}.webp`
          const imagePath = `${dirname(page.inputPath)}/${imageName}`

          try {
            await access(imagePath, constants.R_OK)
            return '/' + relative(eleventy.directories.input, imagePath)
          } catch (error) {
            console.error(`No alternative image found for %s in %s`, geo.file, page.inputPath)
          }
        }
      },

      async json ({ geo, page, eleventy }) {
        if (geo?.file) {
          const filePath = join(dirname(page.inputPath), geo.file)
          const fileContent = await readFile(filePath, { encoding: 'utf8'})

          return fileContent
        }
      },

      mimeType ({ geo }) {
        if (geo?.file) {
          return mime.getType(geo.file)
        }
      }
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
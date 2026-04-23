import { randomUUID } from 'node:crypto'

import { dateToRfc3339, getNewestCollectionItemDate } from '@11ty/eleventy-plugin-rss'
import { bbox } from '@turf/bbox'
import mime from 'mime/lite'

export default function configureFilters (eleventyConfig) {
  eleventyConfig.addLiquidFilter('dateToRfc3339', dateToRfc3339)
  eleventyConfig.addLiquidFilter('getNewestCollectionItemDate', getNewestCollectionItemDate)

  eleventyConfig.addFilter('is_empty_txt', (any, alt = '') => !any ? alt : false)
  eleventyConfig.addFilter('values', (object) => Object.values(object))
  eleventyConfig.addFilter('mimeType', (string) => mime.getType(string))
  eleventyConfig.addFilter('random', () => randomUUID())
  eleventyConfig.addFilter('bbox', (geojson) => bbox(JSON.parse(geojson)))
}
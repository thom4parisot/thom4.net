import { dirname } from 'node:path'

export default {
  layout: 'series-default.liquid',
  eleventyComputed: {
    image ({ image, page }) {
      if (image) {
        return `${dirname(page.filePathStem)}/${image}`
      }
    },

    temporalCoverage ({ date, pictures }) {
      if (!Array.isArray(pictures)) {
        return []
      }

      const dates = new Set([date, ...pictures.map(({ date }) => date)]
        .filter(d => d)
        .map(d => typeof d.toISOString === 'function' ? d.toISOString() : d)
        .map(s => s.split('-').at(0))
        .sort()).values().toArray()

      const start = dates.at(0)
      const end = dates.at(-1)

      return start === end ? [start] : [start, end]
    }
  }
}
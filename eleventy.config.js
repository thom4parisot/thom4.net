import toml from '@iarna/toml'

import { HtmlBasePlugin, IdAttributePlugin, RenderPlugin } from '@11ty/eleventy'
import { eleventyImageOnRequestDuringServePlugin } from '@11ty/eleventy-img'
import navigationPlugin from '@11ty/eleventy-navigation'
import syntaxPlugin from '@11ty/eleventy-plugin-syntaxhighlight'

import setupFilters from './config/filters.js'
import setupMarkdown from './config/markdown.js'
import setupShortcodes from './config/shortcodes.js'

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
  eleventyConfig.setQuietMode(true)

  eleventyConfig.addDataExtension('toml', (contents) => toml.parse(contents))

  eleventyConfig.setFrontMatterParsingOptions({
		excerpt: true,
    excerpt_separator: '<!--more-->'
	})

  // @see https://github.com/11ty/eleventy/blob/main/src/Engines/Liquid.js
  // @see https://liquidjs.com/tutorials/options.html
  eleventyConfig.setLiquidOptions({
    extname: 'liquid',
    jekyllWhere: true,
		jsTruthy: true,
    locale: 'fr-FR'
	})

  // @see https://www.11ty.dev/docs/languages/liquid/#shortcode-parameter-parsing
  // eleventyConfig.setLiquidParameterParsing('builtin')

  /**
   * Configuration
   */
  eleventyConfig.setInputDirectory('source')
  eleventyConfig.setDataDirectory('../_data'),
  eleventyConfig.setDataFileBaseName('index'),
  eleventyConfig.setIncludesDirectory('../_includes')
  eleventyConfig.setLayoutsDirectory('../_includes/layouts')
  eleventyConfig.setTemplateFormats(["html", "liquid", "md", "njk"])

  eleventyConfig.ignores.add("source/talks/**/slides/**.md")
  eleventyConfig.ignores.add("source/talks/**/_*.md")
  eleventyConfig.ignores.add("source/_drafts/**/*.md")

  // @see https://www.11ty.dev/docs/languages/webc/
  eleventyConfig.addBundle('css')
  eleventyConfig.addBundle('js')

  // @see https://www.11ty.dev/docs/plugins/id-attribute/
  eleventyConfig.addPlugin(IdAttributePlugin, {
    checkDuplicates: false
  })

  // @see https://www.11ty.dev/docs/plugins/html-base/
  eleventyConfig.addPlugin(HtmlBasePlugin)

  // @see https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(navigationPlugin)

  // @see https://www.11ty.dev/docs/plugins/render/
  eleventyConfig.addPlugin(RenderPlugin)

  // @see https://www.11ty.dev/docs/plugins/syntaxhighlight/
  eleventyConfig.addPlugin(syntaxPlugin, {
    codeAttributes: {},
    preAttributes: {}
  })

  eleventyConfig.addPlugin(eleventyImageOnRequestDuringServePlugin)

  /**
   * Collections
   */
  eleventyConfig.addCollection('photography-series', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/photography/**/index.md')
  })

  eleventyConfig.addCollection('randomPhotographySeries', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/photography/**/index.md')
      .map(series => ({ series, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ series }) => series)
      .slice(0, 6)
  })

  eleventyConfig.addCollection('posts', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/posts/**/*.md').toReversed()
  })

  eleventyConfig.addCollection('journal', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/journal/**/*.md').toReversed()
  })

  eleventyConfig.addCollection('reading-notes', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/reading-notes/**/index.md').toReversed()
  })

  eleventyConfig.addCollection('talks', async collectionsApi => {
    return collectionsApi.getFilteredByGlob('source/talks/*/*.md').toReversed()
  })

  /**
   * Filters
   */
  eleventyConfig.addPassthroughCopy({
    'public/.htaccess': '.htaccess',
    'public': 'assets',
    'node_modules/prismjs': 'assets/prismjs/',
    'node_modules/maplibre-gl/dist/maplibre-gl.js': 'assets/maplibre-gl/maplibre-gl.js',
    'node_modules/maplibre-gl/dist/maplibre-gl.css': 'assets/maplibre-gl/maplibre-gl.css',
    'node_modules/reveal.js/dist': 'assets/reveal/',
    'node_modules/reveal-random-colors': 'assets/reveal/plugin/random-colors',
    'node_modules/normalize.css/normalize.css': 'assets/css/normalize.css',
  })

  eleventyConfig.addPassthroughCopy('images')
  eleventyConfig.addPassthroughCopy('source/talks/**/*.{png,jpg,jpeg,webp,gif}')
  eleventyConfig.addPassthroughCopy('source/journal/**/*.{webp,geojson,gpx}')

  setupFilters(eleventyConfig)
  setupShortcodes(eleventyConfig)
  setupMarkdown(eleventyConfig)
}
title: Dynamic Grunt Targets Using Templates
date: 2013-08-22 09:00:00
tags:
- grunt
- lodash
categories:
- JavaScript
- Développement Web
lang: en-GB
cover: /images/2013/08/grunt-dynamic-expand.png
---

[Grunt tasks](http://gruntjs.com/) are very handy when it comes to frontend development, tooling some [Node.js routines](http://nodejs.org/) or even [publishing your fresh new hipster blog](http://assemble.io).

[Dynamic file object](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) maps various `src` to `dest` within *one target*.

But what about **writing multiple targets at once** — without add any line of code?

<!--more-->

## tl;dr

Some Grunt tasks may last too long *and* you don't want to keep adding targets in your `Gruntfile.js`. Here is a **trick to expand targets automatically**. 

## The Initial Context

[Mark McDonnell](http://integralist.co.uk/) worked hard on [making BBC News Sass compilation dynamic with Grunt](http://integralist.co.uk/Dynamically-Generated-Grunt-Tasks.html).
He faced the **problem of long Sass compilation time** and wanted to split them in **smaller chunks** to reduce the time people stall during two changesets.

Hence the following file structure:

```
src
├── sass
│   ├── afrique
│   ├── arabic
│   ├── hausa
│   ├── news
│   └── partials
│       ├── mixins
│       └── shared
└── stylesheets
    ├── afrique
    ├── arabic
    ├── hausa
    └── news
```

## Writing Targets Manually

If we wanted to be able to rebuild Sass files individually for each service, we would have to write the following code in our `Gruntfile.js`:

```javascript
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
          afrique: {
            expand: true,
            cwd: 'src/sass/',
            src: ['services/afrique/**/*.scss', '!**/_*.scss', '!partials/**/*.scss'],
            dest: 'stylesheets/',
            ext: '.css'
          },
          arabic: {
            expand: true,
            cwd: 'src/sass/',
            src: ['services/arabic/**/*.scss', '!**/_*.scss', '!partials/**/*.scss'],
            dest: 'stylesheets/',
            ext: '.css'
          },
          // … repeat that countless times

          // a single target to rule them all
          dist: {
            expand: true,
            cwd: 'src/sass/',
            src: ['**/*.scss', '!**/_*.scss', '!partials/**/*.scss'],
            dest: 'stylesheets/',
            ext: '.css',
            options: {
              style: "compressed"
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
```

This way, you type `grunt sass:afrique` to compile only the  [BBC Afrique](http://www.bbc.co.uk/afrique/) service stylesheets or `grunt sass:dist` to rebuild *all* the services stylesheets  — typically done only when releasing otherwise [you will feel like living this comic strip](http://xkcd.com/303/).

You hence face 2 problems:

* the **maintenance cost increases** gradually as soon as new services requires to add new targets;
* the **readability decreases** as your Gruntfile get more and more bloated by repetitive content.

[Mark's technique has been great](http://integralist.co.uk/Dynamically-Generated-Grunt-Tasks.html) at removing this pain — and [he even improved it to leverage the Grunt Config API](http://integralist.co.uk/Using-Grunts-Config-API.html)): he  **dynamically generated the Grunt targets** on runtime.

I’ve been working at making [BBC News](http://responsivenews.co.uk/) Grunt tooling battle-tested and pluggable into their [CI process](http://martinfowler.com/articles/continuousIntegration.html). It gave me the opportunity to simplify things.

Because I had time and found it challenging.

## Enters Grunt Property Expand

The [`grunt.template`](http://gruntjs.com/api/grunt.template) mechanism is recommended to avoid repetitions, and **to reuse configuration values**.

Templates are evaluated on *runtime*, when a task is duely queued and ran. Not when `grunt.initConfig` is called.
Which means we have access to the `grunt.task.current` object.

In the case of `grunt sass:afrique`, [`grunt.task.current.name`](http://gruntjs.com/inside-tasks#this.name) equals `sass` and then, [its arguments](http://gruntjs.com/inside-tasks#this.args): `grunt.task.current.args` is an array for which the first index equals `afrique`.

We don’t need to know more, we can define a static target and provide a complementary argument which will route the services properly like this:

```bash
grunt sass:service:afrique
grunt sass:service:arabic
…
```

Our `Gruntfile.js` will never grow in size or require any new line of code to target a sub-tree of our codebase:

```javascript
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
          // called with grunt sass:service:afrique etc.
          service: {
            expand: true,
            cwd: 'src/sass/',
            src: ['services/<%= grunt.task.current.args[0] %>/**/*.scss', '!**/_*.scss', '!partials/**/*.scss'],
            dest: 'stylesheets/',
            ext: '.css'
          },

          // a single target to rule them all
          dist: {
            expand: true,
            cwd: 'src/sass/',
            src: ['**/*.scss', '!**/_*.scss', '!partials/**/*.scss'],
            dest: 'stylesheets/',
            ext: '.css',
            options: {
              style: "compressed"
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
```

[![](http://farm8.staticflickr.com/7325/9308903255_6f68f6ddbe_z.jpg)](http://www.flickr.com/photos/the-jedi/9308903255/)

## The Bay Watcher

We can apply the same sugar to the `watch` task to recompile automatically our Sass files.
Still, we don’t want to rebuild the whole files assets. **We only want to recompile service’s modified Sass files**.

This is doable by applying the same technique, not only in the `src` target configuration, but also in the `tasks`’s one:

```javascript
module.exports = function (grunt) {
    grunt.initConfig({
      //…
      watch: {
        // grunt watch:service:afrique
        // grunt watch:service:news
        // …
        service:{
          files: [
            'src/sass/partials/**/*.scss',
            'src/sass/services/<%= grunt.task.current.args[1] %>/*.scss'
          ],
          tasks: ['sass:service:<%= grunt.task.current.args[1] %>']
        }
      }
      //…
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
```

## Final Words

While writing this blogpost, I discovered a sentence in the [Inside Grunt Tasks](http://gruntjs.com/api/inside-tasks) page documentation:

> While a task is running, Grunt exposes many task-specific utility properties and methods inside the task function via the this object. This same object is also exposed as grunt.task.current for use in templates.

Some would say [RTFM](http://xkcd.com/293/).  
I would say **it was worth finding and learning it**.

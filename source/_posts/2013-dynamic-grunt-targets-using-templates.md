title: Dynamic Grunt Targets Using Templates
date: 2013-08-21 10:00:00
tags:
- grunt
- lodash
categories:
- JavaScript
- Développement Web
lang: en-GB
cover:
---

[Grunt tasks](http://gruntjs.com/) are very handy when it comes to frontend development, tooling some [Node.js routines](http://nodejs.org/) or even [publishing your fresh new hipster blog](http://assemble.io).

[Dynamic file object](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) maps various `src` to `dest` at once.

But what about **writing multiple targets at once**?

<!--more-->

## tl;dr

Some Grunt tasks may last too long *and* you don't want to keep adding targets in your `Gruntfile.js`. Here is a **trick to expand targets automatically**. 

## The Initial Context

[Mark McDonnell](http://integralist.co.uk/) worked hard on [making BBC News Sass compilation dynamic with Grunt](http://integralist.co.uk/Dynamically-Generated-Grunt-Tasks.html). He faced the **problem of long Sass compilation time** and wanted to split them in **smaller chunks** to reduce the compilation time.

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

This way, you want type `grunt sass:afrique` to compile only the  [BBC Afrique](http://www.bbc.co.uk/afrique/) service stylesheets or `grunt sass:dist` to rebuild *all* the services stylesheets (only when releasing otherwise [you will feel like living this comic strip](http://xkcd.com/303/)).

Mark's technique has been great at removing this pain by **dynamically generating the Grunt targets**.

I wanted to push that even further alongside my work of test coverage (this will be covered in a further blogpost and eventually a public speaking talk).

## Enters Grunt Property Expand

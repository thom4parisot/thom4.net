## Level 2: everyday configuration

<!-- .slide: data-background="images/week3.png" -->

~~~~

Now we are using Grunt, you might need to scale its usage within your working group.

Next up are tips and organisation tricks based on my experience and on a two weeks spike at BBC News. It is not meant to be exhaustive: I just like them because they are simple and easy to remember. Thus to reproduce over and over.

@@@

<!-- .slide: data-state="contrasted" -->

## Logical target naming

@@@

```javascript
grunt.initConfig({
  less: {
    all: {
      src: ['src/**/*.css'],
      dest: 'dist/all.min.css',
      options: { compress: true }
    }
  }
});
```

~~~~

Having a single target is easy and fast to write at first.

It can become long and tedious to maintain on the long run.

@@@

```javascript
grunt.initConfig({
  less: {
    all: {
      src: [
        'bower_components/**/*.less',
        '!doc/**/*.less',
        'src/**/*.less',
        'src/**/*.css',
        '!src/vendor/doc.less'
      ],
      dest: 'dist/all.min.css',
      options: { compress: true }
    }
  }
});
```

~~~~

It is better to reflect the intent of a target.
The UNIX-style filename patterns are also here to keep things simple.

@@@

```javascript
grunt.initConfig({
  less: {
    files: {
      'dist/main.min.css': [
        'src/stylesheets/**/*.{css,less}'
      ],
      'dist/vendors.min.css': [
        'bower_components/**/*.less',
        'src/vendor/*.less',
        '!src/vendor/doc.less'
      ]
    },
    options: { compress: true }
  }
});
```

@@@

<!-- .slide: data-state="contrasted" -->

## Task alias and execution order

~~~~

The next step after the target are the tasks.

@@@

## Configuration

```javascript
grunt.registerTask('build-assets', ['less', 'uglify']);
```

~~~~

You can create your own simply by referring to the existing ones name.

In that case, `build-assets` will obviously care about building he assets for your frontend. Through its name, you know that task's responsibility is to do so.

You do not necessarily need to call all the targets of a task as well.

@@@

## Fine grained configuration

```javascript
grunt.registerTask('build-front', ['less:frontend', 'uglify:frontend', 'jshint', 'karma']);
```

~~~~

And again, as the things grow up, we might want to either reduce the time or to not repeat all the tasks, all the time.

So we can split them up as *full* tasks and *fast* tasks.

@@@

## Full and fast tasks

```javascript
grunt.registerTask('deploy-fast', ['rsync:production']);

grunt.registerTask('deploy', ['build-assets', 'deploy-fast', 'cleanup']);
```

~~~~

The fast tasks are supposed to be triggered manually.
Because you know you satisfy the prerequisites.
Because you want to save some unneeded extra seconds of processing.

@@@

<!-- .slide: data-state="contrasted" -->

## Logical task file organisation

~~~~

We do all our best to keep things as small as possible but sometimes, you end up doing really a lot of things in a Gruntfile.

You have several options to reduce the overall size of a Gruntfile.

@@@

## Several Gruntfiles

```bash
grunt --gruntfile Gruntfile-production.js
grunt --gruntfile config/grunt/frontend.js
```

~~~~

You can either have several Gruntfiles.
Each one can represent separate environments, different topics or whatsoever.

Organise them in a way which truly speaks within your team.

@@@

## Modular Gruntfile

```javascript
grunt.initConfig({
  less: require('./grunt/less.js'),
  watch: require('./grunt/watch.js')
});
```

~~~~

Another solution is to keep a single Gruntfile and to split its content.

As a reminder, a Gruntfile is JavaScript and the `grunt.initConfig` expects to receive a JavaScript.

So we only need to care about providing a JavaScript object as a configuration file, really.

@@@

## Domain based modular Gruntfile

```javascript
grunt.initConfig([
  require('./grunt/frontend.js'),
  require('./grunt/performance.js'),
  require('./grunt/deploy.js'),
].reduce(_.merge, {});
```

~~~~

If you want to organise your files in a domain-oriented fashion,  we can split up the configuration this way and augment the configuration object.

This way, each required file would return a JavaScript object which would be merged with the previous one.

This approach is naive but you get the idea of what you can do.

@@@

<!-- .slide: data-state="contrasted" -->

## Variables

~~~~

As the name states, a variable is a way to store a reusable value in different places.

@@@

```javascript
grunt.initConfig({
  less: {
    main: {
      src: 'src/**/*.less',
      dest: 'dist/assets/main.css'
    }
  },
  watch: {
    stylesheets: {
      src: '<%= less.main.src %>',
      tasks: ['less']
    }
  }
});
```

~~~~

As they are evaluated after the `initConfig` step, it means you have access to every other part of the Gruntfile configuration at any moment.

@@@

## Variables in globbing patterns

```javascript
grunt.initConfig({
  now: (new Date).getFullYear(),
  folders: '{2008..<%= now %>}',

  // …
});
```

~~~~

You can define your own variables and use them in globbing patterns for instance

@@@

## Over and over…

```javascript
grunt.initConfig({
  now: (new Date).getFullYear(),
  folders: '{2008..<%= now %>}',
  assemble: {
    slides: {
      src: '<%= folders %>/*/index.md',
      dest: 'dist/'
    }
  },
  mdlint: {
    all: { src: '<%= assemble.slides.src %>' }
  }
});
```

@@@

## Command line variables

```javascript
grunt.initConfig({
  year: grunt.option('year') || '*',

  assemble: {
    posts: {
      src: 'src/<%= year %>/*.md',     
      dest: 'dist/'
    }
  }
});
```

~~~~

Grunt exposes the `grunt.option` API 
Did you know the `<%= templates %>` are evaluated JavaScript expressions?

So you could use that to reduce the amount of processed documents.

@@@

```bash
# everything
grunt assemble

# just 2014 blog posts
grunt assemble --year=2014
```

~~~~

So we could regenerate all the blog posts or only a subset of them based on a year value.

@@@

## Alternative command line


```bash
grunt assemble:posts:2014
```

@@@

```javascript
grunt.initConfig({
  assemble: {
    year: '<%= grunt.task.current.args[0] || "*" %>',

    posts: {
      src: 'src/<%= year %>/*.md',     
      dest: 'dist/'
    }
  }
});
```

@@@

<!-- .slide: data-state="contrasted" -->

## Asynchronous task loading

~~~~

Grunt 0.4 performs a lot of actions in a blocking fashion.

If your Gruntfile starts to become massive, running a task can become slow just because Grunt needs to load every task before being able to run one. Every. Single. Time.

@@@

## From

```javascript
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('images', ['copy:standardImages', 'responsive_images', 'imagemin']);
```

## To

```javascript
grunt.registerTask('images', [], function () {
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.task.run('copy:standardImages', 'responsive_images', 'imagemin');
});
```

~~~~

[As coined by Tom Maslen](https://github.com/gruntjs/grunt/issues/975#issuecomment-29058707) in the Grunt issue #975: simply create a task which registers the heavy ones.

@@@

## `jit-grunt`

Automatic task lazy loading.

~~~~

Otherwise, `jit-grunt` is an npm package which will auto load your grunt plugins when they are needed.

> https://github.com/shootaroo/jit-grunt

@@@

<!-- .slide: data-state="contrasted" -->

## Parallel tasks

@@@

<!-- .slide: data-background="images/compiling.png" -->

~~~~

Sometimes you also wait (and waste time) because some tasks are long and performed sequentially. If they do not rely on each other, run them in parallel to save time.

I mean, why waiting for your Sass files to be compiled before processing your images, or your JavaScript?

@@@

## `grunt-concurrent`

```javascript
grunt.initConfig({
  concurrent: {
    frontend: [
      'sass:main',
      'sass:widgets',
      'assemble:posts'
    ],
    deploy: [
      'rsync:aws',
      'rsync:ssh'
    ]
  }
});
```
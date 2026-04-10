---
Attention: Back to the days, do you remember how painful the frontend tooling was? Every single developer had to manually install the necessary toolchain, which was uneven amongst the various OSes. And what are we doing now? Sterile debates on grunt vs. gulp vs. broccoli vs. brunch vs.…
Benefits: So instead of following the hype of reinventing the wheel, you will learn how to create your proper grunt tasks, with testable and portable code. 
Credentials: I have been using grunt before it took off, since early 2012. Last year I optimised and unit tested the entire BBC News frontend toolchain. I also authored and contributed to public and private grunt modules to improve projects efficiency.
Direction: I will go through the expectations of a task runner, from the first install to a complex custom task, including the testing phase.

Conclusion: As in programming as in photography, a good tool is the one which is not limiting your task accomplishment. If you use grunt as a wrapper for your code organised in libraries, you will never have to worry about switching to the newest tool fitting your needs.
---

# Every day

I hate routine.

Well, I thought I hated routine.

One day I was waiting for the tramway, I took this picture. I just had my phone so I used it.

The day after I was waiting for the tramway to go and see a customer. Again, I took a picture.

And I did it, again and again. Each time I added a thought, a memory or a feeling I had this day.

I realised what I feared in the word *routine* was the implied passiveness of an action.

I discovered I could turn the routine into an *active task* of creativity.

# What the point of it?

Well, we could this eventually boring task of going out of bed and going to work as tedious and a waste of time.

So is compiling CSS, optimising images, generating documentation, deploying Web pages, checking the quality of the code, running tests on 5 browsers at the same time or stripping unused frontend code.

We do not want to think about it. We want those tasks to be performed. Not us to perform them.

# Level 0: stone age

Because this is how it was back in the days.

How did you enforce a JavaScript code style in 2010?
How did you check the sanity of the code before deploying it?

We delegated what we could delegate to tools like YUICompressor or Sass. When they eventually became available.

(screenshot of YUICompressor CLI)

You needed to have the proper version of Java to be available in the `$PATH`. You needed the proper command line arguments to be given to those tools.

Writing a `Makefile` was probably the best solution to hide the complexity. (If you were not using Windows).

Tools evolved.
Some got some love with GUIs.
(screenshot of Tower)

Some got integrated in our coding editors and IDEs.
(screenshot of Webstorm LESS compiler)

So we faced two problems.

We had to *agree* and to *make sure* that everybody install and run a tool producing a compatible output.

We could not easily and consistently share *how* and *what* the tasks would process.

Tedious task huh?

# Level 1: using a task runner

So enters Grunt.

The last time I gave a talk about grunt, the first question during the Q&A was… *what is grunt?*

;-)

Grunt describes itself as a **task runner**.

What is a *task*?
A task is a repeatable action with a predicable outcome.

Grunt acts as a *bridge* between your *project codebase* and a *set of actions*.
Grunt has no opinion on the nature of the tasks you should perform.
Grunt neither enforces a particular workflow.

You literally have thousands of plugins awaiting to be configured in order to perform defined actions.

What if we want to compile LESS files into CSS?

```bash
npm i -g grunt-cli
npm i --save grunt grunt-contrib-less
```

Then we configure the task:

```javascript
// Gruntfile.js
module.exports = function(grunt){
  grunt.initConfig({
    less: {
      all: {
        src: 'src/less/**/*.less',
        dest: 'dist/stylesheets/all.css'
      } 
    }
  });
};
```

Now the configuration is *shared* amongst your project.
Anybody who has access to your code can perform any task they want or need.

```bash
cd my/project && git pull
npm install
grunt less
```

Job done!

Sharing your tooling is sharing the knowledge.
It acts as a documentation of the *process*.

And anybody comfortable with JavaScript can run and/or configure tasks. Which broadens and eases the adoption of prior painful and cumbersome tasks.

# Level 1 : not using Grunt

What if we would not use grunt for simple tasks.

A simple task is an action which has only a couple of different configurations.

Anybody knows a good alternative for that?

`npm run`

Simple. Native. Less dependencies. Easier configuration.

Yesterday someone talked about `grunt-http`. This is something you can do without grunt.

```javascript
/* package.json */
{
  "scripts": {
    "reload": "curl --head http://coldfusion-host:8000/cfm?action=reload"
  }
}
```

```bash
npm run reload
```

<recap from previous talk>

# Level 2 : tidy configuration

Now we are using Grunt, you might need to scale its usage within your working group.

Next up are tips and organisation tricks based on my experience and on a two weeks spike at BBC News. It is not meant to be exhaustive: I just like them because they are simple and easy to remember. Thus to reproduce over and over.

## Logical target naming.

Having a single target is easy and fast to write at first.

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

It can become long and tedious to maintain on the long run.

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

It is better to reflect the intent of a target.
The UNIX-style filename patterns are also here to keep things simple.

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

## Logical task execution.

The next step after the target are the tasks.

You can create your own simply by referring to the existing ones name:

```javascript
grunt.registerTask('build-assets', ['less', 'uglify']);
```

In that case, `build-assets` will obviously care about building he assets for your frontend. Through its name, you know that task's responsibility is to do so.

You do not necessarily need to call all the targets of a task as well.

```javascript
grunt.registerTask('build-front', ['less:frontend', 'uglify:frontend', 'jshint', 'karma']);
```

And again, as the things grow up, we might want to either reduce the time or to not repeat all the tasks, all the time.

So we can split them up as *full* tasks and *fast* tasks.

The fast tasks are supposed to be triggered manually.
Because you know you satisfy the prerequisites.
Because you want to save some unneeded extra seconds of processing.

```javascript
grunt.registerTask('deploy-fast', ['rsync:production']);

grunt.registerTask('deploy', ['build-assets', 'deploy-fast', 'cleanup']);
```

## Logical task file organisation

We do all our best to keep things as small as possible but sometimes, you end up doing really a lot of things in a Gruntfile.

You have several options to reduce the overall size of a Gruntfile.

You can either have several Gruntfiles.
Each one can represent separate environments, different topics or whatsoever.

Organise them in a way which truly speaks within your team.

```bash
grunt --gruntfile Gruntfile-production.js
grunt --gruntfile config/grunt/frontend.js
```

Another solution is to keep a single Gruntfile and to split its content.

As a reminder, a Gruntfile is JavaScript and the `grunt.initConfig` expects to receive a JavaScript.

So we only need to care about providing a JavaScript object as a configuration file, really.

```javascript
grunt.initConfig({
  less: require('./grunt/less.js'),
  watch: require('./grunt/watch.js')
});
```

If you want to organise your files in a domain-oriented fashion,  we can split up the configuration this way and augment the configuration object:

```javascript
grunt.initConfig([
  require('./grunt/frontend.js'),
  require('./grunt/performance.js'),
  require('./grunt/deploy.js'),
].reduce(_.merge, {});
```

This way, each required file would return a JavaScript object which would be merged with the previous one.

This approach is naive but you get the idea of what you can do.

## Variable pattern.

As the name states, a variable is a way to store a reusable value in different places.

As they are evaluated after the `initConfig` step, it means you have access to every other part of the Gruntfile configuration at any moment:

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

You can define your own variables and use them in globbing patterns for instance:

```javascript
grunt.initConfig({
  now: (new Date).getFullYear(),
  folders: '{2008..<%= now %>}',

  // …
});
```

And even expand over and over:

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

## From the command line

Grunt exposes the `grunt.option` API 
Did you know the `<%= templates %>` are evaluated JavaScript expressions?

So you could use that to reduce the amount of processed documents:

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

So we could regenerate all the blog posts or only a subset of them based on a year value:

```bash
# everything
grunt assemble

# just 2014 blog posts
grunt assemble --year=2014
```

You can achieve the same by using extra task parameters and the `grunt.task.current.args` array, although it is more limited:

```bash
grunt assemble:posts:2014
```

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

## Asynchronous task loading.

Grunt 0.4 performs a lot of actions in a blocking fashion.

If your Gruntfile starts to become massive, running a task can become slow just because Grunt needs to load every task before being able to run one. Every. Single. Time.

[As coined by Tom Maslen](https://github.com/gruntjs/grunt/issues/975#issuecomment-29058707) in the Grunt issue #975: simply create a task which registers the heavy ones.


From:
```
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('images', ['copy:standardImages', 'responsive_images', 'imagemin']);
```

To:
```javascript
grunt.registerTask('images', [], function () {
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.task.run('copy:standardImages', 'responsive_images', 'imagemin');
});
```

Otherwise, `jit-grunt` is an npm package which will auto load your grunt plugins when they are needed.

> https://github.com/shootaroo/jit-grunt

## Parallel task running.

(compiling)

Sometimes you also wait (and waste time) because some tasks are long and performed sequentially. If they do not rely on each other, run them in parallel to save time.

I mean, why waiting for your Sass files to be compiled before processing your images, or your JavaScript?

`grunt-concurrent` is a neat package to decide which tasks you want to parallelise.

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

# Level 3 : your very own task

Even though the Grunt ecosystem is extremely wide and varied, you will not necessarily find a plugin which does what you want, or the way you want.

Maybe you should consider contributing to a relevant plugin before starting your own flavour of it.

Otherwise, let's create our first task.

Let's say we have an online spreadsheet which contains translations. This is handy because it has all the needed UI to handle collaboration and so on.
We would like to retrieve it to create a translation catalogue back in our application.

Eventually we would like to call it this way:

```bash
grunt i18n:scottish
```

But wait a moment, if we write a Grunt task, how can we switch over the newest and trendiest tool ever? Does it imply we have to rewrite everything over and over? A kind of tedious task we are actually fighting against…

Hopefully no we do not need to.

Let's reconsider a custom Grunt task for two seconds.

This is:

- configuration (the Gruntfile)
- orchestration (the `grunt` package)
- business logic (this is you)
- tests (this is you, again)
- documentation (this is you, still)

## Configuration

We simply needs to declare the custom task in the Gruntfile:

```javascript
module.exports = function(grunt){
  grunt.initConfig({
    'i18n': {
      url: 'https://drive.google.com/…'
    }
  });

  grunt.loadTasks('./lib/grunt');
};
```

This will load any JavaScript file within this folder and will call each module while passing `grunt` as an argument.

## Orchestration

This is where the orchestration part falls into.

We want that file to be responsible of dealing with the task, and nothing else. We want it to be the last piece of code to contain references to `grunt` or anything related to its API.

```javascript
/* ./lib/grunt/remote-i18n.js */
module.exports = function(grunt){
  grunt.registerTask('i18n', function(lang){
    grunt.requiresConfig('url');

    var url = grunt.config.get('url');
    var done = this.async();

    if (!lang) {
      grunt.fail.fatal('No lang provided.');
    }

    require('./i18n.js').run(url, lang, done);
  });
};
```

## Business logic

And here is how we expose the `i18n.js` module's business logic:

```javascript
var async = require('async');

module.exports = {
  run: function(url, lang, done){
    var self = this;

    async.waterfall([
      self.download.bind(self, url),
      self.locateLanguage.bind(self, lang),
      self.writeJSON.bind(self, lang)
    ], done);
  }
};
```

An overall view:

```javascript
var async = require('async');

module.exports = {
  run: function(url, lang, done){},
  download: function(url, done){},
  getSheetFromCSV: function(lang, csv, done){},
  writeJSON: function(lang, sheet, done){}
};
```

And a possible take on the download action:

```javascript
var request = require('request');
var util = require('./csv-utils.js');

module.exports = {
  download: function(url, done){
     request.get(url, function (error, response, body) {
       if (error) throw Error('Request error');
       if (response.statusCode !== 200) throw Error('Could not find  translation spreadsheet');
       if (!body) throw Error('Spreadsheet body is empty');

       var csv = util.CSVToArray(body);
       done(null, csv);
     });
  }
};
```

## Tests

What do we test? The whole Grunt task?

Grunt is already tested by its team. So we are only interested to test our API. Because this is what we designed. An API.

```coffescript
var download = require('../lib/i18n.js').download;

describe('download', function(){
  it('should fail if host does not exist', function(done){
    download('http://dummyHost', function(error){
      expect(error).to.be.an(Error);
      done();
    });
  });

  it('should raise an error on unexpected spreadsheet format', function(){
    // …
  });
});
```

## Documention

Even if it an internal codebase, a lightweight documentation is more than welcome.

The task of writing a documentation (like a README) is your incentive to reduce misuses of your code.

This is also a way to make people working faster and better, sooner.

And if you feel proud and okay with it, you are now not so far from running the `npm publish` command ;-)

# Conclusion

Writing our own Grunt tasks implies to design an API.

We ask Grunt to orchestrate our API as a runnable and configurable task. The only effort you will have to make in the future is… coding some new wrapper around your library.

You can apply this to many many things in your JavaScript software: jQuery plugins, Node Express routes, command line programmes etc.

A major benefit of Grunt or whatsoever is the tooling and its configuration are shared alongside the project codebase.

So far we have not really noticed that Grunt was *that* bad.
In photography like in software programming, the tool is just a helper to perform a task. The constraint of the tool is your creativity catalyst.

Enjoy your routine ;-)
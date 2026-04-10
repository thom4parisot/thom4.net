## Level 1: using a *task* runner

<!-- .slide: data-background="images/day1.jpg" -->

@@@

<!-- .slide: data-state="attention" -->

~~~~

So enters Grunt.

The last time I gave a talk about grunt, the first question during the Q&A was… *what is grunt?*

But you should already know it with the past 3 or 4 talks mentioning this tool ;-)

@@@

<!-- .slide: data-state="contrasted" -->

## Grunt is a *task* runner

But what is a *task*?

<!-- .element: class="fragment" data-fragment-index="1" -->

@@@

## A *task* is a *repeatable* action with a *predictable* outcome.

@@@

## A *bridge* between your codebase and your workflow.

~~~~

Grunt acts as a *bridge* between your *project codebase* and a *set of actions*.

Grunt has no opinion on the nature of the tasks you should 
perform.

Grunt neither enforces a particular workflow.

@@@

## *Less*

One *task* amongst ~3000.

@@@

## Setup

```bash
npm i -g grunt-cli
npm i --save grunt grunt-contrib-less
```

@@@

## Configuration

```javascript
/* Gruntfile.js */
module.exports = function(grunt){
  grunt.initConfig({
    less: {
      all: {
        src: 'src/less/**/*.less',
        dest: 'dist/stylesheets'
      } 
    }
  });
};
```

@@@

## Running the task

```bash
grunt less
```

@@@

<!-- .slide: data-background="images/job-done.gif" -->

## Job done!

Configuration + workflow are shared <3

~~~~

Now the configuration is *shared* amongst your project.
Anybody who has access to your code can perform any task they want or need.

Sharing your tooling is sharing the knowledge.
It acts as a documentation of the *process*.

And anybody comfortable with JavaScript can run and/or configure tasks. Which broadens and eases the adoption of prior painful and cumbersome tasks.

@@@

## But what *if*…
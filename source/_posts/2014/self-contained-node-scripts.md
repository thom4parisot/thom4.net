---
title: Self-contained Node.js scripts
date: 2014-10-02 10:00:00
lang: en-GB
categories:
- JavaScript
tags:
- node.js
- npm
- scripts
- automation
cover:
  url: /images/2014/10/arles-cat.jpg
---

Deploying Node applications should be a straightforward task.
For some reasons, you can read here and there that additional dependencies need to be installed **globally**.

Which is generally very rarely needed.

<!--more-->

# tl;dr

You will learn how to create **tidy one line Node.js installs** and how to **distribute complimentary tooling** for advanced users and developers.

# Global install

Global install of Node modules is designed for **system-wide command-line applications**.

If you request your users to install *additional* and *global* Node modules in order to use your app… well, it works but it is wrong. And please, [don't make Soledad angry](http://soledadpenades.com/2014/08/22/keeping-clean/) ;-)

It is wrong because it adds **extraneous implicit steps** in the install process. And worse, it exposes you to **global version conflicts**.
If a module asks for `npm install -g browserify@1.0.0` and another one asks for `npm install -g browserify@5.0.0`, you are screwed up in a way or another.

It is okay to install global modules for **unique executables** (like [npm](https://npmjs.org/npm)) or **global wrappers** (like [grunt-cli](https://npmjs.org/grunt-cli) or [gulp-cli](https://npmjs.org/gulp-cli)).

So what if you want to *provide* executables to your standalone application? Like building, updating data from a registry or whatever? Well, you have two choices:
- provide an **executable Node module** (in the `./bin` folder of your app for example);
- use **npm scripts**.

![](/images/2014/10/jersey-lighthouse.jpg)

# Understanding the *npm scripts* environment

The `npm` executable exposes a *script mechanism* through the `run` action. It will basically look for a matching script entry in your `package.json` and will run it as a shell command.

Let's say we want to expose a command responsible for our code linting:

```bash
npm run lint
```

We could use [jshint](https://npmjs.org/jshint) to do so. And as  *jshint* exposes an executable, it will be symlinked as `node_modules/.bin/jshint` during the install process.
In a `package.json` fashion, it would result in:

```js
{
  "title": "my-awesome-module",
  "scripts": {
    "lint": "./node_modules/.bin/jshint ./src"
  },
  "devDependencies": {
    "jshint": "^2.5.1"
  }
}
```

The trick is *any npm command* prefixes the `$NODE_PATH` variable for the duration of the command only (no global leak).
In other terms, Node will first look for local executables before looking for globally available ones.

Our `package.json` can be shortened as:

```js
{
  "title": "my-awesome-module",
  "scripts": {
    "lint": "jshint ./src"
  },
  "devDependencies": {
    "jshint": "^2.5.1"
  }
}
```

Neat!

And by keeping npm tasks command simple and explicit, you can *silently upgrade* the underlying process. We could provide HTML linting to our previous command for free:

```js
{
  "title": "my-awesome-module",
  "scripts": {
    "lint": "npm run lint-js && npm run lint-html",
    "lint-js": "jshint ./src",
    "lint-html": "htmlhint -c .htmlhintrc ./src/**/*.html"
  },
  "devDependencies": {
    "jshint": "^2.5.1",
    "htmlhint": "^0.9.5"
  }
}
```

This is your *Two for One* meal deal! Vinegar chips are not included.

I see two major benefits in that technique:
- it is a good way to provide a **tooling as a habit** — `npm test` will run whatever `Makefile test` or `karma` command is called under the hood;
- the tooling is *shipped* with and *scoped* to your application.

You can read more on [npm-based task automation on substack's blog](http://substack.net/task_automation_with_npm_run).

![](/images/2014/10/jersey-jetty.jpg)

# Advanced npm scripts

With the recent release of `npm@2.0.0`, we now have the ability to pass extra parameters to our `run` commands.
These arguments will be simply appended to your script command.

In a nutshell, we now have *proxy scripts*:

```bash
npm run lint-js -- --version
> jshint v2.5.5
```

[Cordova](https://npmjs.org/cordova) users will be happy to enjoy the long-awaited inception:

```js
{
  "scripts": {
    "build": "npm run cordova -- build ios android",
    "start": "npm run cordova -- serve 8000",
    "cordova": "cordova --verbose"
  },
  "devDependencies": {
    "cordova": "^3.6.0"
  }
}
```

# Hardcore fatality: `npm install -g` is impossible

It happens sometimes you cannot even either install a module globally. Or a global wrapper module is incompatible with your local scripts.

In that case, enclose your usual global Node executables as local dependencies:

```js
{
  // …
  "scripts": {
    "less": "grunt less --some=arg"
  },
  "devDependencies": {
    "grunt-cli": "^0.1.13",
    "grunt": "^0.4.0",
    "grunt-contrib-less": "^0.11.0"
  }
}
```

Again, it is not ideal but everything is installable at once as long as the npm command is globally available on your system.

# Conclusion

Meanwhile people argue on which is the best ephemeral tooling system between Grunt, Gulp and Broccoli, we benefit of a suitable and long-term task mechanism since the early days of `npm run-script`.

Whereas npm tasks are not always perfect and can hardly scale for large projects or for multiple executable targets (enters Task/Build systems), they are **efficient for small to medium sized projects**.

Moreover, **the combination of Node dependencies and the npm task environment** is great to fulfil a **flexible yet simple install** and runnable Node.js system.
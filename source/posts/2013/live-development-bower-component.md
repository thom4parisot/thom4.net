---
title: Live Development of a Bower Component
date: 2013-08-15 10:00:00
tags:
- bower
- components
categories:
- JavaScript
- WebDev
lang: en-GB
cover: /images/2013/08/bower-component.png
---

You created a [Bower component](http://bower.io/) to make your frontend code reusable. You release new updates and you are happy.

You also have *Web software project*. You release new updates and you are happy.

At some point, you would like to **develop your Bower component within the Web project**, and release both of them independently and only after the feature is complete.

<!--more-->

## tl;dr

`bower link` is a powerful but not well advertised feature. I will explain how to use it as part of a real project architecture.

## Project Architecture

Here is a sample Bower component architecture:

```
my-bower-component/
├── bower.json
└── main.js
```

A simple package descriptor with a JavaScript component, ready to use. We manage this as an *independant codebase*, somewhere on our computer.

On the other hand, here is how a *regular project* could be handled, in another place of our computer:

```
exce££ent-hackday-project/
├── bower.json
├── bower_components
│   ├── my-bower-component
│   │   ├── bower.json
│   │   └── main.js
│   └── semicolon.js
│       ├── LICENSE
│       ├── README.md
│       └── semicolon.js
├── public
│   └── main.min.js
└── src
    ├── bootstrap.js
    └── headlines.js
```

Two Bower components are installed through the `bower install` command, `my-bower-package` and `semicolon.js`. Because we all need a [rocket stellar modern JavaScript framework](https://github.com/madrobby/semicolon.js) to brew some coffee.

These dependencies are managed as following thanks to the `bower.json` file:

```javascript
{
  "name": "exce££ent-hackday-project",
  "version": "1.0.0",
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test",
    "tests"
  ],
  "dependencies": {
    "my-bower-component": "~1.33.7",
    "semicolon.js": "https://github.com/madrobby/semicolon.js.git"
  }
}
```

This is neat but it also means **we rely on remote repositories to receive new updates**. The only way to receive updates in `my-bower-component` is to bump a version upper to `1.33.7` (like `1.33.8`, `1.33.10` or more). It is suitable for a production use, but what if we want to use a local development version of `my-bower-component` at the same time?

![Number Fourteen](/images/2013/08/9284896914_061aa85475_z.jpg)

## Enters Bower Link

The first time I’ve read the `bower link --help` documentation, I found the explaination confusing. What is a *project*? What is *some other package*?

Well, here it goes.

In our `my-bower-component` workspace, `bower link` will register the package as *available to be linked*. But it will have no other effect anywhere else, yet:

```bash
$ bower link
bower link /Users/myUser/.local/share/bower/links/my-bower-component > /private/tmp/my-bower-component
```

Back to our Web project directory, containing `my-bower-component` in the `dependencies` part of the `bower.json`, we will then type:

```bash
$ bower link my-bower-component
bower link /private/tmp/project/bower_components/my-bower-component > /Users/myUser/.local/share/bower/links/my-bower-component
```

Now, **your project will benefit from every file change** of the `my-bower-component` component. Exactly what we wanted.
The project tree structure is now the following:

```
├── bower.json
├── bower_components
│   ├── my-bower-component -> /Users/myUser/.local/share/bower/links/my-bower-component
│   └── semicolon.js
│       ├── LICENSE
│       ├── README.md
│       └── semicolon.js
├── public
│   └── main.min.js
└── src
    ├── bootstrap.js
    └── headlines.js
```

**It simply symlinked the component for us**. You may have done that by hand but it provides some extra sugar: the next time you do `bower update`, it will wash the symlink away and any version complying with the [semver spec](http://semver.org) as defined in your `bower.json` file. Back to the normal.

This is particularly useful for the following use cases:

* **prototyping a Bower component** before releasing it in the wild (you can link it even if it’s not yet available in the bower registry)
* **testing a new feature in a live project**
* **checking why a component is failing** to work as expected despite its unit and functional tests are fine

Have you found another use case? You disagree with this way of doing? Share your insight in the comments below :-)

title: Live Development of a Bower Component
date: 2013-08-15 10:00:00
tags:
- bower
- components
categories:
- JavaScript
- Développement Web
lang: en-GB
---

You created a [Bower component](http://bower.io/) to make your frontend code reusable. You release new updates and you are happy.

You also have *Web software project*. You release new updates and you are happy.

At some point, you would like to **develop your Bower component within the Web project**, and release both of them independently and only after the feature is complete.

<!--more-->

## Project Architecture

```
exce££ent-hackday-project/
├── bower.json
├── lib
├── public
└── src
    ├── bootstrap.js
    ├── headlines.js
    └── vendor
        ├── my-bower-package
        │   ├── bower.json
        │   └── main.js
        └── semicolon.js
            ├── LICENSE
            ├── README.md
            └── semicolon.js

```

## Bla


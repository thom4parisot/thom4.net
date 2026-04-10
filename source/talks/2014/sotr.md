---
title: Solid Grunt
lang: en-GB
date: 2014-06-06
category: [Talk]
event:
  name: Scotch on the Rocks
  location: Edinburgh
  url: http://2014.sotr.eu/speakers.html#thomasparisot
video:
slides:
  -
    class: contrasted
    file: intro-quotes.md
  -
    file: greetings.md
  -
    file: ../../_about-me.md
  -
    class: contrasted
    file: title.md
  -
    file: story.md
  -
    file: level-0.md
  -
    file: level-1.md
  -
    file: level-1bis.md
  -
    file: level-2.md
  -
    file: level-3.md
  -
    file: conclusion.md
---

We use Grunt plugins and the `Gruntfile.js` to achieve common and repetitive tasks.

Sometimes, we have to bake our own business logic so we write code. And it works.
How do we test it? By running the code. How do we reuse the code? We don't it's a Grunt task.

I'll explain the story of the BBC News refactoring of Grunt tasks, how it has been simplified and fully tested.
Thanks to that, you will be able to write not only code but **testable features** and **tricks** to optimise your `Gruntfile.js`.

title: Back from Write the Docs Europe 2014
lang: en-GB
date: 2014-04-10 10:00:00
tags:
- documentation
- budapest
categories:
- Évènements
cover:
  link: https://www.flickr.com/photos/the-jedi/13588247484/
  url: //farm8.staticflickr.com/7082/13588247484_4529ca2814_c_d.jpg
---

[Write the Docs EU 2014](conf.writethedocs.org/eu/2014/index.html) is now over. Attending this conference has been a great opportunity to discover a new community: **technical writers** and **documentarians**.

<!--more-->

## tl;dr

This blog post is a **personal understanding of the actual state of documenting software projects**. The Python community, Read the Docs and GitHub has played an essential role in the evolution of  this (f)actual state.

## State of the Documentation

I have never paid much attention to documentation softwares.  
The few times I did, I found them too complicated to use. Their learning curve, barrier to entry or licence prise are too high. I might have been able to use Sphinx but it was far away from my ecosystems, which were PHP and JavaScript at the time.  
Therefore I always focused on ad-hoc wiki documentation before favouring README Driven Development circa 2011, when I definitely switched to a full JavaScript stack with *Node.js*.

Which is great at some point because *Write the Docs* has been a good excuse to have a fresh look on a rising community within the software industry.

This is somewhat strange to discover the job of *technical writers*. Like just now, in 2014.  
**I naturally thought the technical documentation was under the responsibility of developers**. And that the end-user documentation was a joint work with the marketing team.

Still, the **documentation is still not yet a first class citizen in projects**. In term of design, maintenance and eventually language availability.  
For what I have seen, it was the case only in big IT organisations such as Red Hat or Apache.

[Restructured Text](), [Sphinx]() and [Read the Docs]() is a good combination to write, publish and maintain documentation at a large scale with a minimalistic hassle.  
To quote [Sebastien Goasguen](http://sebgoa.blogspot.com/), *Read the Docs is a nice at least for the **edit on GitHub** link*. It helped dramatically to increase external contribution and thus to raise the documentation quality.

**The community was mostly Python focused**. This might be a bias from the previous point though.  
I would like to see more of the work from other programming language communities to learn more about their way of addressing documentation.

When it is related to translation, it seems that [Transifex]() is the best available collaborative translation tool. It is free for Open Source projects, paid otherwise.  
Even though the translation memories comes only with Enterprise plans.

## Maintaining a Documentation is a Real Work

I have been a bit shocked by the number of times I heard **developers simply do not want to write documentation because it is not part of their job** (*sic*). I also remember back in the days, that was the last minute job we would take care about, because it was not rewarding and painful to do.  
One the main excuse is coding is more important than communicating. Whereas today I would favour hiring someone more incline to communicate rather than aiming at code excellence.

Welcome to the *documentarians* world!



- documentations can target multiples products/flavours of products (Confluence has some nice way to handle them)
- dealing with translations is not that easy (as you cannot master all the languages, so you have to trust and enable contributions — see next example)

## Towards Collaborative Documentations

http://sebgoa.blogspot.com/2014/03/migrating-from-publican-to-sphinx-and.html

+ Fintan Bolton - The community wrote my docs!
> Summary: http://allnarfedup.com/2014/04/01/write-the-docs-eu-community-wrote-my-docs/

## GitHub Alredy Changed the World

- edit in GitHub improved
- free code/doc/whatever hosting
- 

## Discussions: Measuring Contribution Quality

- commits
- documentation update on PR
- à la joblint/eslint for PR and projects?

## My Talk: README Driven Development

## What is Next?

- tinkering my Grunt JSDoc documentation generator
- thinking about sharing an Asciidoc + Open Office Template workflow to publish books with modern tools
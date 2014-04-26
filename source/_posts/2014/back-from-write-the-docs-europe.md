title: Back from Write the Docs Europe 2014
lang: en-GB
date: 2014-04-09 19:10:00
tags:
- documentation
- budapest
- public speaking
- readme
categories:
- Events
cover:
  link: https://www.flickr.com/photos/the-jedi/13588247484/
  url: //farm8.staticflickr.com/7082/13588247484_4529ca2814_c_d.jpg
---

[Write the Docs EU 2014](http://conf.writethedocs.org/eu/2014/) is now over. Attending this conference has been a great opportunity to discover a new community: **technical writers** and **documentarians**.

<!--more-->

## tl;dr

This blog post is a **personal understanding of the actual state of documenting software projects**. The Python community, [Read the Docs](https://readthedocs.org/) and GitHub are playing an essential role in the evolution of this (f)actual state.

## State of the Documentation

I have never paid much attention to documentation softwares until now. The few times I did, I found them too complicated to use. Their learning curve, their barrier to entry or their licence prise are too high. I would have might been able to use Sphinx but it was far away from my programming ecosystems, which were PHP and JavaScript at the time.

Therefore I always focused on ad-hoc wiki documentation before favouring [README Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) circa 2011. At that time, I definitely embraced the [npm](https://npmjs.org) philosophy when I moved towards a full JavaScript stack with [Node.js](http://nodejs.org/).

Which is great at some point because [Write the Docs](http://conf.writethedocs.org/) has been a good excuse for me to have a fresh look on a rising community within the software industry.

This is somewhat strange to discover the job of *technical writers*, just now, in 2014.
**I naturally thought the technical documentation was under the responsibility of developers**. And that the end-user documentation was a joint work with the marketing team.

Still, the **documentation is not yet a first class citizen in projects**. In term of design, maintenance and eventually language availability. For what I have seen and understood, it was the case only in big IT organisations such as Red Hat, Apache or the BBC.

[reStructuredText](http://docutils.sourceforge.net/rst.html), [Sphinx](http://sphinx-doc.org/) and [Read the Docs](https://readthedocs.org/) is a good combination to write, publish and maintain documentation at a large scale with a minimalistic hassle.
To quote [Sebastien Goasguen](http://sebgoa.blogspot.com/), *Read the Docs is nice at least for the **edit on GitHub** link*. It helped dramatically to increase external contribution and thus to raise the documentation quality.

**The community was mostly Python focused**. This might be a bias from the previous point though.
I would like to see more of the work from other programming language communities to learn more about their way of handling documentation.

When it is related to translation, it seems that [Transifex](https://www.transifex.com/) is the best available collaborative translation tool. It is free for Open Source projects, paid otherwise.
Even though the translation memories comes only with Enterprise plans.

![](/images/2014/04/budapest-underground.jpg)

## Maintaining a Documentation is a Real Work

[Write the Docs](http://conf.writethedocs.org/eu/2014/) has been a good event to teach me the following things:
1. documenting can be a *full time job*;
1. how to have a single documentation targeting *product variations*;
1. how to address the extra level of complexity of *translations*.

I have been a bit shocked by the number of times I heard that **developers simply do not want to write documentation because it is not part of their job** (*sic*). I also remember back in the days, writing the documentation was the last minute job we would take care about, because it was not rewarding and painful to do.
One the main excuse is that coding is more important than communicating. Whereas today I would favour hiring someone more incline to communicate rather than aiming at code excellence.

Welcome to the *documentarians* world!

I never realised the complexity induced by having multiple flavours of a software. Like an Open Source version and a commercial version. Two approaches have been discussed:
- the **delta approach**; by applying to *Product B* the content delta of *Product A* documentation (maintaining a delta between B and A is too difficult);
- the **content variant approach**; by using content variables and conditional blocks to display the right content for the right product.
*Atlassian Confluence* seems to provide a pretty neat way to address that.

I also discovered two difficulties for translations.

The first one relates to the translation capacity: how do you deal with the documentation and software translation for a region of the world you do not have any knowledge?
You pay for the translation but and most essentially, you need to enable contributions. This way users do not complain but rather help and fix the mistakes.
Another area where **making people responsible improves the working conditions**.

And finally, translating is a thing, but enabling the translation is another one. The translation tool should enable the translation of software and documentation strings as well as injecting them again in the source code, monitoring the progress and .
[Transifex](https://www.transifex.com/) seems to be the leader in this domain.

![](/images/2014/04/read-the-docs-edit-github.png)

## Towards Collaborative Documentations

**Enabling collaboration improves quality and adds a new dynamic**. At least two projects shared that learning.

[Sebastien Goasguen shared the CloudStack documentation migration process](http://sebgoa.blogspot.com/2014/03/migrating-from-publican-to-sphinx-and.html). How they moved from Docbook and [Publican](https://fedorahosted.org/publican/) to *reStructuredText* and *Read the Docs*.
[Pandoc](http://johnmacfarlane.net/pandoc/) has been very helpful, and [GitHub](https://github.com) is playing an essential role in the collaboration bit.

[Finlan Bolton explained the state of collaborative documentation at Red Hat](http://allnarfedup.com/2014/04/01/write-the-docs-eu-community-wrote-my-docs/). They managed to reach a thousand contributed pages among 6,000. This is quite a big deal!
Again, lowering the entry barrier, being inclusive and tolerant with contributions helped them improving the completeness and quality of their documentation.

## GitHub Already Changed the World

GitHub has made a huge impact in the software development world. I cannot count how many things are now built on top of GitHub.

The GitHub platform has been quoted in almost half of the talks. Because of the code hosting. Because of the way to collaborate on content. Because of GitHub Pages.
Because they have made a super easy system to make things working without the hassle of previous platforms.

They have been fast at adding features and lowering the entry barriers between our code and the Internet.
There is no doubt if something takes over git, they will follow and keep the workflow as easy as possible.

On the other hand, **I would not call GitHub a free product anymore**: if GitHub disappears, this would create a gigantic  black hole in the Internet (and so many people to comfort). Even if we have a copy of our git repos on our hard drive.

## My Talk: README Driven Development

[![](//farm3.staticflickr.com/2829/13544554865_b9b581beb8_z_d.jpg)](https://www.flickr.com/photos/an3ssen/13544554865/in/set-72157643227881314)

I have been pleased to perform my first public speaking outside of France and UK: [README Driven Development](https://oncletom.io/talks/2014/writethedocs/). [Bryan Villarin from Automattic wrote a live summary of it](http://allnarfedup.com/2014/03/31/write-the-docs-eu-readme-driven-development/). A video should be available sometime in the future.

It is a complete rewrite of a talk initially [performed at Paris Web in 2012](http://www.paris-web.fr/2012/conferences/readme-un-fichier-nomme-plaisir.php). There are a lot of additions:

- **storytelling**: [Steph Troeth](http://stephanietroeth.com/) [Sud Web's 2013](http://sudweb.fr/2013/) workshop and working at the BBC have been a huge kick forward that content delivery form. [And it worked](https://twitter.com/idangazit/status/450604271521001472)!
- **driving a project** through a README by writing it from day 1;
- **driving contributions** by using the same mechanism, by **providing a vision** among issues and pull requests.

As a summary, I encouraged people to trust their guts, to accept shallow limits and to clear things out by talking together (at the coffee machine) rather than by increasing the length of an already-too-long document.

## What is Next?

The conference gave the will the resurrect my [JSDoc to Markdown project](https://github.com/oncletom/grunt-jsdoc-md). I hope to have an interesting *Asciidoc to Open Office workflow* to share as well… and maybe some associated tools to write a book without opening neither Word nor LibreOffice.

Many interesting discussions sparked about including **documentation as a quality metric**, as an **indicator of job done** and as a way to be automatically generated through commits, pull requests and why not as a *linter* you could apply as part of your CI process.
Something lighter than [SDL Authoring Assistant](http://www.sdl.com/products/gams/) and more in the spirit of [eslint](https://github.com/eslint/eslint). But for commits/pull requests/documentation files.

And in 2015 or 2016, why not organising *Write the Docs Europe* in the beautiful [BBC Radio Theatre](http://www.bbcradioresources.com/studios/rt.html)?
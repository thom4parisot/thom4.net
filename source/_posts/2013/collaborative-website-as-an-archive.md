title: Collaborative Website as an Archive
date: 2013-10-16 10:00:00
updated: 2017-11-12 12:00:00
tags:
- Emu Nova
- experience
categories:
- WebDev
- JavaScript
lang: en-GB
cover: /images/2013/10/10162068324_f9c3836f8c_b.jpg
---

The 15th of October 2002, I transferred a PHP/MySQL website via FTP. On the first domain name I ever bought.

The 14th of October 2013, I committed 17 000 files on a `gh-pages` branch. After 7 years of work in progress.

Wait. **7 years**?

<!--more-->

- **October 2013**: initial publication
- **November 2017 Update**: [website is now built with Hugo](#november-2017-update)

## About Emu Nova

[Emu Nova](http://emunova.net) is a French retrogaming website. It debuted as a forum in early 2002. Some people were keen enough to build a different retrogaming website. *Caring* about the content and the users. Together.

I then spent my first Bachelor’s year summer holidays to learn ~~copy/pasting~~ programming PHP. What emerged at that time was a handmade PHP/MySQL frontend and a tight backend to let a few and trusted people to contribute content.

The year after, in 2003, a [wise core contributor](https://twitter.com/Sigfrodi) suggested the idea to **let the website members submitting their own retrogame reviews**. *This* is what happens when you listen to *Amiga* fans (*Atari ST gamer speaking*)!

Creating the website and experimenting the leadership of a team eventually led me to my first job right after my Bachelor. *Web Developer*.

![Emu Nova in 2002](/images/2013/10/emunova-2002-noel.jpg)

## The PHP Area Reboot Attempt

**Life went on and the audience grew**. From hundreds to thousands daily visitors. From a shared hosting to a dedicated server. A Linux box with a Plesk interface I could barely understand. It ipened my eyes on the underlying strings of the EasyPHP puppet: that PHP, MySQL and Apache were three different things. The loss of content when you reboot a server when people submit content. `iptables`. `CSRF`. `XSS`. Denormalising database schemas. That nesting MySQL queries in PHP code is easy but kills off your server as the audience grows. That an `ALTER TABLE` impacts data integrity and your sanity to double check every database query in your spaghetti code.

Eventually [I quit my first job for another one](/2007/clever-age/) (*blogpost in French*). 2007. Because I was offered to join a team of highly skilled people. The ones I was reading the blog of. They shared their vision. They shared their knowledge. **They gave me even more passion**: [@xavierlacot](https://twitter.com/xavierlacot), [@n1k0](http://nicolas.perriault.net/), [@biologeek](https://larlet.fr/), [@trivoallan](https://twitter.com/trivoallan), [@nsteinmetz](https://nicolas.steinmetz.fr/blog/) and [@clochix](https://twitter.com/clochix), to only quote them.

I **discovered** the [Symfony framework](http://symfony.com/). The [milestone 1.0 recently landed](http://symfony.com/blog/symfony-1-0-released) at that time. Magical words: OOP, MVC, ORM. Singleton are cool. Singleton are bad. The rise of jQuery. Learning to ~~copy/paste~~ program JavaScript thanks to jQuery. [Definitely moved from Windows to Ubuntu](/2007/choix-liberte-windows-linux/) (*blogpost in French*).

**I wanted everything to be Symfony**. Everything to be RAD. So I decided to rewrite Emu Nova *from scratch*. And be *even more ambitious* in the features.

I was not a student anymore. I was a *fucking* consultant. So I spent two weeks on leave to achieve this bright goal. And *failed* miserably. Not that it was not doable. But the scale of the project changed. The scope changed. But I was still one and only one.

*From scratch* does not feel the same when you have years of content you can’t get rid of. Using plugins? Yes of course. Except they were doing either *too much*, had *terrible performance* or provided an *horrific user interface*.  Creativity through the constraint they said. Except I was **running out of time**. Except I was having the feeling to spend too much time on things I achieved faster in the past.

We’ll see tomorrow. Or the day after. *When I’ll have time*.

## In Between

Anyhow, in order to satisfy the need of change, I used some new knowledge to improve the website. A happy patch. Which would not  stop the code to age. Nor the team members to age too. The motivation to scaffold something new regularly decreased as the task seemed bigger and bigger.

Time flew. Quit my job again. 2010. Became a freelancer. Less time for that leisure stuff. Priorities changed. [Symfony 2 went out](http://symfony.com/blog/symfony-2-0). Definitely not RAD. **Got sick at writing complicated code to achieve a simple task**. The feeling to be even less productive with an evolved tool. Created a startup. Got robbed. *Shit happens* (and if it had not happened yet, it will do anytime in the future).

[Duke Nukem Forever](http://en.wikipedia.org/wiki/Duke_Nukem_Forever). 2011. The game is out. Finally. It even bet me at releasing.

Meanwhile, 2012. WordPress continue its popularity ascension. I admitted this tool could totally fulfill our needs. Instead of restarting from scratch I could just twist WordPress to fit Emu Nova’s content inside. Shitload of plugins later, it was definitely too much work for highly interlinked contents. Contribution was not handy.

So again, the magic out-of-the-box-without-any-line-of-code could not replace the brain logic.

## The Trigger

Still. 2012. Spending more and more time at ~~programming~~ playing with Node.js. Fast install. Easy dependencies. Dead easy deploy. Dead easy code sharing.

The simplicity of Node.js and ES5 by default had the same effect on me as Symfony 1.0 at the time: **I rediscovered programming** (and JavaScript). Breaking the classical inheritance system. Prototype FTW. CommonJS modules. NPM. Patterns. Even more patterns. Tests. The cost of synchronicity. The beauty of the semicolon. RAD again! At least!

End of August 2013. A guy on Emu Nova forums wrote: [no activity since a couple of months, isn’t it time for a shutdown?](http://forums.emunova.net/topic/12062-fermeture-du-site/?p=227617). Meanwhile, [I attend Reasons to be Creative](/2013/they-gave-me-reasons-to-be-creative/). ~~Sketched~~ wrote in a corner of a page. I found my reasons.

**Motivation came back**. Energy and everything.

## Envisionned Architecture

The challenge emerged: **thousands of statically generated HTML pages** based on open contributed contents. [Something which would be an archive by default](http://olivier.thereaux.net/2013/01-Digital-Decay/). And not something you would like to archive at some point if it fails to work.

### What is a content website?

- content
- content you want people to read
- content people want to read
- content people can actually browse in a relevant way

Ads are content. Useless sentences are content. Content overload equals no content; invisible content. People will not want to look for the interesting bits in an ocean of shit.

Content is about representation. Raw. Processed. Targetting a machine. Targetting people. Both at the same time. Text. HTML. Whatever.

### What is a backend application?

- some place where you create/edit text content
- some tool to add meaning to words
- some moderation powers to revert/delete/alter others content
- a chaos control mechanism

When you think about it, this is exactly the same relationship between a committer and git.

### What is a collaborative website?

- a place where people can edit content
- a place where people can edit any content, even content they don’t own
- a place where people can edit any single coma or HTML tag

When you think about it. This is exactly what enables Github with ~~code~~ content. Code is interpreted/compiled content. Your brain is a massive CPU. So let’s program it!

### Bootstrapping/Assembling Ideas/Code/Content

The rework project started with [two](https://github.com/oncletom/emunova.net/commit/a51b15a20d964e7baa508d8660552d31cf45ef2e) [initial](https://github.com/oncletom/data.emunova.net/commit/9957411e285cd80c1bf54fd302ddf9abf9952f09) commits in Github repositories:

- the [**data** repository](https://github.com/oncletom/data.emunova.net): folders to classify content, Markdown files for text, JSON files for pure metadata, images for illustrations.
- the [**UI** repository](https://github.com/oncletom/emunova.net): an HTML scaffolder ([assemble](http://assemble.io)) that build Web pages and deploys them to Github Pages.

Both npm modules. Both generating outputs. Data. Ready to be consumed data.

## One Month to Build and Deliver

One month is a **limited timeframe**. Especially when you have a day job. The MVP had to be something clearly simple: neat HTML interface, straight to the point and essential content only.

This meant:

- **2 hours efforts only** (more is an ice sugar topping)
- **real content** to figure out weird edge cases (and it worked without digging a lot)
- delivery on the go
- exposing the features to people on the go
- Github would definitely be the only way to contribute for the moment (zero-code cost backend UI)
- **prototyping quickly** the main content pages, with the essential informations
- **importing the whole content as soon as possible** to leverage performance and edge cases issues
- there will be ~~blood~~ bugs
- I would be sometimes away/too tired to work

Some cool stuff happened:

- [knex.js](http://knexjs.org) and [html-md](https://github.com/neocotic/html.md) made existing data import feasible in 2 hours
- contributing to [assemble](https://github.com/assemble/assemble), for a result of 60% time saving for every build
- raising a [grunt-gh-pages](https://github.com/tschaub/grunt-gh-pages) issue which ended in an endless time saving for every build (one minute vs. fourty)
- deploying through a 3G tethered connection: an EC2 instance builds the stuff in 6 minutes, including the push time to the `gh-pages` branch

![Emu Nova en 2013](/images/2013/10/game-entry-20131009.jpg)

How people reacted:

- **happiness** first, to notice life came back in an appreciated space
- **happiness** *again*, because the UI was *less cluttered*, even if radically different
- **curiosity**, to contribute
- *grumpiness* because they are not familiar with Github (and because you know, it’s that being French ;-))
- **happiness** because it’s not that hard to contribute to Github from the Web interface (kudos to the Github team for that, I just wish we could upload binary files from the Web UI too!)

**People understand decisions** if they are *included* in their scope (especially when it’s about details and low priority things).

People feel less constraints as they can submit a modification proposal for any content. It increases their motivation because they had never such a **low bareer to be part of something** they like. They feel positively empowered. Because **the owners trust their effort** and welcome them.

It is the **[Pull Request Hack](http://felixge.de/2013/03/11/the-pull-request-hack.html) applied to everything**: the frontend, the backend and the data!

[Fearing London buses is not an issue anymore](http://m.bbc.co.uk/news/uk-england-london-22000276).

## November 2017 Update

The website is now built with Hugo.

Builds are automated with [Travis CI][]. They last 8 minutes:

- 25 sec to assemble the website with [Hugo][];
- 3 minutes to generate thumbnails with [sharp][];
- 3 minutes to redeploy with `rsync`.

This is serious improvement. It took roughly 30 minutes prior to this migration. Hugo _development server_ makes local development way easier.

Details of the migration can be found in this [Pull Request](https://github.com/oncletom/emunova.net/pull/52).

## What’s Next?

Common patterns are diffused among those 10 years. **Sharing**. **Caring**. **Contributing**. It connected me to job **opportunities**, to **people**, to **knowledge**.

I wonder what my life would have been if as a student, I’d have prefered being lazy and sticking to the regular tuitions instead of exploring the cool stuff the Web was proposing (yep, the Web was already amazing in 1996).

Anyway, a couple of things will be interesting to explore:

- ElasticSearch indexing to **compute dynamic contents** on the website
- UI improvements (and better markup for breadcrumbs, reviews etc.)
- optimising assets (especially fonts and reducing Bootstrap fingerprint, conditional CSS/JS)
- importing missing contents
- **HTML frontend to face Github contribution**
- [D3.js](http://d3js.org/) powered tables and filtered lists (courtesy of [Tim Ruffles](http://truffles.me.uk/) for the idea)
- playing video games online thanks to HTML5 emulators such as [jsSMS](http://gmarty.github.io/jsSMS/)
- eventually evolving as a Web-based peer to peer retrogaming open  platform (let's be super ambitious again)

I hope it **gave you inspiration to craft your ideas** to your own domain, using this shared experience :-)

[Hugo]: https://gohugo.io/
[Travis CI]: https://travis-ci.org/oncletom/emunova.net/builds
[sharp]: https://npmjs.com/sharp

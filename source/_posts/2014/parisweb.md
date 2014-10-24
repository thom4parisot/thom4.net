---
title: Back (from|to) Paris Web 2014
date: 2014-10-23 14:00:00
lang: en-GB
categories:
- Events
tags:
- Paris Web
- a11y
- diversity
- culture
- web
cover:
  url: /images/2014/10/saint-quentin.jpg
---

It has been 2 years since I last attended the [Paris Web](http://paris-web.fr) conference. Meanwhile, I traveled and spoke to a fair amount of European conferences, either technical, creative or inspirational.

So what have I brought back from Paris to London?

<!--more-->

# tl;dr

[Paris Web 2014](http://paris-web.fr/2014) reflects the creativity and the diversity of the Web development scene in France.

Interestingly, I enjoyed rediscovering what Paris Web has to offer. Something unique you cannot find in UK… for the best but also the worse.

# What is Paris Web?

**Paris Web is a yearly conference for the community**, which content relates to web design, quality and accessibility.

Although it is a French speaking event, some of the talks are performed by English speaking delegates.

Paris Web makes a lot of efforts to be inclusive: live streaming, realtime subtitles, live *sign language* translation, *live English* translation… **all** of that combined!

# My favourites

A couple of talks caught my attention.

[Growing tomatoes with the Web](http://www.paris-web.fr/2014/conferences/le-web-fait-pousser-mes-tomates.php) (in French) was a nice journey from Olivier, who spent a year practicing woofing in Canada. He shared his learnings about [permaculture](http://en.wikipedia.org/wiki/Permaculture). Moreover, he made a **connection between organic farming and open source**. And how the Web is close to the farming DNA.

[Designing multi-screen Web experiences](http://www.paris-web.fr/2014/conferences/les-recettes-du-web-multi-ecran.php) (in French) expanded over the concept of dual and second screens. How they affect productivity. How we could use them to enhance Web pages experiences. In addition to the now standardised *full screen API*, we only have to wait for the [RemoteDOM API](https://github.com/avgp/remotedom) to efficiently address this in a server-less approach.
Although we also have to consider [screenless connected experiences](http://www.r4isstatic.com/483).

David Rousset presented the [BabylonJS migration to TypeScript](http://www.paris-web.fr/2014/conferences/sponsor-microsoft.php) (in French). [BabylonJS](http://www.babylonjs.com/) is an Open Source WebGL engine himself and a friend of his made on their spare time before reaching an interesting momentum. I really like the [TypeScript](http://www.typescriptlang.org/) philosophy and this shared experience demonstrated once again its usefulness and efficiency to address large JavaScript codebase issues. [Thank you static typing and ES6](http://blogs.msdn.com/b/typescript/archive/2014/10/22/typescript-and-the-road-to-2-0.aspx)!

Raphaël Rougeron organised a pragmatic workshop about [Web Components](http://goldoraf.github.io/web_components/) (partly in French). He skipped the hype and demonstrated interesting use cases of **composited HTML elements**.
I would have loved to use Web Components for mobile Web applications but sadly their support by those platforms is fairly low. [Webkit even removed their experimental support of it](http://trac.webkit.org/changeset/164131)… we can only wait for now.

![](/images/2014/10/villejuif-sunset.jpg)

# Exclusive quality creates silos

Attending *Paris Web* reminded me something I used to hate when I lived in France: this freaking *web design vs. web developer* debate. It is a very French specific issue I literally forgot as I never perceived it in UK, Portugal nor Germany.

For some reasons, **French frontend developers are reluctant** to expand their HTML/CSS knowledge to JavaScript. Not to mention programming. On the other hand, many web designers seem to avoid getting their hands dirty from the frontend development dirt. Coding is for programmers only, apparently.

This has only one effect: **to reinforce silos amongst teams**.

Ironically, every single time I heard stories on how people solved this issue, they all used the same approach: by **blending skills amongst teams**. UX, UI, developers and managers work together and not for each other, sequentially.

*Jean-Loup Lyu* proved it again during his talk on how [Meetic successfully shifted towards mobile thanks to cross-functional teams and visual management](http://www.paris-web.fr/2014/conferences/mutation-dun-geant-du-web-vers-le-mobile.php) (in French). This is also how we work in our [BBC team](http://www.bbc.co.uk/rd) (although [some teams suffer from the *Design as a service* initiative](http://responsivenews.co.uk/post/79348308126/how-the-bbc-should-practice-responsive-web-design)).

# We entertain silos…

… through an attempt to solve them.

**We usually design with the assumption of user expectations in mind**. Sometimes the definition of who the *user* is not even clear. Or we miss the audience which could be interested. Or they simply have no route to our work and effort artifacts.

[Bruce Lawson mentions it in his Web Components talk](http://www.paris-web.fr/2014/conferences/web-components-the-right-way.php) (in English and in duo with [Karl Groves](http://www.karlgroves.com/)): **you do not do quality with an A-mark checklist**.

The same applies when we design with accessibility in mind, or when we design products for a specific audience. This is a usual mistakes of startups and companies, assuming who are our clients, what they need and what they will think.

I became a big fan of the **guerilla testing** technique, paper prototyping and user testing (when time and money are available) as they bring you closer to users, and closer to the real world understanding of your work.

**Paris Web is good at the three *www***: web *standards*, web *interfaces* and web *usability*. But I tend to think we face the same issues over and over because we reproduce the same problem again and again. The multi-track format is not intended to but it helps us to remain in our own comfort zone unless we *actively* fight it.

So when I see [developers talking about UX](http://www.paris-web.fr/2014/conferences/le-design-dinterface-et-la-theorie-de-la-gestalt.php) and a blind attendee to provide feedback for an audio accessible breakout game, I can only encourage those initiatives to happen, again and again.

> What is a breakout game?
> — Some blind person who never played a breakout game

A challenge for the 10th anniversary? **Pair public speaking**. A developer and a designer. A designer and an accessibility expert. An accessibility expert and a game maker. A business developer and a product owner. A politician and a developer.

It would enforce diversity on stage. Speakers duo would learn from each other. The audience would get used to accept the idea those concepts can exist together as they are meant to be.

# My workshop: *programming elevators*

[![Elevato.rs in action screenshot](/images/2014/10/elevators.png)](http://elevato.rs)

We designed this workshop with [David Bruant](https://twitter.com/DavidBruant) for the [Mozilla Festival 2013](http://2013.mozillafestival.org). It is web page, built with CommonJS components and assembled with [Browserify](https://npmjs.org/browserify).

The participant only mandatory task is to *handle floor requests*. When a call is made at a certain floor, you have to send an elevator to pick up this person. Scenarios script the timing of elevator requests. Scenario difficulty gradually increases by adding more floors, more elevators and more requests.

The web interface displays the building shafts, and a minimalistic code editor. You code, you run the scenario and you see the result straight away.

This session helped me to outline possible improvements:
- the **interface needs to be more rewarding** with people;
- to always display a **timer in the UI**;
- to add a leaderboard of your **algorithm performance**;
- to add an algorithm **sharing** and comparison mechanism (through Gist for example);
- [WebAudio-based elevator music](https://twitter.com/porteneuve/statuses/509331757989367808).

Two feedbacks proved to be very valuable:

- people experienced a mechanism to learn in a funny and nicely challenging way;
- a web designer was pleased to realise she could understand and do a bit of code, whereas she thought it was not something meant for her. She was surrounded with experienced and communicative developers. They talked, learned and smiled.

> I am a designer and I did not know I could write code.

Which reminds me **we created this interface as a web programming *learning* tool**. Most of the people saw it instead as a **game**. Next iterations are about *gaming* then.

# A cultural step back

Surprisingly **I looked at France from an outside hence different perspective**.

A chat with Bruce Lawson confirmed the feeling I had during the conference: the British scene focuses on engineering and technical skills whereas the French scene is more about the craft of web development itself. And in-between, an invisible line which should not be crossed.

We do not need to stop talking about programming either. We do not need to stop talking about accessibility. We do not need to stop talking about quality.
But as we cannot attract non-developers into programming by exposing technicity first, the same applies to accessibility, quality and so on.

![Woman Picking Flowers canvases by Frantisek Kupka](/images/2014/10/frantisek-kupka-woman-picking-flowers.jpg)

In the end, it is all about **diversity**. Technical diversity. Skills diversity. Culture diversity. Gender diversity. But we do not only want more female developers for the sake of pleasing figures or a parity dogma. We want more designers, more non-developers, more non-Web people… whoever they are.

Because they are the **seeds of healthy communities, organisations and societies**.


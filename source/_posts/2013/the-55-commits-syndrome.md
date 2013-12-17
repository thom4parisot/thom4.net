title: The 55 Commits Syndrome
date: 2013-12-17 17:30:00
lang: en-GB
tags:
- expérience
- équipe
- Github
- process
- communication
- team
- open source
categories:
- Développement Web
cover:
  link: http://www.flickr.com/photos/the-jedi/11297889644/
  url: //farm8.staticflickr.com/7439/11297889644_9a33b0e03e_c_d.jpg
---

Earlier this year, I’ve spent a sprint of two weeks in the [BBC Responsive News team](http://responsivenews.co.uk), learning from their experience and tinkering with my knowledge.

One day, I started working on a Pull Request, implemented tests and the missing features in a couple of days and… it got refused. **55 commits trashed in a click**.

<!--more-->

But let’s rewind to the beginning of the story first.

## The Prototyping Card

I still remember **starting my first day in the News team by proposing a couple of Pull Requests**. Not necessarily to see them merged, but *to raise questions*, to create awareness of my presence for the team and to let them uncover the potential of my short term assignment.

The Pull Requests were never accepted in their initial form but **they sparked discussions about them**. I got more informations about the contexts, and I then have been able to provide more relevant proposals thanks to that.

Things carried on until the second and last week’s Thursday, the *prototyping day*. This day is dedicated to **investigate prototypes** instead of dealing with production or maintainance code. One of the card pinned on the board was labelled *[Imager.js](https://github.com/BBC-News/Imager.js) refactoring*.

I picked it up because:

* it was about writing JavaScript
* it is my **favourite responsive image** approach, a pragmatic one
* I wanted to **make it good enough to merge** the open source version and the BBC News internal version of Imager
* I could carry on it after being back to my initial team

## Anticipating the Work

So I interviewed the two main authors of the library, [Tom Maslen](https://twitter.com/tmaslen) and [Mark McDonnell](https://twitter.com/integralist), wrote down the features and improvements and started working on the refactoring.

One of the main goal was **to add unit tests** to the library. To demonstrate some love for people tempted to use it. To open the road to external contributions. And of course to mitigate more easily any possible regression.

The second goal was to make it **more flexible** and to subdue its opinions: about the `data-src` URLs format, about the HTML structure itself, about the targeted elements.

The third and last goal was to offer a **first class documentation**. A rock solid documentation with examples. Something usable by beginners and experimented developers. Something which helps diving fast into its integration in your own context.

**Something any decent project would be proud of**.

In order to avoid any tunnel effect, **I opened a Pull Request as soon as possible**, with atomic commits related to each feature: tests firsts, implementation later then documentation.
Some positive feedbacks encouraged me to pursue my work with a decupled enthusiasm.

## End of Line Satisfaction

The so much awaited moment arrives: the moment when you feel the work is finally ready. **Every feature is implemented**, every test is damn green and you even contemplate the README, hasty to use your own work.

A last minute addition even made Imager suitable to use the Flickr URL pattern – something useful for the Flickr team to avoid their… flickering effect on page load.

A notification pops in. Imager. I click on the issue. **Closed**. Not merged. **Closed**. *Cold shower*.

![Imager.js initial Pull Request closed](/images/2013/12/imager-pr-failure.jpg)

How could it have happened? Have I done something wrong? Seriously? 

## Rage Quit

When I read [the reason of the Pull Request cancellation](https://github.com/BBC-News/Imager.js/pull/15#issuecomment-24330163), my eyes struggled on those bits:

* <q>I consulted with the community (…)</q>
* <q>Doing a PR on an open-source project doesn't automatically guarantee it'll be accepted (…)</q>
* <q>This shouldn't be considered a waste of time (…)</q>

And of course, the red badge displaying *Closed* **without any further dialogue**. A unilateral response action.

From the point of view of the contributor, giving time, energy and ideas, this is inacceptable right? I could not have done something bad. **I was so proud of myself**.

I claimed loudly the unfair decision, clapped down the laptop screen and left over from the office. Feeling angry. Very angry.

## British Wisdom

A week-end after the dramatic-but-in-the-end-not-so-dramatic event, an email was awaiting in my mailbox. Containing in a word: **WTF?**.

This is the moment I started considering the good, the bad and the ugly of my proposal. If the communication part has not been perfect on the maintainers side, **maybe I have been involved in the malfunction at some point**.

### The Good

I wanted to provide a first class documentation with examples, solid tests and all the flexibility needed to lower the entry barrier for everyone.

I also delivered the code soon enough to collect feedback.

### The Bad

The soon enough was good enough. Good intent but bad result.

My main mistake was to provide a final result. A conclusion. Not an introduction.

Committing a large chunk of code without any discussion on the technical journey is obviously exposed to a *yes of course* or a *no sorry*.

Atomic you said?

### The Ugly

I rewrote 99% of the code *at once*.

Even if the code was beautiful, battle tested and solidly documented, **who would accept to *replace* the legacy at once of something you care about**? Not even *me*.

The **refactoring** has been replaced by a **rewriting** by wanting to do **more at once**.

The Pull Request was *inclusive* or *exclusive* depending of your level of involvement. *My* level of involvement. So it was **exclusive by default**.

Remember the **Closed** label? **I made it happening**. Like a grown up.

## Rebuilding the Foundations

So instead of forking the project for my own sake, I let some time passing, talked about it with other people and every time, it was the same conclusion: **it was too heavy**.

Having finished the contribution gave me a clearer vision of where to go. So I created a `refactoring-base` branch and [broke up the work in several Pull Requests](http://pretengineer.com/post/breaking-up-pull-requests/). **One Pull Request per feature**, onto the `refactoring-base` branch instead of the master. So as the project can live on its own; then rebasing from time to time.

I combined it with my beloved [Readme Driven Development](http://tom.preston-werner.com/2010/08/23/readme-driven-development.html) technique. [Applied to Github issues](https://github.com/BBC-News/Imager.js/pull/21).

We could now **discuss about the implementation before the implementation**. Because we agreed on the API. Which eased the write up of tests and obviously, of the API itself.

## Git Merge

The work started on each feature after the maintainers’ agreement. **It is slower, but it is way more inclusive**.

Some proposals were good enough since the beginning. Some other benefited from the discussion with the maintainers. Because **contributing is doing the best for the project**, not to do the impossible to sell your sole point of view.

Honestly it has been a perfect workflow: instead of a 100% failure ratio with 1 Pull Request, I had a **100% success ratio with 11 Pull Requests**. 

![Imager.js aggregated Pull Request successfully merged](/images/2013/12/imager-pr-success.jpg)

## The 55 Commits Syndrome

Let’s wrap up things.

Even if the reason to close an issue is legitimate, **we are not only dealing with code but with persons and emotions**. We cannot close an issue without being almost sure the decision – any decision – will be **accepted** and without *inviting* the contributor towards the next step.

**Inviting is including**. *Closing is excluding*. You don’t want to exclude, right?

Although some douchebags will not be happy by any of your decision but whatever, those are not the ones providing **good energy** to your project.

**The size of the Pull Request does not matter**.

At the end of November 2013, [a Pull Request containing 2 words rephrasing has been propose to a Node.js related project](https://github.com/joyent/libuv/pull/1015). Unfortunately it has been rejected by this abrupt sentence:

> [Sorry, not interested in trivial changes like that.](https://github.com/joyent/libuv/pull/1015#issuecomment-29538615)

It created a flamewar. Mostly because of the gender debate. But also and mostly because of this so wrong behavior. Ditching people. Ditching.

----

I can only be **thankful for the patience of the maintainers**. They coped decentely with my impatience.

I can only be thankful not to have forked the project **due to  a communication problem**. Splitting efforts would have been stupid, especially for people working under the same umbrella.

**We have *all* been gratified** by the common effort: the atomic Pull Requests made their way into the `master`; the project even reached the trending projects on Github and got additional and relevant contributions thanks to that!

![Imager.js as a trending project on Github](/images/2013/12/imager-github-fame.png)

Team work. **Team work and community**. They are much more important than our individual proudness/selfishness. This is about talking. The code is just a glue connecting our ideas and making them physical. The code is just one part of the discussion. Not everything.

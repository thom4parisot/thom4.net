title: Why Styleguides Suck
date: 2014-01-27 10:44:17
tags:
---


- https://github.com/felixge/node-style-guide
- http://jstherightway.org/
- https://github.com/chneukirchen/styleguide
- https://github.com/darcyliu/google-styleguide
- https://github.com/EightMedia/styleguide.js
- https://github.com/tooling/authoring-styleguide
- https://github.com/gregstallings/styleguides
- https://github.com/gregstallings/styleguides
- https://github.com/mde/js-styleguide
- https://github.com/cloudhead/styleguide
- http://www.bbc.co.uk/gel

Checklist effect.

Styleguide creates a walled garden: nice to see but huge payload to come inside.

In the real life, we work on various projects, from various stakeholders. Our efforts should focus on how to contribute rather than satisfying a subjective taste. But respecting the codestyle by mimicking.

Another problem of a styleguide is: what do we do with something which is clearly not specified? How new rules emerge? How people keep in sync? The effort does not scale.

How do you verify a styleguide? By eye? You, programmer? Manually?

A styleguide creates a culture which atom is a project. Do you want to force people proving their identity at the entry and performing identity checks at each street corner or do you want to stimulate contributions to make breathing and living your community?

Pick up a common convention, something handy, create rules when it's really solving a problem encountered in a project.
Problems we need to fix in a project are: bugs, vision and communication.

Styleguides should be a tool helped to make code consistent (whatever is your definition of consistency) and to prevent leaking mistakes (global variables in JavaScript, possible minification bugs due to a lack of semicolon etc.).

What you think is cool but what is important for the project's code is way better.

## The Anatomy of Design Decision

> https://vimeo.com/38973832

cf. https://twitter.com/gillesdemarty/status/427750788262559744 via @gillesdemarty

- starting at 39'30 "Always put the search box in the upper right"
- arbitrary rule that does cause user experience problem
- rule-based decisions vs informed decisions
- investment in those rules/
- they never work on the long term (and does not value maintaining them)

> They get stuff out but not good stuff out.

That was their problem. Thought rules would prevent that.

### Rule-based Decisions

Prevents thinking.

Rules don't cover the exceptions. We do things because we are supposed to do them.

And how do you validate them? Can you invalidate them à la jshint?

### Informed Decisions

Requires thinking to make a decision.

We design because to deal with exceptions and constraints.

- Process "we can do do something" - Doing a website
- Methology "we want to do it again and again" - Agile (remember XP should save any project?)
- Dogma "They even have removed table from their house" - Web Standards
- Techniques "Reproducible independant steps" - ESLINT
- Tricks "Techniques which are wrong but which works" - `translateZ()`

Struggling companies have a tremendous of methodology and dogma.

Tips and tricks help solving any problem at any time.

**Design Patterns** are proactive ways of solving problems. Good design in the path of least resistance.

**We can choose** as we have a language we understand.

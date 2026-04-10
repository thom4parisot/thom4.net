---

# Outline

- **Attention**: Open Source can be seen as Wonderland when you are outside of it. But if you have had to do it for the first time, you would rather fear to expose bad code and to be seen as a failure. Something is missing in between isn't it? ;
- **Benefits**: I will bring you inside the BBC fortress to give you essential keys to understand how to do Open Source in large organisations;
- **Credentials**: I have been working in the Web industry for the past 10 years, published a dozen of modules in the npm registry, maintainer of Imager.js and peaks.js, made a TAL Node.js middleware and wrote a blog post on how *not* to make a Pull Request (55 commits syndrome);
- **Direction**: I will bring you through the journey of an Open Source contributor within the BBC;
- **Conclusion**: Open Source is a journey, a culture and a capital you build one day at a time. You now have the keys to start your first contribution, to share a project for the first time or to give a second life to an existing project. Thank you!

----

# Contributing Open Source software

- typo, a letter, a word, a sentence, a paragraph — Read the Docs
- documentation, code examples
- bug report, with breaking unit tests
- feature, bugfix

# Breaking the ice

- Yes, but… I'm not good enough (nope, you are the only person to think that — if you are kind you are more likely to get helped rather than mocked)
- Yes, but… I will be blamed because I cary the reputation of my company (nope, and in case you doubt, ask a question, justify your point of view and/or accept you can be wrong)
- Yes, but… People will mock me if I make a mistake (nope they will tell you this is not relevant to the project)
(tale of my first PR, did not know what I was doing but I learned about phpunit and redis)
- Yes, but… Nobody will use it (perhaps, although you would be surprised how fast it can take off with a single post on HackerNews)

# require('peaks.js');

- use a non-strategic but useful piece of work you care about — interface to create audio snips in a Web browser
- start small — exploratory work: canvas or SVG but both needed to read data
- make sure you have clear indicators (what to do, how long you can work for, definition of done — do not build an hydra but something which works, which is documented and tested)
- make sure you are aware of the official process — paperwork to fill in, or ship it silently if you are adventurous and confident enough
- in doubt or meanwhile, work closed source but as if it was open source
- tests and documentation are mandatory and a metric of quality — also good to make the project inclusive
- `open README.md; npm install --save peaks.js; npm test`

# npm publish

- ship it (`rm -rf .git; git commit -a -m 'Initial commit'`) (good for quality, review and confidence)
- job done, let's do something else
- maintenance mode: you provide minimal support and accept relevant contributions
- knowing to say no — you lead the vision of the project, provide guidance
- knowing to accept — is it tested? does it conform with the actual code style? what is the cost of including the code (too much, thank and explicit the needs — okay, do the modifications, merge, thank and ship it)
- 3 levels of strategy:
 - personal: is it a project you would work on your spare time? Is it valuable or enjoyable without being a sacrifice?
 - group of people: is it helpful for any actual or known projects? Wait or act: they are your first buyers.
 - company: is it helpful outside of your office walls? Pitch the project to product managers, bring some metrics if you have some.

# Beyond 'release and forget'

- make the project known around you: spread the word to your colleagues
- be present for support and questions
- write about it (personal blog, corporate website, public registries)
- write down features you would like to see in the project
- sniff projects interested in the existing/future features (or wait for contributors to contribute them for you) - it is useful for them to know they save time and benefit from your experience on the topic
- find buyers/supporters who have a better grip on the organisation than you
- success attracts success - people hear about it
- eventually it becomes strategic - assert the expectations, reward the donors with momentum without betraying the openness spirit

# Wrap-up

- it is about **time**: you have it or have to find financial resources to get dedicated time
- it is a tool to learn
- it will not break the walls of your company but it will make them porous
- to create bridges across the rivers separating teams
- public interest: it fuels project's metrics
- leadership in progress: the community becomes your team

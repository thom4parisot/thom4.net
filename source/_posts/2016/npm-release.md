---
layout: article
title: A simple npm release workflow
lang: en-GB
date: 2016-11-28 10:00:00
categories:
- JavaScript
tags:
- npm
- workflow
- process
- release
cover:
  url: /images/2015/07/south-downs.jpg
---

**Releasing a package to the npm registry can be error prone**. It might involve *git tagging*, updating a `CHANGELOG`, *compiling* assets, *bumping version* number etc.

Plus, it can happen *multiple times* a week and the *logic must be shared* with your collaborators.

We will explore how to proceed, by **relying only on the `npm` command**.

<!--more-->

# tl;dr

You publish or want to publish *public* or *private* npm packages? You can avoid errors and make it the process more qualitative through automation.

This blog post explains you how you achieve such a thing thanks to the `npm` command.

# npm scripts

As a reminder, the `npm` command can be leveraged through the `scripts` field of the `package.json` file.

```json package.json
{
  "name": "my-package",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "lint": "eslint ./src",
    "test": "tape tests.js",
    "posttest": "npm run lint"
  },
  "devDependencies": {
    "eslint": "^3.0.0",
    "tape": "^4.0.0"
  }
}
```

This way, executing `npm run lint` will execute [eslint](http://eslint.org/) to against your `src` folder. No need for grunt or gulp plugin.

*Remember*: `npm run` expands the [scope of `$PATH`](https://en.wikipedia.org/wiki/PATH_(variable)) by prepending  `$PWD/node_modules/.bin` to it (like `PATH="./node_modules/.bin:$PATH" npm run lint` would do). This way you can **run any executables provided by _local_ dependencies**.

Documentation is available under the [`run-script` section](https://docs.npmjs.com/cli/run-script) of the `npm` cli. Also, consider reading my previous post about [self contained Node.js scripts](/2014/self-contained-node-scripts) for a more in depth coverage of this topic.

# npm version {major,minor,patch}

`npm@1.1.0` [introduced the version auto-increment](https://github.com/npm/npm/commit/ae6a2d71ae9a4b027b8b7078dab181c602e85467) from the command line. Further documentation improvements made this feature more visible and more explicit.

Considering your current package version is `1.0.0`, the `npm version {something}` feature acts as following:

- `npm version major` → `2.0.0` (creates git tag `v2.0.0`);
- `npm version minor` → `1.1.0` (creates git tag `v1.1.0`);
- `npm version patch` → `1.0.1` (creates git tag `v1.0.1`).

The one liner updates the `version` field in the `package.json` file, runs `git tag` and `git commit` for you.

# A simple release process

Let's broaden the scope for a minute. Imagine you just merged a pull request in a project of yours. What shall we do?

1. update the CHANGELOG to reflect the version changes;
1. run `git add CHANGELOG && git commit -m 'Update CHANGELOG'`;
1. run `npm version patch`;
1. run `npm publish`.

Except if you use a README generator (such as [github-changes](https://npmjs.com/github-changes), well, it will use the version number *prior* to your `npm version` change.

So should we invert some lines, like this?

1. run `npm version patch`;
1. update the CHANGELOG to reflect the version changes;
1. run `git add CHANGELOG && git commit -m 'Update CHANGELOG'`;
1. run `npm publish`.

Why not… but now the CHANGELOG is ahead of the relevant git tag.

# npm version hooks

npm introduced the `preversion`, `version` and `postversion` scripts a while ago:

- `preversion`: performs operations before altering the version number;
- `version`: performs operations after having altered the version number and before the git commit;
- `postversion`: performs operations after the git commit.

We could have included the CHANGELOG generation within a `version` task but prior to `npm@2.13.0`, it would have remained unpicked by the npm git commit.

Thankfully since then (mid-July 2015), we can now *integrate* with the `version` script, as follows:

```json package.json
{
  ...
  "scripts": {
    "generate-changelog": "github-changes -n ${npm_package_version} -a --only-pulls --use-commit-body",
    "lint": "eslint ./src",
    "test": "tape tests.js",
    "version": "npm run generate-changelog && git add CHANGELOG"
  },
  ...
}
```

# Conclusion

Thanks to a simple lifecycle change, `npm` enabled itself to become a powerful release tool.

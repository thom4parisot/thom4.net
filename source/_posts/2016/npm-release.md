---
title: npm-based release workflow
lang: en-GB
date: 2016-12-06 08:00:00
categories:
- JavaScript
tags:
- npm
- workflow
- process
- release cycle
- node.js
- travis ci
- automation
cover: /images/2016/12/south-downs.jpg
---

**Releasing a package to the npm registry can be error prone**. It involves *git tagging*, to update a `CHANGELOG` file, to *compile* assets, to *version bump* etc.

Plus, it can happen *multiple times* a week and the *process must be shared* with all the project collaborators.

We will explore how to proceed, by **relying solely on the `npm` command**.

<!--more-->

# tl;dr

Part of package publishing involves a release process. It goes beyond version bump and can be automated via `npm` lifecycle scripts.

# `npm` scripts

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

This way, executing `npm run lint` will execute [eslint](http://eslint.org/) to against our `src` folder. _No need for a grunt or gulp plugin_.

*Remember*: `npm run` expands the [scope of `$PATH`](https://en.wikipedia.org/wiki/PATH_(variable) by prepending  `$PWD/node_modules/.bin` to it. Exactly like `PATH="./node_modules/.bin:$PATH" npm run lint` would do. This way you can **run any executables provided by _local_ dependencies**.

Documentation is available under the [`run-script` section](https://docs.npmjs.com/cli/run-script) of the `npm` cli. Also, consider reading my previous post about [self contained Node.js scripts](/2014/self-contained-node-scripts) for a more in depth coverage of this topic.

![](/images/2016/12/south-downs-hay.jpg)

# `npm version {major,minor,patch}`

`npm@1.1.0` [introduced the version auto-increment](https://github.com/npm/npm/commit/ae6a2d71ae9a4b027b8b7078dab181c602e85467) from the command line. Further documentation improvements made this feature more visible and more explicit.

Considering our current package version is `1.0.0`, the `npm version {something}` feature acts as following:

- `npm version major` → `2.0.0` (creates git tag `v2.0.0`);
- `npm version minor` → `1.1.0` (creates git tag `v1.1.0`);
- `npm version patch` → `1.0.1` (creates git tag `v1.0.1`).

The one liner updates the `version` field in the `package.json` file, runs `git tag` and `git commit` for us.

# `npm version` hooks

The `npm` command introduced the `preversion` and `postversion` scripts a while ago too. They are executed as follows:

1. `preversion`: performs operations before altering the version number;
2. `version`: performs operations after having altered the version number and before the git commit;
3. `postversion`: performs operations after the git commit.

**Artefacts can be added to the `npm version`** git commit since `npm@2.13.0` – mid-July 2015. This is what makes the workflow handy and streamlined.


# npm release process example

We will use a `CHANGELOG` generator to illustrate the previous statement: [github-changes](https://npmjs.com/github-changes). We want the changelog to be *in sync* with the new version number and to be committed *prior* to the `npm version` change.

```json package.json
{
  "version": "1.0.0",
  "scripts": {
    ...
    "generate-changelog": "github-changes -n ${npm_package_version} --only-pulls --use-commit-body",
    "preversion": "npm test",
    "version": "npm run generate-changelog && git add CHANGELOG.md"
  },
  ...
}
```

The above example will execute the following after we type `npm version patch`:

1. *preversion*: run tests;
2. *version*: npm computes a new package version, here `1.0.1`;
3. *version*: we generate a `CHANGELOG.md` file based on merged GitHub pull requests, with `$npm_package_version` environment variable equalling to `1.0.1`;
4. *version*: [we stage](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics#The-Three-States) the altered `CHANGELOG.md`;
5. *version*: npm creates a commit labelled `1.0.1`;
6. *version*: npm tags the commit as `v1.0.1`;
7. *postversion*: N/A.

![](/images/2016/12/south-downs-tree.jpg)


# `npm version from-git`

I stumbled on two alternatives while researching this article via [git blame](https://github.com/npm/npm/pull/10717/files):

- `npm version <semver>`;
- `npm version from-git`.

The last one is particularly interesting as it reverses the previous workflow and _gives back control to git_ as a primary publishing tool.
Whereas `npm version {major,minor,patch}` would compute the version for you, `npm version from-git` will **read the version from the _git history_**.

The following code block illustrates how an automated release would happen with the [Travis CI npm deployer](https://docs.travis-ci.com/user/deployment/npm/):

```.travis.yml
# ...

before_deploy: npm version

deploy:
  provider: npm
  email: npm-account@email.address
  api_key:
    secure: "...encrypted key..."
  on:
    tags: true
```

It will:

1. **deploy** only on a new git tag push;
2. **trigger** `npm version` (up to you to configure the various `preversion`, `version` and `postversion` scripts);
3. **publish** the new package to the npm registry.

![](/images/2016/12/devils-dyke-bus.jpg)

# Conclusion

The `npm` command became a **powerful release tool** since summer 2015, all thanks to a simple lifecycle change.

Wether you choose to use one of the approach or not is **up to you**. I have a _personal preference_ for `npm version {major,minor,patch}` but I kind of **like the idea of the CI doing all the work** with `npm version from-git` on a new git tag rather than having to rely on my machine setup. Or anybody machine setup.

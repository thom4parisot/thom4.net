---
layout: article
title: SSH deploys with Travis CI
lang: en-GB
date: 2016-05-13 17:00:00
tags:
- continuous integration
- automation
- rsync
- SSH
- Travis CI
- static websites
- deployments
- security
categories:
- WebDev
---

I have mainly used [Travis CI](https://travis-ci.org) to test, assemble and deploy to [GitHub Pages](https://pages.github.com/) and [other deployers](https://docs.travis-ci.com/user/deployment/).

In spite of the numerous deploy strategies, I wanted to deploy to a hosting provider via SSH. Here are some explanations on why and how to do it.

<!--more-->

# tl;dr

It is possible to deploy via SSH from *Travis CI* by combining the `travis encrypt-file` and `deploy.script` features.

# Why using Travis CI for this?

I will keep it short but in essence:

- I want **reproducible builds** and to deploy only tested artifacts;
- I want a **clean state** for each build;
- I don't want to worry about my flaky Internet **connection bandwidth**;
- I kind of fancy merging a PR on GitHub mobile web interface and see a website being rebuilt and **deployed without further manual operation**?

I personally use this process:

- to deploy this blog;
- to deploy a 3K+ pages static website with a 20 minutes build time and content indexation with [Algolia](https://www.algolia.com/);
- to assemble an [Asciidoc based book](https://github.com/oncletom/nodebook) into a [website](https://oncletom.io/node.js) and publisher-ready LibreOffice document.

# Build and deploy workflow

Here is what happens during the build:

1. Travis **installs** your project dependencies;
2. Travis runs the **tests**;
3. Travis runs the **artifacts build** (to get my HTML pages available on disk);
4. Travis runs the **deploy** strategy in order to transfer its files on disk to a remote machine.

The deploy strategy can be:

- **scp all the things!**  
Nice but limited in term of features, especially if you need to prevent certain files to be transfered;
- **rsync**
The recommended way to transfer assets over the wire, mostly because of the various local to remote file comparison mechanisms – by using content fingerprinting, date changes, file deletion etc;
- **solid archive upload**  
Can be handy if you don't trust the wire and fancy untarring a PGP encrypted archive, assessing a tarball checksum after a successful transfer etc;
- **a combination of these and others**  
Which is perfect if you want to push static files as well as indexing them in a remote database with *secured write credentials*.

With any of the strategies, you can upload to the remote folder, or to a *temporary folder* and *swap* them out once the transfer is complete. Which can be useful to **prevent UI or service disruptions** – because some assets calls are not in sync anymore. (eg: an updated page refering to a CSS file which has not been transfered yet).

# Travis and sensitive informations

You can benefit of [custom SSH keys](https://docs.travis-ci.com/user/private-dependencies/#User-Key) on *Travis CI* if you are a paid user.

Connecting from a Travis build box (or any CI system really) to a remote host implies to have the **private SSH key on the CI box** and the **public SSH key on the remote host end**.

But you certainly don't want your private key to be available in your Git repo or through the CI build logs. It is as secure as [hosting tax heaven data on a Drupal website](http://www.wired.co.uk/news/archive/2016-04/06/panama-papers-mossack-fonseca-website-security-problems).

Hopefully, the `travis` ruby client supports [file encryption](https://docs.travis-ci.com/user/encrypting-files/) since its version 1.7 to help us a bit.

# Setup SSH encryption key

So let's recap what we need to do to securely prepare our SSH tunnel between our deploy host and Travis CI:

1. Generate a dedicated SSH key (it is easier to isolate and to revoke);
2. Encrypt the private key to make it readable only by Travis CI (so as we can commit safely too!);
3. Copy the public key onto the remote SSH host;
4. Cleanup after unnecessary files;
5. Stage the modified files into Git.

Which translates into:

```bash
ssh-keygen -t rsa -b 4096 -C '<repo>@travis-ci.org' -f ./deploy_rsa
travis encrypt-file deploy_rsa --add
ssh-copy-id -i deploy_rsa.pub <ssh-user>@<deploy-host>

rm -f deploy_rsa deploy_rsa.pub
git add deploy_rsa.enc .travis.yml
```

Great! 

# Setup SSH decryption in Travis job

We still need to setup a few things before we are able to enact anything:

1. Preventing the SSH interactive prompt when connecting to a host for the first time (which means, for each build);
2. Decrypting the encrypted SSH private key;
3. Adding the key to the current `ssh-agent` to make any SSH-based command agnostic to the private key location.

In a nutshell, your `.travis.yml` should contain these lines (in addition to your existing config):

```yaml
addons:
  ssh_known_hosts: <deploy-host>
  
before_install:
  openssl aes-256-cbc …
  
before_deploy:
- eval "$(ssh-agent -s)"
- chmod 600 $TRAVIS_BUILD_DIR/deploy_rsa
- ssh-add $TRAVIS_BUILD_DIR/deploy_rsa
```

[Travis build lifecycle steps](https://docs.travis-ci.com/user/customizing-the-build/#The-Build-Lifecycle) are thoroughly explained in their documentation.

I mainly use `before_deploy` to setup the SSH agent for two reasons:

- it happens **after the `script` stage**: we then avoid any possibility for third party scripts ([npm worm](https://www.infoq.com/news/2016/03/npm-infection), remember?) to leak active keys;
- the **build will fail** if the deploy setup is incorrect.

It is now time to deploy our deploy strategy!

# Travis deploy script

My favourite way of deploying is to use the [`deploy` script](https://docs.travis-ci.com/user/deployment/script) lifecycle event.


```yaml
deploy:
  provider: script
  skip_cleanup: true
  script: rsync --delete-after --quiet $TRAVIS_BUILD_DIR/dist <ssh-user>@<deploy-host>:path/to/files
  on:
    branch: master
```

`skip_cleanup` is kind of mandatory otherwise [Travis resets the git directory state](https://docs.travis-ci.com/user/deployment/#Uploading-Files).

In my case I want to deploy only when new modifications land `on` the `master` branch but you might want to [deploy against different conditions](https://docs.travis-ci.com/user/deployment/#Conditional-Releases-with-on%3A) too.

You can even run several deploy commands, to push content and to index it in a search engine for example:

```yaml
deploy:
  - provider: script
    skip_cleanup: true
    script: npm run deploy
    on:
      branch: master
  - provider: script
    skip_cleanup: true
    script: npm run index-content
    on:
      branch: master
```

A **last warning** though: if your deploy fails for some reason, is incomplete or if the host network connection shuts down, **you are screwed**.
Why? Because the build status will be *green* and unless you inspect the logs you will not notice it.

Again, you could:

1. push to a temporary directory  
`scp ... user@ssh:/tmp/$TRAVIS_BUILD_ID`;
2. swap the deploy folder with the production one  
`rm -rf /tmp/old.build && mv path/to/files /tmp/old.build && mv /tmp/$TRAVIS_BUILD_ID path/to/files`.

It is up to you and the volume and ratio of changed files you have to send over the wire.

# Conclusion

I hope this article helped you understand the mechanism of a custom deployment with Travis CI. And make you realise you have now all the tools needed to avoid deploying from your machine.

This is also a great way to document the deployment process and avoid the bottleneck of relying on a person machine setup to push new changes online.

You can now deploy several times a day without much more effort than *merging* a pull request. Isn't that sweet?

Now, if you do not want to prevent pushing crap (like badly formatted content etc.), you are ready to implement prevent tools like linters, functional tests and markup validators at `script` stage.
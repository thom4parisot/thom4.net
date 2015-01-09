title: Docker and encoding (bis)
lang: en-GB
date: 2015-01-09 01:00:00
categories:
- WebDev
tags:
- docker
- encoding
- debian
- node
- ruby
cover:
  url: /images/2015/01/barbican-walead-beshty.jpg
---

Have you ever faced encoding issues in some Ruby code — eventually ran inside a Docker container? It is painful and on the other hand it is *easy to fix* when you know what to do.

<!--more-->

# The problem

The task is pretty simple: a Ruby code parses some JSON back from an standard out output (*stdout*) shelled out by an executable (through `Popen.capture3`).

This code worked totally fine until we containerised the process for Docker. For some mysterious reasons, `JSON.parse` complained about a wrongly formatted string.

Pair-debugging helped to debunk the issue, and as [@garethadams](https://twitter.com/garethadams) fairly pointed out, Ruby is supposed to use UTF-8 by default… the error claimed the opposite.

OK *Docker ruby*, show me your encoding:

```bash
$ docker run -ti --rm ruby:2.1.5 ruby -e 'puts STDIN.external_encoding'
US-ASCII
```

This is wrong. It might be inherited from the default system locale:

```bash
$ docker run -ti --rm ruby:2.1.5 locale
LANG=
LANGUAGE=
LC_CTYPE="POSIX"
LC_NUMERIC="POSIX"
LC_TIME="POSIX"
LC_COLLATE="POSIX"
LC_MONETARY="POSIX"
LC_MESSAGES="POSIX"
LC_PAPER="POSIX"
LC_NAME="POSIX"
LC_ADDRESS="POSIX"
LC_TELEPHONE="POSIX"
LC_MEASUREMENT="POSIX"
LC_IDENTIFICATION="POSIX"
LC_ALL=
```

Which leads to the popular article [Docker and locales](http://jaredmarkell.com/docker-and-locales/) by Jared Markell… but it did not solve the issue.

The `ruby` official image is based on `debian:jessie`. [Debian removed their dependency on the `locales` package](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=636086#3) in 2011. It explains  the unavailability of `en_US.UTF-8`.

The quickest solution is to opt in for `C.UTF-8`, the UTF-8 locale provided by `libc-bin`, on Debian at least:

```bash ./Dockerfile
FROM ruby:2.1.5

ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8
ENV LC_ALL C.UTF-8
```

It is a lightweight solution as it does not require to install an `apt` package.
Building and running this image now defaults Ruby to UTF-8:

```bash
$ docker build -t ruby-utf8 .
$ docker run -ti --rm ruby-utf8 ruby -e 'puts STDIN.external_encoding'
UTF-8
```

Problem solved!

**Knowing about the chain of base images** is very helpful as you can understand how to configure a container. Because the configuration can vary from a base image to another one, **you might want to ensure that all/most of your Docker images inherit from a same consistent base**.




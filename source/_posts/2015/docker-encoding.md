title: Docker and encoding (bis)
date: 2015-01-08 10:00:00
tags:
- docker
- encoding
- debian
- node
- ruby
---

http://jaredmarkell.com/docker-and-locales/

<!--more-->


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

```bash
$ docker run -ti --rm ruby:2.1.5 ruby -e 'puts STDIN.external_encoding'
US-ASCII
```


```
# ./Dockerfile
FROM ruby:2.1.5
 # Setting up locales ENV LANG C.UTF-8 ENV LANGUAGE C.UTF-8 ENV LC_ALL C.UTF-8
```

```bash
$ docker build -t ruby-utf8 .
$ docker run -ti --rm ruby-utf8 ruby -e 'puts STDIN.external_encoding'
UTF-8
```




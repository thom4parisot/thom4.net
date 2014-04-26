title: Every Day
date: 2013-12-30 02:00:00
tags:
- everyday
- timelapse
- photographie
categories:
- Projects
lang: en-GB
cover:
  url: /images/2013/everyday.jpg
  link: http://everyday.oncletom.io
---

What 2013 looked like, **every day**, in picture(s).

<!--more-->

## 2013

- **283** days at *home*
- **82** days *somewhere else*
- **4** differents *everyday* places
- lived in **2** different cities
- lived in **5** different places

<p class="interactive-loading" data-width="500" data-height="500" data-src="https://dl.dropboxusercontent.com/u/14916101/everyday/2013.gif">
  2013's Timelapse (40MB GIF) — [direct link](https://dl.dropboxusercontent.com/u/14916101/everyday/2013.gif).
</p>

## The Technique

The timelapse is built using [GraphicsMagick](http://www.graphicsmagick.org/) and an obsessional daily ritual:

```bash
cd ~/everyday/2013
gm convert +dither -delay 15 -loop 1 *.jpg -colors 128  -resize 500x500 ../$(basename `pwd`).gif
```

## 2014?

**2014 is about a *plan***. I’ll introduce it in *three* blog posts. *BRB*. Mid-January.

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

**Every day** is a photography series I started in 2013 in order to fight my fear of having habits. It has been designed as a daily ritual: one picture from a fixed location, **every day I woke up at home** paired with a **written memory**.

## 2013

- **283** days at *home*
- **82** days *somewhere else*
- **4** differents *everyday* places
- lived in **2** different cities
- lived in **5** different places

<video height="500" width="500" poster="/images/2013/12/2013-thumbnail.jpg" loop controls muted>
 <source src="https://www.dropbox.com/s/85ygpx78snc5dap/2013.mp4?dl=1" type="video/mp4">
</video>

## The Technique

The timelapse is built using [GraphicsMagick](http://www.graphicsmagick.org/) and an obsessional daily ritual:

```bash
cd ~/everyday/2013
gm convert +dither -delay 15 -loop 1 *.jpg -colors 128  -resize 500x500 ../$(basename `pwd`).gif
```

## 2014?

**2014 is about a *plan***: [Past](/2014/past/) • [Present](/2014/present/) • [Future](/2014/future/).

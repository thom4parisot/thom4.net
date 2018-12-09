title: Every Day
date: 2014-12-30 16:00:00
tags:
- everyday
- timelapse
- photographie
categories:
- Projects
lang: en-GB
cover:
  url: /images/2014/everyday.jpg
  type: full
---

What 2014 looked like, **every day**, in picture(s).

<!--more-->

**Every day** is a photography series I started in 2013 in order to fight my fear of having habits. It has been designed as a daily ritual: one picture from a fixed location, **every day I woke up at home** paired with a **written memory**.

# 2014

- **228** days at home
- **137** days somewhere else
- lived in **1** city
- lived in **1** place

<video height="500" width="500" poster="/images/2014/12/2014-thumbnail.jpg" loop controls muted>
 <source src="https://www.dropbox.com/s/25ada0v0p506p9g/2014.mp4?dl=1" type="video/mp4">
</video>


# How I made it

[2013's timelapse](/2013/everyday/) is a GIF. But GIF is cumbersome:
- it is heavy unless you remove a lot of colours;
- it has no playback control — playback which is chaotic until the animation is fully loaded;
- it is even more terrible on mobile with an hectic connection.

So this year I also experimented with an H.264 HTML5 video encoding based on still images. **The resulting video is smaller in size with a better image quality**.
It combines the open source command line tools [GraphicsMagick](http://www.graphicsmagick.org/) and  [avconv](https://libav.org/avconv.html).

```bash
gm mogrify -size 500x500 *.jpg -resize 500x500
cat *.jpg | avconv -f image2pipe -r 6 -vcodec mjpeg -i - -vcodec libx264 -compression_level 9 -b:v 4000k -preset fast -tune animation ../$(basename `pwd`).mp4
```

**Notice**: I ran into an issue, resulting in a lengthful video composed of a still frame. [@paraboul](https://twitter.com/paraboul) pointed me in the right direction: [avconv was unable to retrieve the pictures dimensions](https://twitter.com/paraboul/status/549603965177167872).
[Instagram high resolution images](https://help.instagram.com/276722745781769) are stripped of these, and the aforementioned `gm mogrify` command indirectly addresses this issue during the resize process.

# 2015?

**2015 is about *farming* and *fulfillment***.

**Every day** in *2014* • [2013](/2013/everyday/).

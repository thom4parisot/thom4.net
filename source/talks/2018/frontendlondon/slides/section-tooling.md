<!-- .slide: data-state="contrasted" -->

## Context • Writer Experience • **Modular Tooling** • Publishers • Community Engagement


@@@

## Writing _Code_

@@@


<!-- .slide: data-background="images/asciidoctor-code.png" data-background-size="contain" -->

@@@


<!-- .slide: data-background="images/asciidoctor-code-include.png" data-background-size="contain" -->

@@@

<!-- .slide: data-background="images/asciidoctor-code-rendered.png" data-background-size="contain" -->

@@@

## Code _quality_ for free

@@@

<!-- .slide: data-background="images/writing-code-linting.png" data-background-size="contain" -->

@@@

## Asciidoc on GitHub is not enough

@@@

<!-- .slide: data-background="images/github-asciidoc.png" data-background-size="contain" -->

@@@

## _Building_ the book

```sh
$ make build-html
```

@@@

<!-- .slide: data-background="images/build-makefile.png" data-background-size="contain" -->

@@@

## _Automating_ all the way

Repeated manual tasks are good candidates.

@@@

<!-- .slide: data-background="images/book-build.png" data-background-size="contain" -->

@@@

<!-- .slide: data-background="images/book-build-config.png" data-background-size="contain" -->

@@@

<!-- .slide: data-background="images/book-build-perks.png" data-background-size="contain" -->


@@@

## _Packaged_ code and content

What if I could do `npm install nodebook`?

@@@

<!-- .slide: data-background="images/book-npm.png" data-background-size="contain" -->

@@@

<!-- .slide: data-background="images/book-cli.png" data-background-size="contain" -->

@@@

## _Media_ query

A ~~picture~~ video is worth 1000 words (when you can play a video)

@@@

<video data-autoplay src="https://thom4.net/node.js/chapter-09/videos/browser-sync.mp4"></video>

@@@

<!-- .slide: data-background="images/asciidoctor-video.png" data-background-size="contain" -->

@@@

<!-- .slide: data-background="images/asciidoctor-dynamic-blocks.png" data-background-size="contain" -->

@@@

## Built with Asciidoctor<em>.js</em>

Building a Node.js book with Node.js 🙌

@@@

<!-- .slide: data-background="images/community-build.png" data-background-size="contain" -->

@@@

## ✨ Extending _Asciidoctor.js_ ✨


@@@

## _Interactive_ code


Run and tweak code in your browser.

@@@


<!-- .slide: data-background="images/plain-code-example.png" data-background-size="" -->

@@@

<!-- .slide: data-background="images/runner-demo.gif" data-background-size="contain" -->


@@@

## Grab it on _npm_

👉 [npmjs.com/asciidoctor-extension-interactive-runner][runner]

[runner]: http://npmjs.com/asciidoctor-extension-interactive-runner


@@@

## Copy/paste bash commands

![](images/asciidoctor-bash-dollar.png)

Hat tip to [Remy Sharp][] <br> 👉 [remysharp.com/2017/03/27/dollar-in-code-examples][dollar-code] {.footer}

[dollar-code]: https://remysharp.com/2017/03/27/dollar-in-code-examples
[Remy Sharp]: https://remysharp.com/

@@@

## MDN web docs _macro_

Expand it to an admonition block • eg: `mdn::global[RegExp]`

@@@

![](images/asciidoc-macro-rendered.png)

@@@

![](images/asciidoc-macro-source.png)

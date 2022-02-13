title: A Customized Chrome Extension Icon For Your Dev Version
date: 2013-08-01 10:00:00
lang: en-GB
categories:
- JavaScript
tags:
- Chrome
- Chrome Extensions
- Quality
- Design Pattern
cover: /images/2013/08/chrome-extension-channel.png
---

When developping a Chrome Extension, it is a common pattern to have both installed your **development version alongside the production version**; the one provided by the Chrome Web Store or your Auto Update server.

The **problem** is they have the **same icon**. Which makes our life complicated when it is about clicking on the good extension icon.

Here is how I solved the problem.

<!--more-->

## The Extension Channel Concept

The main concern we would like to address is to know **if we are in a development context** or not.

Unfortunately, the Chrome Extensions API does not let us know if  the extension is *unpacked* (**development**) or *not* (**production**). We can only sniff the `chrome.runtime.getManifest().key` value; which is populated when the extension is published on the Web Store.

The sniffing solution will not work if you ship **both** on the Web Store and an Auto Update Server (for beta test or any other reason). The `key` value will be populated in both case, thus leading us back again to our initial problem: **what is the execution context of the extension**?

I like to make software design decision generic, so let’s say we rather prefer to know **in which extension channel we are**. Which means either **production** or **development** in our case. We have room to extend this concept in the future without adding extra complexity in our code.

The implementation will be done in 4 steps:

1. Creating a configurable `BackgroundProcess` object
1. Requesting the Channel configuration
1. Update the Extension icon
1. Building our extension for various channels

The final result is available as a [public Gist](https://gist.github.com/oncletom/6126549) and eventually looks like the following image.

![](https://thom4.net/images/2013/08/chrome-extension-channel-icons.png)

## Extension Background Page Boilerplate

For the sake of testability, we want to separate the *features* from the *execution*.

So our background page is defined as is in the Manifest file:

```javascript
// src/manifest.json

{
  …
  "background": {
    "scripts": [
      "src/lib/process.js",
      "src/background.js"
    ],
    "persistent": true
  }
}
```

With this content in the `process` file:

```javascript
// src/lib/process.js

function BackgroundProcess(){
  this.channel = "production";
}
```

And this background controller file:

```javascript
// src/background.js

var process = new BackgroundProcess();

// process.channel === "production";
```

I like this pattern because we can **manipulate our context more easily** through the `process` variable in the DevTools. So as it makes our tests damn easy to write. And the *background* testable even outside a background context (because it became a simple public API).

## Implementing the Extension Channel

Our channel configuration informations will lie in a specific file, alongside the `manifest.json`. It will help our API to remain the same by keeping the *differences* in this file.

```javascript
// src/channel.json

{
  "channel": "dev"
}
```

We design our public API first:

```javascript
// src/background.js

var process = new BackgroundProcess();
process.requetChannelConfig(chrome.runtime.getURL("channel.json"));
```

This file is loaded through an XMLHttpRequest during the `BackgroundProcess` initialisation:

```javascript
// src/lib/process.js

BackgroundProcess.prototype.requetChannelConfig = function requetChannelConfig(url){
  var xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  //xhr.responseType = "json"; //in the future it will work…
  xhr.addEventListener("load", this.channelResponseHandler.bind(this));

  xhr.send();
};

BackgroundProcess.prototype.channelResponseHandler = function channelResponseHandler(progressEvent){
  var channelConfig = JSON.parse(progressEvent.target.responseText);

  this.channel = channelConfig.channel;
};
```

OK, now we have something nice. We can figure out the context of execution of our extension. It is about time to figure it out visually.

## Changing The `browserAction` Icon

We will update the previous code to eventually [update the browser icon](http://developer.chrome.com/extensions/browserAction.html#method-setIcon) to reflect a visual change.

```javascript
// src/lib/process.js

BackgroundProcess.prototype.channelResponseHandler = function channelResponseHandler(progressEvent){
  //…

  this.channel = channelConfig.channel;

  if (typeof this[this.channel+'Setup'] === "function"){
    this[this.channel+'Setup'](channelConfig);
  }
};

BackgroundProcess.prototype.devSetup = function devSetup(config){
  chrome.browserAction.setIcon({
    "path": chrome.extension.getURL("src/resources/icon-dev.png")
  });
};
```

This way, we execute a post-configuration code only if this latest is avaivable. We alter the extension behaviour only if we  deviate from the production environment.

## But, What About Production Channel?

As for now, the `channel.json` is systematically loaded. Even if we zip the content of the `src/` folder to upload it on the Chrome Web Store.

I rely on [Grunt](http://gruntjs.com) to automate my packaging. For this example, we only need [grunt-zip](https://github.com/twolfson/grunt-zip).

The workflow is the following:

1. selecting recursively the content of the `src/` folder;
1. during the selection process, excluding the `channel.json` file;
1. compressing the content of the temporary folder in a ZIP file;
1. when in production, the `channel.json` will not be loaded because it won't be part of the package;
1. as a consequence, the `load` event will never be fired;
1. as a result, the `channel` value will remain `production`.

The `Gruntfile` resulting in this way would look like this:

```javascript
// Gruntfile.js

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    manifest: grunt.file.readJSON('src/manifest.json'),

    zip: {
      extension: {
        cwd: 'src/',
        src: [
          'src/**/*',
          '!src/channel.json'
        ],
        dest: "dist/<%= pkg.name %>-<%= manifest.version %>.zip",
        dot: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['zip']);
};
```

### What's Next?

Instead of executing a dynamic function (cf. the prior `devSetup`) — thus increasing the size of our `BackgroundProcess` class and breaking the single responsible principle — we could **spread the configuration via an Extension event** (cf. [chrome.runtime.sendMessage](http://developer.chrome.com/extensions/runtime.html#method-sendMessage)). **Several layers of the app can react to a same event**. Like you would do in any DOM application.

Another approach would to be to *monkey patch* the `BackgroundProcess` instance by **loading an additional file before initialising the process**. It may be easier than the previous solution but it could also *lead to more hacky code*.

We could also use the `FileAPI` to **browse a local extension configuration folder**, matching the [Semantic Versioning](http://semver.org/) of our Manifest extension version:

* `v0.3-beta` -> `config/beta.json`;
* `v0.2` -> `config/stable.json`
* etc.

It's up to you to choose the complexity you add in your extension. **The only thing we want is that is works**!

Feel free to share your remarks, improvements or correct any English mistake I made :-)



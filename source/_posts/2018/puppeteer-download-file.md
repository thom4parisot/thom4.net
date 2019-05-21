---
title: 'Download a file with Headless Chrome, Node.js and Puppeteer'
lang: en-GB
categories:
  - JavaScript
  - WebDev
tags:
  - node.js
  - javascript
  - browser scripting
  - automation
cover: 
  type: full
  url: /images/2018/03/markfield-road.jpg
date: 2018-03-24 13:34:18
---

I recently had a go with [Headless Chrome][] and [Puppeteer][] to download
bank account statements.
Browser scripting has never been that easy, up to date and closer to a modern development stack.

One thing has been harder to coin though: **handling the download of a file and hand it over to Node.js**.
This blog post documents how to achieve it.

<!--more-->

# Some Context

The content I was _headed_ to automate the download is tricky to obtain:

1. there is no direct nor predictable download URL
2. it is placed behind a login screen
3. the download is bound to a **multi page process**
4. each page writes something in a server session

The download eventually starts when one has submitted the various forms in the right order.

![](/images/2018/03/river-lea-elizabeth-park.jpg)

# Puppeteer Page and Browser API

I found [Puppeteer][] implementation quite clever: the browser is manipulated directly from the Node.js app itself thanks to the [DevTools Protocol][].
I find this move interesting because it provides a better feedback loop to the software.
Our browser scripts are now closer to the headless browser.

_Puppeteer_ has several concepts but 2 of them are of our interest when
automating browser actions:

- *Browser API*: it's what happens at a browser level
- *Page API*: it's what happens in a browser tab

We can navigate in a page, intercept browser requests before they even reach a page and click on elements.
The _Promise_-based flow makes it is easy to script alongside `async`/`await`.

# The Download Issue

One thing seemed quite _different_ though: the download of the bank statement
triggered a _download_.

I could not see the download starting by looking at the browser events:

```js
const puppeteer = require('puppeteer');

const browser = await puppeteer.launch();
const page = await browser.newPage();

browser.on('targetchanged', target => console.log(target.url()));
```

Likewise with page events.

My script would end up nicely: the download would have been triggered but no data were written on disk.

![](/images/2018/03/river-lea-lower-clapton.jpg)

# Fetch Forest, Fetch!

I saw other people [reporting](https://github.com/GoogleChrome/puppeteer/issues/1191) the [same](https://github.com/GoogleChrome/puppeteer/issues/299) [issue](https://github.com/GoogleChrome/puppeteer/issues/948).
Download would not be triggered in _headless_ mode, no matter what is attempted.

[This comment](https://github.com/GoogleChrome/puppeteer/issues/1191#issuecomment-374261236) led me to think **the answer was… to not submit the form** per say.
But rather to _evaluate code in context_ and use [`fetch()`][] to submit the form and pass the resulting response to Node.

So instead of banging my head around these two lines:

```js
const [response] = await Promise.all([
  page.waitForNavigation({ waitUntil: 'networkidle0' }),
  page.click('form[name="telechargementForm"] input[name="btConfirmer"]'),
]);

// I expected the statement to be the body of the navigated page
return response.buffer();
```

I had to instead _evaluate_ these ones:

```js
const result = await page.evaluate(async () => {
  const form = document.querySelector('form[name="telechargementForm"]');
  const data = new FormData(form);

  // if the button value is not part of the request
  // then the download is not prompted
  data.append('btConfirmer', 'Confirmer');

  //
  return fetch(form.action, {
    method: 'POST',
    credentials: 'include',
    body: data,
  })
  // I'm expecting to download a CSV so it's "safe"
  // It is actually sent as latin1 instead of utf8…
  .then(response => response.text());
});

// CSV data as plain text
return result;
```

It is more verbose than the initial "submit" but it works:

1. the [`FormData` API][] helps capture the form values;
2. `fetch` sends the values and the session cookies;
3. the download data are part of the `fetch()` response.

The resulting data can be parsed within the same scripting application
with CSV parsing npm modules. Seemlessly.

The full script to download the bank statements can be found in [this repository](https://github.com/dtc-innovation/credit-coop-statements/blob/1187d005f9375e887c755dcf3e00fd8097f3b65b/index.js).

![](/images/2018/03/walthamstow-marshes.jpg)

[Headless Chrome]: https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
[Puppeteer]: https://github.com/GoogleChrome/puppeteer
[DevTools Protocol]: https://github.com/ChromeDevTools/devtools-protocol
[`fetch()`]: https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
[`FormData` API]: https://developer.mozilla.org/docs/Web/API/FormData/Using_FormData_Objects

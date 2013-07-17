title: A Customized Chrome Extension Icon For Your Dev Version
date: 2013-07-17 13:57:39
tags:
---

## Requesting Extension Channel

https://github.com/oncletom/chrome-fip/blob/c3390257d892d6b94a10909e8ce8d5b10ecde0c7/src/background/controller.js#L152-167

## Changing `browserAction` Icon

https://github.com/oncletom/chrome-fip/blob/c3390257d892d6b94a10909e8ce8d5b10ecde0c7/src/background/controller.js#L169-175

## And For Production?

I just don't include the `channel.json` file during the packaging process.

https://github.com/oncletom/chrome-fip/blob/c3390257d892d6b94a10909e8ce8d5b10ecde0c7/Gruntfile.js#L42

A good test would be to package the extension, unzipping it, and asserting on the presence/absence of this file.





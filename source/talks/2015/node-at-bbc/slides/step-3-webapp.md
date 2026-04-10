<!-- .slide: data-state="contrasted" -->

# #3 **Application**

@@@

![](images/webapp.png)

@@@

```bash
npm install --save @project/element

PORT=3000 npm start

# static -p ${PORT:-5000} --gzip dist/
```

@@@

## ENV = **portability**

(think of it as a function argument)

@@@

## Problem

`npm install` can fail (for various reasons).

~~~~

Package version can be deleted, semver madness, registry can be down.

@@@

## `npm pack`

Solid artifact.

@@@

## Something is **missing**

Install, build and and run are lost in a README. 

<!-- .slide: data-state="contrasted" -->

# #3 WebApp

@@@

![](images/webapp.png)

@@@

```bash
PORT=3000 npm start

# static -p ${PORT:-5000} --gzip dist/
```

@@@

## `stdin` = env variables

@@@

## `stdout` = i/o

HTTP responses.

@@@

## `stderr` = *varies*

HTTP error codes, SEGFAULT, network misconfiguration. 

@@@

## State = *varies*

In memory, data store, ephemeral files.

~~~~

Nothing guarantees its integrity.

@@@

## Reproducibility = *should*

Same args should produce same result. Depends of integrity.

@@@

## `npm install`

Cannot be guaranteed.

~~~~

Package version can be deleted, semver madness, registry can be down.

@@@

## `npm shrinkwrap`

Guarantees exact same version.

@@@

## `npm pack`

Guarantees exact same artefacts.
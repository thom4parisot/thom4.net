<!-- .slide: data-state="contrasted" -->

# #4 Container

@@@

![](images/dockerfile.png)

@@@

```bash
docker run -ti -p 5000:5000 bbcrd/webapp
```

@@@

## `stdin` = env variables, `VOLUME`

@@@

## `stdout` = i/o

HTTP responses.

@@@

## `stderr` = *varies*

Same as Webapp + Docker bugs. 

@@@

## State = *predictable*

Data store, `VOLUME`, container to image, void containers.

@@@

## Reproducibility = *exact*

(re)start from predictable point.

@@@

## `docker {push,pull}`

Move install state over network.

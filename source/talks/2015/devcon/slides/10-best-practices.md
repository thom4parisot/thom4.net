<!-- .slide: data-state="contrasted" -->

## **Best** practices

@@@

## The **order** matters

- *first* line which changes invalidates the rest
- so `COPY` instructions as late as possible

@@@

## **Explicit** FROM statement

```
FROM ubuntu:14.04
```

is better than

```
FROM ubuntu
```

~~~~

Remember, we want predictability: next major of Ubuntu should not break next deploy.

@@@

## Use tools you **know**

(or want to learn about)

To monitor, automate, deploy etc.

@@@

## **Simplify** commands

We use *Makefile* for consistency.

```bash
# builds Docker image
make build

# runs tests in containers
make test

# pushed the image to our own registry
make push
```

~~~~

As a bonus what works for a developer works for the CI too.

@@@

## Watch out **CPU architecture**

- Some apps checks for CPU at runtime
- ARM needs different packages and base images

@@@

## How do you address **security**?

- What if someone gains access to your container?
- OpenAM network driver?

@@@

## Manage **outside** of containers

*syslog* driver is a good choice.

```bash
$ cat /etc/default/docker

DOCKER_OPTS="--log-driver=syslog"
```

~~~~

Forward with rsyslog/kibana etc. Plenty of tooling already out there.


@@@

## **Own** your images

We build on top of a *baseimage* and derive to optimised stack images.

```bash
FROM bbcrd/baseimage

…
```

```bash
FROM bbcrd/node:4.x

…
```

~~~~

- can be better for security than some random image found on Docker Hub
- easier to spread custom utilities (image cleanup)
- enforces practices in your org
- tailored to your needs
- you can automate the rebuilds daily

@@@

## Suitable for **development** too

Inject work directory and enable auto-reload.

```bash
docker run -ti \
  -v $(pwd)/src:/app/src:ro \
  -p 0.0.0.0:5000:3000 \
  thom4/devcon-nodejs-app npm run start-dev
```

<!-- .slide: data-state="contrasted" -->

## **Single** component

@@@

## **Immutable** build

```bash
docker build -t thom4/devcon-nodejs-app

Step 0 : FROM node:4-slim
 ---> 81876916bca2
Step 1 : WORKDIR /app
 ---> Using cache
 ---> 44a4f0b3ef85
Step 2 : COPY package.json ./package.json
 ---> Using cache
 ---> 48cf3e569dc8
Step 3 : RUN npm install
...
```

@@@

## Run

```bash
docker run -ti thom4/devcon-nodejs-app
```

@@@

## **Explicit** behaviour

Nothing happened unless *requested*.

@@@

## Port binding w/ *host*

```bash
# docker run -p [net-interface:host-port]:internal-port <image>
docker run -ti -p 0.0.0.0:5000:3000 thom4/devcon-nodejs-app
```

@@@

## Port binding w/ *containers*

```bash
docker run -d --name app thom4/devcon-nodejs-app

docker run -ti --link "app:app_alias" thom4/devcon-nodejs-app <command>
```

~~~~

```
docker run -ti --link "app:app_alias" thom4/devcon-nodejs-app env
docker run -ti --link "app:app_alias" thom4/devcon-nodejs-app ping app_alias
docker run -ti --link "app:app_alias" thom4/devcon-nodejs-app curl http://app:app_alias:3000
```


@@@

## **Runtime** configuration

```bash
docker run -e KEY_VALUE --env-file=.env-file <container>
```

```
# .env-file
NODE_ENV=test
DATABASE_URL=postgresql://host:port/db?pool=25
```

Think [Twelve-Factor](http://12factor.net/). {.footer}

~~~~

```
docker run -ti --rm -p 0.0.0.0:5000:3000 -e MOTD="Hello Devcon" thom4/devcon-nodejs-app
```

@@@

## Multiply!

```bash
docker run -d -P thom4/devcon-nodejs-app
docker run -d -P thom4/devcon-nodejs-app
docker run -d -P thom4/devcon-nodejs-app
docker run -d -P thom4/devcon-nodejs-app
docker run -d -P thom4/devcon-nodejs-app

# …

docker ps
```

~~~~

```
docker inspect -f '{{range $p, $conf := .NetworkSettings.Ports}}{{(index $conf 0).HostPort}}{{end}}' $(docker ps -q)
```

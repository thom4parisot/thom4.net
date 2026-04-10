<!-- .slide: data-state="contrasted" -->

## Enters **Docker**

(circa 2013)

@@@

## Docker wraps *build instructions* and an *OS system* in *layered partitions*

@@@

```dockerfile
# Dockerfile
FROM ubuntu:trusty

RUN apt-get install -y nodejs
COPY package.json /app/package.json
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
```

@@@

## Multiple **benefits**

- all the benefits of LXC
- simpler instructions than LXC
- portable images (Docker Hub, private registries, tar exports)
- easier to address networking and partition mounting

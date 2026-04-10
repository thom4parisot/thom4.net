<!-- .slide: data-state="contrasted" -->

# #4 **Container**

@@@

![](images/dockerfile.png)

@@@

```bash
docker run -ti \
  -p 5000:5000 \
  -e STREAM_API_URL=https://... \
  bbcrd/webapp
```

@@@

## *Application* as a **function**

`docker run -d ...` * `n`

@@@

## Dépendances **système**

Application + dépendances {langage, système, ressources).

@@@

## **Intégration Continue**

`docker-compose -f ci.yml run npm test`

(mais on le cache derrière un `make test`)

@@@

## Le **CPU** compte

(x86, ARMv6 etc.)

@@@

<!-- .slide: data-background="images/docker-hub.png" data-state="background-light" -->

## `docker push`

@@@

<!-- .slide: data-state="contrasted" -->

# **Demo sympa**

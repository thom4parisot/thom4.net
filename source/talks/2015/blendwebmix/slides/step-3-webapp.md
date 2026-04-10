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

## ENV = **portabilité**

(penser arguments de fonction)

@@@

## Problème

`npm install` marche pas à tous les coups.

~~~~

Package version can be deleted, semver madness, registry can be down.

@@@

## `npm pack`

Extraction solide

@@@

<!-- .slide: data-background="images/webapp-rails.png" data-state="background-light" -->

## **Transportabilité**

(rendu iframe, puis rails-react puis gulp)

<!-- .slide: data-state="contrasted" -->

# C'est quoi une **fonction** ?

@@@

## `fn(...args)`

@@@

## `let result = fn(...args)`

@@@

## `try { fn(...args) }`
## `catch (err) { ... }`

~~~~

L'erreur est un signal, ce n'est pas rien.

@@@

## `let emitter = fn(...args)`
## `emitter.on('success', ...)`

@@@

## `fn(...args).then(...)`

@@@

<!-- .slide: data-state="contrasted" -->

## Bref, une fonction c'est …

- à entrée identique, sortie **identique**
- le produit de la fonction n'est **pas persisté** par la fonction
- **reproductible** à l'infini*\**

*\** moyennant un environnement favorable {.footer}

~~~~

Matrices d'environnement : versions d'interpréteur, de navigateur etc.

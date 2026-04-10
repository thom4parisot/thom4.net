<!-- .slide: data-state="contrasted" -->

# What is a **function**?

@@@

## `fn(...args)`

@@@

## `const result = fn(...args)`

@@@

## `try { fn(...args) }`
## `catch (err) { ... }`

~~~~

The error is a signal, this is not *nothing*.

@@@

## `const emitter = fn(...args)`
## `emitter.on('success', ...)`

@@@

## `fn(...args).then(...)`

@@@

<!-- .slide: data-state="contrasted" -->

## To sum it up, a *function* is…

- a predictable output for a given input
- the function itself **does not persist** its own output
- **reproductible** at will

~~~~

Matrices d'environnement : versions d'interpréteur, de navigateur etc.

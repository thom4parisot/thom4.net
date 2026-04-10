## Level 1: *not* using Grunt

@@@

## Tasks *without* a task runner?

~~~~

What if we would not use grunt for simple tasks.

A simple task is an action which has only a couple of different configurations.

Anybody knows a good alternative for that?

@@@

## `npm run`

~~~~

Simple. Native. Less dependencies. Easier configuration.

@@@

## `npm` vs `grunt-http`

~~~~

Yesterday someone talked about `grunt-http`. This is something you can do without grunt.

@@@

## Configuration

```javascript
/* package.json */
{
  "scripts": {
    "reload": "curl --head http://coldfusion-host:8000/cfm?action=reload"
  }
}
```

@@@

## Running the task

```bash
npm run reload
```
## `npm run`

@@@

### `npm run jshint`

vs.

### `grunt jshint`

@@@

## `npm run jshint`

```bash
npm install --save jshint
```

```javascript
{
  "scripts": {
    "jshint": "jshint --config .jshintrc lib/**/*.js"
  }
}
```

@@@

## `grunt jshint`

```bash
npm install --save grunt grunt-contrib-jshint
```

```javascript
grunt.initConfig({
  jshint: {
    all: {
      src: 'lib/**/*.js'
    },
    options: {
      jshintrc: '.jshintrc'
    }
  }
});
```
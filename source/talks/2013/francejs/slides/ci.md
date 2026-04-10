## Intégration continue

CI avec Maven.

@@@

```xml
  <configuration>
    <tasks>
      <exec executable="npm" dir="${project.basedir}" failonerror="true">
        <arg value="test" />
      </exec>
    </tasks>
  </configuration>
```

@@@

## `npm test`

@@@

## `package.json`

```javascript
{
  "scripts": {
    "test": "grunt jshint && grunt test"
  },
  "dependencies": {
    "grunt": "~0.4.1",
    "grunt-cli": "~0.1.9"
  }
}
```

@@@

### `npm install -g grunt-cli`

vs.

### `npm install --save grunt-cli`

@@@

## Isolation du contexte global

`npm run <task>` regarde dans `./node_modules`.

Permet de maitriser la stack.

`npm` devient la seule dépendance système.
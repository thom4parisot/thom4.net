<!-- .slide: data-state="contrasted" -->

# #2 UI Element

@@@

![](images/ui-element.png)

@@@

```javascript
import Component from './lib/Cover.jsx'

React.render(Component, { … })
```

@@@

## `stdin` = state data

@@@

## `stdout` = React Element

Renders as HTML, DOM tree.

@@@

## `stderr` = *varies*

Syntax, runtime.

@@@

## State = *predictable*

It is only a JavaScript object.

@@@

## Reproducibility = *exact*

Same data should guaranty same behaviour.

@@@

```javascript
exports Cover extends React.Element {
  render(){
    let className = this.state.active ? 'active' : '';

    return (<div className={className}>
      <h1>{this.props.title}</h1>
    </div>);
  }
}
```

@@@

## browserify!

Scoped assets, isolated transforms.

@@@

```javascript
// index.js
require('./stylesheet.scss');

module.exports = {
	Cover: require('./lib/Cover.jsx')
};
```
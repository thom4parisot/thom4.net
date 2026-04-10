<!-- .slide: data-state="contrasted" -->

# #2 **UI** component

@@@

![](images/tile.png)

@@@

![](images/card.png)

@@@

![](images/oneliner.png)

@@@

```javascript
import { Cover } from '@project/element'

React.render(Cover, { … })
```

@@@

## **Autonomous**

We *bundle* CSS, images et tooling.

@@@

```javascript
require('./cover.scss');

import { Component } from 'react';

exports default class Cover extends Component {
  render (){
    let className = this.state.active ? 'active' : '';

    return (<div className={className}>
      <h1>{this.props.title}</h1>
    </div>);
  }
}
```

@@@

## **browserify** all the way!

*transforms* are isolated and chainables.

@@@

<!-- .slide: data-background="images/npm-private-registry.png" data-state="background-light" -->

## `npm publish`

~~~~

`.npmrc` pour cibler le registre privé.

@@@

<!-- .slide: data-background="images/webapp-rails.png" data-state="background-light" -->

## **Movable**

(iframe rendering, then react-rails, then gulp, then pure npm)

@@@

<!-- .slide: data-state="contrasted" -->

# **Demo**

@@@

> This is how I'd like to work on all the projects I am involved in.

— Diego, UI designer

<!-- .slide: data-state="contrasted" -->

# #2 Élément **graphique**

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

## **Autonomie**

On *embarque* CSS, images et outillage.

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

*transforms* isolés et chainables.

@@@

<!-- .slide: data-background="images/npm-private-registry.png" data-state="background-light" -->

## `npm publish`

~~~~

`.npmrc` pour cibler le registre privé.

@@@

> C'est comme ça que j'aimerais travailler sur tous mes projets.

— Diego, UI designer

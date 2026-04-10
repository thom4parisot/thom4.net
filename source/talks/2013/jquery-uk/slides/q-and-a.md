## Killing the FUD

The Internet told me:

* the Promises are *everything*
* the Promises are *Evil*

@@@

## Callback vs. Promise vs. Event

Callbacks are for *easy* and *simple* uses.

```javascript
nodes.value(function(item){
  return item.service_id;
});
```

Events are for vertical code expansion.

```javascript
MyModule.prototype.init = function init(view){
  view.$submit.on('click', this.handleSubmit);
  view.$document.on('click keyup', this.logEvent);
};
```

@@@

## When to use them?

Some considerations to think about to know when to use Promises.

* simplifying a *workflow contract*
* *flattening* code nesting
* undeterminate duration *async task*
* *coordinating* multiple async tasks

<br>

### *tl;dr*: modularize chained tasks.

@@@

## jQuery Deferred is not Promise/A+ compliant

Who cares? As long as it helps you to:

* simplify your code
* keep your code maintainable (for you and your peers)

@@@

## Remember kids

Patterns and tools help to *solve problems*.

**You** solve the *problems*.

FUD solves *nothing*.

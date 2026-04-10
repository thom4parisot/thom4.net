## Digging into jQuery.Deferred

Learning to use Promises, the soft way.

@@@

## Consume the API

In jQuery 1.8+: `$.ajax`, `$.animate`, `$('<selector>')`

<br>

```javascript
var $deferred = $.post('/cheese', {
  name: "Livarot"
});

$deferred
  .done( syncLocalStorage )
  .done( updateUI )
  .fail( displayError )
  .always( logNetworkResponse );
```

@@@

## Create your first Deferred

```javascript
function getDelayedUserInput(){
  var $deferred = $.Deferred();

  setTimeout(function(){
    $deferred.resolve(prompt("Anything to say?"));
  }, 1000);

  return $deferred;
}

$('input').on('click', function(e){
  getDelayedUserInput().done(function(user_input){
    $(e.target).val(user_input);
  });
});
```
<small>[See on JSBin](http://jsbin.com/ocadol/3/edit).</small>

@@@

## Deal with race condition workflows

* `then()` enables data filtering.
* `when()` is a `done()` for multiple promises.

```javascript
$.when( $.getJSON('/page/1'), $.getJSON('/page/2') )
  .then(function(page1_data, page2_data){
    return page1_data.concat(page2_data);
  })
  .done( displayCombinedData )
  .fail( displayError );
```

@@@

## Sharing safely your Deferred

`jQuery.Deferred` vs. `Deferred.promise()`.

<br>

```javascript
var $deferred = $.Deferred();
var $promise = $deferred.promise();

$promise.done(function(value){
  console.log("Oh my "+value);
});

// $promise is read-only
$promise.resolve("gosh");

// will log 'Oh my head'
$deferred.resolve("head");
```

<small>[See on JSBin](http://jsbin.com/uzokam/1/edit).</small>

@@@

## Improving our first Deferred

```javascript
function getDelayedUserInput(){
  var $deferred = $.Deferred();

  setTimeout(function(){
    $deferred.resolve(prompt("Anything to say?"));
  }, 1000);

  return $deferred.promise(); // now safe
}

$('input').on('click', function(e){
  getDelayedUserInput().done(function(user_input){
    $(e.target).val(user_input);
  });
});
```

<small>[See on JSBin](http://jsbin.com/ocadol/4/edit).</small>

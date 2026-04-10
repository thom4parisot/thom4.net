## Tale of a country relocation

Let's use another real life example <small>(that's still better than *Hello world examples*)</small>.

1. opening a bank account
1. finding a new place to live
1. request a NINo
1. ask for a debit card

And hope for an on-time payday to finally live like a new settler!

@@@

## Opening a bank account

```javascript
function requestBankAccount(job, postal_address){
  var $deferred;

  // expect an 'account' object to be resolved
  $deferred = $.post('http://bank.com/account', {
    job: job,
    address: postal_address
  });

  return $deferred.promise();
}
```

@@@

## Assembling the workflow

Let's assume we have a `$job` promise available in the scope.

```javascript
var $address, $account, $NINo, $debitCard;

$address = requestAppartment(job);

$.when($job, $address).done(function(job, address){
  $account = requestBankAccount(job, address);
  $NINo = requestNINo(job, address);

  $account.done(function(account){
    $debitCard = requestDebitCard(account, address);
  });
});
```

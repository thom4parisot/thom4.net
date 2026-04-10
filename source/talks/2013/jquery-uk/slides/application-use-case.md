## Tale Of A UK Job Application

### *And Pardon my French*

1. Submitting an application form
1. Being shortlisted
1. Phone Interview
1. Technical Interview
1. Physical Interview
1. Salary Negociation

Then, **accept the contract and relocate** or …

@@@

## Let's translate that in JavaScript…

@@@

```javascript
(function jobApplication(){
  (function shortlist(data){
    (function phoneInterview(){
      (function technicalInterview(data){
        (function physicalInterview(){
          (function salaryNegociation(payload){
            if (payload.job){
              acceptContract() && relocate();
            }
            else throw SyntaxError("Too bad…");
          })({ job: "Software Engineer" });
        })();
      })({ script: "eval('alert(true);')" });
    })();
  })({ why: "I speak JavaScript!" });
})();

```

@@@

## Badge Unlocked: *Pyramid* of Doom!

![](images/doom.jpg)


@@@

## Promisification!

@@@

```javascript
var $job = $.Deferred();

$jobApplication
  .progress( updateApplicationState )
  .done( acceptContract )
  .done( relocate )
  .fail( keepCalmAndDrinkWine );

$jobApplication
  .notify({ state: "shortlist" })
  .notify({ state: "phone_interview" })
  .notify({ state: "technical_interview" })
  .notify({ state: "physical_interview" })
  .notify({ state: "salary_negociation" });

$jobApplication.resolve({
  job: "Software Engineer"
});
```

<small>[See on JSBin](http://jsbin.com/episez/6/edit).</small>

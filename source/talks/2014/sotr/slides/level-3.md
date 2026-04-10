## Level 3: your own task

<!-- .slide: data-background="images/everyday-kx-11m.jpg" -->

~~~~

Even though the Grunt ecosystem is extremely wide and varied, you will not necessarily find a plugin which does what you want, or the way you want.

Maybe you should consider contributing to a relevant plugin before starting your own flavour of it.

Otherwise, let's create our first task.

@@@

<!-- .slide: data-state="contrasted" -->

## i18n sync from a Spreadsheet task

~~~~

Let's say we have an online spreadsheet which contains translations. This is handy because it has all the needed UI to handle collaboration and so on.

We would like to retrieve it to create a translation catalogue back in our application.

@@@

```bash
grunt i18n:scottish
```

~~~~

But wait a moment, if we write a Grunt task, how can we switch over the newest and trendiest tool ever? Does it imply we have to rewrite everything over and over? A kind of tedious task we are actually fighting against…

Hopefully no we do not need to.

@@@

## Reconsidering a *task*

- configuration (the Gruntfile)
- orchestration (the `grunt` package)
- business logic (this is you)
- tests (this is you, again)
- documentation (this is you, still)

@@@

## Configuration

```javascript
module.exports = function(grunt){
  grunt.initConfig({
    'i18n': {
      url: 'https://drive.google.com/…'
    }
  });

  grunt.loadTasks('./lib/grunt');
};
```

~~~~

We simply needs to declare the custom task in the Gruntfile.

This will load any JavaScript file within this folder and will call each module while passing `grunt` as an argument.

@@@

## Orchestration

```javascript
/* ./lib/grunt/remote-i18n.js */
module.exports = function(grunt){
  grunt.registerTask('i18n', function(lang){
    grunt.requiresConfig('url');

    var url = grunt.config.get('url');
    var done = this.async();

    if (!lang) {
      grunt.fail.fatal('No lang provided.');
    }

    require('./i18n.js').run(url, lang, done);
  });
};
```

~~~~

This is where the orchestration part falls into.

We want that file to be responsible of dealing with the task, and nothing else. We want it to be the last piece of code to contain references to `grunt` or anything related to its API.

@@@

## Business logic

```javascript
var async = require('async');

module.exports = {
  run: function(url, lang, done){
    var self = this;

    async.waterfall([
      self.download.bind(self, url),
      self.locateLanguage.bind(self, lang),
      self.writeJSON.bind(self, lang)
    ], done);
  }
};
```

~~~~

And here is how we expose the `i18n.js` module's business logic.

@@@

## Overall business logic view

```javascript
var async = require('async');

module.exports = {
  run: function(url, lang, done){},
  download: function(url, done){},
  getSheetFromCSV: function(lang, csv, done){},
  writeJSON: function(lang, sheet, done){}
};
```

@@@

```javascript
var request = require('request');
var util = require('./csv-utils.js');

module.exports = {
  download: function(url, done){
     request.get(url, function(error, response, body) {
       if (error) throw Error('Request error');
       if (response.statusCode !== 200) throw Error('Could not find  translation spreadsheet');
       if (!body) throw Error('Spreadsheet body is empty');

       var csv = util.CSVToArray(body);
       done(null, csv);
     });
  }
};
```

@@@

## Tests

```javascript
var download = require('../lib/i18n.js').download;

describe('download', function(){
  it('should fail if host does not exist', function(done){
    download('http://dummyHost', function(error){
      expect(error).to.be.an(Error);
      done();
    });
  });

  it('should raise an error on unexpected spreadsheet format', function(){
    // …
  });
});
```

~~~~

What do we test? The whole Grunt task?

Grunt is already tested by its team. So we are only interested to test our API. Because this is what we designed. An API.

@@@

## Stub (I/O and third parties)

```javascript
var sinon = request('sinon');
var gruntStub = sinon.stub(grunt.file, 'write');

expect(
  gruntStub.calledWith(
    'dummy config valueen-GB.js',
    'define('+dummyOutput+');'
  )
).to.be.ok;
```

~~~~

Prevent I/O hits and simulates all the possible use cases!

@@@

## Yield edge cases

```javascript
var requestStub = sinon.stub(request, 'get');

it('should parse properly a remote document', function(){
  requestStub.yields(null, {statusCode: 200}, validCSVContent);
});

it('should raise an error on unexpected spreadsheet format', function(){
  requestStub.yields(null, {statusCode: 200}, 'I am not CSV');
});

it('should fail if remote document is unavailable', function(){
  requestStub.yields(null, {statusCode: 500});
});
```


@@@

<!-- .slide: data-background="../writethedocs/images/api-example.png" -->

## Documentation

~~~~

Even if it an internal codebase, a lightweight documentation is more than welcome.

The task of writing a documentation (like a README) is your incentive to reduce misuses of your code.

This is also a way to make people working faster and better, sooner.

And if you feel proud and okay with it, you are now not so far from running the `npm publish` command ;-)

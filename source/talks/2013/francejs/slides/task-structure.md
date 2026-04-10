## Structurer une tâche Grunt

@@@

### Configuration

+

### Orchestration

+

### Librairie

+

### Documentation

@@@

## Configuration

```bash
grunt translateJS:english
```

@@@

## Orchestration

```javascript
// ./tasks/translate.js
var async = require('async');

module.exports = function(grunt){
  var steps = require('./lib/i18n.js')(grunt);

  // callable as `grunt translateJS:<lang>`
  grunt.registerTask('translateJS', function(lang){
    grunt.config.set('language', lang);

    async.waterfall([
      steps.downloadSpreadsheet.bind(steps),
      steps.locateLanguage.bind(steps),
      steps.createJSFile.bind(steps)
    ], this.async());

  });
};
```

@@@

## Librairie

```javascript
// ./lib/i18n.js
var request = require('request');

module.exports = function i18nTask(grunt){
	return {

    downloadSpreadsheet: function(done){
      // …
    },

    locatelang: function(csv, props, done){
      // …
    },

    createJSFile: function(sheet, props, done){
      // …
    }


  };
};
```

@@@

```javascript
// ./lib/i18n.js

module.exports = function i18nTask(grunt){
  return {

  downloadSpreadsheet: function(done) {
    var url = grunt.config.get('i18nUrl');

  request.get(url, function (error, response, body) {
    if (error) throw Error('Request error');
    if (response.statusCode !== 200) throw Error('Could not find  translation spreadsheet');
    if (!body) throw Error('Spreadsheet body is empty');

    var csv = util.CSVToArray(body);
    var props = spreadsheet[0].slice(2);
    done(null, csv, props);
  });

  }
};
```

@@@

## Tester

```javascript
// ./test/unit/lib/i18n.js

describe('i18nTask.downloadSpreadsheet', function(){
  it('should parse properly a remote document', function(){
    // …
  });

  it('should raise an error on unexpected spreadsheet format', function(){
    // …
  });

  it('should fail if remote document is unavailable', function(){
    // …
  });
});
```

@@@

## Stubber

Simuler des erreurs I/O.

Isoler les appels I/O.

Fonctionner localement, sans infrastructure externe.

@@@

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

@@@

```javascript
// ./test/unit/lib/i18n.js

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

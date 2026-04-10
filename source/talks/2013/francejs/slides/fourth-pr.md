## Pull Request #4

Automatiser les fichiers de traduction.

@@@

```javascript
grunt.registerTask('generateJS', 'Generate JS translation file for chosen language.', function(language) {
  function normaliseInput(string)  {
    var length = string.length,
    i = 0,
    newString = "";

    while (i < length) {
      if (i === 0) {
        newString += string.charAt(i).toUpperCase();
      } else {
        newString += string.charAt(i).toLowerCase()
      }

      i++
    }

    return newString;
  }

  var language = language || 'English';
  language = normaliseInput(language);

  var csv = grunt.file.read('./webapp/static/js/module/translations/variables.csv');
  // This will parse a delimited string into an array of
  // arrays. The default delimiter is the comma, but this
  // can be overriden in the second argument.
  function CSVToArray( strData, strDelimiter ){
    // Check to see if the delimiter is defined. If not,
    // then default to comma.
    strDelimiter = (strDelimiter || ",");

    // Create a regular expression to parse the CSV values.
    var objPattern = new RegExp(
      (
        // Delimiters.
        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +

        // Quoted fields.
        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +

        // Standard fields.
        "([^\"\\" + strDelimiter + "\\r\\n]*))"
      ),
      "gi"
      );


    // Create an array to hold our data. Give the array
    // a default empty first row.
    var arrData = [[]];

    // Create an array to hold our individual pattern
    // matching groups.
    var arrMatches = null;


    // Keep looping over the regular expression matches
    // until we can no longer find a match.
    while (arrMatches = objPattern.exec( strData )){

      // Get the delimiter that was found.
      var strMatchedDelimiter = arrMatches[ 1 ];

      // Check to see if the given delimiter has a length
      // (is not the start of string) and if it matches
      // field delimiter. If id does not, then we know
      // that this delimiter is a row delimiter.
      if (
        strMatchedDelimiter.length &&
        (strMatchedDelimiter != strDelimiter)
        ){

        // Since we have reached a new row of data,
        // add an empty row to our data array.
        arrData.push( [] );

      }


      // Now that we have our delimiter out of the way,
      // let's check to see which kind of value we
      // captured (quoted or unquoted).
      if (arrMatches[ 2 ]){

        // We found a quoted value. When we capture
        // this value, unescape any double quotes.
        var strMatchedValue = arrMatches[ 2 ].replace(
          new RegExp( "\"\"", "g" ),
          "\""
          );

      } else {

        // We found a non-quoted value.
        var strMatchedValue = arrMatches[ 3 ];

      }


      // Now that we have our value string, let's add
      // it to the data array.
      arrData[ arrData.length - 1 ].push( strMatchedValue );
    }

    // Return the parsed data.
    return( arrData );
  }

  var array = CSVToArray(csv);

  var propertyNames = array[0];


  var length = array.length, i = 0;
  var languageWanted;

  // locate the language wanted
  for (i ; i < length; i++) {
    var currentLanguage = array[i][1];
    if (currentLanguage == language) {
      languageWanted = array[i];
      break;
    }
  }

  //create the file needed for /define/'language'.js
  var languageString = 'define({';
  var fourSpaces = "    ";
  length = propertyNames.length;
  //make i = 2 to skip language.code and language.name being saved into the file
  i = 2;
  for (i ; i < length; i++) {
    languageString += "\n";
    languageString += fourSpaces + propertyNames[i] + " : '" + languageWanted[i] + "'";
    if (i + 1 !== length) {
        languageString += ",";
      } else {
        languageString += "\n";
      }
  }

  languageString += "});";
  var languageCode = languageWanted[0];
  grunt.file.write('./webapp/static/js/module/translations/' + languageCode + '.js', languageString);
  grunt.file.delete('./webapp/static/js/module/translations/variables.csv');
});
```

@@@

## Le cas typique

Et le MVP idéal.

@@@

## Réinvente la roue

Parsing CSV.

@@@

## Test par l'exécution

`assert(user.rant("ça marche pas"))`

@@@

## Manque de clarté du code

Lecture linéaire.

Code peu expressif quant à ses choix/opinions.

@@@

## Pourquoi ?

Manque d'expérience / temps à consacrer.

Peu de littérature à ce sujet.

Mimétisme.

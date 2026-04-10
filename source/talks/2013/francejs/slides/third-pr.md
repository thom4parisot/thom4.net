## Pull Request #3

@@@

```javascript
grunt.initConfig({
  sass: {
    /* content dynamically generated */
  },
  generateJS: {
    dest: '<%= dir.static_js %>/module/translations/',
    src: 'https://docs.google.com/spreadsheet/pub?key=xxx&output=csv'
  },
  generateINI: {
    dest: './core/src/main/BBC/News/Translation/',
    src: 'https://docs.google.com/spreadsheet/pub?key=xxx&output=csv'
  }
});

grunt.registerTask('default', ['jshint', 'sass_compile:dev']);
```

@@@

## Analyse

- 17 tâches maison
- des “surtâches”
- des potentiels doublons pour “faire juste ce qu’on veut”
- des configurations implicites

@@@

## Bref

### *Envie de tout réécrire*

Syndrôme classique ;-)

@@@

## Objectifs

### *Challenger* l’idée par l’équipe

### Ouvrir la PR le plus tôt possible

Permet de susciter des remarques des principaux intéressés.

### Améliorer la qualité

Et éduquer par l’exemple.
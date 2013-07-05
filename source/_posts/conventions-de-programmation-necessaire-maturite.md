title: "Conventions de programmation : la nécessaire maturité"
id: 1014
date: 2008-07-23 07:00:04
tags:
- bonnes pratiques
- code
- coding standards
- conventions
- css
- eclipse
- html
- Javascript
- pear
- php
- phpdoc
- symfony
categories:
- Développement Web
---

![Exemple](https://oncletom.io/images/2008/07/sample-php-code.png "Exemple de code PHP")

Tout développeur, que ce soit à l'école ou en apprenant sur le tas, écrit du code. J'espère n'avoir perdu personne à ce stade de l'explication ;-)

**Inconsciemment on cherchera à utiliser un style d'écriture avec lequel on se sent à l'aise**, qu'on pourra et saura relire facilement et dans le meilleur des cas, qui pourra être relu par une autre personne sans avoir à engager d'interprète.

Tout développeur tend donc à utiliser des [conventions de programmation](http://fr.wikipedia.org/wiki/Convention_de_nommage_(programmation)) (_coding standards_), que ce soit en HTML, PHP, CSS, JavaScript ou même en Cobol. Et **utiliser des conventions, c'est bien** !

<!--more-->

## Quelle convention de nommage adopter ?

Avant de choisir une convention, encore faudrait-il savoir quelles conventions existent :

*   pas de convention
*   [convention hongroise](http://fr.wikipedia.org/wiki/Notation_hongroise)
*   [convention PEAR](http://pear.php.net/manual/fr/standards.php)
*   [convention symfony](http://www.symfony-project.org/book/1_0/02-Exploring-Symfony-s-Code)
*   [convention Zend Framework](http://framework.zend.com/manual/fr/coding-standard.html)
*   [convention Wordpress](http://codex.wordpress.org/WordPress_Coding_Standards) (que j'abhorre)
*   etc.

Autant dire qu'il y a de tout et pour tous les goûts.
Ce qu'il faut retenir d'**une convention c'est qu'elle explicite des règles de développement** :

*   sur le nommage des éléments
*   sur l'indentation des éléments
*   sur les structures de contrôle (if, else, tout ça quoi)
*   sur la syntaxe des commentaires
*   sur la syntaxe de la documentation (le code auto-documenté c'est bon !)
*   sur l'organisation des fichiers, éventuellement

C'est pour ça que partir sur une **convention parfaite sur le papier mais inapplicable est une vaste fumisterie**. L'idéal étant de pouvoir reprendre du code dans un projet sans avoir eu besoin de lire la documentation pour en comprendre l'organisation.

Mon conseil : **essayez, choisissez** mais ne prenez pas non plus trop laxiste en terme de notation.
Une chose est sure : quand on a essayé une belle

## Mes conventions de nommage en PHP

[![Exemple de code PHP dans Eclipse](https://oncletom.io/images/2008/07/eclipse-php-code-sample-300x207.png "Exemple de code PHP dans Eclipse")](https://oncletom.io/images/2008/07/eclipse-php-code-sample.png)

J'avoue, la notation utilisée dans [symfony](http://www.symfony-project.org/) m'a tellement plu que je la réutilise quasiment partout. Ci-dessus, une illustration montrant du code pour un [plugin Wordpress](https://oncletom.io/code/wordpress/) (en PHP 4 malheureusement ...). Elle en présente un bon aperçu.

### Notation

J'utilise UpperCamelCase pour le nommage des classes _sauf_ s'il y a un préfixe qui, lui, reste en minuscule.
_Exemples_ : `class AmazonWidgetsShortcodes`, `class sfUploader`.

Pour ce qui est méthodes de classes, j'utilise lowerCamelCase. Comme ça on sait qu'on reste dans un objet et c'est pas plus mal.

Enfin, pour les fonctions orphelines, _helpers_ & cie, c'est tout en minuscule séparé par des underscore
(un nom particulier à ça ? _lowered_and_underscored_ ? ;-))
_Exemple_ : `add_filter()`

### Indentation

Dans l'indentation il y a 2 camps : celui des espaces et celui des tabulations.

J'ai suivi celui des **espaces** pour une simple et bonne raison : 1 tabulation a une taille différente selon les éditeurs, que ça soit votre IDE, votre shell ou n'importe quel logiciel de texte. L'idéal est d'avoir un rendu identique dans tous les éditeurs sans paramétrage.

En revanche, là encore je suis mais j'aime, je suis sur une **tabulation à 2 espaces** : c'est bête mais je trouve ça plus esthétique et on arrive moins rapidement à la limite de 80 caractères.

Cette "limite" n'est que virtuelle mais ouvrez un terminal, 80 lignes par défaut. C'est plus confortable de rester en-dessous de ce nombre. Ceci dit je fais quelques exceptions, des fois ;-)

### Structures de contrôle

On pourrait résumer à <cite>1 ligne = 1 action</cite> et 2 types d'utilisation.

Tout d'abord les structures dans le code à proprement parler :

*   un espace entre l'opérateur et la parenthèse ouvrante
*   un retour à la ligne à chaque accolade
*   pas d'espaces dans les lignes vides (résidus d'indentation)
*   systématiquement les accolades, même en cas de ligne unique après l'opérateur
*   opérateur ternaire quand ça reste simple, pas trop long et plus lisible

Côté templating en revanche j'utilise la [syntaxe alternative de PHP](http://fr.php.net/manual/fr/control-structures.alternative-syntax.php) à raison d'un opérateur par ligne :

```html
<ol class="posts">
<?php foreach($posts as $post): ?>
  <li id="post-<?php echo $post->getId() ?>">
    <a href="<?php $post->getPermalink() ?>">
      <?php echo $post->getTitle() ?>
    </a>
  </li>
<?php endforeach ?>
</ol>
```

### Syntaxe de la documentation

Enfin, pour terminer sur la partie PHP, [PHPDoc](http://www.phpdoc.org/) est surpuissante en plus d'être simple à utiliser. Comble du bonheur, sa syntaxe est réutilisable dans d'autres langages.

PHPDoc est le principe du **code autodocumenté** :

1.  vous commentez votre code avec la syntaxe PHPDoc
2.  vous générez sa documentation avec le programme PHPDoc (en HTML, PDF etc.)

L'idéal est de **documenter en même temps qu'on produit le code**. Par principe on revient rarement sur son propre code juste pour le loisir de le décrire, par manque de temps ou par flemme.

## Mes conventions de nommage en JavaScript

[![Exemple de code JavaScript dans Eclipse](https://oncletom.io/images/2008/07/eclipse-javascript-code-sample-300x288.png "Exemple de code JavaScript dans Eclipse")](https://oncletom.io/images/2008/07/eclipse-javascript-code-sample.png)

Ne vous inquiétez pas, je ne vais pas tout recommencer pour JavaScript ;-) Je suis à peu près la même logique qu'en PHP à part pour les accolades.

En effet si je conserve un comportement similaire pour les structures de contrôles (1 accolade par ligne) :

*   je ne fais pas de retour à la ligne sur les accolades/parenthèse ouvrante d'une fonction/objet anonyme
*   je ne fais pas de retour à la ligne après une accolade/parenthèse fermante s'il y a une virgule ou parenthèse après

```javascript
var OncleTom = {
  age:      25,
  pensee:   function(){
    return this.age * Math.random()
  }
};
```

## Mes conventions de nommage en CSS

![](https://oncletom.io/images/2008/02/css-folding.png "Folding en CSS")

Inutile de paraphraser ce que j'ai déjà écris dans mon article sur les [bonnes pratiques de codage CSS](https://oncletom.io/2008/02/26/bonnes-pratiques-codage-css/).

Deux lectures en une oui ;-)

## Conclusion

Bon au final on voit que ce n'est pas si compliqué que ça d'apporter un brin de rigueur.
On pourra même s'amuser à compléter le tout par la disposition des méthodes et fonctions d ans un fichier par ordre alphabétique (j'en connais un que ça fera sourire ;-)).

Les vues _Outline_ fournissent un plan du code et certains logiciels ne semblent pas disposer d'une fonction de tri. Et au cas où un jour vous n'auriez pas votre IDE favori sous le nez, ça ne mange pas de pain de fonctionner ainsi.

![Plan de code dans Eclipse (Outline)](https://oncletom.io/images/2008/07/eclipse-outline.png "Plan de code dans Eclipse (Outline)")

Que l'on travaille seul à plusieurs, et à plus fortes raison dans ce dernier cas, l'utilisation de notations et conventions est un gage de qualité. Ça rend le travail plus facilement interopérable avec d'autres développeurs, plus facile à relire, plus facile à maintenir.

**Ça n'empêchera jamais des bugs** ou de sortir du mauvais code mais c'est ça, c'est une autre histoire.

Enfin, j'aimerais terminer cet article en écrivant qu'il a fait l'objet d'une [chaîne par le Padawan PHPiste Damien Alexandre](http://blog.damienalexandre.fr/index.php?post/2008/07/19/Mes-conventions-de-programmation). C'était l'occasion de faire une réponse qui passe inaperçue ;-)

Ça ne m'empêchera en revanche pas de refiler la patate chaude à [Nic de Prendre Un Café](http://prendreuncafe.com/blog/), de tenter d'insuffler de l'activité au blog de [Xavier Lacot](http://lacot.org/blog), de Spipifier [Gastero Prod](http://www.gasteroprod.com), d'extirper une technique ninja pyjama à [remouk](http://shiii.org/) et pourquoi pas lire avec attention l'avis pythonien de [David Larlet](http://www.biologeek.com/journal/) ?

Et _just for fun_, un petit coup d'électrode à un de mes futurs étudiants, [Thierry Poinot](http://blog.thierry.poinot.fr/).
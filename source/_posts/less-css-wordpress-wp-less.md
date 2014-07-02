title: "LESS + CSS + WordPress = WP-LESS"
id: 1435
date: 2009-08-18 13:25:52
tags:
- css
- héritage
- less
- lessphp
- mixins
- objet
- plugin
- variables
- WP-LESS
categories:
- Projects
- WordPress
cover: /images/2009/08/wp-less-repository.png
---

[LESS](http://lesscss.org/) est une des briques qu'il manquait à CSS. Ce meta-langage apporte des fonctionnalités jusque là inédites telles que l'**héritage**, l'**injection** et les **variables**. [lessphp](http://leafo.net/lessphp/) porte ces avancées en PHP et ajoute ses propres fonctionnalités.

Cet outil me paraît **indispensable** alors j'ai décidé de l'intégrer à WordPress : [WP-LESS](http://wordpress.org/extend/plugins/wp-less/) est né.

<!--more-->

## LESS en quelques mots (ou lignes de code)

Pour mettre en exergue l'intérêt de LESS, je reprends un exemple officiel :

```less
#defaults {
  @width: 960px;
  @color: black;
}

.article { color: #294366; }

.comment {
  width: #defaults[@width];
  color: .article['color'];
}
```

Le source précédent utilise 3 principes :

*   les **variables** (dont leur nom est préfixé par un @)
*   les **namespaces** (ici, #defaults) pour regrouper des propriétés
*   les **accesseurs** (pour obtenir la couleur de l'article au sein du commentaire)

Une fois ce code compilé par LESS, la feuille de style générée se résume à ceci :

```less
.article { color:#294366; }
.comment {
  width:960px;
  color:#294366;
}
```

C'est simple et efficace. Surtout quand on sait que l'on peut effectuer des opérations mathématiques, y compris en utilisant les variables, la conception va se retrouver facilitée.

## L'intérêt de WP-LESS

[WP-LESS](http://wordpress.org/extend/plugins/wp-less/) intègre le parseur PHP, [phpless](http://leafo.net/lessphp/), au sein de WordPress pour minimiser le travail à fournir.

Une fois activé, dès qu'il détecte un fichier comportant l'extension `.less`, il **compilera automatiquement le fichier** pour produire des CSS interprétables par les navigateurs Web. Pour des raisons de performances, cette compilation n'est effectuée que lorsque le fichier `.less` est modifié. Cela implique également qu'à chaque mise à jour de votre fichier `.less`, vous n'avez pas à vous soucier de compiler son équivalent CSS.

De nombreux _hooks_ et _filtres_ sont placées un peu partout dans le code pour permettre à tout développeur, créateur de thème ou bidouilleur de se fixer dessus sans avoir à modifier le code du plugin. Et dans les rares cas où ça ne suffirait pas, tout est extensible puisqu'il suffit d'hériter de l'objet WPLessPlugin pour parvenir à vos fins.
Des tas de choses qu'on ne pourrait pas faire en simple PHP4 (message subliminal : WordPress doit abandonner PHP4).

WP-LESS agit en toute **transparence et simplicité**.

## Quel avenir pour WP-LESS ?

J'ai déjà en tête d'autres fonctions pour simplifier encore plus la vie :

*   permettre l'**intégration dans un thème** en tant que dépendance externe pour permettre aux thémeurs de redistribuer WP-LESS sans avoir à activer le plugin
*   proposer des _helpers_ pour ne pas avoir à passer par _wp_enqueue_stylesheet_ (même si c'est la meilleure solution)
*   dissocier les fichiers `.less` des feuilles de style dans l'éditeur de thème avec une validation lors de l'enregistrement
*   afficher un **tableau de bord** montrant l'état des fichiers de cache tout en pouvant les purger

Vous attendriez d'autres fonctionnalités de la part de ce plugin ?
title: "Bonnes pratiques de codage CSS"
id: 878
date: 2008-02-26 07:00:18
tags:
- aptana
- bonnes pratiques
- code
- coding standards
- compresseur
- conventions
- css
- CSSDoc
- eclipse
- feuille de style
- indentation
- logiciels libres
- optimisation
categories:
- Développement Web
- Standards du Web
cover: /images/2008/02/css-url-import.png
---


J'y songeais mais l'article «[De l'ordre, que diable !](http://blog.alsacreations.com/2008/02/21/411-de-lordre-que-diable-)» m'a incité à m'y atteler plus tôt que prévu.
Il n'y a en effet **pas de méthode universelle pour programmer** les <acronym title="Cascading Style Sheets">CSS</acronym> mais après plusieurs années d'expérience, j'ai affiné ma réflexion que je vous livre aujourd'hui.

Où l'on parlera de présentation en 1 ligne, de CSSDoc mais aussi de _folding_ et d'indentation. **En clair, tout plein de bonnes pratiques** de développement en CSS qui vous feront gagner du temps, vous éviterons de la sueur et sentent bon le travail de qualité.
<!--more-->

## Halte là et retour à la ligne !

J'ai utilisé pendant un moment la technique dite du [single line CSS](http://orderedlist.com/articles/single-line-css) ; à savoir 1 ligne par déclaration.
Je n'hésiterai pas une seconde à dire que je déconseille fortement cette écriture pour les raisons suivantes :

*   si on souhaite gagner de la place, il y a des compresseurs (je recommande [YUI Compressor](http://developer.yahoo.com/yui/compressor/)): pas la peine de réaliser ce travail nous-même ;
*   l'ajout de commentaires n'en est que plus compliqué : on a tous besoin de commenter certains passages cruciaux, notamment les _hacks_ et autres _fix_ ;
*   c'est tout bonnement illisible dès qu'on s'y replonge quelques semaines plus tard : imaginez pour quelqu'un qui n'a pas écrit le code !

Les arguments avancés pour cette technique ne tiennent pas la route : **on recherche avant tout la qualité et la facilité de relecture**. Les quelques kilo-octets à perdre se feront par le biais de programmes. Ça ne doit certainement pas entraver le développement.

## L'auto-documentation avec la syntaxe CSSDoc

Les habitués de Java connaissent [JavaDoc](http://java.sun.com/j2se/javadoc/).
Les habitués de PHP connaissent [PHPDoc](http://www.phpdoc.org/).
Les habitués de JavaScript connaissent [JsDoc Toolkit](http://code.google.com/p/jsdoc-toolkit/) (dérivé de [JsDoc](http://jsdoc.sourceforge.net/)).

Il était donc tout naturel que cette syntaxe de commentaires et d'auto-documentation soit utilisable en CSS avec [CSSDoc](http://cssdoc.net). Il n'y a pas d'inconvénient à l'utiliser, au contraire, que des avantages :

*   la syntaxe permet d'**harmoniser les commentaires** sur les projets impliquant plusieurs développeurs ;
*   sa syntaxe **facilite la relecture** puisqu'elle est connue et employée dans de nombreux langages, autres que les CSS ;
*   l'**auto-documentation du code** c'est faciliter la génération d'une documentation externe en automatisant le processus ;
*   documenter en même temps que l'on écrit c'est **comprendre ce que l'on fait** et gagner du temps en évitant une écriture _a posteriori_ ;

[La syntaxe CSSDoc est documentée](http://cssdoc.net/wiki/CssdocDraft),  aisément reconnaissable et est supportée par les meilleurs éditeurs CSS, dont [Aptana IDE](http://www.aptana.com/) :

```css
/**
 * @author Oncle Tom
 * @lastmodified Fev, 26 2008
 * @media print, screen
 * @site http://www.oncle-tom.net/
 */

/**
 * Redéfinition des balises HTML
 *
 * @section html
 * @todo utiliser un reset.css conforme
 */
html,
*{
  margin: 0;
  padding: 0;
}
```

## L'organisation hiérarchique

J'ai pour habitude de travailler avec une seule feuille de style par media. Comme je travaille sur des **hiérarchies thématiques**, leur découpage en plusieurs fichiers ne consiste qu'à du copier/coller. On peut ainsi facilement passer d'une mono-feuille à du multi-feuilles. Je ne suis pas un fervent utilisateur de ces dernières car un code bien lisible sur une seule page n'est pas problématique.
Je ne l'emploie que pour faciliter la réutilisation des CSS sur plusieurs projets partageant la même base graphique.

Concrètement, je vais d'abord organiser ma feuille pour redéfinir les éléments HTML génériques puis créer autant de sections qu'il n'y en a sur ma page (navigation, contenu, navigation de contenu, contenus annexes etc.).
Plus je m'avancerai dans la profondeur du balisage HTML et plus j'indenterai mon code. Cette indentation fait penser à celle utilisée par le [langage Python](http://www.python.org/).

On pourrait résumer cette convention à ceci :

*   **pas de tabulation**, que des espaces pour avoir le même affichage peu importe les éditeurs
*   2 espaces par tabulation
*   **attributs classés par ordre alphabétique** (même logique pour tout le monde)
*   une ligne d'espace entre les définitions ; pas de ligne entre les définitions proches/liées

C'est simple et voici un exemple de résultat :

```css
/**
 * Redéfinition du HTML
 */
a{
  text-decoration: underline;
}
  a img{
    border: none;
  }

p{
  line-height: 1.5em;
}
  p img{
    margin: 1.5em
  }
  p img.top{
    margin-top: 0;
  }

/**
 * Contenu
 */
#main-content{
  clear: both;
  width: 100%;
}

  /**
   * Articles
   */
  #articles{
    margin-bottom: 2em;
  }

    #articles h2{
      font-size: 1.5em;
      font-weight: bold;
    }
```

Les mieux organisés d'entre vous ajouteront un **tri par fréquence d'utilisation** afin d'optimiser les va-et-vient : on met en haut ce qu'on est susceptible de modifier le plus souvent, en bas ce à quoi on touchera rarement. Je ne vais pas jusque là mais ça reste envisageable, pertinent et surtout adapté aux plus chevronnés de l'optimisation.

## Autres conseils et astuces

### Utilisation de raccourcis

Les _aficionados_ de l'optimisation et du gain de temps apprécieront cette méthode, s'ils ne l'utilisent pas déjà. J'ai pour habitude de placer des raccourcis dans mes sections pour **faciliter l'utilisation d'une recherche via le raccourci clavier** <kbd>Control+F</kbd>.
Je préfixe chaque raccourci d'un symbole <kbd>=</kbd> :

```css
/**
 * Liens d'évitement
 * =evitement
 */
```

Je trouve cette méthode très pratique pour atteindre des portions de code. On évite ainsi un appel à la touche <kbd>Alt Gr</kbd> pour appuyer sur le # d'un ID (pour peu que l'on n'ait que des ID en tant que sections). On évite aussi les collisions de nom ou les recherches infructueuses pour cause de changement de nom de classes ou d'ID.

### De la sémantique, que diable !

Je suis particulièrement attaché à cette bonne pratique d'autant plus qu'elle ne tombe pas forcément sous le sens de tout le monde : **nommez vos ID et classes en fonction de leur _signification_, pas de leur _représentation_**. C'est la suite logique de la séparation fond et forme du HTML et des CSS.

**Mauvaise sémantique** :

```css
.rouge{
  color: red;
}

#sidebar{
  /* ... */
}

#top-links{
  /* ... */
}
```

**Bonne/meilleure sémantique** :

```css
.important{
  color: red;
}

#alternate-navigation{
  /* ... */
}

#main-links{
  /* ... */
}
```

`#sidebar` pourra être renommé différemment selon son contenu, selon que l'encart contienne des éléments de navigation supplémentaires, des informations utilisateur (`#user-content`) ou encore des widgets (`#widgets`).
En conservant votre HTML intact et en jouant sur les CSS, la `#sidebar` peut en effet se retrouver tout en bas, à l'horizontale. Aurez-vous toujours envie de l'appeler pareil ? Pas forcément. **Un bon nommage est un nommage qui se conserve peu importe l'aspect de la présentation**.

### Du choix de la langue

Cette bonne pratique s'applique aussi bien aux CSS qu'à d'autres langages. Il faut partir du principe qu'**il ne faut pas mélanger les langues dans le code**, tant dans les commentaires que dans le nommage des classes et ID. **Choisissez-une langue et restez avec**.
Certaines contraintes peuvent faciliter le choix de la langue : le travail avec une équipe internationale ou la redistribution du code. Dans ce cas l'anglais sera à 99% votre langue de prédilection.

Il n'y a pas de choix idéal : certains préféreront le tout français, d'autres le tout anglais. L'essentiel est que ce **choix soit motivé par des arguments objectifs, pas une préférence personnelle**.

### Recours au _folding_

J'en parle succintement mais le _folding_ consiste à utiliser votre éditeur CSS pour **masquer une partie de code**. Eclipse propose par exemple de masquer toutes les définitions et tous les commentaires : leur contenu n'est révélé qu'en le dépliant.

Je ne suis pas un fervent utilisateur de cette pratique bien que je respecte son utilisation. Je trouve qu'en utilisation les précédentes astuces (hiérarchie + recherche) on s'y retrouve très bien.

![Folding en CSS](/images/2008/02/css-folding.png)

## Conclusion

Ma méthodologie n'est pas parfaite, peut être perfectible et ne conviendra pas à tout le monde, par goûts ou par habitudes. Ces dernières sont cependant à combattre pour améliorer son travail. **Quoi de mieux qu'un code propre, bien documenté et où l'on trouvera facilement ce que l'on cherche** ?

C'est ce qui importe. **Il y a autant de façons de coder qu'il n'y a de développeurs**. Le tout est d'être ouvert aux améliorations possibles, aux méthodes existantes et à l'intérêt de leurs utilisations. Je trouverai peut-être cet article obsolète dans 1 an mais il aura été un point de passage.

J'espère qu'il le sera au moins en partie pour vous, développeur en herbe ou féru des pseudo-classes ;-)

[amazon-carrousel]730e7f70-dbbe-48ba-85e0-7a9cc5054dc8[/amazon-carrousel]
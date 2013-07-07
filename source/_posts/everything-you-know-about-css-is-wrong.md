title: "Everything You Know About CSS Is Wrong!"
id: 1287
date: 2009-01-20 07:00:44
tags:
- critique
- css
- css3
- grilles
- html
- livre
- sitepoint
categories:
- Développement Web
- Standards du Web
---

En bon français : "**tout ce que vous savez des CSS est faux** !". L'heure n'est pas à la déprime mais à la lecture de cet ouvrage par le site [SitePoint](http://sitepoint.com). Il est écrit en anglais par Rachel Andrew et Kevin Yank.

![Everything You Know About CSS Is Wrong](/images/2009/01/everything-you-know-about-css-is-wrong-300x300.jpg "Everything You Know About CSS Is Wrong")

Ce titre fortement accrocheur à la limite de l'injure annonce la couleur : l'ouvrage est censé vous expliquer que les techniques employées aujourd'hui ne sont que du bricolage et qu'on peut faire la même chose en plus propre et plus simple.

En route pour cette saine lecture ... ou pas.
<!--more-->

## Chapitrage

[Everything You Know About CSS Is Wrong!](http://www.sitepoint.com/books/csswrong1/) est découpé en 5 chapitres. Cela représente un volume d'une petite centaine de pages. En voici la structure :

1.  The Problem with CSS
2.  CSS Table Layout
3.  CSS Table Solutions
4.  Considering Older Browsers
5.  The Road Ahead
Si vous commencez à flairer le mauvais plan, vous n'avez pas tout à fait tort.

## display: table-cell au lieu de float/clear/margin

Tel serait le _credo_ de l'ouvrage. C'est en teneur ce qui y est distillé, ni plus ni moins.

Quand on y repense, aujourd'hui **on utilise vraiment des techniques à la noix** pour positionner les flux, pour imiter des colonnes de taille égale. Tout ça pourquoi ? Parce que le navigateur dominant du marché s'appelle Internet Explorer 6/7 et ne permet pas d'utiliser l'attribut CSS display: table-cell.
Son utilité ? Donner à l'élément concerné le comportement d'un tableau : des cellules de hauteur égale et des colonnes notamment.

Les 2 premiers chapitres sont à ce titre très démonstratifs puisque simplement, on apprend à construire un habillage classique à 2 colonnes avec cette technique. Mais, à mon avis, le chapitre 3 est entièrement à jeter.

Le livre commence en nous expliquant qu'on utilise des techniques de barbare pour le rendu. Sauf que celles proposées pour palier aux lacunes de cette mise en page en tableaux ne valent pas beaucoup mieux : pas de solution générique possible, simulation de colspan et rowspan laborieuse ... si j'ai été convaincu par la présentation en grille, je l'ai en revanche moins été par ces solutions proposées.

Le chapitre 4 explique avec plein de sous-entendus qu'Internet Explorer 6 et 7 ... ben il faut arrêter. En tous cas pour utiliser le display: table-cell. Je pense que même sans cette technique on avait déjà envie de les balancer mais bon. Ça sera un argument de plus pour prôner cette solution.

Le chapitre 5, _The Road Ahead_, propose une présentation maintes fois vue et revue de l'avenir avec CSS3\. Ça fait office de piqûre de rappel concernant le module _templates_ et  _grille_ notamment.

[![Texte 2 colonnes avec display: table-cell](/images/2009/01/txt-2cols.png "Texte 2 colonnes avec display: table-cell")](http://css.alsacreations.com/xmedia/exemples/display/txt-2cols.png)

## Pourquoi je ne vous recommande pas son achat ?

Parce qu'au final on se trouve face à _gros article_ doublé d'un titre bon pour écouler des exemplaires. Il aurait pu s'appeler "_comment présenter en grille sans tableaux et sans flottants_" par exemple.

Sans vouloir relancer le fumeux débat du  Web contre les livres, je pense qu'il y a des articles sur display: table-cell plus courts, moins chers et tout à fait valables ([y compris leur article de présentation](http://www.digital-web.com/articles/everything_you_know_about_CSS_Is_wrong/)), notamment sur [Alsacréations](http://css.alsacreations.com/Faire-une-mise-en-page-sans-tableaux/Mise-en-page-CSS-avancee-grace-a-la-propriete-display).
Pour moitié prix, le contenu aurait pu passer. À 30$, j'en attends davantage ...

Je recommande avec beaucoup plus de ferveur l'indémodable [Transcender CSS](https://oncletom.io/2007/12/11/critique-transcender-css-sublimez-design-web/) d'Andy Clarke.

Un dernier point toutefois : je ne suis pas convaincu qu'un **rendu à l'identique au pixel près** soit une solution d'avenir. Il ne faut pas espérer avoir un rendu identique à la maquette ni identique sur tous les naivgateurs (notamment au niveau de la colorimétrie). Je crois davantage à un support de fonctionnalités et des solutions alternatives pour les navigateurs ne supportant pas ces dites-fonctionnalités. De même qu'on n'a pas le même rendu de couleurs pour les téléviseurs (y compris HD), il est utopique de vouloir la même chose d'un site.

Depuis quelques mois je ne recommande plus à mes clients de supporter IE6 et ce, malgré ses 20% de parts de marché. Je préfère largement proposer une solution dégradée, toujours fonctionnelle mais moins jolie.
Cette année je refonds le thème de ce blog et je ne compte pas supporter ni IE6 ni IE7\. Votre adoption d'autres navigateurs aide mais il faut montrer l'exemple.
title: "Du bon usage de la sémantique : microformats et futur de la recherche sur Internet"
id: 714
date: 2007-07-31 17:00:00
tags:
- css
- futur
- html
- microformats
- semantique
- technorati
- xhtml
categories:
- Développement Web
- Standards du Web
---

![Logo microformats](https://oncletom.io/images/2007/07/logo-microformats.gif)

Pendant que la bataille fait rage du côté des sites _Web 2.0_ (mais c'est un des leviers de l'innovation sur Internet que l'on aime ou pas cette appellation), **une révolution silencieuse se met en marche** : [le Web sémantique ou encore le Web 3.0](http://affordance.typepad.com/mon_weblog/2006/11/web_30_donnes_o.html).
Jusqu'à présent, les moteurs de recherche (Google, Yahoo!, Windows Live Search, Exalead etc.) avaient pour défi le recensement du plus grand nombre de documents et des résultats de recherche pertinents.

S'il faudra bien évidemment [soigner l'intitulé des liens](http://fr.opquast.com/bonnes-pratiques/fiche/167), il faudra avant tout **donner du sens à vos documents**. C'est tout l'intérêt d'une **programmation propre**, **respectant les standards** et utilisant la **sémantique à bon escient**.

Les [microformats](http://microformats.org) sont pour moi un élément essentiel qui accéléreront le processus et permettront de comprendre l'intérêt de la sémantique.
<!--more-->

## Qu'est-ce que la sémantique ?

La sémantique est loin d'être une invention de l'informatique puisque ce principe est à la base de toutes les langues du monde. **La sémantique se réfère tout simplement au sens exprimés par les mots**. Ce concept peut être à vrai dire être élargi à tout ce qui structure de l'information.

Plus concrètement encore, ouvrez un journal (Le Figaro, Libération ou même Voici) et prenez une page au hasard. **Vous arriverez sans peine** et surtout sans lire le texte **à discerner les titres d'articles, leur résumé, leurs passages clés** et leur texte à proprement parler. _Pourquoi_ ? Parce que tous ces éléments sont présentés de manière différente, utilisent une police de caractère différente et ont une taille différente. Un titre d'article sera naturellement plus grand et plus épais que l'article ; le résumé sera situé sous le titre et sera espace du texte l'article en lui-même.

Et si vous ne prenez pas garde à la sémantique en elle-même c'est parce qu'elle silencieuse et logique : **votre cerveau analyse lui-même ce qu'il faut faire car il comprend la signification de la disposition sans avoir à comprendre ce qui est écrit**.

## Bien structurer une page HTML

Récemment encore j'entendais de la bouche d'une agence Web <q>on fait des sites aux standards, avec des div et du <acronym title="Cascading Style Sheet">CSS</acronym></q>. C'est déjà bien de passer au validateur mais c'est encore mieux si on produit du code significatif.
Voici deux exemples de code qui contiennent les _mêmes textes_ et qui respectent le standard <acronym title="eXtensible HyperText Markup Language">(X)HTML</acronym>.

**Méthode sémantiquement correcte** :

```html
<div id="introduction">
  <h2>Site valide HTML</h2>
  <p>Cette portion de code a un code HTML valide.</p>

  <p class="suite"><a href="./edito">Lire la suite de l'édito</a></p>
<div>
```

**Méthode sémantiquement _in_correcte** :

```html
<div id="page_haut">
  <div class="titre rouge">Site valide HTML</div>
  <div class="texte">Cette portion de code a un code HTML valide.</div>

  <div class="texte petit"><a href="./?page=12345">Lire la suite de l'édito</a></div>
</div>
```

Sans avoir à donner un cours de balisage, voici les principes auxquels se tenir :

*   **utilisez les balises HTML au bon endroit et à bon escient**. Ne mettez pas un `div` (bloc neutre) si un `p` (paragraphe) ou un `h*` (titre hiérarchique) peuvent faire l'affaire. De même pour les listes, n'utilisez pas de `div` (bloc neutre) si une `ul`/`ol` (liste désordonnée, liste ordonnée) ou une `dl` (liste de définition) sont mieux adaptées.
*   **nommez les _classes_ (`.class`) et les _id_ (`#id`) en fonction de ce qu'ils représentent** et non en fonction de l'apparence qu'ils devraient avoir.

Et c'est tout ! Cette **petite touche de rigueur assurera une pérennité certaine** dans vos développements. Sans compter la _facilité à intégrer_ les microformats par la suite.

## Et les microformats dans tout ça ?

Justement les microformats parlons-en. Si de prime abord sémantique et microformats peuvent paraitre sans grand rapport, _ces concepts sont pourtant intimement liés_. En utilisant les attributs `class` et `rel` (pour les liens hypertextes) dans une logique bien précise, **on décrit le contenu et sa nature** (titre de billet, auteur, date d'un évènement etc.).

Pour faire simple :

*   **les microformats sont faciles à intégrer** si le contenu est déjà bien structuré
*   **les microformats aident à bien structurer** le contenu : qu'il soit bien structuré ou pas, les recommandations vous guideront dans cette voie
*   **les microformats sont déjà reconnus par des moteurs de recherche** spécialisés ([Technorati](http://technorati.com/)) et plus officieusement par les moteurs de recherche classiques ([Google](http://www.google.com), [Yahoo!](http://search.yahoo.com) etc.). Pas convaincu(e) ? Voici la [liste non-exhaustive des sites comprenant les microformats](http://microformats.org/wiki/implementations-fr).

Pour bien compléter ces paroles, je vous recommande cette [excellente introduction aux microformats](http://fredericdevillamil.com/presentations/2006/que-sont-les-microformats/index.html).

## Intérêt supplémentaire des microformats

Ce qui est intéressant avec les microformats c'est que l'on peut les utiliser sans avoir derrière un site Web super hi-tech en _Web 46.0 full Ajax_. **Une page HTML suffit**. J'ai justement utilisé les microformats la première fois lorsque j'ai voulu refaire mon CV en me disant qu'en HTML ça serait sympa. Il existe fort heureusement un [microformat hResume](http://microformats.org/wiki/hresume) réutilisant lui-même les microformats [hCard](http://microformats.org/wiki/hcard) (carte de visite) et [hCalendar](http://microformats.org/wiki/hcalendar) (calendrier et évènements).
Outre l'aspect purement technique de cet exercice, **ce CV me sert maintenant de carte de visite** (en utilisant le [service _contacts_ de Technorati](http://technorati.com/contacts/)) en plus de pouvoir **être réutilisé sur des sites de recherche d'emploi**.

Mis à part une sémantisation de votre contenu, voici les **bénéfices à retirer d'un microformatage** :

*   **extraction et republication du contenu à la volée** : des services Web permettent d'aggréger une page pour la transformer en flux Atom voire même de créer des cartes de visites instantanément
*   **les navigateurs Web intégreront eux aussi les microformats** pour faciliter la navigation des utilisateurs : installez l'[extension Operator pour Firefox](https://addons.mozilla.org/fr/firefox/addon/4106), revenez sur cette page et améliorez votre expérience de navigation
*   **les microformats sont au coeur de l'Internet de demain** et c'est aujourd'hui qu'il faut y travailler

## La sémantique, moteur des futures recherches sur Internet

Même si à l'heure actuelle on peut considérer que les microformats aident au référencement, ce n'est pas explicitement mentionné. Mais l'avenir est à la recherche sémantique afin d'affiner les résultats et de mieux répondre aux requêtes. C'est un énorme défi puisqu'entre indexer du contenu et comprendre ce qu'il dit, il y a tout un fossé. Cette recherche sémantique s'appliquera aussi bien au texte qu'aux ressources audio (musique, interview etc.) et vidéo.
[Hakia s'intéresse à la recherche sémantique musicale](http://arstechnica.com/articles/culture/hakia-semantic-search-set-to-music.ars) tandis que d'un autre côté, [la recherche sémantique est considérée comme étant une fonctionnalité nécessaire pour le futur de la recherche sur Internet](http://altsearchengines.com/2007/07/30/what-is-a-search-engine/).

<ins>**Edition du 31/07 à 19h10** : [Google Maps intègre désormais le microformat hCard](http://googlemapsapi.blogspot.com/2007/06/microformats-in-google-maps.html).</ins>
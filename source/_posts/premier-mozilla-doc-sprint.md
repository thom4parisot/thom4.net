title: "Premier Mozilla Doc Sprint"
id: 18921
date: 2013-02-12 11:00:21
tags:
- doc sprint
- html5
- mozilla
categories:
- Développement Web
cover:
  url: /images/2013/02/dino.png
  link: https://wiki.mozilla.org/MDN/Doc_sprints/2013February
---

Je me suis laissé embarquer dans un [Mozilla Doc Sprint](https://wiki.mozilla.org/MDN/Doc_sprints/2013February) par [David Bruant](https://twitter.com/davidbruant). C'était un samedi, pluvieux de surcroît. Une motivation liée à l'apprentissage et à la découverte de la contribution. C'est quoi contribuer ? Il faut être qui pour contribuer ? Et savoir quoi, surtout.

[![8437521105_2fc987581a_z](/images/2013/02/8437521105_2fc987581a_z-600x396.jpg)](http://www.flickr.com/photos/the-jedi/8437521105/)

<!--more-->

## _Documenter_ c'est pas sexy

À observer la réaction des gens qui se voyaient présenter l'évènement, clairement, ça ne les attirait pas.

Je ne sais pas encore si c'est lié à notre époque (consommer est plus facile que créer — _crafter_) ou à notre espèce (j'imagine le mec qui a inventé la roue — et le premier _homo sapiens_ qui aurait marketé cette révolution au sein de l'espèce, le premier à vouloir transmettre le savoir et le premier à vouloir améliorer collectivement cet outil — j'ai l'impression que c'est ça qu'on est en train de faire en modifiant une page de wiki sur MDN).

Pour l'instant dire "on fait un apéro et on parle de <insérer ici un nom de langage de programmation>" réunit plus de monde que "on documente <insérer ici un langage de programmation>". Peut-être est-ce le même fossé entre "développer" et "écrire des tests et développer". Le gain se situe _après_. Après avoir _fait l'effort de_. Y'a des ponts à construire, et de la communication à trouver et effectuer pour inciter les gens à passer d'une rive à l'autre.

Bref, revenons à nos moutons.

## Table de compatibilité automatisée

Un des axes de travail est de [renseigner les tables de compatibilité](https://developer.mozilla.org/fr/docs/Project:Compatibility_tables). C'est un travail effectué à la main, essentiellement en se basant sur [caniuse.com](http://caniuse.com) (mais pas que).
Premier réflexe : me dire qu'on peut _automatiser_ la génération des tables, que c'est facile, et que ça peut se scripter avec [CasperJS](http://casperjs.org/).

David m'indique alors un cas plus complexe de table, [celle de la balise HTML a](https://developer.mozilla.org/en-US/docs/HTML/Element/a#Browser_compatibility).

Au passage, je découvre 3 choses :

*   <span style="line-height: 13px;">tout caniuse.com se base sur des [fichiers JSON hébergés sur Github](https://github.com/Fyrd/caniuse/tree/master/features-json) (CasperJS devient moins pertinent) ;</span>
*   `href="#top"` (voir plus bas) ;
*   des conditions de compatibilité affichées ne viennent pas forcément de caniuse.com.

Le plus gênant est ce dernier point. Il faudrait que le générateur de table de compatibilité _ne soit pas un référentiel_ de données et soit capable de :

*   <span style="line-height: 13px;">prendre en compte si une table existe ou non pour une fonctionnalité documentée ;</span>
*   pour un test caniuse.com : prendre en compte si la donnée a changé ou non (et choisir de l'actualiser) ;
*   pour un test manuel : le maintenir en l'état ;
*   combiner les deux derniers points pour avoir quelque chose de vraiment pratique ;
*   dans un premier temps se contenter de générer du HTML à copier/coller à la main ;
*   dans un deuxième temps passer par l'[API PUT de MDN](https://developer.mozilla.org/en-US/docs/User:lmorchard/PUT-API) pour automatiser l'écriture des tables de compatibilité.

Le constat est qu'il faudrait bien plus que la journée pour faire quelque chose d'efficace et vraiment fonctionnel. La bonne idée tombe un peu à l'eau ; j'aurais aimé avoir quelque chose d'utile/utilisable dans l'après-midi.

## href=#top

Par ricochet, je commence à chercher l'origine de la [compatibilité avec `href="#top"`](https://developer.mozilla.org/en-US/docs/HTML/Element/a#Browser_compatibility). C'est supporté depuis Firefox 10 (janvier 2012) donc autant dire que c'était récent.

[L'histoire remonte à … 2001](https://bugzilla.mozilla.org/show_bug.cgi?id=93077), pour une sombre histoire de compatibilité avec … Internet Explorer **4**. Bug réouvert en 2011 après avoir été rencontré dans Firefox Mobile. Époque à laquelle le "Remonter en haut de page" revient à la mode puisque pratique sur mobile.

Puis de constater que ce comportement a été [standardisé dans HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#scroll-to-fragid) (voir le point 6). Ça me fait penser à l'[histoire de `<main>`](http://www.whatwg.org/specs/web-apps/current-work/multipage/grouping-content.html#the-main-element), implémenté après une observation des usages (et peut-être à cause de la [faible popularité d'ARIA](http://www.sitepoint.com/whos-using-aria/) ?).

Une bonne heure de passée juste pour naviguer, lire et rajouter … un lien hypertexte dans [MDN](https://developer.mozilla.org/).

## load et beforeunload

[_beforeunload_, ça remonte (déjà) à 2008](http://blog.whatwg.org/this-week-in-html-5-episode-16), dans un résumé hebdomadaire du travail sur HTML5.

Je voulais en savoir plus à propos du comportement de ces deux évènements, leurs différences, quel était l'état du document et ce qu'on pouvait en faire. [L'algorithme à implémenter est disponible dans la spécification HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#unloading-documents). L'occasion de découvrir que le navigateur dispose aussi d'une [EventLoop](http://www.whatwg.org/specs/web-apps/current-work/multipage/webappapis.html#event-loops). De me demander ce qu'est l<span style="line-height: 13px;">e </span>[_salvageable state_](http://www.whatwg.org/specs/web-apps/current-work/#concept-document-salvageable)<span style="line-height: 13px;"> d'un Document.</span>

Mais aussi de devoir [écrire du code](http://jsbin.com/ijikic/6) pour comprendre et m'assurer du workflow dans la vraie vie (merci [JSBin](http://jsbin.com) & cie !).

Au final, une après-midi aura été nécessaire pour compléter 4 pages dans MDN :

*   [<span style="line-height: 13px;">onunload</span>](https://developer.mozilla.org/en-US/docs/DOM/window.onunload)
*   [onbeforeunload](https://developer.mozilla.org/en-US/docs/DOM/window.onbeforeunload)
*   [unload](https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/unload)
*   [beforeunload](https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/beforeunload)

[![6843235730_1cdac9f950_z](/images/2013/02/6843235730_1cdac9f950_z-600x399.jpg)](http://www.flickr.com/photos/the-jedi/6843235730/)

## Conclusion

Cette journée m'a permis d'**infirmer l'assertion** qui consiste à dire qu'_il faut savoir_ pour documenter.

**Il suffit juste de s'intéresser à un sujet**. Il peut être technique ou non. Il peut être en anglais ou non. Il peut être bas niveau ou non.
Et comme pour beaucoup de choses, on se lance puis on voit bien comment ça se passe.

**Notre bagage de connaissances déjà existant** ? _Il aide_ à comprendre et décrypter plus rapidement ce que l'on découvre.

Je vois ce genre d'évènements comme un [Code Retreat](http://coderetreat.org/) : une occasion de sortir de sa zone de confort (ou de l'exploiter) afin d'accroitre ses connaissances et sa compréhension des technologies Web. Et _d'aider_ à améliorer la base documentaire par la même occasion.
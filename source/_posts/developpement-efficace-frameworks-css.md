title: "Développement efficace avec les frameworks CSS"
id: 1211
date: 2008-11-25 07:00:08
tags:
- blueprint
- bonnes pratiques
- code
- css
- frameworks
- logiciels libres
- parisweb
- rythme vertical
- xhtml
categories:
- Évènements
- WebDev
cover: /images/2008/11/blueprint-logo.png
---

J'ai eu peur il y a 2 semaines en arrivant à [Paris-Web 2008](https://oncletom.io/2008/11/20/paris-web-2008-webdesign-qualite-standards/) : en discutant avec plusieurs personnes, il se trouve que peu d'entre elles connaissaient les _frameworks_ CSS. Je craignais de n'attirer personne avec ce sujet lors des [ateliers du samedi](http://www.paris-web.fr/2008/-samedi-15-novembre-technique-).

Les _frameworks_ CSS ont été mentionnés la première fois dans la conférence [Working in the Now](http://www.wait-till-i.com/2008/10/31/working-in-the-now/) ([visualiser la présentation](http://www.slideshare.net/cheilmann/working-in-the-now-presentation "Visualiser la présentation Working in the Now de Christian Heilmann")). Au final, on n'était pas loin de faire salle comble avec plus d'une vingtaine de participants à vue de nez.

Une petite scéance de rattrapage s'impose ;-)

<!--more-->

## Pourquoi avoir choisi ce sujet ?

J'ai lu un article sur [l'importance du rythme vertical](http://www.biologeek.com/ergonomie,informatique/l-importance-du-rythme-vertical-en-design-css/) l'an dernier sur [Biologeek](http://www.biologeek.com) et ça m'a sensibilisé au fait qu'on pouvait rendre la lecture d'un site tout simplement en rendant prédictible la position du texte.

Entre temps j'ai également lu l'excellent [Transcender CSS](https://oncletom.io/2007/12/11/critique-transcender-css-sublimez-design-web/) d'[Andy Clarke](http://www.stuffandnonsense.co.uk). J'y ai été sublimé par des présentations de sites totalement en grille.

Depuis je suis devenu fan de [Blueprint CSS](http://www.blueprintcss.org/) (je crois que ça s'est remarqué lors de mon intervention ;-)). J'ai commencé à l'utiliser sur des projets personnels puis dans un cadre professionnel. J'utilisais déjà [symfony](http://www.symfony-project.org) comme framework PHP et [jQuery](http://jquery.com) comme framework JavaScript alors pourquoi pas Blueprint ?

Comme le suggérait très justement [Christian Heilmann](http://www.wait-till-i.com) dans sa présentation, l'utilisation d'outils déjà existants est nécessaire pour réduire les coûts de production. C'était déjà un bon alibi mais je les apprécie aussi parce qu'on gagne un temps fou ! On se concentre sur le code métier, pas le reste.

## La présentation

Je n'en dis pas plus, je vous laisse lire la présentation. Ayez toutefois en tête qu'en vrai elle dure facilement 1h.

{% slideshare 755237 %}

## Ce qu'il faut en retenir

J'ai rencontré 2 types de réactions lorsque j'ai parlé des frameworks : les enthousiastes et les réfractaires.

Je ne reviens pas sur les enthousiastes : il suffit de lire ma présentation. Les atouts les ont clairement séduit.
Je m'intéresserai plutôt aux réfractaires. Assez paradoxalement, ce n'est pas dans la salle que je les ai eu mais en dehors. Les principaux arguments étaient :

*   ça rajoute des kilo-octets superflus
*   on perd le contrôle de notre code
*   j'utilise déjà le mini-framework d'un collègue ou qui existait dans mon entreprise avant que j'arrive

Ces arguments sont tout à fait acceptables ... mais ça dépend dans quel contexte.

![Exemple de mise en forme en grille](/images/2008/11/blueprint-sample.png "Exemple de mise en forme en grille")

Les sites à la recherche de performances exceptionnelles, ceux pour qui un Ko supprimé économise plusieurs Go de bande-passante par jour ... oui ceux-là ont un grand intérêt à réfléchir à l'adoption d'un _framework_, aussi compressé qu'il soit.
Je ne me fais pas de soucis pour eux : en général ils ont leur propre _framework_, totalement adapté à leur besoin. Cependant ça n'empêche pas d'aller prendre des idées ailleurs et de découvrir de nouveaux concepts. Puis de les intégrer.

Lorsqu'on adopte un outil de développement rapide (RAD), la conception ne se fait plus par rapport à nos habitudes mais par rapport à des **principes établis**. On ne fait plus forcément comme on veut mais les meilleurs _frameworks_ disposent de fonctionnalités répondant à cette problématique. Le [_compressor_](http://www.jdclayton.com/blueprints_compress_a_walkthrough.html) de Blueprint en est un parfait exemple.
Il permet de construire une version de Blueprint adaptée à son besoin, inclut des feuilles de notre choix et compresse le tout en un seul fichier prêt à la mise en production.

Maintenant l'avantage d'un _framework_ c'est qu'une **communauté** ou un groupe de personnes compétentes en ont la gestion. Ces mainteneurs produisent une documentation, des spécifications et un code suffisamment compréhensible à lire. Ce n'est pas forcément le cas de Joe le développeur à qui on aura demandé 36 choses en même temps.
Je fais davantage confiance à un outil éprouvé avec succès sur des milliers de projets qu'un outil développé sur un coin de bureau, malgré toute la bonne volonté de son concepteur.
C'est également un risque certes mais un bon outil délaissé aura tout de même le mérite de fonctionner ... et d'avoir davantage de chances de trouver un repreneur.

Une remarque intéressante a également émergé de l'atelier : faut-il utiliser un _framework_ CSS avant ou après que la créa graphique ait été établie ?
Je réitère ma réponse : **l'idéal est que tout soit pris en charge le plus tôt possible**. Autrement dit, intégrer les contraintes du _framework_ dès la conception graphique est un gros atout. Le découpage de la maquette n'en sera que facilité et ça évitera tout bricolage.
Certains outils l'ont d'ailleurs bien compris en proposant des supports pour graphistes au format PSD, Visio, Fireworks etc.

[![Feuilles de dessin pour 960 Grid System](/images/2008/11/960-sketch-sheets.png "Feuilles de dessin pour 960 Grid System")](/images/2008/11/960-sketch-sheets.png)

## Conclusion

Quoiqu'il en soit, les _frameworks_ CSS sont à mon avis promis à un bel avenir dès lors que les critères d'industrialisation auront débarqué au sein des agences Web.

Aujourd'hui une petite agence a tout à gagner à maîtriser de tels outils et à annoncer qu'elle développera mieux, plus vite et moins cher. Le prix ne fait pas tout : ce sont les **outils et la qualité du développement**. Tous les _frameworks_ cités sont également des logiciels libres.

J'espère que cet aperçu rapide aura ouvert les yeux à certains d'entre vous. Je suis preneur de vos retours, surtout en entreprise. Ça vaut également pour celles et ceux qui ne sont toujours pas convaincu de l'intérêt des _frameworks_ CSS ;-)

**Remarque** : il y avait 2 ateliers complémentaires à Paris-Web :

*   [Optimiser ses CSS](http://css.mammouthland.net/parisweb/optimisation-css.php)
*   [Cascade et héritage : concevoir, organiser, optimiser et maintenir ses feuilles de style](http://romy.tetue.net/spip.php?article555)
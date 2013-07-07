title: "Simplifier le visuel"
id: 69
date: 2005-03-28 17:12:57
tags:
- ui
- ux
categories:
- Développement Web
- Projets
---

[![Emu Nova : menu dynamique](/images/Emu-Nova/menu-sousmenu.TN__.png)](/images/Emu-Nova/menu-sousmenu.png)

Organiser l'affichage d'un site fait partie de la liste des mes hantises. Il faut trouver le bon équilibre entre la quantité d'informations dont doit disposer le visiteur sans le "perdre" ni surcharger le visuel.

<!--more-->

J'inaugure une nouvelle catégorie sur ce blog (personnel je le rappelle ;-) ) : **Emu Nova**. Pas la peine de dire qu'ici je vais surtout parler du développement apporté au site afin éventuellement d'y recueillir des avis et réactions. Certain(e)s le savent, d'autres non mais une nouvelle version (amélioration) du site est en chantier depuis un petit bout de temps (janvier pour être précis). Placée sous le nom de version _2.1_, cette mouture a pour but de simplifier la vie du visiteur. Le gros problème vient en effet de l'organisation et de la masse de contenu qu'on apporte.

Actuellement et comme dans la future version, le menu principal est matérialisé par une barre de menu (rose, voir la capture d'écran en vignette plus haut). Cependant n'étant pas assez large, les sections secondaires ont été déportées dans le menu de gauche. Ceci dit, ça a le défaut de les rendre moins visible.

J'ai cherché pendant un moment à tout réunir en un même menu et voilà qui est chose faite. Ce menu dynamique a posé beaucoup de problèmes car une fois de plus _Internet Explorer_ est une vraie m**de dans ce qui est de la gestion des feuilles de style (CSS). Impossible de faire un menu 100% CSS sans écarter 90% de la population du Web (mais 80% des visiteurs d'Emu Nova, les 20% restant utilisant un autre navigateur, **Firefox** notamment).

En farfouillant dans les exemples de menu, je suis finalement tombé sur une excellente alternative qui fonctionne aussi bien sous Internet Explorer que Mozilla mais nécessite cependant du Javascript. Et si dans le pire des cas celui-ci n'était pas activé, et ben ... on retomberait en fait dans la configuration actuelle.

Bilan : ça ne sera que mieux.

*   [Menu déroulant CSS](http://www.alsacreations.com/articles/deroulant/) (Alsacréations)
title: "colorblind-applet : des filtres pour daltonien sous Linux"
id: 1038
date: 2008-08-12 07:00:25
tags:
- applet
- color oracle
- colorblind-applet
- daltonisme
- debian
- gnome
- gnome-mag
- linux
- logiciels libres
- ubuntu
categories:
- a11y
---

J'ai découvert totalement par hasard un jeu de filtres pour daltonien fonctionnant sur l'environnement de bureau Gnome. Son petit nom ? **colorblind-applet**.
Il est livré en standard sous Debian et [plus péniblement, sous Ubuntu](http://news.softpedia.com/news/How-To-Install-the-Colorblind-Applet-on-GNOME-91323.shtml "installer colorblind-applet sous Ubuntu"). Cette dernière distribution englobe pourtant Gnome Magnifier (paquet _gnome-mag_), le projet père mais allez savoir pourquoi, sans l'applet pour daltonien.

Petit tour du propriétaire et mise en application dans le cas du développement Web.

<!--more-->

![](/images/2008/08/colorblind-applet-credits.png "Colorblind-applet")

## Présentation rapide du daltonisme

Se mettre dans la peau d'un daltonien, ou voir à travers ses yeux, est une chose difficile. Comment imaginer le rendu des couleurs ? Et surtout, comment l'imaginer en fonction du daltonisme ?
Il faut savoir qu'il existe plusieurs variations de cette anomalie de perception de couleurs :

*   **mauvaise perception** du rouge
*   **pas de perception** du rouge
*   mauvaise perception du vert
*   pas de perception du vert
*   mauvaise perception du bleu
*   pas de perception du bleu

À cela s'ajoutent également des combinaisons possibles entre ces différentes variantes. Pour plus d'informations, je vous invite à consulter l'[article sur le daltonisme sur Wikipédia](http://fr.wikipedia.org/wiki/Daltonisme).
Et pour votre gouverne, **être daltonien ne signifie pas être handicapé**. Les personnes atteintes de cette anomalie (environ 8% des hommes en France, même pas 1% de femmes) ne peuvent donc pas être reconnues comme telles.

![Chiffre 37, invisible pour les personnes atteintes de protanopie](http://upload.wikimedia.org/wikipedia/commons/5/55/Colorblind3.png "Chiffre 37, invisible pour les personnes atteintes de protanopie")

Pour savoir savoir si on est daltonien, il suffit de regarder les images des [planches du test d'Ishihara](http://daltonien.free.fr/daltonien/article.php3?id_article=6). Peut-être la "mauvaise" nouvelle du jour ?

## Présentation de colorblind-applet

Mais alors, que vient faire _colorblind-applet_ dans tout ça ?
Cet applet pour [Gnome](http://gnome.org) est un "simple" filtre de visualisation. En clair, il altère la colorimétrie de votre écran pour l'afficher comme si vous étiez daltonien.
Jusqu'à présent j'utilisais [Color Oracle](http://colororacle.cartography.ch/) puisque [présenté avec conviction sur Ergophile](http://www.ergophile.com/2008/02/13/le-daltonisme-vu-par-color-oracle/ "présentation de Color Oracle sur Ergophile").

_colorblind-applet_ me convient toutefois davantage pour les raisons suivantes :

*   il peut se piloter entièrement via des **raccourcis clavier** (activation, désactivation, navigation entre les filtres)
*   son **utilisation est persistante** : il reste actif tant qu'on ne le désactive pas (Color Oracle enlève le filtre au moindre clic de mémoire)
*   il demande **peu de ressources machine**, intégration directe dans Gnome oblige (Color Oracle est en Java)

En clair je résumerais comme suit :

*   vous êtes sous Linux et plus particulièrement dans un bureau à base de GTK ? Utilisez _colorblind-applet_
*   dans les autres cas, utilisez _Color Oracle_ (compatible Linux, MacOS X et Windows)

![Colorblind-applet : contrôles](/images/2008/08/colorblind-applet-controls.png "Colorblind-applet : contrôles")

## colorblind-applet en action

Puisqu'une image vaut davantage qu'un long discours (trop tard me direz-vous ;-)), voici une série d'images présentant mon bureau de travail ainsi qu'un navigateur Web ouvert sur la page de [Planète Accessibilité](http://planete-accessibilite.com/).

[![Capture d&#39;écran d&#39;origine](/images/2008/08/original.jpg "Capture d")](/images/2008/08/original.jpg)

[![Filtre réglé sur &quot;Selective Green Desaturation&quot;](/images/2008/08/selective-green-desaturation.jpg "Filtre réglé sur &quot;Selective Green Desaturation&quot;")](/images/2008/08/selective-green-desaturation.jpg)

[![Filtre réglé sur &quot;Negative Hue Shift&quot;](/images/2008/08/negative-hue-shift.jpg "Filtre réglé sur &quot;Negative Hue Shift&quot;")](/images/2008/08/negative-hue-shift.jpg)

** Plusieurs choses à noter** :

*   les teintes blanches sont épargnées
*   les autres couleurs changent en revanche du tout au tout en fonction du type de daltonisme
*   jouer sur les couleurs n'est pas suffisant pour faire passer un message aux utilisateurs
*   ça ne doit pas être évident de parcourir le Web et ses multiples couleurs tous les jours : la désaturation de vert pique particulièrement les yeux
*   et par extension, il me paraît très difficile de produire une charte graphique convenant à tous les types de daltonisme

Je serais curieux d'avoir des retours de personnes ayant déjà eu à travailler avec cette déficience, les bonnes pratiques de conception et tout autre conseil avisé.
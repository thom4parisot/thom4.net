title: "Configuration optimale, délire maximal"
id: 1159
lang: fr
date: 2008-10-07 07:00:19
tags:
- carton rouge
- cookies
- critique
- ooshop
- ssl
- twitter
categories:
- a11y
---

Hier [Sébastien Delorme](http://www.tentatives-accessibles.eu/) s'est [fendu d'un petit twit](http://twitter.com/sebcbien/statuses/948211570) qui m'a fait sourire sur le site de vente en ligne [Ooshop](http://ooshop.fr). Cependant après réflexion, je me suis dis que c'était particulièrement grave.

En 2008 on vous demande encore de venir en smoking sur un site Web et qui plus est, avec des recommandations liées à des logiciels <span style="text-decoration: line-through;">périmés, à savoir Internet Explorer 6 et Firefox 1.5</span> à jour ([le site a été mis à jour suite à cet article](https://oncletom.io/2008/10/07/configuration-optimale-delire-maximal/#comment-27861)).

Entrevue d'une configuration optimale tout sauf accessible et acceptable.

<!--more-->

![](/images/2008/10/site-optimise-pour.png "Site optimisé pour ...")

Avant toute chose, prenez connaissance de cette [fameuse configuration optimale](http://www.ooshop.com/Content/FR/PreHome/Conf.html "la configuration optimale selon Ooshop"). Y'aurait de quoi écrire une thèse dessus.

## Navigateur optimal

> Ooshop recommande d'utiliser               la résolution d'écran suivante : 1024x768.
>
>
> Ooshop recommande pour une navigation optimale d'utiliser les navigateurs               suivants :
>
>
> **Pour PC :**
>
> Internet Explorer 6 - [Télécharger](http://download.microsoft.com/download/ie6sp1/finrel/6_sp1/W98NT42KMeXP/EN-US/ie6setup.exe)
>
> Firefox 1.5 - [Télécharger](http://www.mozilla-europe.org/fr/products/firefox/)
>
>
> **Pour Mac :**
>
> Firefox 1.5 - [Télécharger](http://www.mozilla-europe.org/fr/products/firefox/)
>
> Safari 2.0.3 - Ce navigateur est installé par defaut par               Apple
>
>
> Les navigateurs Konqueror, Opéra, Avant Browser ne sont pas               encore entièrement compatibles sur notre site.
Tout est critiquable mais je suis joueur.

**La résolution optimale, je pense qu'à peu près tout le monde s'en fiche** :

*   ceux qui ont la bonne résolution n'en auront que faire (et je les comprends)
*   ceux qui n'ont pas la bonne ... et bien ils s'en apercevront et surtout, que peuvent-ils faire ?

Combien de personnes ont diminué leur résolution pour cause de problème de vision ? Vont-ils augmenter la résolution uniquement parce que ça a été voulu sur ce site Web ? C'est un peu comme si en allant au supermarché on regardait la taille de votre coffre de voiture en refoulant tous les possesseurs de Smart.
**Personne ne le fera, faut arrêter de rêver**. Et surtout si les personnes ne savent pas régler leur résolution (tant et si bien que ça leur parle).

Plusieurs cas de figure :

*   si on a vraiment besoin de ces 1024, on s'arrange pour placer au moins la navigation principale dans la partie qui sera toujours visible sans avoir à scroller horizontalement
*   ou alors on opte pour un [site à largeur variable, fluide ou élastique](http://css.alsacreations.com/Tutoriels-et-articles-divers/Faire-un-site-pour-toutes-les-resolutions)

Et pour le navigateur ? J'ai un PC mais je ne comprends pas, je ne peux pas avoir Internet Explorer 6 dessus. Ah je suis sous Linux ? Je comprends pas pourquoi je ne me sens pas concerné.
Hé les gars : faut faire la différence entre Windows (système verrouillé par conception) et [PC](http://fr.wikipedia.org/wiki/Compatible_PC) (architecture basée sur x86, dont les Mac feraient même partie aujourd'hui si on reste large).

Et à côté de ça on me cite Konqueror, un des navigateurs avec les plus faibles part de marché (et compatible Linux uniquement). Y'a franchement de quoi se marrer.

**Solution** : virer ce bout de texte et opter pour un code compatible avec des navigateurs modernes, d'Internet Explorer 7 à Safari en passant par Firefox.

## Configuration optimale

J'adore ce genre de pots-pourris façon Internet de la bulle Internet des années 2000\. Et vas-y qu'y a du _simple pixel gif_ et que je te parle de ce qu'il faut configurer sans image aucune (ben ouais, c'est pas optimisé les images).

La configuration des cookies est tellement bien expliquée, à tel point qu'on te dit :

*   que ça ne fait «que» mémoriser des informations
*   que ça ne permet pas de lire des informations sur le disque dur (à moitié vrai, les cookies c'est pas sur le disque ?)
*   mais qu'à côté de ça, ça permet de créer une base de données sur les visiteurs (c'est beau la transparence ceci dit)
*   et surtout le plus fun, que les **cookies sont gérés automatiquement** par les sites de commerce électronique

Alors 2 possibilités :

*   Ooshop n'est pas un site de commerce électronique, ce qui explique la procédure de configuration des cookies expliquées juste en-dessous
*   Ooshop se fiche éperdument de la tête de ses visiteurs et compte sur leur aptitude à ne pas lire cette même pas (et là ils ont raison, personne ne la lit/lira/a lu)

Mon conseil : **vérifier que les cookies sont activés sur le navigateur**. C'est pas comme si on pouvait le faire de manière automatique mais presque ... En cas d'erreur, lui présenter en image les manipulations à effectuer sur son navigateur.
À quoi bon parler de la configuration d'Internet Explorer si on utilise Konqueror ...

Je passe également le volet sur le SSL. Quand on vient faire des courses, c'est certainement pas pour prendre des cours de crypto. J'entends déjà mon médecin m'expliquer que les données sur ma carte Vitale sont accessibles car non protégées lors d'une visite médicale.
[Ah non pardon, ça c'est vrai](http://fr.wikipedia.org/wiki/Carte_Vitale#Big_Brother_Awards).

## Conclusion

Au lieu de s'évertuer à pondre une pleine page en _popup_ pour expliquer comment paramétrer un navigateur dans un language peu compréhensible, il faudrait glisser du _il faut_ à _nous allons_.
Oui, **optimiser au lieu d'expliquer** comment optimiser son navigateur pour un site donné.

Imaginez qu'on doive paramétrer son butineur favori/imposé pour chaque site.
C'est le reflet d'une mauvaise conception ou d'un vice assumé.

Je n'aurais qu'une chose à dire, le slogan d'Ooshop, il est parfait !

![Je te le fais pas dire](/images/2008/10/ooshop-vie-optimise.png "Ooshop, la vie optimisée")

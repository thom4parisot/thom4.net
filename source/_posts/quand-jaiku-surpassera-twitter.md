title: "Quand Jaiku surpassera Twitter"
id: 934
date: 2008-06-24 07:00:04
tags:
- api
- google
- jaiku
- micro-blogs
- plurk
- pownce
- twitter
categories:
- WebDev
cover: /images/2008/06/logo-jaiku.png
---

[Cela fait maintenant plus d'1 an que j'utilise Twitter](https://oncletom.io/2007/06/01/twitter-gtwitter/). Passée l'appréhension du gadget puéril, je l'ai finalement converti en **outil de communication**, de **réseautage** et de **veille** ... comme beaucoup de ses utilisateurs d'ailleurs.

Seulement voilà, les pannes à répétition sont, à mon sens, en train de ruiner un service qui aurait pu être encore plus ravageur qu'il ne l'a été. Plusieurs concurrents s'y sont essayés, aucun ne l'a encore détrôné.

À part peut-être [Jaiku](http://jaiku.com/), si Google réussit son coup.

<!--more-->

## Jaiku, Twitter : micro-blogs et/ou messagerie instantanée délocalisée

Entre messagerie instantanée asynchrone et micro-blogs, mon cœur balance.

Toutefois le dénominateur commun de _Twitter_, _Jaiku_, [Plurk](http://plurk.com/), [Pownce](http://pownce.com) et toute la clique ce sont les **messages en 140 caractères adressés au monde entier**.
En soi c'est assez amusant de constater que cette limite a été adoptée pour tenir sur 1 SMS (tant en envoi qu'en réception) ... alors que nous sommes sur le Web. Cet exercice aura le mérite de favoriser le partage d'URL et d'améliorer l'esprit de synthèse de beaucoup.

Malgré tout mon enthousiasme pour _Twitter_, je n'ai pour l'instant envie que d'une chose : un service stable. Autrement dit :

*   des flux RSS / une API qui répond 99,9% du temps : quand je regarde mes twit une fois par heure et que je constante une désespérante "erreur inconnue" dans le widget Netvibes ... no comment
*   un service qui ne s'effondre pas une page sur 2 en plein milieu de journée
*   un service qui communique sur ses problèmes : déjà 3 semaines que le client IM est hors-ligne. C'est pourtant le [deuxième client Twitter le plus utilisé](http://www.readwriteweb.com/archives/top_twitter_clients_definitive_list.php)

## Pourquoi Jaiku est mieux que Twitter

Jaiku ne bénéficie pas du même engouement que Twitter, peut-être pas à tort. Son adoption a été fortement freinée par le rachat de Google en 2007\. Ce rachat a placé Jaiku en inscription sur invitation.
Parallèlement à ça, très peu de nouveautés ont fait leur apparition sur le service.

Et avec ça je tente de vous convaincre que Jaiku est mieux ? Et pourtant :

![Flux Flickr sur Jaiku](/images/2008/06/jaiku-flickr.png "Flux Flickr sur Jaiku")

*   **automatisation de l'intégration de vos flux** (RSS, Twitter, Last.fm etc.) avec une présentation des plus sympathiques (exemple ci-dessus avec [Flickr, mon service photo préféré](https://oncletom.io/2008/03/18/flickr-le-site-ideal-pour-partager-ses-photos/))
*   une **interface Web beaucoup plus agréable** : identification facile des source des données, différenciation de nos messages et des flux aggrégés, filtrage des sources de flux
*   une **API plus sécurisée** : [parce qu'il ne faut jamais, ô grand jamais donner son mot de passe](http://www.codinghorror.com/blog/archives/001128.html), cette hérésie est remplacée par une clé unique (mais malheureusement pas regénérable)
*   les "channels" ou **groupes de discussion**. Ils facilitent la création de conversation liées à une thématique ou à des sites/services Web. Pratique pour éviter la schizophrénie du multi-compte.

## Pourquoi Twitter est mieux que Jaiku

Malgré tout, Twitter possède une bonne avance, notamment grâce à son énorme base d'utilisateurs :

*   **immense parc d'applications**, tant en terme de mashups que de clients pour twitter. Au hasard : [TwitBin](http://www.twitbin.com/), [Thwirl](http://www.twhirl.org/), [TwitterVision](http://twittervision.com/), [Summize](http://summize.com/), [TwitterShare](http://www.phoreo.com/twittershare/), [TwitLinks](http://twitlinks.com/) etc.
*   une **API simple et complète** (mais du coup, pas sécurisée : donner son mot de passe n'est pas recommandable)
*   une **prise en main immédiate** : pas de fioriture, tout est simple
*   **fonctionnalité de veille** sympathique : "track". Recevez tous les twit qui contiennent tel ou tel mot
*   affichage affiné avec la possibilité de n'afficher que les réponses qui nous sont faites (_@replies_)

## Comment Jaiku peut surpasser Twitter

[![Vue d](/images/2008/06/jaiku-overview.png "Vue d")](/images/2008/06/jaiku-overview.png)

Twitter conserve fonctionnellement pas mal d'avantages qui justifient encore son utilisation et sa forte adoption. C'est en subissant les pannes répétées et en lisant plusieurs articles, dont «[Can Twitter Be Saved](http://www.readwriteweb.com/archives/can_twitter_be_saved.php)» que j'ai sérieusement mis en doute la **capacité à Twitter à accompagner ses utilisateurs** de manière pérenne.

Jaiku n'avance plus certes mais en surface uniquement. Si Google est malin tout autant que les créateurs de Jaiku, ils ont toutes les clés pour détrôner Twitter et transformer l'essai.
Voici ce que j'aurais aimé voir sur Jaiku pour migrer définitivement dessus :

*   une **interface internationalisée** (i18n) pour faciliter l'adoption dans tous les pays et éviter de laisser l'outil entre les mains des seuls geeks
*   intégration d'un ou plusieurs outils au choix de **compression d'URL**, comme [is.gd](http://is.gd) ou [tinyurl](http://tinyurl.com)
*   **import de contacts** depuis Facebook, Twitter et pourquoi pas, son carnet d'adresse Gmail ([par l'API](http://code.google.com/apis/contacts/ "Google Contacts API") bien sûr)
*   **forte intégration dans Google** (Google News, Google Alerts, Gmail, Google Calendar, Google Talk/Jabber, iGoogle et widgets etc.)
*   **utilisation de l'infrastructure Google** (on parle d'[App Engine](http://code.google.com/appengine/) entre autre)

Après, ma seule crainte ce sont les [habituels travers de Google, abandon de service, manque de suivi et opacité de service](https://oncletom.io/2008/03/11/google-ange-demon-vie-numerique/).

Je garde bon espoir pour Jaiku. À tel point que je suis même en train de produire un [widget Netvibes](https://oncletom.io/code/netvibes/ "widget Netvibes pour Jaiku") pour _Jaikuter_ depuis n'importe où ;-)
title: "High Performance Web Sites"
id: 943
date: 2008-07-15 07:00:15
tags:
- apache
- bonnes pratiques
- critique
- firebug
- gzip
- livre
- logiciels libres
- mod_deflate
- mod_expires
- mod_gzip
- optimisation
- oreilly
- yahoo
- yslow
categories:
- Développement Web
cover: /images/2008/07/livre-high-performance-web-sites.jpg
---

[High Performance Web Site](http://www.amazon.fr/dp/0596529309/), sous-titré _Essential Knowledge for Frontend Engineers_, est ce genre de **livre à lire au moins une fois** à défaut de le posséder. Il résume en à peu près 120 pages 14 points d'optimisation d'un site Web.

C'est d'autant plus intéressant que l'**approche se base sur les mécanismes** et non sur de l'optimisation de code. Ainsi dans la plupart des cas, vous n'aurez "que" du paramétrage serveur à faire.

<!--more-->

Ce livre fait étrangement penser aux [conseils de haute performance](http://developer.yahoo.com/performance/) prodigués par le [Yahoo! Developer Network](http://developer.yahoo.com) et repris par l'extension [Firefox pour Firebug](http://getfirebug.com), j'ai nommé [YSlow](http://developer.yahoo.com/yslow/).
C'est normal : ce livre est écrit par un ingénieur de Yahoo!, probablement un de ceux qui ont participé à la rédaction du guide de performances.

## Pourquoi acheter High Performance Web Sites ?

On serait tenté de ne pas acheter le livre puisqu'une bonne partie de ses conseils sont repris sur le guide de haute performance cité plus haut.

Sachez toutefois que **cet ouvrage va plus loin dans le détail**, prend bien le temps de présenter ses tests de performance pour illustrer et de justifier l'application de leurs méthodes. La plupart des relevés de mesure sont effectués sur une dizaine de sites allant de Google à Amazon.

J'achèterais ce livre si j'étais :

*   un **administrateur système** chargé d'héberger 1 ou plusieurs sites Web
*   un **technicien/webmaster** en charge d'un site à plus ou moins fort trafic
*   un **développeur Web** soucieux des performances de ses productions
*   toute personne avare en kilo-octets superflus
*   toute personne voulant **accélérer les temps de réponse** de son ou ses sites Web

[![YSLow sur Emu Nova : les composants](/images/2008/07/yslow-emunova-components-300x81.png "YSLow sur Emu Nova : les composants")](/images/2008/07/yslow-emunova-components.png)

## Les 14 points d'optimisation

High Performance Web Sites axe son discours sur 14 points :

1.  [Limiter le nombre de requêtes HTTP](http://developer.yahoo.com/performance/rules.html#num_http)
2.  [Utiliser un Content Delivery Network (CDN)](http://developer.yahoo.net/blog/archives/2007/04/high_performanc_1.html)
3.  [Utiliser une entête Expires](http://developer.yahoo.net/blog/archives/2007/05/high_performanc_2.html)
4.  [Compresser les composants avec Gzip ou Deflate](http://developer.yahoo.net/blog/archives/2007/07/high_performanc_3.html)
5.  [Placer les feuilles de style en début de page](http://developer.yahoo.net/blog/archives/2007/07/high_performanc_4.html)
6.  [Placer les scripts JavaScript en bas de page](http://developer.yahoo.net/blog/archives/2007/07/high_performanc_5.html)
7.  [Éviter les expressions CSS](http://developer.yahoo.net/blog/archives/2007/07/high_performanc_6.html) (Internet Explorer)
8.  [Placer les scripts JavaScript et les feuilles de style dans des fichiers externes](http://developer.yahoo.net/blog/archives/2007/07/rule_8_make_jav.html)
9.  [Réduire le nombre d'appels à des DNS différents](http://developer.yahoo.com/performance/rules.html#dns_lookups)
10.  [Minifier le JavaScript et les CSS](http://developer.yahoo.net/blog/archives/2007/07/rule_8_make_jav.html)
11.  [Éviter les redirections](http://developer.yahoo.com/performance/rules.html#redirects)
12.  [Supprimer les doublons de scripts](http://developer.yahoo.net/blog/archives/2007/07/high_performanc_10.html)
13.  [Configurer ETags](http://developer.yahoo.net/blog/archives/2007/07/high_performanc_11.html)
14.  [Permettre la mise en cache des appels Ajax](http://developer.yahoo.com/performance/rules.html#cacheajax)

Il prend cependant le soin de bien expliquer les **mécanismes d'HTTP** et les intérêts à améliorer les performances _frontend_.

Le livre termine sur un comparatif des 14 points sur 10 sites, notation YSLow comprise, dont Amazon, Google, CNN, eBay, Wikipédia et Yahoo!.

## La mise en pratique

J'étais déjà sensibilité à presque tous les points pour avoir lu ces fameuses 14 règles en utilisant l'[extension YSlow et Firebug](https://oncletom.io/2007/12/25/bonnes-pratiques-firebug-developpement-web/). Cependant après la lecture du livre j'ai eu davantage de clés et des exemples probants pour me convaincre de les mettre en œuvre.

On peut **appliquer la majorité des points et les points pertinents en 1 heure**. En effet, tout site ne peut se permettre d'utiliser un CDN pour accélérer les temps de réponse autour du globe.

Personnellement j'ai mis en place une **compression Gzip directement au niveau d'Apache** au lieu d'utiliser une compression effectuée en PHP (avec Gzip aussi). J'ai couplé cet effort avec la **minification JavaScript** et la **désactivation des ETags**.

J'avais déjà au préalable externalisés mes CSS et JavaScript, placé au bon endroit (mais seulement les appels externes au DNS principal en bas de page) et sans doublon.

C'est bête à dire mais **le résultat s'est vraiment senti avec des chargements de page incroyablement plus rapides**. _YSlow_ est effectivement un compagnon idéal pour la mise en application de ces éléments avec son analyse des performances et des composants.

![YSLow sur Emu Nova : les statistiques](/images/2008/07/yslow-emunova-stats.png "YSLow sur Emu Nova : les statistiques")

## Conclusion

J'ai dévoré **High Performance Web Sites** grâce à sa simplicité de rédaction, les nombreux exemples et surtout, les explications enrichissantes. Elles sont mises en application sur Yahoo! et certes, même si on peut se dire qu'on n'a pas de site de leur envergure, leurs conseils sont toujours bons à prendre.

**High Performance Web Sites** est un concentré de bonnes pratiques, simples à mettre en œuvre. Pourquoi s'en priver ?

Ces optimisations ne sont évidemment pas les seules à mettre en place pour que tout fonctionne bien : il faut aussi produire du code HTML propre, du JavaScript optimisé, du code application qui ne soit pas redondant.

**C'est un bon début et des pratiques à généraliser**.
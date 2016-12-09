title: "Les meilleurs plugins pour Wordpress"
id: 740
date: 2007-08-27 13:00:27
tags:
- akismet
- flickrrss
- logiciels libres
- microformats
- plugins
- seo
- spam
categories:
- WordPress
cover: /images/2008/05/wordpress-logo.png
---

[Wordpress](http://wordpress.org) c'est bien. Bien utiliser **Wordpress** c'est mieux !
Si je trouve l'installation de base de cette plateforme de rédaction plus qu'aboutie, certains _plugins_ sont indispensables pour améliorer votre blog, son suivi et sa présence sur Internet.

<!--more-->

Tous les plugins qui suivent ne vous seront pas indispensables (notamment si vous ne jouez pas avec [Flickr](http://www.flickr.com) ni [Google Analytics](http://www.google.com/analytics/)) mais peut-être que la lecture de ce billet vous en apprendra davantage et créer des envies ;-)

**Remarque** : ceci est un vieux billet. Certains plugins sont peut-être obsolètes, disparus ou abandonnés. Je vous recommande la lecture de [Alternatives to 66 of Your Favorite Dead WordPress Plugins](http://www.whoishostingthis.com/compare/wordpress/dead-plugins/) pour des équivalents.

## [Akismet](https://wordpress.org/plugins/plugins/akismet/)

Une de mes plus fortes motivations pour migrer de **Dotclear** à Wordpress était la présence d'_Akismet_, antispam évolué et mutualisé. Pourquoi mutualisé ? Parce que le travail est déporté sur les serveurs d'Akismet sur lesquels sont "branchés" des milliers de blogs. Autant dire que si un spam est déclaré au service, tous les sites utilisant Akismet en sont protégés.
C'est redoutable et ça m'a permis d'éviter de perdre du temps à modérer les messages en carton qui innondaient le blog. A l'heure actuelle, ce ne sont pas moins de 20 000 spams qui m'auront été épargnés. En l'espace de 12 mois, c'est appréciable.

## [Dofollow](http://www.semiologic.com/software/wp-fixes/dofollow/)

Les référenceurs et les personnes sensibilisées au référencement Web se doivent de savoir que **Wordpress ajoute la valeur`nofollow` à l'attribut `rel` des liens hypertextes de vos commentaires**. Pour rappel, il s'agit d'un _microformat_ spécifiant aux moteurs de recherche de ne pas tenir compte du-dit lien. Ceci a pour effet de ne pas prendre en compte l'éventuelle relation entre votre site et un site tiers pour des raisons évidentes de spam.

Les spams étant très bien écartés, **autant laisser ce flux de liens sortants faire son effet**.
_Seul bémol_ : ce plugin n'a pas d'interaction avec le widget officiel qui continuera à arborer un `rel="nofollow"`. Un petit _plus_ sympathique qui incitera peut-être davantage au commentaire sur votre blog ;-)

## [Feedburner FeedSmith](http://www.feedburner.com/fb/a/help/wordpress_quickstart)

[Feedburner](http://www.feedburner.com) est un service permettant de **mesurer l'utilisation de vos fils <acronym title="Really Simple Syndication">RSS</acronym> et Atom**. <q>Combien de personnes suivent mon fil RSS ?</q>, <q>Combien de nouveaux abonnés aujourd'hui ?</q> ou encore <q>Quels sont les articles les plus cliqués ou lus depuis les agrégateurs ?</q> seront le genre de questions pour lesquelles vous obtiendez _enfin_ des réponses.

_Sa configuration est aisée comme tout_ et il serait dommage de se passer d'un outil statistique doublé d'outils de republication d'une telle envergure.
Pour information, j'ai également publié un billet expliquant [comment migrer un flux RSS vers Feedburner](https://oncletom.io/2007/03/17/migrer-un-flux-rss-vers-feedburner/) pour celles et ceux ne pouvant installer ce plugin.

## [FlickrRSS](https://wordpress.org/plugins/plugins/flickr-rss/)

Vous utilisez le [service de gestion et de partage de photos Flickr](http://www.flickr.com) ? Une bonne idée est d'**intégrer vos photos directement sur votre blog** de manière "propre", c'est à dire sans passer par un médaillon en Flash ou JavaScript ; ceci bien sûr dans l'intérêt de pénaliser le moins de monde possible.

Son gros atout est la personnalisation du plugin et son _widget_ : _peu d'efforts pour un bon résultat_.

## [Full Text Feed](https://wordpress.org/plugins/plugins/full-text-feed/)

Depuis une certaine version de Wordpress (la 2.1 me semble-t-il), quand bien même on paramètre le blog pour afficher des flux intégraux (contenant l'intégralité des billets et non un court extrait), à partir du moment où un billet est précédé d'un chapô, seul celui-ci est publié dans le flux RSS.
Comme vous pouvez vous en douter, ce plugin remet les pendules à l'heure et c'est bien _dommage qu'une telle option ne soit pas proposée par défaut dans Wordpress_.

## [Google Analyticator](https://wordpress.org/plugins/plugins/google-analyticator/)

[Google Analytics](http://www.google.com/analytics/) est un formidable outil statistiques de sites Internet générant des rapports clairs au sein d'une interface qui l'est tout autant. Sans pub et sans logo affiché sur les sites audités, c'est pour moi le meilleur outil gratuit tant en terme de mesures que d'outils fournis.

Si jamais vous décidez de suivre votre audience par ce service (Feedburner propose un service similaire mais moins complet, on peut imaginer que tôt ou tard une fusion sera opérée à ce niveau), **Google Analyticator** permet de placer le traceur sans avoir à toucher le code des différents thèmes de votre blog. Il permet même de vous exclure des statistiques pour refléter au mieux le parcours de vos visiteurs.

## [Google Sitemaps Generator](https://wordpress.org/plugins/plugins/google-sitemap-generator/)

Les [sitemaps](http://www.sitemaps.org/) ont été initiées par Google afin de mieux signaler de nouveaux contenus ainsi que l'architecture de votre site. Depuis le format a été adopté par d'autres géants de la recherche sur Internet (Yahoo!, Ask etc.). En toute honnêteté, **je pense qu'un site bien construit n'a pas besoin de _sitemap_ pour être bien référencé** mais comme l'installation du plugin est facile et ne demande aucune attention post-installation, pourquoi s'en priver ?

A réserver aux _aficionados_ du référencement.

## [SEO Title Tag](https://wordpress.org/plugins/plugins/seo-title-tag/)

Encore un plugin pour référenceurs ! Un blog gagne à être vu et **SEO Title Tag** est justement là pour ça. Il offre la possibilité de personnaliser son titre de page que ce soit pour une page statique, un billet, les pages d'archives, les catégories ou toute autre URL gérée par Wordpress.

L'intérêt ? Eviter d'avoir des titres à rallonge affichés sur votre blog tout en bénéficiant de titres de pages plus longs et optimisés pour votre référencement. Un exemple concret est ce billet même. Regardez le titre au-dessus du texte (<q>Les meilleurs plugins pour Wordpress</q>) et le titre affiché dans la barre de titre (<q>Les meilleurs plugins pour Wordpress : Akismet, Feedburner, FlickRSS, SEO Title Tag, Simple Tagging</q>) ... ça parle tout seul ;-)

## [Simple Tagging](https://wordpress.org/plugins/plugins/simple-tagging-plugin/)

Encore un plugin pour référenceurs ? Hélas pour ceux qui s'en fichent, tant mieux pour ceux qui s'y intéressent. Les _tags_ (ou labels ou encore mots-clés - mais ça rappelle l'époque de la bulle Internet) viennent en complément des catégories de Wordpress.
Le plugin est astucieux et pratique puisqu'il propose une saisie prédictive, suggère des _tags_ et permet de voir des billets relatifs. Il faudra cependant mettre les mains dans le cambouis pour tirer pleinement parti de ses possibilités (lister des billets par tag notamment).

**Attention cependant**, avec l'arrivée de Wordpress 2.3, la gestion des tags sera directement intégrée et ne nécessitera pas de plugin (si ce n'est pour en étendre leurs fonctionnalités). Je vous conseille donc d'attendre la sortie de cette version. Je conseille ce plugin aux personnes qui ne migreront pas vers Wordpress 2.3 mais aussi parce que je l'utilise depuis quelques semaines. Son utilisation m'a offert une visibilité dans certains moteurs comme [Technorati](http://technorati.com).

## [Subscribe to Comments](https://wordpress.org/plugins/plugins/subscribe-to-comments/)

Cette fois ce plugin s'adresse à toutes et à tous mais surtout à vos visiteurs. Qui n'a jamais répondu à un commentaire et oublié de revenir sur un site pour voir si d'autres personnes avaient réagi ? Plein de monde dont moi. Difficile de s'abonner à tous les flux RSS de commentaires de sites sur lesquels on est actif car c'en deviendrait impossible à gérer.

Heureusement **Subscribe to Comments** ajoute une petite boîte à cocher au niveau du formulaire des commentaires et ceci dans le but de notifier les auteurs de commentaires que de nouvelles réponses ont été publiées. **Vraiment**, vos visiteurs apprécieront et leur retour sur votre blog n'en sera que facilité.
Du côté administration, il y a quelques statistiques sur les billets présentant le plus d'abonnés, les derniers abonnés etc.

## [WP-PostViews](https://wordpress.org/plugins/plugins/wp-postviews/)

Une bonne petite extension narcissique mais qui permet de **mesurer rapidement l'intérêt que portent les visiteurs à votre contenu**. Comptabiliser le nombre de lectures de chaque article et afficher ce nombre est son dada. Il faudra cependant triturer un petit peu le code des thèmes dans lequel vous voulez intégrer le plugin après activation. Les instructions sont cependant suffisamment claires pour y parvenir avec un faible bagage technique.

## [Jetpack by Wordpress.com](https://wordpress.org/plugins/jetpack/)

Enfin on termine sur des **statistiques**, <q>encore une fois</q> me direz-vous. Celles-ci sont fournies par l'éditeur de Wordpress à partir du moment où vous disposez d'une clé <acronym title="Application Programming Interface">API</acronym> Wordpress.com (c'est le cas si Akismet est activé et configuré sur votre blog). Il fournit un onglet supplémentaire dans votre tableau de bord et **résume les liens entrants vers votre blog, les billets les plus lus du jour, les liens externes cliqués et de la veille ainsi qu'une courbe de progression de votre audience**.
Je pense que c'est un **bon plugin pour débuter** et suffisamment complémentaire avec _Google Analytics_ et _Feedburner_ pour ne pas avoir à s'en passer.

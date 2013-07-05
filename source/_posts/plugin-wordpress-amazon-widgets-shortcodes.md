title: "Plugin Wordpress Amazon Widgets Shortcodes"
id: 1123
date: 2008-09-23 07:00:44
tags:
- amazon
- blogs
- i18n
- logiciels libres
- plugin
- shortcodes
- tinymce
- widgets
categories:
- Projets
- WordPress
---

![](https://oncletom.io/images/2008/09/amazon-associates.gif "Amazon Associates")

J'ai publié il y a quelques jours la version 1.2 du plugin [Amazon Widgets Shortcodes](http://wordpress.org/extend/plugins/amazon-widgets-shortcodes/). Cette version suit plusieurs autres publications plus intimistes, à des fins de tests grandeur nature. Ce fût en tous cas suffisant pour commencer à attirer l'attention de traducteurs.

Concrètement, ce plugin **facilite la monétisation des blogs Wordpress** en évitant de copier du HTML fourni par Amazon. Les widgets Amazon s'intègrent du coup par le biais de petits raccourcis textuels, les [shortcodes](http://codex.wordpress.org/Shortcode_API).

Présentation et explications sur la conception du plugin.

<!--more-->

## Widgets Amazon

Amazon fournit des widgets au travers de son [programme Partenaires](http://partenaires.amazon.fr) (également nommé _Associates_ dans le reste du monde). Ces widgets permettent d'intégrer des fonctionnalités sympathiques sur son propre site ou blog à partir d'un code HTML généré par leur interface.

La liste des widgets et des fonctionnalités est assez importante :

*   lien produit (avec ou sans image)
*   widget carrousel (présentation de produits dans un carrousel d'images)
*   widget slideshow (présentation de produits sur une bande déroulante)
*   widget envies cadeaux
*   liens textuels
*   liens aperçu produit
*   liens contextuels
*   etc.

Les widgets se créent en ligne et au final, leur code HTML nous est gentiement proposé.

**Premier constat** : le code fourni par Amazon a beau être fonctionnel, c'est quand même un sacré bazar. Pour peu que l'on bascule de l'éditeur Visuel à l'éditeur HTML de Wordpress, le code est nettoyé par endroit le rendant quasi inutilisable.

**Second constat**, copier ce code dans l'éditeur visuel de Wordpress (TinyMCE) est passablement horrible avec parfois jusqu'à 10 lignes de HTML illisible.

Enfin, côté maintenance c'est pas gagné : si Amazon change le code HTML des éléments sans assurer de rétrocompatibilité (ce que je ne leur souhaite pas), les widgets déjà insérés seraient rendus inopérants.

[caption id="attachment_1144" align="aligncenter" width="345" caption="Arborescence du code d&#39;Amazon Widgets Shortcodes"]![Arborescence du code d](https://oncletom.io/images/2008/09/awshortcode-workspace.png "Arborescence du code d")[/caption]

## Les objectifs fixés et avoués du plugin Amazon Widgets Shortcodes

Toujours désireux d'utiliser les widgets Amazon et sentant que ça pouvait être pratique, je me suis dit que c'était l'occasion rêvée de produire un plugin utile, bien conçu et fiable.

En développant ce plugin, je me devais d'atteindre ces objectifs :

*   le rendre **internationalisable** (i18n)
*   le proposer en 2 langues minimum (français et anglais)
*   permettre son **exploitation facilement** et sans se prendre la tête (KISS)
*   fournir une **documentation** d'utilisation appropriée
*   rendre l'**évolution du code aussi souple que possible**

## Stratégie de développement

Maintenant que j'avais les idées, il fallait les mettre en place. Voici comment j'avais envisagé les étapes du développement :

1.  support d'1 seul widget Amazon
2.  augmentation du nombre de widgets Amazon supportés
3.  stabilisation de l'API et internationalisation
4.  configuration intégrale depuis l'admin Wordpress
5.  intégration des widgets depuis l'éditeur HTML Wordpress (TinyMCE)
6.  intégration du copier/coller de code HTML Amazon
7.  support intégral des widgets
8.  améliorations pratiques et ergonomiques
9.  utilisation en tant que widgets dans les thèmes Wordpress
10.  gestion intégrée des widgets (Amazon ne fournissant aucune API à ce niveau)

Cette progression permet de créer petit à petit l'application, de la rendre modulaire et extensible. L'ajout et le support de nouveaux widgets ne doit pas remettre en cause l'architecture du plugin.

[caption id="attachment_1143" align="aligncenter" width="500" caption="Code JavaScript d&#39;Amazon Widgets Shortcodes"]![Code JavaScript d](https://oncletom.io/images/2008/09/awshortcode-javascript-abstraction.png "Code JavaScript d")[/caption]

## Ce à quoi il faut penser en développant un plugin

Développer un plugin c'est bien. Il faut cependant toujours avoir en tête qu'il ne sera pas installé que sur son propre blog. Ça doit être le _leitmotiv_ qui accompagne toute nouvelle idée afin de prévoir les installations et mises à jour.

Voici **5 points clés pour développer un bon plugin** :

1.  penser **utilisateur** avant tout (c'est lui qui doit savoir l'utiliser, pas ses développeurs)
2.  penser que le développement pourra se faire en **équipe** (clarté du code, documentation)
3.  penser que le plugin pourra être utilisé dans **plusieurs langues** (i18n)
4.  penser aux **scénarios de mise à jour** (base de données, tests fonctionnels/unitaires)
5.  penser que ce plugin n'est pas le seul sur le blog (optimisation, nommage)

## Intégration d'un widget Amazon par copier/coller

C'est le serpent qui se mord la queue diraient certains.
Et pourtant, c'est la meilleure fonctionnalité qu'on puisse apporter. Tout le monde n'étant pas technicien, les utilisateurs lambda apprécieront de pouvoir simplement se débarrasser de leur code HTML Amazon pour le convertir sur leur blog.

Simple comme bonjour !
<div style="text-align:center"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="425" height="350" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param name="src" value="http://www.youtube.com/v/BigIblty910" /><embed type="application/x-shockwave-flash" width="425" height="350" src="http://www.youtube.com/v/BigIblty910"></embed></object></div>

## Conclusion

**Le développement d'un plugin Wordpress est relativement aisé**. Certaines parties de la documentation sont quelque peu obscures, notamment celle qui touche l'éditeur HTML et son internationalisation. Il m'a fallu m'inspirer d'autres plugins mais aussi comprendre que Wordpress 2.5 mettait en cache la configuration de TinyMCE dans un fichier.

L'autre partie ardue fût le plugin TinyMCE : la documentation est toujours partagée entre la version 2 et la version 3 et là encore, la meilleure documentation reste le code source d'origine. Je saluerai au passage le gros effort de lisibilité que leur équipe a apporté. On en prendrait presque du plaisir à le lire ;-)

Quoiqu'il en soit, le plugin Wordpress [Amazon Widgets Shortcodes](http://wordpress.org/extend/plugins/amazon-widgets-shortcodes/) est bel et bien **prêt à être utilisé** par le grand public. Le minimum vital est là. Le confort aussi.
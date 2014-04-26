title: "Ménage de printemps"
id: 1345
date: 2009-04-15 20:06:59
tags:
- blueprint
- css
- css2
- css3
- feedburner
- html5
- performances
- png
- webdesign
- yslow
categories:
- Développement Web
- WordPress
cover: /images/2009/04/wordpress-badge.png
---

Je me décide à passer un coup de peinture sur ce blog quasiment 2 ans après le [CSS Summer Refresh](https://oncletom.io/2007/08/15/css-summer-refresh-2007/) organisé par [Alsacréations](http://alsacreations.com/). À vrai dire, j'avais ce projet dans les cartons depuis septembre 2008 mais le plus difficile a été de trouver le talent graphique. C'était également l'occasion de dire au revoir aux navigateurs Web de seconde zone, à savoir Internet Explorer 7 et moins.

<!--more-->

## Le besoin

Mon besoin était le suivant :

*   **Thème graphique**
  *   durable et peu lassant
  *   usage de transparence
  *   toujours sur des tons marrons
  *   inspire la modernité tout comme le côté rustique et soucieux de la nature
  *   structure en grille pour intégrer avec [Blueprint](http://blueprintcss.org/)
*   **Fonctionnalités**
  *   intégration d'un _lifestream_ (intégré entre temps)
  *   intégration de [Feedburner](http://feedburner.com/) via son [API Awareness](http://code.google.com/intl/fr/apis/feedburner/awareness_api.html)
  *   intégration d'un bandeau [Flickr](http://flickr.com/) qui s'étend sur toute la largeur de l'écran, peu importe la résolution employée
  *   utilisation du blog comme vitrine : suppression de ma dernière page HTML manuelle (autrefois accessible sur [oncle-tom.net](/))
*   **Compatibilité**
  *   navigateurs modernes ... c'est à dire rien en dessous d'Internet Explorer 8
  *   intégration avec HTML 5
  *   pas d'utilisation de GIF mais de PNG 6 et PNG 24
*   **Autre**
  *   soucis de performance (peu d'éléments graphiques, utilisation des _sprites_)

Finalement c'est [Lesly](http://leslyg.com/) qui s'est chargé de la création graphique. Vous pouvez d'ailleurs consulter la [maquette graphique originale sur son portfolio](http://leslyg.com/work/blog-de-thomas-parisot-oncle-tom/). Quant à moi, j'ai réalisé toute l'intégration CSS/HTML dans WordPress.

## L'intégration

Tout d'abord, qu'est ce qui a changé par rapport à la maquette ?

*   **les polices de caractère** : hormis le titre, seules des polices standards ont été employées. J'attendrai le support des polices personnalisées en CSS 3 à moins de partir sur une solution à base de SVG (encore que j'ai des doutes sur l'accessibilité d'une telle méthode) ;
*   **moins d'éléments graphiques** : les punaises, les effets papiers ont été supprimés. Rien que le papier et le scotch de la partie "À propos" pesaient plus de 60Ko ;
*   **abandon temporaire du _featured content_** : les solutions actuelles étaient trop lourdes et j'étais trop impatient pour passer quelques heures de plus ... donc c'est temporaire ;-)
*   l'**ajout des pages en lieu et place du fil d'ariane** : j'en avais besoin pour présenter différents contenus statiques ;
*   **le pied de page** : peu de widgets WordPress offrent un degré de personnalisation suffisant pour arriver à ce résultat. C'est donc temporisé là aussi en attendant de trouver chaussure à mon pied ;-)

[![Aperçu pleine page](/images/2009/04/caseoncle-tomnet-oncletom-wood-150x300.png "caseoncle-tomnet-oncletom-wood")](/images/2009/04/caseoncle-tomnet-oncletom-wood.png)

Pour le reste je me suis fait plaisir avec notamment l'utilisation de coins arrondis (_border-radius_) basés sur les implémentations de Gecko et Webkit. Désolé pour les utilisateurs d'autres navigateurs car j'en ai usé et abusé afin d'éviter l'utilisation d'images.

J'ai également joué avec l'**API de WordPress** pour générer les vignettes des articles. Je sais bien qu'on peut définir des tailles d'images mais ça ne vaut que pour les médias nouvellement mis en ligne. J'en ai profité pour n'afficher dans le listing que l'extrait du billet. Pas l'intro, seulement l'extrait (_excerpt_). J'ai lu récemment un article qui parlait de la chose et ça m'a paru plus approprié. Je peux désormais écrire le texte qui me convient pour attirer la lecture vers un article sans pour autant que ça ait de répercution sur son contenu une fois affiché en pleine page.

Je suis en revanche toujours dubitatif sur l'API de WP Cron : ma tâche a beau être enregistrée et planifiée, j'ai l'impression qu'elle ne s'exécute jamais ... contrairement aux recherches de mises à jour de plugins & cie. <span style="text-decoration: line-through;">Quelqu'un a déjà joué avec et rencontré pareil problème ?</span>
**Mise à jour** : j'ai résolu le problème et détaillé la marche à suivre dans l'article [affichage personnalisé de ses lecteurs Feedburner](https://oncletom.io/2009/05/14/affichage-personnalise-abonnes-feedburner/). Je planifiais une fonction et non un _hook_. Cela fonctionnait mais ne produisait fatalement pas de résultat ;-)

Au final je n'ai même pas eu à placer la moindre ligne de JavaScript : tout est fait à partir de sélecteurs CSS. Mon seul regret : l'absence de sélecteur adjacent ... "précédent". Pour le menu du haut, je voulais pouvoir styler les éléments de menus ayant comme élément suivant une liste d'élément (`<ul>`).

## Au final

J'ai mis à peu près 2 jours pour tout intégrer et optimiser. Je n'ai pas encore tenté l'optimisation à coup de PNG 8 grâce aux quelques Ko gagnés avec [pngcrush](http://pmt.sourceforge.net/pngcrush/). Il faudrait également que je réunisse quelques images dans un seul et même sprite pour gagner encore quelques dizièmes de seconde en temps de chargement.

![Rapport YSlow](/images/2009/04/caseoncle-tomnet-yslow.png "Rapport YSlow")

J'en ai profité pour tester l'utilisation de _mod_expires_ et _mod_gzip_ chez OVH en mutualisé (avant de tout migrer sur serveur dédié) : ça marche plutôt très bien. Si ça vous intéresse, je peux en faire un billet dédié. D'ici là, n'hésitez pas à bouquiner [High Performances Web Sites](https://oncletom.io/2008/07/15/high-performance-web-sites/) qui reste une référence en la matière. J'attends d'ailleurs sa suite avec impatience : _Even Faster Web Sites: Essential Knowledge for Frontend Engineers_.

Quoiqu'il en soit, le fait d'avoir eu la pleine utilisation des sélecteurs CSS a été géniale : la vie est grandement facilitée. _inline-block_ évite de nombreuses bidouilles à base de flottants. J'ai hâte qu'une version de _Blueprint_ sorte en se basant uniquement sur les sélecteurs avancés et non des flottants pour disposer de mises en forme plus complexes tout en étant facile d'accès.

Si vous rencontrez des problèmes, surtout n'hésitez pas à les signaler, par le [biais des commentaires](#respond) ou par [email](/contact/) :-)

En attendant, je retourne sur mon [projet éprouvant du moment](https://oncletom.io/2009/02/24/faire-part-de-naissance/) !
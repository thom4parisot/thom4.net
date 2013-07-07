title: "Canalblog Importer : migrer de Canalblog vers WordPress en 5 clics"
id: 1519
date: 2010-02-12 10:00:46
tags:
- canalblog
- curl
- dom
- import
- logiciels libres
- migration
- php5
- plugin
- WordPress
- xpath
categories:
- WordPress
---

[Canalblog](http://www.canalblog.com/), en 2010, c'est près de 700 000 blogs et près de 17 millions d'articles publiés depuis l'année 2003\. À ce stade, difficile de considérer cette plateforme comme négligeable puisqu'elle a bénéficié d'une capacité d'attraction suffisante pour séduire plusieurs centaines de millier d'utilisateurs.

![](/images/2010/02/canalblog.png "Logo Canalblog")

J'ai contacté le support à plusieurs reprises pour prendre connaissance de la mise en place de noms de domaine personnalisés et de la mise en place de nouvelles fonctionnalités. Bénéficier d'une adresse en _monblog.fr_ au lieu de _monblog.canalblog.fr_ est intéressant, en terme d'image mais aussi d'indépendance.

Le gros problème est que **Canalblog ne m'a jamais répondu**. Ni à moi ni à plusieurs utilisateurs.
En 2010, ce sont donc plus de** 700 000 blogs qui se retrouvent captifs** d'une plateforme avec une seule porte de sortie : le copié/collé de leurs articles. Difficilement acceptable.

<!--more-->

## Canalblog Importer : plugin d'import de Canalblog vers WordPress

Las de ce mutisme de la part de Canablog, j'ai donc décide de me mettre à l'ouvrage pour offrir une extension WordPress répondant à ces 2 critères :

*   importer un maximum d'éléments
*   en demander le moins possible à l'utilisateur

Une fois le _plugin_ activé, une nouvelle entrée fait son apparition dans la rubrique d'administration Outils > Importer : [Canalblog Importer](http://wordpress.org/extend/plugins/canalblog-importer/).

## L'import Canalblog en 5 étapes

L'import de son blog Canalblog se déroule par la suite en 5 étapes :

1.  Configuration
2.  Import des mots-clefs
3.  Import des catégories
4.  Import des articles
  *   Import des articles
  *   Import des commentaires
  *   Import des médias
5.  Nettoyage
La configuration de l'import est le moment requérant toutes vos capacités pour taper l'**adresse de votre blog**. Oui c'est tout. S'ensuit alors une suite de recommandations, entre autre pour s'assurer du bon déroulement de l'import. Ça concerne la configuration des permaliens et le format de dates sur Canalblog.

Une fois le bouton d'import cliqué, il faudra réitérer le clic au début de chaque étape clé, la plus longue étant l'import des articles.
Techniquement, sur un blog possédant plusieurs milliers d'articles sur 5 ans, il m'aura fallu à peine** 20 minutes de patience et 5 clics**.
Difficile d'en demander plus à quelqu'un n'ayant aucune notion technique.

[![Écran de configuration de Canalblog Importer](/images/2010/02/screenshot-11-300x123.png "Écran de configuration de Canalblog Importer")](/images/2010/02/screenshot-11.png)

## Canalblog Importer : les fonctionnalités

Les différentes étapes de l'import résument à elles seules les fonctionnalités de cet outil d'import :

*   import des mots-clefs
*   import des catégories
*   import des articles
*   import des commentaires
*   import des médias
*   import des auteurs
*   correction des liens inter-articles
*   intégration des médias dans le gestionnaire de médias de WordPress − avec génération de vignettes à la clé et utilisation de celles-ci au sein des articles
*   reprise de l'intégration et tolérance à l'erreur : l'import peut être relancé indéfiniment, les contenus ne seront pas réimportés en double

En gros, ce que cette extension ne fait pas, c'est le café, la récupération de la _blogroll_ et la migration du référencement vers votre nouveau blog − faute au manque de nom de domaine et à l'impossibilité de dire aux moteurs de recherche les nouvelles adresses des articles hébergés sur Canalblog.

J'ai essayé de rendre toutes les **étapes conviviales, explicatives et rassurantes** sur le processus en cours et restant. C'est encore plus simple que de rédiger un article de blog. Enfin, je trouve ;-)

[![Écran d&#39;aide à la fin d&#39;import](/images/2010/02/screenshot-2-300x142.png)](/images/2010/02/screenshot-2.png)

## La clé de la réussite : cURL et XPath

Sous le capot, la dépendance à PHP 5.1+ s'explique par 3 choses :

*   l'autoloading PHP
J'en ai un peu marre de faire des require à tour de bras donc je fais fi des recommandations de WordPress : PHP4 est mort, faut arrêter avec ce délire de compatibilité, pas en 2010 (ni même en 2008 ou 2009).
*   [cURL](http://fr.php.net/manual/en/book.curl.php)
C'est vraiment la boîte à outil de la manipulation HTTP. Elle est abstraite dans la classe WP_Http. Son utilité ? Récupérer du contenu distant. Pratique pour rapatrier le contenu de pages HTML, entre autre.
*   [DOMXPath](http://fr.php.net/manual/en/class.domxpath.php)
Associé au [DOM PHP5](http://fr.php.net/manual/en/book.dom.php), c'est un outil formidable pour requêter au sein d'un document HTML ... disons, récupéré à distance ? La structure des thèmes Canalblog étant identique (pour peu qu'ils n'aient pas été retouchés en mode avancé), le travail de constitution des sélecteurs XPath n'en était que plus facilitée.

Donc clairement, cette extension effectue un **travail bête et méchant de _crawl_ des pages d'un blog**, de manière structurée afin de peupler tranquillement un blog WordPress de ce même contenu.
Je me suis basé au maximum par les outils déjà existants ... y compris la classe d'import WordPress.com ! Je l'ai réutilisé pour l'import des médias vu qu'elle correspondait parfaitement au besoin.

## Le pouvoir aux utilisateurs

Au-delà du simple aspect technique de la réalisation de l'extension (qui a demandé quelques heures de travail tout de même), il faut comprendre une chose : capturer ses utilisateurs pour éviter leur fuite en cas de déclin d'un produit n'empêchera pas les utilisateurs de trouver une solution à leur problème.

**La réponse au problème de la communauté est venue de la communauté elle-même** : elle veut partir ? Elle part et s'en donne les moyens.

Le seul moyen pour Canalblog de conserver ses utilisateurs, après cette porte de sortie offerte à tous les usagers, c'est d'innover et de les reconsidérer comme le moteur de leur croissance. Tout effort pour entraver cette démarche serait une pure perte de temps, n'ajoutant que trop de douleurs à une agonie certaine.

[Canalblog Importer](http://wordpress.org/extend/plugins/canalblog-importer/) est une extension gratuite pour WordPress, libre de téléchargement, d'utilisation et de modification (sous réserve que le code modifié soit republié sous la même licence). L'extension constitue ainsi une bonne base pour constituer de nouveaux imports d'autres plateformes, fermées elles aussi.
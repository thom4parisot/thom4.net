title: "Livre blanc sur les frameworks PHP : présentation et explications"
id: 926
lang: fr
date: 2008-06-18 07:00:55
tags:
- admin generator
- bonne pratique
- cakephp
- clever age
- codeigniter
- entreprises
- ez components
- framework
- livre blanc
- logiciels libres
- pear
- php
- scaffolding
- symfony
categories:
- WebDev
cover: /images/2008/06/couverture-livre-blanc.png
---

Il existe 4 phases dans la vie d'un développeur :

1.  celle où il aime **tout créer** lui-même
2.  celle où il aime **utiliser un outil** déjà tout prêt
3.  celle où il aime **concevoir son outil** avec d'autres outils tout prêt
4.  celle où il aime que **les autres conçoivent pour lui** (mais là il est patron ou armé d'une horde de stagiaires ;-))
Les _frameworks_ font partie de cette troisième catégorie. Ils existent dans à peu près tous les langages : CSS, PHP, JavaScript, Java, C#, Python, Ruby etc.
Mon discours portera sur les frameworks PHP, parce que c'est mon langage de prédilection mais aussi parce qu'un [livre blanc sur les frameworks PHP pour l'entreprise](http://www.clever-age.com/veille/publications/livres-blancs/livre-blanc-frameworks-php-pour-l-entreprise.html) est récemment sorti. Il parlera aussi bien aussi bien aux décisionnels qu'aux développeurs, à leur compte ou pour celui d'une entreprise.
<!--more-->

## De l'intérêt d'utiliser un framework

Un _framework_ est littéralement ce que l'on peut appeler un socle logiciel : il propose des fonctionnalités de base et vous les utilisez pour concevoir votre propre application.

J'essaierai de faire court en énumérant une liste de quelques points à faire valoir dans l'utilisation d'un framework pour concevoir une application Web :

*   **développement accéléré**
*   _convention over configuration_ : suivez les rails des conventions plutôt que de tout paramétrer
*   <acronym title="Don't Repeat Yourself">DRY</acronym> : écrivez le code une fois et réutilisez-le pour éviter le copier-coller (sans parler des gains de maintenabilité)
*   **mutualisation du code** : un même socle pour plusieurs applications
*   concentration du développement sur le **code métier**
*   le framework vous décharge des tâches pénibles : sécurité, gestion des URL, gestion des permissions utilisateur, manipulation des bases de données, gestion du cache, accès aux fichiers etc.
*   **génération automatique** d'interfaces (_admin generator_), de base de données (_ORM_), de modules/applications (_scaffolding_) etc.
*   **vecteur d'apprentissage** individuel et collectif
*   bénéfices de tout le travail d'une communauté ... et de celui que vous réinjecterez

_A contrario_, on pourra critiquer les frameworks pour leur plus forte consommation en ressources qu'un développement maison.
Ce n'est évidemment pas une raison valable pour passer à côté d'autant plus qu'il existe de nombreuses solutions pour palier/réduire ce problème avec les gestionnaires de cache et les accélérateurs de code.

![Exemple d](/images/2008/06/exemple-application-symfony.png "Exemple d")

## Framework PHP ou CMS ?

Maintenant vous me direz : **pourquoi développer un logiciel avec un framework au lieu d'utiliser un bon CMS des familles** ou tout autre logiciel faisant son office ?
Ce n'est à mon sens pas la bonne question à se poser : **un framework n'est pas une fin en soi**. Le choix du logiciel dépendra essentiellement du besoin, immédiat et futur. Vous aurez beau avoir le meilleur développeur d'un CMS de votre pays, si le choix de la solution technique est déjà erroné, il ne suffira pas à éviter la catastrophe.

J'ai beaucoup accroché à cette formule le jour où je l'ai entendu : si vous estimez à au moins 50% l'utilisation de spécifiques dans une solution logicielle existante de type CMS, vous faites fausse route. Le spécifique EST votre solution, le CMS devient une simple fonctionnalité.
Dans le cas d'un développement spécifique, le choix d'un framework est dans ce cas naturellement prescrit.

Dans tous les cas, **ce sont vos besoins qui doivent vous guider vers le choix d'une solution** et non l'inverse. Ne partez pas surtout d'une solution pour tenter d'y combler vos besoins.

## Les principaux frameworks PHP

Le [livre blanc sur les frameworks PHP](http://www.clever-age.com/veille/publications/livres-blancs/livre-blanc-frameworks-php-pour-l-entreprise.html) expose en détail les frameworks majeurs en PHP avec leurs avantages, inconvénients et surtout une **grille comparative** permettant de mettre à bout à bout leurs différentes fonctionnalités.

Toutefois on peut retenir ces noms de frameworks PHP :

*   [CakePHP](http://cakephp.org/)
*   [CodeIgniter](http://codeigniter.com/)
*   [EZ Components](http://ez.no/fr/ezcomponents)
*   [PEAR](http://pear.php.net/)
*   [symfony](http://www.symfony-project.org/)
*   [Zend Framework](http://framework.zend.com/)

On pourrait classer ces frameworks en 2 catégories :

*   les **briques logicielles** : ils se présentent comme des briques indépendantes qu'on peut utiliser à souhait dans n'importe quel projet, y compris d'autres frameworks. C'est notamment le cas de _PEAR_, _EZ Components_ et _Zend Framework_ ;
*   les **frameworks à proprement parler** : ils imposent une structure particulière et des lignes directrices de développement pour être plus efficace. On citera dans ce cas _symfony_, _CodeIgniter_ et _CakePHP_

## symfony : champion toutes catégories

![Écran de première installation de symfony](/images/2008/06/symfony-first-install.gif "Écran de première installation de symfony")

Lors de la lecture du [livre blanc sur les frameworks PHP](http://www.clever-age.com/veille/publications/livres-blancs/livre-blanc-frameworks-php-pour-l-entreprise.html), vous remarquerez très probablement que le framework _symfony_ a tout pour plaire. C'est en effet à l'heure où j'écris ces lignes le framework PHP le plus abouti et le plus intéressant à analyser.
Il jouit d'une excellente réputation, d'une incroyable stabilité et d'une communauté très active, quantitativement et qualitativement parlant. Si on ne devait en garder qu'un, ça serait lui.

Pourquoi j'apprécie énormément symfony :

*   une documentation fonctionnelle **et** une documentation de l'API complètes
*   utilisation intensive de fichiers <acronym title="Yet Another Markup Language">YAML</acronym> pour le paramétrage
*   les fonctionnalités d'**amin generator**, de gestion de base de données avec l'ORM [Propel](http://propel.phpdb.org/) et les outils d'automatisation qui en découlent
*   **facilité d'intégration d'Ajax** sans pondre une seule ligne de JavaScript
*   grand confort de développement
*   des conventions inspirées des plus grands (Ruby on Rails, Django etc.)

## Conclusion

Développeurs : **renseignez-vous et intéressez-vous à au moins un framework**. C'est bien pour le CV et vous gagnerez du temps.
Décideurs : **exigez de savoir quelle solution on vous préconise** et surtout, pourquoi celle-là. À plus forte raison si votre projet comporte beaucoup de besoins spécifiques, demandez s'il s'agit d'un framework et si ce n'est pas le cas, pourquoi ça n'a pas été envisagé. Vous gagnerez aussi du temps et j'espère de l'argent.

**Les frameworks sont aujourd'hui partout** et ont acquis une certaine maturité. Ces lettres de noblesse les rendent utilisables aussi bien pour des petits besoins que ceux d'entreprises, peu importe leur taille. Les gains de temps et l'incitation à la production de qualité sont des facteurs non-négligeables pour la pérennité de vos applications.

_Attention_ toutefois : un mauvais développeur et/ou une mauvaise conception prédomineront toujours. Votre fromage industriel aura toujours le même goût, peu importe la qualité du pain ;-)

Je radote mais j'espère que vous trouverez suffisamment d'informations pour vous convaincre dans le [livre blanc des frameworks PHP pour l'entreprise](http://www.clever-age.com/veille/publications/livres-blancs/livre-blanc-frameworks-php-pour-l-entreprise.html). C'est ce genre de publications qui me font aimer la société dans laquelle je travaille ;-)

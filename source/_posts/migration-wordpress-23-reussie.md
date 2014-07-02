title: "Migration vers Wordpress 2.3 réussie"
id: 776
date: 2007-09-28 13:00:28
tags:
- logiciels libres
- seo title tag
- simpletagging
categories:
- WebDev
- WordPress
cover: /images/2008/05/wordpress-logo.png
---

[Wordpress 2.3 est sorti, accompagné de sa traduction française](http://www.wordpress-fr.net/blog/wordpress/sortie-de-wordpress-23-et-de-son-pack-franais). C'est un fait et je conseille aux aventuriers de toujours mais alors toujours faire une sauvegarde de leurs fichiers et de leur base de données avant de se lancer dedans. **Compte-rendu d'une migration** qui s'est passée sans trop de problèmes et **point rapide sur quelques correctifs** appliqués pour rendre le tout fonctionnel.

<!--more-->

## Préparatifs de mise à jour

La meilleure solution pour migrer en cas de doute c'est d'avoir de vrais amis et qui ont déjà réalisé ce genre d'intervention. Ca évite de faire des choses sans les comprendre et de flinguer son blog en se rendant compte après coup que ... ben pas de sauvegarde. **La sauvegarde c'est obligatoire** (il peut _toujours_ y avoir un pépin) et concerne aussi bien la **base de données** que les **fichiers**.
Pourquoi ? Parce que si la mise à jour ne se fait pas, on peut revenir en arrière et reprendre sa vie comme si de rien n'était.

Le plus souple pour sauvegarder/restaurer est de passer par des instructions en ligne de commande. **phpMyAdmin** c'est bien mais bien souvent limité à des restaurations de 2Mo (sauf les dernières versions qui se débrouillent pour reprendre au dernier point d'arrêt) :

```bash
mysqldump -h votre_hôte_MySQL -u utilisateur -p votre_base_de_données > sauvegarde.sql
```

La restauration se fait en un clin d'œil par cette autre commande :

```bash
mysql -h votre_hôte_MySQL -u utilisateur -p votre_base_de_données < sauvegarde.sql
```

La sauvegarde de vos fichiers peut également se faire rapidement en vous plaçant à la racine du répertoire Wordpress (vous devez voir le répertoire `wp-admin` sous vos yeux) :

```bash
tar -czf _sauvegarde.tar.gz_ *
```

**Remarque** : mieux vaut ne supprimer ces sauvegardes que lorsqu'on est sûr que tout fonctionne après la mise à jour. De même, il faut faire attention à ce que ces **sauvegardes ne soient pas accessibles au public** sinon un simple téléchargement dévoile le mot de passe de la base de données. Prudence donc.

## Changements pour jQuery

Depuis la version 2.2, Wordpress effectue une transition de la librairie JavaScript Prototype vers jQuery. Si cette dernière est toujours disponible, il y a eu du changement puisque la directive `jQuery.noConflict()` est activée.
[La documentation à propos de noConflict()](http://docs.jquery.com/Core/jQuery.noConflict) est explicite sur sa signification. Au lieu d'utiliser jQuery avec la fonction dollar (`$()`), il faut passer par la fonction `jQuery()`.

**La solution à apporter à vos scripts qui se basaient dessus est simple** : rechercher/remplacer (<kbd>CTRL+H</kbd> en général sur les éditeurs de texte) `$(` par `jQuery(`.

## Problème avec Simple Tagging

**Simple Tagging** était une solution intuitive et sympa de gestion de tags avant que ce concept ne soit intégré nativement dans la version 2.3 de Wordpress. J'appréciais sa saisie prédictive et j'envisageais de l'utiliser pour suggérer des articles connexes. Malheureusement ce plugin n'est plus compatible (y compris dans sa version 1.7) et [il faudra attendre sa refonte prévue et en cours de réalisation](http://www.wordpress-fr.net/blog/themes/les-tags-dans-wordpress-23-explications-et-importation-depuis-les-anciens-plugins).

## Problème avec SEO Title Tag 2.0RC2

**SEO Title Tag** permet de choisir des titres complémentaires à vos pages. Le soucis c'est qu'il entre en conflit avec _Wordpress 2.3_ en cas d'utilisation native des _tags_ (et uniquement dans ce cas là). Lors de l'affichage des articles par tag, une erreur souille votre écran.
Concrètement _SEO Title Tag_ s'embrouille en pensant que le plugin _Ultimate Tag Warrior_ est installé et tente de faire appel à une de ses fonctions. D'où l'erreur. [J'ai proposé ma solution sur le site officiel](http://www.netconcepts.com/seo-title-tag-plugin/#comment-116165) mais je la partage à nouveau ici.

Il faut modifier le fichier `seo-title-tag.php`, se rendre à la ligne 285 et faire en sorte que

```php
} elseif(function_exists('is_tag') && is_tag()) {
```

devienne

```php
} elseif(function_exists('is_tag') && is_tag() && isset($utw)) {
```

Testé et approuvé.

## Point rapide sur les tags

**Wordpress 2.3** apporte sa propre gestion des _tags_. La question récurrente est <q>qu'utiliser, tags ou catégories ?</q>. Les deux mon capitaine. Utilisez toujours les **catégories pour classer vos rédactions**. Les **tags sont là pour affiner** ce classement en ajoutant des correspondance. Dans un registre plus fromager, les catégories correspondraient au type de lait de fromage (vache, brebis, chèvre etc.) et les tags seraient des compléments (bleu, pâte molle, pâte pressée etc.).

**Du coup je déconseille d'utiliser le convertisseur de catégories en tags**. Ca ruinerait toute classification et vos lecteurs s'y perdraient.

La logique de Wordpress était d'**introduire son propre moteur de gestion de tags et que les plugins complètent** leur gestion en vous facilitant la vie pour que chacun les gère comme il le sente. **Et c'est plutôt malin et bien pensé**.
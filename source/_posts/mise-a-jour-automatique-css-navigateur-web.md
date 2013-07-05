title: "Mise à jour automatique d'une feuille de style CSS dans le navigateur Web"
id: 632
date: 2007-05-25 13:00:09
tags:
- astuce
- bonnes pratiques
- cache
- code
- css
categories:
- Développement Web
- Standards du Web
---

Bien souvent on est amené à **modifier une feuille de style existante pour adapter la présentation** ou corriger un bug (qui a pensé à _Internet Explorer_ ?).
Bien souvent on modifie directement cette feuille de style pour ensuite écraser les anciennes versions sur les sites en production.

Et généralement on se confronte au **problème du cache des navigateurs Web**. Ces derniers conservent en mémoire les feuilles de style pendant un certain temps causant ainsi un décalage entre le fichier <acronym title="Cascading Style Sheet">CSS</acronym> du serveur (et la présentation souhaitée) et celui du navigateur (reposant sur une présentation obsolète).
<!--more-->

### Inclure une feuille de style

L'inclusion d'une feuille de style au sein même de la page n'est pas une opération qui devrait vous poser trop de problèmes. Elle peut se faire de deux façons, la première étant compatible avec tous les navigateurs, la seconde seulement avec les navigateurs modernes.

```
/* inclusion "old school" */
<link rel="stylesheet" type="text/css" href="url/style.css" media="screen" />

/* inclusion "moderne" */
<style type="text/css">@import url('url/style.css') screen;</style>
```

### Inclure une feuille de style avec mise à jour automatique

Vous allez voir, c'est tout bête. _On reprend l'exemple précédent_ ; on veut conserver le même nom de fichier mais il a été mis à jour et on souhaite que le _navigateur le recharge sans que l'utilisateur ait à faire un petit F5_ sur son clavier.

```
/* inclusion "old school" */
<link rel="stylesheet" type="text/css" href="url/style.css<ins>?v=1234</ins>" media="screen" />

/* inclusion "moderne" */
<style type="text/css">@import url('url/style.css<ins>?v=1234</ins>') screen;</style>
```

Vous voyez le **v=1234** ? Le fait d'ajouter un paramètre au fichier appelé dupe le navigateur et lui fait croire qu'il s'agit d'un fichier différent de _style.css_. En réalité on peut mettre n'importe quoi en paramètre (le timestamp de mise à jour du fichier par exemple. Par exemple `style.css?1180077252`).

### Pourquoi ça fonctionne ?

Dans une <acronym title="Uniform Ressource Identifier">URI</acronym>, le chemin physique du fichier s'arrête juste avant le <kbd>?</kbd>. _Tout ce qui est inscrit après est considéré comme étant des paramètres_, compléments virtuels du-dit fichier. Ce qui importe au navigateur, c'est que le fichier en question renvoie bien des données dans le type <acronym title="Multipurpose Internet Mail Extensions">MIME</acronym> attendu, ici `text/css`.

**Le navigateur gère le cache d'un fichier par rapport à son adresse complète**, ceci incluant les paramètres fournis. Pour lui, `style.css?v=1` et `style.css?v=2` sont deux fichiers différents, peu importe s'il s'agit en réalité du fichier `style.css`.
En cas de changement de paramètre, **le navigateur estime qu'il s'agit d'un nouveau fichier**, récupère celui-ci et, magie, utilise la dernière version en date de celui-ci plutôt qu'une version en cache, obsolète.

Cette petite astuce permet de _gagner en crédibilité face à des clients_, _évite aux internautes d'être perdus_ dans un affichage incohérent misant fortement sur les feuilles de style.
Exactement ce que l'on recherchait ;-)

[amazon-carrousel]8010%2F730e7f70-dbbe-48ba-85e0-7a9cc5054dc8[/amazon-carrousel]
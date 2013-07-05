title: "Migrer un flux RSS vers Feedburner"
id: 511
date: 2007-03-17 13:00:31
tags:
- apache
- atom
- bonnes pratiques
- feedburner
- rss
- xml
categories:
- Développement Web
---

![Feedburner logo](https://oncletom.io/images/2007/03/feedburner-logo.gif)

Pour mesurer l'utilisation des [flux RSS d'Emu Nova](http://www.emunova.net/infos/outils/), j'ai décidé d'utiliser [Feedburner](http://www.feedburner.com/) dans sa version gratuite. Je l'utilise déjà pour ce blog et j'en suis très satisfait, que ce soit pour les _données fournies_, les _personnalisations possibles_ ou encore la _qualité du service_.

_La problématique du jour_ : **comment utiliser Feedburner sur des flux RSS déjà existants** ? Le changement doit être transparent pour les utilisateurs.

<!--more-->

## Créer son flux Feedburner

Avant de faire quoi que ce soit, il convient de créer son flux Feedburner à partir d'un flux déjà existant (qu'on souhaite rediriger tant qu'à faire). L'étape la plus simple.

![Création d](https://oncletom.io/images/2007/03/feedburner-create-feed.png)

## Modifier les liens vers les flux

Une fois le flux créé, pensez à mettre à jour **tous vos liens** pointant vers ce fichier (balises <link />, liens hypertextes, boutons personnalisés etc.). Ceci a pour but d'unifier toute les adresses et éviter qu'il y aient plusieurs adresses visibles pour accéder à la même information.

## Rediriger les flux existants

Arrivé à ce stade, il faut bien comprendre que nous avons 2 cas de figure :

*   **les anciens abonnés** : ceux qui ont souscrit au flux avant que la modification précédente n'ait eu lieu. Le changement doit être transparent pour eux et ils ne doivent pas avoir à modifier la configuration de leurs agrégateurs actuels
*   **les nouveaux abonnés**

L'intérêt est d'auditer _tous les abonnés_ et donc pas seulement les nouveaux. C'est là que la redirection s'avère indispensable.
On est bien d'accord qu'il faudrait créer une redirection renvoyant l'ancienne adresse du flux vers la nouvelle adresse (celle fournie par Feedburner).

Le plus simple consiste à créer un fichier `.htaccess` (ou d'éditer directement les directives de votre serveur virtuel) dans le même répertoire que celui du fichier XML. Il contiendrait ce code :

```
RewriteEngine on
RewriteRule ^**votreFlux**\.xml$ http://feeds.feedburner.com/**votreFluxFeedburner** [R=301,L]
```

On teste, ça marche. Un peu trop bien puisqu'en suivant ce principe, quiconque appelle la véritable URL de votre flux sera redirigé vers le flux Feedburner. Si en soi ça ne pose pas problème majeur, _ça l'est pourtant pour le robot d'indexation Feedburner_ qui, lui, a besoin d'accéder au véritable flux pour en extraire les informations.

Feedburner ayant bien fait les choses, leur robot d'indexation se signale en envoyant une entête [_User Agent_ `FeedBurner/1.0 (http://www.FeedBurner.com)`](http://forums.feedburner.com/viewtopic.php?t=707). Ca tombe bien, il existe un [filtre `RewriteCond` dans le module _mod_rewrite_](http://httpd.apache.org/docs/2.0/mod/mod_rewrite.html#rewritecond). Ce dernier va nous servir à **exclure le robot Feedburner de notre redirection** précédente.

Juste au-dessus de notre `RewriteRule`, il suffit d'insérer la ligne suivante :

```
RewriteCond %{HTTP_USER_AGENT} !FeedBurner
```

L'utilisation de cette condition est d'ailleurs la seule raison pour laquelle une règle de réécriture a été employée en lieu et place d'un `RedirectPermanent`.
**Attention cependant**, le `RewriteCond` est à spécifier à _chaque règle de réécriture_. La documentation est assez explicite à ce sujet : **la condition n'est effective que pour une seule règle de réécriture**.

## Le résultat final

Et plutôt qu'un long discours, voici le résultat final obtenu pour [Emu Nova](http://www.emunova.net/). Les fichiers RSS étaient placés dans le répertoire `go/rss/`. J'y ai donc placé un fichier `.htaccess` contenant le code suivant :

```
RewriteEngine on
RewriteCond %{HTTP_USER_AGENT} !FeedBurner
RewriteRule ^news\.xml$ http://feeds.feedburner.com/emunovaNews [R=301,L]
RewriteCond %{HTTP_USER_AGENT} !FeedBurner
RewriteRule ^veda\.xml$ http://feeds.feedburner.com/emunovaVedaTests [R=301,L]
RewriteCond %{HTTP_USER_AGENT} !FeedBurner
RewriteRule ^veda_commentaires\.xml$ http://feeds.feedburner.com/emunovaVedaCommentaires [R=301,L]
```

Pas difficile et tellement pratique ;-)
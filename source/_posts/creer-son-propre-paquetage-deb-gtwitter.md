title: "Créer son propre paquet .deb : gTwitter"
id: 673
date: 2007-06-21 20:20:58
tags:
- deb
- linux
- logiciels libres
- package
- ubuntu
categories:
- WebDev
---

![gTwitter 1.0 logo](/images/2007/06/gtwitter.gif)

Lorsqu'on utilise un système d'exploitation Linux à base de paquetages (_packages_), il est préférable d'utiliser ce système d'installation pour rajouter de nouvelles applications. Je l'avais expliqué auparavant : [j'ai choisi d'utiliser le client libre gTwitter pour _gazouiller_ sur Twitter](https://oncletom.io/2007/06/01/twitter-gtwitter/).

Et là je tombe sur le cas d'école par excellence : **la version proposée par Ubuntu est plus vieille que la dernière version en date** et le site officiel de **gTwitter ne propose que des sources à compiler**. J'ai pourtant envie de pouvoir _facilement supprimer gTwitter_, surtout s'il ne me convient plus ou qu'Ubuntu se mette à la page entre temps.

[J'ai connu l'utilitaire **checkinstall** en lisant le Planet d'Ubuntu-fr](http://blog.bmaron.net/index.php?post/2007/05/07/Installer-proprement-vos-compilations-avec-checkinstall). Son utilisation est très simple bien qu'entièrement en ligne de commande. Votre taux de geek-attitude va grimper à coup sûr !

<!--more-->

## Installation de checkinstall

Sous Ubuntu, checkinstall s'installe via le gestionnaire de paquets Synaptics ou bien par la commande suivante (autant prendre le coup de main vu qu'on en aura besoin) :

```bash
sudo aptitude install checkinstall
```

[Des RPM, DEB ainsi que le code source sont disponibles sur le site officiel de checkinstall](http://asic-linux.com.mx/~izto/checkinstall/).

## Préparation du package

Cette étape est identique à celle d'une compilation classique. Après avoir récupéré le [code source de gTwitter sur son site officiel](http://code.google.com/p/gtwitter/), elle se résume dans notre cas à deux commandes :

```bash
./configure
make
```

Par rapport à un système de base, je sais que j'ai dû installer une librairie pour satisfaire une dépendance mais _j'en ai oublié le nom_. En cas de problème je devrais cependant pouvoir vous indiquer laquelle il s'agit _grâce à votre message d'erreur_ ;-)

## Checkinstall à l'œuvre

Nous en arrivons au principal : la création du paquet. Si tout s'est correctement passé précédemment, fendez-vous de la commande suivante, toujours dans le même répertoire de travail :

```bash
checkinstall
```

Le plus dur sera de répondre aux questions suivantes :

* la **description du paquet** (utilisez votre prose avec efficience ou recopiez celle du site officiel)
* le **nom du mainteneur** (vous, logique non ?)
* le **nom du paquet** (<kbd>gtwitter</kbd>)
* le **numéro de version** (pré-rempli à partir des sources, <kbd>1.0beta</kbd> en l'occurence)
* le **numéro principal de version** (pré-rempli à partir des sources, <kbd>1</kbd> en l'occurence)
* la **licence de publication** (pré-rempli à partir des sources, <kbd>GPL</kbd> en l'occurence)
* le **groupe du paquet** (pré-rempli à partir des sources, <kbd>checkinstall</kbd> en l'occurence)
* l'**architecture du binaire** (pré-rempli à partir de votre machine, <kbd>i386</kbd> en l'occurence)
* l'**origine des sources** (pré-rempli à partir des sources, <kbd>gtwitter-1.0beta</kbd> en l'occurence)
* l'**adresse des sources alternatives** (vide dans le cas présent)
* le n**om des dépendences** (vide dans le cas présent mais si j'avais été consciencieux, j'aurais au moins écrit <kbd>mono</kbd> et <kbd>cairo</kbd>)

Un coup de toucher <kbd>Entrée</kbd> plus loin, **le paquet est créé dans le même répertoire que les sources**. **gtwitter_1.0beta-1_i386.deb** trône fièrement devant vous.

![Installer gTwitter à partir d’un binaire checkinstall](/images/2007/06/checkinstall-deb-install.png)

Bravo, vous êtes maintenant à la pointe du progrès ;-)

[Télécharger **gTwitter 1.0 beta** .deb pour Debian / Ubuntu](/images/2007/06/gtwitter_10beta-1_i386.deb "gTwitter 1.0 beta Debian / Ubuntu installer")
title: "Linux et les RAW"
id: 513
date: 2007-03-18 13:00:38
tags:
- linux
- logiciels libres
- Photographie
- raw
- the gimp
- ubuntu
- ufraw
categories:
- Personal Views
---

Si [on compare les fichiers JPG et les RAW](http://www.photo.net/learn/raw/), ce dernier est intéressant car il n'altère pas la photo en fonction de vos réglages : il les stocke et les mets à côté de l'image originale, pure et parfaite.

Mais sous les 3 lettres **RAW** se cachent une multitude de [formats, presque tous fermés](http://formats-ouverts.org/blog/2005/11/04/600-les-formats-photo-raw). <cite>un fabricant, un appareil, un format Raw et un logiciel dédié</cite>. Autant dire de suite que sous Linux ce n'est pas faisable vu que de toutes façons, les logiciels dédiés sont inexistants.

<!--more-->

Grâce au travail de gentilles personnes, _il est tout de même possible de lire ses photos RAW_ (peu importe le fabriquant) grâce à [Ufraw](http://ufraw.sourceforge.net/) (jeu de mot combinant [UFO](http://fr.wikipedia.org/wiki/Objet_volant_non_identifi%C3%A9) et [RAW](http://fr.wikipedia.org/wiki/RAW)).

Pour installer la version indépendante (sous Ubuntu / Debian) :

```bash
sudo aptitude install ufraw
```

Et pour les retravailler directement sous **Gimp** :

```bash
sudo aptitude install gimp-ufraw
```
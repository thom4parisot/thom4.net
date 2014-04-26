title: "Récupérer une partition et des données perdues"
id: 566
date: 2007-04-19 13:00:28
tags:
- linux
- partitions
- photorec
- testdisc
- windows
categories:
- WebDev
---

![Logo TestDisk](/images/2007/04/testdisklogo-clear-100.gif)

[Cette semaine j'ai installé un PC sous Windows Vista édition familiale basique](https://oncletom.io/2007/04/15/hasta-la-vista/). Dire que la récupération des données fut un couac est un doux euphémisme. Non seulement Windows Vista ne m'a pas monté automatiquement le petit disque dur IDE de 10Go mais en plus _il a carrément fichu en l'air sa table de partitions_.

Résultat : **impossible de relancer l'ancien PC et impossible de lire les données sous Vista sans formater** (ingénieux non ?). Avant de me glisser la corde au cou, j'ai fait appel au duo d'applications à toujours avoir sur soi : [TestDisc](http://www.cgsecurity.org/wiki/TestDisk) et [PhotoRec](http://www.cgsecurity.org/wiki/PhotoRec).
<!--more-->
Dans mon cas je n'ai eu à utiliser "que" **TestDisc** mais j'aborderai également son compagnon _PhotoRec_ car il vous sera d'une très grande utilité si vous ne parvenez pas à vos fins avec _TestDisc_.
**Ces deux logiciels sont libres, gratuits et utilisables sur de nombreuses plate-formes** : MS-DOS, Windows, Linux, OS2, MacOS X etc.

## TestDisc

_TestDisc_ est un utilitaire de récupération de partitions perdues ou effacées. Accessoirement il permet d'en recréer et de les rendre amorçable. Concrètement c'est ce qui m'a sauvé la vie : sans table de partition, l'ordinateur ne sait pas où sont les données ni quel système d'exploitation lancer. _TestDisc_ sert à recréer cette fameuse table, à redonner un sens aux données écrites sur le disque et donc d'y accéder depuis n'importe quel système compatible.

Dans la pratique, le programme vous demande sur quel disque travailler, détecte intelligemment les partitions qui lui semblent évidentes, vous permet de les modifier et enfin d'enregistrer les modifications. **Un redémarrage plus loin et Windows m'a non seulement reconnu le disque mais également son contenu**.

## PhotoRec

_Il arrive parfois que même en recréant la table de partitions, il soit impossible d'accéder aux données_. Disque endommagé, système corrompu ou d'autres pannes sont susceptibles d'enterrer à jamais de précieuses informations sur les disques métalliques du disque dur. _PhotoRec_ n'en a cure car son boulot c'est de _reconstituer des fichiers perdus / effacés / corrompus_ (aucune mention inutile). Votre seul boulot sera ensuite de trier le résultat.

En effet, il parcourt physiquement le disque et écrit les fichiers dans le répertoire de votre choix sans se soucier de l'arborescence initiale. C'est toujours mieux que de faire une croix sur ses photos coquines archivées sur 5 ans. Mais que votre partition ait été en FAT16/32, NTFS, ext2, ext3 ou reiserfs, vos données pourront quand même être récupérées (dans la limite des miracles possibles).

Un seul mot à dire : **merci.**
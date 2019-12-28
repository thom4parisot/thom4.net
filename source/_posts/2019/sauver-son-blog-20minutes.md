---
title: Sauver son blog 20 Minutes avant leur fermeture
lang: fr-FR
categories:
  - WordPress
tags:
  - wordpress
  - 20minutes
  - blog
  - données
cover: /images/2019/12/20minutes-fermeture.png
date: 2019-12-27 20:00:00
---

[La plate-forme de blogs du média 20 Minutes](https://www.20minutes.fr/blog) met
la clé sous la porte le 31 décembre 2019.
Une personne m'a contacté pour me demander de l'aide.
Voici ce que j'ai fait pour sauvegarder l'intégralité de son blog.

<!--more-->

# Créer un blog sur WordPress.com

Le parti pris par la personne qui m'a demandé de l'aide a été de créer un blog
sur la [plate-forme WordPress.com](https://wordpress.com) —
ça marche aussi pour un blog WordPress auto-hébergé.

Ça fonctionnerait aussi avec toute plate-forme ou logiciel de blog qui est
**capable d'importer une [archive Movable Type](https://www.movabletype.org)** —
une archive qui décrit les billets, pages et commentaires d'un blog, rangé d'une certaine manière.

Deux bémols à avoir en tête :

- vous perdez le référencement de votre blog 20 Minutes — demandez aux personnes qui faisaient des liens vers votre site de pointer vers sa nouvelle adresse ;
- les images ne sont pas importées — mais je partage une astuce [en fin d'article](#contacter-le-support-wordpress-pour-la-suite) pour palier au problème.

# Créer un export Movable Type

Sur l'[interface d'administration des blogs 20 Minutes](https://admin.20minutes-blogs.fr/),
la section [Tableau de bord › Outils](https://admin.20minutes-blogs.fr/tools/)
fait référence à un **export Movable Type**.
Demandez à créer cet export.

Le lien de téléchargement « Télécharger mon export » apparaît lorsque l'export
est prêt.

![Lien de téléchargement de l'export 20 Minutes pour Movable Type](/images/2019/12/20minutes-export-mt.png)

Le fichier téléchargé s'appelle `export<une date>-<un nombre>.txt`.

# Accéder à la section Import de WordPress

[L'interface d'administration de WordPress.com](https://wordpress.com/home)
présente les imports principaux dans la section [Outils › Importer](https://wordpress.com/import).
Il faudra cependant cliquer sur le lien « Choisir la liste complète ».

![Liste minimale des imports WordPress](/images/2019/12/20minutes-wordpress-import.png)

Dans la liste complète, c'est l'import nommé « Movable Type and TypePad »
qui nous intéresse.

![Liste complète des imports WordPress](/images/2019/12/20minutes-wordpress-import-liste.png)


# Lancer l'opération d'import

Une fois l'écran d'import Movable Type atteint, cliquez sur le bouton <kbd>Parcourir</kbd>.
Indiquez-lui l'archive `export<une date>-<un nombre>.txt` précédemment téléchargée.

![Écran d'import Movable Type pour WordPress](/images/2019/12/20minutes-wordpress-import-mt.png)

L'étape suivante se produit une fois l'archive téléchargée — ça peut prendre quelques minutes
en fonction de la taille de l'archive, et de la qualité de votre connexion Internet.

Votre archive pèse davantage que 15 mégaoctets ? Et bien en fait ça fonctionne
quand même — en tous cas avec 20Mo, ça a fonctionné.

**L'opération d'import dure plusieurs plusieurs minutes** —
comptez 10 minutes pour 800 posts et 3000 commentaires.

Vous recevez un email lorsque c'est terminé.

# Contacter le support WordPress pour la suite

Si les catégories, tags, posts et commentaires sont bien remontés, ce n'est pas le cas des images.
Les images s'affichent mais référencent la plate-forme 20 Minutes.

Mon conseil est de télécharger l'**export HTML** sur l'interface de gestion des blogs 20 Minutes,
de l'envoyer sur un outil de partage temporaire de fichiers
(type [Firefox Send](https://send.firefox.com/) ou [WeTransfer](https://wetransfer.com/))
et de contacter le support WordPress en leur indiquant votre blog, et le lien temporaire de l'export HTML.

Ils devraient être en mesure de remplacer chaque image de votre blog.

# Conclusion

Un service ou plate-forme qui ne propose pas d'export dans un format couramment
accepté est une impasse à laquelle il ne faut pas confier ses données, même si le service est gratuit.
Sinon, il faut accepter que ces données seront perdues dans un futur plus ou moins lointain.

Le [collectif CHATONS](https://chatons.org/fr/) encourage la création
d'ilôts d'hébergement et de services, un peu comme des services de proximité
mais pour des services numériques. Certains ne survivront pas, mais j'ai
confiance dans leur capacité à proposer des solutions plus courageuses que 20 Minutes en cas de fermeture.

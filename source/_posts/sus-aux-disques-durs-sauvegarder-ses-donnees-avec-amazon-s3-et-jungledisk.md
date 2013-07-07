title: "Sus aux disques durs : sauvegarder ses données avec Amazon S3 et JungleDisk"
id: 870
date: 2008-05-27 07:00:34
tags:
- amazon s3
- backup
- cloud computing
- jungledisk
- jungledisk plus
- sauvegarde
- ubuntu
- webservices
categories:
- Développement Web
---

![Logo Amazon Webservices](/images/2008/05/amazon-webservices-logo.gif "Logo Amazon Webservices")

[Amazon](http://www.amazon.fr) fait partie à mes yeux des sociétés les plus innovantes du Web. Elle a su inventer un modèle de suggestion d'achats et une catégorisation hors-pair. Elle est également allée plus loin en proposant des services Web à des prix ridicules et faciles d'accès.

[Amazon S3](http://aws.amazon.com/s3) (_Amazon Simple Storage Service_) est un de ses services Web. S3 permet de stocker en ligne des données ... sans limitation de volume. Le service se base sur un principe de facturation à la consommation : plus vous stockez, plus vous payez.

Seulement voilà, **sauvegarder 10Go de données pour 2$ par mois**, ça vaut le coup d'accéder à la tranquillité.

<!--more-->

## Pourquoi sauvegarder en ligne plutôt que sur un disque dur externe ?

Je me suis posé cette question lorsque je me suis lassé de sauvegarder mes données sur 1, puis sur 2, puis enfin sur 3 DVD réinscriptibles : **disque dur ou solution en ligne** ?

Je trouvais les solutions en ligne comme [Mozy](http://mozy.com/) très chères et inadaptées. Inadaptées car visant la clientèle Windows et éventuellement MacOS X. Or je cherchais une solution fonctionnant aussi sous mon système d'exploitation principal, à savoir Linux.

J'avoue que **je fais peu confiance aux disques durs externes USB** : je les trouve fragile et si c'est pour durer 3 ans, ça ne m'intéresse pas.
Les disques durs réseaux ? Super mais rares et là encore, peu sécurisés. Il fallait compter 400€ pour avoir du RAID et éviter un tant soi peu les problèmes ... et encore.

Bref j'allais me résigner à l'achat jusqu'à ce <span style="text-decoration: line-through;">que le [Gastero Prod](http://www.gasteroprod.com/blog/)</span> qu'un [Électron Libre](http://www.unelectronlibre.info/) lâche le mot sur une liste de diffusion interne à [Clever Age](http://www.clever-age.com/) : <q>j'utilise Amazon S3 pour mes backups</q>.

## Amazon S3

La première chose qui m'a frappé sur Amazon S3 ce sont les prix :

*   0,15$ le Go stocké
*   0,10$ par Go sauvegardé
*   0,17$ par Go téléchargé, au maximum (dégressif jusqu'à 0,10$ au delà de 150To, autant dire beaucoup)

J'ai fait mon calcul pour 20Go à sauvegarder et j'ai vite compris que j'y gagnais :

*   **sécurité des données** (je suis parano à ce niveau)
*   prix d'achat d'un éventuel disque dur complètement dilué dans le temps
*   données accessibles à tout instant, peu importe où je suis relié au Web
*   possibilité de **greffer dessus toute sorte d'application**, jusqu'à mon blog par le biais d'[Amazon S3 for Wordpress](http://tantannoodles.com/toolkit/wordpress-s3/)

[![Facture Amazon S3](/images/2008/05/amazon-s3-billing-300x146.png "Facture Amazon S3")](/images/2008/05/amazon-s3-billing.png)

Sans remord grâce à l'eurodollar, le choix était fait.
À noter qu'**Amazon propose de stocker ses données aux États-Unis ou en Europe**. J'ai choisis les États-Unis par radinerie et parce que je n'avais pas de contrainte légale à ce que mes données siègent sur le Vieux Continent. C'est une question que peuvent en revanche se poser plusieurs entreprises fortement encadrées à ce niveau.

## JungleDisk

Comme Amazon S3 n'est qu'un conteneur, il me fallait également trouver une solution adaptée à la sauvegarde. Qui a encore envie de lancer manuellement ses sauvegardes ? Pas moi en tous cas.

[JungleDisk](http://www.jungledisk.com/) est un client de sauvegarde payant (20$ en une fois, utilisable à vie - 30 jours d'essai) pour Amazon S3 compatible Linux, MacOS X et Windows. Je l'utilise aussi bien sous [Ubuntu](http://www.ubuntu-fr.org) que [Debian Testing](http://www.debian.org) pour information, dans un cadre personnel et professionnel.

[![Options de JungleDisk](/images/2008/05/jungledisk-options-300x252.png "Options de JungleDisk")](/images/2008/05/jungledisk-options.png)

JungleDisk se configure comme on l'aime, **simplement**. Si on pouvait reprocher à la version 1 une interface austère, peu conviviale et limitative, on ne peut en revanche qu'apprécier la version 2 (en beta à l'heure où j'écris ces lignes). Celle-ci propose notamment ces fonctionnalités :

*   interface visuelle sympa et bien repensée
*   utilisation de plusieurs comptes Amazon S3 simultanés (donc boulot et perso en même temps)
*   **meilleure gestion du nombre de fichiers** (pour économiser des appels inutiles, facturés par Amazon)
*   **sélection des données à sauvegarder facilitée** (voir la capture ci-contre)
*   conservation de plusieurs versions d'un même fichier/fichier supprimé (utile sur des données très sensibles)
*   davantage d'options d'automatisation et surtout, l'excellente <q>que faire si l'heure de sauvegarde a été manquée ?</q> (_dès que possible_ ou _attendre la prochaine itération_)

[![Navigateur Jungle Disk](/images/2008/05/jungledisk-browser-300x232.png "Navigateur Jungle Disk")](/images/2008/05/jungledisk-browser.png)

JungleDisk propose également un service supplémentaire payant (_JungleDisk Plus_) que j'affectionne pour ces 3 éléments :

*   **reprise du transfert des données**
*   accès à une interface Web de visualisation des données sauvegardées
*   meilleure gestion des gros volumes de données

Je sauvegarde 3 choses en ligne : mes sites Web, mes documents personnels et surtout, mes photos. Avec 8 années d'archives numériques, je n'ai pas du tout envie de les perdre.

J'ai paramétré une sauvegarde quotidienne et depuis cette version 2 et son option de reprise de sauvegarde, tous les jours où je connecte mon ordinateur au Web mes données sont sauvegardées.

## Conclusion

À l'heure actuelle **je doute du bien fondé de sauvegarder sur Amazon S3 ses DivX** ou des volumes de données mettant à mal votre bande-passante. Pour une entreprise, ça peut être en revanche une **solution de sécurité à moindre coût** surtout en cas d'architecture décentralisée.
Avec l'arrivée de la fibre optique pourquoi pas.

Ça fait maintenant 3 mois pleins que j'utilise cette combinaison et a priori, je ne vois pas ce qui me fera changer. Je n'ai pas à subir la contrainte d'un disque externe pénible à transporter, potentiellement destructible ou oublié dans un fond de canapé.

**Parce qu'un bon backup est un backup qui se fait tout seul**, bien et sans y penser.

Pour aller un peu plus loin dans l'affaire, je serais une entreprise avec de besoins mesurés et une volonté de sécurité, je jetterais un œil aux autres services complémentaires :

*   [Amazon SimpleDB](http://aws.amazon.com/simpledb) : requêtage SQL en temps réel et très utile pour des sites à forte charge (pas une raison pour pas optimiser)
*   [Amazon Elastic Compute Cloud](http://aws.amazon.com/ec2) : créations de serveurs sur mesure adaptables à tout instant (que ça soit en terme de CPU et de RAM)
*   [Amazon MTurk](http://www.amazon.com/gp/browse.html?node=15879911) : service d'**intelligence artificielle distribuée**

Ce dernier service est à proprement parler le plus innovant puisqu'il permet de traiter des processus logiques qu'on lui apprend avec des données qu'on lui transmet.
Des exemples ? Dédoublonnage de catalogues, mise en relation de données par principes de sémantique, analyses d'images (avec détection d'humains par exemple).

Un dernier exemple parlant, une représentation graphique de la proximité des couleurs. Ça me fait rêver :

[![Proximité de couleurs](/images/2008/05/amazon-mturk-proximite-couleurs.png "Proximité de couleurs")](/images/2008/05/amazon-mturk-proximite-couleurs.png)

**Remarque** : depuis mars 2011, j'ai basculé vers le service [CrashPlan](http://www.crashplan.com/) en version illimitée. L'offre coûte un prix fixe, pour des données en croissance pour un prix au minimum 2 fois moins élevé que sur Amazon S3.
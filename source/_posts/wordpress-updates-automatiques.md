title: "WordPress, mises à jour automatiques et FTP : la solution"
id: 17698
date: 2010-11-22 17:33:14
tags:
- astuce
- code
- configuration
- logiciels libres
- upgrade
- WordPress
categories:
- WordPress
---

Lorsque j'étais hébergé chez [OVH](http://www.ovh.com/), avant de basculer vers [AlwaysData](http://alwaysdata.com/) pour gagner en vitesse d'affichage, la mise à jour de mes extensions se faisait le plus simplement du monde depuis l'interface d'administration.

Seulement voilà, lors de toute tentative de mise à jour, que ce soit du blog, d'une extension ou d'un thème, un écran de configuration de paramètres FTP apparaît. Comme nous sommes des feignants, on ne voudra en aucun cas ouvrir un serveur FTP, qui n'aurait d'ailleurs pour d'autre intérêt que de faciliter les intrusions dans votre système.

<!--more-->

### Où trouver l'information ?

En cherchant un peu, je suis tombé sur l'ensemble des [directives de configuration de WordPress](http://codex.wordpress.org/Editing_wp-config.php), dont les [constantes liées au système de fichier](http://codex.wordpress.org/Editing_wp-config.php#WordPress_Upgrade_Constants).
Cette section précise ce qu'il faut savoir, même si c'est suffisamment technique pour perdre toute personne ne comprenant rien au code (et on ne leur en voudra pas).

Le problème vient du fait que si l'**utilisateur propriétaire** du système de fichier n'est pas le même utilisateur du serveur HTTP, WordPress bascule automatiquement en mise à jour via FTP.

L'astuce consiste à forcer WordPress en mode _direct_ (système de fichier) et à donner les droits d'écriture au **groupe propriétaire** correspondant à celui du serveur HTTP (_www-data_ pour Apache et Nginx sous Debian et Ubuntu).

### Configuration de wp-config.php

Forcer le mode direct est très simple. Il suffit d'éditer le fichier _wp-config.php_, celui-là même qui contient les identifiants de connexion à la base de données et autres joyeusetés. Et d'y rajouter cette ligne, avant la première directive par exemple :

```php
define('FS_METHOD', 'direct');
```

Enregistrez, et c'est plié.

### Réglage des permissions

Côté permissions, ça peut également se régler en 2 coups de terminal. Partons du principe que le **groupe propriétaire** de votre serveur HTTP est _www-data_, à la base de votre installation WordPress, il suffit de faire ceci :

```bash
chgrp -R www-data wp-content/upgrade wp-content/themes wp-content/plugins wp-content/uploads
chmod g+wx wp-content/upgrade wp-content/themes wp-content/plugins wp-content/uploads
```

Cette manipulation attribue _www-data_ comme propriétaire des répertoires que vous souhaitez rendre accessibles en écriture et ce, de manière récursive. Dans un second temps, elle attribute les droits d'écriture et d'exécution au groupe propriétaire (peu importe le nom du groupe).
Si vous êtes perdu(e) avec la commande [`chmod`, un peu de lecture pour apprendre à le manipuler](http://www.siteduzero.com/tutoriel-3-36115-les-chmod.html) (ça sauve la vie).

### Conclusion

A ce stade des choses, tout est fonctionnel : tentez d'installer une nouvelle extension, ça passera comme une lettre à la poste.
Si vous rencontrez des difficultés, c'est très certainement parce que les permissions des fichiers qui tentent d'être modifiées ne sont pas suffisantes pour le groupe propriétaire du serveur HTTP. Ajustez la procédure des permissions par rapport à votre besoin.

C'est pas sorcier, il suffisait de le savoir  :-)
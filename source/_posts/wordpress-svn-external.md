title: "Wordpress en tant que dépendance SVN"
id: 1237
date: 2008-12-23 07:00:59
tags:
- bonne pratique
- code
- codex
- htaccess
- i18n
- logiciels libres
- optimisation
- php
- plugins
- svn
- wordpress mu
categories:
- WordPress
---

Mettre à jour Wordpress était pénible jusqu'à l'arrivée de la version 2.7\. On bénéficie désormais de la mise à jour automatique : un clic, ça télécharge et ça déploie.

![](https://oncletom.io/images/2008/05/wordpress-logo.png "Logo Wordpress")

Il existe cependant une **méthode alternative reposant sur Subversion** (SVN). C'est la méthode idéale pour tout développeur Wordpress ou gestionnaire de blogs. C'est celle que j'emploie depuis la version 2.6 grâce notamment à la constante WP_CONTENT.

Explications et application concrète.

<!--more-->

Avant toute chose, sachez que **ce tutorial est optimisé pour les personnes qui versionnent entièrement leur projet**. Il n'est pas question ici d'avoir une arborescence libre et de procéder à des _checkout_ un peu partout. C'est possible mais pas du plus grand intérêt.

L'avantage évident ici est de pouvoir déployer son blog n'importe où en un rien de temps.

### Structure des fichiers

Installer Wordpress en tant que dépendance SVN revient à mélanger 2 techniques :

*   [Installer Wordpress dans son propre répertoire
](http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory)
*   [Installer Wordpress proprement depuis SVN](http://codex.wordpress.org/Installing_WordPress_With_Clean_Subversion_Repositories)
Je suis pénible donc je n'ai pas spécialement envie de modifier un fichier _core_ ou autre chose que _wp-config.php_. Tout le contraire de ce qu'indique la première méthode.

La seconde explication m'a toutefois posé légèrement problème puisqu'un peu brutale et posant soucis chez OVH.

[caption id="attachment_1254" align="aligncenter" width="329" caption="Arborescence fichier avec Wordpress SVN"]![Arborescence fichier avec Wordpress SVN](https://oncletom.io/images/2008/12/wordpress-svn-basic-filetree.png "Arborescence fichier avec Wordpress SVN")[/caption]

Celles et ceux qui voient la capture d'écran ci-dessus peuvent constater que _tout Wordpress_ a été déplacé dans un sous-répertoire _wordpress_ au même niveau que wp-content.
On ne garde à la racine que le fichier _.htaccess_ et _wp-config.php_.

Sur le répertoire racine, j'ai appliqué ces propriétés pour Wordpress 2.7 :

*   <kbd>svn:ignore</kbd> :<kbd>
</kbd>

    wp-config.php`</pre>
*   <kbd>svn:externals</kbd> :<kbd>
    </kbd>
    <pre>`wordpress http://svn.automattic.com/wordpress/branches/2.7`</pre>
    Je ne versionne volontairement pas le fichier wp-config.php car c'est le seul fichier susceptible de changer d'une instance à une autre. Je le récupère depuis wordpress/wp-config-sample.php et je le personnalise selon mes besoins.
    Et puis versionner des mots de passe ... qui y tient ?

    ### Configuration

    Après cette restructuration, on aura toutefois besoin de configurer 2-3 bricoles. Vraiment rien de méchant promis.

    #### Le .htaccess

    Voici ma configuration. Elle peut être aisément déportée dans votre déclaration de _Virtual Host_ pour des raisons de performance. Sur un serveur mutualisé vous n'avez en général pas accès à ce dernier type de configuration.
    <pre>`<IfModule mod_rewrite.c>
    Options -Multiviews -Indexes +FollowSymlinks
    RewriteEngine On
    RewriteBase /

    # Moving to dependency
    RewriteRule ^(index.php|wp-[a-z0-9-]+\.php|xmlrpc.php)?$ wordpress/$1 [L]
    RewriteRule ^(wp-admin|wp-includes)/(.*)$ wordpress/$1/$2 [QSA,L]

    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . wordpress/index.php [L]
    </IfModule>

    # BEGIN WordPress
    # END WordPress`</pre>
    Ce fichier est très inspiré de la [configuration SVN proposée sur le Codex Wordpress](http://codex.wordpress.org/Installing_WordPress_With_Clean_Subversion_Repositories). Seulement voilà, cette renvoie tout sur _index.php_ ... et omet ainsi tous les accès aux fichiers situés à la racine, avec entre autre :

*   wp-cron.php
*   wp-link-opml.php
*   wp-trackback.php
*   xmlrpc.php
    Je vous fais grâce des contrôleurs de flux (Atom, RSS &amp; cie) et des appels en directs à _index.php_ effectués par certains plugins.

    Donc non on ne peut pas vraiment se passer de ces fichiers. D'où ces 2 règles :

*   <pre>`RewriteRule ^(index.php|wp-[a-z0-9-]+\.php|xmlrpc.php)?$ wordpress/$1 [L]
    `</pre>
    On capte tous les fichiers PHP (les contrôleurs) originellement situés à la racine de Wordpress.
*   <pre>`RewriteRule ^(wp-admin|wp-includes)/(.*)$ wordpress/$1/$2 [QSA,L]`</pre>
    Et là c'est pour le confort de conserver les adresses initiales ... mais aussi pour éviter de modifier un bout de paramétrage dans l'admin. Le jour où vous décidez de rebasculer à l'ancien système, ça se fera sans douleur :-)
    Enfin, pourquoi avoir poussé les commentaires Wordpress vers le bas ? Tout simplement pour **éviter que nos règles personnalisées soient écrasées par Wordpress** lors d'une mise à jour des permaliens. Nos règles primeront toujours ainsi.

    #### Le fichier wp-config.php

    Dans le fichier _wp-config.php_, nous n'allons rien modifier. Nous allons juste ajouter forcer 2 paramètres. Ils indiqueront à Wordpress où se trouve le véritable répertoire _wp-content_ (renommable mais je ne jouerai pas avec).

    [caption id="attachment_1262" align="aligncenter" width="600" caption="wp-config.php modifié pour Wordpress SVN"]![wp-config.php modifié pour Wordpress SVN](https://oncletom.io/images/2008/12/wordpress-svn-wpconfig.png "wp-config.php modifié pour Wordpress SVN")[/caption]

    #### Le blog

    Bon j'ai menti un peu toute à l'heure en indiquant qu'on ne toucherait qu'à _wp-config.php_. Cependant la modification est on ne peut plus mineure et ne concerne que l'upload de medias.

    En effet si on ne touche pas à l'emplacement des fichiers envoyés, Wordpress considère qu'ils sont uploadés dans wordpress/wp-content/uploads. C'est fort gênant mais heureusement, en préfixant le chemin par ../ ou en tapant un chemin absolu tout rentrera dans l'ordre.

    [caption id="attachment_1261" align="aligncenter" width="600" caption="Correction de chemin pour Wordpress SVN"]![Correction de chemin pour Wordpress SVN](https://oncletom.io/images/2008/12/wordpress-svn-file-uploads-fix.png "Correction de chemin pour Wordpress SVN")[/caption]

    À noter qu'il s'agit du **seul paramétrage hors d'un fichier**. Si j'avais pu m'en passer je l'aurais fait.

    ### Dépendance SVN pour la traduction

    C'est en tombant sur un autre [article traitant de svn:externals pour Wordpress](http://sunfox.org/blog/2007/05/28/installation-svn-de-wordpress-et-de-ses-plugins/) que j'ai été interpelé sur la prise en charge des langues via SVN également.
    Le système n'est pas parfait puisqu'on ne peut gérer qu'une seule langue par ce biais là. Ça ne conviendra donc pas aux blogs multilingues.

    [caption id="attachment_1260" align="aligncenter" width="550" caption="Dépendance SVN pour les traductions Wordpress"]![Dépendance SVN pour les traductions Wordpress](https://oncletom.io/images/2008/12/wordpress-i18n-svn-external.png "Dépendance SVN pour les traductions Wordpress")[/caption]

    La technique consiste à transformer `wp-content/languages` en <kbd>svn:externals</kbd>.
    Ça donnerait ceci pour la version française de Wordpress 2.7, au niveau du <kbd>svn:externals</kbd> du répertoire `wp-content` :
    <pre>`languages http://svn.automattic.com/wordpress-i18n/fr_FR/branches/2.7/messages/`</pre>
    **Simple et efficace** mais ça reste encore de la bricole.

    ### Cas particulier : plugins et i18n

    Je vous expose le problème mais malheureusement vous ne pourrez pas y faire grand chose. Par contre ami développeurs, pour rendre votre code de plugin 100% portable, merci de prendre note ;-)

    Le chargement des traductions s'effectue à l'aide de la fonction load_plugin_textdomain(). Elle prenait seulement 2 paramètres jusqu'à l'arrivée de Wordpress 2.6\. Ça n'a pas été crié sur les toits mais elle prend désormais 3 ... et c'est du 3ème argument qu'il faut utiliser désormais :

1.  `$domain` : l'espace de nom des traduction (inchangé)
2.  `$abs_rel_path` : chemin relatif par rapport à l'emplacement de Wordpress (déprécié, on y mettait `PLUGINDIR.'/'.dirname(plugin_basename(__FILE__))` en général)
3.  `$plugin_rel_path` :  chemin relatif par rapport à l'emplacement des plugins (c'est qui nous intéresse ; `dirname(plugin_basename(__FILE__))` nous suffira désormais)
    Vous trouverez un [exemple sur le Codex, du côté de l'internationalisation des plugins](http://codex.wordpress.org/Writing_a_Plugin#Internationalizing_Your_Plugin).
    Un exemple de code pérenne :
    <pre>`load_plugin_textdomain('votreplugin', dirname(plugin_basename(__FILE__)), dirname(plugin_basename(__FILE__)));

Et si jamais vous utilisez votre plugin en lien symbolique ça ne fonctionnera pas ... mais on s'éloigne du sujet ;-)

### Et pour Wordpress Mu ?

Je ne m'attarderai pas dessus mais les manipulations sont sensiblement les mêmes. Je n'ai pas encore eu l'occasion d'essayer mais j'ose imaginer qu'il n'y a pas tant de différences que ça :-)

### Conclusion

Le jour où vous souhaitez migrer vers une autre version majeure de Wordpress, c'est simple :** il suffit de changer les externals vers le tag adéquat**.

Pourquoi ne pas utiliser le _trunk_ directement me demanderez-vous ? Le trunk de Wordpress est plutôt instable puisque c'est là que se construit la prochaine version de manière systématique. L'utilisation des **branches permet de bénéficier des correctifs** sans avoir à modifier le moindre external.
Si vous avez un grand besoin de stabilité, alors utilisez les _tags_ qui sont en principe figés.

On remarquera aussi que malgré son âge, **Wordpress commence à peine à proposer des solutions d'industrialisation**.
Les liens symboliques sont en effet très mal gérés. Tentez d'utiliser un seul répertoire source pour plusieurs blogs avec des liens symboliques et tout s'effondre.

La preuve en est aussi avec le **manque de ressources disponibles sur le Web** et traitant ce sujet. Ça m'étonnerait d'être le premier à vouloir déployer du Wordpress via SVN.
Les choses s'améliorent mais pour le côté <cite>code is poetry</cite>, on en est encore loin.
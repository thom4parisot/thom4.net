title: "Configurer Apache pour de multiples dépôts Subversion"
id: 635
date: 2007-05-24 20:40:41
tags:
- apache
- configuration
- httpd
- Subversion
- svn
- trac
categories:
- Développement Web
---

J'ai commencé à faire joujou avec [Subversion](http://subversion.tigris.org/) dans le but de versionner mes développements et y adjoindre l'excellent [Trac](http://trac.edgewall.org/) pour gérer les projets, les incidents et la documentation. Seulement voilà, je pars dans une optique où chaque  projet dispose de son _propre dépôt Subversion_ pour me faciliter la vie dans les fusions et autres manipulations amenant à croiser de nombreux fichiers.

S'il me paraissait logique de créer chaque dépôt manuellement dans _Subversion_, ça l'était en revanche beaucoup moins pour le serveur Web [Apache](http://httpd.apache.org/). Je souhaite en effet disposer d'un accès <acronym title="HyperText Transfert Protocol">HTTP</acronym>, pour tester les différents protocoles <abbr title="SubVersioN">SVN</abbr> entre autre. Flemme oblige, je n'avais vraiment pas envie de configurer également des alias et configurations de répertoires pour chaque dépôt.

Une fois de plus, **la flemme a vaincu**.
<!--more-->
Après avoir lu des billets intéressants sur l'[installation de Subversion sur Ubuntu](http://www.prendreuncafe.com/blog/post/2006/09/05/489-installer-et-configurer-apache2-trac-et-subversion-sur-ubuntu) ainsi que l'[installation de Subversion sur Ubuntu ou Debian](http://www.beroot.org/Configurations/installation-subversion-trac-debian-ubuntu), je devais me rendre à l'évidence : pour chaque dépôt créé, il faut également modifier (à la main) le fichier de configuration d'Apache.

### Directive DirectoryMatch

J'ai tenté de contourner le problème en utilisant la [directive DirectoryMatch d'Apache](http://httpd.apache.org/docs/2.0/mod/core.html#directorymatch) mais impossible de récupérer le résultat du masque.
Si vous comptiez faire ceci, oubliez de suite, ce n'est pas possible :

    <directorymatch "/chemin/vers/racine/svn/([a-z0-9-]*)>
     DAV svn
     SVNPath /chemin/vers/racine/svn/$1
     ...
    </directorymatch>

    `</pre>
    En effet, `DIrectoryMatch` ne fait que vérifier l'existence d'un chemin par rapport à un masque ; il n'en récupère pas le contenu pour une exploitation ultérieure. C'est bien dommage.

    ### Solution : SVNParentPath

    Heureusement tout a été prévu (mais rarement mentionné). Au lieu d'utiliser `SVNPath` pour renseigner le chemin _d'un seul dépôt_, il vaut mieux utiliser `SVNParentPath` qui, lui, spécifie la racine des dépôts Subversion. En gros, tous les répertoires enfants à `SVNParentPath` sont considérés comme étant des dépôts (référentiels) indépendants.

    Exactement ce qu'il me fallait.

    Au final, après avoir cherché à [configurer Subversion pour Windows](http://svn.nuxeo.org/trac/pub/wiki/TracOnWindows), voici ce que j'ai rajouté dans ma config Apache :
    <pre>`<Location /svn>
      DAV svn
      # any /svn/foo URL will map to a repository D:/svn/foo
      SVNParentPath D:/svn

      #AuthType Basic
      #AuthName "Subversion repository"
      #AuthUserFile d:/svn/.<span class="searchword0">htaccess</span>
      #Require valid-user
    </Location>

_Je ferai très probablement d'autres billets sur Subversion_. Depuis le temps que je voulais m'y mettre, apprendre ses rouages et sa rigueur ne sont pas forcément faciles.
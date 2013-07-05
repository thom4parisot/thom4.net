title: "Modifier l'emplacement des données d'un serveur MySQL"
id: 908
date: 2008-05-04 11:25:57
tags: 
- apparmor
- datadir
- debian
- linux
- logiciels libres
- MySQL
- mysql5
- optimisation
- ubuntu
categories: 
- Développement Web
---

![Logo MySQL](https://oncletom.io/images/2007/08/powered-by-mysql-167x86.png)

L'installation par défaut d'un serveur MySQL est suffisante pour être opérationnel dans la minute qui suit. Elle ne facilite en revanche pas la maintenance en laissant le répertoire contenant vos bases de données et tables hors de portée.

L'intérêt de choisir soi-même l'emplacement de ce répertoire, le _datadir_, est double :

*   **regrouper les données en un endroit connu** (facilite les sauvegardes)
*   utiliser le partitionnement du disque pour **ne pas avoir à craindre une perte de données** en cas de réinstallation du système (facilite la maintenance)
Nous allons voir comment procéder à ce changement tout en adaptant les sécurités des systèmes tels que [SELinux](http://fedoraproject.org/wiki/SELinux) et [AppArmor](http://www.novell.com/linux/security/apparmor/). Ces derniers empêcheront en effet le serveur de démarrer.

<!--more-->

**Remarque importante** : j'ai publié une [version améliorée du déplacement des données d'un serveur MySQL](https://oncletom.io/2008/12/11/configuration-apache-mysql-php-symlinks/). Je la recommande par rapport à cet article : elle implique moins de manipulations et est plus propre.

### Quelques généralités avant de commencer

Quitte à changer l'emplacement du _datadir_, autant le déplacer sur une partition qui ne sera pas effacé lors de la réinstallation de votre système d'exploitation, que ça soit du Linux, MacOS ou Windows.

Personnellement, sous Ubuntu/Debian, je crée un répertoire dans /home qui s'appelle mysql. Mon répertoire /home est bien entendu monté sur une partition différente. Si ce n'est pas le cas chez vous, pensez à [déplacer votre /home](http://doc.ubuntu-fr.org/installation/deplacer_home).

    sudo mkdir /home/mysql
    sudo chown mysql:mysql /home/mysql`</pre>
    Enfin, dernier détail à connaître : l'emplacement de vos données MySQL :

*   sous Linux, généralement : `/var/lib/mysql`
*   sous Windows, avec WAMP : `C:Program FilesWampmysqldata`

    ### Méthode 1 : modifier la configuration MySQL

    C'est probablement la **méthode la plus simple** mais elle a l'inconvénient d'avoir à modifier un fichier de configuration. Il faut donc modifier la propriété _datadir_ de votre [fichier de configuration MySQL](http://dev.mysql.com/doc/refman/5.1/en/option-files.html) :

*   sous Linux, généralement : `/etc/mysql/my.cnf`
*   sous Windows, avec WAMP : `C:Program FilesWampmysqlconfmy.ini`
    Dans ce fichier se trouve une section consacrée à la configuration générale du serveur mysql (_mysqld_ pour _mysql daemon_) :
    <pre>`[mysqld]
    user            = mysql
    port            = 3306
    basedir         = /usr
    **datadir**         = **/var/lib/mysql**
    tmpdir          = /tmp`</pre>
    J'ai mis en gras la ligne qui nous intéresse, à savoir le _datadir_.
    Quelle valeur mettre ? Celle de l'emplacement souhaité pour vos données. Dans mon cas ça aurait été /home/mysql :
    <pre>`**datadir**         = **/home/mysql**`</pre>
    Vous vous assurerez d'avoir bien stoppé le service MySQL, d'avoir copié/collé vos données de l'ancien emplacement vers le nouveau et enfin de redémarrer MySQL. C'est seulement en cas de réussite que vous pourrez supprimer l'ancien répertoire ;-)
    <pre>`sudo -s
    /etc/init.d/mysql stop
    cp -pr /var/lib/mysql/* /home/mysql
    /etc/init.d/mysql start`</pre>

    ### Méthode 2 : utilisation d'un lien symbolique

    La [documentation de MySQL explique l'utilisation des liens symboliques](http://dev.mysql.com/doc/refman/5.1/en/symbolic-links.html) pour tout, une base de données précises voire même les tables. Ceci dit nous allons voir l'exemple global : on déplace tout.

    Concrètement cette méthode consiste à :

1.  stopper le service MySQL
2.  déplacer le répertoire de données (au cas où)
3.  créer le lien symbolique
4.  copier les données dans le nouvel emplacement
5.  relancer le service MySQL
    Concrètement, ça se traduit comme ceci :
    <pre>`sudo -s
    mv /var/lib/mysql /var/lib/mysql-old
    ln -s /home/mysql /var/lib/mysql
    cp -pr /var/lib/mysql-old/* /home/mysql
    /etc/init.d/mysqld start`</pre>
    Là encore, supprimez la copie de vos données (répertoire mysql-old) seulement en cas de succès. Ça facilite les retours en arrière en cas de pépin.

    ### Cas particulier : systèmes employant AppArmor ou SELinux

    Il y a cependant un hic possible si vous utilisez une distribution Fedora ou Ubuntu, surtout depuis sa version [Hardy Heron (8.04)](http://doc.ubuntu-fr.org/hardy). Celle-ci intègre une sécurité pour éviter à certains services critiques d'être altérés par une manipulation extérieure ... comme la notre.

    Il faut savoir que les 2 méthodes du haut échoueront si vous rentrez dans ce cas de figure : le **service MySQL ne démarre pas**.
    Pas de panique, il y a juste un fichier à modifier : `/etc/apparmor.d/usr.sbin.mysqld`. Il y a un passage ressemblant à ceci, _dans le cas d'AppArmor et Ubuntu_ :
    <pre>`/etc/mysql/*.pem r,
    /etc/mysql/conf.d/ r,
    /etc/mysql/conf.d/* r,
    /etc/mysql/my.cnf r,
    /usr/sbin/mysqld mr,
    /usr/share/mysql/** r,
    **/var/lib/mysql/** r,
    **/var/lib/mysql/**** rwk,
    /var/log/mysql/ r,
    /var/log/mysql/* rw,
    /var/run/mysqld/mysqld.pid w,
    /var/run/mysqld/mysqld.sock w,`</pre>
    Vous voyez le loup venir. Il suffit de remplacer les occurences de /var/lib/mysql par le chemin de votre nouvel emplacement, /home/mysql dans notre cas :
    <pre>`**/home/mysql/** r,
    **/home/mysql/**** rwk,`</pre>
    La raison de cette modification est presque simple : AppArmor ne suit pas les liens symboliques. **Il considère que /var/lib/mysql est différent de /home/mysql** et que ce dernier ne concerne pas le service mysqld.
    **Notre modification évite ce blocage** et permet du même coup au serveur MySQL de démarrer ; les échecs étant dus au fait que le serveur ne trouvait pas de base à charger (dont la sienne, _mysql_).

    Pour terminer, on peut relancer les 2 services, apparmor et mysqld :
    <pre>`sudo /etc/init.d/apparmor restart
    sudo /etc/init.d/mysqld restart

### Conclusion

Nous avons vu 2 méthodes pour rendre sa **gestion des bases de données plus souple et plus sure**. En cas de défaillance système - ça arrive même aux meilleurs - il faut pouvoir le réinstaller sans craindre de perdre des données vitales. Et les bases de données le sont.

On peut aussi constater que les **nouveaux services de protection peuvent compliquer la vie** si on ne les sait pas actifs et si on ne comprend pas leur fonctionnement. J'ai passé plusieurs heures à comprendre pourquoi le serveur MySQL ne se relançait pas alors qu'il me semblait avoir effectué la même manipulation sur les précédentes versions d'Ubuntu.

N'hésitez pas à partager votre méthode ou apporter vos suggestions sur votre gestion des _datadir_.

[amazon-carrousel]d0a06165-3ed7-478a-9bf3-0ce760581b8a[/amazon-carrousel]
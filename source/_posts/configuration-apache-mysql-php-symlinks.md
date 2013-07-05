title: "Configuration d'Apache, MySQL et PHP à base de liens symboliques"
id: 1198
date: 2008-12-11 07:00:50
tags:
- apache
- apparmor
- bonne pratique
- debian
- linux
- logiciels libres
- MySQL
- php
- symlink
- ubuntu
categories:
- Développement Web
---

J'ai récemment passé mon poste de développement de Debian Testing vers Ubuntu 8.10\. Comme toute installation _from scratch_, il faut passer par la case configuration.

![](https://oncletom.io/images/2008/12/php-custom.png "Configuration PHP personnalisée")

J'ai déjà expliqué comment [modifier l'emplacement des données d'un serveur MySQL](https://oncletom.io/2008/05/04/modifier-emplacement-donnees-serveur-mysql/) mais cette fois-ci on va aller encore plus loin :

*   on ne va pas toucher aux fichiers de configuration par défaut
*   on va pouvoir conserver toute notre configuration sur une partition séparée
*   on va être tranquille pour les éventuelles futures réinstallations
C'est pas très compliqué à mettre en œuvre et au final, tout le monde y gagne !

<!--more-->

## Organisation du répertoire /home

Le titre de l'article le suggère bien, cet article se consacre à la configuration des serveurs et programmes suivants :

*   Apache 2
*   PHP 5
*   MySQL 5
*   AppArmor (installé et activé par défaut depuis Ubuntu 8.04)

Pour des raisons évidentes de facilité, j'ai donc créé un répertoire qui rassemble toutes mes configurations spécifiques. En voici son arborescence :

*   **~/config**
  *   /_apache2_
    *   sites-available
      *   000-default-custom
      *   local.monprojet.com
      *   etc.
  *   /_apparmor_
    *   usr.sbin.mysqld-custom
  *   /_mysql_
    *   my-custom.cnf
  *   /_php5_
    *   php-custom.ini

Nous écrirons dans ces fichiers uniquement les points de configuration que l'on souhaite adapter. C'est plus simple à maintenir. Qui plus est, si les fichiers de configuration sont mis à jour par leur serveur respectif, nos fichiers resteront à l'abri.

Un des _moto_ de Debian c'est la **configuration à base de fichiers**. Vous trouverez régulièrement des répertoires ayant un nom suivant le motif _application.d_. Donc plutôt que d'avoir 1 seul fichier de configuration, on a 1 fichier initial plus des configurations additionnelles dans ces fameux répertoires ".d".

## Configuration d'Apache

![](https://oncletom.io/images/2008/12/apache-logo.gif "Logo Apache")

Pour Apache la démarche est la suivante :

1.  créer les _Virtual Host_ dans son répertoire personnel
2.  lier les fichiers dans _sites-available_
3.  activer les sites à l'aide de la commande _a2ensite_
4.  recharger Apache

La seule étape par rapport à d'habitude c'est qu'on ne crée par les _Virtual Host_ directement dans /etc/apache2/sites-available et qu'on les lie depuis notre répertoire personnel.
Admettons que je souhaite créer un _Virtual Host_ pour une instance locale de mon blog. Je vais procéder ainsi :

```bash
gedit ~/conf/apache2/sites-available/local.case.oncle-tom.net
```

J'y ai placé une configuration somme toute minimaliste :

```
<VirtualHost *:80>
ServerName local.case.oncle-tom.net
DocumentRoot /home/oncletom/workspace/case.oncle-tom.net
ErrorLog /var/log/apache2/error.case.oncle-tom.net.log
LogLevel warn
CustomLog /var/log/apache2/access.case.oncle-tom.net.log combined
ServerSignature On
</VirtualHost>
```

```bash
sudo ln -s ~/conf/apache2/sites-available/local.case.oncle-tom.net /etc/apache2/sites-available/local.case.oncle-tom.net
sudo a2ensite local.case.oncle-tom.net
sudo service apache2 reload
```

On se fendra de l'ajout d'un hôte local dans le fichiers _hosts_ pour coller au plus près à l'instance de production. Toutefois je ne connais pas d'autre moyen que de modifier le fichier d'origine :-/ Si vous avez une solution je suis preneur.

## Configuration de MySQL

![](https://oncletom.io/images/2007/08/powered-by-mysql-167x86.png "Logo MySQL")

Pour MySQL c'est un peu plus compliqué car on va également en profiter pour déplacer l'emplacement par défaut des données. Pourquoi ? Pour les placer sur une partition qui ne craindra pas les formattages et les réinstallation système.
Si vous aviez déjà suivi ma [procédure de déplacement des données MySQL](https://oncletom.io/2008/05/04/modifier-emplacement-donnees-serveur-mysql/) : oubliez là. Celle-ci est largement plus aboutie.

Avant de se jeter à corps perdu dans les manipulations, voici la démarche entreprise :

1.  créer le fichier de configuration MySQL
2.  créer le répertoire qui accueillera les données MySQL
3.  lier la base _mysql_ d'origine
4.  modifier la configuration d'AppArmor
5.  recharger la configuration des serveurs AppArmor et MySQL

C'est déjà un peu plus long mais là encore, il n'y a pas grand chose à faire en fin de compte :

```bash
gedit ~/conf/mysql/my-custom.cnf
```

On y indique le nouvel emplacement de ses données MySQL :

```
[mysqld]
  datadir            = /home/oncletom/Apps/mysql
```

```bash
mkdir /home/oncletom/Apps/mysql
chown mysql:mysql /home/oncletom/Apps/mysql
ln -s /var/lib/mysql/mysql /home/oncletom/Apps/mysql/mysql
sudo gedit /etc/apparmor.d/usr.bin.mysql
```

J'y ai remplacé

```
/var/lib/mysql/ r,
/var/lib/mysql/** rwk,
```

par l'ancien chemin + le nouvel emplacement des données MySQL

```
/var/lib/mysql/ r,
/var/lib/mysql/** rwk,
/home/oncletom/Apps/mysql/ r,
/home/oncletom/Apps/mysql/** rwk,
```

```bash
sudo service apparmor reload && sudo service mysql reload
```

Si vous avez bien suivi toutes mes explications, vous vous demanderez pourquoi j'ai modifié le profil existant de MySQL dans AppArmor au lieu de lier un nouveau profil ?
Je me suis rendu compte qu'au démarrage de l'OS, **AppArmor ne chargeait pas le profil personnalisé** et bloquait le démarrage de MySQL. J'ai créé un [sujet sur Ubuntu Forums](http://ubuntuforums.org/showthread.php?t=977830) après une lecture de la [documentation AppArmor](https://help.ubuntu.com/community/AppArmor) mais pas de nouvelles. Là aussi je suis preneur car en relançant les serveurs à la main, tout fonctionne.

Ensuite à vous de repeupler vos bases de données à partir d'un dump. Si vous procédez à un déplacement des répertoires, n'oubliez pas de tout préserver : propriétaire et permissions ! Ça se passe avec l'option _-a_ de _cp_ par exemple.

## Configuration de PHP

![](https://oncletom.io/images/2008/12/php.gif "Logo PHP")

Fort heureusement pour PHP c'est plus simple puisqu'il n'y a qu'un seul petit lien symbolique à faire.
À noter que la configuration modifiée sera répercutée sur toutes les configurations de PHP, que ça soit pour Apache, en CLI ou CGI.

```bash
gedit ~/conf/php/my-custom.ini
```

J'ai ai mis par exemple :
```ini
memory_limit = 64M
```

```bash
sudo ln -s ~/conf/php/my-custom.ini /etc/php5/conf.d/my-custom.ini
```

Et voilà c'est tout pour PHP. Il faut bien entendu recharger votre serveur Web (Apache ou Lighttpd par exemple) pour qu'ils prennent en compte la modification.

## Conclusion

J'ai déjà appliqué cette méthode par 2 fois et que dire si ce n'est que tout va plus vite ainsi !
Vos fichiers de configuration restent accessibles depuis votre gestionnaire de fichiers (pas besoin de passer en _sudo_ pour sauvegarder les changements). Ils sont préservés de toute réinstallation impromptue.

**Vous ne touchez que de manière minimaliste aux fichiers de configuration d'origine** :

*   /etc/hosts pour ajouter un nom d'hôte (utile seulement si vous ne souhaitez pas utiliser _localhost_)
*   /etc/apparmor.d/usr.bin.mysql pour la raison évoquée plus haut ... sinon on s'en serait passé
J'ai cherché à faire pareil avec _phpmyadmin_ mais il ne semble pas y avoir de mécanisme de ce type. Dommage.

J'imagine qu'il doit y avoir des moyens similaires avec d'autres serveurs et d'autres langages. Vous procédez à un reparamétrage systématique ou bien vous utilisez une technique de ce genre ?
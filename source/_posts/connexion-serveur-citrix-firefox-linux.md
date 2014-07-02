title: "Connexion à un serveur Citrix depuis Firefox sous Linux"
id: 1172
date: 2008-10-28 07:00:54
tags:
- citrix
- deb
- debian
- firefox
- ica
- logiciels libres
- metaframe
- plugin
- rpm
- vpn
- xenapp
categories:
- WebDev
---

Pour les besoins du boulot et non plus pour le plaisir, j'ai eu pour impératif de me connecter à un Intranet client via un [VPN Citrix](http://fr.wikipedia.org/wiki/Citrix_Presentation_Server). Je ne sais pas pour vous, mais quand j'entends VPN, je commence à avoir des sueurs froides en me disant que la galère ne fait que commencer.

Et bien pour une fois, je peux dire que je n'ai presque pas ramé. Vous allez voir, c'est **simple et rapide**.
<!--more-->

## Citrix Presentation Server en 2 minutes

![](/images/2008/10/citrix-loading.png "Chargement du serveur de présentation Citrix")

Citrix Presentation Server c'est une manière d'offrir une connexion à des applications à distance indépendamment de la machine que l'on utilise. En clair, que l'on soit sous Linux, MacOS X ou Windows, on est censé pouvoir accéder à des applications d'une infrastructure distante.

Tout se fait via son navigateur Web préféré (Iceweasel sous Debian, Firefox sous Ubuntu dans mon cas). Seulement voilà, quand je souhaitais lancer l'application Putty pour profiter d'une jolie connexion SSH, _que nenni_ !
À la place, j'avais le droit de télécharger un fichier _launch.ica_ qui, j'avoue, ne m'évoquais pas grand chose.

![Si on en est là, c&#39;est que ça ne va pas](/images/2008/10/citrix-ica.png "Téléchargement d")

## Installer le plugin ICA pour Linux

**Mise à jour** : [un paquet RPM de Citrix Receiver est disponible pour Linux](http://www.citrix.com/downloads/citrix-receiver/linux.html) (merci au commentateur anonyme pour l'information). [`Alien` convertira le RPM en DEB pour Debian/Ubuntu](https://help.ubuntu.com/community/RPM/AlienHowto) ; je laisse le reste de l'article pour la postérité.

[Une recherche Google plus tard](http://www.agaveblue.org/howtos/Citrix_ICA_How-To.shtml  "Citrix ICA Client How-To for Linux"), je découvre donc sans surprise qu'il me faut installer un client Citrix. J'ai un peu peur en imaginant qu'il ne fonctionne que sur des systèmes d'exploitation arriérés.

Et pourtant, quand on sait ce qu'il faut installer c'est tellement plus simple :

1.  [Téléchargez le client ICA pour Linux](http://www.citrix.com/English/ss/downloads/details.asp?downloadId=3323&amp;productId=186&amp;c1=sot2755)

    1.  En prenant la version _.tar.gz_ puis en lançant <kbd>./setupwfc</kbd>
    2.  En convertissant le .rpm par un petit <kbd>sudo alien -i ICAClient-10.6-1.i386.rpm</kbd>
    3.  En [utilisant le .deb](http://dl.free.fr/nnJyoE8KW "ICAClient-10.6-1.i386.deb") que j'ai créé avec _alien_

2.  Liez le plugin ICA à votre navigateur Web

    *   Sous Ubuntu : <kbd>ln –s /usr/lib/ICAClient/npica.so /usr/lib/mozilla/plugins/npica.so</kbd>
    *   Sous Debian : <kbd>ln –s /usr/lib/ICAClient/npica.so /usr/lib/iceweasel/plugins/npica.so</kbd>

3.  Fermez et relancer Firefox/Iceweasel si nécessaire
4.  Dans les modules complémentaires, vérifiez que le plugin apparaît bien (ou bien dans <kbd>about:plugins</kbd>)

![Plugin Citrix vu depuis le gestionnaire de modules Firefox](/images/2008/10/citrix-plugin.png "Plugin Citrix vu depuis le gestionnaire de modules Firefox")

## Conclusion

Bref ça marche bien même sous Firefox 3 et j'en suis content. Le chargement des applications est relativement rapide. Ça fait presque bizarre de voir une application Windows bien se lancer !

C'est également la première fois que je peux me connecter à un VPN distant sans sérieux problèmes. J'ai déjà eu droit aux VPN Cisco à _passphrase_ aléatoire généré par un badge ... même le support technique n'a pas pu m'aider : j'étais le premier à les appeler en étant sous Linux !

![Chargement de l&#39;application Windows à distance](/images/2008/10/citrix-loading-2.png "Chargement de Citrix MetaFrame")

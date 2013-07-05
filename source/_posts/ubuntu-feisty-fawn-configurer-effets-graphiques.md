title: "Ubuntu 7.04 : configurer les effets graphiques"
id: 568
date: 2007-04-20 13:46:39
tags:
- beryl
- bureau 3d
- compiz
- linux
- logiciels libres
- ubuntu
categories:
- Développement Web
---

![Ubuntu Feisty Fawn : effets de bureau](https://oncletom.io/images/2007/04/ubuntu-desktop-effects.png)

[Ubuntu 7.04](http://www.ubuntu-fr.org/) (dite "Feisty Fawn", le _faon téméraire_) est sortie hier. Je l'attendais avec impatience pour bénéficier des effets graphiques et le bureau en 3D sans avoir à casser mon système. C'est désormais chose faite malgré quelques problèmes (portables ACER quand tu nous tiens ;-)).

Seulement voilà, les préférences sont un peu chiches : _on active ou on n'active pas_.
Voyons ensemble comment améliorer tout ça en n'installant qu'un tout petit programme, `gnome-compiz-preferences`.
<!--more-->

## Installation

C'est petit, c'est léger et ça se tape rapidement : <kbd>sudo aptitude install gnome-compiz-manager</kbd>.

En utilisant le gestionnaire de paquets Synaptic (_Système > Administration > Gestionnaire de paquets Synaptic_), il se trouve à la lettre **g** (logique ...) de la catégorie _Environnement de bureau GNOME (universe)_). Si vous n'avez pas cette catégorie, il faut [activer les dépôts _universe_](http://doc.ubuntu-fr.org/applications/apt/depots#avec_un_outil_graphique_sous_ubuntu).

![Ubuntu : gnome-compiz-preferences](https://oncletom.io/images/2007/04/ubuntu-gnome-compiz-preferences.png)

## Configuration

Les amateurs de la ligne de commande auront déjà flairé la manipulation, il suffit de taper <kbd>gnome-compiz-preferences</kbd>.

Ce même menu se retrouve dans le menu _Système > Préférences > Bureau 3D_. Même s'il n'est pas des plus complets, c'est en tous cas bien mieux que les deux pauvres options de base ;-)

## J'ai perdu mes bordures de fenêtres !

Il se peut qu'activer le bureau 3D rende vos bordures de fenêtres invisibles. Il faudra modifier le fichier de configuration du serveur vidéo _X11_. Rien de méchant ;-)
Tapez <kbd>sudo gedit /etc/X11/xorg.conf</kbd>. Placez-vous au niveau de _Section "Device"_ et rajoutez la ligne <kbd>Option "AddARGBGLXVisuals" "True"</kbd>

Chez moi ça donne ça (carte nVidia GeForce 7300 sur portable ACER) :

    Section "Device"
        Identifier     "NVIDIA Corporation NVIDIA Default Card"
        Driver         "nvidia"
        **Option         "AddARGBGLXVisuals" "True"**
    EndSection

**Edition du 2 mai 2007** : il faut installer le paquet `gnome-compiz-manager` et non `gnome-compiz-preference` comme indiqué par erreur. Le contenu du billet a été corrigé en fonction ;-)
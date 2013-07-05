title: "Internet Explorer sous Linux"
id: 538
date: 2007-04-01 13:00:58
tags:
- ie4linux
- internet explorer
- linux
- logiciels libres
- ubuntu
- wine
categories:
- Développement Web
---

![IE4Linux : Internet Explorer pour Linux](https://oncletom.io/images/2007/04/ie4linux.png)

J'avais lu il y a un moment que l'on pouvait utiliser [Internet Explorer sous Linux](http://www.tatanka.com.br/ies4linux/). Ce que je ne savais pas c'était la facilité avec laquelle on l'installe. Couplé avec [WINE](http://fr.wikipedia.org/wiki/WINE), retrouvez les "joies" d'Internet Explorer 5, 5.5 et/ou Internet Explorer 6 en toute liberté.

<!--more-->

Toutes les explications ci-dessous sont valides pour [Ubuntu](http://www.ubuntu-fr.org/) et [Debian](http://www.debian.org/). C'est globalement similaire sur les autres distributions basées sur une gestion de paquets (OpenSUSE, Fedora Core, Mandriva etc.). Dans tous les cas, il y a le [guide général d'installation IE4Linux](http://www.tatanka.com.br/ies4linux/page/Installation) sur le site officiel.

### Pré-requis d'installation

#### Installer WINE

Si ce n'est pas déjà le cas, il faut installer _WINE_ et un complément, _cabextract_. Ce dernier permet d'installer des programmes dans WINE à partir d'exécutables _Windows_. Très très difficile, il suffit de taper cette commande :

```bash
sudo aptitude install wine cabextract
```

#### Télécharger IE4Linux

Là encore on reste dans la simplicité absolue puisqu'on se contentera de récupérer la [dernière version d'IE4Linux](http://www.tatanka.com.br/ies4linux/downloads/ies4linux-latest.tar.gz). Pour les amateurs de la ligne de commande, ça se passe en faisant :

```bash
wget http://www.tatanka.com.br/ies4linux/downloads/ies4linux-latest.tar.gz
```

### Installation d'IE4Linux

Arrivé à ce stade de l'installation, le plus dur est déjà fait ! Reste à décompresser le fichier téléchargé (un p'tit _clic droit_ et _extraire ici_ ou bien `tar xzf ies4linux-latest.tar.gz`). Rendez-vous dans le dossier nouvellement créé par la décompression, double-cliquez sur **ie4linux** et choisissez _lancer dans un terminal_.
Répondez aux questions et le tour sera joué.

### Conclusion

**IE4Linux** est une belle réussite car on peut avoir sous la main et sans effort 3 versions majeures du navigateur de Microsoft mais surtout, les bugs qui vont avec ! Car il faut bien le reconnaître, c'est uniquement pour ça que je l'installe : car le navigateur actuel le plus utilisé dans le monde est le plus bogué et le moins fiable. Changez-moi ce paradoxe : **utilisez un véritable navigateur Web**.

![Firefox et IE4Linux](https://oncletom.io/images/2007/04/firefox-ie4linux.gif)
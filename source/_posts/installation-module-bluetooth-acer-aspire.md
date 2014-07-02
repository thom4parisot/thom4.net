title: "Installation du module Bluetooth sur un portable Acer"
id: 801
date: 2007-11-07 13:00:51
tags:
- 9410
- acer
- acer-acpi
- aspire
- bluetooth
- logiciels libres
- modprobe
- ubuntu
- windows
categories:
- WebDev
---

J'ai décidé en 2006 d'**abandonner la bonne vieille et traditionnelle tour de PC** fixe pour le monde nomade de l'**ordinateur portable**. C'est ainsi qu'en juillet 2006 j'ai opté pour un _Acer Aspire 9412_, notamment pour sa carte nVidia avec RAM dédiée, son écran 17 pouces et un pavé numérique.
La cerise sur le gâteau c'était le Bluetooth car j'envisageais déjà en avance de me trouver une oreillette pour communiquer via Skype ou <acronym title="Session Initiation Protocol">SIP</acronym>.

J'ai donc acheté une oreillette cette année, une [Logitech Mobile Freedom](http://www.logitech.com/index.cfm/webcam_communications/mobile_phone_headsets/devices/260&amp;cl=fr,fr). C'est à ce moment là que j'ai réalisé l'absence totale de module Bluetooth sur l'ordinateur. [Comme beaucoup, le bouton d'activation Bluetooth était là mais derrière, sous la coque, aucune trace d'antenne ou de module capable de gérer le Wi-Fi](http://www.google.com/search?q=acer+aspire+bluetooth+missing).

Pour celles et ceux qui veulent néanmoins bénéficier du Bluetooth sans changer d'ordinateur, je partage avec vous la galère dans laquelle j'ai été embarqué.

**Remarque** : méthode mise à jour pour les versions récentes d'Ubuntu ... c'est encore plus facile ;-)

<!--more-->

![Logo Bluetooth](/images/2007/11/bluetooth-logo.gif)

## Rechercher et installation du module Bluetooth Acer

J'ai cherché pendant un bon moment un site ou même une enchère faisant état d'un module Bluetooth pour Acer. J'ai finalement réussi à dénicher le nom du composant et à remonter vers un revendeur agréé Acer ... au Canada, [Notebook Solutions](http://www.notebooksolutions.ca). Voici quelques liens utiles :

*   [module Bluetooth pour Acer Aspire 1410 à Aspire 5670](http://www.notebooksolutions.ca/zc/index.php?main_page=product_info&amp;products_id=882)
*   [module Bluetooth pour Acer Aspire 3620](http://www.notebooksolutions.ca/zc/index.php?main_page=product_info&amp;cPath=66_231&amp;products_id=2058)
*   [module Bluetooth pour Acer Aspire 7000 à Aspire 9420](http://www.notebooksolutions.ca/zc/index.php?main_page=product_info&amp;products_id=2542)

Attention cependant, s'il ne s'agit pas d'un _upgrade kit_, la pièce ne comprend pas le câble qui permet de relier le module à la carte mère ;-) Pensez à vérifier ce détail. Vu le prix du port, ça serait dommage de les payer deux fois.

Après achat, pensez également à **demander la notice technique correspondant à votre modèle d'ordinateur portable Acer**. Parce qu'armé de vos petits tournevis cruciformes, cette notice vous sera forte utile pour démonter le portable. Le logement de la puce Bluetooth se situe **sur la carte mère**, **sous le clavier**, **côté batterie**. Il faut donc démonter écran LCD, clavier, coque et ainsi dévisser pas moins d'une _trentaine de vis_.
Ce n'est pas une partie de plaisir surtout qu'en cas de problème, c'est pour notre pomme. J'ai cependant réussi du premier coup sans avoir jamais dépecé ce portable auparavant. **Tout réside dans l'organisation des vis enlevées et le respect des consignes de démontage**. _Vraiment_.

Après avoir remonté le portable, buvez un coup mais au-dessus du PC ... ça serait dommage de le griller après tant d'efforts ;-)

## L'installation sous Windows

Si comme moi vous avez supprimé la partition de secours Acer et réinstallé proprement Windows en prenant soin de ne pas remettre les applications Acer ... vous vous ferez une frayeur en apprenant que le Bluetooth ne sera pas plus reconnu qu'avant. J'ai échangé plusieurs emails avec le service technique de _Notebook Solutions_ qui ne voyait en dernier recours qu'une réinstallation de Windows depuis la partition de secours Acer. Autant dire que ça m'était impossible.

En revanche ça m'a mis la puce à l'oreille et j'ai installé **Acer Empowering Framework** et **Acer Power Management**. Ce dernier permet de gérer l'activation électrique de certains composants ... dont le Bluetooth ! Et une fois activé, la loupiote bleue s'active et Windows reconnaît instantaménent le fruit de votre dur labeur. Sauvé.

Le reste se gère assez intuitivement ;-) bravo vous avez réussi.

## L'installation sous Linux

Sauf si vous avez un penchant libre et que vous cherchez également à activer le module Bluetooth Acer sur votre distribution Linux préférée. Grand bien vous en fasse puisque moyennant peu de manipulations c'est tout à fait réalisable.
Avec Ubuntu je n'avais pas besoin de driver spécifique pour mon ordinateur Acer (certains oui car ils sont obligé d'activer le Wi-Fi via un bouton en façade), mon Wi-Fi étant pris en charge par une puce Intel, supportée nativement par la distribution moyennant un pilote propriétaire (`ipw3945`). Je n'avais pas le choix, l'installation d'`acer-acpi` s'imposait en rajoutant une couche logicielle interfacée directement avec le matériel.

Toutefois, ce support s'est grandement amélioré avec le temps.
Si jamais ces solutions ne s'avèrent plus à jour, merci de me le signaler par commentaire et de jeter un œil à la [documentation francophone Ubuntu sur le _kernel module_ Acer](http://doc.ubuntu-fr.org/acer_acpi).

### Ubuntu, depuis Intrepid Ibex (8.10)

La distribution inclut le paquet _acer-wmi_ donc il n'y a pas besoin d'installer quoi que ce soit.

Pour que le Bluetooth soit activé, il faut remplacer 0 par 1 dans le fichier `/sys/devices/platform/acer-wmi/bluetooth`.

Pour automatiser ça à chaque démarrage, il faut que votre fichier `/etc/rc.local` ressemble à ceci :

```bash
sudo echo 1 > /sys/devices/platform/acer-wmi/bluetooth
```

### Ubuntu, Hardy Heron (7.10)

La distribution inclut le paquet _acer_acpi_ donc il n'y a pas besoin d'installation.

Pour que le Bluetooth soit activé, il faut remplacer 0 par 1 dans le fichier : `/sys/devices/platform/acer_acpi/bluetooth`.

Pour automatiser ça à chaque démarrage, il faut que votre fichier `/etc/rc.local` ressemble à ceci :

```bash
sudo echo 1 > /sys/devices/platform/acer_acpi/bluetooth
```

### Ubuntu, méthode obsolète

Par chance il existe un [dépôt acer-acpi pour Ubuntu](http://code.google.com/p/acer-acpi-deb/) complétant ainsi le [projet originel acer-acpi](http://code.google.com/p/aceracpi/). Suivez les instructions pour ajouter le dépôt, procédez à l'installation (via un `sudo aptitude install acer-acpi`) et revenez à vous ... enfin à moi en modifiant un fichier :

```bash
sudo nano /etc/modprobe.d/acer_acpi
```

Vous pouvez noter la présence de deux mots importants dans la seule ligne visible,
**wireless** et **bluetooth**. Le bluetooth était désactivé chez moi donc le simple
fait de passer la directive de 0 à 1 et un redémarrage plus loin, la lumière bleue fût :

```
options acer_acpi wireless=1 bluetooth=1
```

## Le mot de la fin

**Je regrette qu'Acer ait si mal communiqué vis à vis des fonctionnalités Bluetooth de ses machines** à la vue du nombre de plaintes visibles dans les moteurs de recherche. Un coup de fil et un email à Acer n'ont rien donné de positif. Encore moins un tuyau ou une information pour se procurer le module manquant.

J'espère au moins avoir permis d'aiguiller certains esprits fougueux. Ca aura fonctionné au moins pour moi ;-)

**Remarque** : suite à des demandes répétées, voici un lien direct vers la [documentation et les plans Acer](http://dl.free.fr/bLCS31qZW/doc-acer.zip). Ça vous permettra de lire la procédure de démontage et de mieux appréhender la difficulté de l'opération.
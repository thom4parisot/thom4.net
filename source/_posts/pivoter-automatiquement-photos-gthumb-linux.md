title: "Pivoter automatiquement des photos avec gThumb"
id: 663
date: 2007-06-09 13:00:36
tags:
- astuce
- gthumb
- linux
- logiciel libre
- logiciels libres
- Photographie
categories:
- Développement Web
---

Je prends souvent mes photos à la verticale pour valoriser le sujet. Si le choix est plus ou moins discutable, la photo numérique, elle, est toujours enregistrée dans le même sens. Les photos verticales sont donc inclinées à 90 degrés.

Il existe **deux solutions pour la rotation de vos images** :

1.  **activer la rotation automatique de l'appareil photo** (si celui-ci la propose). Personnellement je n'aime pas cette option à cause des bordures noires ajoutées à la photo ;
2.  **effectuer soi-même la rotation de la photo** pour qu'elle se présente telle qu'on l'a prise.
L'inconvénient de cette dernière méthode est qu'il faut **appliquer une rotation à chaque image, dans le bon sens**. Une opération qui devient _rapidement fastidieuse_.
Depuis sa version 2.16 (il me semble), le logiciel de visualisation d'images [gThumb](http://gthumb.sourceforge.net) sous Linux propose deux outils sympathiques de rotation automatique d'images. Un énorme gain de temps.
<!--more-->

### Pré-requis

Le seul pré-requis à ces outils de feignants est que votre **appareil photo numérique enregistre l'orientation de la prise de vue**. Je pense que tous les appareils doivent le faire car déjà en 2000 c'était le cas. Si ce n'est pas le cas, vous avez sûrement choisi un appareil plus que bas de gamme et retournés ou pas, les clichés ne sont pas vraiment exploitables.

### Rotation automatique à l'import

![Pivoter des images avec gThumb lors de l’import d’images](https://oncletom.io/images/2007/06/gthumb-pivoter-images-import.png)

Comme l'illustre la capture d'écran ci-dessus, l'assistant d'import d'images de _gThumb_ propose une option <cite>Pivoter physiquement l'image</cite>. Lors de l'import des photos depuis le medium en question, _gThumb pivotera les images dans le bon sens_. Du coup il n'y a plus rien à faire si ce n'est regarder les photos sans avoir à pencher la tête sur le côté pour admirer les photos de mémé.

### Rotation automatique sur une sélection d'images

Pas de chance pour vous, mémé vous a refilé un CD entier d'images qui n'ont pas été pivotées. Vous souffrez d'avance rien qu'à l'idée de pivoter les images une par une mais par chance, gThumb est encore là grâce à un outil utilisable à tout moment.
Lorsque gThumb est lancé et que vous parcourez un répertoire rempli de photos à pivoter, sélectionnez-les toutes (<kbd>Control + A</kbd> pour faire vite) et activez le menu `Outils > Pivoter les images`. En cochant ensuite les cases <cite>Appliquer à toutes les images</cite> et <cite>Appliquer les transformations physiques</cite>, _gThumb_ passera au crible toutes les photos sélectionnées et les pivotera automatiquement dans le bon sens, peu importe l'orientation d'origine.

![Pivoter des images avec gThumb lors d’une sélection](https://oncletom.io/images/2007/06/gthumb-pivoter-images-selection.png)

_gThumb_ est un outil particulièrement bien conçu pour les manipulations d'images. D'ailleurs je regrette qu'il ait été délaissé dans GNOME au profit de [F-Spot](http://f-spot.org/). Ce dernier est en revanche plus agréable à utiliser pour la visualisation de photos, surtout grâce à son système de chronologie.
title: "Créer une vignette d'un PDF avec Image Magick"
id: 1374
date: 2009-06-03 07:00:24
tags:
- image
- image magick
- imagick
- logiciels libres
- pdf
- php
categories:
- Développement Web
---

Les PDF c'est chouette pour transmettre des documents non-modifiables. Mais parfois, c'est aussi pratique de pouvoir en suggérer leur contenu. C'est d'autant plus pertinent si vous en proposez à télécharger et que la couverture alléchante dispose d'un fort pouvoir de conviction.

[caption id="attachment_1376" align="aligncenter" width="281" caption="Exemple de couverture PDF"]![Exemple de couverture PDF](https://oncletom.io/images/2009/06/pdf-sample-cover.png "Exemple de couverture PDF")[/caption]

Par chance, nous n'avons pas besoin de faire le sale travail à la main. Du genre prendre une capture d'écran de la première page du PDF ou je ne sais quelle autre astuce impliquant travail et effort. **Image Magick** est là pour nous aider et à plus forte raison, **Imagick**. Il s'agit d'une librairie native à PHP se basant sur l'API d'Image Magick.

Vous me direz : oui mais Image Magick c'est fait pour manipuler des images. Certes mais _un PDF, c'est un peu comme une image_.

<!--more-->

### Convertir un PDF mono-page

Partons d'un cas simple : votre PDF ne contient qu'une page. Le code est d'une grande simplicité :

```php
<?php
$im = new Imagick('/chemin/vers/pdf-mono-page.pdf');
$im->writeImage('/chemin/vers/couverture.png');
```

2 lignes ont suffit à créer notre prévisualisation. Cette manipulation enregistre une image au format PNG sans aucune compression. Nous pourrions l'activer et régler le taux de compression avec 2 lignes supplémentaires :

```php
$im->setCompression(Imagick::COMPRESSION_LZW);
$im->setCompressionQuality(90);
```

LZW est un algorithme de compression sans perte utilisé entre autre par PNG et GIF. On aurait pu choisir du JPEG sans perte ou une autre [constante de compression d'Image Magick](http://fr.php.net/manual/en/imagick.constants.php).

### Convertir un PDF multi-pages

Que se passerait-il si notre code précédent était utilisé sur un PDF contenant plus d'une page ? Et bien seule la dernière page du document serait enregistrée. En fait, toutes les pages seraient enregistrées jusqu'à la dernière (pas terrible côté performances donc).
L'API d'Image Magick nous permet toutefois de connaître le nombre d'images impliquées et d'en définir l'index. Depuis PHP5, Imagick fournit des méthodes propres aux interfaces Iterator et Traversable.

Notre code bouge ... mais pas tant que ça. Disons que nous souhaitons prévisualiser la 6ème page du document (donc l'index 5) :

```php
$im = new Imagick('/chemin/vers/pdf-multi-pages.pdf');
$im->setIteratorIndex(5);
$im->setCompression(Imagick::COMPRESSION_LZW);
$im->setCompressionQuality(90);
$im->writeImage('/chemin/vers/couverture.png');
```

Une petite ligne de plus fait l'affaire. Pour compter le nombre d'images contenues dans le document ouvert, un appel à la méthode getNumberImages fera l'affaire.

### Convertir directement avec Image Magick : convert

Pour les amateurs du shell ou les détracteurs de PHP, on peut arriver aux mêmes résultats en 1 ligne de commande. L'outil de conversion est fourni par [convert](http://www.imagemagick.org/script/convert.php). Sa documentation et ses options sont particulièrement riches. On peut tout faire ... ou presque !

```bash
convert /chemin/vers/pdf-mono-page.pdf /chemin/vers/couverture.png
convert /chemin/vers/pdf-multi-pages.pdf[5] /chemin/vers/couverture.png
```

La seule différence réside dans les crochets suivant le nom du fichier d'entrée. Vous avez bien sûr deviné qu'il s'agit de l'index du document PDF que l'on convertit. Si on ne précise rien, **convert** convertira toutes les pages du document mais cette fois, en les exportant dans des fichiers uniques (pas de réécriture qui tienne).

### Conclusion

**Image Magick est vraiment une application sympathique**. Les possibilités de manipulation offertes surpassent à mes yeux largement celles de la librairie GD (qui est toujours mieux que rien).

Cette manipulation permettrait aussi de décomposer les multiples images composant un GIF animé ou un APNG. Ou inversement, nous pourrions créer une animation à partir de plusieurs images. Ou encore créer une vignette carrée et centrée. Les possibilités ne manquent pas.

C'était également une autre façon de _teaser_ le projet le plus chronophage qui m'ait été donné de connaître mais bon, en septembre c'est dans les bacs. Toujours pas d'idées sur le sujet couvert ? ;-)
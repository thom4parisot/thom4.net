title: "Convertir un MP3 en WAV sous Linux"
id: 226
date: 2006-10-01 16:12:09
tags:
- conversion
- linux
- mp3
- wav
categories:
- Développement Web
cover: /images/2006/10/metroid-prime-3-corruption.jpg
---


Comme je suis récemment tombé sur la bande-originale du jeu [Metroid Prime](http://www.emunova.net/veda/test/704.htm), j'ai eu envie de changer les sons d'ouverture et de fermeture de sessions sous Linux. La problématique était que je disposais de fichiers MP3 (le vilain pirate) et qu'il me fallait des WAV. La solution tient en une ligne de commande grâce au programme **mpg321**.

```bash
mpg321 -w nouveau_fichier.wav ma_musique.mp3
```

Et pour les feignasses qui veulent convertir plusieurs fichiers d'affilé, il suffit simplement d'exécuter la commande ci-après dans le répertoire de votre choix (trouvée sur le [Wiki de Loria](http://wiki.loria.fr/wiki/Conversion_de_fichiers_audio)) :

```bash
for i in *.mp3; do mpg321 -w "`basename "$i" .mp3`".wav "$i"; done
```

En cadeau, les fichiers désirés. De suite ça a plus de classe ;-)

*   [Metroid : Samus apparaît](/images/2006/10/metroid-samus.wav)
*   [Metroid : Objet obtenu](/images/2006/10/metroid-item.wav)
title: "Hasta la Vista ..."
id: 559
date: 2007-04-15 13:00:22
tags:
- windows
- windows vista
categories:
- Personnel
---

![Windows Vista Home Basic](/images/2007/04/windows-vista-home-basic.jpg)

Pour les besoins d'une association **je suis parti en quête d'un PC assemblé aux alentours de 400€**. Comme d'habitude, je cherchais le meilleur rapport qualité / prix, si possible _pas de carte vidéo intégrée_ (impact négatif sur les performances en général), du _disque dur_ et un _processeur pas trop à la ramasse_. La providence met ainsi sur mon chemin le _Compaq SR2102FR_ :

*   250Go de disque dur
*   Athlon 64 3500+
*   GeForce 6100 (64Mo VRAM)
*   chipset nForce 420 (audio, réseau intégré)

L'occasion de toucher à [Windows Vista Home Basic](http://lagranges.typepad.fr/lumiere/2007/01/vistaldition_ho.html) (j'adore les noms à rallonge) et d'affronter les cauchemars de la réalité informatique.
<!--more-->

## Premier constat : un PC sans Windows relève de l'impossible

A peu près sûr de leur réponse, j'ai quand même posé la question qui tue aux différents vendeurs (Carrefour, Boulanger, Surcouf etc.) : <cite>est-il possible d'acheter ce modèle de PC sans Windows ?</cite>. **Invariablement, ils me répondent que non**. Pourquoi poser cette question ? Tout simplement parce que toutes ces enseignes (et d'autres que je n'ai pas cité) sont coupables de [vente liée](http://fr.wikipedia.org/wiki/Vente_li%C3%A9e) : on ne peut acheter un "lot" sans un ou plusieurs produits le composant (vendus séparément). Windows devrait être en option, pas systématiquement embarqué.

C'est véritablement dommage que cette situation perdure alors que depuis quelques années ça s'active pour accuser de tous les maux les internautes à cause de la baisse des ventes de CD musicaux. Pour ça y'a de l'énergie gaspillée ...

## Deuxième constat : Windows Vista est sympathique à l'oeil

Rendons à César ce qui est à César : même sans l'interface _Aero_ (disponible à partir des versions "supérieures"), **Vista est joli et de nombreux efforts ont été apportés pour soigner toutes les illustrations et l'interface**. Si énormément d'outils ont été ajoutés pour faciliter la vie aux débutants (dont l'_accueil Windows_ avec la présentation générale du PC), je trouve cependant qu'il est difficile d'atteindre une information donnée à cause d'un cheminement profond (comprendre par là "nécessitant plus de 3 clics") et rarement croisé.

Ce sont des sensations mais étant un "habitué" de l'informatique, j'imagine que ça doit être pire pour un utilisateur lambda subissant Windows et ne comprenant pas forcément ses rouages.

![Gparted : outil de partitionnement sous Linux / Gnome](/images/2007/04/gparted.jpg)

## Troisième constat : titiller Windows Vista tu éviteras

**512Mo de RAM c'est très très light**. **On est loin de la réactivité de Windows XP**. J'aurais bien voulu faire une installation propre à partir d'un véritable DVD mais depuis quelques mois (quelques années), les originaux ne sont plus fournis. L'explosion des capacités des disques durs fait que l'on doit soi-même se créer un DVD de réinstallation (configuration usine avec tous les programmes superflus que cela entraine).
Bref aucun moyen d'avoir une installation propre pour juger ...

Muni d'un CD d'installation d'[Ubuntu](http://www.ubuntu-fr.org/), j'ai utilisé l'outil visuel permettant de _redimensionner les partitions_ j'ai nommé [Gparted](http://gparted.sourceforge.net/). Le but : diminuer la partition Windows de 230Go à 20Go, créer un / et /home de 20 et 10Go puis combler le reste avec une partition NTFS. Simple surtout depuis qu'un [driver NTFS performant est disponible sous Linux](http://linuxfr.org/~jberthon/24172.html) : [NTFS-3G](http://www.ntfs-3g.org/).

Résultat : Windows Vista ne dépasse plus la barre de chargement. Ecran noir. Une recherche sur Internet m'apprendra que je ne suis pas le seul dans ce cas et que créer une double boot Vista / Linux n'est pas de tout repos.
Ca n'aurait pas été aussi problématique si malgré tous mes efforts, les DVD de réinstallations étaient inefficaces puisqu'atteints des mêmes symptômes que leur ami Vista. **Il a fallu que je supprime toutes les partitions** avant de pouvoir repasser par la case réinstallation usine.

**Je peux également oublier Vista pour la migration des anciennes données** : il ne monte pas le disque dur de l'ancien PC. Il aura beau être reconnu en tant que matériel au démarrage, le seul moyen de retrouver sa trace est d'aller dans le gestionnaire de disques pour constater qu'il faut obligatoirement créer un nouveau volume logique pour l'utiliser. Autant dire : flinguer le système de fichier existant et faire une croix sur la récupération des données.

## Conclusion

Windows Vista ne vaut certainement pas le matraquage médiatique qu'on a subi ni l'évincement systématique des configurations à base de Windows XP. D'un point de vue entreprise, je me vois mal avoir à supporter des PC équipés de ce système d'exploitation. C'est l'enfer assuré tant les menus de configurations sont éparses et peu accessibles.
Ca me fait peur à moyen terme car le jour où Windows XP sera définitivement dégagé, on aura à subir un _système manquant cruellement de maturité_ alors qu'on n'aura rien demandé. C'est le plus grave ...

Histoire de croiser les avis, voici un [avis globalement positif sur Windows Vista](http://www.suchablog.com/index.php?2007/01/04/2032-windows-vista-j-ai-teste-pour-vous). En revanche je n'ai pas trouvé d'avis négatif avec des arguments concrets et valables reposant sur son utilisation. Je suis preneur ;-)
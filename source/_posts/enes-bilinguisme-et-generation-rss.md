title: "ENES : bilinguisme et génération RSS"
id: 72
date: 2005-09-22 11:36:35
tags: 
- Emu Nova
- enes
- i18n
- rss
categories: 
- Développement Web
- Projets
---

![ENES : Emu Nova Entertainment System](https://oncletom.io/images/Emu-Nova/ENES/enes2-index-fr.png)

Dans le billet [ENES : Open Source ?](https://oncletom.io/2005/08/02/enes-open-source/) j'expliquais les bases du renouveau du projet. Renouveau important car aux yeux du "public", et mÃªme aux notres, on en reste sur une impression de stagnation. Pendant que _jeandubois_ s'occupe de la partie dÃ©veloppement et matÃ©riel, je refonds le site Web. BientÃ´t Ã  mi-parcours et Ã  moins d'un mois de son relancement, que retenir ?

<!--more-->

Petit rappel pour celles et ceux qui ont eu la flemme de suivre le lien ci-dessus : **ENES** est initialement un projet de conservation de jeux NES, ceux qui ne l'Ã©taient pas encore. On Ã©largit notre vocation dÃ©sormais en proposant une plateforme matÃ©rielle d'extraction de donnÃ©es (de cartouches de jeu) ainsi que les logiciels nÃ©cessaire Ã  l'extraction. En clair, avec un peu de connaissances, on peut aussi bien dumper de la Super NES comme de la Neo Geo (en thÃ©orie).

Le nouveau site d'ENES sera bien plus axÃ© communication : de notre cÃ´tÃ© il sera plus facile de rÃ©diger des brÃ¨ves et d'en gÃ©nÃ©rer des exports RSS (format de fichier adaptÃ© Ã  l'actualitÃ© car il peut Ãªtre "interprÃ©tÃ©" par de nombreux navigateurs, des lecteurs de news et mÃªme des sites Web.

L'avantage pour les visiteurs et autres personnes intÃ©ressÃ©es par le projet c'est que l'actualitÃ© du groupe ira directement Ã  eux : pas besoin de passer n-fois sur le site pour repÃ©rer des mises Ã  jour; une actualisation du fil RSS suffit pour lister les derniÃ¨res entrÃ©es. Comble du bonheur, ces fils sont disponibles en franÃ§ais et en anglais.

### Bilinguisme

Oui tiens d'ailleurs, dans mon dernier billet sur ENES je parlais d'utiliser un blog pour l'actualitÃ©. Ben en fait non pour la simple et bonne raison qu'apparemment, avoir un mÃªme article en 2 langues diffÃ©rentes c'est impossible. Soit les blogs sont monolingues soit ils faut Ã©crire 2 articles (1 pour chaque langue) dans 2 catÃ©gories (1 catÃ©gorie = 1 langue). Sans parler du cÃ´tÃ© usine Ã  gaz et nullement intuitif. Bref une fois de plus j'ai optÃ© pour la solution maison en reprenant les principaux principes du premier site d'ENES.

Physiquement, ENES n'a qu'un seul site mais dans la pratique, il y en a 2 : le site franÃ§ais et anglais. La langue principale du navigateur est automatiquement dÃ©tectÃ©e; dans le cas contraire, la langue par dÃ©faut est choisie (l'anglais). Le visiteur (ou moteur de recherche) est donc gentiement guidÃ© vers le site en question avec bien entendu la possibilitÃ© de basculer Ã  tout moment d'une langue Ã  l'autre.

### ActualitÃ©

Quand on poste un billet d'information, on le rÃ©dige Ã  la fois en anglais et en franÃ§ais. Les titres peuvent Ãªtre totalement diffÃ©rents : Ã§a ne pose pas de problÃ¨mes pour les adresses naturelles. En effet les adresses sont dites "naturelles" et canoniques : leur arborescence a un cheminement logique, comme si vous aviez des dossiers, sous-dossiers, sous-sous-dossiers etc.

<ins>Exemple</ins> : _http://monsite/news/2005/09/22/titre-de-la-news.htm_.

En lisant l'adresse, on devine que l'on se trouve dans la rubrique d'actualitÃ© du site, au cours de l'annÃ©e 2005, dans son mois de septembre du jour 22 et pour une brÃ¨ve intitulÃ©e "Titre de la news". Ca c'est une adresse naturelle.

Canonique parce que si on supprime "titre-de-la-news.htm", on tombera sur toutes les brÃ¨ves du 22 septembre 2005\. Si on poursuit le raisonnement, en supprimant en plus le chiffre 22, on aura toutes les brÃ¨ves du mois de septembre 2005\. Clair, net et prÃ©cis.

Tellement clair que peu de systÃ¨mes fonctionnent comme Ã§a, encore moins en gÃ©rant 2 langues. LÃ  oui : l'adresse anglaise aura le titre anglais tandis que l'adresse franÃ§aise le titre franÃ§ais. Difficile de faire mieux et plus clair. Encore une fois, il aurait Ã©tÃ© impossible d'avoir Ã§a sur un systÃ¨me de blogs prÃ©conÃ§u.

![ENES : Emu Nova Entertainment System](https://oncletom.io/images/Emu-Nova/ENES/enes2-index-en.png)
La mÃªme page, en anglais ce coup-ci

### Fils RSS

Une fois qu'une brÃ¨ve est ajoutÃ©e ou Ã©ditÃ©e, vu qu'il n'y a pas non plus 36 000 actualitÃ©s par jour, le mieux est de gÃ©nÃ©rer directement Ã  la suite le fil RSS. Ou plutÃ´t LES fils RSS, anglais et franÃ§ais. C'est pas bien compliquÃ©, suffit de lire la documentation, gÃ©nÃ©rer un fichier texte et ... et quoi d'ailleurs ? La meilleure solution est-elle de gÃ©nÃ©rer dynamiquement un fichier Ã  chaque appel (donc refaire n-fois la mÃªme routine alors que le contenu n'a pas changÃ©) ou bien gÃ©nÃ©rer une fois pour toute un fichier "statique" ?

Je suis plutÃ´t un partisan de l'Ã©conomie (on appelle Ã§a parfois la "flemme") : c'est Ã  dire produire le mÃªme rÃ©sultat avec le mimimum d'effort. Donc en principe, pour moi, je prÃ©fÃ¨re gÃ©nÃ©rer un fichier Ã  chaque news Ã©ditÃ©e puis l'enregistrer en dur comme un fichier classique. Seulement voilÃ , sur l'hÃ©bergement fourni par notre hÃ©bergeur de projet, on ne peut pas crÃ©er de fichier comme Ã§a. Verdict : tout dynamique ?

Ouaip ben non : on va faire comme prÃ©vu sauf qu'au lieu de gÃ©nÃ©rer le rÃ©sultat dans un fichier, on va le stocker ... dans la base de donnÃ©es. A premiÃ¨re vue c'est dÃ©bile (car on solicite aussi la base de donnÃ©es) mais c'est la meilleure alternative : la requÃªte est simple (une ligne Ã  chercher contre plusieurs dans le cas du tout dynamique), quasiment aucun traitement Ã  effectuer (requÃªte SQL + affichage au lieu d'une requÃªte "moyenne", l'assemblage puis l'affichage). C'est donc plus rapide que du tout dynamique, un poil plus lent que la version statique (lire un fichier c'est toujours plus rapide qu'accÃ©der Ã  une base de donnÃ©es).

* * *

MÃªme si c'Ã©tait un peu technique, j'explique au moins la logique de fonctionnement : le tout dynamique est dÃ©bile car il ne sert Ã  rien de gÃ©nÃ©rer n-fois un contenu strictement inchangÃ© : Ã§a bouffe des ressources (RAM, processeur) pour pas grand chose. Ca fait juste trÃ¨s style mais c'est lÃ  le seul intÃ©rÃªt (sauf quand il est impossible d'agrÃ©ger le contenu et que lÃ , le fichier est effectivement dynamique).

La prochaine Ã©tape sera la nouvelle liste de dumps avec un moteur de recherche intÃ©grÃ© afin de rechercher en 2 clics si un jeu en notre possession a bel et bien Ã©tÃ© sauvegardÃ©.

* * *

**Petite note** : j'ai pris un peu de retard dans la rÃ©daction de mes billets, j'ai 3 films Ã  commenter (La moustache, Collision et la dÃ©chirure), la fin de mes vacances et c'est dÃ©jÃ  pas mal :-D En attendant j'vais un peu me reposer pardi.
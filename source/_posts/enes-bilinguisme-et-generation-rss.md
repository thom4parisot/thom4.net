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

![ENES : Emu Nova Entertainment System](/images/Emu-Nova/ENES/enes2-index-fr.png)

Dans le billet [ENES : Open Source ?](https://oncletom.io/2005/08/02/enes-open-source/) j'expliquais les bases du renouveau du projet. Renouveau important car aux yeux du "public", et même aux notres, on en reste sur une impression de stagnation. Pendant que _jeandubois_ s'occupe de la partie développement et matériel, je refonds le site Web. Bientôt à mi-parcours et à moins d'un mois de son relancement, que retenir ?

<!--more-->

Petit rappel pour celles et ceux qui ont eu la flemme de suivre le lien ci-dessus : **ENES** est initialement un projet de conservation de jeux NES, ceux qui ne l'étaient pas encore. On élargit notre vocation désormais en proposant une plateforme matérielle d'extraction de données (de cartouches de jeu) ainsi que les logiciels nécessaire à l'extraction. En clair, avec un peu de connaissances, on peut aussi bien dumper de la Super NES comme de la Neo Geo (en théorie).

Le nouveau site d'ENES sera bien plus axé communication : de notre côté il sera plus facile de rédiger des brèves et d'en générer des exports RSS (format de fichier adapté à l'actualité car il peut être "interprété" par de nombreux navigateurs, des lecteurs de news et même des sites Web.

L'avantage pour les visiteurs et autres personnes intéressées par le projet c'est que l'actualité du groupe ira directement à eux : pas besoin de passer n-fois sur le site pour repérer des mises à jour; une actualisation du fil RSS suffit pour lister les dernières entrées. Comble du bonheur, ces fils sont disponibles en français et en anglais.

## Bilinguisme

Oui tiens d'ailleurs, dans mon dernier billet sur ENES je parlais d'utiliser un blog pour l'actualité. Ben en fait non pour la simple et bonne raison qu'apparemment, avoir un même article en 2 langues différentes c'est impossible. Soit les blogs sont monolingues soit ils faut écrire 2 articles (1 pour chaque langue) dans 2 catégories (1 catégorie = 1 langue). Sans parler du côté usine à gaz et nullement intuitif. Bref une fois de plus j'ai opté pour la solution maison en reprenant les principaux principes du premier site d'ENES.

Physiquement, ENES n'a qu'un seul site mais dans la pratique, il y en a 2 : le site français et anglais. La langue principale du navigateur est automatiquement détectée; dans le cas contraire, la langue par défaut est choisie (l'anglais). Le visiteur (ou moteur de recherche) est donc gentiement guidé vers le site en question avec bien entendu la possibilité de basculer à tout moment d'une langue à l'autre.

## Actualité

Quand on poste un billet d'information, on le rédige à la fois en anglais et en français. Les titres peuvent être totalement différents : ça ne pose pas de problèmes pour les adresses naturelles. En effet les adresses sont dites "naturelles" et canoniques : leur arborescence a un cheminement logique, comme si vous aviez des dossiers, sous-dossiers, sous-sous-dossiers etc.

<ins>Exemple</ins> : `http://monsite/news/2005/09/22/titre-de-la-news.htm`.

En lisant l'adresse, on devine que l'on se trouve dans la rubrique d'actualité du site, au cours de l'année 2005, dans son mois de septembre du jour 22 et pour une brève intitulée "Titre de la news". Ca c'est une adresse naturelle.

Canonique parce que si on supprime "titre-de-la-news.htm", on tombera sur toutes les brèves du 22 septembre 2005\. Si on poursuit le raisonnement, en supprimant en plus le chiffre 22, on aura toutes les brèves du mois de septembre 2005\. Clair, net et précis.

Tellement clair que peu de systèmes fonctionnent comme ça, encore moins en gérant 2 langues. Là oui : l'adresse anglaise aura le titre anglais tandis que l'adresse française le titre français. Difficile de faire mieux et plus clair. Encore une fois, il aurait été impossible d'avoir ça sur un système de blogs préconçu.

![La même page, en anglais ce coup-ci](/images/Emu-Nova/ENES/enes2-index-en.png)


## Fils RSS

Une fois qu'une brève est ajoutée ou éditée, vu qu'il n'y a pas non plus 36 000 actualités par jour, le mieux est de générer directement à la suite le fil RSS. Ou plutôt LES fils RSS, anglais et français. C'est pas bien compliqué, suffit de lire la documentation, générer un fichier texte et ... et quoi d'ailleurs ? La meilleure solution est-elle de générer dynamiquement un fichier à chaque appel (donc refaire n-fois la même routine alors que le contenu n'a pas changé) ou bien générer une fois pour toute un fichier "statique" ?

Je suis plutôt un partisan de l'économie (on appelle ça parfois la "flemme") : c'est à dire produire le même résultat avec le mimimum d'effort. Donc en principe, pour moi, je préfère générer un fichier à chaque news éditée puis l'enregistrer en dur comme un fichier classique. Seulement voilà, sur l'hébergement fourni par notre hébergeur de projet, on ne peut pas créer de fichier comme ça. Verdict : tout dynamique ?

Ouaip ben non : on va faire comme prévu sauf qu'au lieu de générer le résultat dans un fichier, on va le stocker ... dans la base de données. A première vue c'est débile (car on solicite aussi la base de données) mais c'est la meilleure alternative : la requête est simple (une ligne à chercher contre plusieurs dans le cas du tout dynamique), quasiment aucun traitement à effectuer (requête SQL + affichage au lieu d'une requête "moyenne", l'assemblage puis l'affichage). C'est donc plus rapide que du tout dynamique, un poil plus lent que la version statique (lire un fichier c'est toujours plus rapide qu'accéder à une base de données).

Même si c'était un peu technique, j'explique au moins la logique de fonctionnement : le tout dynamique est débile car il ne sert à rien de générer n-fois un contenu strictement inchangé : ça bouffe des ressources (RAM, processeur) pour pas grand chose. Ca fait juste très style mais c'est là le seul intérêt (sauf quand il est impossible d'agréger le contenu et que là, le fichier est effectivement dynamique).

La prochaine étape sera la nouvelle liste de dumps avec un moteur de recherche intégré afin de rechercher en 2 clics si un jeu en notre possession a bel et bien été sauvegardé.

**Petite note** : j'ai pris un peu de retard dans la rédaction de mes billets, j'ai 3 films à commenter (La moustache, Collision et la déchirure), la fin de mes vacances et c'est déjà pas mal :-D En attendant j'vais un peu me reposer pardi.
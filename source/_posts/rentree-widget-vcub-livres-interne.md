title: "Rentrée en vrac : widget VCUB, livres et Internet"
id: 17469
date: 2010-09-09 11:00:39
tags:
- 37signals
- apanum
- couchdb
- livres
- netvibes
- nodejs
- parisweb
- rmll
- uwa
- VCUB
categories:
- Développement Web
---

C'est la rentrée scolaire. Le moment de reprendre les bonnes habitudes qu'on aurait laissé de côté pendant les vacances. Comme celle de bloguer par exemple ; après 2 mois de pause plus ou moins forcée.

Un peu forcée puisque l'on s'est quitté lors du [lancement des RMLL 2010](https://oncletom.io/2010/rmll-2010/), au début du mois de juillet. Je n'ai pas pris le temps d'en dresser un compte-rendu. Toujours est-il que ce fût une expérience à vivre, tant lors des conférences que des _afters_.
Le remplissage des salles était vraiment aléatoire, avec semblerait-il une légère allergie aux conférences en langue anglaise. J'ai pris quelques claques, d'humilité notamment. Merci les indiens (vraiment).

Toujours est-il qu'il est temps de revenir à la réalité. J'aurais pu écrire plusieurs articles.
Par manque de temps (ou plutôt parce que je préfère le consacrer à d'autres choses), je mutualise tout ça dans cet article.

[![Homeless](//farm5.static.flickr.com/4135/4931830643_00fd97c26b.jpg)](http://www.flickr.com/photos/the-jedi/4931830643/ "Homeless")

<!--more-->

## Widget VCUB

J'ai peaufiné le [widget VCUB pour Netvibes annoncé en avril dernier](https://oncletom.io/2010/widget-netvibes-vcub/). J'ai ajouté ces quelques éléments :

*   **simplification de l'affichage** de la date de mise à jour
*   **recherche** du nom des station (à la volée, ou via la recherche Netvibes)
*   affichage d'une carte réduite de station (avec stations à proximité)
*   choix de la langue d'affichage (en français par défaut)
*   correction du **bug d'ajout de station en favori** (merci à [Sébastien Dugué](http://www.ibordeaux.fr/) pour m'avoir mis sur la piste)

En parallèle, je me suis lancé dans un petit projet utilisant les données de VCUB avec [Node.js](http://nodejs.org/) et [CouchDB](http://couchdb.apache.org/). J'espère aboutir à des résultats en 2011.
D'ici là, je dois accumuler des données, à la fois pour secouer les performances de la base NoSQL mais aussi pour arriver au résultat qui m'intéresse.

En attendant, vous pouvez toujours _[forker](http://github.com/oncletom/uwa-vcub)_[ uwa-vcub sur Github](http://github.com/oncletom/uwa-vcub) ou [installer le widget VCUB sur votre page Netvibes](http://eco.netvibes.com/widgets/378209/vcub-disponibilite-des-velos).

## Boulimie littéraire

Catalogué _geek_ ou pas, on a beau passer ses journées à travailler dessus/sur/devant un ordinateur, cela n'empêche pas d'aimer lire.
Je suis tenu en haleine par un pavé ô combien instructif : _Berlin − Les offensives géantes de l'Armée Rouge_ de Jean Lopez. Il s'agit d'un livre historique sacrément bien ficelé sur les offensives finales de l'Armée Rouge entre 1944 et 1945.
Il contient beaucoup d'explications sur les contextes politiques, géopolitiques et les raisons du succès des Soviets ... jusqu'aux fondements de la Guerre Froide.
Je recommande fortement sa lecture, pour peu que le sujet vous intéresse.

Se sont entassés sur le canapé, pour cause de bibliothèque remplie :

*   Beginning **CoucbDB** − [suite à un article de Nicolas Steinmetz](nicolas.steinmetz.fr/journal/post/2010/08/28/Lecture-:-Beginning-CouchDB)
*   CoucbDB: the Definitive Guide − pour approfondir le sujet
*   Micro-ISV: from Vision to Reality
*   Rework − déjà lu et prêté/[commenté par mon éminent collègue Boris Schapira](http://borisschapira.com/blog/rework-jason-fried-et-david-heinemeier-hansson/)
*   Absolument dé-bor-dée ! - comment faire 35 h en un mois...Quand on est fonctionnaire
*   Scrum and XP from the Trenches: How We Do Scrum
*   Améliorer ses taux de conversion Web
*   **Design Thinking**: Integrating Innovation, Customer Experience, and Brand Value
*   Business Model Generation: A Handbook for Visionaries, Game Changers, and Challengers
*   Tribes: We Need You to Lead Us
*   Les Mots sont importants

Bref, il me faudra un petit bout de temps pour voir la lumière au bout du tunnel de la lecture.
Peut-être devenir fonctionnaire pour avoir davantage de temps ? ;-)

## Association du numérique en Aquitaine

Le besoin commençait à se faire sentir depuis quelques temps déjà. **La filière numérique en Aquitaine s'organise** et est en train de se constituer en association de loi 1901\. Elle <q>s’adresse aux acteurs du numérique en Aquitaine qui, par l’innovation, la recherche, la formation ou l’usage, développent la filière numérique dans cette région</q>.

[Le reste du compte-rendu a été fort bien synthétisé par la secrétaire de l'association sur le site Éditoile](http://www.editoile.fr/association-professionnels-numerique-aquitaine/). Il y a à mon avis un besoin d'opérer en liberté, sans s'embourber dans des déblatérations sans fin. Je rêve de voir des _task force_ émerger pour apporter leurs réponses à des sujets.
En espérant que cela puisse aider à faire **aboutir une solution intelligente de lieu de coworking à Bordeaux**, pour commencer.
Et éviter une rivalité inutile entre CUB et Mairie de Bordeaux.

Bref, j'y participe et j'ai hâte de voir cette agence tous risques à l'œuvre ;-)

[![How I Met a Good Moment − Again](//farm5.static.flickr.com/4102/4871868747_448ba41195.jpg)](http://www.flickr.com/photos/the-jedi/4871868747/ "How I Met a Good Moment − Again")

## Paris-Web 2010

J'animerai un atelier technique pour la troisième année consécutive. Rendez-vous à l'atelier provoc' [Industrialiser l'artisanat de l'intégration HTML](http://www.paris-web.fr/2010/programme/industrialiser-lartisanat-de-lintegration-html.php) le samedi matin, à 10h50\. Ça se passe dans les locaux de Télécom Paris, donc beaucoup plus proche du centre de la capitale que lors des précédentes éditions.

**Pourquoi industrialiser un artisanat** ? Parce que j'ai toujours eu la sensation que tenter d'apporter un semblant d'organisation (grilles, frameworks & cie) dérangeaient les habitudes, parce qu'on n'a pas besoin de davantage, parce que les CSS doivent rester simple etc.

Bref, cet atelier s'orientera sur mes retours d'expériences, dans mon coin et au quotidien, dans divers contextes. J'ai envie de confronter les problématiques habituelles entre personnes de l'assemblée.

Je détaillerai tout ça dans mon prochain billet, afin de présenter cela plus en détail.
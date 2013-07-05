title: "Firebug : bonnes pratiques pour le développement Web"
id: 819
date: 2007-12-25 08:00:44
tags: 
- css
- dom
- firebug
- firefox
- logiciels libres
- optimisation
- performances
- yslow
categories: 
- Développement Web
- Standards du Web
---

![Logo Firebug](https://oncletom.io/images/2007/12/firebug-logo.gif)

[Firebug fait partie de mes extensions préférées](https://oncletom.io/2007/08/07/facebook-rock-your-firefox/) depuis un bon moment. Je l'estime aujourd'hui même plus importante que l'extension [Web Developer](https://addons.mozilla.org/fr/firefox/addon/60), c'est dire.

J'ai pourtant constaté que la plupart de ses utilisateurs la sous-exploitait en se limitant à la console pour consulter les erreurs et éventuellement à l'inspecteur HTML pour remonter rapidement dans l'arborescence des balises en 1 clic. C'est bien mais pas assez.
Firebug est tout simplement énorme ! Suffisamment énorme pour **gagner un temps incroyable** dans le développement d'applications JavaScript et pour **mieux comprendre les incohérences** des CSS dans une page, entre autre.

Je vous offre aujourd'hui mon cadeau de Noël pour gagner en productivité et maîtriser cet outil ô combien indispensable.
<!--more-->
Le plus amusant dans l'histoire c'est que le site officiel de Firebug dévoile (succinctement certes) tous les petits _plus_ qui simplifient la vie. Je vais m'atteler à les éplucher en fonction des domaines d'utilisation :

1.  [pour le HTML et les CSS](#firebug-html)
2.  [pour le JavaScript](#firebug-javascript)
3.  [pour gagner en performances](#firebug-performances)

### Firebug pour le HTML

#### L'inspection HTML

![Inspecteur HTML Firebug](https://oncletom.io/images/2007/12/firebug-html-inspector.png)

J'apprécie l'inspection HTML car elle me permet de retrouver simplement le code lié au visuel. Après avoir activé l'inspecteur, je survole l'élément sur lequel je veux travailler, je clique dessus et le volet Firebug se fige dessus en m'indiquant **toutes ses propriétés CSS, le modèle de boîte et ses propriétés DOM**. On en reparle tout de suite après.
L'inverse est également possible. C'est à dire qu'en survolant le code, la correspondance visuelle dans la page est établie. C'est rudement pratique pour repérer des éléments qui sortent du flux. Ça l'est d'autant plus que les différentes marges (internes, externes, bordures) sont elles aussi mises en surbrillance.

Le gros atout de cet inspecteur c'est également l'**édition à la volée de toutes les balises** ! Idéal pour tester diverses classes d'un objet ayant un impact visuel fort sur son affichage. Cet outil présente un gain de temps énorme par rapport à la modification du code dans son éditeur et un petit coup de touche <kbd>F5</kbd> dans la foulée.

Il faut également retenir que **toute balise est sélectionnable en cliquant sur son nom** (`div`, `h3` etc.). Cela a a pour effet de mettre à jour le panneau latéral de Firebug. Panneau latéral qui est également fort utile.

#### L'inspection CSS, Layout et DOM

Le panneau latéral de l'inspecteur HTML se compose de 3 onglets, tous très utiles.

##### Inspecteur CSS

![Inspecteur CSS Firebug](https://oncletom.io/images/2007/12/firebug-css-inspector.png)

Les propriétés CSS affichées concernent uniquement l'objet actif et c'est ce qui en fait sa force. Ce panneau indique en effet la **cascade CSS en cours** ce qui permet de comprendre rapidement pourquoi sa feuille de style n'est pas appliquée comme il faudrait. Elle a la bonne idée de mentionner quelle feuille de style est utilisée et quelle ligne. De quoi corriger ça dans son éditeur favori rapidement.

Ou pas. En effet l'inspecteur CSS permet, tout comme l'inspecteur HTML, de **modifier les propriétés à la volée et sans fioriture**. Si je précise sans fioriture c'est parce que l'éditeur à la volée de _Web Developer_ rend parfois l'affichage de la page bancale en décalant des éléments. Là vous pouvez totalement compter sur l'éditeur intégré et ce n'est pas un luxe !
Désactiver, supprimer, modifier ou ajouter des propriétés sont quelques-unes des actions que vous pourrez effectuer à même la page.

Là encore c'est une des parties où les gains de temps sont énormes. On peut en effet **modifier ses CSS et les tester tout en observant l'impact immédiat de ses modifications**.

##### Inspecteur du modèle de boîte (_Layout_)

![Modèle de boîte avec Firebug](https://oncletom.io/images/2007/12/firebug-layout-inspector.png)

Le [modèle de boîte CSS](http://www.yoyodesign.org/doc/w3c/css2/box.html) peut vite devenir pénible à gérer et plus particulièrement quand on visualise mal le **cumul des différentes marges**.
Dans tous les cas c'est appréciable de pouvoir constater les marges en présence et encore, de pouvoir **modifier leurs dimensions à la volée**. Firebug a la bonne idée de colorer les marges intérieures (`padding`), extérieures (`margin`) et les bordures (`border`) d'une couleur différente.

Il a également la bonne idée d'afficher une **double règle millimétrée** au survol du panneau _layout_. Très pratique dans le cas de design en grilles ou nécessitant un certain rythme de visualisation.

##### Inspecteur DOM

Ah l'inspecteur DOM ! S'il n'existait pas il faudrait l'inventer. Firefox proposait déjà un tel outil à la différence près qu'il était moins pratique d'utilisation.
L'inspecteur DOM m'est moyennement utile dans le cas d'une simple inspection du code HTML bien que ce soit toujours pratique de visualiser la présence ou pas d'objets JavaScript dans tel ou tel élément. C'est fortement appréciable pour la [librairie Prototype](http://www.prototypejs.org) étant donné les dégâts causés par son extension du DOM à gogo.

### Firebug pour le JavaScript

#### L'inspecteur JavaScript

![Inspecteur JavaScript Firebug](https://oncletom.io/images/2007/12/firebug-javascript-watcher.png)

C'est l'autre **outil indispensable de Firebug**. Avec lui, c'en est fini des `alert(mavariable);`. L'inspecteur DOM prend avec lui toute son utilité.

J'illustre sur l'image ci-dessus l'utilisation des points d'arrêt (_breakpoints_). Il suffit d'un clic à gauche d'un numéro de ligne pour en placer/retirer un. Concrètement quand l'exécution du JavaScript arrivera au premier point d'arrêt, elle va se stopper.
Quel intérêt ? Observer. En agissant ainsi, vous avez la main sur toutes les variables connues au sein de votre code/fonction. Très utile pour **connaître les paramètres passées à la fonction et détecter les erreurs**. C'est pour cette raison que les `alert()` deviennent inutiles : tout est à portée de main. Vous ne pesterez plus contre un `undefined` mal placé ;-)

En parallèle de ça, l'inspecteur DOM est à utiliser pour **visualiser d'un coup d'œil les différentes variables actives ainsi que leur arborescence**. Comme tout est cliquable, l'inspecteur vous transporte sur n'importe quel objet pour en étudier le contenu.

#### La console Firebug _alias_ `console.*`

![Console Firebug](https://oncletom.io/images/2007/12/firebug-console.png)

**La console Firebug est l'autre tueuse d'`alert()`** et s'utilise de deux manières.

La plus accessible est d'**interagir avec**. Vous saisissez votre code, la console l'exécute et retourne le ou les résultats. Encore une fois les objets sont cliquables et navigable au travers de l'inspecteur DOM.
La console est utile pour utiliser des fonctions sorties du contexte de l'initialisation : il devient tout à fait possible de piloter des éléments après le chargement de la page. Ça évite encore une fois des <kbd>F5</kbd> inutiles et consommateurs de temps.

L'autre manière d'utiliser la console c'est de ne pas l'utiliser. Ou pas de manière active tout du moins puisqu'**elle est également un objet JavaScript** (`console`) utilisable dans votre code auquel sont rattachées plusieurs fonctions au nom explicite :

*   `console.log()` : affiche une information standard
*   `console.info()` : affiche une information de type "information"
*   `console.warn()` : affiche une information de type "avertissement"
*   `console.error()` : affiche une information de type "erreur"
*   `console.debug()` : débogue le contenu d'un objet directement dans la console
Autrement dit, si l'inspecteur ne suffisait pas, au lieu de lancer un `alert(mavariable)` (potentiellement dangereux dans une grande boucle ;-) qui n'a jamais cliqué 50 fois sur "OK" à cause de ça ?), il vaudra mieux utiliser `console.log(mavariable)`. Il y a de quoi faire, surtout avec la possibilité de créer des groupes de messages et l'utilisation de la syntaxe `printf`.

Et top du top, en cas d'erreur JavaScript, la console affiche un petit cercle rouge qui rappelle fortement le point d'arrêt. Normal puisque c'en est un. Un clic et on évite de rechercher la ligne problématique dans le code. Encore une fois, du temps de gagné.

### Firebug pour les performances

Après avoir bien développé, Firebug propose de mieux développer. L'extension magique propose quelques outils sympathiques pour rapidement déceler les problèmes, notamment de scripts trop gourmands ou à optimiser.

#### Le traceur réseau

![Traceur réseau Firebug](https://oncletom.io/images/2007/12/firebug-net-tracer.png)

Avec le traceur réseau c'est simple, tout ce qui est chargé sur la page est chronométré. Si un élément est systématiquement long à charger en tête de liste, pourquoi ne pas essayer de le déplacer dans le bas de la pile ? Je pense notamment aux appels vers des fichiers JavaScripts externes. Les appeler en bas de page permet d'éviter des gels de page. C'est ce que YSlow nous recommandera ;-)

Outre une petite prévisualisation des contenus, le traceur affiche aussi les **statuts des contenus** s'ils sont différent du statut 200 (_found_). Et de surligner ça en rouge en cas de fichier introuvable.

J'aime beaucoup le traceur pour le **suivi des requêtes XHR (appels AJAX)**. Un clic sur un appel affiche à la fois les entêtes, les données transmises au serveur et sa réponse. Fini les requêtes AJAX qui ne produisent rien sans qu'on puisse savoir pourquoi. Le clic droit sera également un fidèle allié, notamment pour ouvrir l'appel AJAX dans un nouvel onglet. C'est plus lisible pour déboguer quand même ;-)

#### Le profileur JavaScript

![Profileur JavaScript Firebug](https://oncletom.io/images/2007/12/firebug-profiler.png)

Le profileur (_profiler_) JavaScript s'utilise un peu à la manière de la console : de manière active ou au travers de l'objet `console`.

**Le profileur enregistre tout ce qui se passe entre le moment où il est enclenché et le moment où il est stoppé**. Il va ainsi dénombrer toutes les appels (_calls_), leur durée d'exécution et leur fichier d'origine, entre autre. L'idée est bien entendu de voir ce qui consomme le plus d'appels et de temps pour savoir si ce comportement est normal ou pas. À ce stade là, difficile de pousser la granularité du profileur plus loins.

Sauf en utilisant le profileur directement dans le code comme on a déjà pu le faire pour les _logs_. `console.profile()` et `console.profileEnd()` seront vos amis. C'est vraiment l'idéal pour **profiler l'exécution d'une fonction**, voire même les portions de code exécutée en son sein.

#### L'extension YSlow

![Firebug YSlow](https://oncletom.io/images/2007/12/firebug-yslow.png)

L'[extension YSlow](https://addons.mozilla.org/en-US/firefox/addon/5369) est une extension pour Firefox mais elle nécessite toutefois la présence de Firebug. Elle s'articule autour de trois critères.

Il y' a d'une part la surveillance des performances. YSlow se base sur la [liste des bonnes pratiques établies par Yahoo!](http://developer.yahoo.com/performance/rules.html) (14 à l'heure actuelle). YSlow passe ces critères en revue et accorde une note en conséquence. Si certaines sont difficiles à tenir, c'est un bon moyen de s'intéresser à de **nouvelles pratiques d'optimisation et de performances**.

Le second critère est affiché dans le panneau _stats_. Il s'agit de la capture d'écran ci-dessus. Certes il s'agit d'un simple tableau mais dont les chiffres sont intéressants à étudier. YSlow analyse la page pour un premier et un second chargement. La différence entre les deux ? C'est que le cache est passé par là et normalement, je dis bien normalement, **le second chargement se doit d'être beaucoup plus rapide**.
Si ce n'est pas le cas, il y a de l'optimisation à faire et cela peut aussi signifier du côté serveur Web. Pas forcément du développement donc.

Enfin on termine sur une partie complémentaire aux stats : les composants (_components_). Elle distille des informations plus verbeuses que le traceur réseau de Firebug en se focalisant sur les E-Tag, la présence ou pas de compression, la date de validité du cache ainsi que la taille des objets.

### Conclusion

J'espère avoir éclairé quelques lanternes sur l'utilisation de Firebug. Cette extension est suffisamment puissante pour gagner en confort de développement ; il serait dommage de s'en priver. **On gagne du temps, du confort et surtout, de la qualité de développement**.
À noter qu'il existe aussi Firebug Lite. Il s'agit d'un script JavaScript compatible avec les principaux navigateurs du marché mais comme le _Lite_ l'indique, les fonctionnalités sont plutôt limitées. Seule la console JavaScript persiste.

[amazon-carrousel]fc64116b-6b59-444b-b4ee-074a4adecf57[/amazon-carrousel]
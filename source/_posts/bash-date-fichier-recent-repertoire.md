title: "Bash : date du plus récent fichier d'un répertoire"
id: 771
date: 2007-09-14 13:49:37
tags: 
- awk
- bash
- command line
- grep
- linux
- logiciels libres
- regex
- shell
categories: 
- Développement Web
---

Ce qu'il y a de génial avec les systèmes Unix (dont Linux fait partie), c'est la possibilité d'**interagir avec le système et d'étendre ses possibilités** en jouant avec les programmes à disposition. Je pense qu'il est indispensable pour un développeur Web de connaître les bases de ces systèmes non pas pour frimer mais **pour se simplifier la vie**.
L'Internet n'aura de cesse de progresser et les langages d'évoluer, il n'y aura probablement jamais plus simple ni plus rapide que de passer par les interactions système pour arriver à ses fins.

**Ma problématique était simple** : j'avais besoin de **récupérer la date du plus récent fichier d'un répertoire**. En une ligne une seule et sans boucle, la puissance de la ligne de commande m'a donné le résultat. Explication pas à pas car _ça peut servir à tout le monde_.
<!--more-->

### Les fichiers

Sans plus tarder, voici la liste des fichiers sur laquelle nous allons travailler :

    $ls -go
    -rw-r--r-- 1 0 1990-06-01 00:00 antiquite.ok
    -rw-r--r-- 1 0 2007-01-01 00:00 assez_vieux.ok
    -rw-r--r-- 1 0 2007-09-13 15:12 recent.bad
    -rw-r--r-- 1 0 2006-01-01 00:00 tres_vieux.ok`</pre>

    Ce classement est de toute évidence par ordre alphabétique et indique la date de dernière modification de chaque fichier. Si certains s'étonnent des dates très rondes, sachez que la commande `touch` permet de forcer une date de création comme ceci : <kbd>touch -d 1990-06-01 antiquite</kbd> (date au format anglais, _année-mois-jour_). Un mystère de levé ;)

    ### Les clés du succès : _pipes_, `ls`, `grep`, `head` et `awk`

    N'ayez pas peur, nous allons creuser ensemble l'intégralité de ce titre pour justement pouvoir s'en servir à bon escient.

    Les _pipes_ (symbolisés par des <kbd>|</kbd>, _tuyaux_ en anglais) permettent de **transférer des sorties vers la prochaine commande située sur la droite**. C'est ce qui permet de **chaîner les commandes en filtrant les résultats** de manière naturelle au fur et à mesure. Pour bien comprendre, lisez la suite.

    Je recommande aux débutants de **toujours s'armer d'une console** à portée de main pour utiliser les manuels intégrés (<kbd>man _programme_</kbd>). Ces derniers définissent toutes les options possibles et agrémentent le tout d'exemples rendant leur compréhension plus aisée.
    Ca m'évitera aussi d'avoir à expliquer tous les basiques pour ne m'attarder que sur la méthode. En revanche je répondrai volontiers à vos remarques et critiques en commentaire.

    ### Première étape : lister le contenu (`ls`)

    Pour obtenir le fichier le plus récent, l'idéal serait de pouvoir trier par ordre chronologique. Et mieux encore, le nirvana serait d'avoir le fichir le plus récent d'abord. Ca tombe bien, `ls` fait tout ça grâce à l'option <kbd>-t</kbd>. Mettons à jour le code :

    <pre>`$ ls -go<ins>t</ins>
    -rw-r--r-- 1 0 2007-09-13 15:12 recent.bad
    -rw-r--r-- 1 0 2007-01-01 00:00 assez_vieux.ok
    -rw-r--r-- 1 0 2006-01-01 00:00 tres_vieux.ok
    -rw-r--r-- 1 0 1990-06-01 00:00 antiquite.ok`</pre>

    ### Deuxième étape : filtrer le contenu (`grep`)

    Cette étape est optionnelle mais bien souvent le fichier le plus récent n'est pas celui qui nous intéresse. En l'occurence on voudrait le fichier le plus récent qui se termine en **.ok**. La commande `grep` permet d'appliquer des expressions régulières sur une liste pour n'en retourner que les éléments concordants.
    C'est également notre premier cas d'utilisation des _pipes_ et vous allez vite comprendre son fonctionnement :
    <pre>`$ ls -got <ins>| grep \.ok$</ins>
    -rw-r--r-- 1 0 2007-01-01 00:00 assez_vieux.ok
    -rw-r--r-- 1 0 2006-01-01 00:00 tres_vieux.ok
    -rw-r--r-- 1 0 1990-06-01 00:00 antiquite.ok`</pre>

    Nombre de programmes prennent des fichiers comme dernier argument, pour savoir sur quoi travailler. Quand celui-ci n'est pas spécifié, ils considèrent alors qu'ils travaillent sur un flux de données en entrée. C'est ce que fait le _pipe_ en redirigeant les données en entrée de la prochaine commande.

    En tous cas on est arrivé là où on le souhaitait : **nous avons remonté le fichier le plus récent en premier**.

    ### Troisième étape : éliminer les résultats (`head`)

    `head` est un outil très sympathique dont l'utilité se suggère rien qu'à son nom : il retourne autant de lignes qu'on lui spécifie. Vous l'aurez deviné, on veut qu'il ne nous en retourne qu'une seule.
    <pre>`$ ls -got | grep \.ok$ <ins>| head -1</ins>
    -rw-r--r-- 1 0 2007-01-01 00:00 assez_vieux.ok`</pre>

    On touche presque au but, il ne nous manque plus qu'à ne remonter que la date ... le reste on s'en fiche.

    ### Quatrième étape : choisir la donnée (`awk`)

    `awk` est surement un des programmes les plus puissants dans la manipulation des flux de données. Il permet de découper des chaînes en segments individuels et tous réutilisables. Par défaut, il considère que le séparateur est le caractère _espace_. En jetant un oeil au précédent résultat, on remarque que la date se situe à la quatrième colonne.
    La syntaxe quelque peu particulière d'`awk` fonctionne par paire de valeurs situées entre accolades du genre <kbd>{action valeur}</kbd>. Donc c'est parti, on affiche la quatrième colonne :
    <pre>`$ ls -got | grep \.ok$ | head -1 <ins>| awk '{print $4}'</ins>
    2007-01-01`</pre>

    ### Conclusion

    Le résultat peut paraître complexe au premier abord mais avec un peu de gymnastique et d'habitude, c'est un **gain de temps assuré** et qui pourra vous servir dans bien des cas : **synchroniser votre application** principal avec plusieurs machines distantes, **supprimer des fichiers plus anciens que -n jours** etc.
    Une ligne contre un programme, le choix est vite fait d'autant plus que c'est rapide, peu gourmand et déclenchable depuis un langage de programmation pour peu que son paramétrage autorise l'appel de commandes système.

    En cadeau bonus, voici un moyen de récupérer le résultat ci-dessus dans une variable :
    <pre>`date_recente=` ls -got | grep \.ok$ | head -1 | awk '{print $4}'``</pre>

    Combiné au programme `find` et à `touch` (évoqué plus haut), on peut facilement récupérer un listing de fichiers plus récents ou plus anciens qu'une date en question :
    <pre>`date_recente=` ls -got | grep \.ok$ | head -1 | awk '{print $4}'`
    touch -d ${date_recente} fichier_temoin
    find /var/log -newer fichier_temoin
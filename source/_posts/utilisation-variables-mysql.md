title: "Utilisation de variables dans MySQL"
id: 618
date: 2007-07-13 13:00:30
tags: 
- astuce
- code
- MySQL
- optimisation
categories: 
- Développement Web
---

**MySQL**, depuis la version _3.23.6_, permet de déclarer des variables dans ses requêtes. Il est d'ailleurs possible de scripter ses requêtes mais c'est une autre histoire.

Ca peut sembler inutile à première vue lorsqu'on utilise MySQL au travers d'<acronym title="Application Programming Interface">API</acronym> d'autres langages (<acronym title="PHP : Hypertext Processor">PHP</acronym>, Perl, C# etc.). Et pourtant ça peut vous être très utile pour économiser des requêtes, du temps à programmer ces boucles et puis surtout, **par flemme**.

Oui, la flemme est pour moi la **qualité numéro un** du développeur car _le flemmard a pour but d'arriver à ses fins en un minimum d'efforts_.
<!--more-->

### Déclaration de variables

On peut déclarer une variable de deux façons dans MySQL.
La première méthode consiste à utiliser l'opérateur `SET`.

    SET @pierre = 3, @feuille = 3 + 2, @ciseau = @pierre % @feuille ;`</pre>
    On peut également consister une variable à partir d'une requête.
    <pre>`SELECT @nb_total := COUNT(*) FROM `ma_table` ;`</pre>
    **Note** : dans ce cas là, on préfixe l'opérateur `=` de `:` (deux points).

    ### Utilisation simple des variables

    L'utilisation première qui peut en être faite c'est d'assainir vos requêtes SQL en évitant au maximum l'apparition de variables issues d'autres langages.
    **Avant** :
    <pre>`SELECT * FROM `ma_table` WHERE colonne1 = {$variable1}, colonne2 = '{$variable2}' LIMIT 1;`</pre>
    **Après** :
    <pre>`SET @variable1 = {$variable1}, @variable2 = '{$variable2}';
    SELECT * FROM `ma_table` WHERE colonne1 = @variable1, colonne2 = @variable2 LIMIT 1;`</pre>
    Comme les variables sont effectives pour la connexion courante, une variable MySQL peut être réutilisée à tout moment. De quoi décomplexifier certains scripts pas forcément bien structurés.

    ### Utilisation complexe des variables

    **Les variables peuvent également être modifiées à même la requête**. C'est à dire qu'à chaque itération effectuée par MySQL, le moteur va réévaluer le contenu de la variable. J'ai notamment eu besoin de ça pour ajouter de nouveaux éléments à la suite d'autres tout en renumérotant leur ordre. Je souhaitais **éviter une boucle récursive en PHP** qui aurait occasionné de multiples requêtes.

    Je dispose d'une table (`item_liste`) avec plusieurs éléments, une clé primaire sur deux champs (`item_id` et `item_cat`) ainsi qu'un autre champ indexé permettant de les trier dans un ordre donné (`item_ordre`). Le but : prendre des éléments de la catégorie 1 pour les mettre à la suite de la catégorie 2.

    Voici en gros ce que ça donne au final :
    <pre>`SELECT @ordre := IFNULL(MAX(item_ordre), 0) FROM `item_liste` WHERE item_cat = 2 ;

    UPDATE `item_liste` SET item_ordre = @ordre := @ordre+1, item_cat = 2 WHERE item_cat = 1 ;

1.  On compte la borne supérieure de la catégorie 2\. Pourquoi un `IFNULL` ? Parce `MAX()` retournera `NULL` si un des `item_ordre` en contient un. C'est une sécurité ;
2.  On met à jour les éléments de la catégorie 1 avec leur nouvel ordonnancement et leur nouvelle catégorie.
**Alors pourquoi ça fonctionne** ? La commande `UPDATE` balaie les lignes **une par une** et du coup, **met à jour la variable `@ordre` à chaque ligne**. Nous retrouvons ainsi l'effet désiré : incrémenter chaque ligne déplacée dans la nouvelle catégorie.

Il existe des utilisations plus compliquées que celles-là mais je pense que c'est un bon départ pour se faire une idée de ce qui est faisable par ce biais là. L'imagination et les besoins feront le reste ;-)

[amazon-carrousel]d0a06165-3ed7-478a-9bf3-0ce760581b8a[/amazon-carrousel]
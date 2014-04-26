title: "MySQL : tris personnalisés et aléatoires"
id: 743
date: 2007-08-21 13:00:12
tags:
- logiciels libres
- MySQL
- optimisation
- order by
- tris
categories:
- WebDev
---

![Logo MySQL](/images/2007/08/powered-by-mysql-167x86.png)

La majorité des systèmes de bases de données permettent de trier une sélection de données en fonction de nos besoins, souvent de manière simple. La majorité des besoins courants impliquent des tris ascendants ou descendants (comprendre "par ordre alphabétique croissant ou descendant") sur une plusieurs colonnes (des dates, des titres ou des codes particuliers) mais de temps à autre, il arrive que les  besoins soient plus complexes puisque l'on voudra soit :

*   un **ordre aléatoire**
*   un **ordre bien précis**, ni ascendant ni descendant

<!--more-->

## Le mécanisme de tri (`ORDER BY`)

Pour bien comprendre comment fonctionne en détail la commande `ORDER BY`, je vous invite à lire la documentation concernant les [optimisations relatives à ORDER BY](http://dev.mysql.com/doc/refman/5.1/en/order-by-optimization.html). Ce que l'on doit en retenir :

1.  **le tri est effectué sur les données filtrées** par un éventuel `WHERE` ;
2.  **il y a 2 algorithmes de tri** : l'un utilisant _deux passes_, l'autre n'utilisant qu'_une passe_ mais davantage de mémoire ;
3.  l'algorithme en une passe n'est pas valable pour des tris sur des données de type `TEXT` ou `BLOB` ;
4.  **un tri sur un index est largement plus rapide** et plus performant que sur des valeurs non-indexées

Lorsqu'on veut trier des données, il vaut donc mieux _écrémer au mieux la plage de données_ grâce à de judicieux filtres `WHERE` et de préférence, sur des colonnes indexées.

Mais revenons à nos moutons.

## Tri aléatoire (`ORDER BY RAND()`)

**Deux solutions s'offrent au développeur pour effectuer un tri aléatoire** : recueillir les données voulues et les trier _via_ langage de programmation (`sort()`, `ksort()` etc.) ou alors trier directement à la source _via_ la base de données.
Si les bases de données portent leur nom, c'est bien parce qu'elles sont performantes dans leur travail donc autant leur laisser celui-là, celui du tri aléatoire, qui sera bien plus rapide et performant, surtout sur des volumes importants de données.

Cette solution est relativement connue, `ORDER BY RAND()` mélange les données recueillies de manière totalement aléatoire, sans tenir compte des index ni de quoi que ce soit d'autre. Pensez à utiliser une clause `LIMIT` si vous ne voulez récupérer qu'un nombre défini de lignes.

```sql
SELECT * FROM `ma_table` ORDER BY RAND() LIMIT 1 ;
```

Cette instruction prendra une ligne et une seule, au hasard. Rapide, concis et efficace.

## Tri personnalisé (`ORDER BY FIELD()`)

Pire que le tri aléatoire, il y a celui du tri personnalisé, celui qui n'est _ni_ ascendant, _ni_ descendant, _ni_ aléatoire : on veut un ordre précis. Imaginons que nous nous trouvions avec la table  suivante :

```html
<table class="code sql" border="0">
  <thead>
    <tr>
      <th>jour_id</th>
      <th>jour_nom</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>ven</th>
      <td>Vendredi</td>
    </tr>
    <tr>
      <th>lun</th>
      <td>Lundi</td>
    </tr>
    <tr>
      <th>dim</th>
      <td>Dimanche</td>
    </tr>
    <tr>
      <th>mer</th>
      <td>Mercredi</td>
    </tr>
    <tr>
      <th>sam</th>
      <td>Samedi</td>
    </tr>
    <tr>
      <th>jeu</th>
      <td>Jeudi</td>
    </tr>
    <tr>
      <th>mar</th>
      <td>Mardi</td>
    </tr>
  </tbody>
</table>
```

Comment faire pour récupérer la liste des jours de semaine dans l'ordre de notre choix ? Tout simplement en utilisant la [fonction FIELD()](http://dev.mysql.com/doc/refman/5.1/en/string-functions.html#function_field) (depuis MySQL 4) :

```sql
SELECT jour_nom
FROM `dates_semaine`
ORDER BY FIELD( _jour_id_, 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam', 'dim' ) ;
```

J'aurais tendance à dire que la requête parle d'elle-même : on spécifie un tri sur le champ _jour_id_ dans l'ordre passé dans les paramètres suivants.
Ce qui est intéressant dans notre cas c'est qu'on peut donc gérer des semaines débutant le jeudi, le samedi, le dimanche ou le lundi (histoire de coller avec tous les calendriers existants). Seuls les paramètres à donner à la requête changeraient.
C'est également intéressant pour **trier le résultat d'une requête en fonction de l'ordre des lignes d'un fichier** qui aurait été uploadé sur un serveur.

## Conclusion

La clause `ORDER BY` est plus puissante qu'il n'y paraît. **Elle est garante de l'ordre des résultats retournés**. Si dans certains cas l'ordre n'a pas d'importance, le contraire peut également être valable. Et c'est précisément dans ce cas que l'on aime à pouvoir manipuler les données comme on l'entend.
Il existe d'autres possibilités intéressantes en combinant par exemple le tri et les recherches _FULLTEXT_ pour **récupérer les lignes par ordre de pertinence** ou pourquoi pas sur des **résultats de calcul**.


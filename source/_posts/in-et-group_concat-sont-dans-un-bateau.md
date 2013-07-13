title: "IN() et GROUP_CONCAT() sont dans un bateau"
id: 550
date: 2007-04-09 13:00:31
tags:
- astuce
- MySQL
- optimisation
categories:
- Développement Web
---

Il m'arrive fréquemment d'avoir à sélectionner des lignes de données à partir d'un ou plusieurs critères. C'est le cas dès que l'on souhaite récupérer une liste. C'est également très pratique pour mettre à jour ces dites-lignes. Seulement voilà, des fois on pourrait éviter quelques boucles et quelques complications avec l'utilisation de deux fonctions magiques de MySQL : [IN()](http://dev.mysql.com/doc/refman/4.1/en/comparison-operators.html) et [GROUP_CONCAT()](http://dev.mysql.com/doc/refman/4.1/en/group-by-functions.html).
<!--more-->

## Sélection optimisée avec IN()

`IN()` devrait être utilisé dès lors que l'on a plusieurs critères sur un même colonne.
L'écriture suivante ne devrait pas apparaitre dans votre code :

```sql
SELECT * FROM `ma_table` WHERE id = 3 OR id = 5;
```

A la place, il devrait y avoir ceci :

```sql
SELECT * FROM `ma_table` WHERE id IN (3, 5);
```

C'est une habitude à prendre car elle permettra d'automatiser bien des choses. Imaginez qu'on ne fasse plus cette sélection "en dur" mais à partir d'un tableau PHP. Trois façons d'écrire la requête, vous verrez vite laquelle sera la plus pratique à réutiliser :

```php
$tableau = array(3, 5);

/* Méthode 1 : vite-fait mal fait */
$separateur = '';
$sql = "SELECT * FROM `ma_table` WHERE ";
foreach( $tableau as $id )
{
  $sql .= $separateur." id = ".$id;
  $separateur = ' OR ';
}

/* Méthode 2 : utilisation "optimisée" avec des OR dans la requête */
$sql = "SELECT * FROM `ma_table` WHERE id = ".implode(' OR id = ', $tableau);

/* Méthode 3 : passe-partout */
$sql = "SELECT * FROM `ma_table` WHERE id IN (".implode(',', $tableau).")";
```

Le gros avantage de la dernière méthode c'est le retraitement des données.
Il est facile et plus logique d'[imploser](http://fr.php.net/implode) et
d'[exploser](http://fr.php.net/manual/fr/function.explode.php) une chaine composée
de _séparateurs virgule_ (ou autre caractère employé aux mêmes fins).

```php
$tableau = array(3, 5);

$tableau = implode(',', $tableau);
/* du code nécessitant $tableau en tant que chaîne */

$tableau = explode(',', $tableau);
/* du code nécessitant $tableau en tant que tableau */
```

## Aggrégats avec GROUP_CONCAT()

Dans les exemples précédents, `$tableau` était rempli "en dur". Dans la vraie vie, ça ne se passe pas comme ça : on récupère des identifiants (clés et/ou index) pour valider les sélections. L'exemple basique : _on veut mettre à jour une table de configuration avec les ID d'articles présents dans une ou plusieurs catégories_.

```php
$tableau = array();

/* Sélection des ID */
$query = mysql_query("SELECT id FROM `ma_table` WHERE cat_id IN ('fromage', 'tortues');");
while( $ligne = mysql_fetch_assoc($query) )
{
  $tableau[] = $ligne['id'];
}

/* On met à jour notre table de configuration */
$tableau = implode(',', $tableau);
mysql_query("REPLACE INTO `table_config` (config_id, config_valeur) "."('cache_articles', '{$tableau}')");
```

C'est simple, propre et on se dit qu'on a bien bossé. Et pourtant, l'utilisation
de la fonction d'agrégation `GROUP_CONCAT()` de MySQL nous épargnera quelques lignes.
On appréciera :

```php
$tableau = array();

/* Sélection des ID */
$query = mysql_query("SELECT GROUP_CONCAT(id) AS cache_articles FROM `ma_table` WHERE cat_id IN ('fromage', 'tortues');");
$tableau = mysql_fetch_assoc($query);

/* On met à jour notre table de configuration */
mysql_query("REPLACE INTO `table_config` (config_id, config_valeur) "."('cache_articles', '{$tableau['cache_articles']}'");
```

Bref, on a gagné une boucle (le `while`), des lignes de résultats MySQL
(autant de ressources d'économisées) et un traitement PHP en moins (`implode`).
Et devinez quoi ? Le résultat retourné par le `GROUP_CONCAT`
s'intègre très bien dans le ... `IN()`.
title: "Ajouter les tags Wordpress dans une balise META"
id: 780
date: 2007-10-02 13:00:38
tags:
- logiciels libres
- plugin
- seo
- tags
categories:
- WebDev
- WordPress
---

![Logo Wordpress](/images/2008/05/wordpress-logo.png "Logo Wordpress")

[Alexandre Balmes est à la fois content et déçu des _tags_ de Wordpress](http://www.alexandrebalmes.fr/wordpress/wordpress-23-les-tags/) et pour cause, les nouvelles fonctions ajoutées ne permettent leur utilisation que dans [_the Loop_](http://codex.wordpress.org/the_Loop) (_la Boucle_, la boucle d'affichage du contenu de Wordpress).

Certes il y a des plugins qui produisent ce même effet ([All in One SEO](wordpress.org/extend/plugins/all-in-one-seo-pack/) par exemple) mais c'est un peu comme acheter une crémerie juste pour manger un bon coulant : _démesuré_.
<!--more-->

## L'idée

L'idée de départ est de collecter la liste des tags employés sur la page et de l'injecter dans une balise META nommé _keywords_. Wordpress est suffisamment bien fichu pour qu'on n'ait pas à tripatouiller son code.

On va donc décortiquer une **fonction qui sera appelée systématiquement sur toutes les pages contenant potentiellement des tags**, on aggrègera tout ça pour l'afficher dans l'entête de la page.

## Le code

En attendant que j'en fasse un plugin à part entière un peu plus modulable, voici la démarche technique employée.

[Tags : META keywords](https://gist.github.com/oncletom/5937716 "Tags : META keywords") : code est à copier/coller à la fin du fichier `functions.php` du thème employé sur votre installation de Wordpress.

```php
<?php
/*
 * Petite vérification qui évite :
 * - de générer une erreur le jour où une telle fonction est introduite
 * - d'utiliser des ressources inutiles (dans l'admin, pas besoin de générer de balise keyword)
 */
if (!function_exists('get_all_tags_meta') && !is_admin()) :

/**
 * get_all_tags_meta()
 *
 * Génère une entête META 'keywords' contenant les tags utilisés sur la page
 */
function get_all_tags_meta()
{
  global $posts;

  //$tags contiendra tous les tags trouvés par la suite
  //Il est tout à fait envisageable de la pré-remplir à la main ou via les options de Wordpress (get_option())
  $tags = array();

  //On sort de la fonction si :
  //- les posts n'existent pas (cas d'appel de fonction AVANT que the Loop soit effectuée
  //- il n'y a aucun post (erreur 404, recherche infructueuse, catégorie/tag vide etc.)
  if (!isset($posts) || empty($posts))
  {
    return false;
  }

  //On boucle sur chaque post disponible pour en extraire les tags
  for ($posts_length = count($posts), $i = 0; $i < $posts_length; $i++)
  {
    //Comme il peut y avoir un ou plusieurs tag par post, là encore on boucle
    //Les tags ne sont pas directement stockés dans $posts, il faut passer par l'API de taxinomie (wp_includes/taxonomy.php)
    foreach (get_object_term_cache( $posts[$i]->ID, 'post_tag' ) as $tag)
    {
      $tags[] = $tag->name;
    }
  }

  //Dédoublonnage du tableau final
  $tags = array_unique($tags);

  //On n'affiche l'entête que si elle n'est pas vide, voilà tout
  if (!empty($tags))
  {
    printf('<meta name="%s" content="%s" />', 'keywords', implode(', ', $tags));
  }
}

//On exécute la fonction sur le hook wp_head()
//On pourrait le faire sur wp_foot mais cette fonction n'est pas systématiquement incluses (à tort) sur tous les thèmes
add_action('wp_head', 'get_all_tags_meta');

endif;
```
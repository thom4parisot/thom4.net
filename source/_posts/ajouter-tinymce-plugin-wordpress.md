title: "Ajouter TinyMCE dans un plugin WordPress"
id: 1297
date: 2009-02-03 07:00:39
tags: 
- api
- code
- firebug
- Javascript
- logiciels libres
- plugin
- tinymce
categories: 
- Développement Web
- WordPress
---

[![WordPress Logo](https://oncletom.io/images/2009/04/wordpress-badge-138x138.png "WordPress Logo")](https://oncletom.io/images/2009/04/wordpress-badge.png)

J'ai eu besoin récemment d'inclure un éditeur visuel dans un plugin Wordpress. Je pensais que c'était une tâche aisée sans chercher sur Google : il n'y avait qu'à faire comme les développeurs de Wordpress !

J'ai pensé à tort et ça m'a confirmé une fois de plus que le code source de Wordpress était un joyeux bazar.
<!--more-->

### Le besoin

Mon besoin était tout bête : sur une seule page de mon plugin, j'avais besoin de transformer un bête champ texte en éditeur avancé avec possibilité d'uploader des images et tout ça.

Avec ce simple besoin, j'ai cependant constaté :

1.  qu'il était **pénible** de remonter le cheminement logique de l'éditeur jusqu'à l'inclusion des scripts
2.  qu'il n'y a **pas de façon standard** d'ajouter l'éditeur : il y a bien une fonction `wp_tiny_mce` mais elle ne fait pas tout ... c'est à dire que sans inclure ses dépendances (non documentées), cette fonction n'est d'aucune utilité
3.  qu'on trouve **à boire et à manger** dans le code de Wordpress. Pour le <cite>code is poetry</cite>, on est plutôt proche du SMS kikoololesque
Après avoir trouvé ma solution, je suis cependant tombé sur un [article expliquant comment inclure TinyMCE dans Wordpress](http://blog.zen-dreams.com/fr/2008/11/06/how-to-include-tinymce-in-your-wp-plugin/). Elle est juste mais nous verrons que seule la moitié du chemin a été faite avec.

### La solution

    &lt;?php
    add_action('admin_menu', 'include_tinymce');

    function include_tinycme()
    {
      add_action('admin_head', 'wp_tiny_mce');
      wp_enqueue_script('jquery-ui-core');
      wp_enqueue_script('jquery-ui-tabs');
      wp_enqueue_script('editor');
      wp_enqueue_script('media-upload');
      add_thickbox();
    }`</pre>
    Plusieurs remarques par rapport à ce code :

*   **Le choix de l'action**
    Le mien s'est porté sur _admin_menu_. Vous pourriez en choisir une autre, du moment qu'elle s'exécute _avant_ admin_head. J'ai choisi celle-là parce que c'est là que j'y construis les menus de l'administration : WordPress est initialisé et n'a pas encore été affiché.
*   **Le choix wp_enqueue_script**
    J'aurais pu caller cette fonction en tant que filtre de `admin_head` et utiliser la fonction `print_script` MAIS je soupçonne cette dernière fonction de ne pas vérifier si un autre script du même nom a été inclus.
    J'ai choisi de ne pas créer de conflit : `wp_enqueue_script` ne chargera qu'1 fois et 1 seule le script nommé. Pas de chichi.
*   **L'inclusion de l'éditeur**
    Pour afficher l'éditeur, il suffira d'appeler la fonction `the_editor()` en lieu et place de son `textarea`. Vous noterez toutefois que vous serez obligé(e)s de nommer l'éditeur _content_ sous peine de devoir ajouter quelques filtres supplémentaires.
    Après à vous de vous débrouiller avec l'architecture de votre plugin. Personnellement j'ai tout basculé dans des classes depuis un bon moment pour éviter tout conflit de nom.

    ### La solution optimisée

    Cependant ne crions pas victoire si vite : avec ce qu'on a fait, nous avons juste réussi à inclure TinyMCE sur _toutes_ les pages de l'admin WordPress. Ce n'est pas ce que je recommanderai pour deux raisons :

1.  le respect des performances utilisateurs : charger 150Ko de JavaScript pour rien sur une page sans TinyMCE, c'est du gâchis
2.  on ne fait pas une généralité pour une exception
    Heureusement pour nous WordPress est _bien fichu_ car il nous fournit 2 variables globales (*hm*) d'exception :

*   **$plugin_page**
    Cette variable contient le nom de la page renseignée par les méthodes `add_management_page()` et `add_options_page()`. On aurait pu passer directement par [admin_print_script*](http://codex.wordpress.org/Plugin_API/Action_Reference) mais il faisait flemme d'ajouter une fonction de plus.
    Exemple :
    <pre>`&lt;?php
    add_management_page('Titre', 'Label', 8, 'test_management_page', 'mon_callback');
    //$plugin_page vaudra 'test_management_page'`</pre>
*   **$pagenow**
    Cette variable contient le nom du fichier actuellement exécuté.
    Si vous vous trouvez sur <kbd>wp-admin/tools.php?page=test_management_page</kbd>, `$pagenow` vaudra `tools.php`
    Avec ces deux variables, on est capable de charger ce qu'on veut, où on veut et quand on veut.

    Au final, ça nous donnerait ceci :
    <pre>`&lt;?php
    add_action('admin_menu', 'include_tinymce');

    function include_tinycme()
    {
      global $plugin_page;
      if ($plugin_page === 'test_management_page')
      {``
        add_action('admin_head', 'wp_tiny_mce');
        wp_enqueue_script('jquery-ui-core');
        wp_enqueue_script('jquery-ui-tabs');
        wp_enqueue_script('editor');
        wp_enqueue_script('media-upload');
        add_thickbox();`
    `  }
    }

Là on a bien terminé le travail.

### Conclusion

Il n'y a au final pas grand chose à chose à ajouter pour disposer de TinyMCE. Encore faut-il le savoir.

On peut cependant regretter le manque de flexibilité de cette manipulation :

*   j'ai definé la liste des fichiers en cherchant les noms de fonctions JavaScript manquantes (merci Firebug et l'affichage des exceptions en console)
*   la liste des dépendances de `wp_enqueue_script` n'est absolument pas complète : _editor_ devrait appeler _wp_tiny_mce_ et _media-upload_ (voire _jquery-ui-*_)
Un jour WordPress nettoiera son code pour faciliter la maintenance ...
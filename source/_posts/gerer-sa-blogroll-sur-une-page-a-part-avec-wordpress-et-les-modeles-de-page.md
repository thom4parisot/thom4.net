title: "Gérer sa blogroll sur une page à part avec Wordpress et les modèles de page"
id: 909
date: 2008-05-13 07:00:03
tags: 
- astuce
- blog
- blogroll
- cms
- logiciels libres
- template
categories: 
- Développement Web
- WordPress
---

![Logo Wordpress](https://oncletom.io/images/2008/05/wordpress-logo.png "Logo Wordpress")

J'ai récemment lu une astuce pour afficher sa blogroll sur une page à part et ça m'a donné envie de réagir à la solution proposée.

**Gérer sa blogroll sur une page dédiée est une bonne idée** car ça évite de surcharger inutilement ses barres latérales de liens, surtout s'ils sont nombreux. Cette séparation permet également d'avoir davantage de liberté pour les présenter et les styler. Ce n'est pas un mal pour apporter un souffle d'originalité.

<!--more-->

En revanche la solution du copié/collé n'est pas à mes yeux une _véritable solution_ car :

*   soit on gère sa blogroll dans le module de blogroll et on doit systématiquement copier/coller le résultat dans une page
*   soit on gère directement la blogroll dans la page dédiée ; le module de gestion perdant alors totalement son intérêt
Je suis feignant donc je n'aime pas faire le travail 2 fois alors je propose une solution qui fonctionnera chez vous. C'est d'ailleurs celle que j'emploie depuis la refonte de ce blog ... c'est à dire bientôt 1 an.

### Les modèles de page Wordpress

Il existe peu de différences entre une page et un article dans Wordpress :

*   les **articles sont datés**, n'ont pas de hiérarchie et peuvent être dans 1 ou plusieurs catégories
*   les p**ages ne le sont pas datées**, ont une hiérarchie et ne peuvent pas être dans une catégorie
Les pages possèdent également un autre atout : **on peut leur appliquer un modèle de présentation**. Cette pratique est adaptée à toute présentation où vous souhaiteriez afficher davantage que le seul texte saisi depuis l'interface d'administration.

La notion des [templates de pages](http://codex.wordpress.org/Pages#Page_Templates) est bien expliquée dans le [Codex Wordpress](http://codex.wordpress.org). Petit rappel synthétique néanmoins.

Un template de page correspond à un fichier créé dans le répertoire du thème de votre choix (celui que vous utilisez de préférence). Autrement dit ça correspond à un fichier comme ceci : `wp-content/themes/&lt;votre thème&gt;/&lt;votre template&gt;.php`.

Ce fichier de template doit obligatoirement comporter une entête de description. Sans elle, pas de sélection possible depuis la page de rédaction. Cette entête doit correspondre à ceci :

    &lt;?php
    /*
    Template Name: &lt;Nom du template&gt;
    */`</pre>
    La dernière étape avant son utilisation consiste à tapoter un peu de code PHP pour aboutir à votre souhait. N'hésitez pas à parcourir la [documentation de Wordpress](http://codex.wordpress.org) pour produire un code pérenne et utiliser au maximum les [fonctionnalités proposées par Wordpress](http://codex.wordpress.org/Function_Reference).

    ### Un modèle de page Wordpress pour Blogroll

    Notre besoin initial tombe à point nommé puisque nous avons justement besoin d'un template de page pour gérer sa blogroll depuis son module d'administration sans avoir à mettre à jour manuellement quelconque autre page que ce soit ;-)

    La première étape consiste à créer un nouveau template dans le thème employé par votre blog. Si vous utilisez le thème de base, le thème default, nous allons créer le fichier suivant :
    wp-content/themes/default/template-blogroll.php.

    Pour remplir ce fichier, nous allons devoir accéder aux éléments contenus dans la blogroll. Ça tombe bien puisqu'il existe pour ça la fonction [wp_list_bookmarks()](http://codex.wordpress.org/wp_list_bookmarks).
    À ce stade, notre template devrait ressembler à ça :
    <pre>`&lt;?php
    /*
    Template Name: Liens
    */

    get_header() ?&gt;
    &lt;h2&gt;&lt;?php the_title() ?&gt;&lt;/h2&gt;
    &lt;?php the_content() ?&gt;

    &lt;ol id="page-blogroll"&gt;
      &lt;?php **wp_list_bookmarks()** ?&gt;
    &lt;/ol&gt;
    &lt;?php get_sidebar() ?&gt;
    &lt;?php get_footer() ?&gt;

Une fois enregistré, le modèle apparaît dans le sélecteur de modèle (uniquement sur les contenus de type _Page_) :

![Wordpress Template Selector](https://oncletom.io/images/2008/05/wordpress-template-selector.png "Wordpress Template Selector")

Ça y'est, vous avez votre page dédiée aux liens sans travail de recopie supplémentaire.

### Un modèle imparfait

Attention toutefois puisque créer un modèle signifie que **Wordpress ne va utiliser QUE ce modèle** pour la présentation. Autrement dit il va falloir toute reproduire jusqu'au titre de la page si vous le désirez.

L'exemple ci-dessus est minimaliste à ce sujet pour la simple et bonne raison que **le balisage dépendra uniquement du thème employé**. Ça explique pourquoi les modèles sont à définir au cas par cas.

Pour bien reproduire le thème, plusieurs possibilités :

*   _vous vous débrouillez_ vous-même pour comprendre comment est construit l'affichage du thème
*   vous _connaissez quelqu'un_ qui se débrouille avec Wordpress et vous lui demandez de le faire (pas la peine de me demander)

### Conclusion

Les modèles de page (ou templates) est une fonctionnalité assez méconnue mais pourtant ô combien utile pour les utilisations suivantes :

*   utilisation tournée CMS
*   affichage différent pour certaines pages uniquement, sans vouloir créer un thème spécifique
*   création de pages plus riches allant au-delà de la simple présentation de contenu rédigé
Si vous vous débrouillez bien, vous aurez un résultat comme sur ma page de liens, [les liens de l'Oncle Tom](https://oncletom.io/liens/).
Et n'oubliez pas, dès que vous pensez "spécifique", pensez **modèle de page** ;-)
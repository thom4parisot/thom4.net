title: "Modifier du HTML à la volée de manière non intrusive"
id: 769
date: 2007-09-10 13:00:55
tags:
- bonnes pratiques
- css
- dom
- html
- jquery
- xpath
categories:
- Accessibilité
- Développement Web
- Standards du Web
---

![Javascript](https://oncletom.io/images/2007/09/javascript.png)

[Lors de la refonte de ce blog](https://oncletom.io/2007/07/27/blog-nouveau-look/), j'ai concocté un petit script JavaScript (non intrusif bien entendu) affichant et modifiant le contenu d'un bandeau sous la forme d'une classe statique reponsant sur [jQuery](http://jquery.com/). J'explique aujourd'hui comment ces 48 petits lignes de code (en comptant commentaires, sauts de lignes et accolades) fonctionnent, comment il est aisé de mettre en place de telles routines de manière intelligente, souple et non intrusive.

Et comme l'indique le slogan de <cite>jQuery</cite> : <q>Write less, do more</q>.

<!--more-->

### Le besoin

Avant de se lancer tête baissée dans le code, **prenons le temps d'exprimer avec des mots ce que l'on aimerait faire**.

On souhaite disposer d'une **liste de liens**. **Lors d'un clic** sur un lien de cette liste, l'**encart correspondant doit s'afficher** pour illustrer davantage son sens. Eventuellement, lorsque l'on **reclique sur ce même lien**, le visiteur est transporté sur la page en question.

J'ai grassé les mots importants de ce besoin. Vous le verrez par la suite, ils vont régir le comportement du script.

### La structure HTML

Nous allons donc nous retrouver avec trois grosses parties dans le code :

*   **la liste de liens**, une balise `ul` semble toute indiquée)
*   **une liste de textes correspondants**, il n'a pas lieu d'être visible pour l'utilisateur final concerné par le code
*   un **bloc conteneur neutre** destiné à recevoir les textes d'enrichissement de manière visuelle

Des mots au code, voici ce que donnerait la structure balisée :

```html
<body>
<!-- (...) -->

  <div id="conteneur_cible"></div>

  <!-- (...) -->

  <ul id="liens_etendus">
    <li><a href="page1.html" class="page1">Page 1</a></li>
    <li><a href="page2.html" class="page2">Page 2</a></li>
    <li><a href="page3.html" class="page3">Page 3</a></li>
  </ul>

  <!-- (...) -->

  <div id="conteneur_source">
    <h2>Titre</h2>
    <p>Texte explicatif apportant de la cohérence aux utilisateurs dépourvus de JavaScript et d'interprétation des feuilles de style.</p>

    <ul>
      <li class="page1">Texte page 1</li>
      <li class="page2">Texte page 2</li>
      <li class="page3">Texte page 3</li>
    </ul>
  </div>

<!-- (...) -->
</body>
```

**L'ordre de la structure importe peu** mais dans tous les cas, leur position dans le flux HTML dépend avant tout de leur importance au sein de celui-ci. De manière générale, **il vaut mieux disposer le contenu principal tout en haut du flux et le faire suivre par le contenu secondaire** tels que les menus de navigation et les textes supplémentaires.
Je pense que le code parle de lui-même, posez vos questions en commentaires si jamais il y a besoin d'explications plus poussées.

Côté HTML tout est réglé avec ceci. **Il ne restera éventuellement que du travail de stylage pour lui donner une apparence plus conviviale**.
Vous remarquerez qu'il n'y a aucune mention à du JavaScript à l'intérieur de ce code et ce sera le cas jusqu'au bout. C'est tout l'intérêt de séparer fond et forme et donc, du **JavaScript non intrusif**.

### Le code Javascript

J'ai pris la décision d'écrire ce code pour _jQuery_ car cette bibliothèque (ou _framework_) est embarquée dans Wordpress et réduit drastiquement la quantité de code à écrire pour produire des résultats.

Dans la pratique, le code va se charger dès que possible (c'est à dire dès que le <acronym title="Document Object Model">DOM</acronym> est prêt) et exécutera une méthode en se servant des paramètres prédéfinis ou passés manuellement à la classe. Le code suivant est structuré et suffisamment commenté pour le comprendre sans trop de difficulté. J'expliquerai en-dessous sa logique :

```javascript
/*////////////////////////////////////////
// Classe statique 'oncletom_text_grabber'
// # Permet d'afficher un slide d'informations en cliquant sur un lien
// # C'est rigolo et en plus ça sert à quelque chose
// @ parametres (objet, optionnel) : objet de clé:valeur paramétrant le comportement
////////////////////////////////////////*/
function oncletom_text_grabber()
{
  var parametres = arguments.length == 1 &amp;&amp; typeof arguments[0] == 'object' ? arguments[0] : {};

  //Paramétrage de la fonction
  //# permet un lancement de la classe avec un paramétrage par défaut
  parametres.source = typeof parametres.source == 'undefined' ? '#conteneur_source > ul > li' : parametres.source;
  parametres.bindto = typeof parametres.bindto == 'undefined' ? '#liens_etendus a' : parametres.bindto;
  parametres.target = typeof parametres.target == 'undefined' ? '#conteneur_cible' : parametres.target;

  /*////////////////////////////////////////
  // Méthode publique 'ot_text_caller'
  // # Récupère le contenu associé à l'attribut 'rel'
  // # Méthode à appeler sur un évènement
  ////////////////////////////////////////*/
  function ot_text_caller()
  {
    //sélection de l'élément à récupérer
    var id = $(this).attr('class');

    //hop ! on vérifie c'est déjà ouvert. Auquel cas le lien redevient cliquable
    if( $( parametres.target ).attr('class') == id )
    {
      return true;
    }

    //on nettoie le contenu de la destination
    $( parametres.target ).empty();
    $( parametres.target ).attr({ 'class' : '' });

    //on remplit la destination avec le bon contenu
    //on le fait en utilisant une expression régulières pour récupérer l'élément voulu
    $( parametres.target ).fadeIn( 'slow' ).append(  $( parametres.source+"."+id ).html() ).toggleClass( id );

    //évite que le lien soit cliqué
    return false;
  }

  //On greffe les différentes méthodes
  $( parametres.bindto ).click( ot_text_caller );
}

//exécution automatique de fonctions au lancement du document
$( oncletom_text_grabber );

//FACULTATIF
//pour assigner une deuxième liste de liens, il suffirait d'écrire le code ci-contre, par exemple :
//tous les paramètres non renseignés prennent la valeur par défaut de la classe
$( function(){ oncletom_text_grabber({ 'target' : '#nouveau_conteneur_cible', 'bindto' : '#exemple_entete ol a[@rel]', 'source' : '#liste_source2' }); } );
```

1.  Dans un premier temps, je m'applique toujours à pouvoir **proposer une utilisation de la classe sans avoir à fournir de paramètre lors de son appel**. C'est un côté pratique qui permet en plus de documenter les différentes options possibles. Ces options correspondent aux différents [sélecteurs jQuery](http://docs.jquery.com/DOM/Traversing/Selectors) dont on aura besoin par la suite ;
2.  Dans un deuxième temps, je déclare une méthode interne à la classe. _La cascade des accolades_ fait qu'elle n'est accessible que depuis la classe. Cette méthode sera assignée à l'évènement `onclick` de tous les éléments concernés par `parametre.bindto`. En clair, des liens hypertextes. Le `this` y fait référence.
  1.  On stocke dans la variable interne `id` le nom de la classe. En effet, la classe du lien permet de récupérer le bon texte dans el conteneur source (`parametre.source`),
  2.  On vérifie que le conteneur cible ne porte pas le même nom de classe : si oui, on suit le lien, si non, on affiche d'abord le texte complémentaire (la suite),
  3.  Le passage le plus délicat consiste à extraire ce qu'il faut et le placer où il faut. Heureusement jQuery dispose de deux fonctions magiques : `append()` et `html()`. La première rajoute du HTML à la suite du sélecteur tandis que la deuxième extrait le HTML par sélection. Le fonctionnement en chaîne de jQuery permet de réaliser tout ceci en une ligne,
  4.  Pourquoi un `return false;` pour terminer ? Tout simplement pour éviter que le lien hypertexte contenu dans l'attribut `href` du lien soit suivi.
3.  Dans un troisième temps, on assigne la méthode déclarée juste avant. A chaque clic de chaque élément, elle sera appelée et surtout, aura accès à tous les paramètres de la classe ;
4.  Enfin, après avoir clôturé la classe, on l'exécute dès que le DOM est chargé.

### Conclusion et résultat

Pour que ce code soit effectif, il faut bien évidemment l'insérer à même la page ou bien en appelant un script externe (cette méthode est recommandée justement pour dissocier fond et forme). Il faut aussi penser à inclure jQuery dans votre page sans quoi le compilateur JavaScript va tirer la tête.

Pour résumer, je résume la pensée des **bonnes pratiques du JavaScript non intrusif**, prouvant si besoin en était que JavaScript est loin d'être le Diable :

1.  définir sa structure HTML
2.  styler le HTML
3.  ajouter le JavaScript en surcouche

Ainsi, **on ne pénalise personne** (y compris en cas d'erreur de programmation), **on conserve un code lisible** tout en **facilitant sa réutilisation** dans un autre document.

[amazon-carrousel]fc64116b-6b59-444b-b4ee-074a4adecf57[/amazon-carrousel]
title: "jQuery : optimiser l'utilisation des sélecteurs CSS"
id: 832
date: 2007-12-18 08:00:02
tags:
- bonnes pratiques
- css
- css 3
- framework
- jquery
- optimisation
- performances
categories:
- Développement Web
cover: /images/2007/12/jquery-logo.png
---

[JQuery](http://jquery.com) est une formidable librairie JavaScript car elle offre une grande souplesse et une utilisation simple. **Il est cependant important de bien comprendre son fonctionnement** pour éviter les débordements liés à une joie mal maîtrisée.
S'il est très facile d'utiliser les sélecteurs CSS de jQuery, je constate de ci de là que leur utilisation n'est pas toujours optimale ... quand elle l'est déjà un tant soit peu.

Alors on se retrousse les manches et c'est parti pour un petit **cas pratique sur les sélecteurs CSS** jQuery, plus une petite récap' pour grapiller du temps et des lignes de code ;-)
<!--more-->

## Le cas pratique

J'ai pensé à une chose : plutôt que vous papillonniez en lisant cet article, j'ai fait en sorte que vous puissiez y prendre part. JQuery est très divertissant - certainement plus que votre voisine d'en face - alors tant qu'à me lire, autant optimiser la compréhension ;-)
Pour cela il vous faut 2 choses :

1.  un [bac à sable HTML / jQuery](/images/2007/12/sandbox-oncletom-20071217.htm "Sandbox HTML / jQuery") concocté par mes soins
2.  l'inévitable [extension Firebug](https://addons.mozilla.org/fr/firefox/addon/1843) pour bénéficier d'une console digne de ce nom (entre autre)

## Principe de la sélection CSS de jQuery

Que celui qui s'est lancé corps et âme dans jQuery sans lire la [documentation](http://docs.jquery.com/Selectors "documentation jQuery") lâche un com' ! Elle est suffisamment complète pour éviter la plupart des questions du genre <q>comment je fais pour ...</q>.

Maintenant que vous avez le document en main, nous allons jouer avec jQuery pour récupérer ce que nous voulons. Les personnes n'ayant pas Firebug comprendront la logique du code sans même avoir à le regarder :

```javascript
// Récupération du premier paragraphe
$('body p:first-child');

// Récupération du nœud des continents
$('ul.continents');

// Récupération de la liste des capitales
$('.capitale');

// Récupération du dernier élément du body
$('body :last');

// Compter le nombre de pays
$('.pays > li').length;
```

Magique non ?

## Comprendre la sélection CSS de jQuery

Les résultats sont propres mais n'est pas parce que ça marche que c'est bien. La preuve, tous les exemples ci-dessus ne sont pas du tout optimisés.
Alors **comment savoir si un sélecteur est optimisé** ou pas ? La réponse n'est pas systématique car elle dépend exclusivement de votre rigueur et du <acronym title="Document Object Model">DOM</acronym> à interroger. Plus il sera touffu et plus votre sens aigü de la performance sera sollicité.

Reprenons les exemples ci-dessus pour le transposer en JavaScript _old-school_. C'est le meilleur moyen de sentir le piège ... ou pas.

```javascript
// Récupération du premier paragraphe
$('body p:first-child');
// équivaut à
document.getElementsByTagName('body')[0].getElementsByTagName('p')[0];
```

Il y a 2 erreurs dans cette sélection :

1.  sélectionner `body`. `getElementsByTagName()` oblige à parcourir tous les nœuds du document (1000 s'il y en a 1000) alors qu'on n'en veut qu'un ... et qu'il ne peut y en avoir d'un ;
2.  on sélectionne ensuite tous les `p` du body. Autant le faire dès la première fois car là encore c'est tous les nœuds contenus dans `body` qui sont parcourus ... y compris l'énorme liste à puces !

```javascript
// Récupération du nœud des continents
$('ul.continents');
// équivaut à
var continents = [];
var el = document.getElementsByTagName('ul');
for (i in el)
{
  if (el[i].className.match(/(^| )continents( |$)/);
  {
     continents.push(el[i]);
  }
}
```

La sélection est ici trop générique. On voit bien que l'on est obligé de charger tous les éléments `ul` du DOM pour les filtrer.

```javascript
// Récupération de la liste des capitales
$('.capitale');
// équivaut à
var capitales = [];
var el = document.getElementsByTagName('*');
for (i in el)
{
  if (el[i].className.match(/(^| )capitale( |$)/);
  {
     capitales.push(el[i]);
  }
}
```

C'est probablement la dernière chose à faire. Cassez les genoux de toute personne écrivant un tel sélecteur : il mérite d'animer le BigDill rien de plus !
Dans ce cas de figure, c'est TOUT le DOM qui est chargé (75 éléments) pour ensuite boucler sur un filtre. Cette boucle n'est pas optimisée mais ce n'est pas ce que l'on souhaite travailler aujourd'hui ;-)

```javascript
// Récupération du dernier élément du body
$('body :last');
// équivaut à
var el = document.getElementsByTagName('body')[0].lastChild;
```

Comme dans le premier cas, le `document.getElementsByTagName()` charge tout le DOM pour le filtrer, ne récupérer que le premier élément et, seule opération non coûteuse, utiliser son dernier enfant.
Ce n'est pas la pire des exemples mais là encore on peut optimiser les choses.

```javascript
// Compter le nombre de pays
$('.pays > li').length;
// équivaut à
var pays = 0;
var el = document.getElementsByTagName('*');
for (i in el)
{
  if (el[i].className.match(/(^| )pays( |$)/);
    {
      var continent = el[i];
      for (j in continent.childNodes)
      {
        pays += continent.childNodes[j].nodeName == 'li' ? 1 : 0;
      }
    }
  }
}
```

Un sélecteur par classe ne devrait être qu'un cas extrême, quand on ne peut se fier à une balise donnée. Car de manière générale, le `getElementsByTagName('*')` est à bannir. Charger tout le DOM est une folie furieuse.
La bonne idée ici est l'utilisation du symbole `>`. Cela se traduit par `.childNodes` et nous verrons plus bas pourquoi c'est mieux.

## Et maintenant, optimisons

S'il fallait **résumer l'optimisation en 3 points**, voici ce que je donnerai :

1.  jamais de sélecteur vague
2.  toujours un ID (#<ID>) en tête de sélecteur
3.  utiliser au maximum les objets natifs (`firstChild`, `childNodes` etc.) : ils évitent d'interroger tout le DOM

**L'ennemi des sélecteurs CSS ce sont les boucles**. Plus elles ont à brasser d'éléments,
plus elles sont longues. `getElementsByTagName()` cache une boucle : JavaScript scanne
tout le DOM pour trouver un nœud ayant un `tagName` correspondant.

**S'il faut l'utiliser, c'est en aval d'un sélecteur ayant déjà trié une bonne partie du document.**

**Votre meilleur ami est `getElementById()`**. Comme son nom l'indique il ne retourne qu'un seul élément et surtout, il est incroyablement rapide. Utilisez-le dans un maximum de cas mais attention tout de même : trop d'ID nuit à la structure du document le rendant ainsi trop rigide.
Il en est de même du parcours des objets natifs des nœuds du DOM. Cela signifie que dès que vous changer la tête de votre HTML, le JavaScript peut en pâtir.

Des fois **il faudra faire quelques concessions de performances pour éviter de réécrire votre code** au moindre changement ... ou parce que la génération est dynamique et difficilement maîtrisable.

Grâce à ces informations, nous pouvons reprendre nos exemples mais de manière optimisée :

```javascript
// Récupération du premier paragraphe
$('body p:first-child');
// version optimisée
$('#sandbox > p:first');

// Récupération du nœud des continents
$('ul.continents');
// version optimisée
$('#geoliste');

// Récupération de la liste des capitales
$('.capitale');
// version optimisée (mais fortement liée à la structure du document)
$('#geoliste > li > ul ul > li.capitale');

// Récupération du dernier élément du body
$('body :last');
// version optimisée
$('#sandbox :last');

// Compter le nombre de pays
$('.pays > li').length;
// version optimisée (mais liée à la structure du document)
$('#geoliste > li > ul > li').length;
```

## Évitons les doublons : chaînons !

Les CSS c'est un peu fatiguant alors terminons sur une autre utilisation de jQuery parfois sous-employée à cause d'un manque de compréhension : les chaînes. jQuery renvoie des objets et permet de réutiliser/filtrer les résultats avec un seul sélecteur.

Voici un extrait de code largement optimisable :

```javascript
$('#intro').addClass('jevaisdisparaitre');
$('#intro').append(' <strong>Je vais disparaître</strong>.');
$('#intro code').html('Goodbye World');
$('#intro').css('cursor', 'pointer');
$('#intro').one('click', function(){ alert("Bye bye"); $(this).remove(); });
```

Tout est correct sauf qu'on répète plusieurs fois le même sélecteur au lieu d'utiliser la chaîne disponible. jQuery optimise la sélection d'un élément déjà sélectionné au préalable mais n'empêche, au lieu d'interroger 5 fois `#intro`, nous n'allons plus le faire qu'une seule fois :

```javascript
$('#intro')
  .addClass('jevaisdisparaitre')
  .append(' <strong>Je vais disparaître</strong>.')
  .one('click', function(){
    alert("Bye bye");
    $(this).remove();
  })
  .children('code')
  .html('Goodbye World');
```

Tout se suit jusqu'à la fonction `children()` qui modifie le sélecteur de départ et applique la suite de la chaîne à cette nouvelle sélection.
Une autre optimisation consiste à déplacer la déclaration CSS `cursor` dans la classe `.jevaisdisparaitre` de l'hypothétique feuille de style. **Essayez de dissocier au mieux fond et forme** : ça évite _BEAUCOUP_ de modifications de code pour des ajustements esthétiques.

## Conclusion

**Optimiser ses sélecteurs n'est finalement pas si difficile que ça quand on comprend comment fonctionnent les rouages internes**. Il est évident que les gains peuvent être minimes sur de petites pages. Il s'agit cependant d'une gymnastique à maîtriser : ce n'est pas en arrivant sur de gros volumes qu'il faudra apprendre à sélectionner proprement.

Et comme <q>les petites rivières font les grands fleuves</q>, ces petites économies pourraient vous sauver la vie sur des applications full-AJAX ou qui sait, quand vous travaillerez chez Netvibes ;-)

[amazon-carrousel]fc64116b-6b59-444b-b4ee-074a4adecf57[/amazon-carrousel]
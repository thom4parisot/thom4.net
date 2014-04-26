title: "Menu déroulant en rollover semi-accessible avec jQuery"
id: 919
date: 2008-06-10 07:00:50
tags:
- bonne pratique
- css
- ergonomie
- jquery
- logiciels libres
- rollover
- xhtml
categories:
- a11y
- WebDev
cover: /images/2007/12/jquery-logo.png
---

Joie : je fais maintenant partie de [Planète Accessibilité](http://planete-accessibilite.com/) en plus de [Planet Libre](http://www.planet-libre.org/). C'est l'occasion pour ce premier article dédié d'allier à la fois logiciels libres et accessibilité pour le plus grand bien du Web ;-)

Le but de cette explication sera de **développer la méthode et le raisonnement** pour mettre en place un menu en rollover accessible. La difficulté tient essentiellement au fait que tout élément masqué par le biais des CSS est masqué pour de nombreux clients Web.

Nous verrons aussi pourquoi il est **important de dissocier la présentation et les artifices graphiques** grâce à une dégradation propre du JavaScript. Nous utiliserons pour cela [jQuery](http://jquery.com), [ma librairie JavaScript favorite](https://oncletom.io/tag/jquery/).

<!--more-->

## Buts et objectifs de l'exercice

J'ai eu besoin d'appliquer cette technique sur le site [Emu Nova](http://www.emunova.net). Je souhaitais plusieurs choses :

*   disposer d'un menu en rollover en haut de page (facilite la navigation sur toutes les pages)
*   placer le contenu avant les menus dans le flux HTML de la page (améliore le référencement)
*   une navigation possible sans JavaScript (pour cause de bug ou autre)

Autrement dis, j'ai besoin d'un **contenu en fin de flux mais visible avant tout le reste**. J'ai opté pour la solution JavaScript pour éviter un positionnement absolu pénible à gérer (pour cause de conteneur centré) mais aussi pour respecter le [colonnage de Blueprint](http://code.google.com/p/blueprintcss/) (puis toutes façons j'ai raison :-P)

En une image, cela se résume ainsi :

[![Tentative de menu accessible](/images/2008/06/emunova-menu-accessible-150x300.png "Tentative de menu accessible")](/images/2008/06/emunova-menu-accessible.png)

Nous allons aborder les 3 phases de ce tracé de flèche :

1.  la construction du menu (la zone verte)
2.  le déplacement du contenu (la flèche)
3.  la construction de notre nouveau menu (la zone bleue)

## Étape 1 : construire le menu en HTML

C'est l'étape essentielle. De sa structure dépend le reste de l'application. On doit **d'abord penser à présenter le contenu de manière dégradée**. C'est ainsi que le verront les utilisateur et c'est important de penser d'abord au pire des cas avant de mettre en place les paillettes et les artifices.

![Menu accessible (Étape 1)](/images/2008/06/menu-accessible-etape-1.png "Menu accessible (Étape 1)")

Cette structure est représentée ainsi en HTML :

```html
<div id="contenu-secondaire">
  <ul id="navigation">
    <li class="first column span-6">
      <h2>Actualités</h2>
      <ul>
        <li><a href="...">Actualités</a></li>
        <li><a href="...">Newsletter</a></li>
        <li><a href="...">Flux RSS</a></li>
        <li><a href="...">Twitter</a></li>
        <li><a href="...">Réactions à chaud</a></li>
      </ul>
    </li>
    <li class="column span-6">
      <h2>Émulation</h2>
      <ul>
        <li><a href="...">Émulation</a></li>
        <li><a href="...">Tutoriaux</a></li>
        <li><a href="...">Foire aux Questions</a></li>
      </ul>
    </li>
  </ul>
</div>
```

Cette version est volontairement tronquée pour faciliter sa lecture.
L'idée générale de tout ça c'est de transporter directement la liste `#navigation` en
dehors de son conteneur, `#extra-content`. C'est en effet plus rapide et
plus performant de transporter une partie du DOM dans un autre endroit
que de la recréer séquentiellement.

Ça aura également l'avantage de limiter au maximum le travail à effectuer en JavaScript par derrière. On notera que jusqu'à présent, on n'a pas encore touché à jQuery.

Avec cette structure, on peut dores et déjà deviner que les <ul> de second niveau seront masqués et affichés à la demande.

## Étape 2 : préparer le menu HTML

La deuxième reste assez simple : on transporte `#navigation` dans son nouveau conteneur (déjà existant) : `#welcome-bar.`

Pour éviter tout aléas graphique, l'idéal est de masquer tout ce qu'on ne veut pas voir maintenant. Nous rentrons maintenant dans la partie pure JavaScript.

![Menu accessible (Étape 2)](/images/2008/06/menu-accessible-etape-2.png "Menu accessible (Étape 2)")

Pour atteindre ce résultat, on pourrait envisager le code suivant :

```javascript
(function($){
  $(function(){
    /*
     * Étape 2 : préparation du menu
     */
    $('#navigation > li > ul').hide();
    $('#navigation').appendTo('#welcome-bar');
  });
})(jQuery);
```

En soi, ce n'est pas excessif du tout :

1.  on masque tous les sous-menus
2.  on transporte le contenu de #navigation dans #welcome-bar

Tout le travail se situait dans la réflexion il faut croire ;-)

## Étape 3 : assigner les évènements

Maintenant le plus dur c'est de donner vie à tout ça. C'est bien beau d'avoir des menus mais encore faut-il les animer. Là encore nous avons plusieurs contraintes à subir :

*   les **titres doivent être cliquables**. Certaines personnes cliqueront en effet avant de réaliser qu'il y a un menu déroulant. Par principe, on prendre le premier lien de la liste et on l'assignera au titre correspondant ;
*   le **menu doit se dérouler lors du survol du titre** ...
*   mais il ne doit pas se masquer tant qu'on n'a pas quitté le titre NI la liste déroulante

La difficulté tient à ces 2 dernières contraintes. On pourrait tout d'abord penser à l'utilisation des évènements `mouseover` et `mouseout` MAIS, parce qu'il y a bien un mais, `mouseout` est un peu capricieux.

Si on imagine un `mouseover` directement sur `li.column`, le problème c'est que survoler un élément comme _Actualités_ ou _Newsletter_ activera le `mouseover` de ces derniers ... et désactivera, un temps minime certes, le survol de `li.column`. Autrement dit le menu se repliera alors qu'on tentera de l'utiliser.

Heureusement pour nous, jQuery a introduit les évènements `mouseenter` et `mouseleave` (présents dans Internet Explorer depuis des lustres, c'est bien le seul avantage de cette atrocité) depuis la [version 1.2.2](http://docs.jquery.com/Release:jQuery_1.2 "Notes de version de jQuery 1.2.2"). Ces évènements correspondent exactement à ce que l'on souhaite : maintenir une zone survolée malgré le survol de ses enfants.
Tout est histoire de couches ;-)

![Menu accessible (Étape 3)](/images/2008/06/menu-accessible-etape-3.png "Menu accessible (Étape 3)")

Côté code, ça se complique :

```javascript
(function($){
  $(function(){
    /*
     * Étape 3 : assignation des évènements et transformation
     */
    $('#navigation > li')
      .each(function(){
        var title = $('h2:first', this);
        var href = $('a:first', this).clone();
        href.text(title.text()).wrapInner('<span></span>');
        title.html(href);
       })
      .find('h2 > a').bind('mouseenter', function(){
        $(this).parents('li.column').find('> ul').slideDown('fast');
      }).end()
      .bind('mouseleave', function(){
        $('> ul', this).slideUp();
      });
  });
})(jQuery);
```

Plusieurs remarques sur ce code :

*   j'utilise les **chaînes de jQuery** pour gagner du temps et reparcourir des tableaux déjà connus (le sélecteur n'est pas réexécuté)
*   j'utilise également la **méthode end()** pour revenir au précédent état du sélecteur. Très pratique pour naviguer dans un jeu d'éléments et gagner en performances

Et pour les explications :

1.  Pour chaque élément de liste
  1.  on met de côté le titre de la liste
  2.  on clone le premier élément du sous-menu
  3.  on modifie le libellé du lien du clone
  4.  on remplace le titre par le code HTML du clone
2.  Pour ces liens hypertextes nouvellement créés (plus faciles à styler sans JS au rollover), on leur demande de déplier le sous-menu voisin
3.  Ce sous-menu ne sera replié que lorsqu'on quittera le li.column

## Conclusion

La **mise en œuvre de ce menu est relativement aisée** et surtout, suffisamment souple pour que vous puissiez l'adapter à vos besoins.
Dans tous les cas on remarquera que les clés de la réussite sont :

*   un **code HTML propre** (facile les sélections JS et le stylage CSS)
*   une évolution d'une **base sans artifices vers une interface améliorée** en JavaScript
*   un **code simple**, facilement maintenable et adaptable

Ceci n'est qu'un exemple où le JavaScript peut servir à conserver des interfaces accessibles tout en augmentant leur utilisabilité. Qui a dit que le JavaScript c'était nul ?

Le seul reproche que l'on peut faire à ce menu accessible c'est le _manque de navigation au clavier_. L'idéal serait de pouvoir naviguer dans le choix des menus entièrement avec les flèches de son clavier.
Rendez-vous dans un autre billet pour ce point ? ;-)


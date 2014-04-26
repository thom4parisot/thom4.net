title: "Emu Nova 2.1 : coulisses d'une refonte ergonomique et visuelle"
id: 902
date: 2008-04-22 07:00:45
tags:
- blueprint
- css
- ergonomie
- jquery
- logiciels libres
- rythme vertical
- ui
- xhtml
categories:
- WebDev
- Projects

cover: //oncletom.io/images/2008/04/emunova-2010.png
---

Mon premier grand fait d'armes sur le Web aura été le lancement d'[Emu Nova](http://www.emunova.net/) en octobre 2002\. Les grandes lignes du site ont toujours été **jeux vidéo rétro**, **émulation** et **aide aux utilisateurs**.
J'ai ainsi décidé d'offrir une nouvelle garde-robe à Emu Nova le 1<sup>er</sup> avril 2008 pour **renouveler une interface** vieille de 3 ans. 3 ans où le contenu s'est accumulé, les menus se sont désordonnés et la navigation s'est complexifiée.

Aujourd'hui je vous dévoile les **tenants et aboutissants d'un travail de réflexion** mené sur plusieurs mois tant en terme d'ergonomie, d'accessibilité et de respect des standards du Web.
Où l'on parlera de jQuery, Blueprint et d'interface orientée utilisateur.
<!--more-->

## Objectifs de la refonte

Comme je le disais, la plus grosse critique se tournait vers l'agencement du site : les menus étaient séparés en 2 et étaient peu visible.

Pire, il y avait tellement de contenu accumulé qu'au final l'utilisateur était obligé de scroller au mois une fois pour atteindre le contenu demandé.
J'ai donc opté pour un **choix radical** : tout reprendre de la feuille blanche et ne tenter de conserver que l'identité du site au travers de ses couleurs et de son logo.

Plusieurs objectifs ont émergé en griffonnant au fur et à mesure l'interface sur une feuille de papier :

*   offrir une page d'accueil qui ne fasse **pas doublon** avec le reste du site
*   offrir une page d'accueil **mettant en avant du contenu** pour inciter à visiter le site en profondeur (textes courts, images)
*   davantage **lier les forums et le site** pour susciter l'interaction avec l'internaute
*   offrir une **interface lisible** dont les contenus sont aisément identifiables sans effort cognitif
*   offrir du **contenu annexe en pied de page** : je suis désormais intimement convaincu que le pied de page est le meilleur moyen de fidéliser un vagabond curieux qui n'a pas tiré satisfaction de la première lecture
*   proposer un site conforme au **standard XHTML 1 Strict** en bannissant les mises en forme en tableau, entre autre

On le voit, les objectifs de surface sont résolument tournés vers l'interface utilisateur. Derrière il y avait également des objectifs de simplification et de mutualisation du code avec l'interface d'administration.

## Choix technologiques

Plutôt que de réinventer la roue, j'ai souhaité utiliser les applications en qui je crois le plus. Je peux compter dessus tout en gagnant du temps. N'est-ce pas là l'essentiel ?

### JavaScript : jQuery

Je suis un féroce utilisateur de [jQuery](http://jquery.com/) que j'adore pour sa **souplesse d'utilisation** et sa **syntaxe vraiment plaisante**. Elle dépassera, à mon avis, largement le vieillissant couple Prototype/Scriptaculous d'ici la fin de l'année 2008.

jQuery sert de base à tout le code JavaScript :

*   altérer l'interface pour **construire le menu de navigation principal** : sans JavaScript ça marche, avec c'est encore mieux !
*   affichage des **messages d'alertes pour les formulaires incomplets** : pas de popup mais un message inséré à même la page
*   **ouverture des liens externes** dans une nouvelle fenêtre
*   **diaporama de photos** avec Lightbox ; personnalisé pour l'occasion afin de bénéficier de légendes plus détaillées

![Emu Nova : formulaire avec erreur par jQuery](/images/2008/04/emunova-jquery-form.png)

Il ne reste donc plus en tout et pour tout que 2 popup/alert/confirm obligeant à un affreux et désobligeant clic.

### CSS : Blueprint

[Blueprint](http://code.google.com/p/blueprintcss/) est la librairie CSS la plus proche du Saint-Graal : facile d'utilisation et très puissante. Mon seul regret à l'heure actuelle est qu'elle ne fonctionne qu'en largeur fixe. Mais dans cette configuration elle joue parfaitement son rôle :

*   construction de colonnes les doigts dans le nez
*   [rythme vertical](http://www.biologeek.com/journal/index.php/l-importance-du-rythme-vertical-en-design-css) respecté pour un confort de lecture accru
*   construction typographique prémachée
*   correctifs liés à Internet Explorer déjà intégrés
Une bonne présentation c'est une présentation sans contrainte : pas de couleur primaire, pas de difficulté à lire, pas de texte trop petit.

Le premier lecteur qui plisse les yeux c'est qu'il aura oublié d'allumer son écran ;-)

### Transparence d'images : GIF ou PNG ?

Quitte à trancher dans le vif, le **GIF a été abandonné au profit du PNG** pour le logo.

Pour rappel, si la transparence est possible avec le GIF, il lui manque la **couche alpha** qui permet de mélanger transparence et couleur. Avec le PNG on peut frimer avec des contours ombrés et des reflets qui fusionnent parfaitement avec le décors.

Alors où est le problème ? Le sempiternel Internet Explorer 6 qui commence même à chauffer les oreilles à Microsoft. À tel point qu'il souhaite s'en débarrasser au plus tôt en poussant Internet Explorer 7, y compris pour les non-possesseurs du Service Pack 2 de Windows XP.
La transparence est affichée comme du gris. Magnifique. Sauf en utilisant [jQuery.ifixpng](http://jquery.khurshid.com/ifixpng.php), entre autre.

## Emu Nova : carte de chaleurs, avant et après

[![Heatmap d\](/images/2008/04/emunova-2000vs2100-heatmap-588x600.jpg "Heatmap d\")](/images/2008/04/emunova-2000vs2100-heatmap.jpg)

Voici une comparaison des cartes de chaleur à 6 mois d'intervalle.

On remarque aisément que sur la précédente version les clics sont concentrés, notamment sur la partie haute de la page. Les quelques listes existantes mettent peu en valeur le contenu et de ce fait ne sont pas cliquées.

Sur la nouvelle version les clics semblent **moins concentrés mais touchent globalement toute la page**, exception faite des vignettes en image. Un problème ? Non pas vraiment puisqu'elles sont rafraîchies toutes les 3 heures ce qui fausse le calcul (qui s'étale sur 1 journée).

Notez aussi les clics en bas de page : **le pied de page compte**. Qui n'a pas eu envie qu'on lui suggère du contenu à lire une fois sa lecture terminée ?

## Conclusion

[![Emu Nova 2.1 : page d\](/images/2008/04/emunova-2101-homepage-203x300.png "Emu Nova 2.1 : page d\")](/images/2008/04/emunova-2101-homepage.png)

Il n'est pas aisé de refondre une interface, surtout quand il y a derrière toute une troupe d'utilisateurs attachés à ses habitudes (ce qu'on peut comprendre).

Si on temporise les différentes phases, voici ce que cela donne :

*   analyse des besoins, ressenti de la situation : plusieurs mois
*   dessin de la nouvelle interface sur papier : plusieurs jours
*   intégration HTML : plusieurs heures
*   refonte du code : plusieurs jours
*   corrections de bugs : plusieurs heures
*   premières critiques : quelques minutes
Pas étonnant que ma régularité sur ce blog en aie pris un coup ;-)
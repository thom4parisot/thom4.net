title: "Microformats : comment microformater du contenu déjà existant ?"
id: 896
date: 2008-04-03 22:07:42
tags:
- adr
- atom
- clever age
- code
- css
- firefox
- google maps
- hatom
- hcalendar
- hcard
- logiciels libres
- microformats
- rss
- tag
- wikia
- xhtml
- xoxo
- yahoo
categories:
- WebDev
cover: /images/2007/07/logo-microformats.gif
---

{% repost "http://www.clever-age.com/veille/blog/microformats-comment-microformater-du-contenu-deja-existant.html" "Microformats : comment microformater du contenu déjà existant ?" %}


Nous avions dressé un panorama des microformats dans un précédent article intitulé « [microformats : republier et donner du sens aux contenus](https://oncletom.io/2008/01/29/microformats-republier-donner-sens-aux-contenus/) ». Nous avions notamment conclu que leur** intégration était rapide, peu coûteuse et surtout bénéfique** tant pour le visiteur que pour la visibilité du contenu.

Nous nous intéresserons cette fois-ci à une partie plus pratique des microformats : leur **intégration**. Toutefois ce rapide apprentissage sera didactique puisque nous apprendrons à identifier visuellement quels contenus d’une page peuvent être microformatés mais aussi comment microformater du code HTML déjà existant.

<!--more-->

## Des sites déjà microformatés

Intéressons-nous toutefois à des sites ayant déjà microformaté leurs contenus. Nous pourrons ainsi éveiller notre curiosité et préparer le travail de réflexion de la prochaine étape.

**[Exemple avec Google Maps](http://maps.google.fr/?q=clever-age&amp;near=paris)** :

![Microformats sur Google Maps](/images/2008/04/microformats-sites-google-maps.jpg)

Google Maps est un service de recherche cartographique accessible via un simple navigateur Web. Le moteur donne un accès à des recherches de lieux, de calculs d'itinéraires mais aussi d'emplacement d'entreprises.

Le support des microformats sur Google Maps est relativement léger mais suffisant pour être utile.
Contrairement à ce que l'on aurait pu penser, Google n'a pas intégré le [microformat geo](http://microformats.org/wiki/geo) pour exporter les coordonnées GPS d'un point. La société s'est concentrée sur les données personnelles au moyen de deux microformats combinés :

*   [microformat hCard](http://microformats.org/wiki/hcard) (correspond à la réunion des encadrés bleu et vert)
*   [microformat adr](http://microformats.org/wiki/adr) (correspond à l'encadré vert uniquement)

Cette combinaison facilite l'extraction des adresse postales et des entités (individus ou entreprises).

**[Exemple avec Yahoo ! Upcoming](http://upcoming.yahoo.com/search/?loc=paris)** :

![Microformats sur Yahoo! Upcoming](/images/2008/04/microformats-sites-yahoo-upcoming.jpg)

Yahoo ! Upcoming est un service gratuit cataloguant tous les évènements à venir par pays, ville, date et même par catégories (cinéma, concerts, expositions etc.).

Le microformat par excellence à adopter était bien évidemment le [microformat hCalendar](http://microformats.org/wiki/hcalendar). Chaque occurence microformatée est représentée par un rectangle vert et peut contenir ces différents attributs, entre autre :

*   date de début de l'évènement
*   date de fin de l'évènement
*   titre de l'évènement
*   description de l'évènement
*   le lieu de l'évènement (sous forme d'adresse complète ou pas)
*   une URL menant à un descriptif plus approfondi de l'évènement

Ce microformatage permet d'aller au-delà d'une lecture classique puisque de manière simple, elle permet au visiteur de récupérer les évènements qui l'intéresse pour les ajouter à son gestionnaire de temps favoris, qu'il soit logiciel ou en ligne.

## Identifier visuellement les microformats à intégrer

Identifier des microformats déjà implémenté est assez simple avec les outils adéquats. En revanche pour décider de microformater du contenu, deux outils sont indispensables :

*   la documentation des microformats pour savoir **quoi implémenter**
*   un peu de jugeotte pour savoir **comment implémenter** ;-)

Avec un peu de pratique et de connaissance des différents microformats, il ne faut pas plus de 5 à 10 minutes pour identifier les contenus microformatables. La difficulté d'intégration dépendra uniquement de la structure technique affichant les données : plus elle sera complexe, plus le microformatage pourra être long ... au même titre que toute autre modification basique.

**[Exemple avec Wikia Search](http://re.search.wikia.com/search#clever%20age)** :

![Microformats sur Wikia Search](/images/2008/04/microformats-tomicroformat-wikia-search.jpg)

Wikia Search est un moteur de recherche lancé au tout début de l'année 2008 par un des fondateurs de l'encyclopédie en ligne Wikipédia. Ce moteur en reprend d'ailleurs le principe du wiki pour contribuer à l'élaboration et la notation de meilleurs résultats.

Il est d'ailleurs étonnant de voir qu'aucun microformat ne soit présent malgré de tels objectifs. La capture d'écran ci-dessus découpe la page en 3 zones microformatables distinctes :

1.  le lien sur logo aurait pu se voir agrémenter d'un [rel-home](http://microformats.org/wiki/rel-home) pour signifier un retour vers la page d'accueil ;
2.  les résultats auraient pu quant à eux embarquer :
  *   le [microformat hAtom](http://microformats.org/wiki/hatom) pour faciliter la syndication de contenu et l'extraction des résultats.
  *   le [microformat hReview](http://microformats.org/wiki/hreview) ou [VoteLinks](http://microformats.org/wiki/vote-links) sur les encadrés orangés identifiant les zones de votes.
3.  enfin le [microformat hCard](http://microformats.org/wiki/hcard) aurait été le bienvenu sur la liste des résultats correspond à des personnes.

On peut constater que plus il y a d'emplacement représentant des contenus différents sur une page, plus on a de chances qu'un microformat corresponde.

**[Exemple avec Clever Age](http://www.clever-age.com/)** :

![Microformats sur Clever Age](/images/2008/04/microformats-tomicroformat-cleverage.jpg)

J'ai dénombré pas moins de 5 zones pouvant accueillir des microformats :

1.  les dernières actualités pourraient utiliser le [microformat hAtom](http://microformats.org/wiki/hatom). Un flux RSS est déjà disponible sur la page mais ce serait offrir un chemin de traverse pour les visiteurs et les moteurs d'indexation ;
2.  le [microformat hCalendar](http://microformats.org/wiki/hcalendar) aiderait à la réutilisation des données dans les gestionnaires de temps. Imaginez un chef d'entreprise affairé désireux de transmettre à ses collaborateurs une ressource contenant toutes les informations de leur future formation : peu d'effort et un gain de communication ;
3.  ajouter facilement Clever Age dans votre carnet de contacts et de prestataires serait également facilité si le [microformat hCard](http://microformats.org/wiki/hcard) redistribuait le nom et les moyens de contact de la société ;
4.  en complément au moyen de contact, l'emplacement géographique des agences serait à portée de clic avec le [microformat geo](http://microformats.org/wiki/geo). Après tout, Google Maps proposera peut-être un jour d'importer des URL microformatée en plus des fichiers KMZ (Google Earth) ;-) ;
5.  enfin, le microformatage de la dernière partie dépend de ce qu'on aimerait redistribuer :
  *   le [microformat hAtom](http://microformats.org/wiki/hatom) pour offrir 3 flux de syndication mais le peu d'éléments (2 à chaque fois) tende à infirmer la pertinence de ce microformat dans le cas présent ;
  *   le [microformat XOXO](http://microformats.org/wiki/xoxo) est adapté à décrire des types de contenus embarqués dans une page ; ici des flux RSS. Il serait à placer sur chaque lien pointant vers les flux RSS ;
  *   le [microformat Xfolk](http://microformats.org/wiki/xfolk) est adapté aux collections d'URL plus communément appelés « favoris » ou « marque-pages »

Avec ce dernier exemple, nous venons de voir que le microformatage était facilement adaptable à un site Web de société. Dans ce cas précis, il y a énormément de contenu republiable mais pas systématiquement de manière pertinente.

## Intégrer les microformats dans du (X)HTML

Les précédents exemples, sur de l'existant et ce qui pourrait exister, avaient pour but de former notre esprit à reconnaitre des zones susceptibles d'être microformatées.

La difficulté de l'exercice est d'ajouter du balisage sans altérer la présentation actuelle. Je traiterai du site de Clever Age dont nous avons parlé précédemment.

**Microformater des données d'entités**

Voici le code de départ, repris tel quel :

```html
Clever Age - Siège social : 01.53.34.66.10
```

Comme nous avons pu le voir, la gestion d'identités passe par le [microformat hCard](http://microformats.org/wiki/hcard) :

```html
<span class="vcard">
  <span class="fn org">Clever Age</span> - Siège social : <span class="tel"><span class="value">01.53.34.66.10</span></span>
</span>
```

La balise `span est une balise en-ligne neutre au sens où ... n'en a pas justement.
`div` est son pendant de type bloc.

**Microformater des ressources syndiquées**

Voici le code de départ (simplifié par rapport à l'exemple afin de réduire le code à lire) :

```html
<dl>
  <dt><a href="/rss/blog.xml">derniers billets du blog</a></dt>
  <dd>...</dd>

  <dt><a href="/rss/publications.xml">dernières publications</a></dt>

  <dd>...</dd>

  <dt><a href="/rss/cleverlink.xml">derniers Clever Links</a></dt>
  <dd>...</dd>
</dl>
```

Le [microformat XOXO](http://microformats.org/wiki/xoxo) nous permet de définir une liste d'éléments en fonction des [modules XHTML](http://microformats.org/wiki/xoxo#The_XOXO_Document_Type) :

```html
<dl class="xoxo">
  <dt><a href="/rss/blog.xml" rel="feed" type="text/xml">derniers billets du blog</a></dt>

  <dd>...</dd>

  <dt><a href="/rss/publications.xml" rel="feed" type="text/xml">dernières publications</a></dt>

  <dd>...</dd>

  <dt><a href="/rss/cleverlink.xml" rel="feed" type="text/xml">derniers Clever Links</a></dt>

  <dd>...</dd>
</dl>
```

Le microformatage a été rendu possible uniquement en utilisant de manière standardisée des attributs définis par XHTML.
Malgré cet aspect de simplicité, il faut s'investir dans la compréhension des spécifications XHTML. Ce n'est un problème que pour les personnes produisant du code XHTML non-conforme.

## Valider l'intégration des microformats

La question qui se pose toujours après avoir produit un code quelconque c'est comment le tester ? Il existe à l'heure actuelle trois outils gratuits :

*   la relecture manuelle avec la documentation à côté ;-)
*   l'[extension Operator pour Firefox](https://addons.mozilla.org/firefox/addon/4106). Elle n'est toutefois pas complète et ne permettra pas de tester tous les microformats existants. Cette extension propose dans ses options un _mode débogage_ très utile ;
*   le service en ligne [Optimus](http://microformatique.com/optimus/). Ce service polyvalent est capable de retourner sous forme de flux XML ou JSON les microformats présents dans une page Web. Il propose également un validateur, toujours pour une page Web, décrivant les erreurs de microformatage.

## Conclusion

Il est difficile d'infuser en un article la manière de microformater du contenu. Fort heureusement la documentation des microformats abonde d'exemples en traitant des cas de figure concrets. Les spécifications restent là pour savoir quels sont les attributs, obligatoires ou pas.

De manière générale **l'intégration des microformats est relativement aisée** mais il existe 3 difficultés principales à l'intégration des microformats :

*   difficultés liées à la **plate-forme technique** d'intégration ;
*   difficultés liées à un **manque de données**. Certaines spécifications exigent la présence de données particulières que l'on n'a pas ou que l'on ne peut afficher, rendant invalide le contenu ;
*   difficultés liées à un **code HTML désorganisé**. L'abus de _div_ et le non-respect de hiérarchie est une source de problèmes et si elle rend pénible l'intégration des microformats, elle pose problème à la maintenance du code et des CSS.

Intégrer les microformats c'est finalement mener une **réflexion sur la qualité du code produit**. Un bon code, respectueux des standards et sémantique sera pérenne dans le temps, facilitera le microformatage et aura davantage de chances d'être accessible.
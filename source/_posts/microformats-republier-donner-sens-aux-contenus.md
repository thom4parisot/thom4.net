title: "Microformats : republier et donner du sens aux contenus"
id: 861
date: 2008-01-29 07:00:06
tags:
- bonnes pratiques
- css
- hatom
- hcard
- html
- logiciels libres
- microformats
- semantique
- seo
- technorati
categories:
- WebDev
cover: /images/2007/07/logo-microformats.gif
---

{% repost "http://www.clever-age.com/veille/blog/microformats-republier-et-donner-du-sens-aux-contenus.html" "Microformats : republier et donner du sens aux contenus" %}


**Le Web sémantique**.
Cette expression est sur toutes les lèvres de ceux qui préparent l'Internet de demain. Moteurs de recherche, services de pointe, secteur marchand ... après avoir indexé du contenu, ils aimeraient désormais le comprendre. Comprendre pour mieux cibler, mieux profiler et mieux servir.
<!--more-->

Malgré cet aspect futuriste teinté de recherche et de développement, le concept de Web sémantique est pourtant vieux comme ... le Web. Tim Berners-Lee y pensait déjà lorsqu'il accouchait d'Internet sur ses petites tablettes.

Si les hommes arrivent à comprendre les hommes, les ordinateurs ne comprennent _que_ ce pourquoi ils ont été programmés. Le Web sémantique a été imaginé pour palier à ce problème, pour expliquer le sens du contenu, pour lier les contenus entre eux tout en décrivant ces relations.

En ce sens, les formats <acronym title="Ressource Description Framework">RDF</acronym> et <acronym title="Web Ontology Language">OWL</acronym> figurent comme les étendards du concept. RDF décrit les ressources tandis qu'OWL établit des liens entre eux en leur donnant un sens. Ces relations sont nommées [ontologies](http://fr.wikipedia.org/wiki/Ontologie_%28informatique%29) et permettent donc de transformer un Web de données anonymes en un Web sémantique. Un Web où humains et ordinateurs comprennent et échangent.

**Les microformats sont nés du constat de complexité de mise en œuvre du couple RDF/OWL et d'un besoin de simplicité**.

## Les microformats

Tantek Çelik et Adam Rifkin dévoilent le concept des microformats en 2004 après 2 années d'expérimentation. Ils ne s'en cachaient pas : ils souhaitaient démocratiser et implanter la sémantique au cœur du Web en s'affranchissant au maximum de contraintes techniques.
C'est ainsi qu'au lieu de créer un énième format de fichier les microformats se greffent sous la forme d'attributs (X)HTML pour tenter de donner du sens au contenu.

Il existe plusieurs spécifications de microformats :

*   [hAtom](http://microformats.org/wiki/hatom) (syndication de contenus, basé sur Atom) ;
*   [hCalendar](http://microformats.org/wiki/hcalendar) (dates et évènements, basé sur iCal) ;
*   [hCard](http://microformats.org/wiki/hcard) (représentation d'entité, basé sur vCard) ;
*   [hResume](http://microformats.org/wiki/hresume) (<acronym title="Curriculum vitæ">CV</acronym>, mélangeant hCard et hCalendar notamment) ;
*   [geo](http://microformats.org/wiki/geo) (emplacement géographique) ;
*   [XFN](http://microformats.org/wiki/xfn) (relations entre individus) ;
*   [XOXO](http://microformats.org/wiki/xoxo) (description de contenus) ;
*   et de nombreux motifs de conception rel-* ([tags](http://microformats.org/wiki/rel-tag), [nofollow](http://microformats.org/wiki/rel-nofollow), [license](http://microformats.org/wiki/rel-license), [home](http://microformats.org/wiki/rel-home) etc.).

## Intérêts et utilité des microformats

La force des microformats réside dans sa souplesse d'utilisation, leur approche métier et surtout, la réutilisation de formats existants.
Les microformats se basent sur deux attributs [[1](#nb1 "[1] Il en existe en réalité 3 mais l")] de (X)HTML :

*   `rel` : pour décrire la relation du lien avec sa cible ;
*   `class` : pour décrire le sens de contenu.
Les balises (X)HTML indiquent la nature de leur contenu :

*   `<p>` pour un paragraphe de texte ;
*   `<h1>` pour un titre important ;
*   `<strong>` pour une forte emphase ;
*   `<img>` pour une image ;
*   `<li>` pour un élément de liste ;
*   `<a>` pour lier une autre ressource via son URI.

Les microformats s'ajoutent par le biais des attributs cités ci-dessus (rel et class) pour affiner leur sens :

*   `<a rel="nofollow">` indique aux robots d'indexation des moteurs de recherche de ne pas suivre ce lien ;
*   `<span class="tel">` indique que cette balise neutre contient un numéro de téléphone ;
*   `<div class="entry">` indique que cette balise neutre contient un article (billet de blog par exemple).

Rassurez-vous, le choix des classes n'est pas arbitraire et le [wiki officiel](http://microformats.org/wiki/) est un bon guide. Il reprend les spécifications des formats cités précédemment tout en les agrémentant d'exemples.
Enfin, et pour achever d'attiser votre curiosité, voici un résumé des microformats en 7 points :

*   ils s'adaptent au code et non l'inverse ;
*   ils s'appliquent aussi bien sur des pages statiques que dynamiques ;
*   ils aident à structurer la page ;
*   ils n'ont quasiment aucun coût de mise en place ;
*   ils aident et aideront à la bonne indexation du contenu dans les moteurs de recherche ;
*   ils offrent des perspectives d'interaction et de navigation intelligente pour les visiteurs d'une page microformatée ;
*   ils sont un socle pour réutiliser le contenu (cf. « Outils agrégeant les microformats »).

## Cas pratique : offrir une carte de visite en visitant une page Web

Prenons par exemple le cas des fichiers vCard. Nos carnets d'adresses en raffolent car ils contiennent des informations de contact : nom, prénom, adresse, numéro de téléphone, email etc.
Il n'est pas rare de recevoir des emails contenant une vCard en pièce-jointe. Un clic dessus et les informations de l'expéditeur se retrouvent dans notre carnet d'adresses.

**Les microformats proposent la même chose** mais au format Web avec le microformat hCard. Outre la ressemblance de nom, on retrouve dans sa spécification tous les éléments de vCard (nom, prénom, adresse etc.).
La seule différence se trouve dans la représentation. Nous n'avons plus affaire à un fichier séparé (comme ça aurait été le cas avec RDF et OWL)
mais bel et bien à du texte présent sur une page Web.

Si ce code était placé sur une page Web accessible au public, n'importe quel outil gérant les microformats serait capable d'en extraire les données et pourquoi pas, de lancer une recherche sur
Google Maps pour obtenir les coordonnées GPS de l'adresse.

```html
<div class="vcard">
  <a class="fn org url" href="http://www.clever-age.com/">Clever Age</a>
  <div class="adr">
    <div class="street-address">37, boulevard des Capucines</div>
    <span class="postal-code">75002</span>
    <span class="locality">Paris</span>
    <div class="country-name">France</div>
  </div>
  <div class="tel">
   <span class="type">Téléphone</span> +33 1 53 34 66 10
  </div>
  <div class="tel">
    <span class="type">Fax</span> +33 1 53 34 65 20
  </div>
  <div>Email: <span class="email">commercial@clever-age.com</span></div>
</div>
```

## Outils proposant des microformats

Les industriels et les leaders du Web contribuent à diffuser les microformats en les adoptant progressivement. Cette adoption apporte une valeur ajoutée à leurs services et facilite la vie des utilisateurs.
Concrètement, ils microformatent leur contenu pour enrichir leur présentation et faciliter les interactions avec d'autres services.

Voici une liste non-exhaustive de services proposant des contenus microformatés :

*   _Blogs_ ([Wordpress](http://wordpress.org)) ;
*   _Cartographie_ ([Google Maps](http://maps.google.fr), [Yahoo ! Local](http://fr.local.yahoo.com)) ;
*   _Emploi_ [JobiJoba](http://www.jobijoba.com)) ;
*   _Outils sociaux_ ([Flickr](http://flickr.com), [Del.icio.us](http://del.icio.us), [Ma.gnolia](http://ma.gnolia.com)) ;
*   _Réseaux sociaux_ ([LinkedIn](http://www.linkedin.com), [Ziki](http://www.ziki.com)).

## Outils agrégeant les microformats

![Extension Operator pour Firefox](/images/2008/01/microformats-operator-c2fc2.png)

L'utilisation la plus intéressante des microformats reste indéniablement l'agrégation. Vous pourrez ainsi construire un flux RSS à partir d'une page statique ou explorer
des photos en rapport avec la page visitée.

[Technorati](http://technorati.com) porte l'étendard des microformats. Ses différents services, utilisables en appelant une simple URI, permettent d'agréger des [cartes de visites (vCard)](http://technorati.com/contacts/) ou encore des [calendriers (iCal)](http://technorati.com/events/) pour générer des fichiers réutilisables dans votre carnet d'adresse ou votre gestionnaire de temps.

[Jobster](http://www.jobster.com/) propose une utilisation intéressante des microformats. Ce site de recherche d'emploi vous évite l'écueil de l'énième ressaisie de CV. En lui fournissant l'URL de votre profil public LinkedIn, il en extrait toutes les données pour en générer un CV en ligne.

Les navigateurs Web jouent également le jeu. Firefox 2 (avec son [extension Operator](https://addons.mozilla.org/fr/firefox/addon/4106)) ou encore Firefox 3 et le futur Internet Explorer 8 proposent des outils intégrés.
Sur chaque page visitée, ils en extraient tous les contenus microformatés possibles et proposent différentes interactions possibles.

D'autres outils plus confidentiels s'efforcent de défricher le terrain, notamment les agrégateurs de flux RSS/Atom et autres transformateurs XHTML/microformats :

*   [hatom2rss](http://xoxotools.ning.com/hatom2rss.php) ;
*   [hAtom2Atom](http://rbach.priv.at/Microformats/hAtom2Atom/) ;
*   [atom2rss](http://atom.geekhood.net/) ;
*   [X2V](http://suda.co.uk/projects/X2V/).

## Conclusion

**Il est de plus en plus facile de microformater les contenus, d'interagir avec et de les republier**. Leur faible coût d'intégration et la rapidité
d'apprentissage sont d'autres atouts pour intéresser vos intégrateurs HTML, vos programmeurs ou même vos décisionnels.
La publication de microformats de LinkedIn et leur utilisation par Jobster pour préremplir automatiquement le CV sans ressaisie est le cas de figure idéal.
Ces pratiques ont pour vocation d'être généralisées, de quoi nous faciliter la vie.

Nous verrons dans une prochaine partie des bonnes pratiques d'intégration des microformats à des contenus déjà existants. Ce sera d'ailleurs l'occasion
de remarquer que **sémantique, respect des standards et accessibilité génèrent une incroyable synergie**.

## Pour en savoir plus

*   [Présentation des microformats en mars 2006 au SXSW Interactive](http://tantek.com/presentations/2006/03/microformats-sxsw/) ;
*   [En route vers le Web sémantique](http://www.readwriteweb.com/archives/semantic_web_road.php) ;
*   [Les 10 prochaines tendances du Web](http://www.readwriteweb.com/archives/10_future_web_trends.php).

[[1](#nh1)] Il en existe en réalité 3 mais l'attribut `rev` n'est employé qu'une fois. Difficile d'en déduire une généralité.
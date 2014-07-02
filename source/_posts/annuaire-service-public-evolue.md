title: "L'annuaire Service-Public (r)évolue !"
id: 1192
date: 2008-11-04 07:00:55
tags:
- communication
- critique
- redirection
- utilisabilité
categories:
- a11y
---

Je suis tombé nez à nez sur l'[annuaire des sites Internet publics](http://lessites.service-public.fr/) la semaine dernière en cherchant l'adresse de la CPAM de Gironde. Il se trouve que [la page de cette dite organisation](http://lessites.service-public.fr/cgi-bin/annusite/annusite.fcgi/loc7?lang=fr&amp;orga=11712 "CPAM de Gironde sur l") était affublée d'un message explicite ... ou en fait pas vraiment.

Ou comment un message partant d'**un bon sentiment peut ruiner une navigation**.

<!--more-->

## Manque de clarté du message

Voici la disposition de l'alerte une fois sur la fiche de l'organisation recherchée :

![Message d](/images/2008/10/cpam-gironde-service-public.png "Message d'alerte de Service-public.fr")

On est sur du simple et direct : message puis information recherchée.

Le problème c'est qu'on est confronté à plusieurs messages :

*   <cite>la partie locale de l'annuaire va fermer.</cite>
Suis-je sur la partie locale ? Je proviens d'une recherche Google et franchement, je n'en sais rien. Un petit "locaux" en rouge aurait tendance à me le faire croire.
Résultat des courses : j'ai eu besoin de chercher à vérifier si j'étais concerné par le message.
*   <cite>Elle est remplacée par l'annuaire de l'administration / services locaux.</cite>
Le premier message vraiment utile est là : cette partie va être remplacée et j'ai un lien d'accès à la nouvelle ressource.
*   **Les mises à jour ne sont plus effectuées.**
Donc si je comprends bien, je suis en train de consulter des données sans aucune garantie qu'elles soient encore fiables. Autant dire que je n'ai qu'un seul intérêt : me rendre sur le site de remplacement.
Un effort cognitif de plus.
*   **Un message d'information pour les administrations locales.**
Est-ce ce message concerne l'utilisateur lambda ? Pas vraiment. Surcharge de texte inutile sauf s'il n'y a aucun autre moyen d'avertir ces fameuses administrations locales de mettre à jour leurs procédures.
L'information principale se retrouve noyée dans la masse et laisse à penser qu'on n'aura pas les informations souhaitées sur la page courante.

Alors soit, cliquons sur le [seul lien de rechange que l'on ait](http://lannuaire.service-public.fr/navigation/accueil_sl.html).

## Perte de l'information et de la navigation

Je pense qu'en terme de perte d'information de substitution, _on ne peut pas faire pire_ (sauf à avoir un lien cassé).

En effet, alors que j'étais sur une page d'information très précise, je reviens au point de départ : l'échelle nationale sans aucun repère.
En clair :

*   _j'ai perdu l'information_ dont j'étais en possession
*   _je dois à nouveau la retrouver_ dans une disposition différente de l'origine

La bonne chose à faire serait de taper à nouveau ma recherche (_CPAM gironde_) dans le champ de saisie mais préférant la facilité, j'use de la carte de France et clique sur la région Aquitaine.

Enfer et damnation, je dois retrouver la CPAM dans une liste à 5 niveaux de défilement. 2 solutions :

*   cliquer sur un département : l'affichage de la longue liste se retrouve filtré au département en question. À nouveau recherche de l'information.
*   scanner la page pour y trouver ce que je veux. Heureusement que l'occurence CPAM est affichée, ce qui m'évite d'avoir à tout lire.

Et comme si je n'avais pas assez cherché, je me retrouve confronté à un choix difficile : choisir parmi 8 liens hypertexte au même libellé. Jugez-en par vous-même :

![Quel lien choisir ?](/images/2008/10/liste-cpam-gironde.png "Quel lien choisir ?")

Le pifomètre m'a fait cliquer sur le premier des 8 liens et coup de bol ... c'est bon.

J'ai désormais l'information souhaitée ... différente de la page initiale sur le futur-ex annuaire local de Service-public.fr. Mais après combien de manipulations et de réflexion ?

## Conclusion

Trop de manipulations c'est certain. Résumons les erreurs principales :

*   présentation d'un message peu clair
*   renvoi vers une page détruisant l'information en notre possession
*   obligation de rechercher à nouveau l'information en notre possession

Cela aurait pu être évité par l'un de ces 2 moyens :

*   **redirection automatique permanente.**
On ne voit pas de message, on tombe directement sur une information à jour et on ne perd pas un seul instant. La meilleure solution et de loin.
*   **afficher un message plus clair avec un hyperlien direct vers la ressource de remplacement.**
C'est un chouilla moins bien mais si on tient vraiment à faire passer un message, c'est très bien.
Avec la méthode présentée, on a un peu l'impression de faire le boulot à la place des mainteneurs du site. Est-ce vraiment si pratique ?

**L'accessibilité passe aussi par une présentation réduisant les efforts cognitifs**. Et ça ne vaut pas que pour des personnes handicapées, ça vaut également pour des utilisateurs peu avertis du Web, pour votre référencement mais aussi pour le simple respect de votre clientèle.
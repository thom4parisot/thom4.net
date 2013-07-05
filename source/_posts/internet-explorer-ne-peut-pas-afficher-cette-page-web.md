title: "Internet Explorer ne peut pas afficher cette page Web"
id: 718
date: 2007-07-20 13:00:23
tags: 
- astuce
- erreur
- internet explorer
categories: 
- Développement Web
---

![Internet Explorer ne peut pas afficher cette page Web](https://oncletom.io/images/2007/07/internet-explorer-ne-peut-pas-afficher-cette-page-web.png)

Si l'on en croit la recherche Google [Internet Explorer ne peut pas afficher cette page Web](http://www.google.fr/search?q=probl%C3%A8me+%22Internet+Explorer+ne+peut+pas+afficher+cette+page+Web%22), il semblerait que pas mal de monde soit concerné par un facheux problème. **Internet Explorer 7 affiche sur certains site cette page d'erreur sans raison évidente**. [Ca en a même causé sur les groupes de discussions Microsoft](http://www.microsoft.com/communities/newsgroups/list/en-us/default.aspx?dg=microsoft.public.fr.ie7&tid=57f02485-74c9-4ddb-ad28-5c4b7df4c922&p=1).

Alerté par un client par l'expression sibylline <cite>votre site a plein de bugs</cite> (c'était le seul), j'ai décidé de perdre une heure à trouver une solution au problème. Préparez vos favoris, j'ai trouvé la solution !
<!--more-->
Il existe en fait 3 solutions :

1.  **revenir à Internet Explorer 6** (ceux qui ont Vista pourront se brosser, vous pouvez aussi revenir à Windows XP)
2.  **utiliser un véritable navigateur Web**, gratuit et plus sûr : [Firefox](http://www.mozilla-europe.org/fr/) ou [Opera](http://www.opera.com/) (je ne recommanderai pas [Safari](http://www.apple.com/fr/safari/) pour l'instant, trop instable)
3.  **changer un réglage d'Internet Explorer 7** et attention, c'est du lourd !

En cliquant sur _Outils > Options Internet > Avancés_, descendez au niveau de **Paramètres <abbr title="Hypertext Transfer Protocol">HTTP</abbr> 1.1**. Décochez tout, validez et quittez le navigateur (même si rien ne vous indique de le faire). Relancez Internet Explorer 7 et comme par magie, toutes les pages inaccessibles ne le sont plus !

![Réglages HTTP 1.1 Internet Explorer 7](https://oncletom.io/images/2007/07/internet-explorer-reglages-http.png)

Reste maintenant à élucider pourquoi l'interprétation du [protocole <abbr title="Hypertext Transfer Protocol">HTTP</abbr> 1.1](http://fr.wikipedia.org/wiki/Hypertext_Transfer_Protocol#HTTP_1.1) pose problème uniquement sur certaines pages.
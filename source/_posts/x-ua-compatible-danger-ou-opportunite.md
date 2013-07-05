title: "X-UA-Compatible : danger ou opportunité ?"
id: 1174
date: 2008-10-21 07:00:42
tags:
- clever age
- internet explorer
- w3c
- x-ua-compatible
- xhtml
categories:
- Standards du Web
---

[repost from="http://www.clever-age.com/veille/blog/x-ua-compatible-danger-ou-opportunite.html" sitename="Clever Age" title="X-UA-Compatible : danger ou opportunité ?"]

![](https://oncletom.io/images/2008/10/logo-ie8.gif "Logo Internet Explorer 8")

Après 10 ans de règne d'Internet Explorer et un succès d'adoption en demi-teinte pour son successeur, Internet Explorer 7, Microsoft a fort à faire pour convaincre avec Internet Explorer 8.
La firme de Redmond est confrontée à ce fâcheux dilemne :

*   considérer ses clients existants
*   réagir aux pressions exercées par la concurrence, Firefox en tête

On peut à ce titre saluer le choix de Microsoft d'enfin embrasser les standards du Web. La huitième version de son navigateur Web adoptera ainsi par défaut une interprétation respectant ces standards (HTML, XHTML, CSS 2, partiellement CSS 3).
Ce choix a notamment été facilité par la proposition d'une nouvelle balise propriétaire : **X-UA-Compatible**.

Solution de facilité ou excellent compromis ?

<!--more-->

## Internet Explorer 6 : retour de boomerang

Si les développeurs de sites Web « pour Internet Explorer 6 » ont pu se réjouir d'un certain laxisme d'interprétation des standards du Web, ils vont payer dès demain le prix d'une catastrophe annoncée.
Des milliers (des millions ?) de sites Web et des milliers d'applications spécifiques reposent ou ont été conçues uniquement pour Internet Explorer 6\. Ce navigateur n'est désormais plus supporté par Microsoft et ce dernier pousse les utilisateurs à adopter au moins Internet Explorer 7\. Il faudra cependant disposer de Windows XP et son Service Pack 2 pour en "profiter".

Mais alors, que faire de ses sites et applications vouées à une double obsolescence : la leur et celle de leur navigateur compatible ?

## La solution X-UA-Compatible

En adoptant par défaut le support des standards avec Internet Explorer 8, Microsoft ne pouvait pas fermer la porte à sa base de clients et d'utilisateurs.
Au lieu de les flouer et de les ignorer, une nouvelle balise HTML propriétaire pourra être incluse dans l'entête de toutes les pages HTML : **X-UA-Compatible**.
Cette entête pourra également être renvoyée par le biais d'une entête HTTP par votre serveur Web favori.
Par "propriétaire", j'entends que seul Internet Explorer 8 (et peut-être ses successeurs) sera en mesure d'interpréter la valeur de cette balise. Elle est fort heureusement respectueuse du standard HTML et n'empêchera donc pas vos pages Web de passer au validateur sans provoquer d'erreur.

Cette balise a pour effet d'indiquer à Internet Explorer quel moteur de rendu utiliser. Autrement dit c'est le site/application Web qui influe sur le comportement schizophrénique du navigateur et en aucun cas l'utilisateur final.
Si Internet Explorer 8 ne rencontre pas cette balise, il utilisera son moteur de rendu respectueux des standards. Autrement, il basculera dans le mode d'interprétation correspondant à la version spécifiée, à savoir Internet Explorer 6 ou Internet Explorer 7.

Il faut toutefois avoir en tête que cette bascule n'affecte pas que l'interprétation d'HTML mais aussi celles des CSS et de JavaScript.
Autrement dit, si vous décidiez un jour d'enlever la balise _X-UA-Compatible_, il y a de très fortes chances que vous souscriviez à une grosse couche de recettage fonctionnel, tant du côté CSS que JavaScript.

![Bouton d&#39;émulation Internet Explorer 7 ... équivoque ?](https://oncletom.io/images/2008/10/emulateie7.png "Bouton d")

## Les options de compatibilité, le casse-tête

Microsoft propose 3 modes de rendu :

1.  `IE=7` pour forcer tout type de rendu en _respect des standards_ à la sauce IE7 (respect approximatif donc) ;
2.  `IE=EmulateIE7` pour respecter les standards sauf quand la page est moisie (le fameux _mode Quirks_). Autrement dit, un Internet Explorer 8 déguisé en IE7 ;
3.  `IE=EmulateIE8` pour respecter les standards (mais vraiment) sauf quand la page est moisie. Autrement dit un Internet Explorer 8 avec quelques laxismes.

Si on compte avec ça la possibilité pour l'utilisateur de basculer de lui-même vers un mode de rendu "dégradé", difficile de choisir la moindre balise à appliquer.
Le navigateur sera cependant strictement compatible par défaut (pas besoin d'ajouter la moindre entête ou balise pour cela).

## Quelle stratégie adopter pour ses sites Web ?

Si la présence de cette balise est en soi une bonne nouvelle, il convient de se poser les _bonnes questions_ : X-UA-Compatible ne doit pas permettre à l'errance Internet Explorer de se reproduire à nouveau. La facilité ne doit pas être le seul facteur à envisager.
Voici quelques intérêts à utiliser X-UA-Compatible :

*   manque de compétences internes sur HTML/XHTML et CSS
*   besoin rapide d'adapter l'existant au nouveau logiciel
*   parc d'applications non-maîtrisé ou doté d'une politique de mise à niveau stricte
*   pas de budget pour redévelopper le site/application Web
*   la refonte du site/application aboutira plus tard que le déploiement d'Internet Explorer 8

Vous remarquerez que je n'aborde en aucun cas la question des nouveaux sites et applications et/ou leur refonte. Ceci pour la simple et bonne raison suivante : X-UA-Compatible est un palliatif à court-terme pour conserver un maximum d'applications fonctionnelles en attendant leur adoption des standards.

Il y a de très fortes chances que cette balise ne soit plus prise en compte dans la version 9 du navigateur ; tout du moins, je l'espère fortement.
En clair et pour résumer en 2 lignes :

1.  X-UA-Compatible n'est à utiliser que sur des sites existants, peu conformes aux standards et nécessitant une compatibilité maximale très rapide avec Internet Explorer 8
2.  les refontes doivent impérativement se concentrer sur les standards et agir comme si X-UA-Compatible n'existait pas

## Conclusion : l'avenir passe par les standards

Si ce résumé éveille des craintes au plus profond de vous-même, sachez qu'il n'est pas trop tard. Comme tout choix logiciel ou matériel, il faut anticiper à moyen et long terme en évitant de s'enfermer dans une solution totalement fermée.

Les 99% des parts de marché d'Internet Explorer d'antan sont la preuve même qu'on ne peut se reposer sur un taux d'adoption mais bel et bien sur une base qualitative saine : le Web de demain sera sur vos ordinateurs, vos PDA, vos téléphones mobiles, vos téléviseurs, vos frigos, vos montres, vos consoles de jeux et même vos murs et tables basses. Dans tous les cas, la garantie que vos sites et applications fonctionnent c'est le respect des standarts ; les standards du Web, pas ceux définis par Internet Explorer 6.

**X-UA-Compatible est une solution à court terme**, en aucun cas une fin en soi ou une garantie de pérennité.
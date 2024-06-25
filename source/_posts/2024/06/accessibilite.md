---
title: Accessibilité
layout: journal
categories:
  - Journal
  - web
lang: fr-FR
permalink: 2024/06/25/accessibilite/
date: 2024-06-25 09:54:19
---

Je clôture un projet en passant en revue une auto-évaluation d’accessibilité numérique. Pour chaque non-conformité, je mets en place les ajustements techniques qui y répondent au mieux. 

![Vue partielle d’une grille d’évaluation du Référentiel Général d’Amélioration de l’Accessibilité (RGAA)](/images/2024/06/rgaa-evaluation.png)

J’aime bien faire en sorte que ces changements paraissent aussi naturels que les autres éléments de balisage.

Les tableaux du service Web en questions n’avaient pas de titre pertinent et pas de résumé. Je connaissais la balise [`<caption>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/caption)… est-ce que [`<summary>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/summary) fonctionne aussi ?

Non, mais ce résumé s’externalise en ayant recours à l’attribut [`aria-describedby`](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Attributes/aria-describedby). Ce bout de [documentation de l’équipe Accessibilité Numérique Orange](https://a11y-guidelines.orange.com/en/articles/accessible-table/) l’illustre très bien.

Ah, le code source de la page est ouvert.\
Ah, je connais quelques auteur‧ices de cette page.

Je retrouve ce pétillant qui m’a fait aimer et apprendre le développement web : rendre accessible/disponible des savoirs d’expérimentation/amélioration de nos pratiques de travail.

Une brique philosophico-technique d’une vie généreuse.


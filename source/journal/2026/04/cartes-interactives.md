---
title: Cartes interatives
date: 2026-04-19 11:30:00
categories:
- Journal
- Explorations
- Refonte 3.0
---

L'écriture du billet [trajet Valence ↦ Vienne](/journal/2026/04/viarhona-valence-vienne/) m'a donné envie d'ajouter une carte interactive.

Et c'est une chose que j'adore avec cet apprentissage ouvert : on sait à peu près par où on commence, on a une petite idée d'où on veut aller mais le chemin est imprévisible.

Je tente un audit d'accessibilité après l'ajout d'une carte basée sur [MapLibreGL](https://maplibre.org/projects/gl-js/) et :

1. le titre par défaut du composant est en anglais : je souhaite le personnaliser en français ;
2. *mais* il manque un [**rôle**](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Roles) au composant (image, région ou application par exemple) ;
3. *et* je découvre un [audit d'accessibilité daté de 2021](https://github.com/maplibre/maplibre-gl-js/issues/53#issue-783551850){hreflang=en} qui révèle d'*autres* points d'amélioration (structure hiérarchique, alternative textuelle à des symboles, taille minimale des zones de clic).

Je me suis proposé pour prendre en charge ces corrections.\
De manière égoïste parce que j'aimerais que les cartes de mon carnet web soient accessibles ([une des intentions de la refonte 3.0](/journal/2026/04/a11y-first/)).\
Et aussi pour que les cartes interactives basées sur MapLibreGL le deviennent, accessibles, sans grand effort supplémentaire.

---

J'envisage une [amélioration progressive](https://developer.mozilla.org/fr/docs/Glossary/Progressive_Enhancement) de ce composant en expérimentant avec le composant [`<is-land>`](https://www.11ty.dev/docs/plugins/is-land/){hreflang=en} :

- utilisation d'une image légère, statique pour représenter la carte ;
- un bouton d'activation d'interactivité qui charge deux à trois cent kilo-octets d'interactivité.

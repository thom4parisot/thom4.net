---
title: Accessibilité d'abord
tags:
- a11y
categories:
- Journal
- Explorations
- Refonte 3.0
date: 2026-04-10 12:00:00
---

Une des motivations à reprendre ce carnet, c'était de proposer une accessibilité exemplaire de tous les contenus.

<!--more-->

Enlever les styles de présentation, c'est rendre visibles **l'ordre de lecture**, la **structure de page**, l'**ordre de tabulation** et les **intitulés de liens**.

Ça m'a aidé à corriger la hiérarchie des titres, éparses et inégales entre les textes produits en vingt ans (!). Mais aussi à sectionner et à étiqueter chacune des zones.

![](/images/2026/04/headings-map-billet.webp "Capture d'écran d'une hiérarchie de titres accessibles d'un billet de blog.")

Eleventy / Build Awesome propose deux mécanismes pour se brancher sur le contenu :
- [le parseur Markdown](https://www.11ty.dev/docs/languages/markdown/#optional-amend-the-library-instance)
- [les transformations HTML](https://www.11ty.dev/docs/transforms/)

De quoi ajouter automatiquement des attributs aux liens, images ou autre qui seraient fastidieux à faire à la main.
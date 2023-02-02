---
title: Modale
layout: journal
categories:
  - Journal
lang: fr-FR
permalink: 2023/02/01/modale/
date: 2023-02-01 20:17:11
---

M qualifiait l'élément de "boîte où on clique partout".

J'ai demandé "la modale ?". Dans ma tête, dissonance : en-dessous, c'est un élément HTML [`<dialog>`][dialog].

Je ne savais pas pourquoi on parlait de "modale", ce qui distinguait ça d'une _pop-up_ (pas un magasin éphémère). Tu sais la nouvelle fenêtre qui s'ouvre, mais pas de la taille de 
l'écran. Format qui s'est évaporé avec son abus et l'inclusion de bloqueur de _pop-up_. Il y a bien dix années de ça. Peut-être quinze. Bien avant d'avoir besoin de les bloquer. Et 
que des anti-bloqueurs se créent. Pour refourguer de la publicité surtout. Encore plus fourbes, il y avait aussi les _pop-under_ : des _pop-up_ qui s'ouvraient, mais _en-dessous_, 
sans crier gare, qui t'attendaient au tournant. Tu découvrais après avoir fermé tes fenêtres (y'a une époque où on fermait nos fenêtres — avec le changement climatique on les garde 
ouvertes, tant pis si on chauffe les oiseaux/_twitter_).

Les modales donc.

En cliquant sur [`role="dialog"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) et [`aria-modal`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-modal) pour comprendre la différence, la définition apparaît alors :

- une **fenêtre modale** s'affiche en surimpression, on ne peut interagir qu'avec le contenu de cet élément, le reste de la page est rendu inerte, atténué ;
- une **fenêtre non-modale** s'affiche en surimpression, on peut interagir avec le reste de la page.

Ce sont les modalités de la modale.\
Ça me pop-up le moral.

[dialog]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog

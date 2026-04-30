---
title: Liens externes accessibles
categories:
- Journal
- Explorations
- Refonte 3.0
date: 2026-04-30 13:25:00
---

En recréant ce carnet de zéro, les liens s'ouvraient à même la page, sans créer de nouvel onglet/fenêtre.

Est-ce qu'ajouter un attribut `target="_blank"` sur des liens hypertextes absolus suffit ? *Non*, l'exemple du module [`markdown-it-for-inline`](https://github.com/markdown-it/markdown-it-for-inline){hreflang=en} ne suffit pas.

J'aimerais :
- **gérer la sécurité avec l'onglet ouvert**. Il pourrait être utilisé par des pisteurs, sur la page nouvellement ouverte, par des extensions web verrolées ;
- **informer de la destination aux lecteurs d'écran**. La destination étant "un nouvel onglet". Ça correspond au [critère 6.1.1 du RGAA](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1) ;
- **distinguer visuellement les liens qui ouvrent un nouvel onglet**. Même intention, visuelle cette fois.

---

La sécurité se gère à l'aide des valeurs [`noopener`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Attributes/rel/noopener) et [`noreferrer`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Attributes/rel/noreferrer) de l'[attribut `rel`](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Attributes/rel).

Elles préviennent, respectivement, l'accès à la [propriété `window.opener`](https://developer.mozilla.org/fr/docs/Web/API/Window/opener) et à la diffusion de la provenance via l'[entête HTTP `Referrer`](https://developer.mozilla.org/fr/docs/Web/HTTP/Reference/Headers/Referer).

Ça aide à préserver notre vie privée numérique.

---

On peut donner du contexte aux lecteurs d'écran dans un label ARIA :

1. qui repend l'intitulé du lien ;
2. *et* qui spécifie l'ouverture dans un nouvel onglet.

L'utilisation du [rotor VoiceOver](https://support.apple.com/fr-fr/guide/voiceover/mchlp2719/mac){lang=en} est un bon exemple de cette visibilisation :

![Capture d'écran de la navigation par hyperliens dans le rotor VoiceOver](/images/2026/04/rotor-liens.webp)

L'[antépénultième](https://fr.wiktionary.org/wiki/ant%C3%A9p%C3%A9nulti%C3%A8me) lien de cette capture d'écran rend explicite l'ouverture dans un nouvel onglet. Ça correspondrait au code HTML suivant :

```html
<a href="..." aria-label="critère 6.1.1 du RGAA (ouvre une nouvelle fenêtre)">
  critère 6.1.1 du RGAA
</a>
```

---

Quelques lignes de CSS suffisent à ajouter un symbole visuel à la suite du lien :

```css
a[target="_blank"]::after {
  content: "";
  display: inline-block;
  inline-size: .8em;
  block-size: .8em;
  /* ... */
  background-color: currentColor;
  mask-image: url("data:image/svg+xml;base64, …");
  mask-repeat: no-repeat;
  mask-size: contain;
}
```

L'utilisation combinée des propriétés `background-color` et `mask-*` aident à respecter les proportions de l'image vectorielle *et* à la détourer aux couleurs du texte du lien.

L'image est encodée directement dans la feuille CSS pour éviter un temps de latence à l'affichage.

---

C'est bon, nos liens externes sont désormais accessibles.
Le [code source des liens externes accessibles pour `markdown-it`](https://github.com/thom4parisot/thom4.net/blob/d1ff1b44ba0b28085478f4715175cc9427fe0f3e/config/markdown.js#L86-L106){hreflang=en} (intégré à [Build Awesome]{lang=en}) est consultable dans le dépôt de ce carnet.

*[ARIA]: Accessible Rich Internet Applications
*[RGAA]: Référentiel Général d'Amélioration de l'Accessibilité
---
title: Émojis accessibles
categories:
- Journal
- Explorations
- Refonte 3.0
date: 2026-04-25 20:38:00
---

Je savais déjà que l'utilisation d'émojis dans le texte n'était pas accessible.
C'est leur texte alternatif qui est lu au lecteur d'écran. Comme "mains rassemblées" ou *folded hands*{lang=en} pour l'émoji utilisées pour symboliser un "merci" :pray:.

La lecture de l'article [making emojis and icons screen reader accessible](https://blog.pope.tech/2026/04/01/making-emojis-and-icons-screen-reader-accessible/){lang=en hreflang=en} m'a fait agir dessus sur ce blog avec l'extension [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji/){lang=en hreflang=en}.

---

J'ai suivi la documentation pour rendre l'affichage accessible.

Ainsi, le raccourci textuel `:pray:` est converti en :

```html
<span class="emoji emoji--pray" aria-hidden="true">🙏</span>
```

---

Il a fallu plonger dans les entrailles du fonctionnement de `markdown-it`{lang=en} pour que chaque émoji existante soit elle aussi, convertie dans un code similaire.

J'ai créé une règle qui est insérée *avant* l'extension émojis pour convertir chaque émoji (unicode) en raccourci textuel d'émoji :

1. on parcourt chaque jeton markdown de type `inline`{lang=en} ;
2. on vérifie la présence d'une émoji (via leur classe Unicode d'expression régulière) ;
3. on remplace chaque occurence par son raccourci textuel.

[Le code complet est disponible sur GitHub](https://github.com/thom4parisot/thom4.net/blob/d1ff1b44ba0b28085478f4715175cc9427fe0f3e/config/markdown.js#L15-L47){hreflang=en}.

---

Tout autre émoji **décoratif** (comme dans cette entrée de journal par exemple) est masquée aux lecteurs d'écran avec `aria-hidden="true"` :

```html
<h1 id="post-title">
  <span aria-hidden="true">☕️</span>
  Journal : Émojis accessibles
</h1>
```

---

Je n'ai pas eu à reprendre les vingt années de contenus pour y arriver.
La lecture d'une [issue GitHub](https://github.com/markdown-it/markdown-it-emoji/issues/43){lang=en hreflang=en}, d'une [proposition de code](https://github.com/markdown-it/markdown-it-emoji/pull/53/changes){lang=en hreflang=en} et le code d'autres extensions markdown m'ont aidé à mettre en place les mécanismes ci-dessus.

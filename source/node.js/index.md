---
title: Node.js • Apprendre par la pratique
cover:
  url: /images/publications/nodejs-cover.png
  type: full
lang: fr
scripts:
  - nodebook-updates.js
---

Cet ouvrage est une **base de départ** pour comprendre ce qu'il se passe dans l'écosystème de Node.js et de npm. Il devrait vous permettre de faire des choix techniques durables, de créer et de déployer des applications web en utilisant **JavaScript, le langage le plus populaire du monde** selon GitHub.
{ .leading }

## Node.js v10 et npm v6{#versions .next}

Plus de 500 exemples pour apprendre **Node.js v10** et **npm v6**.

Certaines fonctionnalités expérimentales sont couvertes afin de mieux comprendre dans quelle direction la plate-forme s'oriente.

## Acheter le livre Node.js{#acheter}

« Node.js • Apprendre par la pratique » s'achète en ligne, en librairies[^1] et avec un abonnement Kindle :

* **Livre papier** (32€) : [en librairie][] • [sur Eyrolles.com][eyrolles-papier] • [sur Fnac.com][fnac-papier] • [sur Amazon.fr][amazon-papier]
* **en e-book** (22€) : [syr Eyrolles.com][eyrolles-numerique] [^2] • [sur Fnac.com][fnac-numerique] • [sur Amazon Kindle][amazon-kindle]
* **en ligne** (gratuit) : [édition enrichie](#chapitres)
* **sur npm** (gratuit) : [`npm install nodebook`][npm-module] • lecture hors-ligne, exemples de code à exécuter dans votre terminal

## À qui s'adresse cet ouvrage ?{#audience}

- Aux développeur·ses qui veulent se reconvertir depuis un autre langage de programmation comme Perl, PHP ou Ruby
- Aux développeur·ses qui cherchent à tirer parti de l'outillage npm front-end
- Aux personnes qui se débrouillent dans leur coin et qui aimeraient renforcer leurs compétences en programmation web


## Chapitrage et contenu du livre{#chapitres}

Démarrez avec le chapitre de votre choix.
Les textes sont illustrés avec de nombreux exemples didactiques pour apprendre
à votre rythme, pas à pas.

- [Avant-propos](./foreword/preamble.html)
- **Chapitre 1** : [Histoire, écosystème et gouvernance](./chapter-01/)
- **Chapitre 2** : [Installer, mettre à jour et développer](./chapter-02/)
- **Chapitre 3** : [Jouer avec JavaScript](./chapter-03/)
- **Chapitre 4** : [Jouer avec Node.js](./chapter-04/)
- **Chapitre 5** : [Jouer avec npm](./chapter-05/)
- **Chapitre 6** : [Déployer notre code](./chapter-06/)
- **Chapitre 7** : [Créer une application web](./chapter-07/)
- **Chapitre 8** : [Créer un outil en ligne de commande](./chapter-08/)
- **Chapitre 9** : [Créer une application front-end](./chapter-09/)
- **Annexe A** : [Sélection de modules npm](./appendix-a/)

<ul class="is-discrete read-more">
  <li>
    <a href="https://opencollective.com/nodebook" class="read-more">
      <svg><use xlink:href="/assets/icons.svg#donate"/></svg>
      Faire un don pour soutenir l'écriture de la version gratuite
    </a>
  </li>
  <li>
    <a href="https://github.com/oncletom/nodebook" class="read-more">
      <svg><use xlink:href="/assets/icons.svg#html-tag"/></svg>
      Code source de l'ouvrage
    </a>
  </li>
</ul>


## Témoignages de lectrices et de lecteurs{#testimonies}

{% for testimony in site.data.book.testimonies %}
<blockquote>{{ testimony.text or testimony }}</blockquote>
{% endfor %}

<p>
  <a href="https://github.com/oncletom/nodebook/issues/new" class="read-more">
    <svg><use xlink:href="/assets/icons.svg#reactions"/></svg>
    Dire merci, signaler un problème ou demander un nouveau contenu
  </a>
</p>


## Mises à jour de l'ouvrage

Une fois le livre sorti, je corrige les contenus dans sa version en ligne.
Les changements plus importants sont réservés à l'édition suivante.

<ol id="nodebook-updates" class="is-discrete with-metadata" data-src="https://api.github.com/repos/oncletom/nodebook/commits?sha=v1"></ol>

<ul class="is-discrete read-more">
  <li>
    <a href="https://github.com/oncletom/nodebook/commits/v1" class="read-more">
      <svg><use xlink:href="/assets/icons.svg#html-tag"/></svg>
      Parcourir l'historique complet des mises à jour
    </a>
  </li>
  <li>
    <a href="https://github.com/oncletom/nodebook/milestone/2" class="read-more">
      <svg><use xlink:href="/assets/icons.svg#browse"/></svg>
      Changements prévus pour la deuxième édition
    </a>
  </li>
</ul>

[^1]: En France métropolitaine en tous cas.
[^2]: Formats PDF et ePub, sans DRM.

[source]: https://github.com/oncletom/nodebook
[npm-module]: https://www.npmjs.com/package/nodebook
[donate]: https://opencollective.com/nodebook
[eyrolles-papier]: https://www.eyrolles.com/Informatique/Livre/node-js-9782212139938/
[eyrolles-numerique]: https://www.eyrolles.com/Informatique/Livre/node-js-9782212139938/#achat-numerique
[fnac-papier]: https://livre.fnac.com/a7796744/T-Parisot-Node-JS
[fnac-numerique]: https://livre.fnac.com/a7796744/T-Parisot-Node-JS?NUMERICAL=Y
[amazon-papier]: https://amzn.to/2E58PEw
[amazon-kindle]: https://amzn.to/2BUbNu0
[en librairie]: https://www.placedeslibraires.fr/livre/9782212139938

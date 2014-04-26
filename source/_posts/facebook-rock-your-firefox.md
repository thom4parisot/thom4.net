title: "Rock your Firefox : mes extensions Firefox préférées"
id: 735
date: 2007-08-07 13:00:26
tags:
- dom
- facebook
- firefox
- microformats
- mozilla
- optimisation
categories:
- WebDev
cover: /images/2007/08/rock-your-firefox.gif
---


[Read/WriteWeb](http://www.readwriteweb.com/) fait partie de mes sources d'informations quotidiennes. Je suis tombé aujourd'hui sur un article concernant le [lancement d'une nouvelle application Facebook permettant de recommander ses extensions favorites](http://www.readwriteweb.com/archives/firefox_launches_facebook_app.php) : [Rock your Firefox](http://www.facebook.com/apps/application.php?api_key=b342b55715483ad3ff6a5495b9368702).

Ca tombe bien puisque je songeais depuis quelques jours à parler des extensions que j'utilise quotidiennement dans Firefox. Certaines n'intéresseront que les développeurs, d'autres les amateurs de praticité.
<!--more-->

## Extensions Firefox

Avant toute chose, si jamais vous vous posiez la question <q>où trouver de nouvelles extensions pour Firefox</q> (ou _Thunderbird_ ou d'autres produits _Mozilla_), rendez-vous sur [Mozilla Add-ons](https://addons.mozilla.org/fr/).
L'application Facebook **Rock your Firefox** reprend la liste des extensions et des thèmes en vous proposant de choisir vos préférées et de les partager sur votre profil. C'est un bon moyen pour afficher votre qualité d'utilisation de ce navigateur libre et gratuit.

## Extensions "Pratiques"

### [Adblock](https://addons.mozilla.org/fr/firefox/addon/10)

Certains sites sont envahis de publicités qui gênent affreusement la navigation. Plutôt que de se passer d'un contenu intéressant, autant supprimer les nuisances. **Adblock** est là pour ça. Que ça soit des images,des animations Flash ou bien encore des scripts JavaScript, **Adblock liste le contenu des ressources bloquables** et permet même de créer des filtres génériques à l'aide du caractère `*` (_wildcard_, remplace un à plusieurs caractères, peu importe lesquels).
**Attention** toutefois, la _publicité est vitale pour de nombreux sites_ donc bloquez avec intelligence.

### [Google Browser Sync](https://www.google.com/tools/firefox/browsersync/)

C'est certainement l'extension que j'installe en premier et pour cause : **Google Browser Sync sauvegarde tous mos favoris, cookies et historique de navigation de manière sécurisée**.
Je l'utilise sur plusieurs ordinateurs et plusieurs installations de Firefox ce qui me permet de retrouver tous mes favoris peu importe où je me trouve, à partir du moment où il y a une connexion Internet. A utiliser pour vos sauvegardes ou vos besoins de mobilité.

### [PDF Download](https://addons.mozilla.org/fr/firefox/addon/636)

Je n'aime pas que les documents <acronym title="Portable Document Format">PDF</acronym> s'ouvrent directement dans un onglet ou une fenêtre de mon navigateur Web. Surtout quand les plus lourds le font planter. **PDF Download** affiche systématiquement plusieurs choix tels que <q>Afficher dans la page</q>, <q>Ouvrir en tant que PDF</q> ou encore <q>Télécharger directement</q>.

### [Screengrab!](https://addons.mozilla.org/fr/firefox/addon/1146)

**Screengrab** est une **solution propre pour effectuer une capture d'écran** de sa portion visible, d'une page Web complète ou bien d'une portion d'écran bien définie. Vous l'aurez compris, pas besoin de faire 10 000 captures pour une page étalée en hauteur et pas besoin d'avoir _Photoshop_ ou _The Gimp_ d'installé pour s'en sortir.

### [Tab Mix Plus](https://addons.mozilla.org/fr/firefox/addon/1122)

**Tab Mix Plus** apporte un **lot considérable d'options pour mieux régler le comportement de vos onglets**. Personnellement je l'utilise pour que toute nouvelle fenêtre se charge obligatoirement dans un nouvel onglet _sans me déranger_ (chargement en arrière-plan). Je profite aussi de son indicateur de chargement allant de 0 à 100%.
En revanche j'évite son système de récupération en cas de plantage, il fonctionne moins bien que celui intégré à Firefox (pour les rares cas où cela s'est produit chez moi).

![Extensions Firefox](/images/2007/08/firefox-extensions.gif)

## Extensions "Développeur Web"

### [ColorZilla](https://addons.mozilla.org/fr/firefox/addon/271)

**ColorZilla** est une simple **pipette colorimétrique** mais ô combien efficace. Un clic sur un endroit de la page mémorise automatiquement le code couleur associé et permet de l'utiliser sous plusieurs formats dans n'importe quel autre programme dont _Photoshop_ ou votre éditeur <acronym title="Cascading Style Sheets">CSS</acronym> favori.

### DOM Inspector

C'est la seule extension qui ne se télécharge pas/plus (jusqu'à la version 1.5 c'était encore possible). L'inspecteur <acronym title="Document Object Model">DOM</acronym> s'installe en même temps que Firefox (si vous cochez la case adéquate) et permet comme son nom l'indique, d'**inspecter les noeuds de votre document** (<acronym title="HyperText Markup Language">HTML</acronym> ou <acronym title="eXtensible Markup Language">XML</acronym>), d'en voir leurs attributs, fonctions et ce de _manière récursive_.
L'analyse en temps réel permet même de voir les modifications apportées à l'arbre DOM par le biais du JavaScript.

### [Firebug](https://addons.mozilla.org/fr/firefox/addon/1843)

**Firebug** est obligatoire lorsqu'on souhaite **explorer avec aisance la structure HTML** d'un document, **exécuter du JavaScript à même la page** ou **déboguer efficacement son code**, ne serait-ce qu'en se rendant compte des temps de chargement des différents fichiers (CSS, JavaScript, Flash etc.).
Ca incite notamment à taper son code directement dans sa console plutôt qu'à le modifier et recharger la page pour déceler des erreurs ou étudier le comportement de la page. On gagne du temps et votre employeur de l'argent.

### [Firebug : YSlow](https://addons.mozilla.org/fr/firefox/addon/5369)

**YSlow** est une extension Firefox mais dédiée à Firebug. Une petite première _made in Yahoo!_ très utile. Cette extension permet de calculer les **performances de la page**, **suggère des optimisations** et **analyse les différents composants** ainsi que leurs caractéristiques (URL, poids, temps de réponse et ETag).
Indispensable pour les phases d'**optimisation** et de _fine tuning_ comme dirait l'autre.

### [Operator](https://addons.mozilla.org/fr/firefox/addon/4106)

Je vous ai déjà parlé de l'[intérêt des microformats](https://oncletom.io/2007/07/31/semantique-microformats-internet/) ? **Operator** est un outil notifiant des microformats actifs sur les pages que vous visitez. Outre la navigation interactive procurée, Operator signale dans la console de débogage d'éventuelles erreurs (élément absent, malformé ou invalidant un microformat).

### [TimeStamp Converter](https://addons.mozilla.org/fr/firefox/addon/2063)

Le nombre 1198533599 vous dit quelque chose ? Avec **TimeStamp Converter** ça sera le cas. Cette extension convertit les temps Unix en heure humainement compréhensible et vice-versa. Elle le fait également à partir de sélections de texte, évitant ainsi toute saisie pénible.

### [Web Developer](https://addons.mozilla.org/fr/firefox/addon/60)

Le Saint-Graal du développeur Web. Triturer la page, modifier ses mécanismes, débloquer des champs en lecture seule, afficher les champs masqués, topographie de la page, modifier la résolution et afficher l'arborescence en cascade de la page jusqu'à un élément pointé de la souris sont le genre d'outils fournis par **Web Developer**. Couplée avec Firebug, vous transformez un "simple" navigateur Web en machine de guerre du développement Web propre et efficace.
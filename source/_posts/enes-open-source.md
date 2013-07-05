title: "ENES : Open Source ... ?"
id: 71
date: 2005-08-02 20:48:28
tags: 
categories: 
- Projets
---

Pour fêter les 2 ans du site **Emu Nova** nous avions dévoilé au public un tout nouveau projet assez inhabituel : <acronym title="Emu Nova Entertainment System">ENES</acronym>. Sous ce nom un peu évocateur se cache en réalité un groupe de dump dont la mission est de sauvegarder les derniers jeux de la NES pour lesquels ça ne serait pas le cas. Il faut savoir que la durée de vie des cartouches est limitée dans le temps à cause de l'usure des composants donc il s'agit d'un défi technique et contre la montre.

Le premier anniversaire approche et une réflexion interne a été lancé. **Aperçu des décisions et de l'avenir du groupe dans ce billet**.

<!--more-->

Le projet **ENES** est mené par 4 personnes : _jeandubois_ (partie matérielle et développement), _Sigfrodi_ et _Julio_ (support, assistance et recherche) puis moi-même (gestion du projet, site Web et relations extérieures). Il était temps de prendre un peu de recul par rapport à notre parcours car le projet fêtera sa première année d'activité le 13 octobre prochain.

### Que s'est-il passé en 1 an ?

_Tout et rien_. En effet si on a démarré en trombe sur un jeu "exclusif" (<ins>Sword & Serpents</ins>), on s'est finalement plus heurté à des problèmes qu'autre chose : cartouche impossible à dumper (<ins>Maniac Mansion</ins> en version française et allemande pour ne citer qu'elles), lecture erronée due à l'oxydation des connecteurs métalliques et flou total dans la pertinence de notre liste des jeux nécessitant d'être sauvegardés.

Wow, un an pour tout ça ? Et bien en fait, le temps de comprendre et de trouver l'origine des problèmes ... oui. Le monde de l'électronique est (très/trop) complexe pour tout comprendre d'un coup, surtout lorsqu'on est face à des boîtes noires (manque de documentation, documentations imprécises ou erronées). Donc il faut avancer à taton pour comprendre par nous-même ce sur quoi on travaille.

### Alors que va-t-on faire ?

_Jeandubois_ travaille actuellement sur la troisième version de _Spaghetto_, notre dumper (machine permettant d'extraire le contenu des cartouches de jeu) et sur toute la clique logicielle nécessaire à son exploitation. Tout ou presque sera mis à disposition du public sous licence **GPL**. Voici en gros comment nous allons présenter le tout :

1.  **Documentation** : les plans du dumper
2.  **Driver** : librairie d'exploitation du dumper
3.  **Outils** : programmes liés à l'utilisation du dumper (intégrité des _roms_ etc.)
4.  **Carbonara Light** : interface graphique limitée à l'extraction des cartouches NES de type UNROM

Ce travail devrait également s'accompagner d'une refonte totale du site Web : ce dernier permettra à **ENES** de mieux communiquer avec l'extérieur en proposant des fils <acronym title="Really Simple Syndication">RSS</acronym> et des communiqués plus fréquents afin de mieux indiquer où nous en sommes dans notre travail.

Ce nouveau site sera orienté autour d'un blog (**DotClear** que j'apprécie énormément pour son côté _publication_) dopé avec des scripts de mes soins notamment pour présenter une liste des jeux à dumper, un moteur de recherche de jeu (non) dumpé etc.

Une date, un objectif : _13 octobre 2005_. En attendant le travail continue ;-)
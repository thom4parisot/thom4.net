title: "Coulisses d'un déménagement virtuel"
id: 75
date: 2006-05-15 21:19:20
tags: 
- Emu Nova
- hébergement
categories: 
- Développement Web
- Projets
---

Hier soir, dimanche 15 mai, à 21h s'opérait une opération délicate : basculer l'intégralité des données du site Emu Nova ainsi que ses sites hébergés vers une nouvelle machine davantage apte à supporter la charge incombée par des visites quotidiennes dépassant au minimum les 9000 personnes. On aurait pu tenir encore dessus, certes.

Besoins et nécessités, impératifs et exigences ... suivez les coulisses d'un déménagement de grande ampleur (pour moi en tous cas).

<!--more-->

Si un changement de serveur peut paraître anodin, il s'agit d'une tâche rendue ardue par une seule phrase : "**retrouver à l'arrivée ce que l'on avait au départ**". Comprendre par là : il faut que ça marche ... et de suite.

### Rapide historique

J'en parlerai dans un prochain billet mais gérer un site n'est pas une mince affaire contrairement aux apparences. Si [Emu Nova](http://www.emunova.net/) a débuté sur la Toile en avril 2002 par un simple forum (piraté à l'époque) posé chez un hébergeur gratuit, la présence de 20 personnes en simultané faisait déjà ressentir le besoin d'un véritable hébergement.

En juillet 2002, le 3 plus exactement, je faisais mon premier pas dans l'hébergement dit "professionnel" (car tout hébergeur ne l'est pas forcément) : payer une certaine somme contre une prestation d'hébergement ainsi qu'un nom de domaine. <ins>emunova.net</ins> était né.

Le site gagne en fréquentation, change plusieurs fois de prestataire d'hébergement (dont un pauvre *on qui m'aura bien arnaqué) et en décembre 2003, le verdict tombe : le site est "trop" fréquenté. Jusqu'à présent, Emu Nova pouvait se contenter d'un hébergement dit **mutualisé**. Ca revient à placer 10, 20, 30 sites ou plus sur une même machine physique tout en leur faisant partager les ressources (processeur, RAM, bande-passante). Les prestataires les moins scrupuleux n'hésitent pas à surcharger leurs machines pour ainsi faire culpabiliser les clients et, <acronym title="Conditions Générales de Vente">CGU</acronym> oblige, peuvent couper du jour au lendemain l'accès à un site qui ne les respecte pas : quota d'utilisation de processeur, quota de bande-passante. Généralement, ces "quota" sont très vagues et impossibles à mesurer par le client.

Janvier 2004 et 3000 visiteurs uniques par jour au compteur, je souscris à un contrat de location pour un hébergement **dédié**. A la différence du mutualisé, on ne loue pas un espace sur une machine mais on loue carrément la machine elle-même. Cette liberté implique aussi de nombreuses responsabilités : en cas de plantage logiciel ou matériel, c'est à nous de prévoir les sauvegardes et quelles mesures appliquer pour rétablir la situation. Bien plus cher qu'un hébergement mutualité, c'est le prix à payer pour conserver son indépendance et poursuivre l'aventure.

La facture mensuelle "explose" et passe de 30€ à 108€. Ce coût pour une machine louée aux Etats-Unis est pourtant _réduit_ par rapport à ce qu'on aurait pu payer en France à cette époque là : à prix équivalent, on disposait d'une machine moins puissante et surtout, moins fournie en bande-passante. Là, on avait 1000Go (= 1<abbr title="Tera-octet">To</abbr>) et on se disait déjà qu'on ne les utiliserait jamais...

### Bilan et constats

2 ans plus tard, en janvier 2006, la machine commence à montrer des signes de faiblesse : redémarrages intempestifs (en partie dus à des attaques massives destinées à surcharger le serveur pour en prendre le contrôle), lenteur accrue et difficulté à maintenir la couche logicielle. Installer un programme quelconque relève du calvaire total. Je me demandais même comment la machine faisait pour tenir le coup. Allez demander à un asmatique de courir un marathon à la montagne avec un vent de face...

En 24 mois, le "petit" Emu Nova qui avait conquis le domaine de l'émulation française avait fait son trou mais surtout accru sa gourmandise. On passait de 20Mo tout compris (base de données et fichiers) à 450Mo de fichiers (dont 150Mo de base de données) et 15Go de données téléchargeables.

Nous en étions là :

*   1To de données transférées par mois; soit la totalité de ce qui nous était alloué
*   manque de puissance (Celeron 1,3Ghz, 1Go de RAM)
*   offre logicielle obsolète et potentiellement exploitables par des personnes mal-intentionnées
*   une fréquentation en hausse régulière (+3000 visiteurs tous les 12 mois)

Plusieurs solutions s'offraient alors à nous :

*   améliorer la machine. Impossible : la stabilité ne serait pas améliorée et on n'aurait pu rajouter que de la RAM. Or ce n'est pas ce qu'il manquait en premier lieu.
*   rester aux Etats-Unis pour bénéficier d'un euro fort (mais en perte de vitesse par rapport au dollar). Point relativement peu important car nos revenus sont gagnés en billets verts.
*   rester aux Etats-Unis, chez le même hébergeur qui plus est, et monter en gamme de puissance. Changement peu pertinent à court terme car aucun serveur de la gamme n'offrait un surplus conséquent de bande-passante. La seule solution à ce niveau se chiffrait à plus de 400$, chose qu'on ne pouvait se permettre.
*   sauter le pas et revenir en France où le marché a considérablement évolué : bande-passante importante, offre matérielle adaptée (fini le temps de serveurs où 256Mo de RAM était un luxe !) et surtout, IP machine localisée en France. Ce dernier point peut paraître anodin mais dans les moteurs de recherche, les résultats des **Pages : France** ne concernent que les sites dont les **serveurs physiques** sont géographiquement placés en **France**. Bien qu'internationale, nous ciblons avant tout les personnes françaises (et francophones bien sûr).

Tout le monde l'aura compris, la dernière solution était la plus intéressante et pertinente face à nos besoins. Le prix gonfle bien entendu avec l'offre souscrite puisqu'on passe de 108€ à 178€. Légèrement au-dessus des revenus générés par le site (intégralement financé par la publicité et peut-être dans un futur proche par de véritables partenaires commerciaux), la balance devrait revenir à l'équilibre avec le temps. Plus un site rapporte, plus il coûte ... l'inverse ne marche pas ;-)

### Préparatifs

Maintenant que la situation est bien cernée et qu'on a trouvé ce qu'il nous fallait, "y'a plus qu'à" comme qui dirait ? Oui mais en fait non pas vraiment. Au départ si le site n'était composé que d'une poignée de fichiers pouvant tenir dans une tête de pigeon, il a non seulement pris de l'ampleur et du volume mais il s'est également complexifié et "enraciné" à la structure existante.

Emu Nova, c'est un mini-hébergeur à titre gracieux (pour l'équipe du site, des personnes de notre activité), un serveur de téléchargement FTP, un serveur de mail et surtout, un site traitant d'émulation et de jeux vidéo très fréquenté à maintenir.

La préparation a duré 9 jours. Ce temps ne compte pas la consultation d'offres de serveurs ni la mise en place du cahier des charges (état des lieux, pointage des données à récupérer, procédures de sauvegarde adaptées etc.) :

*   découverte du serveur, consultation des documents d'utilisation et de guides pratiques
*   mise à niveau logicielle de la machine
*   ajout de logiciels supplémentaires pour subvenir à des besoins futurs
*   installation du nom de domaine primaire de la machine (pour héberger par la suite et de façon transparente les autres sites, dont Emu Nova)
*   simulation d'un transfert de site factice (pointage du nom de domaine, transfert de fichiers, paramétrage et utilisation)
*   préparation des hébergements pour refléter les conditions actuelles (hébergements, emails, accès FTP etc.)
*   mise en place de mesures de sécurité (pare-feu, filtrage de données, connexions sécurisées et certificats d'identification)

C'est seulement à la fin de toutes ces étapes que j'ai pu me dire "c'est bon, on va pouvoir tenter le coup !". Le rendez-vous était pris : dimanche 14 mai à 21h. Ca passe ou ça casse.

### La migration en elle-même

Dimanche 14 à 20h55, le site Emu Nova est mis en berne pour l'immobiliser. En effet, le problème de ces sites c'est que les données sont perpétuellement altérées (ajout de messages dans les forums, édition de messages, envoi de fichiers). Pour être sûr d'avoir une sauvegarde fidèle à 100%, il faut donc tout arrêter. C'est le moment d'effectuer le changement de <acronym title="Domain Name Server">DNS</acronym>.

Les DNS, concrètement, c'est l'association entre un nom de domaine (emunova.net par exemple) et l'IP de la machine physique. Si mon appartement correspond à l'hôte (le nom de domaine), son adresse permet d'identifier de façon unique sa présence sur le Web (l'IP). L'opération consiste à dire que l'adresse a changé et qu'il faudra désormais interroger un autre serveur, logeant à une autre adresse mais répondant au même nom. Comme un déménagement classique en somme.

Bref, 2h30 plus tard, tous les fichiers de sauvegarde ont été créés (site, bases de données, emails) et transférés. Les emails sont remis dans leur compte d'origine. Les sites sont installés, reparamétrés et vérifiés une dernière fois. Il se fait tard et j'avoue ne plus trop avoir le courage d'attendre que les 15Go de roms et d'ISO soient copiés ... je n'aime pas dormir avec le PC allumé. Les téléchargeurs fous pourront attendre, une demi-journée sans zizo ou rooms, ça se pardonne contre une petite gâterie ;-D

Délai souvent compris entre 24 et 72h, la propagation de la nouvelle adresse d'<ins>emunova.net</ins> a été faite en un clin d'oeil. Prenez ça comme étant un transfert d'adresse à votre bien aimée "la Poste". Probablement parce que la nouvelle destination se trouve en France et que nos serveurs locaux ont été mis à jour en premiers (il y a plusieurs serveurs qui font office d'"annuaire DNS", une dizaine dans le monde ... ça fait pas beaucoup comparé à la masse de noms de domaines en circulation !).

Le lundi 15 à 8h30 pétantes, après un oubli d'intégration de base de données (100 000 messages dans les forums ça s'oublie pas pourtant), le site reprend vie et accueille de nouveau les errants en manque d'activité au lycée, à la fac ou en "pause-café-toute-la-journée".

### Bilan des courses

Voici donc ce qu'une simple bascule de serveur occasionne : des heures d'étude, des heures de préparation, des heures d'installation. Et quand c'est bien fait, ça représente peu d'ennuis et surtout beaucoup de satisfaction pour de nombreux jours à venir ;-)

![Progression de la fréquentation du site Emu Nova entre 2002 et 2006](https://oncletom.io/images/Emu-Nova/emunova-statistiques-progression-2002-2006.png)
**novembre 2002** : 300 visiteurs quotidiens ; **mai 2006** : 9000 visiteurs quoditiens
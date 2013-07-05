title: "Freelance, 4 mois plus tard"
id: 18428
date: 2011-05-03 10:00:50
tags: 
- comptable
- cyneticmonkey
- expérience
- gestion
- projet
- stratégie
- tarif
categories: 
- Développement Web
- Entrepreneuriat
---

Je suis officiellement gérant de la SARL [CyneticMonkey](http://cyneticmonkey.com) depuis le 5 janvier 2011\. J'ai d'ailleurs expliqué des raisons m'ayant poussé à [devenir indépendant](https://oncletom.io/2011/pourquoi-devenir-freelance/ "Pourquoi j’ai décidé de devenir indépendant ?"). Je complète la réflexion avec l'animation d'un atelier au [BarCamp Bordeaux](http://www.barcamp-bordeaux.com/) intitulé « [Freelance : pourquoi, comment et avec qui ?](http://www.barcamp-bordeaux.com/wiki/wiki/freelance-pourquoi-comment-avec-qui) ». 4 mois c'est court, ça passe vite mais ça reste significatif quand on démarre ... surtout dans la mesure où on n'attend qu'une chose : faire ses preuves.

Je vous fais part de mes impressions, de mes actions mais aussi de mes craintes. J'en profite aussi pour vous communiquer un pré-requis indispensable : **motivation**. En étant seul à bord, on n'a pas d'autre choix que de maintenir le cap, et d'aller au-delà de son propre ressenti.

![](http://media.oncle-tom.net/images/2011/03/logo_cyneticmonkey_standard-300x207.png "CyneticMonkey")

<!--more-->

### Choisir une banque

[La banque est un univers formidable](http://www.lesbanquiers.com/) (évitez d'avoir votre patron dans le dos pour ouvrir le précédent lien ...). Tout est plus ou moins sujet à taxe ou autre prélèvement : frais de tenue de compte, frais de mouvement, frais d'immobilisation etc. Leurs sites Web sont nazes mais à part ça, faut quand même payer.

Bref, le choix d'une banque est crucial, pour encaisser des contrats et surtout, faire chauffer la carte bleue. Étant en perso à la Banque Postale, j'ai tenté le coup. Grand bien m'en a pris puisque de toutes façons, **cette banque n'est pas perçue comme une banque dans le milieu professionnel** mais surtout, j'ai du mal à comprendre que lorsqu'on appelle pour prendre rendez-vous, si mon conseiller n'est pas disponible, ce dernier ne peut pas me rappeler dès qu'il le peut. Parce que soit disant la standardiste ne peut pas lui faire passer le message.
_End of line_ comme dirait l'autre.

Je me suis au final tourné vers le Crédit Mutuel – non pas pour leur ignoble site Web de gestion de comptes mais plutôt parce que la conseillère a d'une part été dynamique, disponible, et surtout suffisamment efficace pour que tout se passe rapidement. Pas folle non plus, aucun coût d'acquisition de client, peu de complications en prévision.
J'ai apprécié le coup de pouce consistant à exonérer de frais de gestion pendant les 6 premiers mois, et d'une grille tarifaire claire (on ne paie rien de plus que les frais de gestion mensuels). J'adore leur machine à scanner/encaisser les chèques : saisie du montant à l'écran et photocopie dans la foulée. Qui plus est, ça simplifie simplifie la gestion comptable.

### Mise en place de l'infrastructure technique

J'ai passé les premiers jours de mon activité à mettre en place toute mon infrastructure technique. Ça passe aussi bien par l'outillage nécessaire à produire, via mon ordinateur, que par les solutions logicielles à employer pour facturer, suivre les projets et gérer mes opportunités commerciales.

J'avais déjà décidé d'utiliser Google Apps pour gérer ma messagerie, du coup j'ai orienté ma recherche de CRM sur le [_marketplace_ Google Apps](http://www.google.com/enterprise/marketplace/). C'est ainsi que j'ai découvert [Insight.ly](http://insight.ly/). J'ai été séduit tant par son intégration à Gmail que par la simplicité de l'outil.
Je peux transformer un email en opportunité, en projet ou l'ajouter (ainsi que ses pièces-jointes) à l'historique des activités liées à une entité (personne ou entreprise).
Vraiment pas mal du tout, pour mes besoins en tous cas. Le produit s'améliore régulièrement, et c'est une bonne chose aussi.

Côté facturation et émission de devis, je m'en tiens à [Cedarloop](http://cedarloop.com/) puisque là aussi, sa simplicité me suffit et les documents générés sont de belle facture (sans jeu de mot ;-)). En plus, ça fait toujours plaisir d'utiliser un outil développé par des gens qu'on connaît. En l'occurrence, [Olivier Meunier](http://neokraft.net/), papa de Dotclear et depuis passé du côté [Temesis](http://temesis.com) de la Force.

Enfin, une micro-instance [Amazon EC2](http://aws.amazon.com/ec2/) et un certificat SSL plus tard, Redmine était déployé sur du Nginx et Passenger. Il cohabite avec git (via [gitolite](https://github.com/sitaramc/gitolite)) ce qui me permet de créer des dépôts à la volée depuis Redmine, de fonctionner avec une authentification par certificat et d'éviter la contrainte de la création manuelle de dépôt.
Je me sers pour l'instant des fonctionnalités par défaut, des _milestones_ au suivi du temps (estimé et passé) ... encore une fois tellement pratique puisque piloté par les commits.

[![](http://farm6.static.flickr.com/5017/5515047854_9c3d2912f7.jpg "Bloody Crime Scene")](http://www.flickr.com/photos/the-jedi/5515047854/)

### Formalités administratives

Tout ça c'est bien beau, mais la réalité administrative attend.

Dès le courant du mois de janvier, je me suis lancé dans la recherche d'un expert-comptable. Pour deux raisons :

*   la compta c'est pas mon truc (mais alors pas du tout) : **ça me coûtera moins cher de bien déléguer le travail** que de le faire moi-même (et le foirer) ;
*   en SARL, il faut publier les comptes annuels ; et tout ce bazar, il va s'en occuper ;-) ;
La troisième raison, c'est aussi parce que j'ai besoin d'une **attestation mensuelle pour pôle emploi**, afin de continuer à bénéficier de 100% du montant de mes indemnités. Ça fera l'objet d'un autre billet, les modalités ayant changé en cours de route.
Toujours est-il, pour en trouver un bien, j'ai demandé autour de moi, afin de sonder les personnes satisfaites de leur comptable. Gain de temps, puisque ça s'est fait du premier coup.
Et cerise sur le gâteau, j'ai compris en 2 heures de rendez-vous ce que je n'ai jamais compris en 3 ans de cours de compta ;-)

La Responsabilité Civile professionnelle est l'autre indispensable – et qui coûte d'entrée de jeu. Dans le milieu informatique, vous pouvez oublier votre assurance perso : ils seront incapables de vous en délivrer une. Ça semble se jouer au coude à coude entre [Hiscox](http://www.hiscox.fr/) et [Chartis](http://www.chartisinsurance.com/). Dans tous les cas, il faudra compter sur environ 500€ jusqu'à 100 000€ de chiffre d'affaire annuel. Sans pouvoir travailler avec l'Amérique du Nord – soumis à des contraintes supplémentaires sur lesquelles je ne me suis pas apesenti.

Restent encore les volets de la **mutuelle santé et de la prévoyance**. Bénéficiant encore du portage de mon ancienne mutuelle pro, j'en suis resté au stade des devis. Toujours est-il qu'en tant que travailleur non-salarié, faites passer les deux sur la [loi Madelin](http://www.loimadelin.com/cadre-fiscal-madelin/fiscalite-prevoyance-sante-madelin) : c'est la boîte qui paie, pas vous. Vos impôts vous diront merci.

### Création des documents types

Entre les installations et les rendez-vous administratifs à droite et à gauche, le temps file. Pour autant, avant de signer le premier contrat, il est important de disposer du minimum pour ... les signer justement :

*   conditions générales de vente
*   modèle de document
*   base de proposition commerciale
L'idéal est d'en avoir un maximum avant d'avoir le premier client. Surtout pour les premiers clients. Vu que quasiment tout est à faire, autant en laisser un minimum pour le dernier moment, histoire de se concentrer sur l'essentiel : la réponse adressée au client. Ce n'est d'ailleurs pas à ce moment là qu'il faudra vous soucier de votre charte graphique – un peu tard pour ça.

À terme je compte passer par la case juriste pour tout ce qui est document légal ou contrat – sur de sages conseils. Ça se fera par la suite, après avoir signé quelques contrats et sécurisé ma trésorerie.

### Premiers clients, premières propositions

Une des choses qui m'a le plus effrayé au début, c'est le fait de ne pas avoir de rentrées d'argent. En fait j'ai eu quelques petites missions, suffisantes pour couvrir les frais de départ (responsabilité civile, comptable) mais rien de très long. Se pose alors le **problème de la disponibilité et de la visibilité**.

J'ai eu la chance d'avoir d'entrée de jeu 2 missions : un accompagnement de projet innovant ainsi qu'une mission _product design_ et la réalisation de son site Web. Mon autre chance fût surtout la grande souplesse d'emploi du temps, et l'absence quasi systématique de date de livraison. Ça m'a permis de pouvoir gérer le flux commercial entrant, de caser mes rendez-vous imprévus sans pour autant mettre en cause ma crédibilité ni occasionner un retard projet.

J'avoue que pour commencer, c'est l'idéal. J'ai pu travailler l'esprit tranquille ... surtout que pour ma première proposition commerciale, je m'y suis escrimé pendant 5 jours, histoire de bien faire et surtout, parce qu'il y avait tout à faire (et puis OpenOffice quoi ...).

Ma première erreur a été d'accepter de répondre à un petit projet – par son budget, alors que fonctionnellement le prix était plus élevé que ça. Pour un premier contrat, je me suis dis que je pouvais bien le faire, que je me ferais la main sur une techno que je connais mais sans être expert non plus.
Ça m'a posé 2 problèmes : la nette sensation qu'il était impossible de tenir parole sur les délais/charges engagées et surtout, que je me vendais en expert sans être expert. Je ne suis pas sûr que débuter, en solo, sur **une mission éloignée de sa zone de confort soit un bon départ**, tant pour sa santé que pour une optique _business_.

Au final, les opportunités suivantes ont été beaucoup plus rassurantes, le besoin étant plus modéré et/ou sur des technos que je maîtrise – suffisamment pour qu'en cas d'inconnu, je ne m'inquiète pas sur mes **capacités à trouver des solutions**. Ce dernier point est le plus important. On ne peut pas tout savoir ; **il faut en revanche se faire confiance** pour combler ce manque.

En tous cas, c'est aussi l'occasion de constater que rien n'est à l'heure et que compter sa dispo au jour près suivant la date de réponse théorique d'un projet se révèle être périlleux. En pratique, il y a toujours plusieurs jours ou plusieurs semaines de flottement. Une bonne communication, à la fois pour prospecter une réponse, mais aussi envers les clients avec qui je suis engagé est importante et nécessaire. Pas de tension, pas de friction, pas de conflit.

### S'adapter au rythme de travail

J'étais déjà habitué à travailler dans un cadre autre qu'un bureau avec des collègues : chez moi, dans un autre logement ou encore dans les locaux de mes clients.
Toutefois, ça n'a jamais été une situation permanente et la dernière des choses à se dire, c'est qu'il n'y a pas de règles. Mon réveil est calé tous les matins sur 7h30 – sauf cas où j'estime que dormir plus m'apportera un travail de meilleure qualité. De même, j'essaie de m'astreindre à 1h30 voire 2h de pause le midi. En prenant bien le soin de faire autre chose que de l'ordinateur : ménage, bouquiner, prendre l'air/marcher.

**Ce qui change tout, c'est de devoir tout faire** : production, prospection, administration. En étant dans une organisation en solo, on peut rapidement se laisser déborder en cédant à tous les signaux : emails, coups de fil, Twitter etc. Considérer qu'on travaille 8h par jour est utopique. Il n'y a pas 8h de production en tous cas.
Je sais en revanche que je bénéficie d'un environnement calme, où les distractions sont limitées et où ma capacité de concentration s'en retrouve augmentée. C'est tout bénéf' pour les clients : leurs projets avancent plus vite. Je conserve une bonne visibilité sur ce que je fais, et eux aussi.

En revanche clairement, j'ai banni Twitter et Facebook de mes heures de travail : la tentation est trop forte. Ma fenêtre de navigation "loisir" se trouve sur un autre bureau, que je ne consulte que pendant mes pauses, courtes ou longues. Ces pauses sont dictées par la [méthode Pomodoro](http://www.pomodorotechnique.com/). À défaut de couper mes tâches en 25 minutes, je travaille en _sprints_ de 25 minutes, avec pause forcée et arrêt d'utilisation de l'ordinateur. Ça a le gros avantage de retarder l'effet de lassitude, si prompt à pédaler dans la choucroute.

### Affiner le positionnement et les tarifs

Dans le temps que je consacre à mon activité, j'ai en revanche une chance énorme : celle de n'avoir quasiment pas à prospecter. J'ai répondu à 3 appels d'offre, parce qu'ils me plaisaient et que j'en avais envie. Le reste, c'est sur cooptation et recommandation. Mon blog, celui-là même, joue encore un rôle important puisqu'il permet à quiconque de suivre mon évolution et, détail récurrent, c'est ce qui les motive à vouloir travailler avec moi. Même si ce n'était pas mon but initial, force est de constater que la part de **confiance joue un rôle déterminant** dans l'acquisition de mon flux commercial.

Je me suis toutefois posé la question des tarifs. J'étais habitué à la tarification au "profil" des SSII ... j'allais presque en oublier que tout simplement, je facture mon temps ... et mes compétences. Simplement, je me suis orienté vers un **tarif journalier unique**, peu importe ma prestation. Ma force de développeur ? C'est d'avoir une vision d'ensemble, une approche projet et une capacité à communiquer avec le client. Ma force de maîtrise d'ouvrage ? C'est d'être dans le cambouis, de savoir ce qu'impliquent les décisions, comment parler à des individus fonctionnels et techniques.

En étant une seule personne, je ne vois pas comment je pourrais dissocier ces compétences, se prêtant main forte mutuellement – sauf à devenir schizophrène.

Outre le tarif unique, je propose 3 modes opératoires :

*   la facturation de **crédit temps** à l'avance (et consommé au fil de l'eau) – pratique pour budgétiser des interventions ponctuelles ;
*   la **facturation à l'heure** – mode agile, que ça soit au forfait ou au consommé (rassure beaucoup les petites structures) ;
*   la **facturation à la journée** – classique.
Ce mode opératoire, accompagnée d'une transparence totale sur le temps passé suffit à rassurer mes clients, notamment car je suis proactif sur le temps passé. Ils savent ainsi si le projet prend plus de temps que prévu ; j'apporte mon ressenti et des solutions. Ils choisissent en connaissance de cause, selon leur budget et/ou leurs priorités.

Ils n'ont ainsi (jusqu'à présent) jamais eu l'impression de payer autre chose que de la qualité et de la tranquillité, dans le déroulement et la communication.

### Investissement matériel

Initialement, j'avais tendance à croire que mon ordinateur portable (Ubuntu sur Centrino Duo, 2Go de RAM et écran 17") suffirait, en terme de puissance et d'habitude de travail pour me procurer efficacité et donc productivité. Jusqu'au jour où j'ai réalisé la nécessité de me déplacer (notamment pour [Sud Web](http://sudweb.fr) – 5 heures de train jusqu'à Nîmes ...). Qu'à cela ne tienne, je complète cela par un Netbook (Ubuntu Netbook sur HP PC Mini puis eeePC suite à un problème matériel du premier).

Au bout de 2 mois, je me résous à penser que ce n'est pas la bonne stratégie : en déplacement, je manque de puissance ; à domicile, je manque de mobilité. Je ne peux donc pas utiliser les mêmes outils, ni bénéficier du même confort ... surtout après avoir été habitué à l'inspection de code de Netbeans et d'Eclipse. Quand je réalise que j'adapte mes tâches de travail à l'ordinateur que j'utilise, car en déplacement ou à domicile, je me mets à prospecter un ordinateur puissant, bénéficiant d'une bonne autonomie et qui ne soit pas de la camelote.

L'improbable se passe alors : **je bascule sous Mac**. D'abord pour la machine. Ensuite pour l'intégration OS/machine qui, il faut le reconnaître, renvoie au placard tous les micro-détails de la gestion matérielle d'Ubuntu (excellente au demeurant – agaçante parfois). En clair, j'ai considéré la combinaison OS/machine comme un **investissement en productivité**, en temps que je ne perds pas et surtout, en confort de travail, peu importe mon lieu de travail.

### Conclusion

En bref, je trouve le bilan positif pour l'instant, tant dans l'apprentissage que dans l'accomplissement des valeurs me tenant à cœur.

J'ai appris à mes dépends que grossir le trait du risque, ou de ne pas se faire confiance est une des pires choses, à vivre et à faire. L'écoute de son entourage, proche et/ou professionnel, est un facteur clé qui évite de se planter. Croire en leur parole est salvateur ; et à défaut de ne pas penser comme eux, c'est un bon étalon pour ajuster sa propre estime de soi.

Au contraire, ma confiance et le fait de prendre du temps pour m'approprier la problématique de mes clients est ce qui les convainc. D'une part car je ne produis pas le discours habituel et, c'est lié, car je leur livre une vision personnelle des projets, en plus d'une grille tarifaire très précise. Autrement dit, j'écris ce que je pense, et on me choisit parce qu'on me fait confiance.
title: "Migration vers Google Apps"
id: 777
date: 2007-10-16 13:00:26
tags:
- dns
- gmail
- google
- google apps
- qmail
- webmin
categories:
- Développement Web
---

En constatant que nombre d'entreprises optaient pour des solutions de travail collaboratives en ligne, je me suis dis <q>pourquoi pas moi ?</q> [Emu Nova](http://www.emunova.net) est presque une petite <acronym title="Petite et Moyenne Entreprise">PME</acronym> avec sa quinzaine de collaborateurs dont un noyau dur de 8 personnes. Je souhaitais **faciliter la communication interne**, le **partage de documents**, leur **sécurité** et gagner la tranquilité d'un **antispam performant**.

La migration de tous les comptes mails vers _Google Apps_ se solde par un sans-faute et la mise à disposition d'outils appréciés et efficaces.
<!--more-->
Ce qu'il faut savoir avant toute chose c'est que _Google Apps_ est disponible en plusieurs version, trois à l'heure où j'écris :

*   _Google Apps_ édition Standard (gratuite)
*   _Google Apps_ édition Premier (payante)
*   _Google Apps_ édition Education (gratuite)

Les édition Premier et Education sont _strictement_ identiques si ce n'est le prix. L'édition Education est gratuite mais n'est en revanche accessible que pour les établissements scolaires à but non lucratif. Sinon il faudra débourser 40€ annuel par compte utilisateur. Pour le reste, je vous conseille de visualiser les [différences entre les versions de Google Apps](http://www.google.com/a/help/intl/fr/admins/editions_spe.html) pour mieux les comprendre.

Ce que je souhaitais avant tout c'était de **récupérer tous les emails actuels pour les injecter dans Google Apps**. Cette fonctionnalité n'est disponible que dans l'édition Premier mais par chance, il se trouve qu'il existe une version d'essai de 30 jours _totalement fonctionnelle_. Mieux encore, la carte de crédit n'est pas débitée avant ces 30 jours. Vous commencez à cerner le loup : **j'ai souscrit à l'offre Premier pour importer les emails et j'ai résilié**. Sans débourser un centime, j'y tiens.

## Paramétrage des DNS avec Webmin / Bind 8

L'étape de configuration des emails est suffisamment claire et bien renseignée pour que n'importe quel administrateur s'en sorte. Toutefois, comme j'utilise Webmin pour me simplifier la vie, voici la configuration qu'il faut appliquer dans les champs <abbr title="Mail eXchange">MX</abbr> du domaine à migrer :

![Webmin : configuration des serveurs MX pour Google Apps](https://oncletom.io/images/2007/10/webmin-bind-mx.png)

Alors deux choses :

1.  les modifications des MX ne sont prises en compte qu'au redémarrage de Bind (ou de votre machine si elle redémarre, un plantage est si vite arrivé [_troll_:avec Windows])
2.  une fois que vous basculez définitivement vers Google Apps, il faudra songer à supprimer vos anciens MX ;-)

## Paramétrage du <acronym title="Mail Transport Agent">MTA</acronym> avec Webmin / Qmail

La configuration est bien passée, Google a activé le service mail. OK mais il reste encore une subtilité : **l'envoi de mails depuis votre machine**.

En effet, si vous expédiez des emails depuis la machine au nom de votre nom de domaine, il y a de très fortes chances qu'ils ne soient pas expédiés au bon endroit. La raison est que votre logiciel d'acheminement de mails (Qmail dans mon cas) **considère le domaine comme étant local** donc ne passe pas par Internet : il dépose le mail _directement_ dans la boîte mail (l'ancienne, celle avec la migration). L'astuce consiste à sortir le domaine de la liste des domaines locaux et fort heureusement, c'est facile et rapide à faire ... quand on le sait.

**Via Webmin** :
Dans _Virtual Mappings_ et _Accepted Domains_, il suffit juste de supprimer le nom de domaine concerné.

![Qmail : suppression du localdomain](https://oncletom.io/images/2007/10/webmin-qmail-outgoing.png)

**Via le shell** :
A l'aide d'un éditeur de texte (nano, vi, emacs etc.), il faut procéder de la même manière (supprimer le nom de domaine) dans les fichiers `/var/qmail/control/virtualdomains` et `/var/qmail/control/rcpthosts`.

## Import des emails _via_ IMAP

![Google Apps : import IMAP des emails](https://oncletom.io/images/2007/10/google-apps-mail-import.png)

Pour vous donner un ordre d'idée, **25 000 emails répartis dans 15 comptes ont mis deux heures à être récupérés avec une seule connexion IMAP**. Il faut compter deux heures de plus pour une intégration complète des emails et quoiqu'il arrive, les comptes sont utilisables. C'est juste que les emails continueront à s'ajouter dans des labels représentatifs de l'arborescence IMAP (`INBOX/` etc.).
Il faut malgré tout savoir que pendant cette importation, **chaque email est passé à l'antivirus et au filtre antispam**.

L'absence d'IMAP avec _Google Apps_ n'est pas une gêne grâce à l'archivage systématique des emails en ligne. L'antispam agit en amont de la récupération POP et c'est un régal d'enfin vivre sans spam, ce fléau des temps modernes.

## Conclusion

Cette migration des mails et l'adjonction d'outils de travail collaboratifs (dont _Google Docs_ et _Google Calendar_ en tête) se révèle être un **gain de temps au quotidien et se double d'une meilleure efficacité de travail**. _Les outils sont perfectibles_ (notamment la visualisation des révisions de documents) mais travailler simultanément sur un document et en discuter à même la page est un bonheur sans nom.
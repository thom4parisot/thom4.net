---
title: Sauvegarde de données
date: 2026-08-17 12:00:00
categories:
- Journal
- Explorations
- Dégafamisation
---

J'arrivais au bout de ma sixième année d'utilisation d'[Arq Backup][^1].
Avec l'arrivée de la notification de renouvellement de l'abonnement (60$ par an, pour le logiciel *et* 1 To de stockage), je me suis posé la question de continuer.

Arq est compatible macOS et Windows *mais* pas Linux.
Or l'arrivée d'un serveur à la maison change la donne, car je tiens également à le sauvegarder. Donc la question du logiciel de sauvegarde. Donc la question du stockage.

J'aurais pu partager l'espace entre toutes les machines ? Probablement que ça aurait pu continuer ainsi.

Sur ma machine, j'aimerais :

- un truc qui tourne tout seul en tâche de fond — une fois configuré, y'a rien à penser ;
- de la sauvegarde sur stockage compatible S3 ou Backblaze B2 ;
- soit une interface graphique qui fait le job ;
- soit un fichier de configuration qui décrit tout (destinations, conditions, fichiers à inclure/exclure).

Idéalement, j'aimerais appliquer la même chose sur un deuxième ordinateur à la maison, sous Windows.

Le paysage a changé depuis cette dernière exploration — concomitante à celle d'[Éric](https://n.survol.fr/2025/05/sauvegarde-photos-juin-2025). Alors je me suis relancé dans recherches et comparaisons.

### Restic(profile)

Le serveur auto-hébergé utilise déjà [restic]. C'était très facile à configurer avec Yunohost. Donc ça doit bien être la même chose ?

Sauf que par défaut, restic *sauvegarde* mais ne tourne pas en arrière-plan. Et il faut arriver à tout exprimer en une ligne de commande.

[resticprofile] ajoute la dimension "configurer avec un fichier". Ça aurait pu me plaire mais j'ai eu du mal à rentrer dans les concepts. Au final, j'ai crains de faire des erreurs, et donc à créer une sauvegarde qui fonctionne mais marche mal.

### Borg(matic)

C'est surtout que j'avais testé [Borgmatic] juste avant. J'avais adoré sa syntaxe de configuration et la clarté de la documentation.

Mais pas *encore* de destination S3/B2 dans le logiciel bas-niveau, [Borg v1][Borg].
Dommage dommage !

### Kopia ou Duplicity ?

Sans avoir à payer d'abonnement annuel ni triturer les entrailles, il ne me restait plus que [Kopia] et [Duplicity]. Le gagnant a été le … premier onglet d'ouvert. Donc Kopia.

![](/images/2026/08/kopia.webp "Capture d'écran des règles de sauvegarde de Kopia")

La configuration des règles a été un peu laborieuse au début — à 2 heures du matin je n'y voyais plus très clair :

- puis j'ai compris que les *Policies*{lang=en} correspondaient aux règles de sauvegarde
- et que les *snapshots*{lang=en} correspondaient aux artéfacts de sauvegarde de chaque règle.

Ainsi en sauvegardant tous les jours à 13h00, je n'ai pas *une* sauvegarde mais autant que de règles.

Quand il a fallu recréer les règles pour paramétrer la sauvegarde sur un disque dur USB, frustration : il fallait tout recréer. S'il n'y avait rien dans l'interface, il y avait en revanche deux utilitaires (`kopia export` et `kopia import`) qui permettaient de dupliquer les règles d'une destination de sauvegarde à une autre.

---

Au passage, ça m'a permis d'apprendre à combiner le trousseau de sécurité macOS (via le programme `security`) et [KeypassXC]. Et que par exemple, on peut utiliser un mot de passe rattaché à sa session macOS pour obtenir une valeur contenue dans un autre gestionnaire de mots de passe :

```bash
security find-generic-password -a 'restic' -w | keepassxc-cli show -sqa password  ~/Library/CloudStorage/MountainDuck-nextcloud.maison.lan/keypass-sync/restic.kdbx sauvegarde
```

Cette commande aide à extraire l'attribut `password` [^2] de l'entrée `sauvegarde` dans la base de données Keepass `restic.kdbx`. La base est déverrouillée avec un mot de passe stockée dans le trousseau natif de macOS.

![](/images/2026/08/keepassxc.webp "Capture d'écran d'une entrée du gestionnaire de mots de passe KeepassXC")


[^1]: J'étais précédemment passé par [Crashplan](https://www.crashplan.com/) puis [Backblaze Backup](https://www.backblaze.com/cloud-backup/personal), tous devenus trop chers pour mon usage.
[^2]: Mais ça aurait pu être un autre attribut personnalisé comme la clé d'API stockée dans le champ `applicationKey`.

[Arq Backup]: https://cloud.arqbackup.com
[restic]: https://restic.net/
[resticprofile]: https://creativeprojects.github.io/resticprofile/
[Borg]: https://www.borgbackup.org/
[borgmatic]: https://torsion.org/borgmatic/reference/configuration/
[KeypassXC]: https://keepassxc.org/docs/
[Duplicati]: https://duplicati.com/
[Kopia]: https://kopia.io/

*[To]: terraoctet
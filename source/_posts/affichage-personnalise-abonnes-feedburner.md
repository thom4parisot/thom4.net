title: "Affichage personnalisé de ses abonnés Feedburner"
id: 1359
date: 2009-05-14 07:00:23
tags:
- api
- awareness
- feedburner
- wp-cron
- xml
categories:
- WebDev
- WordPress
---

Qu'on se le dise : le compteur de lecteurs Feedburner par défaut est sympa mais **s'intègre mal dans n'importe quel design de site Web**. [Lors de la refonte du thème graphique de ce blog](https://oncletom.io/2009/04/15/menage-printemps/), j'ai eu envie de remettre mon compteur d'abonnés Feedburner mais sous forme de texte. Même si le chiffre indiqué peut se révéler inexact, j'estime que c'est un **indicateur intéressant** sur la consultation d'un flux. Je suis également convaincu qu'à partir d'un certain nombre de lecteurs, ça facilite la conversion : si le nombre est élevé, c'est que le site est bien  ... donc je m'abonne.

Bref, j'ai voulu implémenter ça de **manière propre et peu gourmande** avec [WP-Cron](http://codex.wordpress.org/Category:WP-Cron_Functions), l'API [Feedburner Awareness](http://code.google.com/intl/fr/apis/feedburner/awareness_api.html) et la classe [PHP 5 SimpleXML](http://fr.php.net/simplexml). Une poignée de lignes de code suffisent, pourquoi s'en priver ? ;-)

<!--more-->

## Le besoin

![Compteur d'abonnés](/images/2009/05/compteur-abonnes-feedburner-texte.png "Compteur d'abonnés")

La plupart des exemples que l'on trouve sur le Web attaquent directement l'API Feedburner Awareness. Autrement dit, votre page ne s'affichera pas tant que l'API n'aura pas été appelée et son résultat interprété. Étant donné que cette valeur change 1 fois par jour, il vaut mieux aborder la chose différemment. C'est pourquoi je voulais :

*   récupérer 1 à 2 fois par jour la valeur courante du nombre de lecteurs ;
*   accéder à cette valeur simplement depuis mes templates (avec un appel à get_option() par exemple).

**On y gagne sur tous les fronts** : on ne ralentit pas l'affichage côté utilisateur, l'information est récupérée en arrière-plan, nos templates graphiques restent simples.

## Activation du service Feedburner Awareness

La première chose à faire est d'**activer l'API Awareness pour votre flux**. Cette API permet de récupérer des statistiques sur un flux Feedburner au format XML. On y retrouve entre autre le nombre de lecteurs. On peut obtenir ces informations pour la date courante, la veille ou une plage de jours par exemple.

C'est vraiment simple à utiliser, la [documentation Feedburner Awareness](http://code.google.com/intl/fr/apis/feedburner/awareness_api.html) est complète dans son genre.

![Activation du service Feedburner Awareness](/images/2009/05/feedburner-awareness-activation.png "Activation du service Feedburner Awareness")

**Remarque** : cette API s'active par flux Feedburner de manière individuelle et est désactivée par défaut.

## Extraction du nombre de lecteurs

Dans un premier temps, on va **récupérer le nombre de lecteurs pour son flux**. On verra dans un second temps comment l'automatiser.

Le principe est simple : on appelle une URI avec son identifiant de flux Feedburner (exemple dans mon cas : http://feeds.feedburner.com/LaCaseDeLoncTom). On lui spécifie 2 dates : la veille et l'avant-veille. Pourquoi ? Car les données de la veille ne sont pas toujours existantes : les compteurs sont actualisés à 11h heure française. L'idée est de pouvoir se mettre un nombre de lecteurs sous la dent.

```php
define('FEEDBURNER_URI', 'LaCaseDeLoncTom');
function oncletom_update_feed_readers()
{
  $uri = sprintf('https://feedburner.google.com/api/awareness/1.0/GetFeedData?uri=%s&amp;dates=%s,%s',
    FEEDBURNER_URI,
    date('Y-m-d', strtotime('-2 day')),
    date('Y-m-d', strtotime('-1 day'))
  );

  $http = new WP_Http();
  $readers = (int)get_option('feed_readers');
  $response = $http->get($uri);
  $xml = new SimpleXMLElement(WP_Http::chunkTransferDecode($response['body']));
  $feed = (array)$xml->feed;

  foreach (array_reverse($feed['entry']) as $entry)
  {
    if ((int)$entry['circulation'])
    {
      $readers = (int)$entry['circulation'];
      update_option('feed_readers', $readers);
      break;
    }
  }

  return $readers;
}
```

Quelques remarques :

*   j'ai utilisé la classe  `WP_http` qui fournit une abstraction d'appel à des ressources distantes. C'est le plus propre pour fonctionner sur la majorité des installations ;
*   j'inverse le tableau des résultats car ils sont triés par ordre chronologique _croissant_ par défaut  ; nous voulons l'information la plus fraîche d'abord ;
*   on aurait pu utiliser un paramètre de fonction pour fournir l'URI du flux _mais_ dans l'étape d'après, il se trouve qu'on ne pourra lui en passer ... dommage ;
*   on aurait également pu remplacer la constante par un appel à un `get_option()` et pourquoi pas, récupérer l'ID depuis un réglage du plugin Feedburner FeedSmith.

## Programmation d'une tâche planifiée avec WP-Cron

On en arrive à la partie sympa : programmer cette récupération du nombre d'abonnés pour qu'on n'ait pas de travail manuel à faire. L'idéal est de placer ceci dans un plugin. Personnellement je l'ai inséré dans le _hook_ `switch_theme()` de mon thème pour économiser un fichier/plugin.

```php
//dans un fichier wp-content/plugins/oncletom-awareness-cron.php
/*
Plugin Name: Simple Feedburner Awareness
Description: Asynchroneous feed readers collector scheduled twice a day.
Author: Oncle Tom
Version: 1.0
Author URI: https://oncletom.io/
Plugin URI:

  This plugin is released under version 3 of the GPL:
  http://www.opensource.org/licenses/gpl-3.0.html
*/

register_activation_hook(__FILE__, 'oncletom_awareness_cron_activate');
register_deactivation_hook(__FILE__, 'oncletom_awareness_cron_deactivate');
add_action('oncletom_cron_twicedaily_hook', 'oncletom_update_feed_readers');

function oncletom_awareness_cron_activate()
{
  add_option('feed_readers', 0, '', 'yes');
  wp_schedule_event(time(), 'twicedaily', 'oncletom_cron_twicedaily_hook');
}

function oncletom_awareness_cron_deactivate()
{
  delete_option('feed_readers');
  wp_clear_scheduled_hook('oncletom_cron_twicedaily_hook');
}
```

Vous vous souvenez encore de notre fonction `oncletom_update_feed_readers()` ? Et bien on pourrait la rajouter dans ce plugin pour tout avoir au même endroit. L'organisation de votre code vous appartient ;-)

Quoiqu'il en soit, une fois le plugin activé, **tout est prê**t : il ne reste qu'à intégrer le compteur d'abonnés dans le thème. C'est notre prochaine étape.
Juste une remarque : la fonction `wp_schedule_event()` prend comme dernier argument un nom de _hook_ et non un nom de fonction.

## Intégration dans le thème

C'est la partie la plus simple et pour cause, un simple appel à `get_option('feed_readers')` nous retourne le nombre d'abonnés. On ne pouvait pas faire plus rapide ;-)

```html
<p>J'ai <?php echo get_option('feed_readers') ?> abonnés</p>
```

## Conclusion

**WordPress fournit tous les mécanismes** pour accéder aisément à des données de manière asynchrone. Il ne nous a pas coûté grand chose de collecter le flux XML et de l'enregistrer. En le faisant ainsi en arrière plan, on évite toute gêne pour l'utilisateur et tout traitement superflu exécuté en affichage.

Assez étonnamment, je n'ai croisé [aucune extension dans le catalogue WordPress](http://wordpress.org/extend/plugins/tags/awareness). J'espère que ça vous dépannera et que votre thème graphique appréciera !
**Mise à jour** : aucun plugin n'était tagué _awareness_ ; [FeedBurnerCount](http://wordpress.org/extend/plugins/feedburnercount/), [Feed Subscriber Stats](http://wordpress.org/extend/plugins/feed-subscriber-stats/) et [Feedburner Text Count](http://wordpress.org/extend/plugins/feedburner-text-counter-v10/) produisent très probablement le même résultat que le contenu de cet article.
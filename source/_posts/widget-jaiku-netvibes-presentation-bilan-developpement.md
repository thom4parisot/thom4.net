title: "Widget Jaiku pour Netvibes : présentation et bilan du développement"
id: 1070
lang: fr
date: 2008-08-20 07:00:37
tags:
- css
- dashboard
- iphone
- jaiku
- json
- macosx
- micro-blogs
- netvibes
- proxy
- widget
- xhtml
categories:
- WebDev
- JavaScript
---

J'ai publié il y a quelques semaines un [widget Jaiku](http://eco.netvibes.com/widgets/241591/jaiku "widget Jaiku pour Netvibes") dans l'[écosystème Netvibes](http://eco.netvibes.com). Autrement dit, on peut désormais interagir avec le sous-employé Jaiku depuis son compte Netvibes en levant à peine le petit doigt.

La réalisation de ce widget était pour moi l'occasion de réaliser mon premier widget utilisant la plateforme UWA : un développement rendu compatible pour plusieurs plateformes dont [iGoogle](http://igoogle.com), [MacOS X Dashboard](http://www.apple.com/downloads/dashboard/), [Windows Live](http://live.com) etc.

<!--more-->

## Présentation du widget Jaiku pour Netvibes

Avant de rentrer dans les détails techniques, faisons ensemble un petit tour de ce qu'est capable de faire le widget Jaiku. Rien de bien méchant puisqu'il fait ce qu'on veut : lire et envoyer les messages. Faut savoir rester simple ;-)

![Jaiku pour Netvibes](/images/2008/08/jaiku-netvibes.png "Jaiku pour Netvibes")

Je ne me cacherai pas que je me suis largement inspiré du widget Twitter pour Netvibes au niveau de la présentation tout en ajoutant ma touche personnelle.

L'écran de connexion accueille directement avec des champs identifiant et mot de passe pour faciliter son utilisation. Pas besoin d'aller fouiller dans les options. Un petit confort on dira.

L'entête contient ce qu'il faut pour envoyer des messages : votre lieu de présence et le champ de saisie. Le compteur de texte se met à jour à chaque caractère saisi et surtout, votre saisie n'est pas bloquée une fois que vous atteignez la limite. Il n'y a rien de plus pénible que ça.

**Le gros du morceau réside dans les onglets** : pour une fois vous pouvez facilement naviguer d'une ligne de temps à une autre. Choisissez les messages de vos contacts, les vôtres (un peu narcissique non ?) ou encore les messages publics.
Les 3 onglets sont paginés à la convenance de l'utilisateur, de 1 à 20 messages par page.

J'ai ensuite agrémenté de plusieurs fonctionnalités que j'apprécie à l'usage (à vous de me dire si c'est aussi le cas) :

*   **possibilité de répondre à un message** en pré-remplissant le champ de saisie avec ce qu'il faut (et ce que l'API Jaiku permet de faire ...)
*   icône signalant l'**origine des messages** affichés (flux RSS, Twitter, Last.fm etc.)
*   **filtrage de ses propres messages** : vos messages n'apparaîtront pas dans la ligne de temps des contacts (ce qui en soit n'est pas plus mal)
*   **formattage des messages** avec une meilleure reconnaissance de URL que le widget Twitter et surtout, une reconnaissance des noms d'utilisateurs (@utilisateur) et des noms de canaux (#canal) ... vous permettant de leur répondre en cliquant sur leur nom

Il resterait encore pas mal de choses à faire mais on arrive malheureusement assez rapidement aux limites des 2 services.

## L'API Jaiku

L'[API Jaiku](http://devku.org/docs) est très bien mais un peu **chiche en services**.

Le nombre de flux en récupération est suffisant : contacts, messages, informations personnelles.
En revanche les méthodes d'envoi sont limitées et pour cause, il n'y en a qu'une : envoyer un message.

Il ne manque pas grand chose pour qu'on puisse tout faire :

*   obtention de la liste des icônes personnalisées
*   préciser à quel message on adresse une réponse (pour éviter de casser les discussions)
*   une gestion de _messages privés_ (et les flux qui vont bien)
*   une API qui ne souffre pas d'autant de délai ... parfois il faut attendre 3 heures avant d'avoir un flux actualisé. Pas pratique pour de la messagerie en temps quasi-réel

Ces demandes ont été faites mais bon, il faudra attendre la [relance de Jaiku avec Google App Engine](http://www.jaiku.com/blog/2008/08/18/from-the-dev-corner-an-under-the-hood-preview-of-our-new-engine/) ... très bientôt visiblement.

## Et du côté de Netvibes ?

Le développement du widget repose sur l'API UWA de Netvibes et donc par conséquent, c'est du développement 99% JavaScript.

Heureusement tout n'est pas à faire puisqu'UWA fournit une base d'outils et quelques fonctionnalités natives comme la pagination ou les onglets.

## Quels avantages à utiliser Netvibes UWA ?

La [spécification UWA](http://dev.netvibes.com/doc/universal_widget_api) permet donc à partir d'un **développement unique de le porter sur d'autres plateformes de blogs** en un minimum d'efforts (très souvent aucun). Il faut savoir qu'à chaque plateforme de widget il y a une manière de développer différente.

Alors plutôt que de parier sur un cheval, avec UWA, on peut parier sur tous. Et ne faire qu'un seul développement.

Le développement d'un widget aboutit très généralement à l'ajout dans l'[écosystème Netvibes](http://eco.netvibes.com). Le widget se retrouve ainsi à la portée de toutes les pages de démarrage par le biais de son moteur de recherche intégré.

Côté développement, tout reste globalement simple quand on veut faire du simple.

## Mais quelle galère à développer avec Netvibes UWA ...

En revanche ça devient beaucoup moins drôle quand on tombe sur des besoins mal couverts par la documentation.
Et quand je dis _mal couvert_, ça inclut :

*   pas de documentation du tout
*   une documentation partielle et pas suffisamment verbeuse (genre pour les onglets et la pagination)
*   une documentation obsolète et pas recommandée de leur propre aveu (le stockage des mots de passe)

**L'adoption d'un service et sa qualité se jugent à mon avis par sa documentation**. Certes des efforts sont faits mais leur API deviendra crédible et fiable le jour où elle sera à jour et complète.

En plus de ça, certaines fonctionnalités sont elles aussi incomplètes.

Au hasard, le **processus de l10n** : à implémenter soi-même et encore, il ne pourra pas couvrir tous les besoins comme les préférences. C'est d'autant plus dommage que leur système est particulièrement au point pour l'interface traduite en une dizaine de langues.
Mais pas les widgets ...

Toute à l'heure j'évoquais les mots de passe. Il y a bien un mécanisme qui permet de les stocker mais il agit comme il veut : **on ne peut stocker qu'un mot de passe par widget** et surtout, on ne peut pas l'utiliser autrement que dans le cas d'une identification HTTP.
Autrement dit, le stockage d'un clé d'API se fera dans un champ texte standard.

Ça ne serait pas gênant si la plupart des widgets étaient exécutés dans une iframe et que cette dite iframe embarquait dans l'URL toutes les préférences enregistrées. Donc _votre_ clé d'API.
Pourquoi c'est gênant ? Car il y a un _mécanisme inhérent_ à tout navigateur Web qui s'appelle le Referrer. En clair, quand vous affichez une page, votre navigateur envoie l'adresse de la page appelante.
Je me passerai du dessin ...

Enfin, et pour terminer sur une note un peu moins noire, l'environnement de développement est un superbe outil pour tester son widget de manière indépendante. C'est à dire sans se connecter sur netvibes.com.
Enfin là où le bas blesse c'est que les **comportements et la présentation sont différents** entre l'environnement de développement et Netvibes.

Ce qui sous-entend des bugs présents en développement et pas en production, la gestion des mots de passe qui diffère en développement de la production et du paramétrage spécifique pas documenté.

## Proxy local pour widget Netvibes

Le [proxy de développement Netvibes](http://dev.netvibes.com/doc/uwa_faq) indiqué dans la FAQ est fonctionnel mais _trop minimaliste_. On peut en effet récupérer les données mais dès qu'il s'agit d'en envoyer, c'est cuit.

J'ai donc adapté le [proxy du Yahoo! Developer Network](http://developer.yahoo.com/javascript/samples/proxy/php_proxy_simple.txt) à mes besoins en ajoutant plusieurs fonctionnalités :

*   **mise en cache des requêtes GET** pour accélérer les chargements de page et éviter de cramer trop de requête auprès de fournisseurs les limitant (qui a dit Twitter ?)
*   **transmission des données POST** ; c'est ce qu'il manquait le plus à la version fournie par Netvibes
*   **compatible texte/JSON/XML** ; le proxy renvoie les bonnes entêtes en fonction de la demande

```php
<?php
define('CACHE_TTL', is_int($_GET['cache']) ? $_GET['cache'] : 3600);
define('CACHE_FOLDER', dirname(__FILE__).'/cache');
//
$session = curl_init($_GET['url']);

// If it's a POST, put the POST data in the body
if (isset($_POST) && !empty($_POST))
{
  $postvars = '';
  while ($element = current($_POST))
  {
    $postvars .= key($_POST).'='.$element.'&';
    next($_POST);
  }
  curl_setopt ($session, CURLOPT_POST, true);
  curl_setopt ($session, CURLOPT_POSTFIELDS, $postvars);
}

// Play with some cache
$md5sign = md5($_GET['url'].$postvars);
$md5file = CACHE_FOLDER.'/'.$md5sign;

/*
 * Read cache
 */
if (file_exists($md5file) && filemtime($md5file)+CACHE_TTL > time())
{
  curl_close($session);
  send_headers_content_type($_GET['type']);
  readfile($md5file);
  exit();
}

// Don't return HTTP headers. Do return the contents of the call
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

// Make the call
$output = curl_exec($session);
$fp = fopen($md5file, "wb+");
fwrite($fp, $output);
fclose($fp);

send_headers_content_type($_GET['type']);
echo $output;
curl_close($session);

/*
 * Functions
 */
function send_headers_content_type($type)
{
  // Set the Content-Type appropriately
  switch ($type)
  {
    case 'text':
    default:
      header("Content-Type: text/plain");
    break;

    case 'xml':
      header("Content-Type: text/xml");
    break;

    case 'json':
      header('Content-Type: text/x-json');
    break;
  }
}
```

En revanche, je serais vous, **j'éviterais de m'en servir publiquement** car il n'y a aucune vérification de sécurité donc à moins que vous ayiez envie de servir de relais à spam, le mieux est de n'utiliser ce proxy que sur une instance locale ou bien de davantage le blinder.

## Conclusion

On arrive désormais au terme de ce billet fleuve ;-)

Quoique je puisse en dire, **Netvibes UWA est quand même fort sympathique** et permet d'aboutir à des temps de développement assez courts une fois la majorité des problèmés rencontrés. Nul doute que **votre premier développement sera le plus compliqué**. Surtout si comme moi vous avez envie de tout utiliser : pagination, onglets et AJAX à droite à gauche.

Dans tous les cas, **une bonne conception de l'application vous sauvera la mise** et évitera trop de réécriture de code.
L'implémentation de la pagination et des onglets est particulièrement douloureuse si vous n'utilisez pas de programmation objet. Soyez-en avertis.

Je me suis personnellement bien amusé à développer en utilisant UWA et en jouant avec l'API Jaiku. Cette dernière met vraiment l'accent sur le JSON ce qui est très pratique pour manipuler des données distantes de manière minimaliste.

**Une fois que ces 2 plateformes arriveront à maturité, il y aura de quoi faire d'encore plus belles applications**.

N'hésitez pas à utiliser [Jaiku sur Netvibes](http://eco.netvibes.com/subscribe/241591), à me laisser vos remarques et à partager votre expérience de développement de widgets si le cœur vous en dit :-)

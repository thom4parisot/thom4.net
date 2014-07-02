title: "OpenSearch et Google AdSense"
id: 459
date: 2007-02-23 13:00:42
tags:
- google
- google adsense
- opensearch
- seo
categories:
- WebDev
---

Les _navigateurs Web modernes_ intègrent désormais quasiment tous une boîte de texte destinée à effectuer une recherche dans son moteur favori. Ces dits navigateurs permettent également d'ajouter les sites de son choix grâce au format [OpenSearch](http://www.opensearch.org) initié par [A9](http://www.a9.com), filiale d'[Amazon](http://www.amazon.fr).

Armez-vous d'un _éditeur de texte_ et ... c'est tout. Il n'en faut pas plus pour créer son propre module de recherche ;-)

<!--more-->

![Logo OpenSearch](/images/2007/02/opensearch.png)

## Repérer les sites compatibles OpenSearch

Les sites proposant à leurs visiteurs un moteur de recherche intégrale au navigateur Web se signalent en mettant en surbrillance l'icône du moteur par défaut. Ca manque de clarté et de mise en avant mais il faudra faire avec en attendant que le format gagne en popularité.

![OpenSearch et Firefox 2](/images/2007/02/emunova-opensearch-fx2.png)

_Moteur OpenSearch dans Firefox 2_

![OpenSearch et Internet Explorer 7](/images/2007/02/emunova-opensearch-ie7.png)

_Moteur OpenSearch dans Internet Explorer 7_

## Construire son module OpenSearch

Pour réussi à construire mon propre module, c'est simple, j'ai tout simplement bouquiné la documentation disponible (<acronym title="Read The Fucking Manual">RTFM</acronym> comme on le répète si souvent) :

*   [Spécification OpenSearch 1.1](http://www.opensearch.org/Specifications/OpenSearch/1.1/Draft_3)
*   [Créer un greffon OpenSearch pour Firefox](http://developer.mozilla.org/en/docs/Creating_OpenSearch_plugins_for_Firefox)

A noter qu'en farfouillant dans le module de [Netvibes](http://www.netvibes.com), j'ai trouvé une fonctionnalité très intéressante : la **mise à jour automatique**. Cela permet d'actualiser les informations du module de recherche (URL du moteur, icône, nom du site etc.) sans avoir à inviter les utilisateurs à enlever puis rajouter le module.

Le résultat final est là :

```xml
<?xml version=&quot;1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>Emu Nova</ShortName>
  <Description><![CDATA[Jeux vid&amp;eacute;o, &amp;eacute;mulation et retrogaming.]]></Description>

  <Url type="text/html" method="GET" template="http://www.google.com/?q={searchTerms}" />
  <InputEncoding>ISO-8859-1</InputEncoding>

  <Image width="16" height="16">http://www.emunova.net/favicon.ico</Image>
  <Tags>emulation retrogaming video games nintendo sony microsoft sega arcade consoles computers</Tags>
  <SyndicationRight>open</SyndicationRight>
  <Language>fr-fr</Language>

  <UpdateUrl>http://www.emunova.net/go/opensearch.xml</UpdateUrl>
  <IconUpdateUrl>http://www.emunova.net/favicon.ico</IconUpdateUrl>
  <UpdateInterval>3</UpdateInterval>
</OpenSearchDescription>
```

J'ai pris le soin d'aérer la présentation pour mieux situer les parties distinctes. Je n'aborderai pas la question du Doctype. Je fais appel à 2 déclarations différentes afin d'utiliser des balises spécifiques (celles liées à la mise à jour automatique en l'occurrence).

### Informations de base

1.  **ShortName** : nom du moteur qui figurera dans les navigateurs (souvent équivalent au nom du site)
2.  **Description** : description du service fourni par le moteur (actualité, fiches etc.)

### Moteur de recherche

1.  **Url** : URL du moteur appelé. Le texte <kbd>{searchTerms}</kbd> est remplacé dans l'URL par les mots saisis dans la boite de recherche
2.  **InputEncoding** : encodage utilisé par le moteur de recherche _en entrée_

### Informations complémentaires

1.  **Image** : icône à afficher. Il y a également possibilité de la fournir directement en base64 pour éviter de faire appel à un fichier d'image supplémentaire ([encoder une image en base64](http://software.hixie.ch/utilities/cgi/data/data))
2.  **Tags** : quelques mots-clés pour qualifier le moteur
3.  **SyndicationRight** : accorde ou pas la possibilité de syndiquer les résultats dans un aggrégateur
4.  **Language** : langue employée par le moteur (norme _ISO-chaipasquoi_)

### Mise à jour automatique

1.  **UpdateUrl** : fichier servant de comparaison (en général le même)
2.  **IconUpdate** : icône à afficher lorsqu'une mise à jour est présente
3.  **UpdateInterval** : intervalle de temps entre chaque vérification de mise à jour

A noter que je n'ai **vraiment pas** abordé toutes les options existantes ni même évoqué la possibilité de suggestion de résultats. Le but était de _créer rapidement et simplement un module_ adapté à la plupart des besoins. Le reste est dans la doc.

## Intégrer son module OpenSearch à un site Web

Créer un fichier de recherche c'est bien beau mais reste ensuite à l'intégrer sur son site. Le plus simple reste la promotion par le biais du mécanisme de détection automatique. Une simple balise d'entête (se situant entre `<head>` et `<head>`) fait l'affaire. La seule difficulté consiste à renseigner le bon chemin d'accès ... dur, dur.

```html
<link title="Emu Nova" type="application/opensearchdescription+xml" rel="search" href="mon_fichier_opensearch.xml">
```

## Intégrer Google AdSense pour la recherche à un module OpenSearch

L'utilisation de la chaîne `{searchTerms}` permet d'envoyer de formuler une recherche via l'URL. Tous les moteurs connus utilisent un paramètre dans l'URL contenant les mots recherchés. Le plus intéressant est évidemment de générer des revenus grâce à un moteur de recherche pertinent et permettant une recherche dans son site (et l'ensemble du Web).

[Google AdSense](http://www.google.com/adsense) propose un tel moteur (à base de [Google Custom](http://google.com/coop/cse/)). Il suffit de récupérer l'URL de recherche du moteur de recherche pour Adsense, de l'intégrer comme URL de recherche OpenSearch et en voiture Simone.
Grâce au mécanisme de mise à jour automatique, ce moteur pourra évoluer en fonction de vos besoins (ajout de canal, changements de couleurs, de logos & cie) et ceux de vos usagers. Sans la moindre contrainte.
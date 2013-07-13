title: "OpenID : comment gérer ses identités sur Internet"
id: 865
date: 2008-02-12 07:00:17
tags:
- blogger
- claimid
- identité numérique
- logiciels libres
- microformats
- openid
- personas
- yahoo
categories:
- Développement Web
cover: /images/2008/02/openid-logo.gif
---


[OpenID](http://openid.net/) est un **service d'identité numérique** qui permet, entre autre, de mettre fin à la sempiternelle saisie des noms d'utilisateurs et des mots de passe. C'est gratuit, c'est libre et ça permet de gérer plusieurs identités sous la même adresse.
Puisque de plus en plus de services proposent d'utiliser OpenID, intéressons-nous de près avant de terminer sur quelques astuces et autres microformats ;-)
<!--more-->

## OpenID, comment ça marche ?

L'identification sur le Web se résume souvent à un couple nom d'utilisateur/mot de passe, email/mot de passe ou encore code client/mot de passe.
Je ne vous apprendrai rien en indiquant que chaque site Web :

*   a sa propre politique de nom d'utilisateur (avec ou sans caractères spéciaux etc.)
*   a sa propre politique de mot de passe (longueur minimale, avec ou sans caractères spéciaux etc.)

On peut se retrouver facilement avec une bonne dizaine de combinaisons au fur et à mesure que l'on multiplie le nombre d'adhésions sur des sites Web. C'est d'autant plus le cas que l'on possède plusieurs identités :

*   son identité personnelle
*   son identité professionnelle
*   une à plusieurs identités en fonction de ses centres d'intérêts (jeux, photo etc.)

**OpenID c'est un seul paramètre** : une URL du genre `http://_pseudonyme_.serveur-openid.com`. Disposer d'une adresse OpenID c'est l'avantage de :

*   gérer plusieurs identités à partir d'une seule adresse
*   n'avoir plus qu'un seul mot de passe : celui de son adresse OpenID
*   ne plus avoir à s'inscrire : votre URL est déjà votre identifiant
*   ne plus galérer pour trouver un nom d'utilisateur alambiqué comme `toto9898464` : votre URL est unique

En s'authentifiant sur un service compatible OpenID, l'identifiant et le mot de passe sont à fournir au prestataire OpenID (pour vérifier qu'il s'agit bien de vous), la dernière étape étant celle de l'autorisation du service.
**Le prestataire OpenID vous met en relation de confiance**, relation qui peut s'arrêter du jour au lendemain. Vous révoquez ainsi l'accès du service à vos données personnelles.

## Choisir un prestataire OpenID

Avant de pouvoir utiliser OpenID, il faut obtenir une adresse OpenID ... comme on le ferait pour une adresse email par exemple.
Le nombre de fournisseurs OpenID croît ce qui a un peu tendance à dérouter : un et un seul prestataire suffit. Certains sont très populaires ce qui fait que vous pouvez disposer d'une adresse OpenID sans le savoir :

*   [Yahoo OpenID](http://openid.yahoo.com/) (du genre `https://me.yahoo.com/_pseudonyme_` ou `http://flickr.com/people/_pseudonyme_`)
*   [Wordpress.com](http://wordpress.com/) (du genre `http://_pseudonyme_.wordpress.com`)
*   [Blogger](http://blogger.com/) (du genre `http://_nom-du-blog_.blogspot.com`)
*   [Orange OpenID](http://openid.orange.fr/) (du genre `http://openid.orange.fr/pseudonyme`)

J'ai pour ma part choisi d'être indépendant de tous ces services en utilisant un des premiers prestataires historiques : [MyOpenID](https://www.myopenid.com/) pour ses fonctionnalités avancées un peu moins "grand public" ;-)

À partir du moment où vous disposez d'une adresse, vous pouvez l'utiliser sur tous les sites compatibles OpenID. Lors de votre première connexion, vous aurez le choix d'autoriser le service une seule fois, toujours ou jamais (les fraudes sont vite arrivées) mais aussi de choisir **quel profil de données transmettre au service** en question.

## Gérer ses profils avec OpenID

Un des avantages indéniable à mes yeux c'est la gestion des profils. Avec un seul identifiant on peut choisir quelle casquette porter. Ça ne parlera peut-être pas aux plus jeunes d'entre vous qui n'ont qu'une identité mais dès que l'on souhaite partager des données différentes en fonction du contexte, c'est vraiment l'idéal.
Ce concept est également appelé **personas** : on choisit quel masque on porte, quelle image on donne de soi.

![Gestion des personas avec MyOpenID](/images/2008/02/myopenid-personas.png)

Sur la capture d'écran ci-dessus, vous pouvez constater que je gère 2 personas :

*   **Oncle Tom** : mon identité professionnelle liée au Web
*   **The Jedi** : mon identité liée aux jeux vidéo (et accessoirement, mon pseudonyme historique)

J'ai la possibilité de choisir pour chacune des 2 personas mon avatar, ma date de naissance, mes sites Web, mon adresse etc. J'ai donc totalement la main sur les données que je souhaite transmettre. Ça ravira les personnes qui détestent fournir leur adresse email ;-)

## Utiliser la délégation OpenID pour se simplifier la vie

Maintenant voilà, l'URL du fournisseur n'est pas forcément la plus esthétique ni la plus facile à retenir qui soit. Mieux encore, vous souhaitez avoir une adresse OpenID mais pouvoir changer de fournisseur sans avoir à vous rappeler quel est votre fournisseur actuel.
C'est tout à fait possible avec la [délégation OpenID](http://wiki.openid.net/Delegation).

**Ce système permet d'utiliser n'importe quel nom de domaine** sur lequel vous avez la main. Personnellement j'utilise une délégation pour utiliser [https://oncletom.io](/) comme identifiant OpenID. C'est possible par la simple adjonction de quelques lignes de code HTML au sein de la page. La documentation citée précédemment explique très simplement le mécanisme.

Puisqu'on se souvient plus facilement de l'adresse de son propre site Web, autant l'utiliser. Après tout, **votre site fait partie de votre identité numérique**.

## Choisir l'identification par certificat pour sécuriser ses connexions

J'apprécie tout particulièrement MyOpenID pour une autre fonctionnalité, en plus des personas : celle de l'authentification par certificat sécurisé. En clair je n'ai même plus à taper de mot de passe pour me connecter. **MyOpenID vérifie la présence d'un certificat** créé à ma demande et autorise en conséquent l'identification lorsque j'en ai besoin.

Ainsi, seule une personne ayant un accès physique à votre ordinateur ainsi qu'à votre session de travail pourra s'identifier à votre place. Autant dire que ça restreint énormément les possibilités. Évidemment l'intérêt est nul sur un ordinateur public (cybercafé entre autre).

![Gestion des certificats OpenID avec MyOpenID](/images/2008/02/myopenid-certificates.png)

## OpenID et microformats, l'avenir ?

Des réflexions sont en cours pour alier [OpenID et microformats](http://microformats.org/wiki/openid-brainstorming). L'idée serait de pouvoir spécifier si une URL sert effectivement d'identifiant OpenID pour faciliter la création de réseaux (sociaux notamment).
L'autre idée serait de coupler [OpenID, microformats et OAuth](http://microformats.org/wiki/OAuth) pour fournir un mécanisme d'authentification libre et pourquoi pas aboutir à du <acronym title="Single Sign On">SSO</acronym> : un identifiant pour les dominer tous.
On pourrait également parler de l'initiative [MicroID](http://microid.org/) permettant ainsi de bâtir des services de vérification comme [ClaimID](http://claimid.com/).

## Conclusion

**OpenID est un service qui a de quoi faciliter la vie**, simplifie les processus d'identification, de création de compte et englobe tout ça dans une gestion sécuritaire de vos données.
Étant donné la facilité à pouvoir obtenir une adresse sans se fatiguer et le nombre grandissant de services l'employant (Blogger, Twitterfeed, de nombreux blogs), ce billet est l'occasion rêvée de vous jeter à l'eau.

**Je parie sur OpenID car c'est un standard ouvert et car il y a un fort besoin dans ce domaine**. <del>.Net</del>/<del>Passport</del>/[Windows Live ID](https://accountservices.passport.net) de Microsoft n'a jamais réussi à percer et pourtant sur la forme c'est la même chose.
Les deux lacunes d'OpenID : tous les services ne sont pas compatibles (on en restera aux méthodes traditionnelles) et surtout, il va falloir arriver à éduquer les non-technophiles. Allez dire à Mamie Youpi de sortir son identifiant OpenID : aucune chance qu'elle comprenne.
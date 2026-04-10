<!-- .slide: data-background="images/serre-des-comilles.jpg"  data-state="background-dark" id="transport" -->

# ☎️ Comment se parlent les machines ?

(elles se cherchent et communiquent)

@@@

## Comme du _courrier_ postal

@@@

## `test@example.com`

_test_ : destinataire\
_@_ : chez\
_example.com_ : serveur


@@@

## `test@example.com`

_test_ : destinataire\
_@_ : chez\
_example.com_ : ~~serveur~~ foyer numérique

<small>(parce que dans un même foyer il peut y avoir plusieurs serveurs)</small>

~~~~

C'est un peu le principe des boîtes aux lettres dans un immeuble. Chaque boîte étant un serveur.

@@@

# Atteindre le foyer numérique

(trouver l'adresse à partir du nom)


@@@

<!-- .slide: data-background="images/dns-root.png" -->

@@@

<!-- .slide: data-background="images/base-adresse.png" data-background-size="contain" -->


@@@

<!-- .slide: data-background="images/dns-records.png" data-background-size="contain" -->

@@@

<!-- .slide: data-background="images/annuaire.png" data-background-size="contain" -->

@@@

# Logistique d'acheminement

(vous tournerez en direction de `154.54.6.222` puis `154.54.6.217` avant d'arriver en `154.54.83.73`)

@@@

<!-- .slide: data-background="images/traceroute-seattle-paris.png" -->

@@@

<!-- .slide: data-background="images/traceroute-grenoble-paris.png" -->



@@@

# Dialogue entre machines

<span class="fragment">salut, c'est orateurices@paris-web.fr</span><span class="fragment">, j'ai une lettre pour coucou@thom4.net, je peux ?</span><span class="fragment"> Tiens, la voilà.</span>

@@@

```smtp
S: MAIL FROM:<orateurices@paris-web.fr>
R: 250 OK

S: RCPT TO:<coucou@thom4.net>
R: 250 OK

S: DATA
R: 354 Start mail input; end with <CRLF>.<CRLF>
S: Title: Bravo, votre sujet pour Paris Web est retenu
S: … … …
S: <CRLF>.<CRLF>
R: 250 OK
```

~~~~

http://www.iprelax.fr/smtp/821-3.php

@@@

# Le _point commun_ de tous ces éléments ?

C'est standardisé ou open source.

([BGP](https://datatracker.ietf.org/doc/html/rfc4271), [DNS](https://datatracker.ietf.org/doc/html/rfc1035), [SMTP](https://www.rfc-editor.org/info/rfc2821), [IMAP](https://www.rfc-editor.org/info/rfc2060), [TCP/IP](https://datatracker.ietf.org/doc/html/rfc9293), [iana.org](https://www.iana.org/))


<!-- .slide: data-state="contrasted" -->

# Once upon a time…

(when I was a PHP developer…) {.footer}

@@@

<!-- .slide: data-background="images/code-to-deploy.png" -->

@@@

```bash
$ scp -Cr ./src production:/var/www/my-cool-website
```

@@@

<!-- .slide: data-background="images/cat.gif" -->

@@@

<!-- .slide: data-background="images/deploy-broken.png" -->

@@@

## *Multiple* points of failure

- software (typo) <!-- .element: class="fragment" -->
- transfer (incomplete, no gatekeeper) <!-- .element: class="fragment" -->
- execution (runtime failure) <!-- .element: class="fragment" -->
- host system itself <!-- .element: class="fragment" -->

@@@

<!-- .slide: data-state="contrasted" -->

## Not *reproducible* because hardly *repeatable*

@@@

## What "*install PHP5*" means

```bash
# Ubuntu
$ apt-get install php5 libapache2-mod-php5 php5-curl
$ php --version
> PHP 5.5.9 (cli)

# CentOS 6
$ yum install php curl curl-devel
$ php --version
> PHP 5.4.16 (cli)
```

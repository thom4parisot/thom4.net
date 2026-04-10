<!-- .slide: data-state="contrasted" -->

## Enters **LXC**

(circa 2008)

@@@

## LXC wraps an *app* and an *OS system* in a *rootfs* partition

@@@

```bash
# build.sh
$ lxc-create -t ubuntu -n nodejs-app --release trusty
$ lxc-start -n nodejs-app --daemon
$ cp ./src /var/lib/lxc/nodejs-app/rootfs
$ lxc-attach -n nodejs-app

$$ apt-get install nodejs -y
$$ npm install
^A^D

$ lxc-stop -n nodejs
```

@@@

## From the *host* perspective

```bash
docker@default:~$ ps fx
  PID TTY      STAT   TIME COMMAND
    2 ?        S      0:00 [kthreadd]
    3 ?        S      0:01  \_ [ksoftirqd/0]
    5 ?        S<     0:00  \_ [kworker/0:0H]
    7 ?        S      0:00  \_ [rcu_sched]
    8 ?        S      0:00  \_ [rcu_bh]
    9 ?        S      0:00  \_ [migration/0]
   10 ?        S<     0:00  \_ [khelper]
  987 ?        S      0:00 ntpd -d -n -p pool.ntp.org
…
19086 pts/0    Ss+    0:00 /bin/sh -c npm start
19115 pts/0    Sl+    0:00  \_ npm
19124 pts/0    S+     0:00      \_ sh -c static -p ${PORT:-5000} dist/
19125 pts/0    Sl+    0:00          \_ node /app/node_modules/.bin/static -p 5000 dist/
…
```

@@@

## From the *container* perspective

```bash
app@aa05e05fc3ae:~$ ps fx
  PID TTY      STAT   TIME COMMAND
    1 ?        Ss+    0:00 /bin/sh -c npm start
   28 ?        Sl+    0:00 npm
   37 ?        S+     0:00  \_ sh -c static -p ${PORT:-5000} dist/
   38 ?        Sl+    0:00      \_ node /app/node_modules/.bin/static -p 5000 dist/
```

@@@

## One benefit: **self contained**

Container is not aware of its parent host.

@@@

## But *not (trans)portable*

<!-- .slide: data-state="contrasted" -->

# #5 System image

@@@

![](images/system-image.png)

@@@

```bash
vagrant up

packer build

aws ec2 create-image
```

@@@

## `stdin` = env variables

@@@

## `stdout` = file

a.k.a. *Golden image*.

@@@

## `stderr` = *varies*

Linux exit codes.

@@@

## State = *predictable*

Mountable filesystem and executable environment.

@@@

## Reproducibility = *exact*

(re)start from predictable point.

@@@

## Chef, puppet, Ansible?

Reproducible provisioning. Consecutive provisioning does not guarantee state though.


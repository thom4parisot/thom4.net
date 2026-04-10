<!-- .slide: data-state="contrasted" -->

# #6 Machine

@@@

```bash
aws ec2 run-instances --image-id=... --user-data=...

aws ec2 create-tags --tags ... --resources i-... 
```

@@@

## `stdin` = machine tags, user data

@@@

## `stdout` = i/o

Network connections, local filesystem.

@@@

## `stderr` = *varies*

Guru meditation, monitoring alerts, internal logs. 

@@@

## State = *mostly predictable*

Load and app issues will interfere (like memory leaks, memory swap etc.).

@@@

## Reproducibility = *exact*

If from immutable image.

@@@

## Chef, puppet, Ansible?

Install time increased, state not guaranteed.

<!-- .slide: data-state="contrasted" -->

## **Orchestrated** components

@@@

## What if I need…

- a *Rails* application (w/ Ruby 2.1.7)
- *ElasticSearch* (1.4)
- *PostgreSQL* (9.3)
- *Redis* (3.0)
- ?

@@@

## **docker-compose** to the rescue

- no more *complicated README*
- easier than doing everything by hand
- acts as a *technical documentation* of needed resources
- spins up a stack from scratch in minutes
- ability to scale up/down individual containers

@@@

## docker-compose.yml

```bash
web:
  build: .
  links:
    - db
    - search
    - queue
  environment:
    - DATABASE_URL=postgres://postgres:postgres@db:5432/postgres
    - ELASTICSEARCH_URL=http://search:9200
    - REDIS_URL=redis://queue:6379
queue:
  image: redis:3.0

db:
  image: postgres:9.3
  - POSTGRES_PASSWORD=postgres

search:
  image: elasticsearch:1.4
```

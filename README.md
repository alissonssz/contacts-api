# contacts-api
Basic project to try some techs

## Running contacts-api

```
$ npm i
$ npm run start:dev
```
## Running migrations

Pre-requisite: You should have a mysql 5.7 instance up.

Create database if not exists

```
$ db-migrate db:create contacts --config database.json -e dev 
```
Obs: In case of throw the error "ER_BAD_DB_ERROR: Unknown database 'contacts'" remove "database": "contacts",
from database.json file 

If it already exists then:

```
$ cd /database
$ db-migrate up --config database.json -e dev -v
```

Obs: Probably we'll put all these database settings into a docker image

## Using API

| HTTP Method  | Endpoint  |
|--|---|
| GET  |  localhost:3000/users |
| GET  |  localhost:3000/users/:id |
| POST  |  localhost:3000/users |
| PUT  |  localhost:3000/users/:id |
| DELETE  |  localhost:3000/users/:id |




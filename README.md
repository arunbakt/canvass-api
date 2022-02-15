# canvas-api
API server that has endpoints for creating and retrieving canvas notes

## Developer setup

Install node in your dev machine. See installing via a package manager [here](https://nodejs.org/en/download/package-manager/).

Do the following steps
1. Install the dependencies for the project
`cd canvass-api`
`npm install`

2. Create  the .env file and supply the db host, username, and password for a mysql db you have access to with enough privileges to create a schema and tables.

3. Run the following commands to create the canvass schema and migrations

Create schema/database named `canvass`

`node_modules/db-migrate/bin/db-migrate db:create canvass --config=db-migrations/database.json`

Create the tables needed by the api server by running db-migrate
`node_modules/db-migrate/bin/db-migrate up --migrations-dir=db-migrations --config=db-migrations/database.json`

4. Run the following command to run the server
`node .`
/** Connecting to Postgres DB on Heroku, not used at the moment but may be used in the future*/
const {Client} = require('pg')
const {SQL_DATABASE_URL} = require('./ config.js')

const client = new Client({
    connectionString: SQL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const {Pool} = require('pg')
const pool = new Pool({
    connectionString: SQL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = {
    dbClient: client,
    dbPool: pool
};
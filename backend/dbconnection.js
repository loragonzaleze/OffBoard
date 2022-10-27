const pgp = require('pg-promise')();
const {SQL_DATABASE_URL} = require('./ config')
const connectionString = {
    connectionString: SQL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const db = {}  
db.conn = pgp(connectionString)


module.exports = {
    db : db.conn
}
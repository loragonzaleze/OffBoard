/** Connecting to Postgres DB on Heroku */
const {Client} = require('pg')
const {SQL_DATABASE_URL} = require('./ config.js')

const client = new Client({
    connectionString: SQL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

client.query('SELECT * FROM talent;', (err, res) => {
    if (err) throw err;
    console.log("Connected to talent database")
    client.end();
  });

module.exports = client;
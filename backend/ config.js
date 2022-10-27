/** Read variables from .env file */
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    SQL_DATABASE_URL: process.env.SQL_DATABASE_URL   
};
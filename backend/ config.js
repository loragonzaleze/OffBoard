/** Read variables from .env file */
const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    SQL_DATABASE_URL: process.env.SQL_DATABASE_URL,
    EMAIL_HOST: process.env.EMAIL_HOST,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};
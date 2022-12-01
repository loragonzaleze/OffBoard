const nodemailer = require('nodemailer');
const { EMAIL_HOST, EMAIL_USER, EMAIL_PASSWORD } = require('./ config');

console.log("EMAIL_USER: " + EMAIL_USER);
console.log("EMAIL_PASSWORD: " + EMAIL_PASSWORD);
const transporter = nodemailer.createTransport({
    port: 465,
    host: EMAIL_HOST,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
    },
    secure: true,
})
module.exports = {
    emailServer : transporter
}
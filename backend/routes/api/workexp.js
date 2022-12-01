const express = require('express')
const router = express.Router()
const { db } = require('./../../dbconnection')


router.get('/', (req, res) => {
    let query = 'SELECT * FROM workexp';
    db.many(query)
    .then(res1 => {
        let data = {}
        for(let i = 0; i < res1.length; i++){  
            data[res1[i].email.toString()] = res1[i];
        }

        res.status(200).send(
            {
                success: true,
                message: "Successfully retrieved work experience",
                data
            }
        )
    })
    .catch(err => {
        console.log(err)
        res.status(400).send(
            {
                success: false,
                message: "An error occured retrieving work experience: " + err,
            }
        )
    })

})

module.exports = router 
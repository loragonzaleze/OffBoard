const express = require('express')
const router = express.Router();
const { db } = require('./../../dbconnection')





router.post('/confirm', (req, res) => {
    var key = req.body.key;
    console.log("Got key: " + key)

    var findKeyQuery = 'SELECT * FROM signup WHERE key = \'' + key + '\';'

    db.oneOrNone(findKeyQuery)
    .then(data => {
        if(!data){
            res.status(400).send(
                {
                    success: false,
                    message: "Sign up link not valid",
                    type: "key_not_found"   
                }
            ) 
            return;
        }

        if(data.key_used){

            if(data.finished_sign_up) {
                res.status(400).send(
                    {
                        success: false,
                        message: "Sign up link already used",
                        type: "key_already_used"
                    }
                )
            } else {
                res.status(200).send(
                    {
                        success: true,
                        message: "Sign up link already used, but not finished signing up",
                        type: "key_already_used_but_sign_up_incomplete",
                        data
                    }
                )
            }
            return;
            
        }

        var updateKeyQuery = 'UPDATE signup SET key_used = true WHERE key = \'' + key + '\';'
        db.none(updateKeyQuery).then(() => {
            res.status(200).send(
                {
                    success: true,
                    message: "valid",
                    type: "key_successful",
                    data
                }
            )
        })
       
    })

})

module.exports = router;
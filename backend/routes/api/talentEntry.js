const express = require('express');
const router = express.Router();
const { db } = require('./../../dbconnection')


/**
 * Schema of post request for talent entry
        full_name: String,
        email: String,
        resume: String,
        url: String,
        linkedin: String,
        location: String,
        country: String,
 */


router.post('/', (req, res) => {
    var full_name = req.body.full_name;
    var email = req.body.email;
    var resume = req.body.resume;
    var url = req.body.url;
    var job_title = req.body.job_title;
    var job_category = req.body.job_category;
    var linkedin = req.body.linkedin;
    var location = req.body.location;
    var country = req.body.country;

    var findDuplicateQuery = 'SELECT * FROM talent WHERE email = \'' + email + '\';';

    db.oneOrNone(findDuplicateQuery)
    .then(data => {
        if(data != null) {
            console.log(email + " already exists!");
            res.status(400).send(
                {
                    success: false,
                    message: email + " already exists!",
                    type: "duplicate"
                }
            )
            .catch(err => {
                console.log(err);
                res.status(400).send(
                    {
                        success: false,
                        message: "An error occured: " + err,
                        type: "error adding to database"
                    }
                )
            });
        } else {
            var insertQuery = 'INSERT INTO talent (full_name, email, resume, url, job_title, job_category, linkedin, location, country) ' + 
            'VALUES (\'' 
            + full_name + '\', \'' 
            + email + '\', \'' 
            + resume + '\', \'' 
            + url + '\', \'' 
            + job_title + '\', \''
            + job_category + '\', \''
            + linkedin + '\', \'' 
            + location + '\', \'' 
            + country + '\');';

            db.none(insertQuery)
            .then(() => {
                console.log("Successfully added " + email + " to the database!");
                res.status(200).send(
                    {
                        success: true,
                        message: "Successfully added " + email + " to the database!",
                        type: "successfully added user to database"
                    }
                );
            })
            .catch(err => {
                console.log(err)
                console.log("Error adding " + email + " to the database!");
                res.status(400).send(
                    {
                        success: false,
                        message: "Error adding " + email + " to the database!",
                        type: "error"
                    }
                );
            })
        }

    })

});


module.exports = router

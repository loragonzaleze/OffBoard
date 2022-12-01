const express = require('express');
const router = express.Router();
const { db } = require('./../../dbconnection')
let encrypt = require('bcryptjs')


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
    var job_title = req.body.jobTitle;
    var job_category = req.body.job_category;
    var linkedin = req.body.linkedin;
    var location = req.body.location;
    var country = req.body.country;
    var github = req.body.github;
    var phoneNumber = req.body.phoneNumber;
    var salary = req.body.salary;
    var workModel = req.body.work_model;
    var password = req.body.password;
    var company = req.body.company;

    var findDuplicateQuery = 'SELECT * FROM talent WHERE email = \'' + email + '\';';


    let hashPassword = async function(){
        var passwordHash = await encrypt.hash(password, 10)
        return passwordHash;
    }
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
            var insertQuery = 'INSERT INTO talent (full_name, email, resume, url, job_title, job_category, linkedin, location, country, github, phone_number, work_models, salary_range, company) ' + 
            'VALUES (\'' 
            + full_name + '\', \'' 
            + email + '\', \'' 
            + resume + '\', \'' 
            + url + '\', \'' 
            + job_title + '\', \''
            + job_category + '\', \''
            + linkedin + '\', \'' 
            + location + '\', \'' 
            + country + '\', \'' 
            + github + '\', \''
            + phoneNumber + '\', \''
            + workModel + '\', \''
            + salary + '\', \''
            + company + '\');';

            db.none(insertQuery)
            .then(() => {
                console.log("Successfully added " + email + " to the database!");
                hashPassword().then((hashedPassword) => {
                    var insertNewUserQuery = 'INSERT INTO login (email, password) VALUES (\'' + email + '\', \'' + hashedPassword + '\');';
                    db.none(insertNewUserQuery).then(() => {
                        res.status(200).send(
                            {
                                success: true,
                                message: "Successfully added " + email + " to the database!",
                                type: "successfully added user to database"
                            }
                        );
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).send(
                            {
                                success: false,
                                message: "Error adding " + email + " and password to the database!",
                                type: "error"
                            }
                        );
                    })
                })
               
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

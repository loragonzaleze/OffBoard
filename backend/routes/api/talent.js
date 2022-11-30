/** Using GraphQL */
/** Setup of database */
const express = require('express');
const graphql = require("graphql")
const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const { db } = require('./../../dbconnection')


const {
    GraphQLString,
} = graphql;

/** Using GraphQL */
var job_titles = new graphql.GraphQLEnumType({
    name: 'JOB_TITLES',
    values: {
        SOFTWARE_ENGINEER: { value: "Software Engineer" },
        PRODUCT_MANAGER: { value: "Product Manager" },
    } 
})

var job_types = new graphql.GraphQLEnumType({
    name: 'JOB_TYPES',
    values: {
        ENGINEERING: {value: "Engineering"},
        PRODUCT: {value: "Product"},
        BUSINESS: {value: "Business"}
    }
});

var talentType = new graphql.GraphQLObjectType({
    name: 'Talent',
    fields: {
        full_name: {type: GraphQLString},
        email: {type: GraphQLString},
        resume: {type: GraphQLString},
        url: {type: GraphQLString},
        job_title: {type: GraphQLString},
        job_category: {type: GraphQLString},
        linkedin: {type: GraphQLString},
        location: {type: GraphQLString},
        country: {type: GraphQLString},
        github: {type: GraphQLString},
        phone_number: {type: GraphQLString},
        work_models: {type: GraphQLString},
        salary_range: {type: GraphQLString},
    }
});
var queryType = new graphql.GraphQLObjectType({
    name: 'TalentQuery',
    fields: {
        user: {
            type: talentType,
            args: {
                email: {type: graphql.GraphQLString}
            },
            resolve: (_, {email}) => {
                const query = 'SELECT * FROM talent WHERE email = \'' + email + "\';";
                return db.one(query)
                .then(data => {
                    return data;
                })
                .catch(err => {
                    return 'The following error occured: ', err;
                })
            }
        },

        userJobCategory : {
            type: new graphql.GraphQLList(talentType),
            args: {
                job_category: {type: graphql.GraphQLString}
            },
            resolve: (_, {job_category}) => {
                const query = 'SELECT * FROM talent WHERE job_category = \'' + job_category + "\';";
                return db.many(query)
                .then(data => {
                    // console.log("This is the list data")
                    // console.log(data)
                    return data;
                })
                .catch(err => {
                    return 'The following error occured: ', err;
                })
            }
        },

        /** Write conditionals for filtering data for users lists */

        users: {
            type: new graphql.GraphQLList(talentType),
            resolve: (_, {}) => {
                const query = 'SELECT * FROM talent;'
                return db.many(query)
                .then(data => {
                    // console.log("This is the list data")
                    // console.log(data)
                    return data 
                })
                .catch(err => {
                    return 'The following error occured: ', err;
                })
            }
        }

    }
})
module.exports = {
    graphQLSchema : new graphql.GraphQLSchema({query: queryType}),
}

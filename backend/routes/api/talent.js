/** Using GraphQL */
/** Setup of database */
const express = require('express');
var { buildSchema, graphql } = require('graphql');
const { RowDescriptionMessage } = require('pg-protocol/dist/messages');
const pgp = require('pg-promise')();
const {SQL_DATABASE_URL} = require('./../../ config')
const connectionString = {
    connectionString: SQL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}
const db = {}
db.conn = pgp(connectionString)

/** Schema for a talent */

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} = graphql;


/** Using GraphQL */

var schema = buildSchema(`
    type Query {
        full_names : [String]
    }
`);

var root = {
    full_names : () => {
        const query = 'SELECT full_name FROM talent;';
        return db.conn.many(query)
        .then(data => {
            return data.map(rows => rows.full_name);
        })
        .catch(err => {
            return 'The following error occured: ', err;
        })
    }
}

module.exports = {
    graphQLSchema : schema, 
    graphQLRoot : root
}

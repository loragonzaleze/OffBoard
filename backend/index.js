const express = require('express');
const cors = require('cors');
var { graphqlHTTP } = require('express-graphql');
/** Connect to SQL DB */
//const sqlDB = require('./dbconnection')

const app = express();
/** Dependencies used by the app. */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))


/** Route files */
const test = require('./routes/api/sample')

/** Connect routes to app. */
const { graphQLSchema, graphQLRoot } = require('./routes/api/talent');
app.use('/graphql', graphqlHTTP({
    schema: graphQLSchema,
   // rootValue: graphQLRoot,
    graphiql: true,
}));
app.use('/api/', test)


const port = process.env.port || 5000;

app.listen(port, () => {
    console.log('Server has started on port ' + port);
    console.log('listening at http://localhost:' + port)
})


const { ApolloServer } = require('apollo-server');

const typeDefs  = require("./typeDefs");
const resolvers = require("./resolvers");
const mongoose  = require('mongoose');
require('dotenv').config();

const { PubSub } = require('apollo-server');
const pubsub = new PubSub();


mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log('DB conected!'))
    .catch(err => console.error(err));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        pubsub
    }
});

server
    .listen()
    .then(({ url }) => console.log(`Server is running on ${url}`)
    );

const { gql } = require("apollo-server");

module.exports = gql`

    type Link {
        id: ID!
        description: String!
        url: String!
    }

    type Query {
        info: String!
        feed: [Link!]!
        link(id: ID!): Link
    }

    type Mutation {
        post(url: String!, description: String!): Link!
        updateLink(id: ID!, url: String, description: String): Link
        deleteLink(id: ID!): Link
    }
`;

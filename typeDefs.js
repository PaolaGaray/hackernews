const { gql } = require("apollo-server");

module.exports = gql`

    type Link {
        _id: ID
        createdAt: String
        description: String
        url: String
    }

    type Query {
        info: String
        feed: [Link]
    }

    type Mutation {
        createLink(url: String!, description: String!): Link,
        updateLink(_id: ID!, url: String, description: String): Link,
        deleteLink(_id: ID!): Link,
}
`;

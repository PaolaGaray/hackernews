const { gql } = require("apollo-server");

module.exports = gql`

    type User {
        _id: ID
        name: String
        email: String
        links: [Link]
    }

    type Link {
        _id: ID
        createdAt: String
        description: String
        url: String
        postedBy: User
    }

    type Query {
        info: String
        feed: [Link]
    }

    type Mutation {
        post(url: String!, description: String!): Link
        updateLink(_id: ID!, url: String, description: String): Link
        deleteLink(_id: ID!): Link,
    }

    type Subscription {
        linkCreated: Link
        linkUpdated: Link
        linkDeleted: Link
    }
`;

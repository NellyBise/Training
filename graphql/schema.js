const gql = require('graphql-tag')
const typeDefs = gql`
  type Query {
    exercises: [Exercice!]!
  }

  type Exercice {
    id: ID!
    name: String!
    description: String!
  }
`

module.exports = typeDefs

const gql = require('graphql-tag')
const typeDefs = gql`
  type Query {
    exercises: [Exercice!]!
  }

  type Exercice {
    id: ID!
    name: String!
    description: String!
    image_url: String
    category: String
  }
`

module.exports = typeDefs

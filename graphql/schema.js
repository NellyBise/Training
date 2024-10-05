const typeDefs = gql`
  type Exercice {
    id: ID!
    name: String!
    description: String!
  }

  type Query {
    exercises: [Exercice]
  }
`

module.exports = typeDefs

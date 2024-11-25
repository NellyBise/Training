const gql = require('graphql-tag')
const typeDefs = gql`
  scalar JSON

  type Query {
    exercises: [Exercice!]!
    getTrainingsByUser(user_id: ID!): [Training!]
  }

  type Exercice {
    id: ID!
    name: String!
    description: String!
    image_url: String
    category: String
    difficulty: Int
  }
  type Training {
    id: ID!
    title: String!
    description: String
    orderedExercises: JSON
    user_id: ID!
    created_at: String
  }
  type Mutation {
    saveTraining(
      title: String!
      description: String
      orderedExercises: JSON!
      exercisesNumber: Int!
      user_id: ID!
    ): Training
  }
`

module.exports = typeDefs

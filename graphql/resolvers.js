const resolvers = {
  Query: {
    exercises: async (_, __, { dataSources }) => {
      return dataSources.SupabaseAPI.getExercises()
    },
    getTrainingsByUser: async (_, { user_id }, { dataSources }) => {
      return dataSources.SupabaseAPI.getTrainingsByUser(user_id)
    },
  },
  Mutation: {
    saveTraining: async (
      _,
      { title, description, orderedExercises, exercisesNumber, user_id },
      { dataSources }
    ) => {
      return dataSources.SupabaseAPI.saveTraining(
        title,
        description,
        orderedExercises,
        exercisesNumber,
        user_id
      )
    },
  },
}
module.exports = resolvers

const resolvers = {
  Query: {
    exercises: async (_, __, { dataSources }) => {
      return dataSources.supabaseAPI.getExercises()
    },
  },
}
module.exports = resolvers

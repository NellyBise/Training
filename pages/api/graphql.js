import { ApolloServer, gql } from 'apollo-server-micro'
import { supabase } from '../../lib/supabase'
import micro_cors from 'micro-cors'

// Configuration CORS
const cors = micro_cors({
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowCredentials: true,
  origin: 'https://studio.apollographql.com', // Spécifiez l'origine autorisée
})

// Résolveurs pour le schéma
const resolvers = {
  Query: {
    exercises: async () => {
      const { data, error } = await supabase.from('exercises').select('*')
      if (error) throw new Error(error.message)
      return data
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
})

// Initialiser le serveur Apollo
const startServer = server.start()

export const config = {
  api: {
    bodyParser: false,
  },
}

// Utiliser le gestionnaire CORS avec votre handler
export default cors(async function handler(req, res) {
  // Gérer les requêtes OPTIONS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader(
      'Access-Control-Allow-Origin',
      'https://studio.apollographql.com'
    )
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    return res.end()
  }

  await startServer // Assurez-vous que le serveur est démarré avant de le manipuler
  return server.createHandler({ path: '/api/graphql' })(req, res)
})

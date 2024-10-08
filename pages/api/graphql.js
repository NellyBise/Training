import { ApolloServer, gql } from 'apollo-server-micro'
import micro_cors from 'micro-cors'
import typeDefs from '@/graphql/schema'
import resolvers from '@/graphql/resolvers'
import SupabaseAPI from '@/lib/supabase'

// Configuration CORS
const cors = micro_cors({
  allowMethods: ['GET', 'POST', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowCredentials: true,
  origin: 'https://studio.apollographql.com', // Spécifiez l'origine autorisée
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  dataSources: () => ({
    supabaseAPI: new SupabaseAPI(),
  }),
})

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

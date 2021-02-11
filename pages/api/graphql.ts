import { ApolloServer } from 'apollo-server-micro'
import schema from '../../graphql/schema'
import dataSources from '../../graphql/data-sources'

const server = new ApolloServer({
  schema,
  dataSources,
  tracing: process.env.NODE_ENV === 'development',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({ path: '/api/graphql' })

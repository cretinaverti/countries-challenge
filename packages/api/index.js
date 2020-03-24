import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { dataSources } from './data-sources'

const server = new ApolloServer({
  schema,
  dataSources,
  tracing: true,
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`)
})

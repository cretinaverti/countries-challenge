import * as React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
})

const Root = () => (
  <ApolloProvider client={client}>
    <p>Hello world!</p>
  </ApolloProvider>
)

export default Root

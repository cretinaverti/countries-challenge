import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { useMemo } from 'react'

let apolloClient
const createApolloClient = () => new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: new HttpLink({
    uri: '/api/graphql',
  }),
  cache: new InMemoryCache(),
})

const initializeApollo = (initialState = null) => {
  const localApolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here.
  if (initialState) {
    // Get existing cache, loaded during client side data fetching.
    const existingCache = localApolloClient.extract()

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data.
    localApolloClient.cache.restore({ ...existingCache, ...initialState })
  }

  // For SSG and SSR always create a new Apollo Client.
  if (typeof window === 'undefined') {
    return localApolloClient
  }

  // Create the Apollo Client once in the client.
  if (!apolloClient) {
    apolloClient = localApolloClient
  }
  return localApolloClient
}

const useApollo = (initialState) => useMemo(() => initializeApollo(initialState), [initialState])

export default useApollo

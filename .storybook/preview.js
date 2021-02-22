import { MockedProvider } from '@apollo/client/testing'
import '../styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  apolloClient: {
    MockedProvider,
  },
}

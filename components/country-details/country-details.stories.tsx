import { Meta, Story } from '@storybook/react'
import { GraphQLError } from 'graphql'
import { CountryDetails, CountryDetailsProps } from './country-details'
import { CountryDetailsDocument } from '../../generated/graphql'

export default {
  title: 'Country Details',
  component: CountryDetails,
} as Meta

const Template: Story<CountryDetailsProps> = () => (
  <CountryDetails name="france" />
)

export const WithSomeData = Template.bind({})
WithSomeData.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: CountryDetailsDocument,
          variables: {
            name: 'france',
          },
        },
        result: {
          data: {
            country: {
              __typename: 'Country',
              nativeName: 'France',
              population: 66710000,
              capital: 'Paris',
              region: 'Europe',
              subRegion: 'Western Europe',
              languages: [
                {
                  name: 'French',
                },
              ],
              currencies: [
                {
                  name: 'Euro',
                },
              ],
              topLevelDomain: [
                '.fr',
              ],
              borders: [
                'AND',
                'BEL',
                'DEU',
                'ITA',
                'LUX',
                'MCO',
                'ESP',
                'CHE',
              ],
            },
          },
        },
      },
    ],
  },
}

export const WithNetworkError = Template.bind({})
WithNetworkError.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: CountryDetailsDocument,
          variables: {
            name: 'france',
          },
        },
        error: new Error('Network error'),
      },
    ],
  },
}

export const WithQueryError = Template.bind({})
WithQueryError.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: CountryDetailsDocument,
          variables: {
            name: 'france',
          },
        },
        result: {
          errors: [new GraphQLError('Error!')],
        },
      },
    ],
  },
}

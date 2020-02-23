import { queryType, stringArg } from 'nexus'
import { countriesResolver, countryResolver } from '../resolvers/countries'
import { Country } from './country'

export const Query = queryType({
  definition(t) {
    t.list.field('countries', {
      type: Country,
      resolve: countriesResolver,
    })
    t.field('country', {
      type: Country,
      args: {
        name: stringArg(),
      },
      resolve: countryResolver,
    })
  },
})

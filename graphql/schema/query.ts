import { queryType, stringArg } from '@nexus/schema'
import { countriesResolver, countryResolver } from '../resolvers/countries'
import Country from './country'

const Query = queryType({
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

export default Query

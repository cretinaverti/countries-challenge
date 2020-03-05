import { join } from 'path'
import { makeSchema } from 'nexus'
import { Country } from './country'
import { Currency } from './currency'
import { Language } from './language'
import { Query } from './query'

export const schema = makeSchema({
  types: [Country, Currency, Language, Query],
  outputs: {
    schema: join(__dirname, '../schema.graphql'),
  },
})

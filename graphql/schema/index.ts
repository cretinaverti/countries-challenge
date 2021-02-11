import { join } from 'path'
import { makeSchema } from '@nexus/schema'
import Country from './country'
import Currency from './currency'
import Language from './language'
import Query from './query'

const schema = makeSchema({
  types: [Country, Currency, Language, Query],
  outputs: {
    typegen: join(process.cwd(), 'generated', 'nexus-typegen.ts'),
    schema: join(process.cwd(), 'generated', 'schema.graphql'),
  },
})

export default schema

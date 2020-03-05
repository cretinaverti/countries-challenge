import { objectType } from 'nexus'
import { Currency } from './currency'
import { Language } from './language'

export const Country = objectType({
  name: 'Country',
  definition(t) {
    t.string('alpha3Code')
    t.list.string('borders')
    t.string('capital')
    t.list.field('currencies', {
      type: Currency,
    })
    t.list.field('languages', {
      type: Language,
    })
    t.string('name')
    t.string('nativeName')
    t.int('population')
    t.string('region')
    t.string('subRegion', (o) => o.subregion)
    t.list.string('topLevelDomain')
  },
})
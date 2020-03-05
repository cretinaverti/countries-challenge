import { objectType } from 'nexus'

export const Currency = objectType({
  name: 'Currency',
  definition(t) {
    t.string('code')
    t.string('name')
    t.string('symbol')
  },
})

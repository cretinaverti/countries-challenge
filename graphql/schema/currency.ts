import { objectType } from '@nexus/schema'

const Currency = objectType({
  name: 'Currency',
  definition(t) {
    t.string('code')
    t.string('name')
    t.string('symbol')
  },
})

export default Currency

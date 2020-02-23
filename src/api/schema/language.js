import { objectType } from 'nexus'

export const Language = objectType({
  name: 'Language',
  definition(t) {
    t.string('name')
    t.string('nativeName')
  },
})

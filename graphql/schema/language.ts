import { objectType } from '@nexus/schema'

const Language = objectType({
  name: 'Language',
  definition(t) {
    t.string('name')
    t.string('nativeName')
  },
})

export default Language

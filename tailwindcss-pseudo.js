const plugin = require('tailwindcss/plugin')

const pseudo = plugin(({ addVariant, addUtilities, e }) => {
  addVariant('before', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => `.${e(`before${separator}${className}`)}::before`)
  })
  addVariant('after', ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => `.${e(`after${separator}${className}`)}::after`)
  })

  const contentUtilities = {
    '.content': {
      content: 'attr(data-content)',
      position: 'absolute',
    },
    '.content-before': {
      content: 'attr(data-before)',
      position: 'absolute',
    },
    '.content-after': {
      content: 'attr(data-after)',
      position: 'absolute',
    },
  }

  addUtilities(contentUtilities, ['before', 'after'])
})

module.exports = pseudo

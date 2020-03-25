import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'theme-ui'
import theme from '../src/theme'
import 'normalize.css'

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
))
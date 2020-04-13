import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'theme-ui'
import theme from '@theme-ui/preset-polaris'
import 'normalize.css'
import { Box } from 'theme-ui'

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <Box p={3}>{storyFn()}</Box>
  </ThemeProvider>
))

import { action } from '@storybook/addon-actions'
import React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import SearchInput from '../components/search-input'

export default {
  title: 'SearchInput',
  decorators: [withKnobs],
}

export const Size = () => (
  <SearchInput
    isLarge={boolean('isLarge', false)}
    onChange={action('change')}
  />
)

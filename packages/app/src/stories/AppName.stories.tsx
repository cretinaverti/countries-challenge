import { action } from '@storybook/addon-actions'
import React from 'react'
import SearchInput from '../components/SearchInput'

export default { title: 'SearchInput' }

export const Default = () => <SearchInput onChange={action('change')} />

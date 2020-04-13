import React from 'react'
import { action } from '@storybook/addon-actions'
import AppName from '../components/AppName'

export default { title: 'AppName' }

export const Default = () => <AppName onClick={action('clicked')} />

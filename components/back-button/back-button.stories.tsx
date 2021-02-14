import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BackButton, BackButtonProps } from './back-button'

export default {
  title: 'Back Button',
  component: BackButton,
} as Meta

const Template: Story<BackButtonProps> = ({ title, onClick }: BackButtonProps) => (
  <BackButton title={title} onClick={onClick} />
)

export const Idle = Template.bind({})
Idle.args = {
  title: 'Return',
}

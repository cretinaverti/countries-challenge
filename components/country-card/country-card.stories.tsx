import { Meta, Story } from '@storybook/react'
import { CountryCard, CountryCardProps } from './country-card'
import Flag from '../country-flag/flag.mock.svg'

export default {
  title: 'Country Card',
  component: CountryCard,
} as Meta

const Template: Story<CountryCardProps> = ({ name, onClick, onKeyPress }: CountryCardProps) => (
  <CountryCard name={name} onClick={onClick} onKeyPress={onKeyPress}>
    <Flag viewBox="0 0 900 600" width={null} height={null} />
  </CountryCard>
)

export const Idle = Template.bind({})
Idle.args = {
  name: 'France',
}

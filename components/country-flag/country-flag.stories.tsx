import { Meta, Story } from '@storybook/react'
import { CountryFlag, CountryFlagProps } from './country-flag'
import Flag from './flag.mock.svg'

export default {
  title: 'Country Flag',
  component: CountryFlag,
} as Meta

const Template: Story<CountryFlagProps> = ({ size }: CountryFlagProps) => (
  <CountryFlag size={size}>
    <Flag viewBox="0 0 900 600" width={null} height={null} />
  </CountryFlag>
)

export const Small = Template.bind({})
Small.storyName = 'Small (default)'

export const Medium = Template.bind({})
Medium.storyName = 'Medium'
Medium.args = {
  size: 'Medium',
}

export const Large = Template.bind({})
Large.storyName = 'Large'
Large.args = {
  size: 'Large',
}

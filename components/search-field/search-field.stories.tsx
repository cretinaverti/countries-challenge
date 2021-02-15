import { Meta, Story } from '@storybook/react'
import { SearchField, SearchFieldProps } from './search-field'

export default {
  title: 'Search Field',
  component: SearchField,
} as Meta

const Template: Story<SearchFieldProps> = ({ onChange }: SearchFieldProps) => (
  <SearchField onChange={onChange} />
)

export const Idle = Template.bind({})

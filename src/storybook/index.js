import * as React from 'react'
import { configure, storiesOf } from '@storybook/react'

configure(() => {
  storiesOf('Category 1').add('Test 1', () => <div>Category 1 - Test 1</div>)
  storiesOf('Category 2')
    .add('Test 1', () => <div>Category 2 - Test 1</div>)
    .add('Test 2', () => <div>Category 2 - Test 2</div>)
}, {})

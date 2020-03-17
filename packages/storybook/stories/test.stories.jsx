/** @jsx jsx */
import { jsx } from 'theme-ui'

export default { title: 'Test' }

export const withText = () => (
  <div
    sx={{
      color: 'red.9',
      fontSize: 6,
      px: 4
    }}
  >
    Hello Button
  </div>
)

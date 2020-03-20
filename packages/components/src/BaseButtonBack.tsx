import * as React from 'react'
import * as SVG from 'svg.js'
import { IconButton } from 'theme-ui'

const { useEffect } = React

const BaseButtonBack = () => {
  useEffect(() => {
    const icon = SVG('icon')
      .line(0, 7, 10, 7)
      .stroke({ color: '#f06', width: 2, linecap: 'round' })
  }, [])

  return (
    <IconButton variant="secondary">
      <i id="icon" />
    </IconButton>
  )
}

export default React.memo(BaseButtonBack)

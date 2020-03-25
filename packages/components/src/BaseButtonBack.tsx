import * as React from 'react'
import * as SVG from 'svg.js'
import { Flex, IconButton } from 'theme-ui'

const { useEffect } = React

type Props = {
  onClick: () => void
}
const BaseButtonBack = ({ onClick }: Props) => {
  useEffect(() => {
    SVG('icon')
      .size(14, 14)
      .line(1, 7, 13, 7)
      .marker('start', 8, 8, add => {
        add
          .polyline('6,1 4,4 6,7')
          .fill('none')
          .stroke({
            color: 'currentcolor',
            width: 1,
            linecap: 'round',
            linejoin: 'round',
          })
      })
      .stroke({ color: 'currentcolor', width: 2, linecap: 'round' })
  }, [])

  return (
    <IconButton variant="secondary" onClick={onClick}>
      <Flex as="i" id="icon" />
    </IconButton>
  )
}

export default React.memo<Props>(BaseButtonBack)

import React from 'react'
import { Flex, IconButton } from 'theme-ui'

type Props = {
  onClick?: () => void
}
const BaseButtonBack = ({ onClick }: Props) => (
  <IconButton variant="secondary" onClick={onClick}>
    <Flex as="i" id="icon" />
  </IconButton>
)

export default React.memo<Props>(BaseButtonBack)

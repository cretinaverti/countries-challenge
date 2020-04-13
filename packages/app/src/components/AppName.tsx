import React from 'react'

type Props = {
  onClick?: () => void
}
const AppName = ({ onClick }: Props) => (
  <h1 className="green baskerville fw3 f1 tracked-tight" onClick={onClick}>
    Where in the World ?
  </h1>
)

export default AppName

/** @jsx jsx */
import { Flex, Input, jsx } from 'theme-ui'
import React, { ChangeEvent, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

type Props = {
  isLarge: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
const View = ({ isLarge, onChange }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  return (
    <Flex
      sx={{
        alignItems: 'center',

        position: 'relative',

        height: isLarge ? 92 : 48,
        px: isLarge ? 3 : 2,

        borderWidth: isFocused ? 2 : 1,
        borderStyle: 'solid',
        borderColor: isFocused ? 'primary' : 'gray',
        borderRadius: 9999,

        bg: 'white',
        boxShadow: '0 1px 2px 0 hsla(0, 0%, 0%, 0.15)',

        fontSize: isLarge ? 4 : 3,
        fontWeight: 'bold',

        transition: 'border-width 0.4s cubic-bezier(0, 0.5, 0.5, 1)',

        ':after': {
          content: '""',
          opacity: 0,

          borderRadius: 9999,

          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,

          boxShadow: '0 2px 8px 0 hsla(0, 0%, 0%, 0.2)',
          transition: 'opacity 0.3s cubic-bezier(0, 0.5, 0.5, 1)',
        },

        ':hover': {
          ':after': {
            opacity: 1,
          },
        },
      }}
    >
      <FiSearch
        sx={{
          px: isLarge ? 2 : 1,
          fontSize: isLarge ? 6 : 5,
          color: isFocused ? 'primary' : 'text',
        }}
      />
      <Input
        type="search"
        autoFocus
        placeholder="Search for a country..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        sx={{
          px: isLarge ? 2 : 1,
          border: 'none',
          outline: 'none',
        }}
      />
    </Flex>
  )
}

export default React.memo<Props>(View)

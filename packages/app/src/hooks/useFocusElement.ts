import { RefObject, useEffect, useState } from 'react'
import useActiveElement from './useActiveElement'

const useFocusElement = (ref: RefObject<any>) => {
  const focusedElement = useActiveElement()
  const [isFocused, setIsFocused] = useState<boolean>(false)

  useEffect(() => {
    if (focusedElement && ref.current && focusedElement === ref.current) {
      setIsFocused(true)
    } else {
      setIsFocused(false)
    }
  }, [focusedElement, ref])

  return isFocused
}

export default useFocusElement

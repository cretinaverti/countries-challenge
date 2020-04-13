import { useEffect, useState } from 'react'

const useActiveElement = () => {
  const [active, setActive] = useState<Element | null>(document.activeElement)

  const handleFocusIn = () => {
    setActive(document.activeElement)
  }

  useEffect(() => {
    document.addEventListener('focusin', handleFocusIn)
    return () => {
      document.removeEventListener('focusin', handleFocusIn)
    }
  }, [])

  return active
}

export default useActiveElement

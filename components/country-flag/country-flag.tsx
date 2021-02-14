import React, { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './country-flag.module.css'

export interface CountryFlagProps {
  /**
   * How large should the flag be.
   */
  size?: 'Small' | 'Medium' | 'Large'
  /**
   * SVG content.
   */
  children: ReactNode
}

/**
 * Flag wrapper.
 */
export const CountryFlag = ({ size = 'Small', children }: CountryFlagProps) => (
  <div
    data-content=""
    className={clsx(
      styles.placeholder,
      'rounded-full overflow-hidden shadow before:content',
      { 'w-8 h-8': size === 'Small' },
      { 'w-16 h-16': size === 'Medium' },
      { 'w-32 h-32': size === 'Large' },
    )}
  >
    {children}
  </div>
)

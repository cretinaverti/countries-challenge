import React, { ReactNode } from 'react'
import { CountryFlag } from '../country-flag'

export interface CountryCardProps {
  /**
   * Name of the country.
   */
  name: string,
  /**
   * Flag SVG of the country.
   */
  children: ReactNode,
  /**
   * Main handler.
   */
  onClick?: (event: React.MouseEvent) => void,
  /**
   * Accessibility handler.
   */
  onKeyPress?: (event: React.KeyboardEvent) => void,
}

/**
 * Country card.
 */
export const CountryCard = ({
  name, children, onClick, onKeyPress,
}: CountryCardProps) => (
  <div
    role="button"
    tabIndex={0}
    className="relative p-2 rounded-lg hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring border border-blue-700 border-opacity-0 focus:border-opacity-100 focus:z-10"
    onClick={onClick}
    onKeyPress={onKeyPress}
  >
    <div className="flex items-center -mx-1">
      <div className="flex-none px-1">
        <CountryFlag>
          {children}
        </CountryFlag>
      </div>
      <span title={name} className="truncate px-1 text-gray-900">{name}</span>
    </div>
  </div>
)

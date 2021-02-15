import React, { useState } from 'react'
import clsx from 'clsx'

const SEARCH_FIELD = 'SEARCH_FIELD'

export interface SearchFieldProps {
  /**
   * Main handler.
   */
  onChange: (event: React.ChangeEvent) => void,
}

/**
 * Primary component to trigger search.
 */
export const SearchField = ({ onChange }: SearchFieldProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleFocusForm = () => setIsFocused(true)
  const handleBlurForm = () => setIsFocused(false)

  return (
    <form
      role="search"
      className={clsx(
        'flex items-center h-16 px-4 -mx-1 rounded-full border bg-white text-gray-900 shadow-md focus:outline-none',
        { 'ring border-blue-700': isFocused },
      )}
      onFocus={handleFocusForm}
      onBlur={handleBlurForm}
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label
        htmlFor={SEARCH_FIELD}
        className="flex-none px-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>

      <input
        id={SEARCH_FIELD}
        type="search"
        placeholder="Search for a country..."
        className="flex-auto p-0 px-1 border-none bg-none focus:ring-0 focus:shadow-none"
        onChange={onChange}
        onFocus={handleFocusForm}
        onBlur={handleBlurForm}
      />
    </form>
  )
}

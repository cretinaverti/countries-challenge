import React from 'react'

export interface BackButtonProps {
  /**
   * Optional title.
   */
  title: string
  /**
   * Optional click handler.
   */
  onClick?: () => void
}

/**
 * Button used to back to previously navigated view.
 */
export const BackButton = ({ title, onClick }: BackButtonProps) => (
  <button
    title={title}
    type="button"
    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 focus:outline-none focus:ring border border-opacity-0 focus:border-blue-700"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
    </svg>
  </button>
)

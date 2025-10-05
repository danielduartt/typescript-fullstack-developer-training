import type { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  fullWidth?: boolean
}

export const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  fullWidth = false
}: ButtonProps) => {
  const classes = [
    'custom-button',
    `custom-button--${variant}`,
    `custom-button--${size}`,
    fullWidth ? 'custom-button--full-width' : '',
    disabled ? 'custom-button--disabled' : ''
  ].filter(Boolean).join(' ')

  return (
    <button 
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
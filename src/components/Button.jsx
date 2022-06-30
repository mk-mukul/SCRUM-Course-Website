import React from 'react'

const Button = ({text, className}) => {
  return (
    <div className={`px-4 py-1 border-2 rounded-full cursor-pointer ${className}`}>{text}</div>
  )
}

export default Button
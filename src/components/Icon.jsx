import React from 'react'

const Icon = ({src}) => {
  return (
    <div className=' w-12 h-12 bg-dark-stroke flex justify-center rounded-full cursor-pointer'>
        <img className=' self-center' src={src} alt="socials" />
    </div>
  )
}

export default Icon
import React from 'react'

const Icon = ({src, name}) => {
  return (
    <a href={"#"+name} className=' w-12 h-12 bg-dark-stroke flex justify-center rounded-full cursor-pointer'>
        <img className=' self-center' src={src} alt="socials" />
    </a>
  )
}

export default Icon
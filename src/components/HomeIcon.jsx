import React from 'react'

const HomeIcon = ({ className, src }) => {
    return (
        <div className={` h-24 w-24 md:h-40 md:w-40 lg:w-52 lg:h-52 cursor-pointer flex justify-center items-center rounded-full bg-opacity-10 ${className}`}>
            <div className=' w-8 md:w-12 lg:w-auto'>
                <img src={src} alt="icon" />
            </div>
        </div>
    )
}

export default HomeIcon
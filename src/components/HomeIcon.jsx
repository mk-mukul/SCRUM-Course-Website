import React from 'react'

const HomeIcon = ({ className, src }) => {
    return (
        <div className={` w-52 h-52 cursor-pointer flex justify-center items-center rounded-full bg-opacity-10 ${className}`}>
            <div>
                <img src={src} alt="icon" />
            </div>
        </div>
    )
}

export default HomeIcon
import React from 'react'

const TimeCard = ({label, value}) => {
  return (
    <div className=' w-28 py-3 flex flex-col items-center rounded-2xl bg-white bg-opacity-10'>
        <span className=' text-6xl font-bold'>{value}</span>
        <span className=' opacity-95'>{label}</span>
    </div>
  )
}

export default TimeCard
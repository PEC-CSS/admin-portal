import React from 'react'

function HeroBox({ title, subtitle }) {
  return (
    <div className='bg-[#dbeafe] p-9 m-8 rounded-lg w-[90vw] md:max-w-[600px] md:w-auto'>
        <p className='text-3xl md:text-6xl mb-5 text-[#1d4ed8] font-bold leading-20'>{title}</p>
        <p className='text-xl md:text-3xl text-[#5087f6]'>{subtitle}</p>
    </div>
  )
}

export default HeroBox
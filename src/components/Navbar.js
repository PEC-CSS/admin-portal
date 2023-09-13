import Image from 'next/image'
import React from 'react'


export const Navbar = () => {
  return (
    <div>
    <div className='flex flex-row  items-center max-sm:flex-col max-sm:items-center'>
    <div className='flex flex-col items-center justify-center ml-20 max-sm:mx-10'>
    <Image src="/assets/acm.png" width={100} height={100} className='mt-5'/>
    <h1 className='text-center font-extrabold text-blue-600 text-lg'>pecacm</h1>
    </div>
    <div className=' flex w-full flex-row justify-center mr-20 max-sm:mx-10 max-sm:mt-5'>
      <h1 className='text-blue-600 text-4xl font-bold'>PEC-ACM Admin Portal</h1>
    </div>
  </div>
  <hr className='mt-5 border-blue-600 border-2'/>
  </div>
  )
}

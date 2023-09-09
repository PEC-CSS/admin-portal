import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBarWithDropdown from './SearchBarWithDropdown'
import {useRef} from "react"
const Landing = () => {
  return (
    <div>
      <Head>
        <title>PEC ACM</title>
      </Head>
      <div className='flex flex-col'>
        <div className='flex flex-row items-center h-24'>
          <Image
            src='/assets/acm.png'
            width={90}
            height={90}
            className='ml-20 mt-5'
          />
          <div className=' flex w-full flex-row justify-end'>
            <div className='w-2/5 mr-12 absolute'>
              <SearchBarWithDropdown />
            </div>
          </div>
        </div>
        <hr className='mt-10 border-blue-600 border-2' />

        <div className='mt-10 flex flex-col items-center'></div>
      </div>
    </div>
  )
}
export default Landing

import Head from 'next/head'
import Image from 'next/image'
import SearchBarWithDropdown from '../../components/SearchBarWithDropdown'

export default function LandingPage () {
  return (
    <div>
      <Head>
        <title>PEC ACM</title>
      </Head>
      <div className='flex flex-col'>
        <div className='flex flex-row  items-center'>
          <Image
            src='/assets/acm.png'
            width={100}
            height={100}
            className='ml-20 mt-5'
          />
          <div className=' flex w-full flex-row justify-center mr-20'>
            <h1 className='text-blue-600 text-4xl font-bold'>
              Welcome to Admin Dashboard
            </h1>
          </div>
        </div>
        <hr className='mt-5 border-blue-600 border-2' />


        <div className='mt-10 flex flex-col items-center'>
          <div className='w-1/4'>
          <SearchBarWithDropdown/>
          </div>
        </div>
      </div>
    </div>
  )
}

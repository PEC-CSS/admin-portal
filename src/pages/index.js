import Image from 'next/image'


export default function Home() {
  return (
    <div className='flex flex-col'>

      <div className='flex flex-row  items-center'>
        <Image src="/assets/acm.png" width={100} height={100} className='ml-20 mt-5'/>
        <div className=' flex w-full flex-row justify-center mr-20'>
          <h1 className='text-blue-600 text-4xl font-bold'>Welcome to Admin Dashboard</h1>
        </div>
      </div>
      <hr className='mt-5 border-blue-600 border-2'/>

      <div className='mt-10 flex flex-col items-center'>
        <h1 className='text-4xl  font-bold text-center'>Login</h1>
        <div className='w-1/4'>
          <div className='flex flex-col mt-10'>
            <label className='mb-5 text-lg font-bold'>Username:</label>
            <input type='text' placeholder='Enter Username' className='rounded px-5 py-2 outline outline-black focus:outline focus:outline-blue-600 outline-2'/>
          </div>
          <div className='flex flex-col mt-5 mb-5'>
            <label className='mb-5 font-bold text-lg'>Password:</label>
            <input type='password' placeholder='Enter Password' className='rounded px-5 py-2 outline outline-black focus:outline focus:outline-blue-600 outline-2'/>
          </div>
          <button className='bg-blue-600 hover:bg-white hover:text-black hover:outline-2 hover:outline hover:outline-black text-white font-bold py-2 px-4 rounded' >Submit</button>
        </div>
      </div>

    </div>
  )
}

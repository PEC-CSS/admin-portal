import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function search() {

    const[isVisible,setVisible]=useState(false);
    return (
      <div>
      <Head>
        <title>Search Results | ACM at PEC</title>
      </Head>
      <div className='flex flex-col'>
  
      <div className='flex flex-row  items-center'>
            <div className='flex flex-col items-center justify-center ml-20'>
            <Image src="/assets/acm.png" width={100} height={100} className='mt-5'/>
            <h1 className='text-center font-extrabold text-blue-600 text-lg'>pecacm</h1>
            </div>
            <div className=' flex w-full flex-row justify-center mr-20'>
              <h1 className='text-blue-600 text-4xl font-bold'>Welcome to Admin Dashboard</h1>
            </div>
          </div>
          <hr className='mt-5 border-blue-600 border-2'/>

          <div className="w-1/4">
        <div className='px-5 mt-5'>
              <div class="flex items-center h-12 rounded-lg outline outline-2 outline-black  focus-within:outline-2 focus-within:outline focus-within:outline-blue-600 bg-white overflow-hidden">
                  
  
                  <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pl-2"
                  type="text"
                  id="search"
                  onFocus={()=>{setVisible(!isVisible)}}
                  onBlur={()=>{setVisible(!isVisible)}}
                  placeholder="Search something.." /> 
                 <div onClick={()=>{alert("Clicked")}} class="grid place-items-center h-full w-12 text-white bg-blue-600">
                 
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                  
                  </div>
              </div>
         </div>
         <div className={!isVisible?'hidden':''}>
            <div className='px-5 w-full mt-5'>
            <button className='outline outline-2 outline-blue-600 font-bold p-5 text-2xl rounded-xl w-full text-blue-600'>Search By E-Mail</button>
            </div>
            <div className='px-5 w-full mt-5'>
            <button className='outline outline-2 outline-blue-600 font-bold p-5 text-2xl rounded-xl w-full text-blue-600'>Search By SID</button>
            </div>
            <div className='px-5 w-full mt-5'>
            <button className='outline outline-2 outline-blue-600 font-bold p-5 text-2xl rounded-xl w-full text-blue-600'>Search By Name</button>
            </div>
            <div className='px-5 w-full mt-5'>
            <button className='outline outline-2 outline-blue-600 font-bold p-5 text-2xl rounded-xl w-full text-blue-600'>Search By Event</button>
            </div>
         </div>
         </div>
        
      </div>
      </div>
    )
  
}

import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { Common } from '@/constants/common'
// import {useLocalStorage} from '@uidotdev/usehooks'
import {useLocalStorage} from '../useLocalStorage';

export const Login = () => {
  const router=useRouter();

    const[isVisible,setVisible]=useState(false);
    const[user,setUser]=useState("");
    const[pwd,setPwd]=useState("");
    const [_, setAuthorisation] = useLocalStorage(Common.AUTHORIZATION, null);
    const handleClick = async(e)=>{
      e.preventDefault();
      const response=await fetch(""); // Api will go here
      const jwtToken=response.jwtToken;
      const user=response.user;
        setAuthorisation(jwtToken);
        setCookie(null, Common.AUTHORIZATION, jwtToken, {
          path: "/",
          sameSite: "strict",
          maxAge:  3 * 24 * 60 * 60, // expires in 3 days
        })
        setCookie(null, Common.USERNAME, user?.name ?? "", {
        path: "/",
        sameSite: "strict",
        maxAge:  3 * 24 * 60 * 60, // expires in 3 days
        })
        setCookie(null, Common.PHOTO, user?.dp ?? "", {
            path: "/",
            sameSite: "strict",
            maxAge:  3 * 24 * 60 * 60, // expires in 3 days
        })
        setCookie(null, Common.EMAIL, user?.email ?? "", {
            path: "/",
            sameSite: "strict",
            maxAge:  3 * 24 * 60 * 60, // expires in 3 days
        })
        setCookie(null, Common.DESIGNATION, user?.designation ?? "" , {
            path: "/",
            sameSite: "strict",
            maxAge:  3 * 24 * 60 * 60, // expires in 3 days
        })
        router.reload();
    }
  return (
 <div>
    <Head>
    <title>Login | ACM at PEC</title>
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
    </div>

    <div className='mt-10 flex flex-col items-center'>
      <h1 className='text-4xl  font-bold text-center'>Login</h1>
      <div className='w-1/4'>
        <div className='flex flex-col mt-10'>
          <label className='mb-5 text-lg font-bold'>Username:</label>
          <input type='text' onChange={(e)=>{setUser(e.target.value)}} placeholder='Enter Username' className='rounded pl-1 pr-10 py-2 outline outline-black focus:outline focus:outline-blue-600 outline-2'/>
        </div>
        <div className='flex flex-col mt-5 mb-5'>
          <label className='mb-5 font-bold text-lg'>Password:</label>
            <div className='relative flex flex-row items-center justify-end'>
              <input type={isVisible?'text':'password'} onChange={(e)=>{setPwd(e.target.value)}} placeholder='Enter Password' className='w-full rounded pr-10 pl-1 py-2 outline outline-black focus:outline focus:outline-blue-600 outline-2'/>
              
              <span className='absolute px-2 bg-white'>
              <FontAwesomeIcon icon={isVisible?faEyeSlash:faEye} onClick={()=>{
                setVisible(!isVisible)
              }} />
                
            </span>
          </div>
        </div>
        <button onClick={handleClick} className='bg-blue-600 hover:bg-white hover:text-black hover:outline-2 hover:outline hover:outline-black text-white font-bold py-2 px-4 rounded' >Submit</button>
      </div>
    </div>
  </div>
 
  )
}


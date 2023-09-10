import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Login } from '../components/Login'
import Landing from '@/components/Landing'




export default function Home() {
  const[isAuthenticated, setAuthenticated]=useState(false);
  
  useEffect(()=>{
    
    const value=localStorage.getItem("isAuthenticated")||false;
    setAuthenticated(value);
    
 
  },[])
  
  return (
    <div>
    {isAuthenticated?<Landing/>:<Login/>}
    </div>
  )
}

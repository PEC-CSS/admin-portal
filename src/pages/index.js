import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState} from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react'
import { useLocalStorage } from "@uidotdev/usehooks";
import { Common } from '@/constants/common';
import { parseCookies, setCookie } from 'nookies'
import { Login } from '../components/Login'
import Landing from '@/components/Landing'




export default function Home(props) {
 // props can be passed on to the landing page component
  return (
    <div>
    {props.token?(<Landing/>):(<Login/>)}
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const { req } = context;
  const cookies = parseCookies({ req });
  const token = cookies[Common.AUTHORIZATION];

  if (token) {
    const username = cookies[Common.USERNAME];
    const photo = cookies[Common.PHOTO];
      return {
         props:{token,username,photo}
      };
  }

  return {
      props: {},
  };
}

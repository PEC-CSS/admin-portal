import { Common } from '@/constants/common';
import { parseCookies, setCookie } from 'nookies'
import { Login } from '../components/Login'
import {Landing} from '../components/Landing'
import { useLocalStorage } from "@uidotdev/usehooks";


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

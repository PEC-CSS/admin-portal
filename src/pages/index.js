import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {
  return (
    <>Hello</>
  )
}

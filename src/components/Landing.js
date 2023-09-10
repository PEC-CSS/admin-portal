import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import SearchBarWithDropdown from './SearchBarWithDropdown'
import { useRef, useState , useEffect} from 'react'
export const Landing = () => {
  const [isExpanded, setExpanded] = useState(false);
  const divRef = useRef(null);

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  useEffect(() => {
    // Function to handle clicks outside of the div
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const divStyles = {
    width: isExpanded ? '60%' : '40%',
    marginLeft: isExpanded ? '10%' : '2%',
    marginRight: isExpanded ? '10%' : '2%',
    transition: 'width 0.3s, margin 0.3s',
    cursor: 'pointer',
  };
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
            <div className='w-2/5 mr-12 absolute' onClick={handleClick} style={divStyles}  ref={divRef}>
              <SearchBarWithDropdown />
            </div>
          </div>
        </div>
        <hr className='mt-10 border-blue-600 border-2' />
      </div>
    </div>
  )
}


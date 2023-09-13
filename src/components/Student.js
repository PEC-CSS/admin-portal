import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Navbar } from './Navbar'

export const Student = () => {
  const events = [
    { eventName: 'Workshop 1', date: '2023-09-15', description: 'Learn React' },
    { eventName: 'Seminar', date: '2023-09-20', description: 'Web Development Trends' },
    { eventName: 'Workshop 2', date: '2023-09-25', description: 'GraphQL Basics' },
    // Add more events as needed
  ];
  const eventsParticipated = [
    { eventName: 'Workshop 1', date: '2023-09-15', description: 'Learn React', position:'3rd' },
    { eventName: 'Seminar', date: '2023-09-20', description: 'Web Development Trends', position:'1st' },
    { eventName: 'Workshop 2', date: '2023-09-25', description: 'GraphQL Basics', position:'2nd' },
    // Add more events as needed
  ];

  return (
    <div > 
    <Head>
        <title>PEC ACM | Member Details</title> 
    </Head>
    <div className='flex flex-col'>
    <Navbar/>
  
  
  <div className='flex flex-col items-center mt-5 w-full'>
  <h1 className='text-center text-blue-600 text-5xl font-bold'>Student Detail</h1>
      <div className='flex flex-row gap-9 m-10 ml-40 max-sm:mx-10 max-sm:px-5'>
      
      <Image src='/assets/acm.png' width={150} height={150} className='outline outline-2 outline-blue-600 rounded-full'/>
        <div className='flex flex-col pl-15 justify-around'>
        <h1 className='text-blue-600 text-xl font-bold '>Ujjawal Gupta</h1>
        <h1 className='text-blue-600 text-xl font-bold '>21103079</h1>
        <h1 className='text-blue-600 text-xl font-bold '>Computer Science and Engineering</h1>
        <h1 className='text-blue-600 text-xl font-bold'>EB Member</h1>
        </div>
      </div>
      <h1 className='text-center text-blue-600 text-5xl font-bold m-10'>Events Conducted</h1>
      <div className='mx-auto w-2/3 bg-white rounded-lg shadow-lg overflow-hidden max-sm:w-4/5'>
            <table className='w-full'>
              <thead>
                <tr className='bg-blue-600 text-white'>
                  <th className='px-6 py-3 text-left'>Event Name</th>
                  <th className='px-6 py-3 text-left'>Date</th>
                  <th className='px-6 py-3 text-left'>Description</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100 hover:bg-blue-200' : 'bg-white hover:bg-blue-200'}
                  >
                    <td className='border px-6 py-3'>{event.eventName}</td>
                    <td className='border px-6 py-3'>{event.date}</td>
                    <td className='border px-6 py-3'>{event.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h1 className='text-center text-blue-600 text-5xl font-bold m-10'>Events Participated</h1>
      <div className='mx-auto w-2/3 bg-white rounded-lg shadow-lg overflow-hidden mb-10 max-sm:w-fit max-sm:mx-10'>
            <table className='w-full'>
              <thead>
                <tr className='bg-blue-600 text-white'>
                  <th className='px-6 py-3 text-left'>Event Name</th>
                  <th className='px-6 py-3 text-left'>Date</th>
                  <th className='px-6 py-3 text-left'>Description</th>
                  <th className='px-6 py-3 text-left'>Position</th>
                </tr>
              </thead>
              <tbody>
                {eventsParticipated.map((event, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100 hover:bg-blue-200' : 'bg-white hover:bg-blue-200'}
                  >
                    <td className='border px-6 py-3'>{event.eventName}</td>
                    <td className='border px-6 py-3'>{event.date}</td>
                    <td className='border px-6 py-3'>{event.description}</td>
                    <td className='border px-6 py-3'>{event.position}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  </div>



</div>

  </div>
  )
}

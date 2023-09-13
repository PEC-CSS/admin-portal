import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Navbar } from './Navbar'

export const Event = () => {
  const event = {
    eventName: 'MLtiverse',
    date: 'September 20, 2023',
    time: '10:00 AM - 12:00 PM',
    venue: 'Virtual Event',
    description:
      'A session designed to provide you with a strong foundation in machine learning, data analysis, and project development.All you need to bring is your enthusiasm to learn and, of course, your trusty laptop. The rest is in our capable hands as we guide you through your journey into the MLtiverse. So, fasten your seatbelts and make a note in your calendars!',
    organizers: 'Organizer 1, Organizer 2',
    attendanceLink: 'url'
  }

  return (
    <div>
      <Head>
        <title>PEC ACM | Event Details</title>
      </Head>
      <div className='flex flex-col'>
        <Navbar/>

        <div className='flex flex-col items-center mt-5  w-full'>
          <h1 className='text-center text-blue-600 text-5xl font-bold'>
            Event Details
          </h1>
          <div className='flex flex-row gap-6 m-10 ml-20'>
          </div>
          <div className='container mx-auto'>
            <div className=''>
              <div className='w-4/5 mx-auto mb-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105'>
                <div className='text-3xl mb-4 bg-blue-500 p-4 text-white font-bold rounded-t-lg justify-items-center'>
                  {event.eventName}
                </div>
                <div className='p-4'>
                  <p className='text-lg text-gray-700 mb-4'>
                    <strong>Description:</strong> {event.description}
                  </p>
                  <p className='text-lg text-gray-700 mb-4'>
                    <strong>Venue:</strong> {event.venue}
                  </p>
                  <p className='text-lg text-gray-700 mb-4'>
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className='text-lg text-gray-700 mb-4'>
                    <strong>Time:</strong> {event.time}
                  </p>
                  <p className='text-lg text-gray-700 mb-4'>
                    <strong>Organizers:</strong> {event.organizers}
                  </p>
                  <p className='text-lg text-gray-700 mb-4'>
                    <strong>Attendance:</strong> {event.attendanceLink}
                  </p>
                  {/* Images of event can be here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

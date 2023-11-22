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
    { eventName: 'Workshop 1', date: '2023-09-15', description: 'Learn React', position: '3rd' },
    { eventName: 'Seminar', date: '2023-09-20', description: 'Web Development Trends', position: '1st' },
    { eventName: 'Workshop 2', date: '2023-09-25', description: 'GraphQL Basics', position: '2nd' },
    // Add more events as needed
  ];

  return (
    <div >
      <Head>
        <title>PEC ACM | Member Details</title>
      </Head>
      <Navbar />
    </div>
  )
}

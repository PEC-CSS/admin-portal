import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

function search() {
  const students = [
    { name: 'John Doe', rollNumber: '001', subGroup: 'A' },
    { name: 'Jane Smith', rollNumber: '002', subGroup: 'B' },
    { name: 'Alice Johnson', rollNumber: '003', subGroup: 'A' },
    // Add more students as needed
  ];

  const events = [
    { eventName: 'Workshop 1', date: '2023-09-15', description: 'Learn React' },
    { eventName: 'Seminar', date: '2023-09-20', description: 'Web Development Trends' },
    { eventName: 'Workshop 2', date: '2023-09-25', description: 'GraphQL Basics' },
    // Add more events as needed
  ];

  return (
    <div>
      <Head>
        <title>PEC ACM</title>
      </Head>
      <div className='flex flex-col items-center bg-gray-100 min-h-screen'>
        <header className='w-full bg-blue-600 py-4 text-white text-center'>
          <div className='flex items-center justify-center'>
            <Image src='/assets/acm.png' width={90} height={90} alt='ACM Logo' />
            <h1 className='text-4xl font-bold ml-4'>Search Results Page</h1>
          </div>
        </header>
        <div className='w-full mt-6'>
          <h2 className='text-2xl font-semibold text-center mb-4'>Student Details</h2>
          <div className='mx-auto w-2/3 bg-white rounded-lg shadow-lg overflow-hidden'>
            <table className='w-full'>
              <thead>
                <tr className='bg-blue-600 text-white'>
                  <th className='px-6 py-3 text-left'>Name</th>
                  <th className='px-6 py-3 text-left'>Roll No</th>
                  <th className='px-6 py-3 text-left'>Sub Group</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100 hover:bg-blue-200' : 'bg-white hover:bg-blue-200'}
                  >
                    <td className='border px-6 py-3'>{student.name}</td>
                    <td className='border px-6 py-3'>{student.rollNumber}</td>
                    <td className='border px-6 py-3'>{student.subGroup}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='w-full mt-6'>
          <h2 className='text-2xl font-semibold text-center mb-4'>Event Details</h2>
          <div className='mx-auto w-2/3 bg-white rounded-lg shadow-lg overflow-hidden'>
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
        </div>
      </div>
    </div>
  );
}

export default search;

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
    </div>
  );
}

export default search;

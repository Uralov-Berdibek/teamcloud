import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar/>
      <Header/>
      <main className='flex-1 p-6'>{children}</main>
    </div>
  );
};

export default RootLayout;

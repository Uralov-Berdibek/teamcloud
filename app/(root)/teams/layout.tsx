import React from 'react';
import Header from '../../../components/global/header';
import Sidebar from '../../../components/global/sidebar';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <main className='flex-1 p-6 relative'>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default RootLayout;

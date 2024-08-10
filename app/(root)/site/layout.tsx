import React from 'react';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen bg-gray-100'>
      <main className='flex-1 p-6'>{children}</main>
    </div>
  );
};

export default RootLayout;

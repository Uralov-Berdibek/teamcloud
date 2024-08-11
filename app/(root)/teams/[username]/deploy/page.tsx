'use client';
import React from 'react';

type Props = {};

const Deploy = (props: Props) => {
  // Function to handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Handle file upload or processing here
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div>
      <div className='text-2xl font-semibold mb-4'>Deploy</div>
      <div className='border-dashed border-2 border-gray-400 rounded-lg p-16 flex flex-col items-center justify-center h-[75vh]'>
        <div className='text-gray-500'>Drag and drop your site output folder here</div>
        <div className='my-4'>or</div>
        {/* Hidden file input */}
        <input type='file' id='file-upload' onChange={handleFileChange} className='hidden' />
        {/* Styled button */}
        <label
          htmlFor='file-upload'
          className='bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer'
        >
          Browser
        </label>
      </div>
    </div>
  );
};

export default Deploy;

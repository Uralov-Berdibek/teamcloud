import React from 'react';

type Props = {};

const Support = (props: Props) => {
  return (
    <section className='flex flex-col items-center justify-center mt-20'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center'>
          <svg
            className='w-10 h-10 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
          </svg>
        </div>
        <h2 className='text-3xl font-semibold mt-4'>How can we help?</h2>
        <p className='text-gray-600 mt-2'>
          Discover solutions through our <span className='font-semibold'>documentation</span>,{' '}
          <span className='font-semibold'>guides</span>, and{' '}
          <span className='font-semibold'>community</span>
        </p>
      </div>

      <div className='mt-8 w-full max-w-md'>
        <input
          type='search'
          placeholder='Search...'
          className='w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500'
        />
        <div className='text-center mt-2'>
          <a href='#' className='text-blue-500'>
            Not sure what to search?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Support;

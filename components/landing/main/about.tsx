import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section
      className='w-full max-w-[1120px] mx-auto container my-32 px-4 sm:px-6 lg:px-8'
      id='about'
      aria-label='about'
    >
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <figure className='w-full md:w-[50%]'>
          <img
            src='./images/service.png'
            loading='lazy'
            alt='about banner'
            className='w-full h-auto'
          />
        </figure>

        <div className='w-full md:w-[50%] mt-10 md:mt-0 md:ml-20 text-center md:text-left'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-semibold leading-normal'>
            We've been helping <span className='text-blue-500'>customers</span> globally.
          </h2>

          <p className='text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wider text-gray-700 my-4'>
            Aliquam tristique libero at dui sodales, et placerat orci lobortis. Donec metus lorem,
            vulputate at sapien sit amet, auctor iaculis lorem.
          </p>

          <Link
            href='/auth'
            className='inline-block py-3 px-5 bg-sky-500 text-white font-medium rounded-[5px]'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className='h-[80vh] w-full max-w-[1120px] mx-auto container px-4 sm:px-6 lg:px-8'
      id='home'
      aria-label='home'
    >
      <div className='flex flex-col md:flex-row justify-between items-center mt-20'>
        <div className='w-full md:w-[600px] text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold leading-normal'>
            Connect everything. <span className='text-blue-500'>Build anything.</span>
          </h1>

          <p className='text-lg sm:text-xl md:text-2xl leading-relaxed tracking-wider text-gray-700 my-4'>
            Cloud is the essential platform for the delivery of exceptional and dynamic web
            experiences, without limitations
          </p>
          <Link
            href='/auth'
            className='inline-block py-3 px-5 bg-sky-500 text-white font-medium rounded-[5px]'
          >
            Get Started
          </Link>
        </div>

        <figure className='w-full md:w-auto mt-10 md:mt-0'>
          <img src='./images/hero-banner.png' alt='hero banner' className='w-full md:w-[500px]' />
        </figure>
      </div>
    </section>
  );
};

export default Hero;

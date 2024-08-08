import Image from 'next/image';
import React from 'react';
import { RiHome6Line } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';
import { SiGoogledocs } from 'react-icons/si';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className='w-64 bg-white p-4 flex flex-col'>
      <div className='flex items-center mb-20'>
        <Image src='/images/cloud.png' alt='Logo' width={200} height={40} />
      </div>
      <nav className='flex-1'>
        <ul>
          <li className='mb-5'>
            <a href='#' className='flex items-center text-[#051F61] text-xl font-semibold'>
              <RiHome6Line className='mr-2 text-3xl' /> Home
            </a>
          </li>
          <li className='mb-5'>
            <a href='#' className='flex items-center text-[#757897] text-xl font-semibold'>
              <TbWorldWww className='mr-2 text-3xl' /> Domains
            </a>
          </li>
          <li className='mb-5'>
            <a href='#' className='flex items-center text-[#757897] text-xl font-semibold'>
              <FiSettings className='mr-2 text-3xl' /> Team settings
            </a>
          </li>
          <li className='mb-5'>
            <a href='#' className='flex items-center text-[#757897] text-xl font-semibold'>
              <SiGoogledocs className='mr-2 text-3xl' /> Documentation
            </a>
          </li>
          <li className='mb-5'>
            <a href='#' className='flex items-center text-[#757897] text-xl font-semibold'>
              <FiHelpCircle className='mr-2 text-3xl' /> Support
            </a>
          </li>
        </ul>
      </nav>
      <div className='mt-8 p-4 bg-gray-200 rounded-lg text-center'>
        <p>75% In-use</p>
        <div className='relative w-full h-2 bg-gray-400 mt-2'>
          <div className='absolute top-0 left-0 h-2 bg-blue-600' style={{ width: '75%' }}></div>
        </div>
        <button className='mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg'>Upgrade</button>
      </div>
    </aside>
  );
};

export default Sidebar;

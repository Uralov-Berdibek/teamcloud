import React from 'react';
import { FiSearch, FiSettings, FiHelpCircle } from 'react-icons/fi';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between mb-8'>
      <div>
        <h2 className='text-2xl font-semibold text-[#051F61]'>Team Cloud</h2>
        <p className='text-[#051F61]'>Welcome, Berdibek Uralov! 👋</p>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center px-4 py-2 border rounded-lg bg-white'>
          <FiSearch className='mr-2 text-[#757897]' />
          <input type='text' placeholder='Search anything here' className='focus:outline-none' />
        </div>
        <Link
          href='/teams/berdibek/settings'
          className='ml-4 bg-white w-[40px] h-[40px] flex items-center justify-center rounded-lg'
        >
          <FiSettings className='text-[#051F61]' />
        </Link>
        <button className='ml-4 bg-white w-[40px] h-[40px] flex items-center justify-center rounded-lg'>
          <FiHelpCircle className='text-[#051F61]' />
        </button>
        <div className='ml-4 w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;

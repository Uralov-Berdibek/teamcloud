'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className='w-full max-w-[1120px] mx-auto container' data-header>
      <div className='flex justify-between items-center w-full mt-[25px]'>
        <a href='#' className='logo'>
          <img src='./images/cloud.png' alt='dprod logo' className='w-[150px] md:w-[200px]' />
        </a>

        <nav
          className={`fixed inset-0 bg-white z-10 p-4 md:static md:flex md:bg-transparent ${
            isMobileMenuOpen ? 'flex' : 'hidden'
          } md:flex-row md:items-center`}
          data-navbar
        >
          <ul className='flex flex-col md:flex-row justify-between items-center ml-0 md:ml-56'>
            <li className='mt-2 md:mt-0 md:ml-[60px]'>
              <a
                href='#home'
                className='font-medium text-black text-[18px] tracking-widest hover:underline'
                data-nav-link
              >
                Home
              </a>
            </li>
            <li className='mt-2 md:mt-0 md:ml-[60px]'>
              <a
                href='#services'
                className='font-medium text-black text-lg tracking-widest hover:underline'
                data-nav-link
              >
                Services
              </a>
            </li>
            <li className='mt-2 md:mt-0 md:ml-[60px]'>
              <a
                href='#about'
                className='font-medium text-black text-[18px] tracking-widest hover:underline'
                data-nav-link
              >
                About
              </a>
            </li>
          </ul>
          <Link
            href='/auth'
            className='mt-4 md:mt-0 py-3 px-5 bg-sky-500 text-white font-medium rounded-[5px] hidden lg:inline'
          >
            Get Started
          </Link>
        </nav>

        <button
          onClick={handleMenuToggle}
          className='md:hidden inline'
          aria-label='open menu'
          data-nav-toggler
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;

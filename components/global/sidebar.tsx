'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

type SidebarItem = {
  name: string;
  icon: React.ReactElement;
  link: string;
  isActive: boolean;
};

type SidebarProps = {
  items: SidebarItem[];
};

const Sidebar = ({ items }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile and Tablet */}
      <button className='md:hidden p-4 fixed top-0 left-0 z-20 mb-4' onClick={toggleSidebar}>
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-white p-4 flex flex-col fixed top-0 left-0 h-full z-10 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className='flex items-center mb-20'>
          <Image src='/images/cloud.png' alt='Logo' width={200} height={40} />
        </div>
        <nav className='flex-1'>
          <ul>
            {items.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`mb-5 flex items-center text-xl font-semibold ${
                  item.isActive ? 'text-[#051F61]' : 'text-[#757897]'
                }`}
                onClick={toggleSidebar}
              >
                {item.icon} {item.name}
              </Link>
            ))}
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
    </>
  );
};

export default Sidebar;

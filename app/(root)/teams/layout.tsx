'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/global/header';
import Sidebar from '../../../components/global/sidebar';
import { RiHome6Line } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';
import { SiGoogledocs } from 'react-icons/si';
import { useUsernameStore } from '../../../hooks/store';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const username = useUsernameStore((state) => state.username);

  const sidebarItems = [
    {
      name: 'Home',
      icon: <RiHome6Line className='mr-2 text-3xl' />,
      link: `/teams/${username}/`,
      isActive: true,
    },
    {
      name: 'Domains',
      icon: <TbWorldWww className='mr-2 text-3xl' />,
      link: `/teams/${username}/domains`,
      isActive: false,
    },
    {
      name: 'Team Settings',
      icon: <FiSettings className='mr-2 text-3xl' />,
      link: `/teams/${username}/team-settings`,
      isActive: false,
    },
    {
      name: 'Documentation',
      icon: <SiGoogledocs className='mr-2 text-3xl' />,
      link: `/teams/${username}/docs`,
      isActive: false,
    },
    {
      name: 'Support',
      icon: <FiHelpCircle className='mr-2 text-3xl' />,
      link: `/teams/${username}/support`,
      isActive: false,
    },
  ];

  return (
    <div className='flex h-auto min-h-screen bg-gray-100'>
      <Sidebar items={sidebarItems} />
      <main className='flex-1 p-6 relative ml-64'>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default RootLayout;

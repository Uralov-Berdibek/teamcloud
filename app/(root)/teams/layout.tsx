import React from 'react';
import Header from '../../../components/global/header';
import Sidebar from '../../../components/global/sidebar';
import { RiHome6Line } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';
import { SiGoogledocs } from 'react-icons/si';

const SidebarItem = [
  {
    name: 'Home',
    icon: <RiHome6Line className='mr-2 text-3xl' />,
    link: '/teams/berdibek/',
    isActive: true,
  },
  {
    name: 'Domians',
    icon: <TbWorldWww className='mr-2 text-3xl' />,
    link: '/teams/berdibek/domians',
    isActive: false,
  },
  {
    name: 'Team Settings',
    icon: <FiSettings className='mr-2 text-3xl' />,
    link: '/teams/berdibek/teams-settigns',
    isActive: false,
  },
  {
    name: 'Documentation',
    icon: <SiGoogledocs className='mr-2 text-3xl' />,
    link: '/teams/berdibek/docs',
    isActive: false,
  },
  {
    name: 'Support',
    icon: <FiHelpCircle className='mr-2 text-3xl' />,
    link: '/teams/berdibek/support',
    isActive: false,
  },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-auto min-h-screen bg-gray-100'>
      <Sidebar items={SidebarItem} />
      <main className='flex-1 p-6 relative ml-64'>
        <Header />
        {children}
      </main>
    </div>
  );
};

export default RootLayout;

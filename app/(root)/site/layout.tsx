import React from 'react';
import Sidebar from '../../../components/global/sidebar';
import { RiHome6Line } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';
import { FiHelpCircle, FiSettings } from 'react-icons/fi';
import { SiGoogledocs } from 'react-icons/si';
import Header from '../../../components/global/header';

const SidebarItem = [
  {
    name: 'Site Overwiev',
    icon: <RiHome6Line className='mr-2 text-3xl' />,
    link: '/',
    isActive: true,
  },
  {
    name: 'Site configuration',
    icon: <TbWorldWww className='mr-2 text-3xl' />,
    link: '/site/berdibek/configuration',
    isActive: false,
  },
  {
    name: 'Deploys',
    icon: <FiSettings className='mr-2 text-3xl' />,
    link: `/site/berdibek/deploys`,
    isActive: false,
  },
  {
    name: 'Logs',
    icon: <SiGoogledocs className='mr-2 text-3xl' />,
    link: '/site/berdibek/logs',
    isActive: false,
  },
  {
    name: 'Integrations',
    icon: <FiHelpCircle className='mr-2 text-3xl' />,
    link: '/site/berdibek/integrations',
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

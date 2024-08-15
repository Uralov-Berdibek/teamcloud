import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IoIosFolder } from 'react-icons/io';

type Site = {
  id: number;
  name: string;
  date: string;
  owner: string;
  fileSize: string;
  avatarUrl: string;
};

type Props = {
  sites: Site[];
};

const RecentSites = ({ sites }: Props) => {
  return (
    <section>
      <h3 className='text-xl font-semibold mb-4'>Recent Sites</h3>
      <table className='w-full bg-white rounded-lg shadow'>
        <thead>
          <tr className='text-left'>
            <th className='p-4'>Name</th>
            <th className='p-4'>Owned by</th>
            <th className='p-4'>File Size</th>
            <th className='p-4'>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <tr key={site.id} className='border-t cursor-pointer'>
              <td className='p-4'>
                <div className='flex items-center'>
                  <div className='bg-[#cbdfff] w-[40px] h-[40px] flex items-center justify-center rounded-lg'>
                    <IoIosFolder className='text-[#0061FF]' />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[#051F61]'>{site.name}</h4>
                  </div>
                </div>
              </td>
              <td className='p-4 flex items-center'>
                <Avatar>
                  <AvatarImage src={site.avatarUrl} alt={site.owner} />
                  <AvatarFallback>{site.owner[0]}</AvatarFallback>
                </Avatar>
                <span className='ml-2 text-[#757897]'>{site.owner}</span>
              </td>
              <td className='p-4 text-[#757897]'>{site.fileSize}</td>
              <td className='p-4 text-[#757897]'>{site.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentSites;

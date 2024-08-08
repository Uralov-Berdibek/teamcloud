import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IoIosFolder } from 'react-icons/io';
type Props = {};

const RecentSites = (props: Props) => {
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
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <tr key={idx} className='border-t'>
                <td className='p-4'>
                  <div className='flex items-center'>
                    <div className='bg-[#cbdfff] w-[40px] h-[40px] flex items-center justify-center rounded-lg'>
                      <IoIosFolder className='text-[#0061FF]' />
                    </div>
                    <div className='ml-2'>
                      <h4 className='text-[#051F61]'>portfolio.cloud.app</h4>
                    </div>
                  </div>
                </td>

                <td className='p-4 flex items-center'>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className='ml-2 text-[#757897]'>John Deo</span>
                </td>
                <td className='p-4 text-[#757897]'>2.8 MB</td>
                <td className='p-4 text-[#757897]'>Dec 13, 2022</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default RecentSites;

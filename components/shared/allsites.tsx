import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BsThreeDots } from 'react-icons/bs';
import { IoIosFolder } from 'react-icons/io';

type Props = {};

const AllSites = (props: Props) => {
  return (
    <section className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-[#051F61] font-semibold'>All Sites</h3>
        <button className='bg-[#cbdfff] text-[#051F61] font-semibold py-2 px-4 rounded-lg'>
          + Add new
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <div key={idx} className='p-6 bg-white rounded-lg shadow'>
              <div className='flex justify-between mb-10'>
                <div className='flex items-center'>
                  <div className='bg-[#cbdfff] w-[40px] h-[40px] flex items-center justify-center rounded-lg'>
                    <IoIosFolder className='text-[#0061FF]' />
                  </div>
                  <div className='ml-2'>
                    <h4 className='text-[#051F61]'>portfolio.cloud.app</h4>
                    <p className='text-[#757897]'>Sep 25, 2022, 13:25 PM</p>
                  </div>
                </div>
                <BsThreeDots className='text-[#757897]' />
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <div className='text-[#757897] text-sm'>Owned by</div>
                  <div className='flex items-center mt-2'>
                    <Avatar>
                      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='ml-2 text-[#757897]'>John Deo</span>
                  </div>
                </div>
                <div>
                  <div className='mt-2 text-[#757897]'>File Size</div>
                  <div className='bg-[#cbdfff] w-[70px] h-[30px] flex items-center justify-center rounded-lg'>
                    <div className='text-[#0061FF] text-sm'>3.9 MB</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AllSites;

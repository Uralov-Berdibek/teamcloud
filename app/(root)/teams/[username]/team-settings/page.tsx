import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
type Props = {};

const TeamsSettings = (props: Props) => {
  return (
    <div className='container mx-auto p-4 mb-4'>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <div className='bg-gray-50 p-4 rounded-lg shadow-inner flex items-center justify-between mb-4'>
          <div>
            <h2 className='text-xl font-semibold'>Team settings</h2>
            <p className='text-sm text-gray-600'>1 team member.</p>
            <p className='text-sm text-gray-600'>Team created on Feb 2 (6 months ago).</p>
          </div>
          <div className='w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className='space-y-6'>
          {/* Personal Information */}
          <section>
            <h3 className='font-semibold text-lg'>Team details</h3>
            <p className='text-gray-600'>Your Team information</p>
            <div className='bg-gray-50 p-4 mt-4 rounded-lg shadow-inner'>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Name:</p>
                <p className='w-3/4'>Team Cloud</p>
              </div>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Slug</p>
                <p className='w-3/4'>example11@gmail.com</p>
              </div>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Logo</p>
                <div className='w-3/4 flex items-center'>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Current plan:</p>
                <p className='w-3/4'>Starter</p>
              </div>
              <div className='flex gap-2 mt-4'>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700'>
                  Change team plan
                </button>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700'>
                  Edit settings
                </button>
              </div>
            </div>
          </section>

          {/* Delete User */}
          <section className='bg-gray-50 p-4 rounded-lg shadow-inner'>
            <h3 className='font-semibold text-lg text-red-600'>Delete Team</h3>
            <p className='text-gray-600 mb-1'>
              Once you delete your Team, there is no going back. Please be certain.
            </p>
            <div className='border-b'></div>
            <button className='mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700'>
              Delete Team
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TeamsSettings;

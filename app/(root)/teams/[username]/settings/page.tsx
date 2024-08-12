import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Settings = () => {
  return (
    <div className='container mx-auto p-4 mb-4'>
      <div className='bg-white shadow-md rounded-lg p-6'>
        <div className='bg-gray-50 p-4 rounded-lg shadow-inner flex items-center justify-between mb-4'>
          <div>
            <h2 className='text-xl font-semibold'>User settings</h2>
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
            <h3 className='font-semibold text-lg'>Profile</h3>
            <p className='text-gray-600'>Your personal information</p>
            <div className='bg-gray-50 p-4 mt-4 rounded-lg shadow-inner'>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Name:</p>
                <p className='w-3/4'>John Deo</p>
              </div>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Email:</p>
                <p className='w-3/4'>example11@gmail.com</p>
              </div>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Avatar:</p>
                <div className='w-3/4 flex items-center'>
                  <Avatar>
                    <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Password:</p>
                <p className='w-3/4'>***********</p>
              </div>
              <div className='flex items-center mb-3'>
                <p className='w-1/4 text-gray-700'>Default team:</p>
                <p className='w-3/4 text-gray-500'>My Team</p>
              </div>
              <button className='bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700'>
                Edit settings
              </button>
            </div>
          </section>

          {/* Appearance */}
          <section>
            <h3 className='font-semibold text-lg'>Appearance</h3>
            <div className='bg-gray-50 p-4 mt-4 rounded-lg shadow-inner'>
              <label className='flex items-center'>
                <input type='radio' name='theme' className='mr-2' defaultChecked />
                <span>Use system setting (default)</span>
              </label>
              <label className='flex items-center mt-2'>
                <input type='radio' name='theme' className='mr-2' />
                <span>Light</span>
              </label>
              <label className='flex items-center mt-2'>
                <input type='radio' name='theme' className='mr-2' />
                <span>Dark</span>
              </label>
            </div>
          </section>

          {/* Delete User */}
          <section className='bg-gray-50 p-4 rounded-lg shadow-inner'>
            <h3 className='font-semibold text-lg text-red-600'>Delete user</h3>
            <p className='text-gray-600 mb-1'>
              Once you delete your user, there is no going back. Please be certain.
            </p>
            <div className='border-b'></div>
            <button className='mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700'>
              Delete user
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;

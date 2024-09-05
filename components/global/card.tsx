import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  item: string;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className=' w-full  flex flex-col justify-between items-center gap-9'>
      <div className='w-full flex justify-between items-center'>
        <h3 className='text-2xl text-[#051F61] font-semibold'>{item}</h3>
        <span className='py-2 px-[50.5px] rounded-[8px] bg-[#EBF2FF] text-[#0061FF]'>Active</span>
      </div>
      {/* Card content */}
      <div className='w-full h-auto pl-[36px] pr-[55px] pt-[41px] pb-[46px] bg-[#FFFFFF] rounded-[15px] border-[#757897] border-[1px]'>
        <div className='flex justify-between items-start'>
          <div className='flex-col justify-between items-center'>
            <h2 className='font-inter  text-2xl font-semibold text-[#051F61]'>Team Cloud</h2>
            <p className='text-[#051F61] underline'>https://teamcloud.netlify.app</p>
            <p className='text-[#051F61] my-4'>Manual deploys.</p>
            <p className='text-[#051F61]'>Published at 8:14 PM.</p>
          </div>

          <Image width={200} height={150} src='/images/main_image.png' alt='Main' />
        </div>

        <div className='flex justify-between items-end gap-[51px] mt-[40px]'>
          <button className='py-[10px] px-[60px] rounded-[10px] bg-[#eeeeee] font-lato font-medium text-[24px] '>
            Favaurite site
          </button>
          <Link href={'/'}>
            <button className='py-[10px] px-[60px] rounded-[10px] bg-[#eeeeee] font-lato font-medium text-[24px]'>
              Site configuration
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

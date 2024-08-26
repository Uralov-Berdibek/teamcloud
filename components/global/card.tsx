import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  item: string; 
}


const Card: React.FC<CardProps> = ({item}) => {
  return (
    <div className=' w-full  flex flex-col justify-between items-center gap-9'>
    <div className='w-full flex justify-between items-center'>
        <h3 className='text-2xl text-[#051F61] font-semibold'>{item}</h3>
        <span className='py-2 px-[50.5px] rounded-[8px] bg-[#EBF2FF] text-[#0061FF]'>Active</span>
    </div>
     {/* Card content */}
    <div className='w-full h-[498px] flex justify-between items-start pl-[36px] pr-[55px] pt-[41px] pb-[46px] bg-[#FFFFFF] rounded-[15px] border-[#757897] border-[1px]'>
    <div className='flex flex-col  min-h-full justify-between items-start'>
      <div className='flex-col justify-between items-center'>
      <h2  className='font-inter  text-2xl font-semibold text-[#051F61]'>Team Cloud</h2>
      <p className='text-[#051F61]'>https://teamcloud.netlify.app</p>  
      <p className='text-[#051F61]'>Manual deploys.</p>  
      <p className='text-[#051F61]'>Published at 8:14 PM.</p>
      </div>
      <Link href={'/'}>
      <button className='py-[17px] px-[130px] rounded-[8px] bg-[#eeeeee] font-lato font-medium text-[24px]'>Site configuration</button>
      </Link>
    </div>   
    <div className=' flex flex-col min-h-full justify-between items-end gap-[51px]'>
      <Image width={383} height={281} src='/images/main_image.png' alt='Main'/>
      <button className='py-[17px] px-[130px] rounded-[8px] bg-[#eeeeee] font-lato font-medium text-[24px] '>Favaurite site</button>
    </div>
  </div>
  
  </div>
  )
}

export default Card
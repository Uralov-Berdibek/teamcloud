import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  item: string; 
}


const Card: React.FC<CardProps> = ({item}) => {
  return (
    <div className=' w-full flex flex-col justify-between items-center gap-9'>
    <div className='w-full flex justify-between items-center'>
        <h3 className='font-lato font-semibold text-xl text-[#757897]'>{item}</h3>
        <span className='py-2 px-[50.5px] rounded-[8px] bg-[#EBF2FF] text-[#0061FF]'>Active</span>
    </div>
    <div className='w-full flex justify-between items-start pl-[36px] pr-[55px] pt-[41px] pb-[46px] bg-[#FFFFFF] rounded-[15px] border-[#757897] border-[1px]'>
    <div className='flex flex-col justify-between items-start gap-[171px]'>
      <div className='flex-col justify-between items-center'>
      <h2 className='font-inter  font-medium text-[36px]'>Team Cloud</h2>
      <p className='font-inter  font-regular text-[24px] text-[#757897]'>https://teamcloud.netlify.app</p>  
      <p className='font-inter  font-regular text-[24px]'>Manual deploys.</p>  
      <p className='font-inter font-regular text-[24px]'>Published at 8:14 PM.</p>
      </div>
      <button className='py-[17px] px-[130px] rounded-[8px] bg-[#eeeeee] font-lato font-medium text-[24px]'>Site configuration</button>
    </div>   
    <div className=' flex flex-col justify-between items-end gap-[51px]'>
      <Image width={383} height={281} src='/images/main_image.png' alt='Main'/>
      <Link href={'/'}>
      <button className='py-[17px] px-[130px] rounded-[8px] bg-[#eeeeee] font-lato font-medium text-[24px] '>Favaurite site</button>
      </Link>
    </div>
  </div>
  
  </div>
  )
}

export default Card
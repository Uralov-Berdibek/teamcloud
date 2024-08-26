import React from 'react'
import Image from 'next/image'
import Card from '@/components/global/card'
import { FiSettings } from 'react-icons/fi';

const Logs = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-6 pb-12'>
        <Card item={'Team Cloud'}/>
      <div className='w-full flex flex-col justify-between items-start gap-16 border  border-[#757897] rounded-[15px] pt-[30px] pl-[43px] pr-[38px] pb-[40px]'>
          <div className='w-full flex justify-between items-start'>
               <div className='flex flex-col justify-between items-start gap-2'>
                  <h2 className='font-inter font-medium text-4xl text-[#051F61]'>Functions</h2>
                  <p className='font-inter font-extralight text-xl text-[#051F61]'>1 Lambda function 
                    actively running in production.</p>
                    <p className='font-inter font-extralight text-2xl text-[#051F61]'>Learn more about 
                        Functions in the docs/</p>  
               </div>
               <span className='py-[6px] px-7 bg-[#EEEEEE] font-lato  font-medium text-2xl'>Functions Level 0</span>
          </div>
          <button className='w-[525px] h-[60px] flex justify-center items-center gap-3 bg-[#EEEEEE] rounded-[8px] font-lato font-medium text-2xl'>
            <FiSettings className='w-10 h-10'/>   
            Configuration and usage</button>
      </div>
      <div className='w-full flex flex-col justify-between items-start gap-4 border  border-[#757897] rounded-[15px] px-1 pb-[63px]'>
        <span className='w-full h-4 bg-[#0061FF] rounded-[20px]'></span> 
        <div className='w-full pl-[38px] flex flex-col justify-between items-start gap-7'>
            <h3 className='font-lato font-medium text-3xl text-[#051F61]'>Add Log Drains</h3>
            <p className='w-[581px] font-lato font-medium text-xl text-[#051F61]'>Use Log Drains to forward your site's function logs to third- party monitoring services
             to track invocations and troubleshoot issues over longer periods of time.</p>
             <button className='py-2 px-6 bg-[#0061FF] rounded-[10px] font-lato font-medium text-xl text-white'>Contact sales team</button>
        </div>
      </div>
      <div className='w-full flex flex-col justify-between items-start gap-7 pt-5 pb-16 pl-14 border border-[#757897] rounded-[15px]'>
        <div className='w-2/5 px-6 py-1 flex justify-start items-center gap-1 rounded-[10px] border border-[#000000]'>
            <Image width={29} height={29} src='/images/log__search.svg' alt='Search' />
            <input type="text" placeholder=' Search by branch or Deploy Preview number' className='flex outline-none bg-transparent' />
        </div>
        <div className='flex flex-col justify-center items-start gap-1'>
            <h3 className='font-lato font-medium text-xl'>Next.js Server Handler <span className='font-lato font-medium text-xl text-[#051F61]'>System</span></h3>
            <p className='font-lato font-medium text-xl text-[#051F61]'>Created on Jul 28 (2 days ago)</p>
        </div>
      </div>
    </div>
  )
}

export default Logs
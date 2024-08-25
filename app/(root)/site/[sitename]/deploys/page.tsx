"use client"

import React, { useRef } from 'react';
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import Card from '@/components/global/card'

const Deploys = () => {


  return (
    <div className='flex flex-col justify-between items-center gap-20 pb-16'>
        <Card item={'Deploys'}/>
        <div className='w-full bg-white rounded-[19px] pt-5 pb-5 pl-6 pr-7 flex flex-col justify-between items-start gap-5'>
        <div className='w-full flex justify-start border-[#757897]  border-b-2 pb-3'>
          <h2 className='font-lato font-medium text-4xl'>Deploys</h2>
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col justify-between items-start'>
                <h4 className='font-lato font-bold text-2xl'>Production</h4>
                <p className='font-lato font-medium text-xl text-[#757897]'>No deploy message</p>
            </div>
            <span className='font-lato font-medium text-xl'>Yesterday at 8:14 PM</span>
        </div>
        <div className="flex justify-center items-center w-full h-44 border-2 border-dotted border-black">   
        <Input id="picture" type="file" className='w-1/4' />
        </div>  
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className='w-full h-[296px] flex flex-col justify-center items-center gap-3 bg-[#C4C4C4]'>
            <div className='flex flex-col items-start justify-between gap-3'>
           <h3 className='font-lato font-bold text-2xl text-[#5B5B5B]'>High-Performance Edge</h3>
           <p className='w-72  font-lato font-bold text-xs text-[#5B5B5B]'>The premium network for production, high-performance applications. Experience 30-50% faster response time and more global POPs. backed by a 99.99% uptime SLA.
             Includes DDoS mitigation and six times the bandwidth as our standard network.</p>
             <span className='text-[#0061FF] font-lato font-bold text-xl'>Upgrade to Enterprise  -&gt;</span>
            </div>
          </div>
          <Image width={488} height={296} src="/images/deploys__image.png" alt="Map" />
        </div>
    </div>
  )
}

export default Deploys
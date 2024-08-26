import Card from '@/components/global/card'
import React from 'react'

const Deploys = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-20'>
        <Card item={'Deploys'}/>
        <div className='w-full bg-white rounded-[19px] pt-5 pb-24 pl-6 pr-7 flex flex-col justify-between items-start '>
        <div className='w-full flex justify-start border-[#757897]  border-b-2 pb-5'>
          <h2 className='font-lato font-medium text-4xl text-[#051F61]'>Deploys</h2>
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='flex flex-col justify-between items-start'>
                <h4 className='font-lato font-bold text-2xl text-[#051F61]'>Production</h4>
                <p className='font-lato font-medium text-xl text-[#051F61]'>No deploy message</p>
            </div>
            <span className='font-lato font-medium text-xl text-[#051F61]'>Yesterday at 8:14 PM</span>
        </div>
        </div>
    </div>
  )
}

export default Deploys
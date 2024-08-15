'use client';
import React, { useState } from 'react';


const Information = () => {

    const[name,setName] = useState('Party time')

    const handlechange = (value:any) =>{
        setName(value)
    }

    const Infoitem = [
        { label: 'Site name:', value: 'Party time' },
        { label: 'Owner:', value: 'My Team' },
        { label: 'Site ID:', value: '1154878' },
        { label: 'Created:', value: '17.10.1009' },
        { label: 'Last update:', value: '17.10.1009' }
    ]

    return(
<div className='flex flex-col items-start gap-[40px] pt-5 pb-24 px-7 bg-white rounded-[15px]'>
    <h2 className='font-lato font-medium text-4xl border-b border-[#757897] w-full text-left pb-2'>Site information</h2>
    <div className='flex flex-col w-full space-y-[19px]'>
      {Infoitem.map(({ label, value }) => (
         <div key={label} className='flex justify-start items-start '>
          <p className='font-lato font-medium text-xl text-[#494949]'>{label}</p>
          <p className='font-lato font-medium text-xl'>{value}</p>
        </div>
      ))}
    </div>
    <div className='flex justify-between items-center space-x-3 '>
        <button className='py-3 px-7 rounded-[8px] bg-[#0061FF] text-white'>Change site name</button>
        <button className='py-3 px-7 rounded-[8px] bg-[#0061FF] text-white'>Domein</button>
        <button className='py-3 px-7 rounded-[8px] bg-[#FF0000] text-white'>Delete</button>
    </div>
</div>
)
}

export default Information;

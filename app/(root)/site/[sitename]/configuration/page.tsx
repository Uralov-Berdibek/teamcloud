import React from 'react';
import Card from '@/components/global/card';

type Props = {};

const Configuration = (props: Props) => {

  const siteInfo = [
    { label: 'Site name:', value: 'Party time' },
    { label: 'Owner:', value: 'My Team' },
    { label: 'Site ID:', value: '1154878' },
    { label: 'Created:', value: '17.10.1009' },
    { label: 'Last update:', value: '17.10.1009' },
  ];

  return(
    <div className='flex flex-col justify-between items-center gap-8'>
      <Card item={'Site configuration'}/>
      <div className='w-full bg-white rounded-[19px] pt-5 pb-24 pl-6 pr-7 flex flex-col justify-between items-start gap-11'>
        <div className='w-full flex justify-start border-[#757897]  border-b-2 pb-5'>
          <h2 className='font-lato font-medium text-4xl'>Site information</h2>
        </div>
        <div className='w-full flex flex-col justify-between items-start gap-5'>
          {
            siteInfo.map(({label,value},index)=>(
            <div className='w-2/5 flex justify-between items-center' key={index}>
              <p className='font-lato font-medium text-xl'>{label}</p>
              <p className='font-lato font-medium text-xl'>{value}</p>
            </div>
            ))
          }
        </div>
        <div className='w-3/5 flex justify-start items-center gap-2'>
          <button className='py-3 px-7 rounded-[8px] bg-[#0061FF] text-white'>Change site name</button>
          <button className='py-3 px-7 rounded-[8px] bg-[#0061FF] text-white'>Domein</button>
          <button className='py-3 px-7 rounded-[8px] bg-[#FF0000] text-white'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Configuration;

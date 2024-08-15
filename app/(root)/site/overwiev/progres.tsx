'use client';

import Image from 'next/image';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useState } from 'react';




function ProgressBars() {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
      }));

      const [value, setVaule] = useState(50)

      const handlechange = (num:any)=>{
       return setVaule(num)
    }

  return (
    <div className='flex-col justify-between items-center  bg-white rounded-[19px]  pr-[4px] pl-[21px] pb-[47px] pt-0' >
      <BorderLinearProgress variant="determinate" value={value} />
      <div className='flex justify-between items-center border-b-2 border-[#757897] pb-5'>
        <h2 className='font-lato font-bold text-3xl'>Set up your site</h2>
        <button>
            <Image width={38} height={40} src='/images/progress__close.svg' alt='close'/>
        </button>
      </div>
      <div className='flex justify-between items-center cursor-pointer'>
        <div className='flex flex-col justify-between items-center' onClick={()=>handlechange(30)}>
            <span className='font-lato font-bold text-8xl text-[#757897]'>1</span>
            <h5 className='font-lato font-bold text-xl text-[#757897]'>Your site is Deployed</h5>
            <p className='text-[#757897] text-center  w-[207px] font-lato font-bold text-xs'>Try a test build and deploy, directly from your Git repository or a folder.</p>
        </div>
        <div className='flex flex-col items-center justify-between cursor-pointer' onClick={()=>handlechange(50)}>
            <span className='font-lato font-bold text-8xl text-[#757897]'>2</span>
            <h5 className='font-lato font-bold text-xl text-[#757897]'>Set up a custom domain</h5>
            <p className='text-[#757897] w-[207px] text-center font-lato font-bold text-xs'>Buy a new domain or set up a domain you already own.</p>
        </div>
        <div className='flex flex-col items-center justify-between cursor-pointer'>
            <span className='font-lato font-bold text-8xl text-[#757897]' onClick={()=>handlechange(100)}>3</span>
            <h5 className='font-lato font-bold text-xl text-[#757897]'>Secure your site with HTTPS</h5>
            <p className='text-[#757897] w-[207px] text-center font-lato font-bold text-xs'>Your site is secured automatically with a Let's Encrypt certificate.</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressBars
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/global/card';
import { Progress } from '@/components/ui/progress';

interface ColorMap {
  [key: number]: string;
}

const colorMap: ColorMap = {
  20: '#0061FF',
  50: '#0061FF',
  100: '#0061FF',
};

interface Step {
  num: number;
  text: string;
  description: string;
}

const Overview = ({ params }: { params: { sitename: string } }) => {
  const [progress, setProgress] = useState<number>(0);

  const handleChange = (num: number) => {
    setProgress(num);
  };

  const getColor = (num: number) => (progress === num ? colorMap[num] : '#878787');

  const steps: Step[] = [
    {
      num: 20,
      text: 'Your site is Deployed',
      description: 'Try a test build and deploy, directly from your Git repository or a folder.',
    },
    {
      num: 50,
      text: 'Set up a custom domain',
      description: 'Buy a new domain or set up a domain you already own.',
    },
    {
      num: 100,
      text: 'Secure your site with HTTPS',
      description: "Your site is secured automatically with a Let's Encrypt certificate.",
    },
  ];

  return (
    <div className='h-hull flex flex-col justify-start items-center gap-[58px]'>
      <Card item={'Site overview'} />
      <div className='w-full flex flex-col justify-between items-start pl-[22px] pr-[4.98px] pb-[47px] bg-white rounded-[19px] gap-[28px]'>
        <Progress value={progress} />
        <div className='w-full flex flex-col justify-between items-center gap-[22px]'>
          <div className='w-full flex justify-between items-center border-b-2 border-[#757897] pb-[23px]'>
            <h2 className='font-lato font-bold text-3xl'>Set up your site</h2>
            <button>
              <Image width={38} height={40} src={'/images/progress__close.svg'} alt='Close' />
            </button>
          </div>
          <div className='w-full flex justify-around'>
            {steps.map(({ num, text, description }, index) => (
              <div
                key={num}
                className='flex flex-col justify-between items-center cursor-pointer'
                onClick={() => handleChange(num)}
              >
                <h2 className='font-lato font-bold text-8xl' style={{ color: getColor(num) }}>
                  {index + 1}
                </h2>
                <h4 className='font-lato font-bold text-xl' style={{ color: getColor(num) }}>
                  {text}
                </h4>
                <p className='w-52 font-lato font-bold text-xs text-[#878787] text-center'>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

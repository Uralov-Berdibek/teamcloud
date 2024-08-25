import Card from '@/components/global/card'
import React from 'react'
import Image from 'next/image'
import IntegrationCard from '@/components/shared/integration__card'


const Integrations = () => {

  const data = [
    {
      name:'21YunBox',
      made:'21YunBox',
      description:'Deploy to China straight from your Netlify Dashboard',
      enable:'enable',
      option:{
        enable:'enable',
        disable:'disable'
      }
    },
    {
        name:'21YunBox',
        made:'21YunBox',
        description:'Deploy to China straight from your Netlify Dashboard',
        enable:'enable',
    },
    {
        name:'21YunBox',
        made:'21YunBox',
        description:'Deploy to China straight from your Netlify Dashboard',
        enable:'enable',
        option:{
          enable:'enable',
          disable:'disable'
        }
    },
    {
        name:'21YunBox',
        made:'21YunBox',
        description:'Deploy to China straight from your Netlify Dashboard',
        option:{
          enable:'enable',
          disable:'disable'
        }
    },
    {
      name:'21YunBox',
      made:'21YunBox',
      description:'Deploy to China straight from your Netlify Dashboard',
      enable:'enable',
      option:{
        enable:'enable',
        disable:'disable'
      }
    },
    {
      name:'21YunBox',
      made:'21YunBox',
      description:'Deploy to China straight from your Netlify Dashboard',
      option:{
        enable:'enable',
        disable:'disable'
      }
    },
  ]


  return (
    <div className='w-full flex flex-col gap-12 pb-14'>
        <Card item={'Team Cloud'}/>
        <div className='w-full flex justify-between items-end'>
            <div className='flex flex-col items-start gap-1'>
                <h2 className='font-lato font-semibold text-3xl text-[#051F61]'>All integrations</h2>
                <p className='font-lato font-semibold text-2xl text-[#051F61]'>Integrations are a way to 
                    connect your app to third-party services.</p>
            </div>
            <button className='py-3 px-5 bg-[#EBF2FF] rounded-[8px] text-[#0061FF]'>Create a private integration</button>
        </div>
        <div className='flex justify-between items-center pt-6 pb-[68px] pl-9 pr-32 rounded-[10px] bg-[#EBF2FF]'>
            <div className='flex flex-col items-start gap-6'>
                <h2 className='w-[484px] font-inter font-bold text-3xl text-[#051F61]'>Build deep integrations and 
                connectors with the Netlify SDK</h2>
                <p className='text-[#0061F0] font-inter font-bold text-xl'> Learn how to create your own Integration /</p>
            </div>
          <Image width={184} height={187} src="/images/integration__puzzel.png" alt="Puzzel" />
        </div>
        <div className='w-full flex flex-col items-start gap-8'>
            <div className='w-full flex justify-center items-center gap-7 py-3  pl-7 border border-[#000000] rounded-[10px]'>
                <Image width={36} height={36} src="/images/log__search.svg" alt="Search" />
                <input type="text" placeholder='Search integrations' className='w-full outline-none bg-transparent' />
            </div>
            <div className='flex flex-wrap  justify-between items-start gap-7'>
                {
                    data.map((item,i)=>(
                        <IntegrationCard item={item} key={i}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Integrations
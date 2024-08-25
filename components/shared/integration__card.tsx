"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import  {Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
   
  type Checked = DropdownMenuCheckboxItemProps["checked"]

  interface IntegrationOption {
    enable: string;
    disable: string;
  }
  
  interface IntegrationCardProps {
    item: {
      name: string;
      made: string;
      enable:string;
      description: string;
      option: IntegrationOption;
    };
  } 
  
 

const IntegrationCard:React.FC <IntegrationCardProps> = ({item}) => {

    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)


  return (
    <div  className='w-[330px] flex flex-col items-center gap-11 pt-3 pb-6 pl-2 pr-5 rounded-[10px] border border-[#000000] '>
     <div  className='flex flex-col items-start gap-5'>
       <div className='flex items-center'>
        <Image width={79} height={78} src="/images/integration__card.png" alt="Card" />
        <div className='flex flex-col items-start'>
            <h4 className='font-inter font-bold text-xl text-[#7f7f7f]'>{item.name}</h4>
            <p className='font-inter font-bold text-[#7f7f7f]'>by {item.made}</p>
        </div>
       </div>
       <p className=' w-[263px] font-inter font-bold text-lg text-[#7f7f7f]'>{item.description}</p>
     </div>
     <div className='flex justify-center items-center gap-3 pl-3'>
      {
        item.enable&&(
          <button className='first-letter:uppercase py-[10px] px-[51px] rounded-[10px] bg-[#EBF2FF] text-[#0061FF]'>{item.enable}</button>
        )
      }
      {
        item.option&&(
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='py-[10px] px-[51px] rounded-[10px]  bg-[#EBF2FF] text-[#0061FF]'>Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          <p className='first-letter:uppercase'>
          {item.option.enable}
          </p>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
            <p className='first-letter:uppercase'>
         {item.option.disable}
          </p>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
      )
    }
     </div>
    </div>
  )
}

export default IntegrationCard
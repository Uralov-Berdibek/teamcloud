"use client"

import React from 'react';
import { Avatar, AvatarFallback, AvatarImage  } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { BsThreeDots } from 'react-icons/bs';
import { IoIosFolder } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';

type Site = {
  id: number;
  name: string;
  link: string;
  date: string;
  owner: string;
  fileSize: string;
  avatarUrl: string;
};

type Props = {
  sites: Site[];
};

const AllSites = ({ sites }: Props) => {

  const sitemenu = [
    {
      id:1,
      name:'Github',
      img:'/images/github.svg',
       link:'/teams/berdibek/'
    },
    {
      id:2,
      name:'Gitlab',
      img:'/images/gitlab.svg',
       link:'/teams/berdibek/'
    },
    {
      id:3,
      name:'Add new',
      img:'',
      link:'/teams/berdibek/deploy'
    }
  ]

  return (
    <section className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-2xl text-[#051F61] font-semibold'>All Sites</h3>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className='bg-[#cbdfff] text-[#051F61] font-semibold py-2 px-4 rounded-lg'>+ Add new</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[80px]">
        {
          sitemenu.map(({name,img,link},i)=>(
            <Link href={link} key={i}>
            <DropdownMenuCheckboxItem className='w-full flex justify-start items-center gap-2 '>
              {
                img == '' ? '+':
                <Image width={25} height={25} src={img} alt={name}/>
              }
              <p className='text-[#051F61] font-semibold '>{name}</p>
          </DropdownMenuCheckboxItem>
            </Link>
          ))
        }

      </DropdownMenuContent>
    </DropdownMenu>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        {sites.map((site) => (
          <Link
            href={`site/${site.name}`}
            key={site.id}
            className='p-6 bg-white rounded-lg shadow cursor-pointer'
          >
            <div className='flex justify-between mb-10'>
              <div className='flex items-center'>
                <div className='bg-[#cbdfff] w-[40px] h-[40px] flex items-center justify-center rounded-lg'>
                  <IoIosFolder className='text-[#0061FF]' />
                </div>
                <div className='ml-2'>
                  <h4 className='text-[#051F61]'>{site.link}</h4>
                  <p className='text-[#757897]'>{site.date}</p>
                </div>
              </div>
              <BsThreeDots className='text-[#757897]' />
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <div className='text-[#757897] text-sm'>Owned by</div>
                <div className='flex items-center mt-2'>
                  <Avatar>
                    <AvatarImage src={site.avatarUrl} alt={site.owner} />
                    <AvatarFallback>{site.owner[0]}</AvatarFallback>
                  </Avatar>
                  <span className='ml-2 text-[#757897]'>{site.owner}</span>
                </div>
              </div>
              <div>
                <div className='mt-2 text-[#757897]'>File Size</div>
                <div className='bg-[#cbdfff] w-[70px] h-[30px] flex items-center justify-center rounded-lg'>
                  <div className='text-[#0061FF] text-sm'>{site.fileSize}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllSites;

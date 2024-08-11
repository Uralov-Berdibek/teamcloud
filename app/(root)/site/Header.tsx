import React from 'react'
import Image from 'next/image'  


const Header = () => {
  return (
      <section>
        <div className="container">
            <div className='flex justify-between items-center'>
                <div className='flex-col justify-between items-center gap-[8px]'>
                 <h4 className='font-lato font-bold text-[28px] text-[#051F61]'>Team Cloud</h4>
                 <h5 className='font-lato font-semibold text-[20px] text-[#757897]'>Welcome, John Deo!👋</h5>
                </div>
                <div className='flex justify-between items-center gap-[12px]'>
                    <div className='py-[8px] px-[16px] bg-[#ffffff] rounded-[8px] flex justify-between items-center'>
                     <Image src="/images/header__search.svg"
                      width={16}
                      height={16}
                     alt='header__search' />
                     <input type="text" placeholder='Search anything here'/>
                    </div>
                    <div className='flex justify-between items-center gap-[11px]'>
                    <span className='flex justify-center items-center bg-[#ffffff] w-[40px] h-[40px] rounded-[8px]'>
                    <Image src="/images/header__ring.svg" width={20} height={20} alt="Notifications" />
                    </span>
                    <span className='flex justify-center items-center bg-[#ffffff] w-[40px] h-[40px] rounded-[8px]'>
                    <Image src="/images/header__settings.svg" width={20} height={20} alt="Settings" />
                    </span>
                    <Image src="/images/header__avatar.png" width={40} height={40} alt="Avatar" />
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Header
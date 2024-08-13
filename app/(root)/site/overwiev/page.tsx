import React from 'react'
import ProgressBars from './progres'
import Card from './card'

const Overwiev = () => {

  
  return (
    <section className='felx felx-col justify-between items-start ' >
      <div className='felx felx-col justify-between items-start'>
        <h3 className='font-lato font-semibold text-[20px] text-[#757897] mb-5'>Site overview</h3>
        <Card/>
      </div>
    <ProgressBars/>
    </section>
  )
}

export default Overwiev
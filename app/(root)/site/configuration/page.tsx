import React from 'react'
import Card from '../overwiev/card'
import Information from './information';

const Configuration = () => {

  return (
     <section>
        <div>
        <h3 className='font-lato font-semibold text-[20px] text-[#757897] mb-5'>Site Configuration</h3>
        <Card/>
        </div>
        <Information/>
     </section>
  )
}

export default Configuration
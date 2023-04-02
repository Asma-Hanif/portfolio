import Image from 'next/image'
import React from 'react'

export default function Work() {
  return (
    <section className='container  mx-auto py-10 px-4'>
    <h1 className='text-3xl'>Creative Works</h1>
    <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-[-15px] translate-x-[220px]'></div>

        <div className='grid grid-cols-4 gap-4 pt-9'>
            <div className=' relative group'>
                <img src='https://images.pexels.com/photos/7506692/pexels-photo-7506692.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>Project Title </div>
            </div>
            <div className=' relative group'>
                <img src='https://images.pexels.com/photos/3747266/pexels-photo-3747266.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>Project Title </div>
            </div>
            <div className=' relative group'>
                <img src='https://images.pexels.com/photos/5641902/pexels-photo-5641902.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>Project Title </div>
            </div>
            <div className=' relative group'>
                <img src='https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <div className='bg-[#000000bd] absolute w-[100%] h-[100%] top-0 opacity-0 transition duration-500 group-hover:opacity-100 grid place-items-center text-white'>Project Title </div>
            </div>
        </div>
    </section>
  )
}

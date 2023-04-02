import React from 'react'
import Typewriter from "typewriter-effect"

export default function Hero() {
  return (
    <div className='bg-[url("https://images.pexels.com/photos/7506673/pexels-photo-7506673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-screen bg-cover bg-center bg-fixed flex items-center'>

      <div className='container mx-auto px-10'>

        <div className='max-w-[450px] text-white flex flex-col gap-[40px] '>

          <div>

            <h1 className='text-5xl'> I&apos;m Asma Hanif </h1>
            <h4 className='text-2xl mt-3'> Frontend Developer
              {/* <Typewriter
              options={{
                strings:[
                  "Frontend Developer",
                  "UI/UX Designer"
                ],
                changeDelay:3,
                changeDeleteSpeed:2,
                autoStart:true,
                loop:true,
              
              }}
              /> */}
            </h4>
          </div>
          <div className='bg-[#ff4D41] h-[2px] w-[40px]'></div>
          <div>
            <p className='pb-[20px]'>In a professional context it often happens that private clients order a publication to be made.</p>
            <button type="button" className=" text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Learn More </button>
          </div>
        </div>


      </div>

    </div>
  )
}

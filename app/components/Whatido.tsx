import React from 'react'

export default function Whatido() {
  return (
    <section className='container  mx-auto py-10 px-4' id='what'>
    <h1 className='text-3xl'>What I Do</h1>
    <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-[-15px] translate-x-[150px]'></div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-9'>
            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>

                <h2 className='font-medium text-[20px]'>Creative Designs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut illo consectetur saepe minima accusamus assumenda repellendus cupiditate animi, vitae omnis esse a quidem molestiae dolore pariatur eaque? Nihil, voluptatum?</p>

            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
</svg>


                <h2 className='font-medium text-[20px]'>Web Development</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut illo consectetur saepe minima accusamus assumenda repellendus cupiditate animi, vitae omnis esse a quidem molestiae dolore pariatur eaque? Nihil, voluptatum?</p>

            </div>

            <div className='shadow-lg flex flex-col gap-4 px-8 py-10 bg-[#ff4D41] text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
</svg>


                <h2 className='font-medium text-[20px]'>UI Designs</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut illo consectetur saepe minima accusamus assumenda repellendus cupiditate animi, vitae omnis esse a quidem molestiae dolore pariatur eaque? Nihil, voluptatum?</p>

            </div>
        </div>


    </section>
  )
}

import React from 'react'

export default function Skill() {
  return (
    <section className='container  mx-auto py-10 px-4' id='skill'>
    <h1 className='text-3xl'>Skills</h1>
    <div className='bg-[#ff4D41] h-[2px] w-[40px] translate-y-[-15px] translate-x-[80px]'></div>

    <p className='text-gray-600 mb-10 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, natus minus modi, odio fuga ipsa necessitatibus recusandae, ipsum quia pariatur aperiam numquam in. Sequi assumenda, porro alias consequuntur nemo impedit!</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div>
                <p>React.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[90%]'></div>
                </div>
            </div>

            <div>
                <p>Node.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[60%]'></div>
                </div>
            </div>
            <div>
                <p>Next.js</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[40%]'></div>
                </div>
            </div>
            <div>
                <p>Express</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[50%]'></div>
                </div>
            </div>
            <div>
                <p>Redux</p>
                <div className='relative bg-gray-400 h-[4px] mt-2'>
                    <div className='bg-[#ff4D41] absolute h-[4px] w-[60%]'></div>
                </div>
            </div>
        </div>

        
    </section>
  )
}

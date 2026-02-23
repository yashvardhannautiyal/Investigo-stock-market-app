import React from 'react'
import { TbArrowNarrowRight } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";

function HeroSection() {
  return (
    <div className='flex px-24 justify-between items-center h-screen'>
      {/* text  */}
      <div>
        <p className='mb-8 border w-56 flex items-center justify-center rounded-2xl text-xs border-blue-700 text-blue-800 backdrop-blur-md gap-2 font-semibold'> <MdElectricBolt /> REAL TIME TRADING APP</p>

      <h1 className='text-7xl font-extrabold text-gray-800'>Master the</h1>
      <h1 className='text-7xl font-extrabold bg-linear-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>Global Markets</h1>

      <p className='w-10/12'>Experience the next generation of trading with professional-grade tools, real-time data, and intelligent analytics designed for modern investors.</p>

      <button className='mt-5 bg-blue-700 hover:bg-blue-600 text-white px-2 py-2 w-3xs rounded-2xl font-bold text-lg flex items-center gap-3 justify-center cursor-pointer'>
          Start Trading Now
          <TbArrowNarrowRight className='text-2xl font-extrabold'/>
        </button>
      </div>

      {/* image  */}
      <div>
        <img src="../src/assets/heroSectionImg.jpg" alt="" className='w-xl rounded-lg' />
      </div>
    </div>
  )
}

export default HeroSection
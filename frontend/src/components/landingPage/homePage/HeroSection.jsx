import React from 'react'
import { TbArrowNarrowRight } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-10 gap-10 lg:gap-0 min-h-screen'>

      {/* text  */}
      <div className='flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2'>
        
        <p className='flex items-center gap-2 text-blue-800 border px-7 lg:px-12 rounded-full text-xs lg:text-md font-bold sm:text-base'>
          <MdElectricBolt className="lg:text-xl" />
          REAL TIME TRADING APP
        </p>

        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white mt-4'>
          Master the
        </h1>

        <h1 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold bg-linear-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>
          Global Markets
        </h1>

        <p className='w-full sm:w-10/12 text-sm sm:text-base mt-3'>
          Experience the next generation of trading with professional-grade tools, real-time data, and intelligent analytics designed for modern investors.
        </p>

        <Link to="/login">
          <button className='mt-5 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 w-full sm:w-3xs rounded-2xl font-bold text-base sm:text-lg flex items-center gap-2 justify-center cursor-pointer'>
            Start Trading Now
            <TbArrowNarrowRight className='text-2xl font-extrabold'/>
          </button>
        </Link>
      </div>

      {/* image  */}
      <div className='w-full lg:w-1/2 flex justify-center'>
        <img
          src="../src/assets/heroSectionImg.jpg"
          alt=""
          className='w-full max-w-xs sm:max-w-md lg:max-w-xl rounded-lg'
        />
      </div>
    </div>
  )
}

export default HeroSection
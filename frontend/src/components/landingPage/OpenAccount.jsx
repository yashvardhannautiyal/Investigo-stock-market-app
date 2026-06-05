import React from 'react'
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from 'react-router-dom';

function OpenAccount() {
  return (
    <div className='py-16 px-6 sm:px-10 lg:px-20 bg-linear-to-r from-blue-500 to-red-600 dark:bg-linear-to-r dark:from-gray-900 dark:to-gray-900 flex flex-col items-center justify-center text-center'>

      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
        Ready to Start Trading?
      </h1>

      <p className='mt-5 text-sm sm:text-base lg:text-lg text-blue-100 max-w-3xl'>
        Join over 2 million traders who trust TradeFlow for their trading needs. Start your journey today.
      </p>

      <div className='flex flex-col sm:flex-row gap-5 sm:gap-12 mt-8 mb-14 w-full sm:w-auto'>

        <Link to="/login" className='w-full sm:w-auto'>
          <button className='bg-white py-2 px-6 sm:px-8 rounded-2xl font-bold flex items-center justify-center gap-1 text-blue-700 cursor-pointer w-full'>
            Create Free Account
            <TbArrowNarrowRight className='text-2xl font-bold'/>
          </button>
        </Link>

        <Link to="/features" className='w-full sm:w-auto'>
          <button className='py-2 border border-white px-8 sm:px-12 rounded-2xl text-white font-bold cursor-pointer w-full'>
            Learn More
          </button>
        </Link>

      </div>
    </div>
  )
}

export default OpenAccount
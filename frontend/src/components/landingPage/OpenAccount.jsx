import React from 'react'
import { TbArrowNarrowRight } from "react-icons/tb";

function OpenAccount() {
  return (
    <div className='bg-linear-to-r from-blue-500 to-red-600 p-12 flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-14 text-white'>
      <h2 className='font-extrabold text-4xl tracking-wide'>Ready to Start Trading?</h2>
      <p className='mt-4'>Join over 2 million traders who trust TradeFlow for their trading needs. Start your journey today.</p>
      </div>

      <div className='flex gap-12 mt-8 mb-14'>
        <button className='bg-white py-3 px-12 rounded-2xl font-bold flex items-center justify-center gap-1 text-blue-700 cursor-pointer'>Create Free Account
          <TbArrowNarrowRight className='text-2xl font-bold'/>
        </button>
        <button className='py-3 border border-white px-12 rounded-2xl text-white font-bold cursor-pointer'>Learn More</button>
      </div>
    </div>
  )
}

export default OpenAccount

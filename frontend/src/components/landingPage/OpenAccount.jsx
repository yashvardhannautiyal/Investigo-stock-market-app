import React from 'react'

function OpenAccount() {
  return (
    <div className='bg-linear-to-r from-blue-500 to-red-600 p-12 flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center mt-10 text-white'>
      <h2 className='font-extrabold text-4xl tracking-wide'>Ready to Start Trading?</h2>
      <p className='mt-4'>Join over 2 million traders who trust TradeFlow for their trading needs. Start your journey today.</p>
      </div>

      <div className='mb-12 mt-8'>
        <button>Create Free Account</button>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default OpenAccount

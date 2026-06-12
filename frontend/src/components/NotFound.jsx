import React from 'react'

function NotFound() {
  return (
    <div className='text-center px-6 py-16 sm:py-24 md:py-32 my-10 sm:my-16 md:my-24'>
      <p className='font-extrabold text-6xl sm:text-8xl md:text-9xl'>
        404
      </p>

      <p className='font-bold text-xl sm:text-2xl md:text-3xl mt-2'>
        Not Found
      </p>

      <p className='text-sm sm:text-base md:text-lg mt-3'>
        Page you are looking for can't be found
      </p>
    </div>
  )
}

export default NotFound
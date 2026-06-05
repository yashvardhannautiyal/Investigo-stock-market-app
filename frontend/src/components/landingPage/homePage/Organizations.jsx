import React from 'react'

function Organizations() {
  return (
    <div className='bg-white dark:bg-gray-900 py-10 px-6 sm:px-10 lg:px-20'>

      <p className='text-xs sm:text-sm font-bold flex items-center justify-center mb-9 text-gray-600 dark:text-gray-400 text-center'>
        TRUSTED BY LEADING ORGANIZATIONS
      </p>

      <ul className='flex flex-wrap justify-center lg:justify-between items-center gap-6 sm:gap-10 text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-500 dark:text-gray-200 lg:px-26 text-center'>
        <li>TechCorp</li>
        <li>FinanceHub</li>
        <li>GlobalTrade</li>
        <li>InvestPro</li>
      </ul>

    </div>
  )
}

export default Organizations
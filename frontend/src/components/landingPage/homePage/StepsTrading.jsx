import React from 'react'
import { LuUsersRound } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";

function StepsTrading() {
  return (
    <div className='py-16 px-6 sm:px-10 lg:px-20'>

      <div className='text-center'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold'>
          Start Trading in 3 Simple Steps
        </h1>

        <p className='mt-4 text-sm sm:text-base text-gray-700 dark:text-gray-400 max-w-2xl mx-auto'>
          Get started with TradeFlow in minutes. No complex setup required.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-10 lg:gap-14 items-center px-0 sm:px-6 lg:px-24 mt-12'>

        <div className='w-full text-center md:text-left'>
          <LuUsersRound className='text-5xl text-blue-700 font-extrabold mx-auto md:mx-0'/>

          <h3 className='text-xl font-extrabold text-gray-800 dark:text-gray-300 mt-3'>
            Create Your Account
          </h3>

          <p className='text-gray-700 dark:text-gray-400 mt-3'>
            Sign up in seconds with your email. No credit card required to start.
          </p>
        </div>

        <div className='w-full text-center md:text-left'>
          <BsCurrencyDollar className='text-5xl text-blue-700 font-extrabold mx-auto md:mx-0'/>

          <h3 className='text-xl font-extrabold text-gray-800 dark:text-gray-300 mt-3'>
            Create Your Account
          </h3>

          <p className='text-gray-700 dark:text-gray-400 mt-3'>
            Deposit funds securely via bank transfer, card, or cryptocurrency.
          </p>
        </div>

        <div className='w-full text-center md:text-left'>
          <AiOutlineStock className='text-5xl text-blue-700 font-extrabold mx-auto md:mx-0'/>

          <h3 className='text-xl font-extrabold text-gray-800 dark:text-gray-300 mt-3'>
            Create Your Account
          </h3>

          <p className='text-gray-700 dark:text-gray-400 mt-3'>
            Access global markets and start trading with our professional tools.
          </p>
        </div>

      </div>

    </div>
  )
}

export default StepsTrading
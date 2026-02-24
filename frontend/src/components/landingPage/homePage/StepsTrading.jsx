import React from 'react'
import { LuUsersRound } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";

function StepsTrading() {
  return (
    <div className='bg-linear-to-r from-amber-50 to-blue-100 py-16'>
        <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-extrabold text-gray-800'>Start Trading in 3 Simple Steps</h2>
        <p className='text-gray-500 mt-2'>Get started with TradeFlow in minutes. No complex setup required.</p>
        </div>

        <div className='flex gap-14 items-center  px-24 mt-10'>
            <div>
                <LuUsersRound className='text-5xl text-blue-700 font-extrabold'/>
                <h3 className='text-xl font-extrabold text-gray-800 mt-3'>Create Your Account</h3>
                <p className='text-gray-500 mt-3'>Sign up in seconds with your email. No credit card required to start.</p>
            </div>
            <div>
                <BsCurrencyDollar className='text-5xl text-blue-700 font-extrabold'/>
                <h3 className='text-xl font-extrabold text-gray-800 mt-3'>Create Your Account</h3>
                <p className='text-gray-500 mt-3'>Deposit funds securely via bank transfer, card, or cryptocurrency.</p>
            </div>
            <div>
                <AiOutlineStock className='text-5xl text-blue-700 font-extrabold'/>
                <h3 className='text-xl font-extrabold text-gray-800 mt-3'>Create Your Account</h3>
                <p className='text-gray-500 mt-3'>Access global markets and start trading with our professional tools.</p>
            </div>
            
        </div>
      
    </div>
  )
}

export default StepsTrading

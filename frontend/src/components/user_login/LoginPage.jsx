import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineStock } from "react-icons/ai";

function LoginPage() {
  return (
    <div className='flex justify-center items-center p-6'>
      
        <div className="w-lg bg-white rounded-xl shadow-2xl p-6">
          {/* upper part  */}
        <div className='flex flex-col justify-center items-center'>
        <Link to="/" className="flex items-center gap-2 mt-3">
        <AiOutlineStock className="text-4xl font-extrabold" />
          <h1 className="text-3xl font-extrabold text-blue-800">InvestiGo</h1>
        </Link>

        <h3 className='text-2xl font-extrabold mt-6'>Welcome back</h3>
        <p className='mt-2 text-sm text-gray-500'>Enter your credentials to access your account</p>
        </div>

        {/* form  */}
        <form>
          <p>Email address</p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

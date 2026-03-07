import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";

function SignUpPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-lg bg-white rounded-xl shadow-2xl py-6 px-8">
        {/* upper part  */}
        <div className="flex flex-col justify-center items-center">
          <Link to="/" className="flex items-center gap-2 mt-3">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-3xl font-extrabold text-blue-800">InvestiGo</h1>
          </Link>

          <h3 className="text-2xl font-extrabold mt-3">Create an account</h3>
          <p className="mt-2 text-sm text-gray-500">
            Start your journey to InvestiGo today
          </p>
        </div>

        {/* form  */}
        <form className="mt-4 px-6 text-sm font-medium">
          <p>Full Name</p>
          <input
            type="email"
            name="email"
            className="bg-gray-100 border-2 border-gray-300 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="John Doe"
          />
          <p className="mt-4">Email address</p>
          <input
            type="email"
            name="email"
            className="bg-gray-100 border-2 border-gray-300 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="johndoe@example.com"
          />
          <p className="mt-4">Password</p>
          <input
            type="password"
            name="password"
            className="bg-gray-100 border-2 border-gray-300 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="••••••"
          />
          <p className="mt-4">Confirm Password</p>
          <input
            type="password"
            name="c-password"
            className="bg-gray-100 border-2 border-gray-300 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="••••••"
          />
          <Link to="/login">
          <button className="bg-blue-800 text-white w-full mt-4 py-2 rounded-xl font-bold text-lg cursor-pointer hover:bg-blue-700">
            Create Account
          </button>
          </Link>
          <hr className="mt-4 text-blue-300" />
        </form>

        <p className="text-center mt-3 text-gray-600 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-700 font-bold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;

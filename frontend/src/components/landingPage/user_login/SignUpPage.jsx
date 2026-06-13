import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import { useState } from "react";

import ThemeToggle from "../ThemeToggle";
import axios from "axios";

function SignUpPage({ setUser }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://investigo-backend.onrender.com/api/users/signup", formData);

      localStorage.setItem("token", res.data.token);

      console.log(res.data);

      setUser(res.data);

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden px-4 sm:px-6">
      
      <div className="flex justify-end items-center p-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-1 justify-center items-center">
        
        <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-xl shadow-2xl py-6 px-4 sm:px-8">
          
          {/* upper part  */}
          <div className="flex flex-col justify-center items-center text-center">
            
            <Link to="/" className="flex items-center gap-2 mt-3">
              <AiOutlineStock className="text-3xl sm:text-4xl font-extrabold" />

              <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-800">
                InvestiGo
              </h1>
            </Link>

            <h3 className="text-xl sm:text-2xl font-extrabold mt-3">
              Create an account
            </h3>

            <p className="mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Start your journey to InvestiGo today
            </p>
          </div>

          {/* form  */}
          <form
            className="mt-4 px-2 sm:px-6 text-sm font-medium"
            onSubmit={handleSubmit}
          >
            <p>Full Name</p>

            <input
              type="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="John Doe"
              autoComplete="off"
              required
            />

            <p className="mt-4">Email address</p>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="johndoe@example.com"
              autoComplete="off"
              required
            />

            <p className="mt-4">Password</p>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="••••••"
              autoComplete="off"
              required
            />

            {/* <p className="mt-4">Confirm Password</p>
            <input
              type="password"
              name="c-password"
              className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl py-2 px-3 w-full mt-1 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="••••••"
            /> */}

            <button className="bg-blue-800 text-white w-full mt-4 py-2 rounded-xl font-bold text-base sm:text-lg cursor-pointer hover:bg-blue-700">
              Create Account
            </button>

            <hr className="mt-4 text-blue-300 dark:text-gray-700" />
          </form>

          {error && (
            <p className="text-center mt-3 text-red-700 text-sm">
              {error}
            </p>
          )}

          <p className="text-center mt-3 text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 dark:text-blue-600 font-bold"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
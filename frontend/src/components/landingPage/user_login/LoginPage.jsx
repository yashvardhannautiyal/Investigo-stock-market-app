import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import { useState } from "react";

import ThemeToggle from "../ThemeToggle";
import axios from "axios";

function LoginPage({setUser}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try{
      const res = await axios.post("/api/users/login", formData);
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      setUser(res.data);
      navigate('/');
    }catch(err){
      setError(err.response?.data?.message || "Login failed");
      console.log(err);
    }
  }
  

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex justify-end items-center p-4">
      <ThemeToggle />
      </div>
    
    <div className="flex flex-1 justify-center items-center">
      <div className="w-lg bg-white dark:bg-gray-900 rounded-xl shadow-2xl py-6 px-8">
        {/* upper part  */}
        <div className="flex flex-col justify-center items-center">
          <Link to="/" className="flex items-center gap-2 mt-3">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-3xl font-extrabold text-blue-800">InvestiGo</h1>
          </Link>

          <h3 className="text-2xl font-extrabold mt-5">Welcome back</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>

        {/* form  */}
        <form className="mt-8 px-6 text-sm font-medium" onSubmit={handleSubmit}>
          <p>Email address</p>
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
            required
            autoComplete="off"
          />
          <button className="bg-blue-800 text-white w-full mt-4 py-2 rounded-xl font-bold text-lg cursor-pointer hover:bg-blue-700">
            Login
          </button>
          <hr className="mt-6 text-blue-300 dark:text-gray-700" />
        </form>
        {error && <p className="text-center mt-3 text-red-700 text-sm">{error}</p>}
        <p className="text-center mt-3 text-gray-500 dark:text-gray-400 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-700 dark:text-blue-600 text-sm font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;

import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import ThemeToggle from "../landingPage/ThemeToggle";

function DashboardNav() {
  return (
    <div>
        {/* navbar  */}
      <nav className="p-3 w-full flex justify-between sticky top-0 backdrop-blur-sm z-50 bg-white">
        {/* logo  */}
        <div className="logo flex items-center gap-1">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-2xl font-extrabold text-blue-800">InvestiGo</h1>
        </div>

        <ThemeToggle />
      </nav>
      <hr className="text-gray-300"/>
    </div>
  )
}

export default DashboardNav

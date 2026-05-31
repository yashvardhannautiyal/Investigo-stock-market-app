import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import ThemeToggle from "../landingPage/ThemeToggle";
import { FaRegUserCircle } from "react-icons/fa";

function DashboardNav({ user, setUser }) {
  return (
    <div>
      {/* navbar  */}
      <nav className="py-3 px-8 w-full flex justify-between sticky top-0 backdrop-blur-sm z-50 bg-white dark:bg-gray-950">
        {/* logo  */}
        <Link to="/">
          <div className="logo flex items-center gap-1">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-2xl font-extrabold text-blue-800">InvestiGo</h1>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <p>
            {user ? (
              <div className="flex items-center gap-1 font-bold text-md">
                <FaRegUserCircle />
                <p>Hello, {user.username}</p>
                </div>
            ) : (
              <p>Hello</p>
            )}
          </p>

          <ThemeToggle />
        </div>
      </nav>
      <hr className="text-gray-300 dark:text-gray-700" />
    </div>
  );
}

export default DashboardNav;

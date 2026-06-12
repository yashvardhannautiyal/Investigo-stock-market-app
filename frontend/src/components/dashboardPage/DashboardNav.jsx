import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoWalletSharp } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import ThemeToggle from "../landingPage/ThemeToggle";

function DashboardNav({ user, setUser }) {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="py-3 px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center sticky top-0 backdrop-blur-sm z-50 bg-white dark:bg-gray-950">
        
        {/* Left Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center gap-1">
              <AiOutlineStock className="text-3xl sm:text-4xl font-extrabold" />
              <h1 className="text-xl sm:text-2xl font-extrabold text-blue-800">
                InvestiGo
              </h1>
            </div>
          </Link>
          


          
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3 lg:gap-5 ml-4">
            
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } px-3 py-2 rounded-lg flex gap-2 items-center font-medium`
              }
            >
              <MdOutlineDashboard />
              <span className="hidden lg:block">Dashboard</span>
            </NavLink>

            <NavLink
              to="/dashboard/positions"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } px-3 py-2 rounded-lg flex gap-2 items-center font-medium`
              }
            >
              <VscGraph />
              <span className="hidden lg:block">Positions</span>
            </NavLink>

            <NavLink
              to="/dashboard/funds"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } px-3 py-2 rounded-lg flex gap-2 items-center font-medium`
              }
            >
              <CiMoneyCheck1 />
              <span className="hidden lg:block">Funds</span>
            </NavLink>

            <NavLink
              to="/dashboard/portfolio"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } px-3 py-2 rounded-lg flex gap-2 items-center font-medium`
              }
            >
              <IoWalletSharp />
              <span className="hidden lg:block">Portfolio</span>
            </NavLink>
          </div>
          
          {/* User */}
          <div className="flex items-center gap-2">
            <FaRegUserCircle className="text-xl sm:text-2xl" />

            {user ? (
              <p className="font-medium text-sm sm:text-base">
                <span className="hidden sm:inline">Hello, </span>
                {user.username}
              </p>
            ) : (
              <p className="font-medium text-sm sm:text-base">Hello</p>
            )}
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />

          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenu(true)}
            className="text-3xl md:hidden"
          >
            <HiMenuAlt3 />
          </button>
          
        </div>
      </nav>

      <hr className="text-gray-300 dark:text-gray-700" />

      {/* Mobile Full Screen Menu */}
      {openMenu && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-gray-950 flex flex-col p-6 md:hidden">
          
          {/* Top */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <AiOutlineStock className="text-4xl font-extrabold" />
              <h1 className="text-2xl font-extrabold text-blue-800">
                InvestiGo
              </h1>
            </div>

            <button
              onClick={closeMenu}
              className="text-4xl"
            >
              <IoClose />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-5 mt-12 text-lg font-semibold">
            
            <NavLink
              to="/dashboard"
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } p-3 rounded-xl flex gap-3 items-center`
              }
            >
              <MdOutlineDashboard />
              Dashboard
            </NavLink>

            <NavLink
              to="/dashboard/positions"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } p-3 rounded-xl flex gap-3 items-center`
              }
            >
              <VscGraph />
              Positions
            </NavLink>

            <NavLink
              to="/dashboard/funds"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } p-3 rounded-xl flex gap-3 items-center`
              }
            >
              <CiMoneyCheck1 />
              Funds
            </NavLink>

            <NavLink
              to="/dashboard/portfolio"
              onClick={closeMenu}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-blue-100 dark:bg-gray-800"
                    : "hover:bg-gray-100 dark:hover:bg-gray-300"
                } p-3 rounded-xl flex gap-3 items-center`
              }
            >
              <IoWalletSharp />
              Portfolio
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardNav;
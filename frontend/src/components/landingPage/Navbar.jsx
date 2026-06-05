import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";

import ThemeToggle from "./ThemeToggle";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-10 flex justify-between items-center sticky top-0 backdrop-blur-md z-50">
      
      {/* logo */}
      <Link to="/">
        <div className="flex items-center gap-1">
          <AiOutlineStock className="text-3xl sm:text-4xl font-extrabold" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-800">
            InvestiGo
          </h1>
        </div>
      </Link>

      {/* desktop menu */}
      <div className="hidden md:flex gap-7 items-center font-bold">
        <p className="hover:text-blue-700">
          <Link to="/">Home</Link>
        </p>

        <p className="hover:text-blue-700">
          <Link to="/features">Features</Link>
        </p>

        {user ? (
          <div className="flex gap-5 items-center">
            <p className="hover:text-blue-700">
              <Link to="/dashboard">Dashboard</Link>
            </p>

            <button
              className="bg-blue-800 px-4 py-2 rounded-xl text-white hover:bg-blue-700 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-blue-800 px-5 py-2 rounded-xl text-white hover:bg-blue-700 cursor-pointer">
              Log in
            </button>
          </Link>
        )}

        <ThemeToggle />
      </div>

      {/* mobile menu button */}
      <div className="md:hidden flex items-center gap-3">
        <ThemeToggle />

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiX className="text-3xl" />
          ) : (
            <HiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-blue-50 dark:bg-gray-950 flex flex-col items-center gap-6 py-6 font-bold shadow-lg md:hidden">
          
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            to="/features"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-700"
          >
            Features
          </Link>

          {user ? (
            <>
              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-700"
              >
                Dashboard
              </Link>

              <button
                className="bg-blue-800 px-5 py-2 rounded-xl text-white hover:bg-blue-700 cursor-pointer"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <button className="bg-blue-800 px-5 py-2 rounded-xl text-white hover:bg-blue-700 cursor-pointer">
                Log in
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
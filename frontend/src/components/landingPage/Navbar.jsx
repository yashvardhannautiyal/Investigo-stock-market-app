import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineStock } from "react-icons/ai";

function Navbar() {
  return (
    <div className="p-3 w-full flex justify-between fixed top-0 backdrop-blur-sm z-50">
      {/* logo  */}
      <div className="logo">
        <Link to="/" className="flex items-center gap-2 ">
        <AiOutlineStock className="text-5xl font-extrabold" />
          <h1 className="text-4xl font-extrabold bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">InvestiGo</h1>
        </Link>
      </div>

      <div className="flex gap-9 items-center font-semibold">
        <p className="hover:text-blue-700">
          <Link to="/">Home</Link>
        </p>
        <p className="hover:text-blue-700">
          <Link to="/features">Features</Link>
        </p>
        <p className="hover:text-blue-700">
          <Link to="/pricing">Pricing</Link>
        </p>
      </div>

      <div className="flex gap-7 items-center">
          <ThemeToggle />
        <Link to="/login">
          <button className="font-semibold bg-blue-700 px-7 h-8 rounded-xl text-white hover:bg-blue-600 cursor-pointer">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineStock } from "react-icons/ai";

function Navbar() {
  return (
    <div className="p-3 w-full flex justify-between sticky top-0 backdrop-blur-sm z-50">
      {/* logo  */}
      <div className="logo">
        <Link to="/" className="flex items-center gap-2 ">
        <AiOutlineStock className="text-5xl font-extrabold" />
          <h1 className="text-4xl font-extrabold text-blue-800">InvestiGo</h1>
        </Link>
      </div>

      <div className="flex gap-7 items-center font-bold">
        <p className="hover:text-blue-700">
          <Link to="/">Home</Link>
        </p>
        <p className="hover:text-blue-700">
          <Link to="/features">Features</Link>
        </p>
        <Link to="/login">
          <button className="bg-blue-800 px-6 h-8 rounded-xl text-white hover:bg-blue-700 cursor-pointer">
            Log in
          </button>
        </Link>
          <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;

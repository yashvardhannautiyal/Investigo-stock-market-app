import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <div className="container p-3 flex justify-between">
      {/* logo  */}
      <div className="logo">
        <Link to="/" className="flex items-center gap-2 ">
          <img src="../src/assets/logo.png" alt="" className="w-11" />
          <h1 className="text-4xl font-extrabold text-blue-800">InvestiGo</h1>
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
        <button className="cursor-pointer"><MdOutlineDarkMode className="text-2xl"/></button>
        <Link to="/login">
          <button className="font-semibold bg-blue-800 px-7 h-8 rounded-sm text-white hover:bg-blue-700 cursor-pointer">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

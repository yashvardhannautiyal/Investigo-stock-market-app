import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoWalletSharp } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";

function Menu() {
  return (
    <div className="bg-white min-h-screen w-50 p-6">
      <h4 className="text-gray-500 text-xs font-bold">MENU</h4>
      <ul className="space-y-3 mt-4 font-bold text-gray-600">
        <li className="bg-blue-50 px-3 py-1 rounded-lg w-36 flex gap-1 items-center">
          <MdOutlineDashboard /><Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="bg-blue-50 px-3 py-1 rounded-lg w-36 flex gap-1 items-center">
          <VscGraph /><Link to="/dashboard/positions">Positions</Link>
        </li>
        <li className="bg-blue-50 px-3 py-1 rounded-lg w-36 flex gap-1 items-center">
          <IoWalletSharp /> <Link to="/dashboard/funds">Funds</Link>
        </li>
        <li className="bg-blue-50 px-3 py-1 rounded-lg w-36 flex gap-1 items-center">
         <CiMoneyCheck1 />  <Link to="/dashboard/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

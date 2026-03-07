import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoWalletSharp } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";

function Menu() {
  return (
    <div className="bg-white min-h-screen w-50 p-6">
      <h4 className="text-gray-500 text-xs font-bold">MENU</h4>
      <ul className="space-y-3 mt-4 font-bold text-gray-600">
        <li className="w-36">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100" : "hover:bg-gray-100"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            <MdOutlineDashboard />
            Dashboard
          </NavLink>
        </li>
        <li className="w-36">
          <NavLink
            to="/dashboard/positions"
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100" : "hover:bg-gray-100"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            <VscGraph /> Positions
          </NavLink>
        </li>
        <li className="w-36">
          <NavLink
            to="/dashboard/funds"
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100" : "hover:bg-gray-100"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            <IoWalletSharp /> Funds
          </NavLink>
        </li>
        <li className="w-36">
          <NavLink
            to="/dashboard/portfolio"
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100" : "hover:bg-gray-100"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            {" "}
            <CiMoneyCheck1 /> Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

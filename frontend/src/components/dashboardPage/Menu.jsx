import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { IoWalletSharp } from "react-icons/io5";
import { CiMoneyCheck1 } from "react-icons/ci";

function Menu() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen w-60 p-6">
      <h4 className="text-gray-500 dark:text-gray-300 text-xs font-bold">MENU</h4>
      <ul className="space-y-3 mt-4 font-bold text-gray-600 dark:text-gray-300 flex-col">
        <li className="w-40">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-300"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            <MdOutlineDashboard />
            Dashboard
          </NavLink>
        </li>
        <li className="w-40">
          <NavLink
            to="/dashboard/positions"
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-300"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            <VscGraph /> Positions
          </NavLink>
        </li>
        <li className="w-40">
          <NavLink
            to="/dashboard/funds"
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-300"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            <IoWalletSharp /> Funds
          </NavLink>
        </li>
        <li className="w-40">
          <NavLink
            to="/dashboard/portfolio"
            className={({ isActive }) =>
              `${isActive ? "bg-blue-100 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-300"} p-2 rounded-lg  flex gap-1 items-center`
            }
          >
            {" "}
            <CiMoneyCheck1 className="text-xl"/> Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

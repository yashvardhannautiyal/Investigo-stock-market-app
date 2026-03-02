import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStock } from "react-icons/ai";
import ThemeToggle from "../landingPage/ThemeToggle";
import Funds from "./funds/Funds";
import Portfolio from "./portfolio/Portfolio";
import Positions from "./positions/Positions";
import Watchlist from "./watchlist/Watchlist";

// import {GeneralContextProvider} from "./GeneralContext"

function Dashboard() {
  return (
    <div>
        {/* navbar  */}
      <nav className="p-3 w-full flex justify-between sticky top-0 backdrop-blur-sm z-50 bg-white">
        {/* logo  */}
        <div className="logo">
          <Link to="/" className="flex items-center gap-2 ">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-3xl font-extrabold text-blue-800">InvestiGo</h1>
          </Link>
        </div>

        <ThemeToggle />
      </nav>
      <hr className="text-gray-300"/>

    {/* menu  */}
      <Menu />

    </div>
  );
}

export default Dashboard;

import React, { useContext, useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../../../data/data.js";
import GeneralContext from "../GeneralContext.jsx";
import { DoughnutChart } from "../DoughnutChart.jsx";
import TopBar from "./TopBar.jsx";

const WatchList = () => {
  const labels = watchlist.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
          "rgba(255, 159, 64, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full">
      
      {/* Watchlist */}
      <div className="w-full lg:w-[60%] dark:bg-gray-950 bg-white rounded-2xl">
        <TopBar />

        {/* Search */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search eg: infy, bse, nifty..."
            className="w-full p-2 text-sm border-b border-gray-300 dark:border-gray-700 outline-none shadow-sm"
          />

          <span className="absolute right-4 text-gray-400 dark:text-gray-300 text-xs sm:text-sm">
            {watchlist.length} / 50
          </span>
        </div>

        {/* List */}
        <ul>
          {watchlist.map((stock, index) => (
            <WatchListItem stock={stock} key={index} />
          ))}
        </ul>
      </div>

      {/* Chart */}
      <div className="w-full lg:w-[40%] flex justify-center items-start">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default WatchList;

// ---------------- ITEM ----------------

const WatchListItem = ({ stock }) => {
  const [showAction, setShowAction] = useState(false);

  return (
    <li
      className="relative border-b border-gray-200 dark:border-gray-700 px-3 py-3 cursor-pointer"
      onMouseEnter={() => setShowAction(true)}
      onMouseLeave={() => setShowAction(false)}
    >
      <div className="flex justify-between items-center gap-3">
        
        <p
          className={`text-sm sm:text-base ${
            stock.isDown
              ? "text-red-500 dark:text-red-400"
              : "text-green-500 dark:text-green-400"
          }`}
        >
          {stock.name}
        </p>

        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {stock.percent}
          </span>

          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500 dark:text-red-400 text-sm sm:text-base" />
          ) : (
            <KeyboardArrowUp className="text-green-500 dark:text-green-400 text-sm sm:text-base" />
          )}

          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
            {stock.price}
          </span>
        </div>
      </div>

      {showAction && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// ---------------- ACTIONS ----------------

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  return (
    <span className="flex flex-wrap gap-2 mt-3 sm:absolute sm:right-3 sm:top-2 sm:mt-0 bg-white/80 dark:bg-gray-300 rounded-sm py-1 px-2">
      
      <button
        onClick={() => generalContext.openBuyWindow(uid)}
        className="bg-blue-500 text-white px-3 py-1 text-xs rounded hover:bg-blue-400"
      >
        Buy
      </button>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button
          onClick={() => generalContext.openSellWindow(uid)}
          className="bg-red-500 text-white px-3 py-1 text-xs rounded hover:bg-red-400"
        >
          Sell
        </button>
      </Tooltip>

      <Tooltip
        title="Analytics (A)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="border px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <BarChartOutlined className="text-sm" />
        </button>
      </Tooltip>

      <Tooltip
        title="More"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="border px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
          <MoreHoriz className="text-sm" />
        </button>
      </Tooltip>
    </span>
  );
};
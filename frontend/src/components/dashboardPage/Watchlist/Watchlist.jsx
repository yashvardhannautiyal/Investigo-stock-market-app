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
    <div className="flex pb-10">
      <div className="w-[60%] shadow-sm overflow-y-auto relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-100 dark:border-gray-700">
        <TopBar />

        {/* Search */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search eg: infy, bse, nifty..."
            className="w-full p-2 text-sm border-b border-gray-300 dark:border-gray-700 outline-none shadow-sm"
          />
          <span className="absolute right-4 text-gray-400 dark:text-gray-300 text-sm">
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

      {/* chart  */}
      <div className="w-[40%]">
      <DoughnutChart data={data} />
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
      className="relative border-b border-gray-200 dark:border-gray-700 px-3 py-2 cursor-pointer"
      onMouseEnter={() => setShowAction(true)}
      onMouseLeave={() => setShowAction(false)}
    >
      <div className="flex justify-between items-center text-sm font-light">
        <p className={stock.isDown ? "text-red-500 dark:text-red-400" : "text-green-500 dark:text-green-400"}>
          {stock.name}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-gray-500 dark:text-gray-400">{stock.percent}</span>

          {stock.isDown ? (
            <KeyboardArrowDown className="text-red-500 dark:text-red-400" />
          ) : (
            <KeyboardArrowUp className="text-green-500 dark:text-green-400" />
          )}

          <span className="text-gray-700 dark:text-gray-300">{stock.price}</span>
        </div>
      </div>

      {showAction && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// ---------------- ACTIONS ----------------

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="absolute inset-0 flex items-center justify-end gap-2 pr-3 bg-white/80 dark:bg-gray-300">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button
          onClick={() => generalContext.openBuyWindow(uid)}
          className="bg-blue-500 text-white px-3 py-1 text-xs rounded hover:bg-blue-400"
        >
          Buy
        </button>
      </Tooltip>

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
        <button className="border px-2 py-1 rounded hover:bg-gray-100">
          <BarChartOutlined className="text-sm" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="border px-2 py-1 rounded hover:bg-gray-100">
          <MoreHoriz className="text-sm" />
        </button>
      </Tooltip>
    </span>
  );
};

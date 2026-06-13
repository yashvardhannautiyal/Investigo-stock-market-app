import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("https://investigo-backend.onrender.com/allPositions")
      .then((res) => {
        setAllPositions(res.data);
      });
  }, []);

  return (
    <div className="px-3 sm:px-5 md:px-8 py-4 w-full">

      {/* Title */}
      <h3 className="text-base sm:text-lg font-extrabold text-gray-700 dark:text-gray-300 mb-5">
        Positions ({allPositions.length})
      </h3>

      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse text-sm">

          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-400 text-gray-500 dark:text-gray-400 font-bold">

              <th className="text-left p-3">Instrument</th>
              <th className="text-right p-3">Qty.</th>
              <th className="text-right p-3">Avg.</th>
              <th className="text-right p-3">LTP</th>
              <th className="text-right p-3">P&amp;L</th>
              <th className="text-right p-3">Chg.</th>

            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;
              const isProfit = profit >= 0;

              return (
                <tr
                  key={index}
                  className="border-b border-gray-300 dark:border-gray-700"
                >

                  <td className="text-left p-3">{stock.name}</td>

                  <td className="text-right p-3">{stock.qty}</td>

                  <td className="text-right p-3">
                    {stock.avg.toFixed(2)}
                  </td>

                  <td className="text-right p-3">
                    {stock.price.toFixed(2)}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      isProfit
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-500"
                    }`}
                  >
                    {profit.toFixed(2)}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      stock.isLoss
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-500"
                    }`}
                  >
                    {stock.day}
                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      {/* Mobile + Tablet Cards */}
      <div className="flex flex-col gap-4 md:hidden">

        {allPositions.map((stock, index) => {
          const curValue = stock.price * stock.qty;
          const profit = curValue - stock.avg * stock.qty;
          const isProfit = profit >= 0;

          return (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm"
            >

              {/* Top */}
              <div className="flex justify-between items-center mb-4">

                <h4 className="font-bold text-gray-800 dark:text-gray-300 text-sm sm:text-base">
                  {stock.name}
                </h4>

                <p
                  className={`font-bold text-sm ${
                    isProfit
                      ? "text-green-500 dark:text-green-400"
                      : "text-red-500 dark:text-red-500"
                  }`}
                >
                  {profit.toFixed(2)}
                </p>

              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-y-3 text-sm">

                <div>
                  <p className="text-gray-400">Qty.</p>
                  <p>{stock.qty}</p>
                </div>

                <div>
                  <p className="text-gray-400">Avg.</p>
                  <p>{stock.avg.toFixed(2)}</p>
                </div>

                <div>
                  <p className="text-gray-400">LTP</p>
                  <p>{stock.price.toFixed(2)}</p>
                </div>

                <div>
                  <p className="text-gray-400">Chg.</p>

                  <p
                    className={`${
                      stock.isLoss
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-500"
                    }`}
                  >
                    {stock.day}
                  </p>
                </div>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Positions;
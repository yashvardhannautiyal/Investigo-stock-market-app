import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph.jsx";

const Portfolio = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      });
  }, []);

  // Graph data
  const labels = allHoldings.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="px-3 sm:px-5 md:px-8 py-4">

      {/* Title */}
      <h3 className="text-base sm:text-lg font-extrabold text-gray-700 dark:text-gray-300 mb-5">
        Holdings ({allHoldings.length})
      </h3>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-hidden rounded-xl">

        <table className="w-full border-collapse text-sm">

          <thead>
            <tr className="border-b border-gray-400 dark:border-gray-500 text-gray-500 dark:text-gray-400 text-xs">

              <th className="text-left p-3">Instrument</th>
              <th className="text-right p-3">Qty.</th>
              <th className="text-right p-3">Avg. cost</th>
              <th className="text-right p-3">LTP</th>
              <th className="text-right p-3">Cur. val</th>
              <th className="text-right p-3">P&amp;L</th>
              <th className="text-right p-3">Net chg.</th>
              <th className="text-right p-3">Day chg.</th>

            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;
              const isProfit = profit >= 0;

              return (
                <tr
                  key={index}
                  className="border-b border-gray-300 dark:border-gray-700 font-mono"
                >

                  <td className="text-left p-3">{stock.name}</td>

                  <td className="text-right p-3">{stock.qty}</td>

                  <td className="text-right p-3">
                    {stock.avg.toFixed(2)}
                  </td>

                  <td className="text-right p-3">
                    {stock.price.toFixed(2)}
                  </td>

                  <td className="text-right p-3">
                    {curValue.toFixed(2)}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      isProfit
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {profit.toFixed(2)}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      isProfit
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {stock.net}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      stock.isLoss
                        ? "text-red-500 dark:text-red-400"
                        : "text-green-500 dark:text-green-400"
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
      <div className="flex flex-col gap-4 lg:hidden">

        {allHoldings.map((stock, index) => {
          const curValue = stock.price * stock.qty;
          const profit = curValue - stock.avg * stock.qty;
          const isProfit = profit >= 0;

          return (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-4 shadow-sm"
            >

              {/* Top */}
              <div className="flex justify-between items-start gap-4 mb-4">

                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-300 text-sm sm:text-base">
                    {stock.name}
                  </h4>

                  <p className="text-xs text-gray-400 mt-1">
                    Qty: {stock.qty}
                  </p>
                </div>

                <p
                  className={`font-bold text-sm ${
                    isProfit
                      ? "text-green-500 dark:text-green-400"
                      : "text-red-500 dark:text-red-400"
                  }`}
                >
                  {profit.toFixed(2)}
                </p>

              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-y-4 text-sm">

                <div>
                  <p className="text-gray-400">Avg. cost</p>
                  <p>{stock.avg.toFixed(2)}</p>
                </div>

                <div>
                  <p className="text-gray-400">LTP</p>
                  <p>{stock.price.toFixed(2)}</p>
                </div>

                <div>
                  <p className="text-gray-400">Current Value</p>
                  <p>{curValue.toFixed(2)}</p>
                </div>

                <div>
                  <p className="text-gray-400">Net Chg.</p>

                  <p
                    className={`${
                      isProfit
                        ? "text-green-500 dark:text-green-400"
                        : "text-red-500 dark:text-red-400"
                    }`}
                  >
                    {stock.net}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400">Day Chg.</p>

                  <p
                    className={`${
                      stock.isLoss
                        ? "text-red-500 dark:text-red-400"
                        : "text-green-500 dark:text-green-400"
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

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center font-bold">

        <div>
          <h5 className="text-lg sm:text-xl text-gray-700 dark:text-gray-400 font-semibold">
            29,875.<span className="text-sm">55</span>
          </h5>

          <p className="text-xs text-gray-500 mt-1">
            Total investment
          </p>
        </div>

        <div>
          <h5 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-400">
            31,428.<span className="text-sm">95</span>
          </h5>

          <p className="text-xs text-gray-500 mt-1">
            Current value
          </p>
        </div>

        <div>
          <h5 className="text-lg sm:text-xl font-semibold text-green-500 dark:text-green-400">
            1,553.40 (+5.20%)
          </h5>

          <p className="text-xs text-gray-500 mt-1">
            P&amp;L
          </p>
        </div>

      </div>

      {/* Chart */}
      <div className="mt-10 w-full overflow-hidden">
        <VerticalGraph data={data} />
      </div>

    </div>
  );
};

export default Portfolio;
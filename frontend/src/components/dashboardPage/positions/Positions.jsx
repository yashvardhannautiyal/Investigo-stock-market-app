import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <div className="p-4 text-gray-900 dark:text-gray-400">

      {/* Title */}
      <h3 className="text-lg font-extrabold text-gray-700 dark:text-gray-300 mb-4">
        Positions ({allPositions.length})
      </h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-400 text-gray-500 dark:text-gray-400 font-bold">
              {/* <th className="text-left p-3">Product</th> */}
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
                <tr key={index} className="border-b border-gray-300 dark:border-gray-700">
                  {/* <td className="text-left p-3">{stock.product}</td> */}
                  <td className="text-left p-3">{stock.name}</td>
                  <td className="text-right p-3">{stock.qty}</td>
                  <td className="text-right p-3">{stock.avg.toFixed(2)}</td>
                  <td className="text-right p-3">{stock.price.toFixed(2)}</td>

                  <td
                    className={`text-right p-3 ${
                      isProfit ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-500"
                    }`}
                  >
                    {profit.toFixed(2)}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      stock.isLoss ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-500"
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

    </div>
  );
};

export default Positions;
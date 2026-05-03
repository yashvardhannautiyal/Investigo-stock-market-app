import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph.jsx";

const Portfolio = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
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
    <div className="p-4">

      {/* Title */}
      <h3 className="text-lg font-light text-gray-700 mb-4">
        Holdings ({allHoldings.length})
      </h3>

      {/* Table */}
      <div className="overflow-x-auto border rounded">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b text-gray-500 text-xs">
              <th className="text-left p-3">Instrument</th>
              <th className="text-right p-3">Qty.</th>
              <th className="text-right p-3">Avg. cost</th>
              <th className="text-right p-3">LTP</th>
              <th className="text-right p-3">Cur. val</th>
              <th className="text-right p-3">P&L</th>
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
                <tr key={index} className="border-b">
                  <td className="text-left p-3">{stock.name}</td>
                  <td className="text-right p-3">{stock.qty}</td>
                  <td className="text-right p-3">{stock.avg.toFixed(2)}</td>
                  <td className="text-right p-3">{stock.price.toFixed(2)}</td>
                  <td className="text-right p-3">{curValue.toFixed(2)}</td>

                  <td
                    className={`text-right p-3 ${
                      isProfit ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {profit.toFixed(2)}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      isProfit ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stock.net}
                  </td>

                  <td
                    className={`text-right p-3 ${
                      stock.isLoss ? "text-red-500" : "text-green-500"
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

      {/* Summary */}
      <div className="flex justify-between mt-6 text-center">
        <div>
          <h5 className="text-xl font-light text-gray-700">
            29,875.<span className="text-sm">55</span>
          </h5>
          <p className="text-xs text-gray-500 mt-1">Total investment</p>
        </div>

        <div>
          <h5 className="text-xl font-light text-gray-700">
            31,428.<span className="text-sm">95</span>
          </h5>
          <p className="text-xs text-gray-500 mt-1">Current value</p>
        </div>

        <div>
          <h5 className="text-xl font-light text-green-500">
            1,553.40 (+5.20%)
          </h5>
          <p className="text-xs text-gray-500 mt-1">P&amp;L</p>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6">
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Portfolio;
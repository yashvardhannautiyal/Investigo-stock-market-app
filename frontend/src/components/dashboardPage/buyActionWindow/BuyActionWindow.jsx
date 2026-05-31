import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "../GeneralContext.jsx";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[60%] bg-gray-100 dark:bg-gray-800 border dark:border-gray-500 rounded shadow-lg z-50 flex flex-col"
    >
      {/* Body */}
      <div className="p-6 bg-white dark:bg-gray-800 flex-1">
        <div className="flex gap-4 mb-6">
          
          {/* Qty */}
          <div className="border dark:border-gray-500 rounded px-3 py-2 `w-[120px]`">
            <label className="text-xs text-gray-500 dark:text-gray-200">Qty.</label>
            <input
              type="number"
              className="w-full outline-none text-lg"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </div>

          {/* Price */}
          <div className="border dark:border-gray-500 rounded px-3 py-2 `w-[120px]`">
            <label className="text-xs text-gray-500 dark:text-gray-200">Price</label>
            <input
              type="number"
              step="0.05"
              className="w-full outline-none text-lg"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-6 py-4 dark:bg-gray-900 border-t dark:border-gray-500 bg-gray-50">
        <span className="text-sm text-gray-500 dark:text-gray-200">
          Margin required ₹140.65
        </span>

        <div className="flex gap-2">
          <button
            onClick={handleBuyClick}
            className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-400"
          >
            Buy
          </button>

          <Link
            to=""
            onClick={handleCancelClick}
            className="bg-gray-300 text-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-400"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
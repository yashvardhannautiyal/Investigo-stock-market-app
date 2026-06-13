import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "../GeneralContext.jsx";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("https://investigo-backend.onrender.com/newOrder", {
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
    <div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-50 flex items-start justify-center pt-10 px-4">
      
      <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl bg-white dark:bg-gray-950 rounded-xl shadow-xl overflow-hidden">
        
        {/* Body */}
        <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 flex-1">
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            
            {/* Qty */}
            <div className="border dark:border-gray-500 rounded px-3 py-2 w-full sm:w-[120px]">
              <label className="text-xs text-gray-500 dark:text-gray-200">
                Qty.
              </label>

              <input
                type="number"
                className="w-full outline-none text-base sm:text-lg bg-transparent"
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
              />
            </div>

            {/* Price */}
            <div className="border dark:border-gray-500 rounded px-3 py-2 w-full sm:w-[120px]">
              <label className="text-xs text-gray-500 dark:text-gray-200">
                Price
              </label>

              <input
                type="number"
                step="0.05"
                className="w-full outline-none text-base sm:text-lg bg-transparent"
                value={stockPrice}
                onChange={(e) => setStockPrice(e.target.value)}
              />
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-4 sm:px-6 py-4 dark:bg-gray-900 border-t dark:border-gray-500 bg-gray-50">
          
          <span className="text-sm text-gray-500 dark:text-gray-200">
            Margin required ₹140.65
          </span>

          <div className="flex w-full sm:w-auto gap-2">
            <button
              onClick={handleBuyClick}
              className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-400 w-full sm:w-auto"
            >
              Buy
            </button>

            <Link
              to=""
              onClick={handleCancelClick}
              className="bg-gray-300 text-gray-700 px-4 py-2 text-sm rounded hover:bg-gray-400 text-center w-full sm:w-auto"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
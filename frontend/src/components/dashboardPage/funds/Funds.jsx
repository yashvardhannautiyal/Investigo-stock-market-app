import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-4">

      {/* Top Actions */}
      <div className="flex flex-col sm:flex-row sm:justify-end items-center gap-4 mb-6">

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          Instant, zero-cost fund transfers with UPI
        </p>

        <div className="flex xs:flex-row sm:flex-row gap-3">

          <Link className="bg-green-500 text-white px-8 sm:px-4 py-2 text-sm rounded-lg hover:bg-green-400 text-center">
            Add funds
          </Link>

          <Link className="bg-blue-500 text-white px-8 sm:px-4 py-2 text-sm rounded-lg hover:bg-blue-400 text-center">
            Withdraw
          </Link>

        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

        {/* LEFT - Equity */}
        <div className="w-full lg:w-2/3">

          <p className="text-lg font-extrabold text-gray-700 dark:text-gray-300 mb-4">
            Equity
          </p>

          <div className="p-4 space-y-3 border border-gray-200 dark:border-gray-700 rounded-xl">

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Available margin</p>

              <p className="text-blue-500 dark:text-blue-400 text-base sm:text-lg font-medium text-right">
                4,043.10
              </p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Used margin</p>

              <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg text-right">
                3,757.30
              </p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Available cash</p>

              <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg text-right">
                4,043.10
              </p>
            </div>

            <hr className="text-gray-400 dark:text-gray-600" />

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Opening Balance</p>
              <p className="text-right">4,043.10</p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Opening Balance</p>
              <p className="text-right">3736.40</p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Payin</p>
              <p className="text-right">4064.00</p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">SPAN</p>
              <p className="text-right">0.00</p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Delivery margin</p>
              <p className="text-right">0.00</p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Exposure</p>
              <p className="text-right">0.00</p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">Options premium</p>
              <p className="text-right">0.00</p>
            </div>

            <hr className="text-gray-400 dark:text-gray-600" />

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">
                Collateral (Liquid funds)
              </p>

              <p className="text-right">0.00</p>
            </div>

            <div className="flex justify-between gap-4">
              <p className="text-gray-500 text-sm">
                Collateral (Equity)
              </p>

              <p className="text-right">0.00</p>
            </div>

            <div className="flex justify-between gap-4 font-medium">
              <p className="text-black dark:text-gray-200">
                Total Collateral
              </p>

              <p className="text-black dark:text-gray-200 text-right">
                0.00
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT - Commodity */}
        <div className="w-full lg:w-1/3 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center min-h-[220px]">

          <div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
              You don't have a commodity account
            </p>

            <Link className="bg-blue-500 text-white px-4 py-2 text-sm rounded-lg hover:bg-blue-400 inline-block">
              Open Account
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Funds;
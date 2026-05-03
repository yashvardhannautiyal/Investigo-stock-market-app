import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <div className="p-4">

      {/* Top Actions */}
      <div className="flex justify-end items-center gap-3 mb-6">
        <p className="text-xs text-gray-400">
          Instant, zero-cost fund transfers with UPI
        </p>

        <Link className="bg-green-500 text-white px-4 py-2 text-sm rounded hover:bg-green-400">
          Add funds
        </Link>

        <Link className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-400">
          Withdraw
        </Link>
      </div>

      {/* Main Section */}
      <div className="flex gap-6">

        {/* LEFT - Equity */}
        <div className="w-2/3">

          <p className="text-lg font-light text-gray-700 mb-3">
            Equity
          </p>

          <div className="border rounded p-4 space-y-3">

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Available margin</p>
              <p className="text-blue-500 text-lg font-medium">4,043.10</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Used margin</p>
              <p className="text-gray-700 text-lg">3,757.30</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Available cash</p>
              <p className="text-gray-700 text-lg">4,043.10</p>
            </div>

            <hr />

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Opening Balance</p>
              <p>4,043.10</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Opening Balance</p>
              <p>3736.40</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Payin</p>
              <p>4064.00</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">SPAN</p>
              <p>0.00</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Delivery margin</p>
              <p>0.00</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Exposure</p>
              <p>0.00</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">Options premium</p>
              <p>0.00</p>
            </div>

            <hr />

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">
                Collateral (Liquid funds)
              </p>
              <p>0.00</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500 text-sm">
                Collateral (Equity)
              </p>
              <p>0.00</p>
            </div>

            <div className="flex justify-between font-medium">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        {/* RIGHT - Commodity */}
        <div className="w-1/3 flex items-center justify-center border rounded p-6 text-center">
          <div>
            <p className="text-gray-400 mb-4">
              You don't have a commodity account
            </p>

            <Link className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-400">
              Open Account
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Funds;
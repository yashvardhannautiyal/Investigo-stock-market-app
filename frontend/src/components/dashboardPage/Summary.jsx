import React from "react";

const Summary = () => {
  return (
    <div className="flex flex-col justify-between p-8 text-gray-700 bg-white rounded-2xl">

      {/* TOP */}
      <div>
        {/* Header */}
        <div className="mb-10">
          <h6 className="text-sm text-gray-500 mb-4">Hi, User!</h6>
          <div className="border-b  border-gray-300"></div>
        </div>

        {/* -------- Equity Section -------- */}
        <div className="mb-16">

          <p className="text-xs text-gray-500 mb-8">Equity</p>

          <div className="flex items-center justify-between">

            {/* Left */}
            <div>
              <h3 className="text-4xl font-light text-gray-700">3.74k</h3>
              <p className="text-sm text-gray-400 mt-3">Margin available</p>
            </div>

            

            {/* Right */}
            <div className="text-sm text-gray-500 space-y-3">
              <p>
                Margins used <span className="ml-3 text-gray-700">0</span>
              </p>
              <p>
                Opening balance{" "}
                <span className="ml-3 text-gray-700">3.74k</span>
              </p>
            </div>
          </div>

          <div className="border-b border-gray-300 mt-10"></div>
        </div>

        {/* -------- Holdings Section -------- */}
        <div className="mb-8">

          <p className="text-xs text-gray-500 mb-8">Holdings (13)</p>

          <div className="flex items-center justify-between">

            {/* Left */}
            <div>
              <h3 className="text-4xl font-light text-green-500">
                1.55k <span className="text-base ml-2">+5.20%</span>
              </h3>
              <p className="text-sm text-gray-400 mt-3">P&amp;L</p>
            </div>

          

            {/* Right */}
            <div className="text-sm text-gray-500 space-y-3">
              <p>
                Current Value{" "}
                <span className="ml-3 text-gray-700">31.43k</span>
              </p>
              <p>
                Investment{" "}
                <span className="ml-3 text-gray-700">29.88k</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
};

export default Summary;
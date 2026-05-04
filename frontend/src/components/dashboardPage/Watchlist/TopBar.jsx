import React from "react";

const TopBar = () => {
  return (
    <div className="w-full h-12 flex items-center shadow-sm bg-white px-4 border-b border-gray-300">
      
      <div className="flex w-full justify-between items-center">
        
        {/* NIFTY */}
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium text-gray-600 uppercase">
            NIFTY 50
          </p>
          <p className="text-sm font-semibold text-red-500">
            100.2
          </p>
          <p className="text-xs text-gray-400">
            -0.25%
          </p>
        </div>

        {/* SENSEX */}
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium text-gray-600 uppercase">
            SENSEX
          </p>
          <p className="text-sm font-semibold text-green-500">
            100.2
          </p>
          <p className="text-xs text-gray-400">
            +0.45%
          </p>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
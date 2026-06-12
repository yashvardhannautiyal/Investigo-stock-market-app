import React from "react";

const TopBar = () => {
  return (
    <div className="w-full px-3 sm:px-5 py-3">
      <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-3 sm:gap-0">
        
        {/* NIFTY */}
        <div className="flex items-center gap-2 sm:gap-3">
          <p className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
            NIFTY 50
          </p>

          <p className="text-xs sm:text-sm font-semibold text-red-500 dark:text-red-400">
            100.2
          </p>

          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-300">
            -0.25%
          </p>
        </div>

        {/* SENSEX */}
        <div className="flex items-center gap-2 sm:gap-3">
          <p className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
            SENSEX
          </p>

          <p className="text-xs sm:text-sm font-semibold text-green-500 dark:text-green-400">
            100.2
          </p>

          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-300">
            +0.45%
          </p>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
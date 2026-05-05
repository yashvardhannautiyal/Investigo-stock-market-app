import React from "react";

const TopBar = () => {
  return (
    <div className="w-full h-12 flex items-center shadow-sm bg-white dark:bg-gray-900 px-4 border-b border-gray-300 dark:border-gray-700">
      
      <div className="flex w-full justify-between items-center">
        
        {/* NIFTY */}
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
            NIFTY 50
          </p>
          <p className="text-sm font-semibold text-red-500 dark:text-red-400">
            100.2
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-300">
            -0.25%
          </p>
        </div>

        {/* SENSEX */}
        <div className="flex items-center gap-3">
          <p className="text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
            SENSEX
          </p>
          <p className="text-sm font-semibold text-green-500 dark:text-green-400">
            100.2
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-300">
            +0.45%
          </p>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
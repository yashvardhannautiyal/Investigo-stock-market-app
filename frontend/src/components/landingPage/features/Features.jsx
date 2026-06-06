import React from "react";
import { MdElectricBolt } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUp } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa6";
import { CiMobile1 } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";

function Features() {
  return (
    <div>
      {/* hero section  */}
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 lg:px-16 py-16 sm:py-20 h-screen">
        <p className="flex items-center gap-2 text-blue-800 border px-7 lg:px-12 rounded-full text-xs lg:text-md font-bold sm:text-base">
          <MdElectricBolt />
          POWERFUL FEATURES
        </p>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-gray-200 mt-3">
          Everything You Need
        </h1>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-linear-to-r from-blue-500 to-red-500 bg-clip-text text-transparent mt-2">
          To Trade Successfully
        </h1>

        <p className="text-sm sm:text-base lg:text-lg mt-4 w-full sm:w-4/5 lg:w-3xl text-center">
          From advanced charting to bank-grade security, TradeFlow provides all
          the tools professional and aspiring traders need to succeed in the
          markets.
        </p>
      </div>

      {/* trading tools  */}
      <div className="mb-16 px-4 sm:px-8 lg:px-0">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold">
          Trading Tools
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-12 p-6 lg:px-24 mt-10 items-center">
          
          <div className="rounded-xl px-4 py-6 border-2 border-blue-300 dark:border-gray-700 hover:shadow-xl w-full sm:w-[80%] md:w-2xs">
            <VscGraph className="text-blue-700 dark:text-blue-500 text-4xl" />
            <p className="font-extrabold text-gray-800 dark:text-gray-400 mt-3">
              Advanced Charting
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
              Professional-grade charts with technical indicators, drawing
              tools, and customizable layouts.
            </p>
          </div>

          <div className="rounded-xl px-4 py-6 border-2 border-blue-300 dark:border-gray-700 hover:shadow-xl w-full sm:w-[80%] md:w-2xs">
            <BsGraphUp className="text-blue-700 dark:text-blue-500 text-4xl" />
            <p className="font-extrabold text-gray-800 dark:text-gray-400 mt-3">
              Real-Time Data
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
              Live market data with ultra-low latency. Never miss a trade
              opportunity with instant updates.
            </p>
          </div>

          <div className="rounded-xl px-4 py-6 border-2 border-blue-300 dark:border-gray-700 hover:shadow-xl w-full sm:w-[80%] md:w-2xs">
            <FaChartPie className="text-blue-700 dark:text-blue-500 text-4xl" />
            <p className="font-extrabold text-gray-800 dark:text-gray-400 mt-3">
              Portfolio Analytics
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
              Track performance, analyze risk, and optimize your portfolio with
              powerful analytics tools.
            </p>
          </div>

        </div>
      </div>

      <hr className="text-blue-300 dark:text-gray-800" />

      {/* platform and access  */}
      <div className="bg-white dark:bg-gray-950 py-16 sm:py-24 px-4 sm:px-8 lg:px-0">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold">
          Platform & Access
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-6 lg:gap-12 p-6 lg:px-24 mt-10 items-center">
          
          <div className="rounded-xl px-4 py-6 border-2 border-gray-100 dark:border-gray-700 hover:shadow-xl bg-gray-50 dark:bg-gray-800 w-full sm:w-[80%] md:w-2xs">
            <CiMobile1 className="text-blue-700 dark:text-blue-500 text-4xl" />
            <p className="font-extrabold mt-3">Mobile Trading</p>
            <p className="text-sm mt-2">
              Full-featured mobile apps for iOS and Android. Trade anywhere,
              anytime.
            </p>
          </div>

          <div className="rounded-xl px-4 py-6 border-2 border-gray-100 dark:border-gray-700 hover:shadow-xl bg-gray-50 dark:bg-gray-800 w-full sm:w-[80%] md:w-2xs">
            <AiOutlineGlobal className="text-blue-700 dark:text-blue-500 text-4xl" />
            <p className="font-extrabold mt-3">Global Markets</p>
            <p className="text-sm mt-2">
              Access stocks, ETFs, crypto, forex, and commodities from markets
              around the world.
            </p>
          </div>

          <div className="rounded-xl px-4 py-6 border-2 border-gray-100 dark:border-gray-700 hover:shadow-xl bg-gray-50 dark:bg-gray-800 w-full sm:w-[80%] md:w-2xs">
            <MdElectricBolt className="text-blue-700 dark:text-blue-500 text-4xl" />
            <p className="font-extrabold mt-3">
              Lightning Fast Execution
            </p>
            <p className="text-sm mt-2">
              Sub-second order execution with direct market access and smart
              order routing.
            </p>
          </div>

        </div>
      </div>

      <hr className="text-blue-300 dark:text-gray-800" />
    </div>
  );
}

export default Features;
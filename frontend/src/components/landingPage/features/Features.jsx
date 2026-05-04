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
      <div className="flex flex-col justify-center items-center px-6 h-screen">
        <p className="mb-8 border w-56 flex items-center justify-center rounded-2xl text-xs border-blue-700 text-blue-800 dark:border-blue-500 dark:text-blue-600 backdrop-blur-md gap-2 font-semibold">
          {" "}
          <MdElectricBolt /> POWERFUL FEATURES
        </p>

        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-200">
          Everything You Need
        </h1>
        <h1 className="text-7xl font-extrabold bg-linear-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
          To Trade Successfully
        </h1>

        <p className="text-lg mt-4 w-3xl text-center">
          From advanced charting to bank-grade security, TradeFlow provides all
          the tools professional and aspiring traders need to succeed in the
          markets.
        </p>
      </div>

      {/* trading tools  */}
      <div className="mb-16">
      <h2 className="text-center text-3xl font-extrabold">Trading Tools</h2>
      <div className="flex justify-between gap-12 p-6 px-24 mt-10">
        <div className="rounded-xl px-3 w-2xs py-6 border-2 border-blue-300 dark:border-gray-700 hover:shadow-xl">
          <VscGraph className="text-blue-700 dark:text-blue-500 text-4xl" />
          <p className="font-extrabold text-gray-800 dark:text-gray-400 mt-3">Advanced Charting</p>
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
            Professional-grade charts with technical indicators, drawing tools,
            and customizable layouts.
          </p>
        </div>

        <div className="rounded-xl px-3 w-2xs py-6 border-2 border-blue-300 dark:border-gray-700 hover:shadow-xl">
          <BsGraphUp className="text-blue-700 dark:text-blue-500 text-4xl" />
          <p className="font-extrabold text-gray-800 dark:text-gray-400 mt-3">Real-Time Data</p>
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
            Live market data with ultra-low latency. Never miss a trade
            opportunity with instant updates.
          </p>
        </div>

        <div className="rounded-xl px-3 w-2xs py-6 border-2 border-blue-300 dark:border-gray-700 hover:shadow-xl">
          <FaChartPie className="text-blue-700 dark:text-blue-500 text-4xl" />
          <p className="font-extrabold text-gray-800 dark:text-gray-400 mt-3">Portfolio Analytics</p>
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-2">
            Track performance, analyze risk, and optimize your portfolio with
            powerful analytics tools.
          </p>
      </div>
      </div>
      </div>


      <hr className='text-blue-300 dark:text-gray-800' />
      {/* platform and access  */}
      <div className="bg-white dark:bg-gray-950 py-24">
        <h2 className="text-center text-3xl font-extrabold">Platform & Access</h2>
      <div className="flex justify-between gap-12 p-6 px-24 mt-10">
        <div className="rounded-xl px-3 w-2xs py-6 border-2 border-gray-100 dark:border-gray-700 hover:shadow-xl bg-gray-50 dark:bg-gray-800">
          <CiMobile1 className="text-blue-700 dark:text-blue-500 text-4xl" />
          <p className="font-extrabold mt-3">Mobile Trading</p>
          <p className="text-sm mt-2">
            Full-featured mobile apps for iOS and Android. Trade anywhere, anytime.
          </p>
        </div>

        <div className="rounded-xl px-3 w-2xs py-6 border-2 border-gray-100 dark:border-gray-700 hover:shadow-xl bg-gray-50 dark:bg-gray-800">
          <AiOutlineGlobal className="text-blue-700 dark:text-blue-500 text-4xl" />
          <p className="font-extrabold mt-3">Global Markets</p>
          <p className="text-sm mt-2">
            Access stocks, ETFs, crypto, forex, and commodities from markets around the world.
          </p>
        </div>

        <div className="rounded-xl px-3 w-2xs py-6 border-2 border-gray-100 dark:border-gray-700 hover:shadow-xl bg-gray-50 dark:bg-gray-800">
          <MdElectricBolt className="text-blue-700 dark:text-blue-500 text-4xl" />
          <p className="font-extrabold mt-3">Lightning Fast Execution</p>
          <p className="text-sm mt-2">
            Sub-second order execution with direct market access and smart order routing.
          </p>
      </div>
      </div>
      
      </div>
      <hr className='text-blue-300 dark:text-gray-800' />
    </div>
  );
}

export default Features;

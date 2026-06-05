import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";
import "./FooterStyle.css";

function Footer() {
  return (
    <div className="px-6 sm:px-10 lg:px-24 mt-10">
      {/* top content  */}
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        
        {/* logo + text  */}
        <div className="w-full lg:w-[35%]">
          <div className="flex items-center gap-2">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-3xl font-extrabold text-blue-800">
              InvestiGo
            </h1>
          </div>

          <p className="mt-3 text-sm sm:text-base">
            The next generation trading platform for modern investors. Trade
            stocks, crypto, forex, and more with confidence.
          </p>

          <div className="flex gap-5 text-xl sm:text-2xl mt-3">
            <a
              href="https://x.com/home?lang=en-in"
              target="_blank"
              className="border-2 bg-gray-200 border-gray-300 dark:bg-gray-800 dark:border-gray-700 p-2 rounded-xl hover:text-blue-700 dark:hover:text-blue-500"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/yash-vardhan-nautiyal/"
              target="_blank"
              className="border-2 bg-gray-200 border-gray-300 dark:bg-gray-800 dark:border-gray-700 p-2 rounded-xl hover:text-blue-700 dark:hover:text-blue-500"
            >
              <IoLogoLinkedin />
            </a>

            <a
              href="https://github.com/yashvardhannautiyal/Investigo-stock-market-app"
              target="_blank"
              className="border-2 bg-gray-200 border-gray-300 dark:bg-gray-800 dark:border-gray-700 p-2 rounded-xl hover:text-blue-700 dark:hover:text-blue-500"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* list items  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 lg:gap-32">
          
          {/* list 1  */}
          <div>
            <h4 className="text-lg font-extrabold">Product</h4>
            <ul className="text-gray-700 dark:text-gray-400 font-medium mt-3 space-y-3">
              <li>Features</li>
              <li>Pricing</li>
              <li>Mobile App</li>
              <li>Desktop App</li>
              <li>API</li>
              <li>Integrations</li>
            </ul>
          </div>

          {/* list 2  */}
          <div>
            <h4 className="text-lg font-extrabold">Company</h4>
            <ul className="text-gray-700 dark:text-gray-400 font-medium mt-3 space-y-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Investors</li>
            </ul>
          </div>

          {/* list 3  */}
          <div>
            <h4 className="text-lg font-extrabold">Resources</h4>
            <ul className="text-gray-700 dark:text-gray-400 font-medium mt-3 space-y-3">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Trading Academy</li>
              <li>Market News</li>
              <li>Community</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="text-blue-300 dark:text-gray-700 mt-10" />

      {/* between content */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 mb-8 mt-8">
        
        <div>
          <h3 className="font-extrabold">Legal</h3>

          <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-700 dark:text-gray-400 mt-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
            <li>Risk Warning</li>
          </ul>
        </div>

        <div>
          <h3 className="font-extrabold">Compliance</h3>

          <ul className="flex flex-wrap gap-4 sm:gap-6 text-sm text-gray-700 dark:text-gray-400 mt-4">
            <li>Security</li>
            <li>Regulatory</li>
            <li>Licenses</li>
            <li>Insurance</li>
          </ul>
        </div>
      </div>

      <hr className="text-blue-300 dark:text-gray-700 mt-4" />

      {/* bottom content  */}
      <div className="mt-3 pb-6">
        <p className="font-medium text-xs sm:text-sm text-gray-700 dark:text-gray-100 flex items-center gap-1 flex-wrap">
          <PiCopyrightLight />
          2026 InvestiGo Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
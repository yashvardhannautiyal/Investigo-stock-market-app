import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";
import "./FooterStyle.css";

function Footer() {
  return (
    <div className="px-10">
      {/* top content  */}
      <div className="flex justify-between mt-18">
        {/* logo + text  */}
        <div className="w-md">
          <a href="/" className="flex items-center gap-2">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-3xl font-extrabold bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
              InvestiGo
            </h1>
          </a>

          <p className="mt-4">
            The next generation trading platform for modern investors. Trade
            stocks, crypto, forex, and more with confidence.
          </p>

          <div className="flex gap-8 text-2xl mt-4">
            <a href="https://x.com/home?lang=en-in" target="_blank" className="border-2 bg-gray-200 border-gray-300 p-2 rounded-xl hover:text-blue-700">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-vardhan-nautiyal/"
              target="_blank"
              className="border-2 bg-gray-200 border-gray-300 p-2 rounded-xl hover:text-blue-700"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/yashvardhannautiyal/Investigo-stock-market-app"
              target="_blank"
              className="border-2 bg-gray-200 border-gray-300 p-2 rounded-xl hover:text-blue-700"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* list items  */}
        <div className="flex justify-between gap-40">
          {/* list 1  */}
          <div>
            <h4 className="text-lg font-extrabold">Product</h4>
            <ul className="text-gray-700 font-medium mt-5 space-y-3">
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
            <ul className="text-gray-700 font-medium mt-5 space-y-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Partners</li>
              <li>Investors</li>
            </ul>
          </div>
          
          {/* list 1  */}
          <div>
            <h4 className="text-lg font-extrabold">Resources</h4>
            <ul className="text-gray-700 font-medium mt-5 space-y-3">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Trading Academy</li>
              <li>Market News</li>
              <li>Community</li>
              <li>Status</li>
            </ul>
          </div>
          
        </div>
        <div></div>
      </div>

      <hr className='text-blue-300 mt-4' />
      {/* between  content */}
      <div className="flex items-center mb-10 mt-10 gap-40">
        <div>
          <h3 className="font-extrabold">Legal</h3>
          <ul className="flex text-sm gap-6 font-gray-700 mt-4">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Disclaimer</li>
            <li>Risk Warning</li>
          </ul>
        </div>
        <div>
          <h3 className="font-extrabold">Compliance</h3>
          <ul className="flex text-sm gap-6 font-gray-700 mt-4">
            <li>Security</li>
            <li>Regulatory</li>
            <li>Licenses</li>
            <li>Insurance</li>
          </ul>
        </div>
        <div></div>
      </div>

      <hr className='text-blue-300 mt-4' />
      {/* bottom content  */}
      <div className="mt-5 mb-5">
        <p className="font-medium text-sm text-gray-700 flex items-center gap-1"> <PiCopyrightLight />2026 InvestiGo Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

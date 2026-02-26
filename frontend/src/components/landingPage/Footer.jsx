import React from "react";
import { AiOutlineStock } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div>
      {/* top content  */}
      <div className="p-5">
        {/* logo + text  */}
        <div>
          <a href="/" className="flex items-center gap-2 ">
            <AiOutlineStock className="text-4xl font-extrabold" />
            <h1 className="text-3xl font-extrabold bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-transparent">
              InvestiGo
            </h1>
          </a>

          <p>
            The next generation trading platform for modern investors. Trade
            stocks, crypto, forex, and more with confidence.
          </p>

          <div className="flex gap-12 text-2xl">
            <a href="https://x.com/home?lang=en-in" target="_blank">
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-vardhan-nautiyal/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/yashvardhannautiyal/Investigo-stock-market-app"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

          {/* list items  */}
          <div>
            {/* list 1  */}
            <div>
              <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            </div>
          </div>
        <div>

        </div>
      </div>

      <hr />
      {/* between  content */}
      <div></div>

      <hr />
      {/* bottom content  */}
      <div></div>
    </div>
  );
}

export default Footer;

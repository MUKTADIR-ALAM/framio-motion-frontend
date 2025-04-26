import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";

import logo from "../assets/logo.png";



export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto py-5">
      {/* brand name div */}
      <div className="flex items-center">
        <img className="w-10 mt-1.5 mr-2" src={logo} alt="" />
        <h1 className="text-xl font-bold flex flex-col gap-0">
          Framio Motion
        </h1>
      </div>

      {/* action div */}
      {/* <div>
        <button className="btn bg-theme shadow-none text-gray-800 rounded-xl font-semibold group text-xl py-6 px-5">
          Get Quote <div className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45"> <GoArrowUpRight size={25} /></div>
        </button>
      </div> */}

      {/* menu div */}
      <div>
        <div className="flex items-center gap-2">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="flex gap-2 items-center drawer-button"
              >
                Menu <RiMenu4Line />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-xl p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Video Editing Sercives</a>
                </li>
                <li>
                  <a>Client Feedback</a>
                </li>
                <li>
                  <a>Our Sercices</a>
                </li>
                <li>
                  <a>Contact US</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";

import logo from "../assets/logo.png";
import { Link } from "react-router";



export default function Navbar() {
  return (
    <div className="flex justify-between items-center w-11/12 mx-auto py-5">
      {/* brand name div */} 
      <Link to={'/'} className="flex items-center">
        <img className="w-10 mt-1.5 mr-2" src={logo} alt="" />
        <h1 className="text-xl font-bold flex flex-col gap-0">
          Framio Motion
        </h1>
      </Link>

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
                <span className="text-[22px] z-10">Menu</span> <span className="z-10"><RiMenu4Line size={20} /></span>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4  text-2xl flex flex-col gap-10 ">
                {/* Sidebar content here */}
                <li className="border-b">
                  <a>Video Editing Sercives</a>
                </li>
                <li className="border-b">
                  <a>Client Feedback</a>
                </li>
                <li className="border-b">
                  <a>Our Sercices</a>
                </li>
                <li className="border-b">
                  <a>Contact US</a>
                </li>
                <li className="border-b">
                  <a>Our Team</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

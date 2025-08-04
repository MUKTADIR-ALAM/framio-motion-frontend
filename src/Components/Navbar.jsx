import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";

import logo from "../assets/logo.png";
import { Link } from "react-router";
import MenuComp from "./nav-menu-comp/MenuComp";



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

    

    

      
       <div>

        <MenuComp/>
       </div>



    </div>
  );
}

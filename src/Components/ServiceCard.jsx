import React from "react";
import { Link } from "react-router";

export default function ServiceCard({imgSrc , serviceName="Video Editing" ,url }) {	
  return (
    <Link to={url} className="relative flex flex-col my-6  shadow-lg hover:scale-105 transition delay-120 duration-300 ease-in-out hover:shadow-theme bg-gray-900 rounded-lg ">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={imgSrc}
          alt="card-image"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-xl font-semibold">
          {serviceName}
        </h6>
        
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <Link
        to={url}
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          View Demo
        </Link>
      </div>
    </Link>
  );
}

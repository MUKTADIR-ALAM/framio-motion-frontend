import React from "react";
import ServiceCard from "./ServiceCard";

export default function VideoEditService() {
  return (
    <div>
      <h2 className="text-4xl mt-30 mx-auto w-11/12 leading-20">
        Our Professional{" "}
        <span className="text-yellow-300">Video Editing </span>{" "}
        Services
      </h2>

      <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto">
        <ServiceCard imgSrc={'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <ServiceCard imgSrc={'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <ServiceCard imgSrc={'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <ServiceCard imgSrc={'https://images.pexels.com/photos/8102677/pexels-photo-8102677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
      </div>
    </div>
  );
}

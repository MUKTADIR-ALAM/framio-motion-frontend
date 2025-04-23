import React from "react";
import ServiceCard from "./ServiceCard";

export default function VideoEditService() {
  return (
    <div className="w-11/12 mx-auto flex flex-col items-center">
      <h2 className="text-4xl mt-30 mb-20 leading-20">
        Our Professional{" "}
        <span className="text-theme">Video Editing </span>{" "}
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard imgSrc={'https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} serviceName="Weading video editing"/>
        <ServiceCard imgSrc={'https://neads.co/composants/uploads/2022/08/agence-instagram-ads-2.jpg'} serviceName="High engaging Reels editing"/>
        <ServiceCard imgSrc={'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} serviceName="Business Ads editing"/>
        <ServiceCard imgSrc={'https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} serviceName="Documentery Video editing"/>
        <ServiceCard imgSrc={'https://images.pexels.com/photos/1181658/pexels-photo-1181658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} serviceName="Podcast Video editing"/>
        <ServiceCard imgSrc={'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} serviceName="Tech review editing"/>
      </div>
    </div>
  );
}

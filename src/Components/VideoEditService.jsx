import React from "react";
import ServiceCard from "./ServiceCard";

export default function VideoEditService() {
  return (
    <div>
      <h2 className="text-4xl mt-30 mx-auto w-11/12 leading-20">
        Our Professional{" "}
        <span className="text-yellow-300">{"<-- Video Editing /-->"} </span>{" "}
        Services
      </h2>

      <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto">
        <ServiceCard imgSrc={'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80'}/>
        <ServiceCard imgSrc={'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80'}/>
        <ServiceCard imgSrc={'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80'}/>
        <ServiceCard imgSrc={'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80'}/>
      </div>
    </div>
  );
}

import React from "react";

export default function ReelsVideoPage() {

    const flimArray = 
  [
    "https://www.youtube.com/embed/L3KCtv0mU_4",
    "https://www.youtube.com/embed/21e7aq362j4",
    "https://www.youtube.com/embed/Rg5We0LeL0k",
    "https://www.youtube.com/embed/YfM5fijnrP8",
    "https://www.youtube.com/embed/-DLAzyr3p9w",
    "https://www.youtube.com/embed/8wXwc7Xrf5Y",
  ]

  return (
    <div className="w-11/12 mx-auto my-5">



      <h2 className="text-4xl font-bold mb-10">Our wedding trailer Edits</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center  space-y-4">
        {flimArray.map((video, idx) => {
          return (
            <div key={idx} className="border rounded-2xl">
              <iframe
                className="w-[315px] h-[560px] lg:w-[315px] lg:h-[560px] mx-auto"
                // width="560"
                // height="315"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>

     
    </div>
  );
}

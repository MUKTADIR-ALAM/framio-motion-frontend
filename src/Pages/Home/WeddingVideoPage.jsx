import React from "react";

export default function WeddingVideoPage() {
  const videosTrailerArray = [
    "https://www.youtube.com/embed/gPjYETEPOrg?si=dsGz2A09Zga18zRX",
    "https://www.youtube.com/embed/-Vb-d4dLo6k?si=7DqcN_7tyINGkhOp",
    "https://www.youtube.com/embed/oSlkhlyFtKo?si=SaXGGQxpWXEFYmXw",
    "https://www.youtube.com/embed/lF3YLPvLRKQ?si=smImcl9rRsD4F_07",
    "https://www.youtube.com/embed/NlAVTl8EPsQ?si=m6BaqGhirP9qqrMU",
    "https://www.youtube.com/embed/-RqqUytgxkc?si=lOyI8H_PJSX0itKh",
  ];

  const videosTeaserArray = [
    "https://www.youtube.com/embed/M5r9NOPcDaY?si=liLPTAIvE0n2m-kN",
    "https://www.youtube.com/embed/gwmr3pcBlUo?si=FzK2JmSoz0s9CBTq",
  ];

  return (
    <div className="w-11/12 mx-auto my-5">


      <h2 className="text-4xl font-bold mb-10">Our wedding trailer Edits</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center  space-y-4">
        {videosTrailerArray.map((video, idx) => {
          return (
            <div key={idx}>
              <iframe
              className="w-[340px] h-[270px] lg:w-[560px] lg:h-[315px]"
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



      <h2 className="text-4xl font-bold my-20">Our wedding Teaser Edits</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center  space-y-4">
        {videosTeaserArray.map((video, idx) => {
          return (
            <div key={idx}>
              <iframe
                // width="560"
                // height="315"
                className="w-[340px] h-[270px] lg:w-[560px] lg:h-[315px]"
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

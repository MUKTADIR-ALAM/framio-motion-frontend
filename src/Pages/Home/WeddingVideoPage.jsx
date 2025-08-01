

export default function WeddingVideoPage() {
  const videosTrailerArray = [
    "https://www.youtube.com/embed/gVdvQZ9MPOU?si=sBWkj202mBghtQ27",
    "https://www.youtube.com/embed/9w5W3UmikWU?si=En-foxx70mUt9HS2",
    "https://www.youtube.com/embed/KGemU9ZZOB4?si=o74RkakEuMXs0x0B",
    "https://www.youtube.com/embed/v9Na8zS4GBU?si=sKO9UpZztffVyHqQ",
    "https://www.youtube.com/embed/gPjYETEPOrg?si=dsGz2A09Zga18zRX",
    "https://www.youtube.com/embed/-Vb-d4dLo6k?si=7DqcN_7tyINGkhOp",
    "https://www.youtube.com/embed/oSlkhlyFtKo?si=SaXGGQxpWXEFYmXw",
    "https://www.youtube.com/embed/lF3YLPvLRKQ?si=smImcl9rRsD4F_07",
    "https://www.youtube.com/embed/NlAVTl8EPsQ?si=m6BaqGhirP9qqrMU",
    "https://www.youtube.com/embed/-RqqUytgxkc?si=lOyI8H_PJSX0itKh",

  ];

  const videosTeaserArray = [
    "https://www.youtube.com/embed/tU1ihseZUhI?si=prqIRlnGCLDRYjyS",
    "https://www.youtube.com/embed/M5r9NOPcDaY?si=liLPTAIvE0n2m-kN",
    "https://www.youtube.com/embed/gwmr3pcBlUo?si=FzK2JmSoz0s9CBTq",
  ];

  const flimArray = [
    "https://www.youtube.com/embed/HO7G92OGGSo?si=tBenUSPD9MtXg9Ew",
    "https://www.youtube.com/embed/rxib5rh8JjQ?si=JupnWIX17J0wizce",
    "https://www.youtube.com/embed/msOzV28-Dks?si=xbEOKdhVsfTW1i5Q",
    "https://www.youtube.com/embed/B5XQxOAxTOA?si=bCIJ6C3or9OlN2zv",
    "https://www.youtube.com/embed/GDmSk3LXOoE?si=7Y1yVtJGS8xgajGI",
    "https://www.youtube.com/embed/r3a6TmFXCvc?si=Ioear7egaiA5Udf7",
    "https://www.youtube.com/embed/rHpjkl05upQ?si=KZp89wjE8SB_ercc",
    "https://www.youtube.com/embed/WLJmBKfx5Xo?si=YHDZvV_Myxo1vBkB",
    "https://www.youtube.com/embed/NoSgRUEYIGs?si=1DYgw_WoExLw8BOh",
  ];



  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-4xl font-bold mb-10">Our wedding trailer Edits</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center  space-y-4">
        {videosTrailerArray.map((video, idx) => {
          return (
            <div
              key={idx}
              className="border mx-auto rounded-2xl overflow-hidden"
            >
              <iframe
                className="w-[340px] h-[270px] lg:w-[560px] lg:h-[315px]"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
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
                className="w-[340px] h-[270px] lg:w-[560px] lg:h-[315px]"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          );
        })}
      </div>

      <h2 className="text-4xl font-bold my-20">Our wedding Flims Edits</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center  space-y-4">
        {flimArray.map((video, idx) => {
          return (
            <div key={idx}>
              <iframe
                className="w-[340px] h-[270px] lg:w-[560px] lg:h-[315px]"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          );
        })}
      </div>

    </div>
  );
}

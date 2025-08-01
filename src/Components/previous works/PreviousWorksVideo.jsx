import we1 from '../../assets/grapic work/Aesthetic Wedding Photography Design-1.jpg'
import we2 from '../../assets/grapic work/Aesthetic Wedding Photography Design-3.jpg'
import sig from '../../assets/grapic work/Signature Dish Design-1.jpg'
import sig2 from '../../assets/grapic work/Signature Dish Design-3.jpg'


export default function PreviousWorksVideo() {
  const videosTrailerArray = [
    // "https://www.youtube.com/embed/gVdvQZ9MPOU?si=sBWkj202mBghtQ27",
    // "https://www.youtube.com/embed/9w5W3UmikWU?si=En-foxx70mUt9HS2",
    "https://www.youtube.com/embed/onXPumC_yK8?si=uQiSv85XpHLwfPpF",
    "https://www.youtube.com/embed/KGemU9ZZOB4?si=o74RkakEuMXs0x0B",
    // "https://www.youtube.com/embed/v9Na8zS4GBU?si=sKO9UpZztffVyHqQ",
    // "https://www.youtube.com/embed/gPjYETEPOrg?si=dsGz2A09Zga18zRX",
    // "https://www.youtube.com/embed/-Vb-d4dLo6k?si=7DqcN_7tyINGkhOp",
    // "https://www.youtube.com/embed/oSlkhlyFtKo?si=SaXGGQxpWXEFYmXw",
    // "https://www.youtube.com/embed/lF3YLPvLRKQ?si=smImcl9rRsD4F_07",
    
    // "https://www.youtube.com/embed/NlAVTl8EPsQ?si=m6BaqGhirP9qqrMU",
    // "https://www.youtube.com/embed/-RqqUytgxkc?si=lOyI8H_PJSX0itKh",

  ];

  const videosTeaserArray = [
    "https://www.youtube.com/embed/tU1ihseZUhI?si=prqIRlnGCLDRYjyS",
    "https://www.youtube.com/embed/M5r9NOPcDaY?si=liLPTAIvE0n2m-kN",
    "https://www.youtube.com/embed/gwmr3pcBlUo?si=FzK2JmSoz0s9CBTq",
  ];
  const event = [
    "https://www.youtube.com/embed/01gbCYQYlMc?si=b-r5nJHEmT9luFCq",
    "https://www.youtube.com/embed/nhePhH2F5U8?si=znxv6Ezy_yRVUxez",
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
    <div className="w-11/12 mx-auto my-5 mt-[200px]">
      <h2 className="vdo-heading text-4xl font-bold my-10 text-center">Wedding Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center place-items-center">
        {videosTrailerArray.map((video, idx) => {
          return (
            <div
              key={idx}
            >
              <iframe
                className="w-[340px] h-[270px] lg:w-[700px] lg:h-[455px]"
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

      <h2 className="vdo-heading text-4xl font-bold my-20 text-center">Corporate Events</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center place-items-center">
        {event.map((video, idx) => {
          return (
            <div key={idx}>
              <iframe
                className="w-[340px] h-[270px] lg:w-[700px] lg:h-[455px]"
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


      <h2 className="vdo-heading text-4xl font-bold my-20 text-center">Grapics Works</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center place-items-center space-y-6">
        <img className='w-[500px] h-[600px]' src={we1} alt="" />
        <img className='w-[500px] h-[600px]' src={we2} alt="" />
        <img className='w-[500px] h-[600px]' src={sig} alt="" />
        <img className='w-[500px] h-[600px]' src={sig2} alt="" />
      </div>

     
    </div>
  );
}

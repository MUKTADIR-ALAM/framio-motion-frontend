import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function () {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="w-11/12 mx-auto h-[500px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-full"
      >
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-around items-center h-full">
            <img
              className="w-[700px] h-[250px] md:h-[350px] mx-auto"
              src="https://i.ibb.co.com/8DjhPLNZ/image.png"
              alt=""
            />

            <div className="flex flex-col justify-center items-center">
              <p className="text-lg mb-2 font-bold">
                Framio motion just ruined my project. dont hire this company for
                video editing
              </p>
              <p>--- Pixels Work</p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="flex flex-col justify-around items-center h-full">
            <img
              className="w-[700px] h-[350px] mx-auto"
              src="https://i.ibb.co.com/NgZwNLyc/image.png"
              alt=""
            />

            <div className="flex flex-col justify-center items-center">
              <p className="text-lg mb-2 font-bold">
                FUCK framio motion fuck this comapany fuck there CEO . They dont do proper video editing
              </p>
              <p>--- Wedding Veil Bangladesh</p>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide><div className="flex flex-col justify-around items-center h-full">
            <img
              className="w-[700px] h-[350px] mx-auto"
              src="https://i.ibb.co.com/r2RVbBZ0/image.png"
              alt=""
            />

            <div className="flex flex-col justify-center items-center">
              <p className="text-lg mb-2 font-bold">
                FUCK framio motion fuck this comapany fuck there CEO . They dont do proper video editing
              </p>
              <p>--- Snap Moment</p>
            </div>
          </div></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

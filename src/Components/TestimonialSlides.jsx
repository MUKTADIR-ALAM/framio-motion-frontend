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

  const testimonials = [
    {
      img: "https://i.ibb.co.com/8DjhPLNZ/image.png",
      text: `They took our vision and elevated it beyond our imagination.`,
      author: `--- Pixels Work`,
    },
    {
      img: "https://i.ibb.co.com/CpMpZ7J5/image.png",
      text: `The best video editors we've ever partnered with. Professional,
                creative, and reliable.`,

      author: `--- Wedding Veil Bangladesh`,
    },
    {
      img: "https://i.ibb.co.com/VW7V3DFQ/image.png",
      text: `Incredible experience from start to finish!`,
      author: `--- Snap Moment`,
    },
    {
      img: "https://i.ibb.co.com/CsTyttHH/image.png",
      text: `Great results. I’ll definitely work with
                them again!`,
      author: `--- নাটাই - Reel`,
    },
    {
      img: "https://i.ibb.co.com/1Gb8Y3PS/image.png",
      text: `Their promo edits turned our brand into a story customers
                connect with.`,
      author: `--- BazarSodai`,
    },
  ];

  return (
    <div className="w-11/12 mx-auto h-[500px]">
      <h2 className="my-6 text-2xl font-bold">Our Client Feedback</h2>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
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
        {/* <SwiperSlide className="relative">
          <div className="flex flex-col justify-around items-center h-full">
            <img
              className="w-[700px] h-[250px] md:h-[350px] mx-auto"
              src="https://i.ibb.co.com/8DjhPLNZ/image.png"
              alt=""
            />

            <div className="flex flex-col justify-center items-center">
              <p className="text-lg mb-2 font-bold w-4xl  mx-auto">
                They took our vision and elevated it beyond our imagination. The
                storytelling, transitions, and overall quality were flawless.
                Highly recommended for anyone serious about great content
              </p>
              <p>--- Pixels Work</p>
            </div>
          </div>
        </SwiperSlide> */}

        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="flex flex-col justify-around items-center h-full">
              <img
                className="w-[700px] h-[250px] md:h-[350px] mx-auto"
                src={testimonial.img}
                alt=""
              />

              <div className="flex flex-col justify-center items-center">
                <p className="text-lg mb-2 font-bold  max-w-[600px]  mx-auto">
                  {testimonial.text}
                </p>
                <p>{testimonial.author}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        

        

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

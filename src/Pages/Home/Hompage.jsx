import Hero from "../../Components/Hero";
import VideoEditService from "../../Components/VideoEditService";
import Team from "../../Components/Team";
import Testimonial from "../../Components/Testimonial";
import TestimonialSlides from "../../Components/TestimonialSlides";
import WhatWeDoSection from "../../Components/WhatWeDoSection";

export default function Hompage() {
  return (
    <div>
      <Hero/>
      <VideoEditService/>
      <TestimonialSlides/>
      <Testimonial/>
      <WhatWeDoSection/>
      <Team/>
    </div>
  );
}

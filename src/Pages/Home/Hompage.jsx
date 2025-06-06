import Hero from "../../Components/Hero";
import VideoEditService from "../../Components/VideoEditService";
import Team from "../../Components/Team";
import TestimonialSlides from "../../Components/TestimonialSlides";
import WhatWeDoSection from "../../Components/WhatWeDoSection";
import Skills from "../../Components/Skills";
import Statics from "../../Components/Statics";

export default function Hompage() {
  return (
    <div>
      <Hero/>
      <VideoEditService/>
      <TestimonialSlides/>
      <Skills/>
      <WhatWeDoSection/>
      <Statics/>
      <Team/>
    </div>
  );
}

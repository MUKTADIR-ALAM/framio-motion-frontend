import Hero from "../../Components/Hero";
import VideoEditService from "../../Components/VideoEditService";
import Team from "../../Components/Team";
import TestimonialSlides from "../../Components/TestimonialSlides";
import WhatWeDoSection from "../../Components/WhatWeDoSection";
import Skills from "../../Components/Skills";
import Statics from "../../Components/Statics";
import PreviousWorksVideo from "../../Components/previous works/PreviousWorksVideo"
import Greetings from "../../Components/Greetings";

export default function Hompage() {
  return (
    <div>
      <Hero/>
      <Greetings/>
      <PreviousWorksVideo/>
      <Skills/>
      <WhatWeDoSection/>
      <Statics/>
      <Team/>
    </div>
  );
}

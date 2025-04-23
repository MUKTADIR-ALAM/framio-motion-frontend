import Hero from "../../Components/Hero";
import VideoEditService from "../../Components/VideoEditService";
import Team from "../../Components/Team";
import Testimonial from "../../Components/Testimonial";
import TestimonialSlides from "../../Components/TestimonialSlides";

export default function Hompage() {
  return (
    <div>
      <Hero/>
      <VideoEditService/>
      <Testimonial/>
      <TestimonialSlides/>
      <Team/>
    </div>
  );
}

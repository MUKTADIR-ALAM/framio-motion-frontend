import { FaPlayCircle } from "react-icons/fa";  
import Hero from "../../Components/Hero";
import VideoEditService from "../../Components/VideoEditService";
import Team from "../../Components/Team";

export default function Hompage() {
  return (
    <div>
      <Hero/>
      <VideoEditService/>
      <Team/>
    </div>
  );
}

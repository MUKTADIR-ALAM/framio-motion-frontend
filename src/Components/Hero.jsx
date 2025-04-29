import { GoArrowUpRight } from "react-icons/go";
import background from "../assets/background.png";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto w-11/12 gap-10">
      {/* slogan div */}

      <div className="w-full lg:w-1/2">
        <h1 className="lg:text-5xl text-3xl mt-20 mx-auto w-11/12 lg:leading-16 leading-10">
          Make your thought into reality with us. we build complete{" "}
          <span className="text-theme">
            <Typewriter
              words={[
                "Video editing",
                "Web Apps",
                "Grapic Design",
                "Digital Marketing",
              ]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <button className="ml-5 mt-5 btn bg-theme shadow-none text-gray-800 rounded-xl font-semibold group text-xl py-6 px-5">
          Get Quote{" "}
          <div className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45">
            {" "}
            <GoArrowUpRight size={25} />
          </div>
        </button>
      </div>

      {/* <img className="w-full lg:w-6/12 mx-auto" src={background} alt="" /> */}
      <div className="w-full lg:w-1/2  mx-auto mt-[-50px]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}

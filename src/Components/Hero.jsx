
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto w-11/12 gap-10">
      {/* slogan div */}

      <div className="w-[100%] h-[100%] mb-6 flex justify-center items-center">
        <h1 className="hero-text lg:text-5xl text-2xl font-black text-white mt-60 mx-auto w-6/12 lg:leading-16 leading-10">
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
       
      </div>

      
    </div>
  );
}

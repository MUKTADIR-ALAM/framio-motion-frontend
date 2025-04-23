import { GoArrowUpRight } from "react-icons/go";
import background from "../assets/background.png";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row mx-auto w-11/12">
      {/* slogan div */}

      <div className="">
        <h1 className="text-5xl mt-30 mx-auto w-11/12 leading-20">
          A <span className="text-theme">video agency</span> for the
          future. Make your thought into reality with us.
        </h1>
        <button className="ml-5 mt-5 btn bg-theme shadow-none text-gray-800 rounded-xl font-semibold group text-xl py-6 px-5">
          Get Quote{" "}
          <div className="transform transition-transform duration-300 ease-in-out group-hover:rotate-45">
            {" "}
            <GoArrowUpRight size={25} />
          </div>
        </button>
      </div>

      <img className="w-full lg:w-6/12 mx-auto" src={background} alt="" />
    </div>
  );
}

import background from "../assets/background.png";


export default function Hero() {
  return (
    <div className="flex mx-auto w-11/12">
      {/* slogan div */}

      <h1 className="text-6xl mt-30 mx-auto w-11/12 leading-20">A <span className="text-yellow-300">video agency</span> for the future. Make your thought into reality with us.</h1>

      <img className="w-6/12 mx-auto" src={background} alt="" />
    </div>
  );
}

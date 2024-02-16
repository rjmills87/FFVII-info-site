import heroImage from "../assets/images/ffviir-zoom-cloud-shinra.jpg";
import logoLarge from "../assets/images/ffvii-logo.png";
import cloudImage from "../assets/images/cloud-1.webp";
import sephirothImage from "../assets/images/sephiroth-1.webp";

export default function Hero() {
  return (
    <div className="relative">
      <img
        className="w-full h-auto"
        src={heroImage}
        alt="Cloud Strife looking up at a Mako reactor"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        className="h-28 md:h-44 lg:h-64 xl:h-72 absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2"
        src={logoLarge}
        alt="Final Fantasy VII Remake Intergrade Logo"
      />
      <div className="absolute left-1/2 top-2/3 xl:top-3/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-evenly gap-5 md:gap-10">
          <img
            className="h-20 md:h-36 lg:h-48 xl:h-60"
            src={sephirothImage}
            alt=""
          />
          <img
            className="h-20 md:h-36 lg:h-48 xl:h-60"
            src={cloudImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

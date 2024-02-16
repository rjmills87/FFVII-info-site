import githubIcon from "../assets/images/github.svg";
import linkedinIcon from "../assets/images/linkedin.svg";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="bg-black mt-auto mb-0">
      <div className="text-center pt-4 ml-10 mr-10">
        <h6 className="text-2xl text-white font-bold text-center p-4">
          FINAL FANTASY VII Remake
        </h6>
        <p className="text-white text-sm opacity-50 p-4">
          This web development project was created for educational and learning
          purposes only. It is not intended for commercial use or distribution.
          All content and features are solely for demonstration and practice in
          web development skills. Any resemblance to real products, services, or
          entities is purely coincidental.
        </p>
        <p className="text-white text-sm opacity-50 p-4">
          AMANO FINAL FANTASY, FINAL FANTASY VII REMAKE, SQUARE ENIX and the
          SQUARE ENIX logo are registered trademarks or trademarks of Square
          Enix Holdings Co., Ltd. "PlayStation" and the "PS" logo are registered
          trademarks and "PS4" is a trademark of Sony Computer Entertainment
          Inc.
        </p>
      </div>
      <div className=" flex flex-col justify-evenly">
        <div className="flex justify-center align-middle gap-10 p-4">
          <a href="https://github.com/rjmills87" target="_blank">
            <img className="h-10" src={githubIcon} alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/rjmills87/" target="_blank">
            <img className="h-10" src={linkedinIcon} alt="LinkedIn Logo" />
          </a>
        </div>
        <p className="text-white text-center pb-3">Rhys Miller {currentYear}</p>
      </div>
    </div>
  );
}

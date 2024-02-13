import { useState } from "react";
import arrow from "../assets/images/arrow.png";

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  let previousSlide = () => {
    if (currentSlide === 0) setCurrentSlide(slides.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  let nextSlide = () => {
    if (currentSlide === slides.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  return (
    <div className="w-[60%] m-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition ease-out duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img key={index} src={slide.imgPath} alt={slide.altText} />
          ))}
        </div>
        <div className="absolute top-0 h-full w-full flex justify-between align-center">
          <button onClick={previousSlide}>
            <img className="rotate-180" src={arrow} alt="arrow-left" />
          </button>
          <button onClick={nextSlide}>
            <img src={arrow} alt="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}

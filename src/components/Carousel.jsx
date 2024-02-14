import { useEffect, useState } from "react";
import arrow from "../assets/images/arrow.png";

export default function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    if (currentSlide === 0) setCurrentSlide(slides.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        previousSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSlide]);

  return (
    <div className="w-[90%] md:w-[75%] lg:w-[60%] m-auto">
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
          <button
            onClick={previousSlide}
            aria-label="Previous Slide"
            aria-disabled={currentSlide === 0}
          >
            <img
              className="rotate-180"
              src={arrow}
              alt="Previous Slide"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            aria-disabled={currentSlide === slides.length - 1}
          >
            <img src={arrow} alt="Next Slide" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

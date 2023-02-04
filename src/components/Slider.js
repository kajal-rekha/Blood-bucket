import Slide from "./Slide";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const data = [
  {
    id: 1,
    src: "https://cdn2.hubspot.net/hubfs/2027031/Lanermc_January2018/Images/D53297C6-155D-D235-07048C3BAF7898A0.jpeg",
    headline: "Three Great Reasons To Donate Blood",
    body: "Blood donation is a vital part of worldwide healthcare. It allows for blood transfusion as a life-sustaining and life-saving procedure. Over one hundred million units of blood are donated each year throughout the world.",
    cta: "Book Appoinment",
  },
  {
    id: 2,
    src: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/slider/slide-03.jpg",
    headline:
      "Why risk behaviours,not orientation,should decide who gives blood",
    body: "Blood donation for transfusion is a vital step in the management of many clinical problems, with the two primary indications being anemia and acute blood loss. Blood donation itself is also used to primarily treat a small subset of medical conditions.",
    cta: "Donate now",
  },
  {
    id: 3,
    src: "https://www.smarteyeapps.com/demo/blood-donation-charity-website-tempalte/assets/images/slider/slide-02.jpg",
    headline: "Donate Blood & Save a Life",
    body: "Blood donation for transfusion is a vital step in the management of many clinical problems, with the two primary indications being anemia and acute blood loss. Blood donation itself is also used to primarily treat a small subset of medical conditions.",
    cta: "Contact us",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide key={image.id} image={image} />
        ))}
      </div>
      <div className="btns absolute w-screen justify-center bottom-20 m-auto  z-[1] text-white text-2xl flex gap-10 ">
        <button
          onClick={prevSlide}
          className="prev-btn h-14 w-20 flex justify-center items-center bg-gray-900 text-violet-200 border border-violet-200 hover:bg-red-700 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowLeft />
          </span>
        </button>
        <button
          onClick={nextSlide}
          className="next-btn h-14 w-20 flex justify-center items-center bg-gray-900 text-violet-200 border border-violet-200 hover:bg-red-700 hover:text-gray-200 hover:border-gray-200 duration-300"
        >
          <span>
            <BsArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;

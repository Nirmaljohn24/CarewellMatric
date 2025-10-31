import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import carousel1 from "../assets/Carousel1.jpg";
import carousel2 from "../assets/Carousel2.jpg";
import carousel3 from "../assets/Carousel3.jpg";

const HeroCarousel = () => {
  const images = [carousel1, carousel2, carousel3];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-5 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 cursor-pointer shadow-md hover:bg-gray-200 z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-orange-600" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-5 top-1/2 -translate-y-1/2 bg-white rounded-full p-4 cursor-pointer shadow-md hover:bg-gray-200 z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-orange-600" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden mt-32">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[650px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;

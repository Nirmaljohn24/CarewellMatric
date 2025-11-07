import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sabeera Beebi",
    role: "Teacher",
    message:
      "I am Sabeera Beebi, and I had the privilege of working at Carewell Matriculation School for nearly 10 years. My time there never felt like a job — it always felt like home, like my own mother’s house.",
  },
  {
    name: "Mrs. T. Rajeswari",
    role: "Teacher",
    message:
      "I worked as a teacher at Carewell Matriculation Higher Secondary School for 20 years. The experience was one of the most meaningful chapters of my life — the school was not just a workplace, it felt like a family.",
  },
  {
    name: "Sabeera Beebi",
    role: "Teacher",
    message:
      "Carewell Matriculation School has been a place of warmth and growth. Every day felt inspiring, surrounded by supportive colleagues and a positive learning environment.",
  },
  {
    name: "Mrs. T. Rajeswari",
    role: "Teacher",
    message:
      "Working at Carewell Matriculation Higher Secondary School was truly special. The school fostered values of teamwork, dedication, and compassion that shaped my teaching journey.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#d6e2fa] py-16">
      {/* Section Header */}
      <div className="text-center mb-10">
        <button className="bg-orange-500 text-white px-4 py-1 text-2xl rounded-full font-semibold">
          Testimonials
        </button>
        <h2 className="text-3xl font-bold text-blue-900 mt-4">
          What Our Teacher <span className="text-orange-500">Say's</span> About Experience
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-4xl rounded-tr-none p-6 shadow-lg relative h-64 flex flex-col justify-between">
                {/* Left Orange Line */}
                <div className="absolute left-4 top-8 w-1 h-10 bg-orange-500 rounded-full"></div>

                {/* Quote Mark */}
                <span className="absolute text-[140px] text-orange-200 font-serif opacity-30 right-6 select-none">
                  “
                </span>

                {/* Card Content */}
                <div>
                  <h3 className="text-lg font-bold text-blue-900 ml-6">{item.name}</h3>
                  <p className="text-orange-500 ml-6 font-medium">{item.role}</p>
                  <p className="italic text-blue-900 leading-relaxed mt-8 ml-6 text-lg">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Read More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition font-medium">
          Read More →
        </button>
      </div>
    </section>
  );
};

export default Testimonial;

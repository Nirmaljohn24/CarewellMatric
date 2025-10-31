import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Academic1 from "../assets/Academic1.jpg";
import Academic2 from "../assets/Academic2.jpg";
import Academic3 from "../assets/Academic3.jpg";

const Academic = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  const academics = [
    {
      image: Academic1,
      title: "High School Section (Standards VI to X)",
      description:
        "High School focuses on deepening academic knowledge, critical thinking, and practical application of concepts.",
    },
    {
      image: Academic2,
      title: "Higher Secondary Section (Standards XI & XII)",
      description:
        "The Higher Secondary curriculum provides stream-wise options in science, commerce, and technology to support career aspirations.",
    },
    {
      image: Academic3,
      title: "Kindergarten Section",
      description:
        "The Kindergarten program fosters cognitive, emotional, and motor development through play-based, hands-on learning.",
    },
    {
      image: Academic3,
      title: "Primary Section (Standards I to V)",
      description:
        "The Primary Section builds strong foundations in language, numeracy, and creativity through interactive lessons.",
    },
    {
      image: Academic3,
      title: "Pre-Primary Section (Nursery & KG)",
      description:
        "Pre-Primary focuses on joyful learning experiences that enhance social and emotional development.",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-orange-500 font-semibold uppercase tracking-wide flex items-center justify-center gap-1">
          <span className="bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-medium">
            Courses Offered
          </span>
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-4">
          Academic Excellence Across{" "}
          <span className="text-orange-500">All Grade Levels</span>
        </h2>
      </div>

      <div className="relative group max-w-5xl mx-auto">
        <div
          ref={carouselRef}
          className="flex justify-evenly gap-4 overflow-x-scroll scroll-smooth px-4 py-4 hide-scrollbar"
        >
          {academics.map((item, index) => (
            <div
              key={index}
              className="w-[320px] bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[240px] object-cover rounded-t-3xl"
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Academic;

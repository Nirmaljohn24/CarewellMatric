import React, { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import literaryImg from "../assets/LiteraryActivity.jpg";
import yogaImg from "../assets/YogaActivity.jpg";
import DramaImg from "../assets/DramaticsActivity.jpg";


const Activities = () => {
  const activities = [
    {
      image: literaryImg,
      title: "Literary Association",
    },
    {
      image: yogaImg,
      title: "Yoga",
    },
    {
      image: DramaImg,
      title: "Dramatics",
    }
  ];

  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative bg-[#0b2d67] py-16 px-6 text-center text-white overflow-hidden">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex justify-center items-center gap-3 mb-4">
          <div className="bg-orange-500 text-white px-5 py-2 rounded-full flex items-center gap-2">
            <BookOpen size={20} />
            <span className="font-semibold">Co-Curricular Activities</span>
          </div>
        </div>
        <h2 className="text-3xl font-bold">
          Our School Offers A Wide Range Of <br />
          <span className="text-white">Co-Curricular Activities</span>
        </h2>
      </div>

      {/* Cards Container */}
      <div
        className="relative max-w-6xl mx-auto flex justify-center items-center gap-6 transition-all"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Left Arrow */}
        {hovered && (
          <button className="absolute left-0 bg-orange-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition">
            <ArrowLeft size={20} />
          </button>
        )}

        {/* Activity Cards */}
        <div className="flex gap-8">
          {activities.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-900 rounded-2xl shadow-md overflow-hidden w-80 relative group hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              <div className="p-4 pt-4 flex justify-between items-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <button className="bg-orange-500 text-white p-2 rounded-full hover:scale-110 transition">
                  <GoArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {hovered && (
          <button className="absolute right-0 bg-orange-500 p-3 rounded-full text-white shadow-lg hover:scale-110 transition">
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Activities;

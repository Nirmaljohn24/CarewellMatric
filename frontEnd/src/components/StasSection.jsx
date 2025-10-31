import React from "react";
import { FaBookOpen, FaUserGraduate, FaChalkboardTeacher, FaTrophy } from "react-icons/fa";

const StatsSection = () => {
  const stats = [
    { icon: <FaBookOpen />, number: "20+", label: "Total Classes" },
    { icon: <FaUserGraduate />, number: "250+", label: "Our Students" },
    { icon: <FaChalkboardTeacher />, number: "25+", label: "Skilled Teachers" },
    { icon: <FaTrophy />, number: "100%", label: "Results" },
  ];

  return (
    <div className="bg-[#071A4B] py-12 flex flex-wrap justify-center gap-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="relative flex items-center bg-transparent border border-gray-400/30 rounded-full px-10 py-6 w-[280px] hover:scale-105 transition-transform duration-300"
        >
          
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-white flex items-center justify-center border-4 border-orange-500">
            <div className="text-orange-500 text-4xl">{item.icon}</div>
          </div>

          <div className="absolute left-[70px] bottom-0 w-[40px] h-[2px] bg-orange-500 rounded"></div>

          <div className="pl-24 text-white text-center">
            <p className="text-4xl font-extrabold">
              {item.number}
            </p>
            <p className="text-sm font-semibold text-gray-200 mt-1">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;

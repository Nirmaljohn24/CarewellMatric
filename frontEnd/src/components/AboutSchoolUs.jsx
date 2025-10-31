import React from "react";
import aboutSchool from "../assets/aboutSchool.jpg";

const AboutSchoolUs = () => {
  return (
    <div
      className="relative w-full h-80 flex flex-col items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${aboutSchool})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <div className="relative z-10 mt-36">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg">
          Home <span className="text-orange-500">› About Us</span>
        </p>
      </div>
    </div>
  );
};

export default AboutSchoolUs;

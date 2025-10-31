import React from "react";
import { FaArrowRight, FaSchool } from "react-icons/fa";
import aboutSchool from "../assets/aboutSchool.jpg";

const AboutSchool = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-8 bg-white gap-10">
      <div className="flex-1">
        <div className="flex items-center mb-3">
          <div className="flex items-center bg-orange-500 text-white px-6 py-4 rounded-full shadow">
            <FaSchool className="mr-2" />
            <span className="font-medium text-sm">Welcome To</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1c54] mb-6 leading-snug">
          Carewell Matric Higher Secondary School
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          Carewell Matric Higher Secondary School run by SURA Educational Trust
          was started in the year with 50 students in LKG and UKG in the year
          1989. Gradually it was upgraded as a Higher school with 600 students.
          Carewell Matriculation School is a co-educational institution dedicated
          to delivering holistic education that balances academic excellence
          with character development. The school provides a conducive learning
          environment that nurtures intellectual growth, self-discipline, and a
          sense of social responsibility among students.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          The institution is well-staffed with qualified and trained educators
          who are committed to fostering a culture of continuous learning and
          excellence. The campus is equipped with essential infrastructure,
          including spacious classrooms, well-resourced laboratories, a
          comprehensive library, a playground for sports activities, and a fully
          functional auditorium to support extracurricular and cultural events.
        </p>

        <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium px-5 py-3 rounded-lg shadow-md transition duration-200">
          Discover More <FaArrowRight className="ml-2" />
        </button>
      </div>

      <div className=" flex justify-center">
        <img
          src={aboutSchool}
          alt="Carewell Matric Higher Secondary School"
          className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSchool;

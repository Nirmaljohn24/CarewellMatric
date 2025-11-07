import React from "react";
import aboutSchool from "../assets/aboutSchool.jpg"; 

const AboutSchoolUs = () => {
  return (
    <div>
      {/* Top Banner Section */}
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

      {/* About School Section (Text + Image Side by Side) */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Carewell Matric Higher Secondary School
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Carewell Matric Higher Secondary School run by SURA Educational Trust
            was started in the year with 50 students in LKG and UKG in the year
            1989. Gradually, it was upgraded as a Higher school with 600 students.
            Carewell Matriculation School is a co-educational institution dedicated
            to delivering holistic education that balances academic excellence
            with character development. The school provides a conducive learning
            environment that nurtures intellectual growth, self-discipline, and a
            sense of social responsibility among students.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            The institution is well-staffed with qualified and trained educators
            who are committed to fostering a culture of continuous learning and
            excellence. The campus is equipped with essential infrastructure,
            including spacious classrooms, well-resourced laboratories, a
            comprehensive library, a playground for sports activities, and a fully
            functional auditorium to support extracurricular and cultural events.
          </p>

          <h3 className="text-2xl font-semibold text-blue-800 mt-8 mb-3">
            Educational Approach
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In line with its mission to provide all-round development, the school
            integrates academic rigor with co-curricular and moral instruction.
            Emphasis is placed on instilling core values through weekly moral
            education classes, which are a compulsory part of the curriculum.
            These sessions aim to build ethical awareness and responsible
            citizenship from an early age.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src={aboutSchool}
            alt="Carewell Matric Higher Secondary School"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSchoolUs;

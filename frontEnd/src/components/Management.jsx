import React from "react";
import Slider from "react-slick";
import aboutSchool from "../assets/aboutSchool.jpg";

// Team Images
import rangarajan from "../assets/RangarajanOurManagement.jpg";
import sundaram from "../assets/SundaramOurManagement.jpg";
import velvizhi from "../assets/velvizhiOurManagement.jpg";
import rajalakshmi from "../assets/RajalakshmiOurManagement.jpg";
import araselvi from "../assets/AraselviOurManagement.jpg";

// Team Data
const team = [
  {
    name: "Mr. R. Rangarajan, B.E. (Agri), LL.B.",
    title: "Correspondent",
    description:
      "A visionary leader managing institutional growth and administration.",
    image: rangarajan,
  },
  {
    name: "Mr. R. Sundaram, B.Sc., M.A",
    title: "Managing Trustee",
    description:
      "Guides the academic direction and policy-making of the institution.",
    image: sundaram,
  },
  {
    name: "Mrs. R. Velvizhi, M.Sc., B.Ed.",
    title: "Trustee",
    description: "Supports ethical governance and educational development.",
    image: velvizhi,
  },
  {
    name: "Mrs. R. Rajalakshmi, M.Sc., B.Ed.",
    title: "Principal",
    description: "Supports ethical governance and educational development.",
    image: rajalakshmi,
  },
  {
    name: "Mrs. R. Araselvi, M.Sc., B.Ed.",
    title: "Vice Principal",
    description: "Supports ethical governance and educational development.",
    image: araselvi,
  },
];

// Alumni Data (5 copies for smooth looping)
const alumni = Array(5).fill([
  {
    name: "Dr. Arun Sundaram",
    degree: "MBBS",
    description: "Lakshmi Hospital, Thudiyalur, Coimbatore",
  },
  {
    name: "Er. R. Gnanamaruthy Ramgandhi",
    degree: "B.Tech., M.S. (London)",
    description: "CTO (Snitch.com) and Angel Investor – Bangalore",
  },
  {
    name: "Er. R. Poomagan",
    degree: "M.E.",
    description: "Delivery Manager – Standard Chartered Bank, Chennai",
  },
  {
    name: "Dr. Seran Rangaraj",
    degree: "MBBS., DNB.",
    description: "Sakthi Nursing Home, Mettupalayam",
  },
]).flat(); // flatten array to repeat entries

const Management = () => {
  // React Slick settings for Alumni Carousel
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
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
          <h1 className="text-4xl font-bold">Our Management</h1>
          <p className="text-lg">
            Home <span className="text-orange-500">›› Our Management</span>
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <button className="bg-orange-500 text-white px-5 py-1 rounded-full text-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-users mr-2"></i> Our Team
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            Inspiring Minds, Building Futures
          </h2>
          <p className="text-gray-700 mb-12 leading-relaxed">
            At the heart of our institution is a team of dedicated educators and
            visionaries committed to academic excellence, student welfare, and
            leadership development.
          </p>

          {/* Team Cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between h-[420px]"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-36 h-36 rounded-full border-4 border-blue-900 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p className="text-blue-900 text-lg mb-6 leading-relaxed">
                  {member.description}
                </p>

                <div className="bg-orange-500 text-white rounded-xl py-4 px-3 mt-auto">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="italic mb-1">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Carousel Section */}
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <button className="bg-orange-500 text-white px-5 py-1 rounded-full text-2xl flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-graduation-cap mr-2"></i> Consanguinity Alumni
          </button>
          <h2 className="text-3xl font-bold text-blue-900 mb-3">
            Notable Alumni Achievements
          </h2>
          <p className="text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            We are proud of our alumni who have gone on to achieve excellence in
            their respective fields, demonstrating the value of education received
            at our institution.
          </p>

          <Slider {...settings}>
            {alumni.map((alum, index) => (
              <div key={index} className="px-4">
                <div className="bg-gray-200 border border-gray-200 rounded-2xl shadow-md p-6 mx-1 flex flex-col justify-between h-[280px] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-blue-900 font-bold text-lg">
                    {alum.name}
                  </h3>
                  <p className="font-semibold text-gray-600">
                    {alum.degree}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {alum.description}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Management;

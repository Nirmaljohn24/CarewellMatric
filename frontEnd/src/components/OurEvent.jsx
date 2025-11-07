import React from "react";
import annualDay from "../assets/eventAnnualDay.jpg"; 
import independenceDay from "../assets/eventIndependence.jpg"; 

const events = [
  {
    id: 1,
    title: "Annual Day 2025",
    date: "15 Feb 2025",
    image: annualDay,
  },
  {
    id: 2,
    title: "Independence Day 2024",
    date: "15 Aug 2024",
    image: independenceDay,
  },
];

const OurEvent = () => {
  return (
    <section className="bg-white py-16">
      <div className="text-center mb-12">
        <button className="bg-orange-500 text-white px-7 py-1 rounded-full  text-2xl flex items-center justify-center mx-auto mb-3">
          <i className="fa-solid fa-school mr-2"></i> Our Events
        </button>
        <h2 className="text-3xl font-bold text-blue-900">
          It Reflects The Creativity, Spirit, <br />
          And Joy Of Our Students And Staff.
        </h2>
        <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >

            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover rounded-t-3xl"
              />
        
              <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                {event.date}
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-blue-900 text-center">
                {event.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurEvent;

import React from "react";

const Admission = () => {
  return (
    <section
      className="relative bg-orange-500 text-white py-10 text-center"
      style={{
        backgroundImage: "url('/src/assets/bg-lines.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Admissions For 2025 – 2026
        </h2>
        <p className="max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          We believe in absolute transparency, which is why we encourage parents
          and children to visit our campus for a face-to-face interaction. In
          the case of parents and students who are overseas, we do the
          interaction over Google Meet or WhatsApp Video call.
        </p>
        <a
          href="#apply"
          className="inline-block bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          Apply Now →
        </a>
      </div>
    </section>
  );
};

export default Admission;

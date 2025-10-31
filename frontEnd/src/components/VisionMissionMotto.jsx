import React from "react";
import { FaEye, FaBullseye, FaBook } from "react-icons/fa";

const VisionMissionMotto = () => {
  const cards = [
    {
      icon: <FaEye size={32} className="text-white" />,
      title: "Our Vision",
      text: "We aim to educate children to become skilled, responsible, and active citizens.",
    },
    {
      icon: <FaBullseye size={32} className="text-white" />,
      title: "Our Mission",
      text: "Our mission is to impart genuine knowledge and wisdom with love and dedication.",
    },
    {
      icon: <FaBook size={32} className="text-white" />,
      title: "Our Motto",
      text: "Humanity, Homogeneity, and Hardwork. Qualified and experienced teacher's support.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-white">
      {cards.map((card, index) => (
        <div
          key={index}
          className="relative bg-[#0a1c54] text-white rounded-3xl p-8 w-[380px] h-[220px] shadow-lg"
        >
            
          <div className="absolute -top-4    -left-0.5 w-24 h-24 rounded-full bg-orange-600 border-[10px] border-white flex items-center justify-center shadow-lg">
            {card.icon}
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-[15px] leading-relaxed">{card.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisionMissionMotto;

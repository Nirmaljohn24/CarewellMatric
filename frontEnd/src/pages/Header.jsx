import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, User } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import schoolLogo from "../assets/schoolLogo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      {/* 🔸 Top orange bar (hides when scrolled) */}
      <div
        className={`bg-orange-500 text-white text-sm flex flex-wrap items-center justify-around px-6 py-3 font-medium transition-all duration-500 ease-in-out ${
          isScrolled
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex flex-wrap items-center space-x-6 font-bold">
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span>04254-222048</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>carewellmhss@gmail.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-white font-medium">
            Admissions Opens for 2025-2026.
          </span>
          <div className="flex items-center space-x-2 text-white">
            <User size={16} />
            <span>Admissions</span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* 🔸 Main Navigation */}
      <nav
        className={`bg-white flex items-center justify-evenly px-6 transition-all duration-500 ease-in-out ${
          isScrolled ? "py-2 shadow-md scale-[0.98]" : "py-4"
        }`}
      >
        {/* Logo Section */}
        <div
          className={`flex items-center transition-all duration-500 ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          <img
            src={schoolLogo}
            alt="Carewell Logo"
            className="w-62 h-20 transition-all duration-500"
          />
        </div>

        {/* Menu Items */}
        <ul
          className={`flex flex-wrap items-center space-x-6 text-blue-900 font-bold transition-all duration-500 ${
            isScrolled ? "text-base" : "text-lg"
          }`}
        >
          <li className="hover:text-orange-500 cursor-pointer py-3">
            <Link to="/">Home</Link>
          </li>

          <li className="relative group py-3 cursor-pointer">
            <div className="flex items-center space-x-1 hover:text-orange-500">
              <span>About Us</span>
              <MdKeyboardArrowDown className="text-xl" />
            </div>

            <ul
              className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-lg 
                opacity-0 invisible group-hover:visible group-hover:opacity-100 
                transition-all duration-300 ease-in-out z-10"
            >
              <li className="px-4 py-3 hover:bg-orange-500 hover:text-white rounded-t-2xl">
                <Link to="/about-school">About The School</Link>
              </li>
              <li className="px-4 py-3 hover:bg-orange-500 hover:text-white">
                <Link to="/management">Management</Link>
              </li>
              <li className="px-4 py-3 hover:bg-orange-500 hover:text-white">
                Curriculum
              </li>
              <li className="px-4 py-3 hover:bg-orange-500 hover:text-white">
                Motto
              </li>
              <li className="px-4 py-3 hover:bg-orange-500 hover:text-white rounded-b-2xl">
                Testimonials
              </li>
            </ul>
          </li>

          <li className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer py-3">
            <span>Campus</span>
            <MdKeyboardArrowDown className="text-xl" />
          </li>

          <li className="flex items-center space-x-1 hover:text-orange-500 cursor-pointer py-3">
            <span>Academics</span>
            <MdKeyboardArrowDown className="text-xl" />
          </li>

          <li className="hover:text-orange-500 cursor-pointer py-3">Facilities</li>
          <li className="hover:text-orange-500 cursor-pointer py-3">Events</li>
          <li className="hover:text-orange-500 cursor-pointer py-3">Careers</li>
          <li className="hover:text-orange-500 cursor-pointer py-3">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

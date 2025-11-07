import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import qrCode from "../assets/qrCode.png"; // place your QR code image in assets folder

const Footer = () => {
  return (
    <footer className="bg-[#0b2154] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-4 border-orange-500 pl-2">
            About Us
          </h3>
          <p className="text-gray-300 text-md leading-relaxed">
            Carewell Matriculation School is a co-educational institution
            dedicated to delivering holistic education that balances academic
            excellence with character development. The school provides a
            conducive learning environment that nurtures intellectual growth,
            self-discipline, and a sense of social responsibility among students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-4 border-orange-500 pl-2">
            Quick Links
          </h3>
          <ul className="text-gray-300 space-y-2 text-md">
            <li>About Us</li>
            <li>Courses Offered</li>
            <li>Fee Payment Policy</li>
            <li>Rules & Regulations</li>
            <li>Events</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* QR Code */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-4 border-orange-500 pl-2">
            QR Code
          </h3>
          <img
            src={qrCode}
            alt="QR Code"
            className="w-40 h-40 border border-white p-2 rounded-lg"
          />
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b-4 border-orange-500 pl-2">
            Get In Touch
          </h3>

          <div className="flex items-start mb-3">
            <MapPin className="text-orange-500 mt-1 mr-2" />
            <p className="text-gray-300 text-md leading-relaxed">
              <strong>Our Address</strong> <br />
              Kamaraj Nagar, Mahadevapuran Post, <br />
              Mettupalayam - 641305, Coimbatore
            </p>
          </div>

          <div className="flex items-center mb-3">
            <Phone className="text-orange-500 mr-2" />
            <p className="text-gray-300 text-md">
              <strong>Call Us:</strong> 04254 222048 / +91-9597694599
            </p>
          </div>

          <div className="flex items-center">
            <Mail className="text-orange-500 mr-2" />
            <p className="text-gray-300 text-md">
              <strong>Mail Us:</strong> carewellmhss@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>
          © 2025{" "}
          <span className="text-orange-500 font-medium">
            Carewell Matric Higher Secondary School
          </span>{" "}
          All Rights Reserved. Designed by{" "}
          <span className="text-orange-400 font-semibold">
            ASPIRA TECHNOLOGY
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

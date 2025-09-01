"use client";

import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-500 mb-4">
              TCN Taxi Centrale Nederland
            </h3>
            <p className="text-gray-300 mb-4">
              Professionele taxi diensten in heel Nederland. 24/7 beschikbaar voor al uw vervoersbehoeften.
            </p>
            <div className="flex space-x-4">
              <a
                href="tel:+31612345678"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <FaPhone className="text-xl" />
              </a>
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="mailto:info@tcn-taxi.nl"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Vloot
                </a>
              </li>
              <li>
                <a href="/motor" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Motor Taxi
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Boeken
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <FaPhone className="mr-2 text-yellow-500" />
                <span>+31 6 12345678</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-500" />
                <span>info@tcn-taxi.nl</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-500" />
                <span>Heel Nederland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TCN Taxi Centrale Nederland. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
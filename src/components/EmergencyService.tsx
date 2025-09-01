"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaClock, FaShieldAlt, FaCar, FaExclamationTriangle, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

const emergencyServices = [
  {
    icon: FaClock,
    title: "Immediate Pickup",
    description: "Emergency taxi service available 24/7. We'll be there within 10-15 minutes.",
    responseTime: "10-15 minutes"
  },
  {
    icon: FaShieldAlt,
    title: "Medical Transport",
    description: "Professional medical transport with trained drivers and accessible vehicles.",
    responseTime: "15-20 minutes"
  },
  {
    icon: FaCar,
    title: "Airport Emergency",
    description: "Missed your flight? We'll get you to the airport as fast as possible.",
    responseTime: "10-15 minutes"
  },
  {
    icon: FaExclamationTriangle,
    title: "Breakdown Service",
    description: "Your car broke down? We'll pick you up and take you where you need to go.",
    responseTime: "15-20 minutes"
  }
];

export default function EmergencyService() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-red-900/20 border-t border-red-800/30" id="emergency">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <FaExclamationTriangle className="text-red-500 text-4xl mr-3" />
            <h2 className="text-3xl font-bold">Emergency Taxi Service</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Need a taxi immediately? We provide 24/7 emergency taxi services for urgent situations. 
            Fast, reliable, and professional.
          </p>
        </motion.div>

        {/* Emergency Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {emergencyServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 border border-red-800/30 hover:border-red-600/50 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-red-500">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex items-center text-red-400 font-semibold">
                <FaClock className="mr-2" />
                {service.responseTime}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Emergency Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-8 border border-red-800/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
            <p className="text-gray-300 mb-6">
              For immediate assistance, call our emergency hotline 24/7
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+31201234567"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transition-colors flex items-center"
              >
                <FaPhone className="mr-3" />
                +31 20 123 4567
              </a>
              
              <div className="text-center sm:text-left">
                <p className="text-gray-300 font-semibold">Available 24/7</p>
                <p className="text-gray-400 text-sm">Fast response guaranteed</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaClock className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">24/7 Service</h4>
                <p className="text-gray-400 text-sm">Always available when you need us</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">Amsterdam Area</h4>
                <p className="text-gray-400 text-sm">Covering all of Amsterdam and surroundings</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-2">Safe & Reliable</h4>
                <p className="text-gray-400 text-sm">Licensed drivers and insured vehicles</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Emergency Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4">When to Use Emergency Service</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Medical emergencies and appointments
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Missed flights or urgent travel
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Vehicle breakdowns
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Late night safety concerns
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Urgent business meetings
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Any situation requiring immediate transport
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
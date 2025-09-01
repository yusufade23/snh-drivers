"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaExclamationTriangle, FaCar, FaClock, FaShieldAlt } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'd like to book a taxi ride. Can you help me?");
    window.open(`https://wa.me/31612345678?text=${message}`, '_blank');
  };

  const handleEmergencyClick = () => {
    window.open('tel:+31201234567', '_self');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Premium Taxi</span>
              <span className="block text-yellow-500">Service in</span>
              <span className="block">Amsterdam</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-white">
              <FaClock className="text-yellow-500 text-2xl" />
              <span className="font-semibold">24/7 Service</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <FaShieldAlt className="text-yellow-500 text-2xl" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white">
              <FaCar className="text-yellow-500 text-2xl" />
              <span className="font-semibold">Premium Fleet</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#booking"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <FaCar className="mr-3" />
              Book Your Ride
            </a>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <FaWhatsapp className="mr-3" />
              WhatsApp Direct
            </button>
          </motion.div>

          {/* Emergency Service Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-red-600/20 border border-red-500/30 rounded-lg p-6 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-3">
              <FaExclamationTriangle className="text-red-400 text-2xl" />
              <h3 className="text-xl font-bold text-white">Emergency Service Available</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Need immediate assistance? Call our emergency hotline for fast response.
            </p>
            <button
              onClick={handleEmergencyClick}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center mx-auto"
            >
              <FaPhone className="mr-2" />
              Emergency: +31 20 123 4567
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">24/7</div>
              <div className="text-gray-300">Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">10min</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">100%</div>
              <div className="text-gray-300">Licensed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">4.9★</div>
              <div className="text-gray-300">Rating</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 
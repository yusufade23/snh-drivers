"use client";

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/31201234567?text=Hallo,%20ik%20wil%20graag%20een%20rit%20boeken', '_blank');
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'scale(1.1)', // Slight scale for better coverage
        }}
      />

      {/* Overlay Gradient for better text readability */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
        >
          {t('hero.title').split(',').map((part, index) => (
            <span key={index}>
              {index > 0 && <br />}
              {index === 0 ? part : <span className="text-yellow-500">{part.trim()}</span>}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-lg"
        >
          {t('hero.subtitle')}
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.button.book')}
          </motion.button>

          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="btn-primary text-lg bg-green-600 hover:bg-green-500 flex items-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            {t('hero.button.whatsapp')}
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full p-1 shadow-lg">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-2 h-2 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </div>
  );
} 
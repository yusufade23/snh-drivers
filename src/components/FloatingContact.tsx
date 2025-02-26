"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaHeadset } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+31201234567';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/31201234567?text=Hallo,%20ik%20wil%20graag%20een%20rit%20boeken', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Contact Options */}
      <motion.div
        className="flex flex-col gap-3 mb-4"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0,
          y: isOpen ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onClick={handleCall}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={t('contact.call')}
        >
          <FaPhone className="text-xl" />
          <span className="sr-only">{t('contact.call')}</span>
        </motion.button>
        
        <motion.button
          onClick={handleWhatsApp}
          className="bg-green-600 text-white p-4 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={t('contact.whatsapp')}
        >
          <FaWhatsapp className="text-xl" />
          <span className="sr-only">{t('contact.whatsapp')}</span>
        </motion.button>
      </motion.div>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 text-black p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        aria-label={t('contact.toggle')}
      >
        <FaHeadset className="text-2xl" />
        <span className="sr-only">{t('contact.toggle')}</span>
      </motion.button>
    </div>
  );
} 
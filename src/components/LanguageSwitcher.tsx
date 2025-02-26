"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobeEurope, FaCheck } from 'react-icons/fa';
import { useLanguage, LanguageCode } from '@/context/LanguageContext';

type Language = {
  code: LanguageCode;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (langCode: LanguageCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  // Find current language object
  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg text-gray-200 hover:text-white"
        >
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="hidden md:inline">{currentLanguage.name}</span>
          <FaGlobeEurope className="text-yellow-500" />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50"
            >
              <div className="py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang.code)}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                    {language === lang.code && (
                      <FaCheck className="text-yellow-500" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 
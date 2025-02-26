"use client";

import { FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">SNH Drivers</h3>
            <p className="mb-4 text-gray-400">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#ffffff" }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#ffffff" }}
                className="text-gray-400 hover:text-white text-xl"
              >
                <FaInstagram />
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-500" />
                Amstelveen, Amsterdam
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-yellow-500" />
                <a href="tel:+31201234567" className="hover:text-white">+31 20 123 4567</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-500" />
                <a href="mailto:info@snhdrivers.nl" className="hover:text-white">info@snhdrivers.nl</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">{t('footer.links')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#booking" className="hover:text-white transition-colors">
                  {t('footer.book')}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  {t('footer.services')}
                </Link>
              </li>
              <li>
                <Link href="#business" className="hover:text-white transition-colors">
                  {t('footer.business')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500 text-center">
          <p>© {currentYear} SNH Drivers. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
} 
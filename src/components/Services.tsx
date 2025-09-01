"use client";

import { motion } from "framer-motion";
import { FaCar, FaClock, FaShieldAlt, FaMapMarkedAlt, FaGlobe, FaWifi } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <FaCar className="text-4xl text-yellow-500" />,
      title: t('services.airport.title'),
      description: t('services.airport.description'),
    },
    {
      icon: <FaClock className="text-4xl text-yellow-500" />,
      title: t('services.business.title'),
      description: t('services.business.description'),
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
      title: t('services.private.title'),
      description: t('services.private.description'),
    },
    {
      icon: <FaMapMarkedAlt className="text-4xl text-yellow-500" />,
      title: t('services.area.title'),
      description: t('services.area.description'),
    },
    {
      icon: <FaGlobe className="text-4xl text-yellow-500" />,
      title: t('services.international.title'),
      description: t('services.international.description'),
    },
    {
      icon: <FaWifi className="text-4xl text-yellow-500" />,
      title: t('services.wifi.title'),
      description: t('services.wifi.description'),
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 
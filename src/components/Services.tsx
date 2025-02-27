"use client";

import { motion } from 'framer-motion';
import { TruckIcon, SparklesIcon, StarIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '@/context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t('services.economy.title'),
      description: t('services.economy.description'),
      price: `${t('common.from')} €15`,
      icon: TruckIcon,
      features: ['4 Passagiers', 'Airconditioning', 'GPS Navigatie']
    },
    {
      title: t('services.business.title'),
      description: t('services.business.description'),
      price: `${t('common.from')} €25`,
      icon: SparklesIcon,
      features: ['4 Passagiers', 'Lederen Stoelen', 'Wi-Fi', 'Verfrissingen']
    },
    {
      title: t('services.luxury.title'),
      description: t('services.luxury.description'),
      price: `${t('common.from')} €40`,
      icon: StarIcon,
      features: ['4 Passagiers', 'Premium Interieur', 'Professionele Chauffeur', 'Prioriteitsservice']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('services.title')}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="card group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500">
                <service.icon className="w-6 h-6 text-black" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center text-sm text-gray-300">
                    <svg className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>

              <p className="text-2xl font-bold text-yellow-500">{service.price}</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full btn-primary"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.button.book')}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 
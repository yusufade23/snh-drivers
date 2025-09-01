"use client";

import { motion } from 'framer-motion';
import { FaMotorcycle, FaClock, FaMapMarkerAlt, FaPhone, FaWhatsapp, FaShieldAlt, FaRoute, FaStar } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

const motorServices = [
  {
    icon: FaMotorcycle,
    title: "Urgente Ritten",
    description: "Snelle ophaal voor urgente afspraken of noodgevallen",
    features: ["Binnen 10 minuten", "24/7 beschikbaar", "Prioriteit service", "Snelle routes"]
  },
  {
    icon: FaRoute,
    title: "Zakelijke Express",
    description: "Snelle zakelijke transfers voor belangrijke vergaderingen",
    features: ["Tijdbesparend", "Professioneel", "Betrouwbaar", "Flexibel"]
  },
  {
    icon: FaMapMarkerAlt,
    title: "Express Bezorging",
    description: "Snelle bezorging van belangrijke documenten of pakketten",
    features: ["Veilige bezorging", "Tracking mogelijk", "Snelle levering", "Betrouwbaar"]
  },
  {
    icon: FaStar,
    title: "Motor Tours",
    description: "Unieke motor tours door Amsterdam en omgeving",
    features: ["Toeristische routes", "Ervaren chauffeurs", "Flexibele planning", "Unieke ervaring"]
  }
];

const advantages = [
  {
    icon: FaClock,
    title: "Sneller dan Auto's",
    description: "Sneller door het verkeer heen navigeren"
  },
  {
    icon: FaRoute,
    title: "Flexibele Routes",
    description: "Kunnen door smalle straten en snelle doorstroming"
  },
  {
    icon: FaShieldAlt,
    title: "24/7 Beschikbaarheid",
    description: "Altijd beschikbaar voor urgente ritten"
  },
  {
    icon: FaMotorcycle,
    title: "Milieuvriendelijk",
    description: "Lagere CO2 uitstoot dan auto's"
  }
];

export default function MotorTaxiPage() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hallo! Ik wil graag een motor taxi boeken.");
    window.open(`https://wa.me/31201234567?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:+31201234567', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
                             <Link href="/" className="text-2xl font-bold text-yellow-500">SNH Drivers</Link>
              <nav className="hidden md:flex space-x-6">
                                 <Link href="/#booking" className="text-gray-300 hover:text-yellow-500 transition-colors">
                   {t('nav.book')}
                 </Link>
                 <Link href="/#services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                   {t('nav.services')}
                 </Link>
                 <Link href="/#fleet" className="text-gray-300 hover:text-yellow-500 transition-colors">
                   {t('nav.fleet')}
                 </Link>
                <a href="/motor" className="text-yellow-500 font-semibold">
                  Motor Taxi
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+31201234567"
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                +31 20 123 4567
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-red-600/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center mb-8">
              <FaMotorcycle className="text-8xl text-yellow-500" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('motor.title')}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t('motor.subtitle')}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handlePhoneClick}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <FaPhone className="mr-3" />
                {t('motor.contact')}
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <FaWhatsapp className="mr-3" />
                WhatsApp Direct
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">{t('motor.advantage')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                             Ontdek waarom motor taxi&apos;s de beste keuze zijn voor snelle en efficiënte ritten in Amsterdam
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors"
              >
                <advantage.icon className="text-4xl text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">{t('motor.services')}</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Gespecialiseerde motor taxi diensten voor al uw transportbehoeften
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {motorServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <service.icon className="text-3xl text-yellow-500 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <FaStar className="text-yellow-500 text-sm mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Motor Taxi Tarieven</h2>
            <p className="text-gray-400 text-lg">
              Transparante en concurrerende prijzen voor onze motor taxi service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-bold text-white mb-4">Stadsrit</h3>
              <div className="text-3xl font-bold text-yellow-500 mb-4">€15-25</div>
              <p className="text-gray-300 mb-4">Voor ritten binnen Amsterdam</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Snelle ophaal</li>
                <li>• Flexibele routes</li>
                <li>• 24/7 beschikbaar</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-yellow-500 p-6 rounded-lg text-center transform scale-105"
            >
              <h3 className="text-xl font-bold text-black mb-4">Urgente Rit</h3>
              <div className="text-3xl font-bold text-black mb-4">€25-40</div>
              <p className="text-black mb-4">Voor urgente afspraken</p>
              <ul className="text-sm text-black space-y-2">
                <li>• Binnen 10 minuten</li>
                <li>• Prioriteit service</li>
                <li>• Snelle routes</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <h3 className="text-xl font-bold text-white mb-4">Luchthaven</h3>
              <div className="text-3xl font-bold text-yellow-500 mb-4">€35-50</div>
              <p className="text-gray-300 mb-4">Naar Schiphol Airport</p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Betrouwbaar</li>
                <li>• Tijdbesparend</li>
                <li>• Professioneel</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Klaar voor een Snelle Rit?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Boek nu uw motor taxi en ervaar het verschil in snelheid en efficiëntie
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handlePhoneClick}
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <FaPhone className="mr-3" />
                Bel Direct: +31 20 123 4567
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                <FaWhatsapp className="mr-3" />
                WhatsApp Boeken
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
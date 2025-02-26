"use client";

import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaBuilding, 
  FaHandshake, 
  FaRegCreditCard, 
  FaUserTie, 
  FaPaperPlane,
  FaCalendarAlt
} from 'react-icons/fa';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function BusinessTravel() {
  const [activeTab, setActiveTab] = useState('services');
  const { t } = useLanguage();

  const BUSINESS_SERVICES = [
    {
      title: 'Zakelijke Accounts',
      description: 'Maandelijkse facturering, gereserveerde voertuigen en prioriteitsservice voor uw bedrijf',
      icon: FaBuilding
    },
    {
      title: 'Roadshows',
      description: 'Meerdere stops en wachtservice voor zakenreizen en klantbezoeken',
      icon: FaHandshake
    },
    {
      title: 'Evenementen & Congressen',
      description: 'Groepsvervoer voor zakelijke evenementen, vergaderingen en conferenties',
      icon: FaCalendarAlt
    },
    {
      title: 'Zuidas Express',
      description: 'Snelle en betrouwbare service naar het financiële district van Amsterdam',
      icon: FaBriefcase
    }
  ];

  const BUSINESS_DISTRICTS = [
    { 
      name: 'Zuidas', 
      description: 'Amsterdams belangrijkste financiële district',
      companies: 'ABN AMRO, AkzoNobel, ING' 
    },
    { 
      name: 'Amsterdam Noord', 
      description: 'Opkomend innovatiedistrict',
      companies: 'NDSM Werf, Eye Filmmuseum, A\'DAM Toren' 
    },
    { 
      name: 'Amstel Business Park', 
      description: 'Moderne kantoorlocatie',
      companies: 'Diverse kantoren en vergadercentra' 
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-900" id="business">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">{t('business.title')}</h2>
          <p className="text-gray-400 text-center mb-12">
            {t('business.subtitle')}
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'services' 
                    ? 'bg-yellow-500 text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('business.tab.services')}
              </button>
              <button
                onClick={() => setActiveTab('districts')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'districts' 
                    ? 'bg-yellow-500 text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('business.tab.districts')}
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === 'contact' 
                    ? 'bg-yellow-500 text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {t('business.tab.contact')}
              </button>
            </div>
          </div>

          {/* Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {BUSINESS_SERVICES.map((service) => (
                <motion.div
                  key={service.title}
                  whileHover={{ scale: 1.02 }}
                  className="card"
                >
                  <service.icon className="text-yellow-500 text-3xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Districts Tab */}
          {activeTab === 'districts' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BUSINESS_DISTRICTS.map((district) => (
                  <motion.div
                    key={district.name}
                    whileHover={{ scale: 1.05 }}
                    className="card"
                  >
                    <h3 className="text-xl font-semibold mb-2">{district.name}</h3>
                    <p className="text-gray-400 mb-2">{district.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <FaBuilding className="text-yellow-500" />
                      <span>{district.companies}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Waarom kiezen bedrijven voor SNH Drivers?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <FaRegCreditCard className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Maandelijkse facturering en zakelijke betalingsopties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaUserTie className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Professionele, discreet geklede chauffeurs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaCalendarAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Mogelijkheid tot vooraf boeken of op afroep</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaPaperPlane className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Vaste routes naar alle belangrijke zakelijke locaties</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Vraag een zakelijke offerte aan</h3>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Bedrijfsnaam</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Uw bedrijfsnaam"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Contactpersoon</label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Naam van contactpersoon"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="zakelijk@email.nl"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefoonnummer</label>
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="+31 20 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Bericht</label>
                    <textarea
                      className="input-field min-h-[120px]"
                      placeholder="Vertel ons over uw zakelijke transportbehoeften"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="btn-primary w-full"
                  >
                    {t('common.submit')}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 
"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaUsers, FaWifi, FaSuitcase, FaSnowflake, FaGlassMartiniAlt, FaMusic, FaChargingStation, FaLeaf, FaMotorcycle } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

type Vehicle = {
  id: number;
  name: string;
  category: string;
  image: string;
  features: string[];
  icons: React.ReactNode[];
};

export default function FleetGallery() {
  const [selectedVehicle, setSelectedVehicle] = useState<number>(1);
  const { t } = useLanguage();
  
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Mercedes E-Class",
      category: t('fleet.business'),
      image: "/fleet/mercedes-e.jpg",
      features: [
        "4 Passagiers",
        "3 Koffers",
        "Comfort",
        "Wi-Fi"
      ],
      icons: [<FaUsers key="users" />, <FaSuitcase key="luggage" />, <FaWifi key="wifi" />, <FaSnowflake key="ac" />]
    },
    {
      id: 2,
      name: "BMW 5 Series",
      category: t('fleet.business'),
      image: "/fleet/bmw-5.jpg",
      features: [
        "4 Passagiers",
        "3 Koffers",
        "Lederen Stoelen",
        "Wi-Fi"
      ],
      icons: [<FaUsers key="users" />, <FaSuitcase key="luggage" />, <FaWifi key="wifi" />, <FaSnowflake key="ac" />]
    },
    {
      id: 3,
      name: "Mercedes V-Class",
      category: t('fleet.luxury'),
      image: "/fleet/mercedes-v.jpg",
      features: [
        "7 Passagiers",
        "6 Koffers",
        "Panoramadak",
        "Drankjes"
      ],
      icons: [<FaUsers key="users" />, <FaSuitcase key="luggage" />, <FaGlassMartiniAlt key="drinks" />, <FaMusic key="entertainment" />]
    },
    {
      id: 4,
      name: "Tesla Model S",
      category: t('fleet.eco'),
      image: "/fleet/tesla-s.jpg",
      features: [
        "5 Passagiers",
        "2 Koffers",
        "Elektrisch",
        "Autopilot"
      ],
      icons: [<FaUsers key="users" />, <FaSuitcase key="luggage" />, <FaChargingStation key="electric" />, <FaLeaf key="eco" />]
    },
    {
      id: 5,
      name: "Motor Taxi",
      category: t('fleet.motor'),
      image: "/fleet/motor-taxi.jpg",
      features: [
        "1-2 Passagiers",
        "Snelle Service",
        "Flexibele Routes",
        "24/7 Beschikbaar"
      ],
      icons: [<FaMotorcycle key="motor" />, <FaUsers key="users" />, <FaSnowflake key="speed" />, <FaLeaf key="eco" />]
    }
  ];

  const selectedVehicleData = vehicles.find(v => v.id === selectedVehicle) || vehicles[0];

  return (
    <section className="py-16 px-4 bg-gray-800" id="fleet">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('fleet.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Vehicle Images */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {vehicles.map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  className={`relative overflow-hidden rounded-lg cursor-pointer transition-all ${
                    selectedVehicle === vehicle.id ? "ring-2 ring-yellow-500" : ""
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedVehicle(vehicle.id)}
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="object-cover"
                      width={300}
                      height={170}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <p className="text-white font-medium">{vehicle.name}</p>
                    <p className="text-xs text-gray-300">{vehicle.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Vehicle Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={selectedVehicleData.id}
            className="p-6 bg-gray-900 rounded-lg"
          >
            <h3 className="text-2xl font-bold">{selectedVehicleData.name}</h3>
            <p className="text-yellow-500 font-medium mb-6">{selectedVehicleData.category}</p>
            
            <div className="space-y-4 mb-6">
              {selectedVehicleData.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-yellow-500 mr-3">
                    {selectedVehicleData.icons[index]}
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('fleet.button')}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRoute, FaClock, FaCarSide } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

type VehicleType = 'economy' | 'business' | 'luxury';

const RATES = {
  economy: { base: 2.50, perKm: 2.00, speed: 40 }, // €/km, km/h
  business: { base: 5.00, perKm: 2.50, speed: 40 },
  luxury: { base: 10.00, perKm: 3.00, speed: 40 }
};

const BASE_RATE = {
  economy: 15,
  business: 25,
  luxury: 40
};

const COMMON_DESTINATIONS = [
  { name: 'Schiphol Airport', distance: 20 },
  { name: 'Amsterdam Centraal', distance: 3 },
  { name: 'RAI Amsterdam', distance: 5 },
  { name: 'Johan Cruijff ArenA', distance: 8 },
  { name: 'World Trade Center', distance: 4 },
  { name: 'Zuidas', distance: 6 }
];

export default function PriceCalculator() {
  const [distance, setDistance] = useState<number>(5);
  const [vehicleType, setVehicleType] = useState<VehicleType>('economy');
  const [price, setPrice] = useState<number>(0);
  const [time, setTime] = useState<number>(0);
  const { t } = useLanguage();

  useEffect(() => {
    calculatePrice();
  }, [distance, vehicleType]);

  const calculatePrice = () => {
    const rate = RATES[vehicleType];
    const calculatedPrice = BASE_RATE[vehicleType] + (distance * rate.perKm);
    const travelTime = (distance / rate.speed) * 60; // in minutes
    
    setPrice(parseFloat(calculatedPrice.toFixed(2)));
    setTime(Math.round(travelTime));
  };

  const handleDistanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setDistance(value);
    }
  };

  const handleVehicleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVehicleType(e.target.value as VehicleType);
  };

  return (
    <section className="py-16 px-4 bg-gray-900" id="calculator">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          {t('calculator.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t('calculator.distance')}
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={distance}
                  onChange={handleDistanceChange}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <span className="ml-4 w-16 text-center font-medium">
                  {distance} km
                </span>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">Populaire Bestemmingen</label>
                <div className="grid grid-cols-2 gap-2">
                  {COMMON_DESTINATIONS.map((dest) => (
                    <button
                      key={dest.name}
                      onClick={() => setDistance(dest.distance)}
                      className="p-2 text-sm bg-gray-800 hover:bg-gray-700 rounded-lg transition-all text-left"
                    >
                      <div className="font-medium">{dest.name}</div>
                      <div className="text-gray-400 text-xs">{dest.distance} km</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                {t('calculator.vehicle')}
              </label>
              <select
                value={vehicleType}
                onChange={handleVehicleChange}
                className="bg-gray-700 border border-gray-600 text-white rounded-lg block w-full p-2.5 focus:ring-yellow-500 focus:border-yellow-500"
              >
                <option value="economy">{t('services.economy.title')}</option>
                <option value="business">{t('services.business.title')}</option>
                <option value="luxury">{t('services.luxury.title')}</option>
              </select>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 mb-1">{t('calculator.estimate')}</p>
                <div className="flex items-center gap-2">
                  <FaClock className="text-yellow-500" />
                  <span className="text-sm text-gray-400">
                    {t('calculator.time')}: {time} {t('calculator.minutes')}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-yellow-500">
                  €{price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-400">{t('calculator.vat')}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <p>{t('calculator.disclaimer1')}</p>
            <p>{t('calculator.disclaimer2')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
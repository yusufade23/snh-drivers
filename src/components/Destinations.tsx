"use client";

import { motion } from 'framer-motion';
import { FaPlane, FaClock, FaInfoCircle } from 'react-icons/fa';

const AIRPORT_SERVICES = [
  {
    title: 'Meet & Greet',
    description: 'Persoonlijke ontvangst bij de gate met naambord',
    price: 'Inclusief',
    icon: FaPlane
  },
  {
    title: 'Bagage Assistentie',
    description: 'Hulp met uw bagage van en naar de auto',
    price: 'Inclusief',
    icon: FaInfoCircle
  },
  {
    title: 'Flight Monitoring',
    description: 'Wij monitoren uw vlucht voor eventuele vertragingen',
    price: 'Inclusief',
    icon: FaClock
  }
];

const TOURIST_DESTINATIONS = [
  {
    name: 'Keukenhof Gardens',
    distance: 40,
    duration: '45 min',
    price: 95,
    description: 'Wereldberoemde tulpentuinen, open van maart tot mei'
  },
  {
    name: 'Zaanse Schans',
    distance: 25,
    duration: '30 min',
    price: 75,
    description: 'Historische windmolens en traditionele Nederlandse architectuur'
  },
  {
    name: 'Volendam',
    distance: 30,
    duration: '35 min',
    price: 85,
    description: 'Schilderachtig vissersdorp met traditionele Nederlandse cultuur'
  },
  {
    name: 'Marken',
    distance: 35,
    duration: '40 min',
    price: 90,
    description: 'Authentiek schiereiland met historische houten huizen'
  }
];

export default function Destinations() {
  return (
    <section className="py-16 px-4 bg-black" id="destinations">
      <div className="max-w-6xl mx-auto">
        {/* Airport Transfer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Schiphol Airport Transfer</h2>
          <p className="text-gray-400 text-center mb-12">Comfortabele en betrouwbare luchthaventransfers</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AIRPORT_SERVICES.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05 }}
                className="card"
              >
                <service.icon className="text-yellow-500 text-3xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-yellow-500 font-semibold">{service.price}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Schiphol Service Highlights</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <FaInfoCircle className="text-yellow-500" />
                Vaste prijs vanaf €60 (enkele rit)
              </li>
              <li className="flex items-center gap-2">
                <FaInfoCircle className="text-yellow-500" />
                24/7 beschikbaar
              </li>
              <li className="flex items-center gap-2">
                <FaInfoCircle className="text-yellow-500" />
                Gratis wachttijd bij vertragingen
              </li>
              <li className="flex items-center gap-2">
                <FaInfoCircle className="text-yellow-500" />
                Luxe voertuigen met airco
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Tourist Destinations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-4">Toeristische Bestemmingen</h2>
          <p className="text-gray-400 text-center mb-12">Ontdek de mooiste plekken rond Amsterdam</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOURIST_DESTINATIONS.map((dest) => (
              <motion.div
                key={dest.name}
                whileHover={{ scale: 1.02 }}
                className="card"
              >
                <h3 className="text-xl font-semibold mb-2">{dest.name}</h3>
                <p className="text-gray-400 mb-4">{dest.description}</p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Afstand</p>
                    <p className="font-semibold">{dest.distance} km</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Reistijd</p>
                    <p className="font-semibold">{dest.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Vanaf</p>
                    <p className="font-semibold text-yellow-500">€{dest.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-800 rounded-lg text-center">
            <p className="text-gray-300 mb-4">
              Wilt u een op maat gemaakte dagtour langs meerdere bestemmingen?
              Neem contact met ons op voor een persoonlijke offerte.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Plan Uw Tour
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
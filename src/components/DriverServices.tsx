"use client";

import { motion } from 'framer-motion';
import { FaGraduationCap, FaHandshake, FaEuroSign, FaShieldAlt, FaClock, FaUsers, FaChartLine } from 'react-icons/fa';
// import { useLanguage } from '@/context/LanguageContext';

const driverServices = [
  {
    icon: FaHandshake,
    title: "Driver Partnership",
    description: "Join our network of professional drivers. We offer flexible schedules and competitive earnings.",
    features: ["Flexible working hours", "Competitive commission rates", "Weekly payments", "Professional support"]
  },
  {
    icon: FaGraduationCap,
    title: "Training & Certification",
    description: "Comprehensive training program to ensure you meet all legal requirements and provide excellent service.",
    features: ["Taxi license preparation", "Customer service training", "Safety protocols", "Navigation skills"]
  },
  {
    icon: FaShieldAlt,
    title: "Insurance & Protection",
    description: "Full insurance coverage and legal protection for all our drivers.",
    features: ["Comprehensive insurance", "Legal support", "Accident coverage", "Liability protection"]
  },
  {
    icon: FaEuroSign,
    title: "Earnings & Benefits",
    description: "Transparent earnings structure with bonuses and incentives for quality service.",
    features: ["Transparent commission", "Performance bonuses", "Weekly payments", "Tax assistance"]
  },
  {
    icon: FaClock,
    title: "Flexible Scheduling",
    description: "Work when you want - choose your own hours and availability.",
    features: ["Choose your hours", "Part-time options", "Full-time positions", "Weekend availability"]
  },
  {
    icon: FaUsers,
    title: "Support Network",
    description: "24/7 support and community of professional drivers to help you succeed.",
    features: ["24/7 driver support", "Driver community", "Mentorship program", "Technical assistance"]
  }
];

const requirements = [
  "Valid driver's license (minimum 2 years)",
  "Clean driving record",
  "Taxi license (we help you obtain)",
  "Professional appearance",
  "Good communication skills",
  "Reliable vehicle (or we can help arrange one)"
];

const benefits = [
  "Earn €25-45 per hour depending on experience",
  "Keep 70-80% of fare revenue",
  "Weekly payments via bank transfer",
  "Flexible working hours",
  "Professional training and support",
  "Insurance and legal protection",
  "Modern booking app and GPS system",
  "Regular bonuses and incentives"
];

export default function DriverServices() {
  // const { t } = useLanguage();

  return (
    <section className="py-16 px-4 bg-gray-900" id="driver-services">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Driver Team</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Become part of Amsterdam&apos;s premier taxi service. We&apos;re looking for professional, 
            reliable drivers to join our growing team.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {driverServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-yellow-500">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Requirements and Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaShieldAlt className="mr-3 text-yellow-500" />
              Requirements
            </h3>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">{requirement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <FaChartLine className="mr-3 text-yellow-500" />
              Benefits
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Start your journey as a professional taxi driver with SNH Drivers. 
              We provide everything you need to succeed in the taxi industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@snhdrivers.nl?subject=Driver Application"
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Apply Now
              </a>
              <a
                href="tel:+31201234567"
                className="border border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-colors"
              >
                Call Us: +31 20 123 4567
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
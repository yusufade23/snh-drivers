"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sophie van der Berg",
      role: t('testimonials.role.business'),
      rating: 5,
      text: t('testimonials.1.text')
    },
    {
      id: 2,
      name: "Jan de Vries",
      role: t('testimonials.role.customer'),
      rating: 5,
      text: t('testimonials.2.text')
    },
    {
      id: 3,
      name: "Thomas Mueller",
      role: t('testimonials.role.tourist'),
      rating: 5,
      text: t('testimonials.3.text')
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-16 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          {t('testimonials.title')}
        </motion.h2>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`${index === activeIndex ? 'block' : 'hidden'}`}
            >
              <div className="bg-gray-800 p-8 rounded-xl relative shadow-xl">
                <div className="absolute -top-6 left-8 text-3xl text-yellow-500">
                  <FaQuoteLeft />
                </div>
                <p className="text-gray-300 italic mb-6 mt-4">{testimonial.text}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                  
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < testimonial.rating ? 'text-yellow-500' : 'text-gray-600'} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all ${
                index === activeIndex ? 'bg-yellow-500 w-8' : 'bg-gray-600'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 
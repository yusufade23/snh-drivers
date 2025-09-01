"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaMapMarkerAlt, FaClock, FaUser, FaCar, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';
import toast from 'react-hot-toast';

const bookingSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  customerEmail: z.string().email('Please enter a valid email'),
  customerPhone: z.string().min(10, 'Please enter a valid phone number'),
  pickupAddress: z.string().min(5, 'Please enter pickup address'),
  dropoffAddress: z.string().min(5, 'Please enter destination address'),
  pickupTime: z.string().min(1, 'Please select pickup time'),
  passengers: z.number().min(1).max(8),
  vehicleType: z.enum(['economy', 'business', 'luxury', 'van']),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      passengers: 1,
      vehicleType: 'economy',
    }
  });

  const watchedVehicleType = watch('vehicleType');
  const watchedPickupAddress = watch('pickupAddress');
  const watchedDropoffAddress = watch('dropoffAddress');

  // Simple price calculation
  const calculatePrice = () => {
    const basePrices = {
      economy: 15,
      business: 25,
      luxury: 40,
      van: 30
    };
    
    // Simple distance estimation (you can integrate with Google Maps API later)
    const basePrice = basePrices[watchedVehicleType as keyof typeof basePrices];
    return basePrice + 15; // Add some buffer for distance
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          estimatedPrice: calculatePrice()
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Booking request sent successfully! We\'ll contact you shortly.');
        reset();
      } else {
        toast.error(result.error || 'Failed to send booking request. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-800" id="booking">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Book Your Taxi</h2>
          <p className="text-gray-400 text-lg">
            Quick and easy booking - we'll confirm your ride within minutes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Customer Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaUser className="inline mr-2" />
                  Full Name *
                </label>
                <input
                  {...register('customerName')}
                  type="text"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Your full name"
                />
                {errors.customerName && (
                  <p className="text-red-500 text-sm mt-1">{errors.customerName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaEnvelope className="inline mr-2" />
                  Email *
                </label>
                <input
                  {...register('customerEmail')}
                  type="email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="your@email.com"
                />
                {errors.customerEmail && (
                  <p className="text-red-500 text-sm mt-1">{errors.customerEmail.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaPhone className="inline mr-2" />
                  Phone *
                </label>
                <input
                  {...register('customerPhone')}
                  type="tel"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="+31 6 12345678"
                />
                {errors.customerPhone && (
                  <p className="text-red-500 text-sm mt-1">{errors.customerPhone.message}</p>
                )}
              </div>
            </div>

            {/* Trip Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaMapMarkerAlt className="inline mr-2" />
                  Pickup Address *
                </label>
                <input
                  {...register('pickupAddress')}
                  type="text"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Pickup location"
                />
                {errors.pickupAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.pickupAddress.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaMapMarkerAlt className="inline mr-2" />
                  Destination *
                </label>
                <input
                  {...register('dropoffAddress')}
                  type="text"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                  placeholder="Where to?"
                />
                {errors.dropoffAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.dropoffAddress.message}</p>
                )}
              </div>
            </div>

            {/* Time and Vehicle */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaClock className="inline mr-2" />
                  Pickup Time *
                </label>
                <input
                  {...register('pickupTime')}
                  type="datetime-local"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                />
                {errors.pickupTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.pickupTime.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaUser className="inline mr-2" />
                  Passengers
                </label>
                <select
                  {...register('passengers', { valueAsNumber: true })}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'passenger' : 'passengers'}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  <FaCar className="inline mr-2" />
                  Vehicle Type
                </label>
                <select
                  {...register('vehicleType')}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                >
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="luxury">Luxury</option>
                  <option value="van">Van (6-8 passengers)</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Special Requests
              </label>
              <textarea
                {...register('specialRequests')}
                rows={3}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-yellow-500 focus:border-yellow-500"
                placeholder="Any special requirements? (wheelchair, child seat, etc.)"
              />
            </div>

            {/* Price Estimate */}
            {(watchedPickupAddress && watchedDropoffAddress) && (
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Estimated Price:</span>
                  <span className="text-2xl font-bold text-yellow-500">€{calculatePrice()}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  * Final price may vary based on actual distance and traffic conditions
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending Request...' : 'Book Now'}
              </button>
            </div>

            <div className="text-center text-sm text-gray-400">
              <p>We'll contact you within 5 minutes to confirm your booking</p>
              <p className="mt-2">
                Need immediate assistance? Call us: <span className="text-yellow-500">+31 20 123 4567</span>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 
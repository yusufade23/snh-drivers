"use client";

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { nl, enUS, de } from 'date-fns/locale';
import { useLanguage } from '@/context/LanguageContext';

type FormInputs = {
  name: string;
  pickupLocation: string;
  dropoffLocation: string;
  contactNumber: string;
};

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const { t, language } = useLanguage();

  // Select appropriate date-fns locale based on current language
  const dateLocale = {
    'nl': nl,
    'en': enUS,
    'de': de
  }[language] || nl;

  const onSubmit = (data: FormInputs) => {
    console.log({ ...data, dateTime: selectedDate });
    // Handle form submission
  };

  return (
    <section id="booking" className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-center mb-8">{t('booking.title')}</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.name')}</label>
              <input
                {...register("name", { required: t('booking.name') + " is required" })}
                className="input-field"
                placeholder={t('booking.name')}
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
              )}
            </div>

            {/* Contact Number Input */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.phone')}</label>
              <input
                {...register("contactNumber", {
                  required: t('booking.phone') + " is required",
                  pattern: {
                    value: /^[0-9+-]+$/,
                    message: "Please enter a valid phone number"
                  }
                })}
                className="input-field"
                placeholder={t('booking.phone')}
              />
              {errors.contactNumber && (
                <span className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</span>
              )}
            </div>

            {/* Pickup Location */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.pickup')}</label>
              <input
                {...register("pickupLocation", { required: t('booking.pickup') + " is required" })}
                className="input-field"
                placeholder={t('booking.pickup')}
              />
              {errors.pickupLocation && (
                <span className="text-red-500 text-sm mt-1">{errors.pickupLocation.message}</span>
              )}
            </div>

            {/* Dropoff Location */}
            <div>
              <label className="block text-sm font-medium mb-2">{t('booking.dropoff')}</label>
              <input
                {...register("dropoffLocation", { required: t('booking.dropoff') + " is required" })}
                className="input-field"
                placeholder={t('booking.dropoff')}
              />
              {errors.dropoffLocation && (
                <span className="text-red-500 text-sm mt-1">{errors.dropoffLocation.message}</span>
              )}
            </div>

            {/* Date & Time Picker */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">{t('booking.datetime')}</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showTimeSelect
                locale={dateLocale}
                dateFormat="d MMMM yyyy HH:mm"
                className="input-field"
                placeholderText={t('booking.datetime')}
                minDate={new Date()}
                required
              />
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn-primary w-full md:w-auto md:mx-auto md:px-12 block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('booking.button')}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
} 
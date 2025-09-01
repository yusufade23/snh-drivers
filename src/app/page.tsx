"use client";

import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Services from "@/components/Services";
import BusinessTravel from "@/components/BusinessTravel";
import PriceCalculator from "@/components/PriceCalculator";
import FleetGallery from "@/components/FleetGallery";
import DriverServices from "@/components/DriverServices";
import EmergencyService from "@/components/EmergencyService";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FloatingContact from "@/components/FloatingContact";
import CookieConsent from "@/components/CookieConsent";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-yellow-500">SNH Drivers</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#booking" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Book Now
                </a>
                <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Services
                </a>
                <a href="#fleet" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Fleet
                </a>
                <a href="#calculator" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Pricing
                </a>
                <a href="#emergency" className="text-gray-300 hover:text-red-400 transition-colors">
                  Emergency
                </a>
                <a href="#driver-services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Join Us
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              
              <div className="flex items-center space-x-3">
                <a
                  href="tel:+31201234567"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  +31 20 123 4567
                </a>
                <a
                  href="#booking"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <BookingForm />
        <Services />
        <PriceCalculator />
        <FleetGallery />
        <EmergencyService />
        <DriverServices />
        <BusinessTravel />
        <Testimonials />
      </main>

      <Footer />
      <FloatingContact />
      <CookieConsent />
      
      {/* Hidden Admin Link */}
      <div className="fixed bottom-4 left-4 opacity-20 hover:opacity-100 transition-opacity">
        <a 
          href="/admin" 
          className="text-xs text-gray-400 hover:text-yellow-500"
          title="Admin Dashboard"
        >
          Admin
        </a>
      </div>
    </div>
  );
}

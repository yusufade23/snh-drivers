"use client";

import { useSession } from "next-auth/react";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Services from "@/components/Services";
import BusinessTravel from "@/components/BusinessTravel";
import PriceCalculator from "@/components/PriceCalculator";
import FleetGallery from "@/components/FleetGallery";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import FloatingContact from "@/components/FloatingContact";
import CookieConsent from "@/components/CookieConsent";
import Testimonials from "@/components/Testimonials";
import { FaUser, FaCar, FaSignOutAlt } from "react-icons/fa";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-yellow-500">SNH Drivers</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#services" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Services
                </a>
                <a href="#fleet" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Fleet
                </a>
                <a href="#calculator" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Pricing
                </a>
                <a href="#business" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Business
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageSwitcher />
              
              {session ? (
                <div className="flex items-center space-x-3">
                  {session.user?.role === "DRIVER" ? (
                    <a
                      href="/driver"
                      className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                      <FaCar />
                      <span>Driver Dashboard</span>
                    </a>
                  ) : (
                    <a
                      href="/dashboard"
                      className="flex items-center space-x-2 bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                      <FaUser />
                      <span>My Account</span>
                    </a>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <FaSignOutAlt />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <a
                    href="/auth/signin"
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    Sign In
                  </a>
                  <a
                    href="/auth/signup"
                    className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
                  >
                    Sign Up
                  </a>
                </div>
              )}
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
        <BusinessTravel />
        <Testimonials />
      </main>

      <Footer />
      <FloatingContact />
      <CookieConsent />
    </div>
  );
}

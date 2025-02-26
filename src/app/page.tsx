import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import Services from '@/components/Services';
import BusinessTravel from '@/components/BusinessTravel';
import PriceCalculator from '@/components/PriceCalculator';
import FleetGallery from '@/components/FleetGallery';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import FloatingContact from '@/components/FloatingContact';
import CookieConsent from '@/components/CookieConsent';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <LanguageSwitcher />
      <Hero />
      <BookingForm />
      <Services />
      <PriceCalculator />
      <FleetGallery />
      <BusinessTravel />
      <Testimonials />
      <Footer />
      <FloatingContact />
      <CookieConsent />
    </main>
  );
}

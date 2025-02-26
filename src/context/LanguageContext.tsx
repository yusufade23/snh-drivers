"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type LanguageCode = 'nl' | 'en' | 'de';

// Define interface for translation parameters
interface TranslationParams {
  [key: string]: string | number;
}

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: (key: string, params?: TranslationParams) => string;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations: Record<LanguageCode, Record<string, string>> = {
  nl: {
    // Hero section
    'hero.title': 'Reis in Comfort, Arriveer in Stijl',
    'hero.subtitle': 'Ervaar luxe vervoer op zijn best met SNH Drivers',
    'hero.button.book': 'Boek een Rit',
    'hero.button.whatsapp': 'WhatsApp Direct',
    
    // Booking form
    'booking.title': 'Boek Uw Rit',
    'booking.name': 'Naam',
    'booking.phone': 'Telefoonnummer',
    'booking.pickup': 'Ophaallocatie',
    'booking.dropoff': 'Bestemming',
    'booking.datetime': 'Datum & Tijd',
    'booking.button': 'Nu Boeken',
    
    // Services
    'services.title': 'Onze Diensten',
    'services.economy.title': 'Economisch',
    'services.economy.description': 'Betaalbaar en betrouwbaar vervoer voor uw dagelijkse ritten',
    'services.business.title': 'Business',
    'services.business.description': 'Premium comfort voor zakelijke professionals',
    'services.luxury.title': 'Luxe',
    'services.luxury.description': 'Eersteklas ervaring met topklasse voertuigen',
    
    // Airport transfers
    'airport.title': 'Schiphol Airport Transfer',
    'airport.subtitle': 'Comfortabele en betrouwbare luchthaventransfers',
    
    // Destinations
    'destinations.title': 'Toeristische Bestemmingen',
    'destinations.subtitle': 'Ontdek de mooiste plekken rond Amsterdam',
    
    // Business travel
    'business.title': 'Zakelijk Vervoer',
    'business.subtitle': 'Premium taxidiensten voor uw bedrijf in Amsterdam en omgeving',
    'business.tab.services': 'Diensten',
    'business.tab.districts': 'Zakelijke Districten',
    'business.tab.contact': 'Zakelijke Offerte',
    
    // Fleet
    'fleet.title': 'Onze Voertuigen',
    'fleet.business': 'Business',
    'fleet.luxury': 'Luxe',
    'fleet.eco': 'Eco',
    'fleet.features.passengers': '{count} Passagiers',
    'fleet.features.luggage': '{count} Stuks Bagage',
    'fleet.features.comfort': 'Klimaatcontrole',
    'fleet.features.wifi': 'Gratis Wi-Fi',
    'fleet.features.leather': 'Lederen Interieur',
    'fleet.features.panoramic': 'Panoramadak',
    'fleet.features.drinks': 'Verfrissingen',
    'fleet.features.electric': '100% Elektrisch',
    'fleet.features.autopilot': 'Autopilot',
    'fleet.button': 'Reserveer Dit Voertuig',
    
    // Calculator
    'calculator.title': 'Bereken Uw Ritprijs',
    'calculator.distance': 'Geschatte Afstand (km)',
    'calculator.vehicle': 'Type Voertuig',
    'calculator.estimate': 'Geschatte Kosten',
    'calculator.price': 'Verwachte Prijs',
    'calculator.time': 'Reistijd',
    'calculator.minutes': 'min',
    'calculator.disclaimer': 'Prijzen zijn indicatief. Exacte tarieven kunnen variëren op basis van verkeer, wachttijd en andere factoren.',
    'calculator.book': 'Boek Tegen Dit Tarief',
    
    // Contact
    'contact.call': 'Bel direct',
    'contact.whatsapp': 'WhatsApp',
    'contact.toggle': 'Contact opties',
    
    // Cookie Consent
    'cookies.message': 'Wij gebruiken cookies om uw ervaring op onze website te verbeteren. Door gebruik te maken van onze website gaat u akkoord met ons privacybeleid.',
    'cookies.privacy': 'Privacybeleid',
    'cookies.accept': 'Accepteren',
    
    // Footer
    'footer.tagline': 'Ervaar luxe vervoer op zijn best. 24/7 beschikbaar voor uw comfort en gemak.',
    'footer.contact': 'Contact',
    'footer.links': 'Snelle Links',
    'footer.book': 'Boek een Rit',
    'footer.services': 'Onze Diensten',
    'footer.business': 'Zakelijk Vervoer',
    'footer.privacy': 'Privacybeleid',
    'footer.terms': 'Algemene Voorwaarden',
    'footer.rights': 'Alle rechten voorbehouden',
    
    // Testimonials
    'testimonials.title': 'Wat Onze Klanten Zeggen',
    'testimonials.role.business': 'Zakelijke Reiziger',
    'testimonials.role.customer': 'Vaste Klant',
    'testimonials.role.tourist': 'Toerist uit Duitsland',
    'testimonials.1.text': 'De service is uitzonderlijk. De chauffeurs zijn altijd op tijd, professioneel en behulpzaam. De voertuigen zijn luxueus en brandschoon. Perfect voor zakelijke bijeenkomsten!',
    'testimonials.2.text': 'Al meer dan een jaar gebruik ik hun taxidiensten voor mijn woon-werkverkeer. Betrouwbaar, punctueel en altijd met een glimlach. Zeer aanbevolen!',
    'testimonials.3.text': 'Als toerist in Amsterdam was deze taxiservice een zegen. De chauffeur was ook een geweldige gids die ons de beste plekken in de stad liet zien. Een onvergetelijke ervaring!',
    
    // Common
    'common.from': 'Vanaf',
    'common.included': 'Inclusief',
    'common.submit': 'Verstuur',
  },
  
  en: {
    // Hero section
    'hero.title': 'Travel in Comfort, Arrive in Style',
    'hero.subtitle': 'Experience luxury transportation at its best with SNH Drivers',
    'hero.button.book': 'Book a Ride',
    'hero.button.whatsapp': 'WhatsApp Direct',
    
    // Booking form
    'booking.title': 'Book Your Ride',
    'booking.name': 'Name',
    'booking.phone': 'Phone Number',
    'booking.pickup': 'Pickup Location',
    'booking.dropoff': 'Destination',
    'booking.datetime': 'Date & Time',
    'booking.button': 'Book Now',
    
    // Services
    'services.title': 'Our Services',
    'services.economy.title': 'Economy',
    'services.economy.description': 'Affordable and reliable transportation for your daily rides',
    'services.business.title': 'Business',
    'services.business.description': 'Premium comfort for business professionals',
    'services.luxury.title': 'Luxury',
    'services.luxury.description': 'First-class experience with top-tier vehicles',
    
    // Airport transfers
    'airport.title': 'Schiphol Airport Transfer',
    'airport.subtitle': 'Comfortable and reliable airport transfers',
    
    // Destinations
    'destinations.title': 'Tourist Destinations',
    'destinations.subtitle': 'Discover the most beautiful places around Amsterdam',
    
    // Business travel
    'business.title': 'Business Travel',
    'business.subtitle': 'Premium taxi services for your company in Amsterdam and surroundings',
    'business.tab.services': 'Services',
    'business.tab.districts': 'Business Districts',
    'business.tab.contact': 'Business Quote',
    
    // Fleet
    'fleet.title': 'Our Vehicles',
    'fleet.business': 'Business',
    'fleet.luxury': 'Luxury',
    'fleet.eco': 'Eco',
    'fleet.features.passengers': '{count} Passengers',
    'fleet.features.luggage': '{count} Pieces of Luggage',
    'fleet.features.comfort': 'Climate Control',
    'fleet.features.wifi': 'Free Wi-Fi',
    'fleet.features.leather': 'Leather Interior',
    'fleet.features.panoramic': 'Panoramic Roof',
    'fleet.features.drinks': 'Refreshments',
    'fleet.features.electric': '100% Electric',
    'fleet.features.autopilot': 'Autopilot',
    'fleet.button': 'Reserve This Vehicle',
    
    // Calculator
    'calculator.title': 'Calculate Your Fare',
    'calculator.distance': 'Estimated Distance (km)',
    'calculator.vehicle': 'Vehicle Type',
    'calculator.estimate': 'Estimated Costs',
    'calculator.price': 'Expected Price',
    'calculator.time': 'Travel Time',
    'calculator.minutes': 'min',
    'calculator.disclaimer': 'Prices are indicative. Actual rates may vary based on traffic, waiting time, and other factors.',
    'calculator.book': 'Book at This Rate',
    
    // Contact
    'contact.call': 'Call directly',
    'contact.whatsapp': 'WhatsApp',
    'contact.toggle': 'Contact options',
    
    // Cookie Consent
    'cookies.message': 'We use cookies to enhance your experience on our website. By using our website, you agree to our privacy policy.',
    'cookies.privacy': 'Privacy Policy',
    'cookies.accept': 'Accept',
    
    // Footer
    'footer.tagline': 'Experience luxury transportation at its best. Available 24/7 for your comfort and convenience.',
    'footer.contact': 'Contact',
    'footer.links': 'Quick Links',
    'footer.book': 'Book a Ride',
    'footer.services': 'Our Services',
    'footer.business': 'Business Travel',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.rights': 'All rights reserved',
    
    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.role.business': 'Business Traveler',
    'testimonials.role.customer': 'Regular Customer',
    'testimonials.role.tourist': 'Tourist from Germany',
    'testimonials.1.text': 'The service is exceptional. The drivers are always on time, professional, and helpful. The vehicles are luxurious and immaculate. Perfect for business meetings!',
    'testimonials.2.text': 'I have been using their taxi services for my daily commute for over a year now. Reliable, punctual, and always with a smile. Highly recommended!',
    'testimonials.3.text': 'As a tourist in Amsterdam, this taxi service was a blessing. The driver was also a great guide who showed us the best places in the city. An unforgettable experience!',
    
    // Common
    'common.from': 'From',
    'common.included': 'Included',
    'common.submit': 'Submit',
  },
  
  de: {
    // Hero section
    'hero.title': 'Reisen Sie komfortabel, kommen Sie stilvoll an',
    'hero.subtitle': 'Erleben Sie Luxustransport vom Feinsten mit SNH Drivers',
    'hero.button.book': 'Fahrt buchen',
    'hero.button.whatsapp': 'WhatsApp Direkt',
    
    // Booking form
    'booking.title': 'Buchen Sie Ihre Fahrt',
    'booking.name': 'Name',
    'booking.phone': 'Telefonnummer',
    'booking.pickup': 'Abholort',
    'booking.dropoff': 'Zielort',
    'booking.datetime': 'Datum & Zeit',
    'booking.button': 'Jetzt buchen',
    
    // Services
    'services.title': 'Unsere Dienstleistungen',
    'services.economy.title': 'Economy',
    'services.economy.description': 'Erschwinglicher und zuverlässiger Transport für Ihre täglichen Fahrten',
    'services.business.title': 'Business',
    'services.business.description': 'Premium-Komfort für Geschäftsleute',
    'services.luxury.title': 'Luxus',
    'services.luxury.description': 'Erstklassiges Erlebnis mit erstklassigen Fahrzeugen',
    
    // Airport transfers
    'airport.title': 'Schiphol Flughafentransfer',
    'airport.subtitle': 'Komfortable und zuverlässige Flughafentransfers',
    
    // Destinations
    'destinations.title': 'Touristische Ziele',
    'destinations.subtitle': 'Entdecken Sie die schönsten Orte rund um Amsterdam',
    
    // Business travel
    'business.title': 'Geschäftsreisen',
    'business.subtitle': 'Premium-Taxidienste für Ihr Unternehmen in Amsterdam und Umgebung',
    'business.tab.services': 'Dienstleistungen',
    'business.tab.districts': 'Geschäftsviertel',
    'business.tab.contact': 'Geschäftsangebot',
    
    // Fleet
    'fleet.title': 'Unsere Fahrzeuge',
    'fleet.business': 'Business',
    'fleet.luxury': 'Luxus',
    'fleet.eco': 'Eco',
    'fleet.features.passengers': '{count} Passagiere',
    'fleet.features.luggage': '{count} Gepäckstücke',
    'fleet.features.comfort': 'Klimaanlage',
    'fleet.features.wifi': 'Kostenloses WLAN',
    'fleet.features.leather': 'Lederausstattung',
    'fleet.features.panoramic': 'Panoramadach',
    'fleet.features.drinks': 'Erfrischungen',
    'fleet.features.electric': '100% Elektrisch',
    'fleet.features.autopilot': 'Autopilot',
    'fleet.button': 'Dieses Fahrzeug reservieren',
    
    // Calculator
    'calculator.title': 'Berechnen Sie Ihren Fahrpreis',
    'calculator.distance': 'Geschätzte Entfernung (km)',
    'calculator.vehicle': 'Fahrzeugtyp',
    'calculator.estimate': 'Geschätzte Kosten',
    'calculator.price': 'Erwarteter Preis',
    'calculator.time': 'Fahrzeit',
    'calculator.minutes': 'min',
    'calculator.disclaimer': 'Preise sind Richtwerte. Die tatsächlichen Tarife können je nach Verkehr, Wartezeit und anderen Faktoren variieren.',
    'calculator.book': 'Zu diesem Tarif buchen',
    
    // Contact
    'contact.call': 'Direkt anrufen',
    'contact.whatsapp': 'WhatsApp',
    'contact.toggle': 'Kontaktoptionen',
    
    // Cookie Consent
    'cookies.message': 'Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern. Durch die Nutzung unserer Website stimmen Sie unserer Datenschutzrichtlinie zu.',
    'cookies.privacy': 'Datenschutzrichtlinie',
    'cookies.accept': 'Akzeptieren',
    
    // Footer
    'footer.tagline': 'Erleben Sie Luxustransport vom Feinsten. Rund um die Uhr für Ihren Komfort und Ihre Bequemlichkeit verfügbar.',
    'footer.contact': 'Kontakt',
    'footer.links': 'Schnelllinks',
    'footer.book': 'Fahrt buchen',
    'footer.services': 'Unsere Dienstleistungen',
    'footer.business': 'Geschäftsreisen',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'AGB',
    'footer.rights': 'Alle Rechte vorbehalten',
    
    // Testimonials
    'testimonials.title': 'Was unsere Kunden sagen',
    'testimonials.role.business': 'Geschäftsreisender',
    'testimonials.role.customer': 'Stammkunde',
    'testimonials.role.tourist': 'Tourist aus Deutschland',
    'testimonials.1.text': 'Der Service ist außergewöhnlich. Die Fahrer sind immer pünktlich, professionell und hilfsbereit. Die Fahrzeuge sind luxuriös und makellos. Perfekt für Geschäftstermine!',
    'testimonials.2.text': 'Ich nutze ihre Taxidienste seit über einem Jahr für meinen täglichen Arbeitsweg. Zuverlässig, pünktlich und immer mit einem Lächeln. Sehr empfehlenswert!',
    'testimonials.3.text': 'Als Tourist in Amsterdam war dieser Taxiservice ein Segen. Der Fahrer war auch ein großartiger Führer, der uns die besten Orte in der Stadt zeigte. Ein unvergessliches Erlebnis!',
    
    // Common
    'common.from': 'Ab',
    'common.included': 'Inklusive',
    'common.submit': 'Absenden',
  }
};

// Provider component
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with browser language or default to Dutch
  const [language, setLanguageState] = useState<LanguageCode>('nl');

  // Load language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    if (savedLanguage && ['nl', 'en', 'de'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Translation function with parameter interpolation
  const t = (key: string, params?: TranslationParams): string => {
    let text = translations[language][key] || key;
    
    // Perform parameter substitution if params are provided
    if (params) {
      Object.entries(params).forEach(([paramKey, paramValue]) => {
        text = text.replace(`{${paramKey}}`, String(paramValue));
      });
    }
    
    return text;
  };

  // Set language and save to localStorage
  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    localStorage.setItem('language', code);
    
    // Update the HTML lang attribute
    document.documentElement.lang = code;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 
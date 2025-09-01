"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'nl' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  nl: {
    nav: {
      home: "Home",
      services: "Diensten",
      fleet: "Vloot",
      contact: "Contact",
      motor: "Motor Taxi"
    },
    hero: {
      title: "TCN Taxi Centrale Nederland",
      subtitle: "Reis in comfort, arriveer in stijl. TCN Taxi Centrale Nederland biedt premium taxi diensten in heel Nederland.",
      button: {
        book: "Boek Nu",
        whatsapp: "WhatsApp Boeking"
      }
    },
    booking: {
      title: "Boek Uw Rit",
      subtitle: "Vul het formulier in en we nemen binnen 15 minuten contact met u op",
      name: "Naam",
      email: "E-mail",
      phone: "Telefoon",
      pickup: "Ophaallocatie",
      destination: "Bestemming",
      date: "Datum",
      time: "Tijd",
      passengers: "Aantal passagiers",
      message: "Extra informatie",
      submit: "Boek Rit",
      success: "Boeking succesvol verzonden! We nemen binnen 15 minuten contact met u op.",
      error: "Er is een fout opgetreden. Probeer het opnieuw."
    },
    services: {
      title: "Onze Diensten",
      subtitle: "Professionele taxi diensten voor al uw vervoersbehoeften",
      airport: {
        title: "Luchthaven Transfer",
        description: "Betrouwbare transfers naar en van alle Nederlandse luchthavens"
      },
      business: {
        title: "Zakelijk Vervoer",
        description: "Professioneel vervoer voor zakenreizen en vergaderingen"
      },
      private: {
        title: "Privé Vervoer",
        description: "Persoonlijke chauffeur service voor speciale gelegenheden"
      },
      area: {
        title: "Heel Nederland",
        description: "Service in heel Nederland en midden Nederland"
      },
      international: {
        title: "Buitenlandse Reizen",
        description: "Reizen naar het buitenland ook mogelijk"
      },
      wifi: {
        title: "Geen WiFi",
        description: "Let op: geen WiFi beschikbaar in de auto"
      }
    },
    emergency: {
      title: "24/7 Noodservice",
      subtitle: "Altijd beschikbaar voor spoedgevallen",
      description: "Onze spoedservice is 24 uur per dag, 7 dagen per week beschikbaar voor noodgevallen en late nachtelijke ritten.",
      phone: "Bel Direct",
      whatsapp: "WhatsApp Spoed"
    },
    driver: {
      title: "Word Onze Chauffeur",
      subtitle: "Join ons professionele team",
      description: "We zijn altijd op zoek naar ervaren en betrouwbare chauffeurs. Geniet van flexibele werktijden en competitieve salarissen.",
      benefits: [
        "Flexibele werktijden",
        "Competitief salaris",
        "Professionele ondersteuning",
        "Groeimogelijkheden"
      ],
      requirements: [
        "Geldig rijbewijs",
        "Schone achtergrond",
        "Goede communicatieve vaardigheden",
        "Professionele uitstraling"
      ],
      apply: "Solliciteer Nu"
    },
    fleet: {
      title: "Onze Vloot",
      subtitle: "Moderne en comfortabele voertuigen",
      motor: "Motor Taxi",
      luxury: "Luxe Sedan",
      suv: "SUV",
      van: "Van",
      electric: "Elektrisch"
    },
    motor: {
      title: "Motor Taxi Service",
      subtitle: "Snelle en flexibele vervoersoplossing",
      advantages: {
        title: "Voordelen van Motor Taxi",
        speed: "Snelle service",
        flexibility: "Flexibele routes",
        availability: "24/7 beschikbaar",
        cost: "Voordelige prijzen"
      },
      services: {
        title: "Onze Motor Taxi Diensten",
        airport: "Luchthaven transfers",
        business: "Zakelijk vervoer",
        private: "Privé ritten",
        emergency: "Spoedservice"
      },
      pricing: {
        title: "Transparante Prijzen",
        base: "Basis tarief",
        perKm: "Per kilometer",
        waiting: "Wachttijd",
        booking: "Boek Nu"
      }
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      fleet: "Fleet",
      contact: "Contact",
      motor: "Motor Taxi"
    },
    hero: {
      title: "TCN Taxi Centrale Nederland",
      subtitle: "Travel in comfort, arrive in style. TCN Taxi Centrale Nederland offers premium taxi services across the Netherlands.",
      button: {
        book: "Book Now",
        whatsapp: "WhatsApp Booking"
      }
    },
    booking: {
      title: "Book Your Ride",
      subtitle: "Fill out the form and we'll contact you within 15 minutes",
      name: "Name",
      email: "Email",
      phone: "Phone",
      pickup: "Pickup Location",
      destination: "Destination",
      date: "Date",
      time: "Time",
      passengers: "Number of passengers",
      message: "Additional information",
      submit: "Book Ride",
      success: "Booking successfully sent! We'll contact you within 15 minutes.",
      error: "An error occurred. Please try again."
    },
    services: {
      title: "Our Services",
      subtitle: "Professional taxi services for all your transportation needs",
      airport: {
        title: "Airport Transfer",
        description: "Reliable transfers to and from all Dutch airports"
      },
      business: {
        title: "Business Transport",
        description: "Professional transport for business trips and meetings"
      },
      private: {
        title: "Private Transport",
        description: "Personal chauffeur service for special occasions"
      },
      area: {
        title: "All Netherlands",
        description: "Service throughout the Netherlands and central Netherlands"
      },
      international: {
        title: "International Travel",
        description: "Travel to foreign countries also possible"
      },
      wifi: {
        title: "No WiFi",
        description: "Note: no WiFi available in the car"
      }
    },
    emergency: {
      title: "24/7 Emergency Service",
      subtitle: "Always available for emergencies",
      description: "Our emergency service is available 24 hours a day, 7 days a week for emergencies and late night rides.",
      phone: "Call Now",
      whatsapp: "WhatsApp Emergency"
    },
    driver: {
      title: "Become Our Driver",
      subtitle: "Join our professional team",
      description: "We are always looking for experienced and reliable drivers. Enjoy flexible working hours and competitive salaries.",
      benefits: [
        "Flexible working hours",
        "Competitive salary",
        "Professional support",
        "Growth opportunities"
      ],
      requirements: [
        "Valid driver's license",
        "Clean background",
        "Good communication skills",
        "Professional appearance"
      ],
      apply: "Apply Now"
    },
    fleet: {
      title: "Our Fleet",
      subtitle: "Modern and comfortable vehicles",
      motor: "Motor Taxi",
      luxury: "Luxury Sedan",
      suv: "SUV",
      van: "Van",
      electric: "Electric"
    },
    motor: {
      title: "Motor Taxi Service",
      subtitle: "Fast and flexible transportation solution",
      advantages: {
        title: "Motor Taxi Advantages",
        speed: "Fast service",
        flexibility: "Flexible routes",
        availability: "24/7 available",
        cost: "Affordable prices"
      },
      services: {
        title: "Our Motor Taxi Services",
        airport: "Airport transfers",
        business: "Business transport",
        private: "Private rides",
        emergency: "Emergency service"
      },
      pricing: {
        title: "Transparent Pricing",
        base: "Base rate",
        perKm: "Per kilometer",
        waiting: "Waiting time",
        booking: "Book Now"
      }
    }
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      fleet: "Flotte",
      contact: "Kontakt",
      motor: "Motor Taxi"
    },
    hero: {
      title: "TCN Taxi Centrale Nederland",
      subtitle: "Reisen Sie komfortabel, kommen Sie stilvoll an. TCN Taxi Centrale Nederland bietet Premium-Taxi-Dienste in den gesamten Niederlanden.",
      button: {
        book: "Jetzt Buchen",
        whatsapp: "WhatsApp Buchung"
      }
    },
    booking: {
      title: "Buchen Sie Ihre Fahrt",
      subtitle: "Füllen Sie das Formular aus und wir kontaktieren Sie innerhalb von 15 Minuten",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      pickup: "Abholort",
      destination: "Ziel",
      date: "Datum",
      time: "Zeit",
      passengers: "Anzahl der Passagiere",
      message: "Zusätzliche Informationen",
      submit: "Fahrt Buchen",
      success: "Buchung erfolgreich gesendet! Wir kontaktieren Sie innerhalb von 15 Minuten.",
      error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
    },
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Professionelle Taxi-Dienste für alle Ihre Transportbedürfnisse",
      airport: {
        title: "Flughafen Transfer",
        description: "Zuverlässige Transfers zu und von allen niederländischen Flughäfen"
      },
      business: {
        title: "Geschäftstransport",
        description: "Professioneller Transport für Geschäftsreisen und Meetings"
      },
      private: {
        title: "Privat Transport",
        description: "Persönlicher Chauffeur-Service für besondere Anlässe"
      },
      area: {
        title: "Ganze Niederlande",
        description: "Service in den gesamten Niederlanden und Zentralniederlande"
      },
      international: {
        title: "Internationale Reisen",
        description: "Reisen ins Ausland ebenfalls möglich"
      },
      wifi: {
        title: "Kein WiFi",
        description: "Hinweis: kein WiFi im Auto verfügbar"
      }
    },
    emergency: {
      title: "24/7 Notdienst",
      subtitle: "Immer verfügbar für Notfälle",
      description: "Unser Notdienst ist 24 Stunden am Tag, 7 Tage die Woche für Notfälle und späte Nachtfahrten verfügbar.",
      phone: "Jetzt Anrufen",
      whatsapp: "WhatsApp Notfall"
    },
    driver: {
      title: "Werden Sie Unser Fahrer",
      subtitle: "Schließen Sie sich unserem professionellen Team an",
      description: "Wir suchen immer erfahrene und zuverlässige Fahrer. Genießen Sie flexible Arbeitszeiten und wettbewerbsfähige Gehälter.",
      benefits: [
        "Flexible Arbeitszeiten",
        "Wettbewerbsfähiges Gehalt",
        "Professionelle Unterstützung",
        "Wachstumsmöglichkeiten"
      ],
      requirements: [
        "Gültiger Führerschein",
        "Sauberer Hintergrund",
        "Gute Kommunikationsfähigkeiten",
        "Professionelles Auftreten"
      ],
      apply: "Jetzt Bewerben"
    },
    fleet: {
      title: "Unsere Flotte",
      subtitle: "Moderne und komfortable Fahrzeuge",
      motor: "Motor Taxi",
      luxury: "Luxus Limousine",
      suv: "SUV",
      van: "Van",
      electric: "Elektrisch"
    },
    motor: {
      title: "Motor Taxi Service",
      subtitle: "Schnelle und flexible Transportlösung",
      advantages: {
        title: "Motor Taxi Vorteile",
        speed: "Schneller Service",
        flexibility: "Flexible Routen",
        availability: "24/7 verfügbar",
        cost: "Günstige Preise"
      },
      services: {
        title: "Unsere Motor Taxi Dienstleistungen",
        airport: "Flughafen Transfers",
        business: "Geschäftstransport",
        private: "Private Fahrten",
        emergency: "Notdienst"
      },
      pricing: {
        title: "Transparente Preise",
        base: "Grundtarif",
        perKm: "Pro Kilometer",
        waiting: "Wartezeit",
        booking: "Jetzt Buchen"
      }
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('nl'); // Default to Dutch

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return the key if not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 
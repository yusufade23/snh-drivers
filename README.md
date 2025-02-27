# SNH Drivers - Premium Taxi Service Website

A modern, sophisticated taxi booking website built with Next.js, TailwindCSS, and Framer Motion. This website offers a premium user experience for booking taxi services in Amsterdam, with multilingual support and interactive features.

![SNH Drivers Website](public/hero-bg.jpg)

## Live Demo

Visit the live website: [https://snh-drivers.vercel.app](https://snh-drivers.vercel.app)

## Features

- 🌟 Modern and responsive design with dark theme
- 🌐 Multilingual support (Dutch, English, German)
- 📱 Mobile-friendly interface
- 💰 Interactive price calculator
- 🚕 Fleet gallery with vehicle details
- 💼 Business travel section for corporate clients
- ✈️ Airport transfer information
- 📝 Online booking form with validation
- 🍪 GDPR-compliant cookie consent
- ✨ Smooth animations with Framer Motion
- 📞 Multiple contact options (form, WhatsApp, phone)

## Prerequisites

- Node.js 18+ and npm

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yusufade23/snh-drivers.git
cd snh-drivers
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
snh-drivers/
├── src/
│   ├── app/
│   │   ├── page.tsx        # Main page component
│   │   ├── layout.tsx      # Root layout with language provider
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── Hero.tsx        # Hero section with call-to-action
│   │   ├── BookingForm.tsx # Booking form with validation
│   │   ├── Services.tsx    # Service tiers display
│   │   ├── PriceCalculator.tsx # Interactive price estimator
│   │   ├── FleetGallery.tsx # Vehicle showcase
│   │   ├── BusinessTravel.tsx # Corporate services section
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Footer.tsx     # Site footer with contact info
│   │   ├── FloatingContact.tsx # Floating contact buttons
│   │   ├── CookieConsent.tsx # GDPR cookie consent banner
│   │   └── LanguageSwitcher.tsx # Language selection component
│   └── context/
│       └── LanguageContext.tsx # Multilingual support system
├── public/                 # Static assets
│   └── fleet/              # Vehicle images
└── package.json
```

## Multilingual Support

The website supports three languages:
- 🇳🇱 Dutch (default)
- 🇬🇧 English
- 🇩🇪 German

Language selection is persistent via localStorage and affects all text content throughout the site.

## Deployment

This website is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Sign up on [Vercel](https://vercel.com)
3. Create a new project and import your GitHub repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy" and your site will be live in minutes

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Hook Form](https://react-hook-form.com/) - Form validation
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [date-fns](https://date-fns.org/) - Date utilities with localization

## Customization

To customize this website for your own taxi service:

1. Update contact information in `FloatingContact.tsx` and `Footer.tsx`
2. Replace vehicle images in the `public/fleet/` directory
3. Modify pricing in `PriceCalculator.tsx`
4. Update service descriptions in `Services.tsx`
5. Edit testimonials in `Testimonials.tsx`
6. Customize the language translations in `LanguageContext.tsx`

## License

This project is licensed under the MIT License.

## Acknowledgements

- Design inspiration from premium transportation services
- Vehicle images from Unsplash
- Icons from React Icons and Heroicons

# SNH Drivers - Taxi Centrale System

A comprehensive taxi dispatch center (taxi centrale) built with Next.js, featuring real-time booking management, driver dispatch, customer portals, and multilingual support. This system transforms your taxi service into a full-featured dispatch center similar to sneleentaxi.nl.

![SNH Drivers Taxi Centrale](public/hero-bg.jpg)

## Live Demo

Visit the live taxi centrale: [https://snh-drivers.vercel.app](https://snh-drivers.vercel.app)

## 🚕 Taxi Centrale Features

### For Customers
- 🌐 **Multilingual Support** (Dutch, English, German)
- 📱 **Real-time Booking System** with instant confirmation
- 💰 **Interactive Price Calculator** with transparent pricing
- 🚗 **Fleet Gallery** showcasing available vehicles
- 📊 **Customer Dashboard** with booking history and account management
- 💳 **Secure Payment Processing** with Stripe integration
- 📍 **Real-time Ride Tracking** (coming soon)
- 📞 **Multiple Contact Options** (form, WhatsApp, phone)

### For Drivers
- 🎯 **Driver Dashboard** with earnings tracking
- 📱 **Real-time Booking Notifications**
- 🚦 **Availability Toggle** (online/offline status)
- 💰 **Earnings Management** with detailed reports
- 📍 **GPS Location Tracking** (coming soon)
- 📊 **Performance Analytics** and ratings

### For Administrators
- 👥 **Driver Management** system
- 🚗 **Fleet Management** with vehicle tracking
- 💼 **Business Travel** coordination
- 📈 **Financial Reports** and analytics
- 🎛️ **Dispatch Control** center
- 📱 **Real-time Monitoring** of all operations

## 🏗️ System Architecture

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **NextAuth.js** - Authentication system

### Backend
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Next.js API Routes** - Serverless backend
- **Stripe** - Payment processing
- **Socket.io** - Real-time communications

### Database Schema
```
├── Users (Customers)
├── Drivers
├── Vehicles
├── Bookings
├── Payments
├── DriverEarnings
└── Messages
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yusufade23/snh-drivers.git
cd snh-drivers
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```
Edit `.env.local` with your configuration:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/snh_drivers"
NEXTAUTH_SECRET="your-secret-key"
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
snh-drivers/
├── src/
│   ├── app/
│   │   ├── api/                    # API routes
│   │   │   ├── auth/              # Authentication
│   │   │   ├── bookings/          # Booking management
│   │   │   └── driver/            # Driver operations
│   │   ├── auth/                  # Authentication pages
│   │   ├── dashboard/             # Customer dashboard
│   │   ├── driver/                # Driver dashboard
│   │   ├── page.tsx               # Main landing page
│   │   └── layout.tsx             # Root layout
│   ├── components/                # React components
│   │   ├── Hero.tsx              # Landing hero section
│   │   ├── BookingForm.tsx       # Booking form
│   │   ├── Services.tsx          # Service tiers
│   │   ├── PriceCalculator.tsx   # Price estimation
│   │   ├── FleetGallery.tsx      # Vehicle showcase
│   │   ├── BusinessTravel.tsx    # Corporate services
│   │   ├── Testimonials.tsx      # Customer reviews
│   │   ├── Footer.tsx            # Site footer
│   │   ├── FloatingContact.tsx   # Contact buttons
│   │   ├── CookieConsent.tsx     # GDPR compliance
│   │   └── LanguageSwitcher.tsx  # Language selection
│   ├── context/
│   │   └── LanguageContext.tsx   # Multilingual support
│   ├── lib/
│   │   ├── auth.ts               # NextAuth configuration
│   │   └── prisma.ts             # Database client
│   └── types/
│       └── next-auth.d.ts        # TypeScript declarations
├── prisma/
│   └── schema.prisma             # Database schema
├── public/                       # Static assets
└── package.json
```

## 🔧 Configuration

### Database Setup
1. Create a PostgreSQL database
2. Update `DATABASE_URL` in your environment variables
3. Run `npx prisma db push` to create tables

### Authentication
- NextAuth.js handles user authentication
- Supports customer and driver roles
- Session-based authentication with JWT

### Payment Processing
- Stripe integration for secure payments
- Supports multiple payment methods
- Automatic payment confirmation

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-production-secret"
STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_SECRET_KEY="sk_live_..."
```

## 🔒 Security Features

- **Authentication**: NextAuth.js with role-based access
- **Database**: Prisma with type-safe queries
- **Payments**: Stripe with PCI compliance
- **HTTPS**: Automatic SSL certificates
- **GDPR**: Cookie consent and data protection

## 📱 Mobile Responsiveness

The taxi centrale is fully responsive and works seamlessly on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers
- 🖥️ Large displays

## 🌐 Multilingual Support

- **Dutch** (default) - Primary market language
- **English** - International customers
- **German** - German tourists and business clients

## 🔄 Real-time Features

- Live booking updates
- Driver availability status
- Booking notifications
- Payment confirmations
- Chat system (coming soon)

## 📊 Analytics & Reporting

- Customer booking analytics
- Driver performance metrics
- Financial reporting
- Revenue tracking
- Customer satisfaction ratings

## 🛠️ Customization

### Adding New Features
1. Create new components in `src/components/`
2. Add API routes in `src/app/api/`
3. Update database schema if needed
4. Add translations to language context

### Styling
- Uses TailwindCSS for consistent design
- Custom CSS classes in `globals.css`
- Component-specific styling with CSS modules

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- 📧 Email: support@snhdrivers.nl
- 📞 Phone: +31 20 123 4567
- 💬 WhatsApp: +31 6 12345678

## 🚀 Roadmap

### Phase 2 (Coming Soon)
- [ ] Real-time GPS tracking
- [ ] Push notifications
- [ ] Mobile app for drivers
- [ ] Advanced analytics dashboard
- [ ] Integration with external APIs
- [ ] Automated dispatch system

### Phase 3 (Future)
- [ ] AI-powered route optimization
- [ ] Predictive demand forecasting
- [ ] Advanced customer insights
- [ ] Multi-location support
- [ ] Franchise management system

---

**Built with ❤️ for the taxi industry**

# SNH Drivers - Simple Taxi Centrale

A streamlined taxi dispatch center built with Next.js, featuring email-based booking management similar to sneleentaxi.nl. No authentication required - just simple, effective taxi booking via email.

![SNH Drivers Taxi Centrale](public/hero-bg.jpg)

## Live Demo

Visit the live taxi centrale: [https://snh-drivers.vercel.app](https://snh-drivers.vercel.app)

## 🚕 Simple Taxi Centrale Features

### For Customers
- 🌐 **Multilingual Support** (Dutch, English, German)
- 📧 **Email-based Booking System** - no signup required
- 💰 **Interactive Price Calculator** with transparent pricing
- 🚗 **Fleet Gallery** showcasing available vehicles
- 📞 **Multiple Contact Options** (form, WhatsApp, phone)
- ✨ **Instant Email Confirmation** for all bookings

### For Administrators
- 📧 **Email Notifications** for all booking requests
- 📊 **Professional Email Templates** with booking details
- 🎯 **Direct Customer Communication** via email
- 📱 **Mobile-responsive** email notifications

## 🏗️ Simple Architecture

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Smooth animations

### Backend
- **Next.js API Routes** - Serverless backend
- **Nodemailer** - Email functionality
- **Form Validation** - Zod schema validation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Gmail account (for sending emails)

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
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-gmail-app-password"
ADMIN_EMAIL="admin@snhdrivers.nl"
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
snh-drivers/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── booking/          # Email booking API
│   │   ├── page.tsx              # Main landing page
│   │   └── layout.tsx            # Root layout
│   ├── components/               # React components
│   │   ├── Hero.tsx             # Landing hero section
│   │   ├── BookingForm.tsx      # Email booking form
│   │   ├── Services.tsx         # Service tiers
│   │   ├── PriceCalculator.tsx  # Price estimation
│   │   ├── FleetGallery.tsx     # Vehicle showcase
│   │   ├── BusinessTravel.tsx   # Corporate services
│   │   ├── Testimonials.tsx     # Customer reviews
│   │   ├── Footer.tsx           # Site footer
│   │   ├── FloatingContact.tsx  # Contact buttons
│   │   ├── CookieConsent.tsx    # GDPR compliance
│   │   └── LanguageSwitcher.tsx # Language selection
│   └── context/
│       └── LanguageContext.tsx  # Multilingual support
├── public/                      # Static assets
└── package.json
```

## 🔧 Email Configuration

### Gmail Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for this application
3. Use the App Password in your environment variables

### Email Templates
The system sends two emails for each booking:
1. **Admin Notification** - Detailed booking information sent to your admin email
2. **Customer Confirmation** - Confirmation email sent to the customer

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `ADMIN_EMAIL`
4. Deploy automatically

### Environment Variables for Production
```env
EMAIL_USER="your-production-email@gmail.com"
EMAIL_PASS="your-gmail-app-password"
ADMIN_EMAIL="admin@yourdomain.com"
```

## 🔒 Security Features

- **Email Validation** - Proper email format validation
- **Form Validation** - Comprehensive input validation
- **HTTPS** - Automatic SSL certificates
- **GDPR** - Cookie consent and data protection

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

## 📧 Email Workflow

1. **Customer fills booking form**
2. **System validates all inputs**
3. **Admin receives detailed booking email**
4. **Customer receives confirmation email**
5. **Admin can reply directly to customer**

## 🛠️ Customization

### Adding New Features
1. Create new components in `src/components/`
2. Add API routes in `src/app/api/`
3. Update email templates in the booking API
4. Add translations to language context

### Styling
- Uses TailwindCSS for consistent design
- Custom CSS classes in `globals.css`
- Component-specific styling

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
- [ ] Google Maps integration for accurate pricing
- [ ] SMS notifications
- [ ] WhatsApp Business API integration
- [ ] Advanced email templates
- [ ] Booking management dashboard

### Phase 3 (Future)
- [ ] Driver assignment system
- [ ] Real-time tracking
- [ ] Payment integration
- [ ] Customer reviews system
- [ ] Analytics dashboard

---

**Built with ❤️ for the taxi industry**

# Analytics Setup Guide - WordPress Admin Equivalent

## 🎯 **Your Current Deployment**

### **Vercel Project URL:**
- **Production URL:** `https://snh-drivers-yusufadeyusuf-gmailcoms-projects.vercel.app`
- **GitHub Repository:** `https://github.com/yusufade23/snh-drivers`
- **Vercel Dashboard:** [vercel.com/dashboard](https://vercel.com/dashboard)

---

## 🎯 **Recommended Solutions**

### **1. Vercel Analytics (Easiest - Already Installed)**
- ✅ **Already integrated** in your project
- ✅ **Zero configuration** required
- ✅ **Real-time data** in Vercel dashboard
- ✅ **Privacy-focused** and GDPR compliant

**How to access:**
1. Go to [vercel.com](https://vercel.com)
2. Sign in to your account (yusufadeyusuf@gmail.com)
3. Select your "snh-drivers" project
4. Click "Analytics" tab
5. View real-time data, page views, and performance metrics

**Features:**
- Page views and unique visitors
- Top pages and referrers
- Geographic data
- Device types
- Performance metrics

---

### **2. Plausible Analytics (Most WordPress-like)**
- 🏆 **Best WordPress admin equivalent**
- 🔒 **Privacy-focused** (GDPR compliant)
- 🚀 **Lightweight** and fast
- 💰 **Self-hosted** option available

**Setup:**
```bash
# Option 1: Cloud (Easiest)
# Visit https://plausible.io and sign up
# Add your domain and get tracking code

# Option 2: Self-hosted
docker run -d --name plausible-analytics \
  -p 8000:8000 \
  -e SECRET_KEY_BASE=your-secret-key \
  -e DATABASE_URL=postgresql://user:pass@localhost/plausible \
  plausible/analytics
```

**Integration:**
```html
<!-- Add to your layout.tsx -->
<script defer data-domain="snh-drivers-yusufadeyusuf-gmailcoms-projects.vercel.app" src="https://plausible.io/js/script.js"></script>
```

---

### **3. Umami Analytics (Open Source Alternative)**
- 🆓 **Completely free** and open source
- 🔒 **Privacy-first** approach
- 🏠 **Self-hosted** or cloud options
- 📊 **Simple** WordPress-like dashboard

**Setup:**
```bash
# Self-hosted installation
git clone https://github.com/umami-software/umami
cd umami
npm install
npm run build
npm start
```

**Features:**
- Page views and unique visitors
- Referrer tracking
- Device and browser data
- Custom events
- Simple, clean interface

---

### **4. Matomo (Piwik) - Most Comprehensive**
- 🏆 **Full Google Analytics alternative**
- 📊 **Most comprehensive** features
- 🔒 **Privacy-focused** and GDPR compliant
- 🏠 **Self-hosted** with cloud options

**Setup:**
```bash
# Docker installation
docker run -d --name matomo \
  -p 8080:80 \
  -v matomo:/var/www/html \
  matomo:latest
```

**Features:**
- Complete analytics suite
- E-commerce tracking
- A/B testing
- Heatmaps
- Session recordings
- Custom reports

---

## 🚀 **Quick Setup Recommendations**

### **For Immediate Use:**
1. **Vercel Analytics** - Already working, check your Vercel dashboard
2. **Plausible Cloud** - Sign up at plausible.io (most WordPress-like)

### **For Self-Hosted:**
1. **Umami** - Lightweight and easy to set up
2. **Plausible Self-hosted** - Professional and privacy-focused
3. **Matomo** - Most comprehensive but requires more resources

---

## 📊 **What You'll Get (WordPress Admin Equivalent)**

### **Dashboard Features:**
- 📈 **Real-time analytics** with live visitor count
- 📄 **Page views** by page and section
- 👥 **Unique visitors** and returning users
- 🌍 **Geographic data** showing visitor locations
- 📱 **Device types** (mobile, desktop, tablet)
- 🔗 **Traffic sources** (Google, direct, social media)
- ⏱️ **Time on site** and bounce rate
- 📅 **Date range** filtering (last 24h, 7 days, 30 days, etc.)

### **Taxi-Specific Analytics:**
- 🚕 **Booking form** conversion rates
- 📞 **Contact form** submissions
- 🚨 **Emergency service** usage
- 👨‍💼 **Driver applications** tracking
- 💰 **Revenue tracking** (if integrated with payments)
- 🗺️ **Popular routes** and destinations

---

## 🔧 **Integration Steps**

### **Option 1: Vercel Analytics (Recommended)**
1. ✅ Already installed and working
2. Visit your Vercel dashboard
3. Click "Analytics" tab
4. View real-time data

### **Option 2: Plausible Analytics**
1. Sign up at [plausible.io](https://plausible.io)
2. Add your domain: `snh-drivers-yusufadeyusuf-gmailcoms-projects.vercel.app`
3. Get tracking code
4. Add to your layout.tsx:

```tsx
// In layout.tsx
<head>
  <script defer data-domain="snh-drivers-yusufadeyusuf-gmailcoms-projects.vercel.app" src="https://plausible.io/js/script.js"></script>
</head>
```

### **Option 3: Umami Self-hosted**
1. Deploy Umami to your server
2. Create account and website
3. Get tracking code
4. Add to your layout.tsx

---

## 🎯 **Admin Access**

### **Current Admin Dashboard:**
- URL: `https://snh-drivers-yusufadeyusuf-gmailcoms-projects.vercel.app/admin`
- Hidden link: Bottom-left corner of your site (hover to see)

### **Vercel Analytics:**
- URL: [vercel.com/dashboard](https://vercel.com/dashboard)
- Select your project → Analytics tab

### **Plausible Dashboard:**
- URL: [plausible.io](https://plausible.io)
- Login with your account

---

## 💡 **Recommendation**

**For your taxi centrale, I recommend:**

1. **Start with Vercel Analytics** (already working)
2. **Add Plausible Cloud** for more detailed insights
3. **Consider Umami** if you want self-hosted option

This gives you the WordPress admin equivalent with:
- ✅ Real-time analytics
- ✅ Privacy-focused tracking
- ✅ Professional dashboard
- ✅ Easy setup and maintenance
- ✅ GDPR compliance

---

## 🔗 **Quick Links**

- **Your Live Site:** `https://snh-drivers-yusufadeyusuf-gmailcoms-projects.vercel.app`
- **Vercel Analytics:** [vercel.com/dashboard](https://vercel.com/dashboard)
- **Plausible Analytics:** [plausible.io](https://plausible.io)
- **Umami Analytics:** [github.com/umami-software/umami](https://github.com/umami-software/umami)
- **Matomo Analytics:** [matomo.org](https://matomo.org)
- **Your Admin Dashboard:** `https://snh-drivers-yusufadeyusuf-gmailcoms-projects.vercel.app/admin` 
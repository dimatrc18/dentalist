import { Suspense, lazy } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useScrollAnimations } from './lib/useScrollAnimations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Briefcase, User, Info } from 'lucide-react';
import { NavBar } from './components/ui/TubelightNavbar';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';
import './animations.css';

// ── Lazy-loaded page routes (each gets its own JS chunk) ──────────────────────
const HomePage    = lazy(() => import('./pages/Home'));
const About       = lazy(() => import('./pages/About'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const BookingPage  = lazy(() => import('./pages/BookingPage'));

// Simple page-level fallback
function PageLoader() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: 'var(--clr-text-muted)', fontFamily: 'var(--font-sans)', fontSize: '0.95rem' }}>
        Loading…
      </span>
    </div>
  );
}

const navItems = [
  { name: 'Home',     url: '/',        icon: Home     },
  { name: 'Services', url: '/services', icon: Briefcase },
  { name: 'About',    url: '/about',    icon: Info     },
  { name: 'Book',     url: '/booking',  icon: User     },
];

export default function App() {
  useScrollAnimations();
  return (
    <HelmetProvider>
      <Helmet>
        <title>Dentalist | Premium Dental Care in Schaerbeek</title>
        <meta name="description" content="Dentalist in Schaerbeek – expert dental care for the whole family. Book your appointment today." />
        <meta name="keywords" content="dental clinic Schaerbeek, dentist Schaerbeek, teeth whitening, dental implants, orthodontics, cosmetic dentistry" />
        <meta property="og:title" content="Dentalist | Premium Dental Care in Schaerbeek" />
        <meta property="og:description" content="Expert dental care for the whole family in the heart of Schaerbeek. Book your appointment today." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.dentalist.be/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dentalist",
            "url": "https://www.dentalist.be",
            "telephone": "028080256",
            "email": "info@dentalist.be",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Louis Bertrand 102D",
              "addressLocality": "Schaerbeek",
              "postalCode": "1030",
              "addressCountry": "BE"
            },
            "openingHours": ["Mo,Tu,Th 09:30-18:15", "We 09:30-17:30", "Fr 09:30-17:45", "Sa 10:00-12:30"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.6",
              "reviewCount": "10"
            }
          }
        `}</script>
      </Helmet>

      <BrowserRouter>
        <ScrollToTop />
        <NavBar items={navItems} />

        <main id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"        element={<HomePage />} />
              <Route path="/about"   element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/booking" element={<BookingPage />} />
              {/* Catch-all redirects to home */}
              <Route path="*"        element={<HomePage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </BrowserRouter>

      {/* Vercel Analytics — automatically tracks page views */}
      <Analytics />
    </HelmetProvider>
  );
}


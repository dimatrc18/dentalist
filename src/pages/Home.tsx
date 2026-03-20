import Hero from '../components/Hero';
import Stats from '../components/Stats';
import BeforeAfter from '../components/BeforeAfter';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FaqSection from '../components/FaqSection';
import CtaBanner from '../components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <BeforeAfter />
      <Services />
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}

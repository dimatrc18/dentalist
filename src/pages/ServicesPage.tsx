import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import './ServicesPage.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

import imgOrthodontics from '../assets/svc_orthodontics.png';
import imgInvisalign from '../assets/svc_invisalign.png';
import imgLingual from '../assets/svc_lingual.png';
import imgPediatricOrtho from '../assets/svc_pediatric_ortho.png';
import imgImplant from '../assets/svc_implant.png';
import imgGeneral from '../assets/svc_general.png';
import imgMouthguard from '../assets/svc_mouthguard.png';
import imgCosmetic from '../assets/svc_cosmetic2.png';
import imgWhitening from '../assets/svc_whitening.png';
import imgVeneer from '../assets/svc_veneer.png';
import imgCrown from '../assets/svc_crown.png';
import imgPediatric from '../assets/svc_pediatric2.png';
import imgEndodontics from '../assets/svc_endodontics.png';

const TREATMENTS = [
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    tag: 'Alignment',
    description: 'Traditional metal braces to precisely correct misaligned teeth and jaws, improving both bite and appearance.',
    image: imgOrthodontics,
  },
  {
    id: 'invisalign',
    title: 'Invisalign',
    tag: 'Clear Aligners',
    description: 'Removable clear aligners that straighten your teeth discreetly — no brackets, no wires, no compromise.',
    image: imgInvisalign,
  },
  {
    id: 'lingual',
    title: 'Lingual Orthodontics',
    tag: 'Hidden Braces',
    description: 'Braces fitted to the inner surface of your teeth — completely invisible from the outside.',
    image: imgLingual,
  },
  {
    id: 'preventive-ortho',
    title: 'Preventive Orthodontics',
    tag: 'Children',
    description: "Early intervention to guide your child's jaw growth and prevent more complex issues later.",
    image: imgPediatricOrtho,
  },
  {
    id: 'implant',
    title: 'Dental Implants',
    tag: 'Restoration',
    description: 'Permanent titanium implants that replace missing teeth — looking, feeling and functioning like your natural tooth.',
    image: imgImplant,
  },
  {
    id: 'general',
    title: 'General Dentistry',
    tag: 'Comprehensive Care',
    description: 'Full-scope dental care under one roof — from check-ups and hygiene to fillings and extractions.',
    image: imgGeneral,
  },
  {
    id: 'mouthguard',
    title: 'Mouthguards',
    tag: 'Protection',
    description: 'Custom-fitted guards to protect teeth during contact sports or prevent damage from night grinding.',
    image: imgMouthguard,
  },
  {
    id: 'cosmetic',
    title: 'Prosthetics & Cosmetics',
    tag: 'Aesthetics',
    description: 'Advanced smile design combining porcelain veneers, crowns and cosmetic bonding for a perfect smile.',
    image: imgCosmetic,
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    tag: 'Brightening',
    description: 'Professional in-chair LED whitening that lightens teeth by several shades in a single session.',
    image: imgWhitening,
  },
  {
    id: 'veneer',
    title: 'Dental Veneers',
    tag: 'Cosmetic',
    description: 'Ultra-thin ceramic shells bonded to the front of teeth to correct shape, colour and minor misalignment.',
    image: imgVeneer,
  },
  {
    id: 'crown',
    title: 'Dental Crowns',
    tag: 'Restoration',
    description: 'Precision-crafted ceramic crowns that restore broken or heavily decayed teeth to full function and aesthetics.',
    image: imgCrown,
  },
  {
    id: 'pediatric',
    title: 'Paediatric Dentistry',
    tag: 'Children',
    description: "Gentle, child-friendly dental care from the very first visit — building healthy habits for life.",
    image: imgPediatric,
  },
  {
    id: 'endodontics',
    title: 'Endodontics',
    tag: 'Root Canal',
    description: 'Expert root canal treatment to save infected or damaged teeth, eliminating pain and restoring health.',
    image: imgEndodontics,
  },
];

export default function ServicesPage() {
  return (
    <main className="svc-page">
      {/* ── Hero header ── */}
      <motion.div 
        className="svc-page__hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="svc-page__label" variants={itemVariants}>Our Treatments</motion.span>
        <motion.h1 className="svc-page__heading" variants={itemVariants}>
          Everything your smile<br />could ever need.
        </motion.h1>
        <motion.p className="svc-page__sub" variants={itemVariants}>
          From routine check-ups to advanced specialist care — all under one roof, for the whole family.
        </motion.p>
      </motion.div>

      {/* ── Card grid ── */}
      <div className="svc-page__grid container">
        {TREATMENTS.map((t, index) => (
          <div 
            key={t.id} 
            className="svc-card-wrapper"
            style={
              {
                '--side': index % 2 === 0 ? 1 : -1,
                '--amp': Math.ceil((index % 8) / 2),
              } as React.CSSProperties
            }
          >
            <article className="svc-card">
              <div className="svc-card__img-wrap">
                <img src={t.image} alt={t.title} className="svc-card__img" loading="lazy" />
              </div>
              <div className="svc-card__body">
                <span className="svc-card__tag">{t.tag}</span>
                <h2 className="svc-card__title">{t.title}</h2>
                <p className="svc-card__desc">{t.description}</p>
                <Link to="/coming-soon" className="svc-card__link">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>

      {/* ── CTA banner ── */}
      <div className="svc-page__cta-band">
        <div className="container svc-page__cta-inner">
          <div>
            <h3 className="svc-page__cta-title">Not sure which treatment you need?</h3>
          </div>
          <Link to="/booking" className="btn-shiny-wrap">
            <span className="btn--shiny">Set Appointment</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

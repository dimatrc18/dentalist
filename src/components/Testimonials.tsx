import './Testimonials.css';
import smileSophie from '../assets/smile_sophie.png';
import smileMarc from '../assets/smile_marc.png';
import smileJulie from '../assets/smile_julie.png';

const REVIEWS = [
  {
    name: 'Emine Cicek',
    location: 'Schaerbeek',
    initials: 'EC',
    smile: smileSophie,
    rating: 5,
    text: 'Top-notch dental practice! Warm welcome and quality care from a professional and attentive team. The premises are clean and modern. Appointments are very well organized, which prevents any delays. I highly recommend it! 🦷',
    featured: false,
  },
  {
    name: 'Reyhan Cicek',
    location: 'Schaerbeek',
    initials: 'RC',
    smile: smileMarc,
    rating: 5,
    text: 'A very professional and attentive dentist. You feel safe and secure. He really takes the time to explain everything thoroughly. If you\'re afraid or have children who are, go for it! Plus, the office is clean! What more can I say? 👍',
    featured: true,
  },
  {
    name: 'Selma Slma',
    location: 'Schaerbeek',
    initials: 'SS',
    smile: smileJulie,
    rating: 5,
    text: 'A very professional, attentive, and reassuring dentist. I\'ve been a patient for several years and have always appreciated the quality of his work and his professionalism. I highly recommend him.',
    featured: false,
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">

        {/* Header */}
        <div className="testimonials__header" data-reveal>
          <span className="section-label">Patient Stories</span>
          <div className="divider" style={{ margin: '0 auto 16px' }} />
          <h2 className="section-title" id="testimonials-heading">
            What our clients say
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonials__grid" data-reveal-group>
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className={`testimonial-card${r.featured ? ' testimonial-card--featured' : ''}`}
              data-reveal-item
            >
              <span className="testimonial-card__quote" aria-hidden="true">"</span>
              <div className="testimonial-card__stars" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="testimonial-card__text">"{r.text}"</p>
              <footer className="testimonial-card__author">
                <div className="testimonial-card__smile-wrap" aria-hidden="true">
                  <img
                    src={r.smile}
                    alt={`${r.name}'s smile after treatment`}
                    className="testimonial-card__smile"
                  />
                </div>
                <div>
                  <div className="testimonial-card__name">{r.name}</div>
                </div>
              </footer>
            </article>
          ))}
        </div>

        <div className="testimonials__cta" data-reveal data-reveal-delay="0.1">
          <div className="testimonials__rating" aria-label="Overall rating: 4.6 from 10 reviews on Google">
            <svg viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span><strong>4.6</strong> · 10 reviews on Google</span>
          </div>
        </div>

      </div>
    </section>
  );
}

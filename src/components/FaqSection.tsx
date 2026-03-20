import { useState } from 'react';
import './FaqSection.css';

const FAQ_DATA = [
  {
    q: 'What can I expect during my first visit?',
    a: 'Your first visit is designed to help you feel at ease. We start with a comprehensive check-up, walk you through our procedures, and create a personalised plan tailored to your needs.',
  },
  {
    q: 'How do you handle pain management during treatments?',
    a: 'We prioritize your comfort above all. We use the latest techniques in gentle, virtually painless dentistry and take the time to ensure you are fully numb and comfortable before any procedure begins.',
  },
  {
    q: 'What are your pricing policies?',
    a: 'At Dentalist, we believe in transparent pricing. We provide clear estimates before any treatment so there are no surprises, giving you the peace of mind to focus wholly on your dental health.',
  },
  {
    q: 'Do you accept my mutual fund or insurance?',
    a: 'We accept treatments covered by INAMI/RIZIV and welcome patients with specific mutual funds like Partenamut, Solidaris, and CM. We also accommodate private corporate insurance plans.',
  },
  {
    q: 'My child is scared of the dentist. How do you handle that?',
    a: 'This is one of the most common things parents ask us. Our team is trained specifically to work with children at their own pace. The first visit is mostly about making the experience feel safe and predictable.',
  },
  {
    q: 'I do not like my smile but my teeth are healthy. Is that something you can actually fix?',
    a: 'Absolutely. Healthy teeth and a smile you love are two different things, and you deserve both. Cosmetic treatments like veneers or Invisalign are designed exactly for this.',
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="faq-section section" id="faq">
      <div className="container">

        <div className="faq-header" data-reveal>
          <span className="section-label">Q&amp;A</span>
          <div className="divider mx-auto" />
          <h2 className="section-title text-center">Questions and Answers</h2>
        </div>

        <div className="faq-list" data-reveal-group>
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                data-reveal-item
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

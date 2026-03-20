import React from 'react';
import './Stats.css';

const STATS_DATA = [
  {
    badge: 'SINCE 2012',
    badgeColor: 'pink',
    value: '14+',
    description: 'Years of Experience in\nDental Excellence',
  },
  {
    badge: 'GOOGLE REVIEWS',
    badgeColor: 'yellow',
    value: '4.6/5',
    description: 'Star Rating on\nGoogle Reviews',
  },
  {
    badge: 'GROWING COMMUNITY',
    badgeColor: 'purple',
    value: '1,000+',
    description: 'Happy Patients\nTreated',
  },
  {
    badge: 'TRUSTED CARE',
    badgeColor: 'green',
    value: '100%',
    description: 'Commitment to\nPatient Comfort',
  },
];

export default function Stats() {
  return (
    <section className="stats-section container">
      {/* Section header */}
      <div className="stats-header" data-reveal data-reveal-delay="0">
        <span className="section-label">By The Numbers</span>
        <div className="divider" style={{ margin: '0 auto 0' }} />
      </div>

      <div className="stats-grid" data-reveal-group>
        {STATS_DATA.map((stat, i) => (
          <div key={i} className="stats-item" data-reveal-item>
            <span className={`stats-badge stats-badge--${stat.badgeColor}`}>
              {stat.badge}
            </span>
            <h2 className="stats-value" data-count>
              {stat.value}
            </h2>
            <p className="stats-desc">
              {stat.description.split('\n').map((line, j) => (
                <React.Fragment key={j}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

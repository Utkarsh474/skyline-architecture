import React from 'react';
import './WhyUs.css';

const REASONS = [
  {
    icon: '🏆',
    title: 'Award Winning',
    desc: 'Recognised globally for design excellence with over 30 industry awards across residential, commercial and public architecture.'
  },
  {
    icon: '🤝',
    title: 'Client Focused',
    desc: 'We listen first. Every project begins with a deep understanding of your goals, lifestyle, and vision before a single line is drawn.'
  },
  {
    icon: '⚙️',
    title: 'End to End Delivery',
    desc: 'From initial concept to final handover, we manage every phase of your project with precision and accountability.'
  },
  {
    icon: '💡',
    title: 'Innovative Thinking',
    desc: 'We constantly push the boundaries of design, embracing new technologies and materials to deliver spaces that are ahead of their time.'
  },
];

function WhyUs() {
  return (
    <section className="section-padding" id="whyus">
      <div className="container">
        <h2 className="section-title reveal">Why Choose Us</h2>
        <p className="description-text reveal">
          We don't just design buildings — we craft experiences. Here is what
          sets Skyline Architecture apart.
        </p>
        <div className="whyus__grid">
          {REASONS.map((reason, index) => (
            <div className="whyus__card reveal" key={index}>
              <span className="whyus__icon">{reason.icon}</span>
              <h3 className="whyus__title">{reason.title}</h3>
              <p className="whyus__desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
import React from 'react';
import './Services.css';

const SERVICES = [
  {
    icon: '🏗',
    title: 'Architectural Design',
    desc: 'From initial concept sketches to detailed construction documents, we deliver complete architectural solutions tailored to your vision and requirements.'
  },
  {
    icon: '🏠',
    title: 'Residential Projects',
    desc: 'We design bespoke homes that reflect the personality and lifestyle of our clients — from luxury villas to modern urban apartments.'
  },
  {
    icon: '🏢',
    title: 'Commercial Spaces',
    desc: 'Our commercial designs maximise functionality and brand identity, creating workplaces and retail environments that drive success.'
  },
  {
    icon: '🌿',
    title: 'Sustainable Design',
    desc: 'We integrate eco-friendly materials and energy-efficient systems into every project, building responsibly for a better future.'
  },
  {
    icon: '🖥',
    title: '3D Visualisation',
    desc: 'Photorealistic renders and walkthroughs that let you experience your space before a single brick is laid.'
  },
  {
    icon: '📐',
    title: 'Interior Design',
    desc: 'Seamlessly blending architecture with interior aesthetics, we create spaces that are as beautiful inside as they are outside.'
  },
];

function Services() {
  return (
    <section className="section-padding" id="services">
      <div className="container">
        <h2 className="section-title reveal">Our Services</h2>
        <p className="description-text reveal">
          We offer a comprehensive range of architectural and design services,
          delivering excellence at every stage of your project.
        </p>
        <div className="services__grid">
          {SERVICES.map((service, index) => (
            <div className="services__card reveal" key={index}>
              <span className="services__icon">{service.icon}</span>
              <h3 className="services__title">{service.title}</h3>
              <p className="services__desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
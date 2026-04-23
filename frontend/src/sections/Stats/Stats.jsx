import React from 'react';
import './Stats.css';

const STATS = [
  { number: '200+', label: 'Projects Completed' },
  { number: '15+',  label: 'Years of Excellence' },
  { number: '50+',  label: 'Expert Architects' },
  { number: '30+',  label: 'Awards Won' },
];

function Stats() {
  return (
    <section className="stats">
      <div className="stats__grid container">
        {STATS.map((stat, index) => (
          <div className="stats__item reveal" key={index}>
            <h3 className="stats__number">{stat.number}</h3>
            <p className="stats__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
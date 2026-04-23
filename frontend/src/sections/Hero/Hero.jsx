import React from 'react';
import './Hero.css';
import scrollTo from '../../utils/scrollTo';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <p className="hero__subtitle">Premium Architecture & Design</p>
        <h1 className="hero__title">WE BUILD<br />YOUR VISION</h1>
        <p className="hero__description">
          Crafting iconic spaces that blend innovation, elegance, and purpose.
          From concept to completion, we design for the future.
        </p>
        <div className="hero__buttons">
          <button className="btn-main" onClick={() => scrollTo('projects')}>
            View Our Work
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
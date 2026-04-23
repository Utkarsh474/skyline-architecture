import React from 'react';
import './About.css';

function About() {
  return (
    <section className="section-padding bg-light" id="about">
      <div className="container">
        <h2 className="section-title reveal">About Us</h2>
        <p className="description-text reveal">
          Skyline Architecture is a premier design firm with over 15 years of
          experience crafting extraordinary spaces. We believe architecture is
          more than construction — it is the art of shaping how people live,
          work, and experience the world around them.
        </p>
        <div className="about__grid">
          <div className="about__card reveal">
            <span className="about__icon">🏛</span>
            <h3>Our Philosophy</h3>
            <p>
              Every structure we design is a statement — bold, purposeful, and
              built to endure. We merge timeless design principles with
              cutting-edge innovation.
            </p>
          </div>
          <div className="about__card reveal">
            <span className="about__icon">🎯</span>
            <h3>Our Mission</h3>
            <p>
              To deliver architecture that transcends expectations — spaces that
              inspire, function flawlessly, and stand as landmarks for
              generations to come.
            </p>
          </div>
          <div className="about__card reveal">
            <span className="about__icon">🌍</span>
            <h3>Our Reach</h3>
            <p>
              From residential masterpieces to large-scale commercial
              developments, our portfolio spans across cities and continents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
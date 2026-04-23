import React, { useState } from 'react';
import './Projects.css';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import project5 from '../../assets/project5.jpg';
import project6 from '../../assets/project6.jpg';

const PROJECTS = [
  {
    title: 'The Obsidian Tower',
    category: 'Commercial',
    location: 'Mumbai, India',
    year: '2023',
    image: project1,
  },
  {
    title: 'Villa Aurum',
    category: 'Residential',
    location: 'Goa, India',
    year: '2022',
    image: project2,
  },
  {
    title: 'The Pearl Convention Centre',
    category: 'Commercial',
    location: 'Delhi, India',
    year: '2023',
    image: project3,
  },
  {
    title: 'Horizon Residences',
    category: 'Residential',
    location: 'Bangalore, India',
    year: '2021',
    image: project4,
  },
  {
    title: 'Arclight Cultural Hub',
    category: 'Public',
    location: 'Chennai, India',
    year: '2022',
    image: project5,
  },
  {
    title: 'Zenith Corporate Park',
    category: 'Commercial',
    location: 'Hyderabad, India',
    year: '2024',
    image: project6,
  },
];

const FILTERS = ['All', 'Residential', 'Commercial', 'Public'];

function Projects() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active);

  return (
    <section className="section-padding bg-light" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Our Projects</h2>
        <p className="description-text reveal">
          A curated selection of our finest work across residential, commercial,
          and public spaces.
        </p>

        <div className="projects__filters reveal">
          {FILTERS.map(filter => (
            <button
              key={filter}
              className={'projects__filter' + (active === filter ? ' projects__filter--active' : '')}
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, index) => (
            <div className="projects__card reveal" key={index}>
              <div
                className="projects__card-image"
                style={{ backgroundImage: 'url(' + project.image + ')' }}
              >
                <span className="projects__category">{project.category}</span>
              </div>
              <div className="projects__card-info">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-meta">
                  {project.location} &nbsp;·&nbsp; {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
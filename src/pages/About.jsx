import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about page">
      <section className="about-hero-premium">
        <div className="container">
          <span className="tagline">A Legacy of Excellence</span>
          <h1>Half a <span className="text-stroke">Century</span> of Expertise</h1>
        </div>
      </section>

      <section className="about-identity">
        <div className="container grid-2">
          <div className="identity-text">
            <h2>NW Ontario's Premier Authority.</h2>
            <p className="large-lead">
              Founded on the belief that reliability is a lifeline. Since 2009, Pro-Tech has served as the 
              cornerstone of regional infrastructure, leveraging over 50 years of collective technical mastery.
            </p>
            <p>
              In a region defined by its rugged landscape, our position as the <strong>largest stocking pump and motor supplier</strong> 
              isn't just a logistical fact—it's a competitive moat. We eliminate catastrophic downtime by providing 
              immediate, off-the-shelf access to parts others have to "order in."
            </p>
            <div className="about-stats-premium">
              <div className="a-stat">
                <strong>50+</strong>
                <span>Years Exp.</span>
              </div>
              <div className="a-stat">
                <strong>#1</strong>
                <span>Stocking Supplier</span>
              </div>
              <div className="a-stat">
                <strong>99.99%</strong>
                <span>Purity Promise</span>
              </div>
            </div>
          </div>
          <div className="identity-image-stack">
            <div className="img-main">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1500" alt="Precision Engineering" />
            </div>
            <div className="img-accent">
               <div className="accent-box">
                  <p>Authorized Dealer of Excalibur, Leeson, Pompco, and Barnes.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="values-grid">
            <div className="value-item">
               <h3>Technical Partnership</h3>
               <p>We move beyond simple transactions to professional consultations, ensuring the job is "done right" the first time.</p>
            </div>
            <div className="value-item">
               <h3>Canadian-Made Moat</h3>
               <p>Prioritizing domestic quality from Excalibur and Pompco ensures equipment is ruggedized for the NWO climate.</p>
            </div>
            <div className="value-item">
               <h3>Inventory Readiness</h3>
               <p>While others order, we stock. 99% of mission-critical parts are ready for immediate dispatch from 10th Ave.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-final">
        <div className="container">
          <h2>Trust Your Infrastructure to Experts</h2>
          <Link to="/contact" className="btn-primary">Initiate Technical Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

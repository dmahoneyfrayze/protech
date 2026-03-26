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
            <h2>Pro-Tech: Not Just a Supplier, But a Partner.</h2>
            <p className="large-lead">
              Since 2009, Pro-Tech Sales and Service has been the backbone of NW Ontario's water infrastructure. 
              But our roots go much deeper, with over 50 years of collective mastery in pump systems and electric motors.
            </p>
            <p>
              We've built our reputation on one simple principle: reliability. Whether it's a residential 
              water filter or a multi-kilowatt industrial motor, we treat every installation with the same 
              precision engineering.
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
                <strong>NW</strong>
                <span>Ontario Focus</span>
              </div>
            </div>
          </div>
          <div className="identity-image-stack">
            <div className="img-main">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1500" alt="Precision Engineering" />
            </div>
            <div className="img-accent">
               <div className="accent-box">
                  <p>Authorized Dealer of Excalibur, Leeson, and more.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="values-grid">
            <div className="value-item">
               <h3>Authenticity</h3>
               <p>We source our products primarily from Canadian manufacturers, ensuring quality that meets national standards.</p>
            </div>
            <div className="value-item">
               <h3>Regional Pride</h3>
               <p>Serving Thunder Bay isn't just business—it's supporting the community that fuels our growth.</p>
            </div>
            <div className="value-item">
               <h3>Expert Support</h3>
               <p>Our team provides end-to-end support, from initial blueprinting to emergency repairs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta-final">
        <div className="container">
          <h2>Put Our Experience to Work</h2>
          <Link to="/contact" className="btn-primary">Professional Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default About;

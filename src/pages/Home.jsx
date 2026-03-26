import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home page">
      {/* Immersive Hero Section - Inventory Readiness Focus */}
      <section className="hero">
        <div className="hero-video-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content reveal">
            <span className="hero-tagline">NW Ontario's Largest Stocking Supplier • Since 2009</span>
            <h1>Industry <span className="text-stroke">Ready</span> <br />Solutions <span className="text-red">Delivered</span></h1>
            <p className="hero-lead">
              While others "order in," we stock deep. Eliminating catastrophic downtime with 
              immediate access to the region's largest inventory of pumps and electric motors.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Get Immediate Support</Link>
              <Link to="/services" className="btn-outline-premium">Inventory Overview</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>SCROLL</span>
          <div className="line"></div>
        </div>
      </section>

      {/* Strategic Niche Pathways */}
      <section className="niche-pathways">
        <div className="container">
          <div className="pathway-grid">
            <Link to="/services" className="pathway-card residential reveal">
              <div className="card-bg"></div>
              <div className="card-content">
                <span className="card-num">01</span>
                <h3>The 99.99% Assurance</h3>
                <p>Pure water isn't a luxury—it's a health requirement. Professional-grade filtration for your family home or camp.</p>
                <span className="card-link">Safe Water Solutions →</span>
              </div>
            </Link>

            <Link to="/services" className="pathway-card commercial reveal">
              <div className="card-bg"></div>
              <div className="card-content">
                <span className="card-num">02</span>
                <h3>Industrial Uptime</h3>
                <p>Engineered for Mining, Paper Mills, and Air Systems. Immediate replacements for mission-critical motors.</p>
                <span className="card-link">Maximize Production →</span>
              </div>
            </Link>

            <Link to="/installations" className="pathway-card installations reveal">
              <div className="card-bg"></div>
              <div className="card-content">
                <span className="card-num">03</span>
                <h3>Sub-Sewer Expansion</h3>
                <p>Enabling basement transformations with specialized sewage pumps for bathrooms and laundry suites below the line.</p>
                <span className="card-link">View Installations →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Showcase - Reputed Partners */}
      <section className="brand-showcase">
        <div className="container">
          <div className="brand-header">
            <h2>Authorized Dealer of <span className="text-red">Global Leaders</span></h2>
            <p>Genuine warrantied parts from Leeson, Excalibur, Pompco, and Barnes.</p>
          </div>
          <div className="brand-ticker">
            <div className="ticker-track">
              <span>Leeson® Authorized</span>
              <span>Excalibur Water</span>
              <span>Pompco Pumps</span>
              <span>Barnes Systems</span>
              <span>Goulds Water Tech</span>
              <span>Leeson® Authorized</span>
              <span>Excalibur Water</span>
              <span>Pompco Pumps</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Consultation Section (The Dom Narrative) */}
      <section className="consultative-expertise">
        <div className="container expertise-grid">
          <div className="expertise-image">
            <img src="https://images.unsplash.com/photo-1581092162384-8987ec176471?auto=format&fit=crop&q=80&w=1500" alt="Technical Consultation" />
            <div className="experience-badge">
              <strong>50+</strong>
              <span>Years of Mastery</span>
            </div>
          </div>
          <div className="expertise-text">
            <h2>Partnership, <br />Not Just a Transaction</h2>
            <p>
              Moving beyond hardware sales to professional consultation. Our experts, led by veterans like Dom, 
              ensure every system—from camp UV filters to complex industrial motors—is "done right" the first time.
            </p>
            <div className="expertise-list">
              <div className="list-item">
                 <h4>Consultative Engineering</h4>
                 <p>Tailoring system blueprints to the unique rigors of NW Ontario's climate.</p>
              </div>
              <div className="list-item">
                 <h4>Technical Proof</h4>
                 <p>Specialized inventory including high-performance components like the SS362 motor.</p>
              </div>
            </div>
            <Link to="/about" className="btn-secondary">Technical Legacy</Link>
          </div>
        </div>
      </section>

      {/* Canadian-Made Moat */}
      <section className="canadian-moat">
        <div className="container">
           <div className="moat-box">
              <h2>The Canadian-Made Moat</h2>
              <p>
                We prioritize domestic quality. By stocking Canadian manufacturers like Pompco and Excalibur, 
                we ensure your equipment is ruggedized for the North West Ontario environment, creating 
                a promise of durability that "big-box" imports simply cannot match.
              </p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

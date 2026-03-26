import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home page">
      {/* Immersive Hero Section */}
      <section className="hero">
        <div className="hero-video-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content reveal">
            <span className="hero-tagline">Since 2009 • NW Ontario's Leaders</span>
            <h1>Superior Water <br /><span className="text-stroke">Solutions</span> & Expert <span className="text-red">Motors</span></h1>
            <p className="hero-lead">
              From high-precision industrial motor repairs to residential water purity, 
              we deliver engineered reliability for every drop.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">Book Consultation</Link>
              <Link to="/services" className="btn-outline-premium">Discover Services</Link>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>SCROLL</span>
          <div className="line"></div>
        </div>
      </section>

      {/* Niche Pathways Section */}
      <section className="niche-pathways">
        <div className="container">
          <div className="pathway-grid">
            <Link to="/services" className="pathway-card residential reveal">
              <div className="card-bg"></div>
              <div className="card-content">
                <span className="card-num">01</span>
                <h3>Residential</h3>
                <p>Pure water filtration, UV systems, and home pump installations tailored for family safety.</p>
                <span className="card-link">Explore Home Solutions →</span>
              </div>
            </Link>

            <Link to="/services" className="pathway-card commercial reveal">
              <div className="card-bg"></div>
              <div className="card-content">
                <span className="card-num">02</span>
                <h3>Commercial & Industrial</h3>
                <p>High-capacity motors, heavy-duty pumps, and mission-critical water treatment for NW Ontario industries.</p>
                <span className="card-link">Industrial Efficiency →</span>
              </div>
            </Link>

            <Link to="/installations" className="pathway-card installations reveal">
              <div className="card-bg"></div>
              <div className="card-content">
                <span className="card-num">03</span>
                <h3>Professional Installations</h3>
                <p>End-to-end expert implementation of pump systems and sewage solutions with a lifetime of reliability.</p>
                <span className="card-link">View Installations →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Brands Section */}
      <section className="brand-showcase">
        <div className="container">
          <div className="brand-header">
            <h2>Authorized Dealer of <span className="text-red">Premium Brands</span></h2>
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

      {/* Expertise Section */}
      <section className="expertise-immersive">
        <div className="container expertise-grid">
          <div className="expertise-image">
            <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1500" alt="Industrial Engineering" />
            <div className="experience-badge">
              <strong>50+</strong>
              <span>Years of Expertise</span>
            </div>
          </div>
          <div className="expertise-text">
            <h2>NW Ontario's Largest <br />Stocking Supplier</h2>
            <p>
              We don't just sell equipment; we engineer solutions. Our facility in Thunder Bay 
              houses an extensive inventory of pumps and motors ready for immediate deployment.
            </p>
            <div className="expertise-list">
              <div className="list-item">
                 <h4>Fast Installation</h4>
                 <p>Minimized downtime with our expert onsite crews.</p>
              </div>
              <div className="list-item">
                 <h4>Emergency Support</h4>
                 <p>Reliable service when your systems face critical failure.</p>
              </div>
            </div>
            <Link to="/about" className="btn-secondary">Learn Our Story</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

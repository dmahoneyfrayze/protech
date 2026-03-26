import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Authentic Assets
import logoImg from '../assets/original/logo.jpg';
import pumpImg from '../assets/original/pump.jpg';
import pipeImg from '../assets/original/pipe.jpg';
import vPumpImg from '../assets/original/v_pump.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <div className="home page">
      {/* Immersive Hero Section - Inventory Readiness Focus */}
      <section className="hero">
        <div className="hero-video-overlay"></div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="hero-tagline">NW Ontario's Largest Stocking Supplier • Since 2009</motion.span>
            <motion.h1 variants={fadeInUp}>Industry <span className="text-stroke">Ready</span> <br />Solutions <span className="text-red">Delivered</span></motion.h1>
            <motion.p variants={fadeInUp} className="hero-lead">
              While others "order in," we stock deep. Eliminating catastrophic downtime with 
              immediate access to the region's largest inventory of pumps and electric motors.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-actions">
              <Link to="/contact" className="btn-primary">Get Immediate Support</Link>
              <Link to="/services" className="btn-outline-premium">Inventory Overview</Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-scroll-indicator">
          <span>SCROLL</span>
          <div className="line"></div>
        </div>
      </section>

      {/* Strategic Niche Pathways */}
      <section className="niche-pathways">
        <div className="container">
          <motion.div 
            className="pathway-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link to="/services" className="pathway-card residential">
                <div className="card-bg" style={{backgroundImage: `url(${vPumpImg})`}}></div>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <span className="card-num">01</span>
                  <h3>Home & Rural Water Security</h3>
                  <p>Whether you're on city water or a rural well, pure water is a health requirement. Professional-grade filtration for your family home or camp.</p>
                  <span className="card-link">Safe Water Solutions →</span>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/services" className="pathway-card commercial">
                <div className="card-bg" style={{backgroundImage: `url(${pipeImg})`}}></div>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <span className="card-num">02</span>
                  <h3>Industrial Uptime</h3>
                  <p>Engineered for Mining, Paper Mills, and Air Systems. Immediate replacements for mission-critical motors.</p>
                  <span className="card-link">Maximize Production →</span>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/installations" className="pathway-card installations">
                <div className="card-bg" style={{backgroundImage: `url(${pumpImg})`}}></div>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <span className="card-num">03</span>
                  <h3>Sub-Sewer Expansion</h3>
                  <p>Enabling basement transformations with specialized sewage pumps for bathrooms and laundry suites below the line.</p>
                  <span className="card-link">View Installations →</span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
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
          <motion.div 
            className="expertise-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={logoImg} alt="Pro-Tech Engineering Mastery" className="authentic-img" />
            <div className="experience-badge">
              <strong>50+</strong>
              <span>Years of Mastery</span>
            </div>
          </motion.div>
          <motion.div 
            className="expertise-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>Partnership, <br />Not Just a Transaction</motion.h2>
            <motion.p variants={fadeInUp}>
              Moving beyond hardware sales to professional consultation. Our experts, led by veterans like Dom, 
              ensure every system—from camp UV filters to complex industrial motors—is "done right" the first time.
            </motion.p>
            <div className="expertise-list">
              <motion.div variants={fadeInUp} className="list-item">
                 <h4>Consultative Engineering</h4>
                 <p>Tailoring system blueprints to the unique rigors of NW Ontario's climate.</p>
              </motion.div>
              <motion.div variants={fadeInUp} className="list-item">
                 <h4>Technical Proof</h4>
                 <p>Specialized inventory including high-performance components like the SS362 motor.</p>
              </motion.div>
            </div>
            <motion.div variants={fadeInUp}>
              <Link to="/about" className="btn-secondary">Technical Legacy</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Lead Magnets */}
      <section className="lead-magnets">
        <div className="container">
          <div className="magnet-grid">
            <motion.div 
              className="magnet-card dark-magnet"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="magnet-tag">For Urban & Rural Homeowners</span>
              <h3>The Ultimate Water Security Guide</h3>
              <p>From municipal hard water to rural well contamination. Learn how to safeguard your family's water supply. Download our free guide.</p>
              <form className="magnet-form">
                <input type="email" placeholder="Your Email Address" required />
                <button type="submit" className="btn-primary">Download Guide</button>
              </form>
            </motion.div>

            <motion.div 
              className="magnet-card red-magnet"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="magnet-tag">For Industrial Facilities</span>
              <h3>Zero-Downtime Industrial Audit</h3>
              <p>Identify failure points in your specific water and air systems before they halt production. Request an on-site evaluation.</p>
              <form className="magnet-form">
                <input type="email" placeholder="Work Email" required />
                <button type="submit" className="btn-white">Request Audit</button>
              </form>
            </motion.div>
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

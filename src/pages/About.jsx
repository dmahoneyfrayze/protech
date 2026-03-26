import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import pumpImg from '../assets/original/pump.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <div className="about page">
      <section className="about-hero-premium">
        <motion.div 
          className="container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeInUp} className="tagline">A Legacy of Excellence</motion.span>
          <motion.h1 variants={fadeInUp}>Half a <span className="text-stroke">Century</span> of Expertise</motion.h1>
        </motion.div>
      </section>

      <section className="about-identity">
        <div className="container grid-2">
          <motion.div 
            className="identity-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp}>NW Ontario's Premier Authority.</motion.h2>
            <motion.p variants={fadeInUp} className="large-lead">
              Founded on the belief that reliability is a lifeline. Since 2009, Pro-Tech has served as the 
              cornerstone of regional infrastructure, leveraging over 50 years of collective technical mastery.
            </motion.p>
            <motion.p variants={fadeInUp}>
              In a region defined by its rugged landscape, our position as the <strong>largest stocking pump and motor supplier</strong> 
              isn't just a logistical fact—it's a competitive moat. We eliminate catastrophic downtime by providing 
              immediate, off-the-shelf access to parts others have to "order in."
            </motion.p>
            <motion.div variants={fadeInUp} className="about-stats-premium">
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
            </motion.div>
          </motion.div>
          <motion.div 
            className="identity-image-stack"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="img-main">
              <img src={pumpImg} alt="Pro-Tech Pumps" className="authentic-rect" />
            </div>
            <div className="img-accent">
               <div className="accent-box">
                  <p>Authorized Dealer of Excalibur, Leeson, Pompco, and Barnes.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <motion.div 
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="value-item">
               <h3>Technical Partnership</h3>
               <p>We move beyond simple transactions to professional consultations, ensuring the job is "done right" the first time.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="value-item">
               <h3>Canadian-Made Moat</h3>
               <p>Prioritizing domestic quality from Excalibur and Pompco ensures equipment is ruggedized for the NWO climate.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="value-item">
               <h3>Inventory Readiness</h3>
               <p>While others order, we stock. 99% of mission-critical parts are ready for immediate dispatch from 10th Ave.</p>
            </motion.div>
          </motion.div>
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

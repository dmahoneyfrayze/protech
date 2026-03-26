import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const Contact = () => {
  return (
    <div className="contact page">
      <section className="contact-hero-premium">
        <div className="container">
          <span className="tagline">Global Expertise, Local Support</span>
          <h1>Connect With <br /><span className="text-stroke">Solutions</span></h1>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <motion.div 
            className="contact-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="contact-info">
              <h2>Reach the Experts</h2>
              <p className="contact-lead">Direct lines to our technical staff. We prioritize emergency industrial triage and urgent residential needs.</p>
              
              <div className="info-block">
                <h4>Primary Line</h4>
                <a href="tel:8073468324" className="large-phone">807-346-8324</a>
              </div>

              <div className="info-block">
                <h4>Secondary Operations</h4>
                <a href="tel:8076295555" className="alt-phone">807-629-5555</a>
                <a href="tel:8076274444" className="alt-phone">807-627-4444</a>
              </div>

              <div className="info-block">
                <h4>Email Inquiries</h4>
                <a href="mailto:salestb@protechsales.ca">salestb@protechsales.ca</a>
                <br />
                <a href="mailto:protech@tbaytel.net">protech@tbaytel.net</a>
              </div>

              <div className="info-block hq-address">
                <h4>Thunder Bay Headquarters</h4>
                <p>
                  541 Tenth Ave<br />
                  Thunder Bay, Ontario<br />
                  P7B 2R3
                </p>
                <span className="accessibility-note">♿ Wheelchair Accessible Facility</span>
              </div>
            </motion.div>

            {/* Direct Inquiry Form */}
            <motion.div variants={fadeInUp} className="contact-form-wrapper">
              <h3>Technical Inquiry</h3>
              <form className="premium-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name required</label>
                  <input type="text" id="name" required />
                </div>
                <div className="p-field">
                  <label>Company (Optional)</label>
                  <input type="text" placeholder="Organization" />
                </div>
                <div className="p-field">
                  <label>Strategic Interest / Sector</label>
                  <select required>
                    <option value="" disabled selected>Select priority area</option>
                    <option value="99.99">Residential 99.99% Assurance (UV/Filters)</option>
                    <option value="expansion">Sub-Sewer Level Expansion (Sewage Pumps)</option>
                    <option value="uptime">Industrial Uptime (Mining/Paper/Motors)</option>
                    <option value="camp">Seasonal / Camp Water Solutions</option>
                    <option value="repair">Emergency Technical Service</option>
                  </select>
                </div>
                <div className="p-field">
                  <label>Project Details / Part Requirements</label>
                  <textarea rows="6" placeholder="Describe your technical requirements or specify part numbers (e.g. SS362 motor)..."></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">Initiate Consultation</button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inventory Location Moat */}
      <section className="inventory-moat-contact">
        <div className="container">
          <motion.div 
            className="moat-contact-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Zero-Delay Logistics</h3>
            <p>Our 10th Ave facility houses the region's largest localized inventory of pumps and motors. When your system fails, we have the exact part ready for immediate dispatch.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

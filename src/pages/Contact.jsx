import React from 'react';
import './Contact.css';

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
        <div className="container contact-grid-premium">
          <div className="contact-details-premium">
            <div className="detail-item reveal">
              <span className="detail-label">Office & Facility</span>
              <h3>541 Tenth Ave, <br />Thunder Bay, ON P7B 2R3</h3>
            </div>
            <div className="detail-item reveal" style={{animationDelay: '0.1s'}}>
              <span className="detail-label">Direct Lines</span>
              <h3><a href="tel:807-346-8324">807-346-8324</a></h3>
              <p>Available for emergency service and technical support.</p>
            </div>
            <div className="detail-item reveal" style={{animationDelay: '0.2s'}}>
              <span className="detail-label">Email Communications</span>
              <h3><a href="mailto:salestb@protechsales.ca">salestb@protechsales.ca</a></h3>
            </div>
          </div>

          <div className="contact-form-premium reveal">
            <h2>Project Inquiry</h2>
            <form>
              <div className="premium-field-grid">
                <div className="p-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="p-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="p-field">
                <label>Sector / Category</label>
                <select required>
                  <option value="" disabled selected>Select your sector</option>
                  <option value="residential">Residential / Homeowner</option>
                  <option value="commercial">Commercial / Industrial Property</option>
                  <option value="install">New System Installation</option>
                  <option value="repair">Emergency Repair / Maintenance</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>

              <div className="p-field">
                <label>Project Details</label>
                <textarea rows="6" placeholder="Describe your requirements in detail..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      <section className="map-placeholder">
        <div className="container">
          <div className="map-box">
             <p>Thunder Bay Head Office Operations Map Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

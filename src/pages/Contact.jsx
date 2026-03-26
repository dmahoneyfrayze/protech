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
              <p>Wheelchair accessible physical location.</p>
            </div>
            <div className="detail-item reveal" style={{animationDelay: '0.1s'}}>
              <span className="detail-label">Direct & Regional Lines</span>
              <h3><a href="tel:807-346-8324">807-346-8324</a> (Local)</h3>
              <h3><a href="tel:1-877-733-8999">1-877-733-8999</a> (Regional)</h3>
              <p>Available for emergency service and technical support.</p>
            </div>
            <div className="detail-item reveal" style={{animationDelay: '0.2s'}}>
              <span className="detail-label">Email Communications</span>
              <h3><a href="mailto:salestb@protechsales.ca">salestb@protechsales.ca</a></h3>
              <h3><a href="mailto:protech@tbaytel.net">protech@tbaytel.net</a></h3>
            </div>
          </div>

          <div className="contact-form-premium reveal">
            <h2>Technical Inquiry</h2>
            <form>
              <div className="premium-field-grid">
                <div className="p-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="p-field">
                  <label>Company (Optional)</label>
                  <input type="text" placeholder="Organization" />
                </div>
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
          </div>
        </div>
      </section>

      <section className="inventory-moat-contact">
        <div className="container">
           <div className="moat-contact-box">
              <h3>Inventory Readiness Advantage</h3>
              <p>While competitors order in, we have it on the shelf. Solve your technical emergency today with NW Ontario's largest stocking supplier.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

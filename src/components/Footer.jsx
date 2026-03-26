import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-text">
            <span className="logo-pro">PRO</span>
            <span className="logo-tech">-TECH</span>
          </div>
          <p className="footer-desc">
            North West Ontario's largest stocking pump and electric motor supplier. 
            Providing expert water solutions for over 50 years.
          </p>
          <div className="footer-contact-info">
            <p><strong>Address:</strong> 541 Tenth Ave, Thunder Bay, ON P7B 2R3</p>
            <p><strong>Phone:</strong> <a href="tel:807-346-8324">807-346-8324</a></p>
            <p><strong>Email:</strong> <a href="mailto:salestb@protechsales.ca">salestb@protechsales.ca</a></p>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Sales & Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li>Water Pumps</li>
            <li>Electric Motors</li>
            <li>Water Filtration</li>
            <li>UV Purification</li>
            <li>Sewage Pumps</li>
          </ul>
        </div>

        <div className="footer-cta">
          <h4>Need a Quote?</h4>
          <p>Contact our experts today for a professional consultation.</p>
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Pro-Tech Sales and Service. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/legal">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

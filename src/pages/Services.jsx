import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const residentialServices = [
    { title: "Water Purity & Filtration", desc: "Advanced Excalibur systems for safe, clean family water.", icon: "💎" },
    { title: "Home Pump Systems", desc: "Reliable residential water delivery and pressure solutions.", icon: "🚰" },
    { title: "UV Purification", desc: "99.99% bacteria-free drinking water for your peace of mind.", icon: "🛡️" }
  ];

  const commercialServices = [
    { title: "High-Capacity Motors", desc: "Industrial-grade Leeson motors for mission-critical apps.", icon: "⚡" },
    { title: "Sewage & Waste Pumps", desc: "Efficient waste management for facilities and developments.", icon: "🏗️" },
    { title: "System Maintenance", desc: "Preventative service contracts for zero industrial downtime.", icon: "🛠️" }
  ];

  return (
    <div className="services page">
      <section className="services-header-premium">
        <div className="container">
          <span className="tagline">Engineered Reliability</span>
          <h1>Industrial <span className="text-stroke">Grade</span> <br />Solutions</h1>
        </div>
      </section>

      {/* Residential Section */}
      <section className="service-category residential-sec">
        <div className="container">
          <div className="category-header">
            <h2>01 / <span className="text-red">Residential</span> Solutions</h2>
            <p>Elevating home water quality with professional-grade technology.</p>
          </div>
          <div className="premium-service-grid">
            {residentialServices.map((s, i) => (
              <div key={i} className="premium-card reveal">
                <div className="p-card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="service-category commercial-sec">
        <div className="container">
          <div className="category-header text-right">
            <h2>02 / <span className="text-red">Commercial</span> & Industrial</h2>
            <p>Scaling power and efficiency for NW Ontario's industries.</p>
          </div>
          <div className="premium-service-grid">
            {commercialServices.map((s, i) => (
              <div key={i} className="premium-card reveal dark-card">
                <div className="p-card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & Quality */}
      <section className="brands-dark">
        <div className="container">
            <div className="brand-box">
                <p>Authorized Dealer for LEESON®, EXCALIBUR, POMPCO, BARNES & GOULDS</p>
            </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Need a Custom System?</h2>
          <p>Our engineers will design a solution tailored to your specific requirements.</p>
          <Link to="/contact" className="btn-primary">Get Technical Advice</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

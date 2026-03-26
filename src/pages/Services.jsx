import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const residentialServices = [
    { 
      title: "The 99.99% Assurance", 
      desc: "Repositioning filtration from hardware to health. Our UV systems render water 99.99% free from bacteria—a non-negotiable for NWO homes and camps.", 
      icon: "🛡️" 
    },
    { 
      title: "Sub-Sewer Expansion", 
      desc: "Enabling basement suite transformations. specialized sewage pumps for bathrooms and laundry rooms below the line.", 
      icon: "🏗️" 
    },
    { 
      title: "Camp Water Security", 
      desc: "Reliable pump and filtration solutions engineered for the unique rigors of seasonal and remote North West Ontario properties.", 
      icon: "🌲" 
    }
  ];

  const industrialServices = [
    { 
      title: "Mining & Heavy Industry", 
      desc: "Immediate replacement for heavy-duty motors (like SS362) in extraction environments where shipping delays equate to massive revenue loss.", 
      icon: "⛏️" 
    },
    { 
      title: "Paper Mill Systems", 
      desc: "Maintaining the high-volume water movement and electric motors essential for continuous production in regional mills.", 
      icon: "📜" 
    },
    { 
      title: "Air & Gas Compressors", 
      desc: "Dominating the repair and supply of industrial air systems—a high-frequency maintenance category for local manufacturing.", 
      icon: "🌬️" 
    }
  ];

  return (
    <div className="services page">
      <section className="services-header-premium">
        <div className="container">
          <span className="tagline">Engineered Reliability</span>
          <h1>Industrial <span className="text-stroke">Grade</span> <br />Solutions</h1>
          <p className="header-sub">North West Ontario's largest stocking supplier of Excalibur, Pompco, Barnes, and Leeson.</p>
        </div>
      </section>

      {/* Residential Section */}
      <section className="service-category residential-sec">
        <div className="container">
          <div className="category-header">
            <h2>01 / <span className="text-red">Residential</span> Health-Centric</h2>
            <p>Moving from hardware sales to "Family Health & Safety" provision.</p>
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
            <h2>02 / <span className="text-red">Commercial</span> Uptime</h2>
            <p>Leveraging "Inventory Readiness" to eliminate catastrophic downtime in NW Ontario's core sectors.</p>
          </div>
          <div className="premium-service-grid">
            {industrialServices.map((s, i) => (
              <div key={i} className="premium-card reveal dark-card">
                <div className="p-card-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership-cta-section">
        <div className="container">
          <div className="partnership-box">
             <h2>Technical Partnership Program</h2>
             <p>
               Join our formal partnership program for high-volume water users. 
               Direct preventative maintenance contracts for car washes, tire shops, 
               and agricultural irrigation systems.
             </p>
             <Link to="/contact" className="btn-primary">Become a Partner</Link>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Need a Custom System?</h2>
          <p>Our engineers will design a solution tailored to your specific requirements.</p>
          <Link to="/contact" className="btn-outline">Consult Technical Experts</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

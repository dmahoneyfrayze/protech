import React from 'react';
import './Installations.css';
import { Link } from 'react-router-dom';

const Installations = () => {
  const caseStudies = [
    {
      title: "Camp Water Security",
      location: "Shebandowan Lake",
      desc: "Full UV purification and pump installation rendering lake-source water 99.99% pure for a family property.",
      type: "Residential"
    },
    {
      title: "Mining Motor Replacement",
      location: "Greenstone Gold",
      desc: "Emergency 24-hour turnaround for a mission-critical Leeson SS362 motor, preventing massive production loss.",
      type: "Industrial"
    },
    {
      title: "Sub-Sewer Basement Suite",
      location: "Port Arthur District",
      desc: "Specialized Barnes sewage pump system enabling two new luxury bathrooms in a high-value basement renovation.",
      type: "Expansion"
    }
  ];

  return (
    <div className="installations page">
      <section className="install-hero">
        <div className="container">
          <span className="tagline">Precision Engineering</span>
          <h1>Stellar <span className="text-stroke">Execution</span> <br />Regional <span className="text-red">Impact</span></h1>
        </div>
      </section>

      <section className="install-process">
        <div className="container">
          <div className="process-grid">
            <div className="process-step">
              <span className="step-num">01</span>
              <h3>Consultative Blueprinting</h3>
              <p>We don't just "install." We engineer systems for the specific chemical and pressure profiles of NW Ontario.</p>
            </div>
            <div className="process-step">
              <span className="step-num">02</span>
              <h3>Inventory Readiness</h3>
              <p>Utilizing our massive local stock of Canadian-made Pompco and Excalibur components for Zero-Delay delivery.</p>
            </div>
            <div className="process-step">
              <span className="step-num">03</span>
              <h3>Expert Implementation</h3>
              <p>Our technical staff brings 50+ years of mastery to every joint, wire, and calibration.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-studies-premium">
        <div className="container">
          <div className="section-header-center">
             <h2>The <span className="text-red">"Stellar"</span> Portfolio</h2>
             <p>Real-world examples of Pro-Tech reliability and technical mastery.</p>
          </div>
          <div className="case-study-grid">
            {caseStudies.map((study, i) => (
              <div key={i} className="case-card reveal">
                <span className="study-type">{study.type}</span>
                <h3>{study.title}</h3>
                <span className="location">{study.location}</span>
                <p>{study.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="install-cta">
        <div className="container">
          <div className="cta-box-dark">
            <h2>Ready to Start Your Project?</h2>
            <p>From complex industrial air systems to residential UV—we're ready.</p>
            <Link to="/contact" className="btn-primary">Request Technical Proposal</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installations;

import React from 'react';
import './Installations.css';

const Installations = () => {
  return (
    <div className="installations page">
      <section className="install-hero">
        <div className="container">
          <span className="tagline">Expert Execution</span>
          <h1>Professional <span className="text-red">Installations</span></h1>
          <p>Precision implementation for every residential and industrial application.</p>
        </div>
      </section>

      <section className="install-process">
        <div className="container grid">
          <div className="process-text">
            <h2>Our Installation Philiosophy</h2>
            <p>
              At Pro-Tech, an installation isn't just about hooking up a pump. It's about engineering
              a system that will last for decades. We source products primarily from Canadian manufacturers
              and offer full warranties on our installed systems.
            </p>
            <div className="features-list">
               <div className="f-item">
                  <strong>Site Assessment</strong>
                  <p>We analyze your specific requirements to select the perfect pump or motor.</p>
               </div>
               <div className="f-item">
                  <strong>Precision Wiring</strong>
                  <p>Our experts ensure electrical integration is safe, efficient, and up to code.</p>
               </div>
               <div className="f-item">
                  <strong>Performance Testing</strong>
                  <p>Every system is rigorously tested before we leave the site.</p>
               </div>
            </div>
          </div>
          <div className="process-visual">
             {/* Dynamic Illustration or Premium Image */}
             <div className="visual-card">
                <div className="visual-header">NW Ontario Reach</div>
                <p>We serve Thunder Bay and all surrounding rural and industrial zones.</p>
                <div className="visual-stat">100% Reliability</div>
             </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready for a Pro-Tech Installation?</h2>
          <p>Schedule your professional site assessment today.</p>
          <a href="/contact" className="btn-primary">Get Started</a>
        </div>
      </section>
    </div>
  );
};

export default Installations;

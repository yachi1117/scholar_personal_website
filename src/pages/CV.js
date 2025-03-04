import React from 'react';
import './CV.css';
import Footer from '../components/Footer';

function CV() {
  return (
    <div className="cv-container">
      <div className="cv-content">
        <div className="cv-header">
          <h1>Curriculum Vitae</h1>
          <h2>Dr. Emily Carter</h2>
          <p>Associate Professor of Artificial Intelligence</p>
        </div>

        <section className="cv-section">
          <h3>Education</h3>
          <div className="cv-item">
            <div className="year">2015-2020</div>
            <div className="description">
              <h4>Ph.D. in Computer Science</h4>
              <p>Stanford University</p>
              <p>Thesis: "Advanced Neural Architectures for Interpretable AI"</p>
            </div>
          </div>
          <div className="cv-item">
            <div className="year">2013-2015</div>
            <div className="description">
              <h4>M.S. in Artificial Intelligence</h4>
              <p>MIT</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>Academic Positions</h3>
          <div className="cv-item">
            <div className="year">2020-Present</div>
            <div className="description">
              <h4>Associate Professor</h4>
              <p>GAI University</p>
              <p>Department of Artificial Intelligence</p>
            </div>
          </div>
        </section>

        <section className="cv-section">
          <h3>Research Interests</h3>
          <ul className="cv-list">
            <li>Machine Learning and Neural Networks</li>
            <li>AI Ethics and Responsible Innovation</li>
            <li>Cognitive Computing Systems</li>
            <li>Human-AI Interaction</li>
            <li>Interpretable AI</li>
          </ul>
        </section>

        <section className="cv-section">
          <h3>Selected Publications</h3>
          <div className="cv-item">
            <div className="year">2024</div>
            <div className="description">
              <p>"Self-Attention Mechanisms in Large Language Models: A Cognitive Science Perspective"</p>
              <p><em>Nature Machine Intelligence</em></p>
            </div>
          </div>
          <div className="cv-item">
            <div className="year">2023</div>
            <div className="description">
              <p>"Bridging the Gap: Integrating Neuroscience Principles in Deep Learning Architectures"</p>
              <p><em>Neural Networks</em></p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default CV; 
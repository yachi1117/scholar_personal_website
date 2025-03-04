import React from 'react';
import './Home.css';
import headshot from '../assets/images/headshot.png';
import { SiGooglescholar } from 'react-icons/si';
import { FaLinkedinIn, FaLinkedin, FaResearchgate } from 'react-icons/fa';
import TrackedLink from '../components/TrackedLink';
import { PROFILE } from '../config/profile';

function Home() {
  return (
    <article className="home">
      <div className="home-content">
        <div className="profile-container">
          <div className="profile-left">
            <div className="profile-image">
              <img src={headshot} alt={PROFILE.name} />
            </div>
            <div className="contact-me">
              <h2>Contact Me</h2>
              <div className="contact-links">
                <div className="social-links">
                  <TrackedLink 
                    href={`https://scholar.google.com/${PROFILE.googleScholar}`}
                    category="Social"
                    label="Google Scholar"
                    className="icon-link"
                  >
                    <SiGooglescholar />
                  </TrackedLink>
                  
                  <TrackedLink 
                    href={`https://www.linkedin.com/in/${PROFILE.linkedin}`}
                    category="Social"
                    label="LinkedIn"
                    className="icon-link"
                  >
                    <FaLinkedinIn />
                  </TrackedLink>
                  
                  <TrackedLink 
                    href={`https://www.researchgate.net/profile/${PROFILE.researchGate}`}
                    category="Social"
                    label="ResearchGate"
                    className="icon-link"
                  >
                    <FaResearchgate />
                  </TrackedLink>
                </div>
                <div className="contact-info">
                  <a 
                    href={`mailto:${PROFILE.email}`} 
                    className="email"
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(PROFILE.email)
                        .then(() => {
                          const target = e.target;
                          target.textContent = 'Copied!';
                          setTimeout(() => {
                            target.textContent = PROFILE.email;
                          }, 1500);
                        })
                        .catch(err => {
                          console.error('Failed to copy:', err);
                        });
                    }}
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-text">
            <h1>About Me</h1>
            <div className="introduction">
              <p>
              Hi, I'm Dr. Emily Carter, a researcher and educator passionate about artificial intelligence and computational neuroscience. My work focuses on understanding how intelligent systems learn, reason, and adapt—bridging the gap between human cognition and AI. I've had the privilege of publishing in top-tier journals and collaborating with interdisciplinary teams to push the boundaries of AI interpretability and decision-making. Beyond research, I'm dedicated to mentoring students and fostering discussions on the ethical implications of emerging technologies. I believe that AI should be both powerful and responsible, and I'm excited to contribute to shaping its future.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dr. Emily Carter",
          "honorificPrefix": "Dr.",
          "jobTitle": "Associate Professor",
          "worksFor": {
            "@type": "Organization",
            "name": "GAI University"
          },
          "alumniOf": [
            {
              "@type": "Organization",
              "name": "Stanford University"
            },
            {
              "@type": "Organization",
              "name": "MIT"
            }
          ],
          "description": "AI researcher specializing in machine learning and digital transformation, with a focus on how intelligent systems drive innovation in emerging economic hubs.",
          "url": "https://yourwebsite.com",
          "sameAs": [
            `https://scholar.google.com/${PROFILE.googleScholar}`,
            `https://www.linkedin.com/in/${PROFILE.linkedin}`,
            `https://www.researchgate.net/profile/${PROFILE.researchGate}`
          ]
        })}
      </script>
    </article>
  );
}

export default Home; 
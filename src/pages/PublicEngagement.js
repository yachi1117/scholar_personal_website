import React, { useState, useEffect } from 'react';
import './PublicEngagement.css';
import Footer from '../components/Footer';
import TrackedLink from '../components/TrackedLink';
import { logEvent } from '../utils/analytics';
import { FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
// Import podcast cover images
import aiEthicsCover from '../assets/images/podcast-ai-ethics.webp';
import neuralNetworksCover from '../assets/images/podcast-neural-networks.webp';
import aiEducationCover from '../assets/images/podcast-ai-education.webp';

function Tooltip({ content }) {
  return <div className="tooltip">{content}</div>;
}

function PublicEngagement() {
  const [podcasts, setPodcasts] = useState([
    {
      id: 1,
      title: "The Future of AI: Balancing Innovation and Ethics",
      titleEn: "The Future of AI: A Dialogue with Dr. Emily Carter",
      date: "2024-03-15",
      coverImage: aiEthicsCover,
      externalLink: "https://techtalks.com/future-of-ai-emily-carter",
      showNotes: "Join us for an insightful discussion with Dr. Emily Carter on the future of artificial intelligence, exploring the delicate balance between technological innovation and ethical considerations.",
      showNotesEn: "A deep dive into AI ethics, responsible innovation, and the future of human-AI interaction with leading AI researcher Dr. Emily Carter.",
      duration: "58 min",
      topicsEn: [
        "AI Ethics and Governance",
        "Future of Machine Learning",
        "Responsible AI Development",
        "Human-AI Collaboration",
        "AI Safety and Security"
      ]
    },
    {
      id: 2,
      title: "Demystifying Neural Networks",
      titleEn: "Understanding Deep Learning: Conversation with Dr. Emily Carter",
      date: "2024-02-01",
      coverImage: neuralNetworksCover,
      externalLink: "https://aitalks.com/demystifying-neural-networks",
      showNotes: "Dr. Carter breaks down complex neural network concepts into understandable terms, discussing recent breakthroughs in deep learning and their practical applications.",
      showNotesEn: "An accessible exploration of neural networks, deep learning architectures, and their real-world impact on technology and society.",
      duration: "45 min",
      topicsEn: [
        "Neural Network Fundamentals",
        "Deep Learning Applications",
        "AI in Daily Life",
        "Future of Machine Learning",
        "Practical AI Implementation"
      ]
    },
    {
      id: 3,
      title: "AI in Education: Transforming Learning",
      titleEn: "Revolutionizing Education with AI: Insights from Dr. Emily Carter",
      date: "2024-01-10",
      coverImage: aiEducationCover,
      externalLink: "https://edutech.com/ai-transformation-education",
      showNotes: "Exploring how artificial intelligence is revolutionizing education, from personalized learning experiences to intelligent tutoring systems.",
      showNotesEn: "A comprehensive discussion on the integration of AI in education, examining both opportunities and challenges in this transformation.",
      duration: "52 min",
      topicsEn: [
        "AI in Education",
        "Personalized Learning",
        "Educational Technology",
        "Future of Teaching",
        "Learning Analytics"
      ]
    }
  ]);

  return (
    <div className="public-engagement">
      <div className="public-engagement-content">
        <div className="public-engagement-intro">
          <h1>Public Engagement</h1>
          <p>
            As an AI researcher and educator, I am committed to making complex technological concepts accessible to the public. Through podcasts, media appearances, and public lectures, I engage in discussions about artificial intelligence, its societal impact, and ethical implications. My goal is to bridge the gap between technical research and public understanding, fostering informed dialogue about AI's role in shaping our future.
          </p>
        </div>

        <section className="podcasts-section">
          <h2>Featured Talks and Podcasts</h2>
          <div className="podcasts-grid">
            {podcasts.map(podcast => (
              <div key={podcast.id} className="podcast-card">
                <div className="podcast-cover">
                  <img 
                    src={podcast.coverImage} 
                    alt={podcast.title} 
                  />
                </div>
                <div className="podcast-content">
                  <h3>{podcast.title}</h3>
                  <p className="podcast-date">{podcast.date}</p>
                  <p className="podcast-description">{podcast.showNotesEn}</p>
                  <div className="podcast-topics">
                    {podcast.topicsEn.map((topic, index) => (
                      <span 
                        key={index} 
                        className="topic-tag"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <TrackedLink
                    href={podcast.externalLink}
                    category="Podcast"
                    label={`Listen: ${podcast.title}`}
                    className="podcast-link"
                  >
                    <FaPlay /> Listen to Episode ({podcast.duration})
                  </TrackedLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default PublicEngagement; 
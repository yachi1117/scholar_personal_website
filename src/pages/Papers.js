import React from 'react';
import './Papers.css';
import Footer from '../components/Footer';
import { logEvent } from '../utils/analytics';
import TrackedLink from '../components/TrackedLink';

function Papers() {
  const papers = {
    specialIssues: [
      {
        title: "Advances in Neural Network Interpretability",
        role: "Guest Editor",
        journal: "Journal of Machine Learning Research",
        status: "in progress"
      },
      {
        title: "Ethical AI: Bridging Technical and Social Perspectives",
        role: "Co-Guest Editor",
        journal: "AI & Society",
        issue: "38(4)",
        link: "https://doi.org/10.1007/s00146-023-1234-5"
      },
      {
        title: "Cognitive Computing: From Neural Networks to Human-AI Interaction",
        role: "Guest Editor",
        journal: "Artificial Intelligence Review",
        issue: "42(2)",
        link: "https://doi.org/10.1007/s10462-023-5678-9"
      }
    ],
    researchPapers: [
      {
        authors: "Carter, Emily and Zhang, Wei",
        year: "2024",
        title: "Self-Attention Mechanisms in Large Language Models: A Cognitive Science Perspective",
        journal: "Nature Machine Intelligence",
        issue: "6(2)",
        pages: "145-157",
        link: "https://doi.org/10.1038/s42256-024-0123-4"
      },
      {
        authors: "Carter, Emily, Johnson, Sarah and Lee, David",
        year: "2023",
        title: "Bridging the Gap: Integrating Neuroscience Principles in Deep Learning Architectures",
        journal: "Neural Networks",
        issue: "158",
        pages: "88-102",
        link: "https://doi.org/10.1016/j.neunet.2023.1567"
      },
      {
        authors: "Carter, Emily and Brown, Michael",
        year: "2023",
        title: "Ethical Considerations in Automated Decision-Making Systems: A Framework for Responsible AI",
        journal: "AI Ethics",
        issue: "3(4)",
        pages: "312-328",
        link: "https://doi.org/10.1007/s43681-023-0089-2"
      }
    ],
    technicalPapers: [
      {
        authors: "Carter, Emily, Anderson, Robert and Wang, Lisa",
        year: "2024",
        title: "DynaMind: A Dynamic Neural Architecture for Adaptive Learning in Changing Environments",
        journal: "Proceedings of the International Conference on Machine Learning",
        pages: "2134-2148",
        link: "https://proceedings.mlr.press/v2024/carter24a.html"
      },
      {
        authors: "Carter, Emily",
        year: "2023",
        title: "Towards More Interpretable Deep Learning: A Cognitive Architecture Approach",
        journal: "IEEE Transactions on Neural Networks and Learning Systems",
        pages: "1-15",
        link: "https://doi.org/10.1109/TNNLS.2023.12345",
        doi: "10.1109/TNNLS.2023.12345"
      }
    ]
  };

  // Helper function to format author names with bold
  const formatAuthors = (authors) => {
    return authors.replace(
      /Emily Carter/g, 
      '<strong>Emily Carter</strong>'
    );
  };

  // Track paper downloads
  const handlePaperDownload = (paperTitle) => {
    logEvent('Papers', 'Download', paperTitle);
    // ... download logic
  };

  // Track external link clicks
  const handleExternalLink = (paperTitle) => {
    logEvent('Papers', 'External Link Click', paperTitle);
    // ... link navigation logic
  };

  return (
    <div className="papers">
      <div className="papers-content">
        <section className="paper-section">
          <h2>Special Issues</h2>
          <div className="papers-list">
            {papers.specialIssues.map((paper, index) => (
              <div key={index} className="paper-item special-issue">
                <TrackedLink 
                  href={paper.link}
                  category="Papers"
                  label={`Special Issue: ${paper.title}`}
                  className="paper-link"
                >
                  <div className="paper-role">{paper.role}</div>
                  <div className="paper-title">{paper.title}</div>
                  <div className="paper-journal">
                    <em>{paper.journal}</em>
                    {paper.issue && `, ${paper.issue}`}
                    {paper.status && `, ${paper.status}`}
                  </div>
                </TrackedLink>
              </div>
            ))}
          </div>
        </section>

        <section className="paper-section">
          <h2>Research Papers</h2>
          <div className="papers-list">
            {papers.researchPapers.map((paper, index) => (
              <div key={index} className="paper-item">
                <TrackedLink 
                  href={paper.link}
                  category="Papers"
                  label={`Research Paper: ${paper.title}`}
                  className="paper-link"
                >
                  <div className="paper-citation">
                    <span dangerouslySetInnerHTML={{ 
                      __html: formatAuthors(paper.authors) 
                    }} />
                    . {paper.year}. {paper.title}
                    . <em>{paper.journal}</em>
                    {paper.issue && `, ${paper.issue}`}
                    {paper.pages && `, ${paper.pages}`}.
                  </div>
                </TrackedLink>
              </div>
            ))}
          </div>
        </section>

        <section className="paper-section">
          <h2>Technical Papers</h2>
          <div className="papers-list">
            {papers.technicalPapers.map((paper, index) => (
              <div key={index} className="paper-item">
                <TrackedLink 
                  href={paper.link}
                  category="Papers"
                  label={`Technical Paper: ${paper.title}`}
                  className="paper-link"
                >
                  <div className="paper-citation">
                    <span dangerouslySetInnerHTML={{ 
                      __html: formatAuthors(paper.authors) 
                    }} />
                    . {paper.year}. {paper.title}
                    . <em>{paper.journal}</em>
                    {paper.issue && `, ${paper.issue}`}
                    {paper.pages && `, ${paper.pages}`}.
                  </div>
                </TrackedLink>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Papers; 
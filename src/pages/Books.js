import React, { useState } from 'react';
import './Books.css';
import { FaPlus, FaMinus } from 'react-icons/fa';
import placeholderImage from '../assets/images/placeholder';
import Footer from '../components/Footer';

// 方案1：使用在线占位图片服务
const placeholderUrl = "https://via.placeholder.com/300x450/e0e0e0/666666?text=Book+Cover";

function Books() {
  const [expandedBook, setExpandedBook] = useState(null);

  const books = [
    {
      id: 1,
      title: "Artificial Intelligence: A Human-Centered Approach",
      cover: placeholderImage,
      publisher: "MIT Press",
      shortDescription: "This book examines the development of AI systems through a human-centered lens, exploring how we can create artificial intelligence that augments and enhances human capabilities while addressing crucial ethical considerations.",
      fullDescription: `In "Artificial Intelligence: A Human-Centered Approach," Dr. Emily Carter presents a comprehensive framework for developing AI systems that prioritize human values and societal benefits. The book combines technical insights with philosophical perspectives, examining how AI can be designed to work in harmony with human intelligence rather than replacing it.

      Key themes include:
      - Human-AI collaboration frameworks
      - Ethical considerations in AI development
      - Cognitive architecture design
      - Social implications of AI systems
      - Future directions in human-centered AI

      Drawing from years of research and practical experience, this book offers both theoretical foundations and practical guidelines for creating more responsible and effective AI systems.`
    },
    {
      id: 2,
      title: "Machine Learning: From Theory to Practice",
      cover: placeholderImage,
      publisher: "Cambridge University Press",
      shortDescription: "A comprehensive guide to modern machine learning techniques, bridging the gap between theoretical foundations and practical applications in real-world scenarios.",
      fullDescription: `"Machine Learning: From Theory to Practice" provides a thorough examination of contemporary machine learning methods, with a focus on practical implementation. This book serves as both an academic text and a professional reference, offering:

      - Detailed explanations of core ML algorithms
      - Implementation strategies and best practices
      - Case studies from industry applications
      - Performance optimization techniques
      - Deployment considerations

      The book includes extensive code examples and practical exercises, making it an invaluable resource for students, researchers, and practitioners in the field of machine learning.`
    }
  ];

  const toggleDescription = (id) => {
    setExpandedBook(expandedBook === id ? null : id);
  };

  return (
    <div className="books">
      <div className="books-content">
        <h1>Books</h1>
        {books.map(book => (
          <div key={book.id} className="book-item">
            <div className="book-cover">
              <img src={book.cover} alt={book.title} />
            </div>
            <div className="book-info">
              <h2>{book.title}</h2>
              <p className="publisher">{book.publisher}</p>
              <p className="description">
                {expandedBook === book.id ? book.fullDescription : book.shortDescription}
              </p>
              <button 
                className="expand-button"
                onClick={() => toggleDescription(book.id)}
                aria-label={expandedBook === book.id ? "Show less" : "Show more"}
              >
                {expandedBook === book.id ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Books; 
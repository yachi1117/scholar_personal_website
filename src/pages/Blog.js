import React from 'react';
import BlogCard from '../components/BlogCard';
import './Blog.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

// Import placeholder image
import blogPlaceholder from '../assets/images/blog-placeholder';

// Blog data
const blogPosts = [
  {
    id: 1,
    title: "The Evolution of Large Language Models: A Technical Deep Dive",
    subtitle: "Exploring Architecture Innovations and Training Paradigms",
    images: [blogPlaceholder, blogPlaceholder, blogPlaceholder], // 使用三个相同的占位图
    slug: "llm-evolution"
  },
  {
    id: 2,
    title: "Reinforcement Learning in Autonomous Systems",
    subtitle: "From Theory to Real-World Applications",
    images: [blogPlaceholder], // 使用一个占位图
    video: null,
    slug: "reinforcement-learning"
  },
  {
    id: 3,
    title: "Building Ethical AI Systems: A Practical Framework",
    subtitle: "Implementing Responsible AI Development Practices",
    images: [blogPlaceholder], // 使用一个占位图
    slug: "ethical-ai-framework"
  }
];

function Blog() {
  return (
    <div className="blog">
      <div className="blog-content">
        <h1>Research Insights</h1>
        <p className="blog-intro">
          Welcome to my research blog, where I share detailed insights into artificial intelligence, 
          machine learning developments, and their implications for society. These posts combine 
          technical depth with accessible explanations for both specialists and general audiences.
        </p>
        <div className="blog-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card-wrapper">
              <Link 
                to={`/blog/${post.slug}`} 
                className="blog-link"
              >
                <BlogCard 
                  title={post.title}
                  subtitle={post.subtitle}
                  images={post.images}
                  video={post.video}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog; 
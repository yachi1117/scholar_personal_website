import React from 'react';
import './Teaching.css';
import Footer from '../components/Footer';
import aiIntroImage from '../assets/images/ai-intro.webp';
import neuralNetworkImage from '../assets/images/neural-network.webp';
import aiEthicsImage from '../assets/images/ai-ethics.webp';
import mlAdvancedImage from '../assets/images/ml-advanced.webp';
import cognitiveAiImage from '../assets/images/cognitive-ai.webp';

function Teaching() {
  const undergraduateCourses = [
    {
      title: "Introduction to Artificial Intelligence",
      image: aiIntroImage,
      description: "This foundational course introduces students to the core concepts of artificial intelligence, including machine learning, neural networks, and natural language processing. Through hands-on projects and real-world applications, students learn how AI systems are designed, trained, and deployed in various domains. The course emphasizes both theoretical understanding and practical implementation using Python and popular AI frameworks."
    },
    {
      title: "Neural Networks and Deep Learning",
      image: neuralNetworkImage,
      description: "An in-depth exploration of neural network architectures and deep learning methodologies. Students learn to design, implement, and optimize various types of neural networks, from basic perceptrons to complex architectures like CNNs and RNNs. The course covers advanced topics including transfer learning, generative models, and attention mechanisms, with a focus on PyTorch and TensorFlow implementations."
    },
    {
      title: "Ethics in Artificial Intelligence",
      image: aiEthicsImage,
      description: "This course examines the ethical implications of AI development and deployment in society. Topics include algorithmic bias, privacy concerns, transparency in AI systems, and responsible AI development. Students engage in case studies, debates, and projects that explore the intersection of technical innovation and ethical considerations in AI applications."
    }
  ];

  const postgraduateCourses = [
    {
      title: "Advanced Topics in Machine Learning",
      image: mlAdvancedImage,
      description: "A graduate-level course exploring cutting-edge developments in machine learning research. Topics include reinforcement learning, meta-learning, few-shot learning, and self-supervised learning. Students engage with recent research papers, implement state-of-the-art models, and conduct original research projects. The course emphasizes both theoretical foundations and practical applications in real-world scenarios."
    },
    {
      title: "Cognitive Computing and AI Systems",
      image: cognitiveAiImage,
      description: "This advanced course bridges cognitive science and artificial intelligence, exploring how insights from human cognition can inform AI system design. Topics include cognitive architectures, neural-symbolic integration, and biologically-inspired AI models. Students work on research projects that combine theoretical frameworks with practical implementations in cognitive computing applications."
    }
  ];

  return (
    <div className="teaching">
      <div className="teaching-content">
        <div className="teaching-intro">
          <h1>Teaching</h1>
          <p>
            My teaching philosophy centers on bridging theoretical foundations with practical applications in AI and computer science. I believe in creating an inclusive learning environment that encourages critical thinking, creativity, and ethical consideration in technological innovation. Through project-based learning and real-world applications, I help students develop both technical expertise and an understanding of AI's broader societal impact.
          </p>
        </div>

        <section className="course-section">
          <h2>Undergraduate Courses</h2>
          <div className="courses-grid">
            {undergraduateCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="course-section">
          <h2>Graduate Courses</h2>
          <div className="courses-grid">
            {postgraduateCourses.map((course, index) => (
              <div key={index} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                </div>
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
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

export default Teaching; 
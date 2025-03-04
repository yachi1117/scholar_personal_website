import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Books from './pages/Books';
import Papers from './pages/Papers';
import CV from './pages/CV';
import Teaching from './pages/Teaching';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import PublicEngagement from './pages/PublicEngagement';
import './styles/theme.css';
import { initGA, logPageView, logPageTiming } from './utils/analytics';
import { Link } from 'react-router-dom';

// Create a tracking component
function TrackingComponent() {
  const location = useLocation();
  const [pageLoadTime, setPageLoadTime] = useState(Date.now());

  useEffect(() => {
    // Record page load time
    setPageLoadTime(Date.now());

    // Track page views
    const pageName = location.pathname.replace('/', '') || 'Home';
    logPageView(pageName);

    // Record time spent when component unmounts or route changes
    return () => {
      const timeSpent = Date.now() - pageLoadTime;
      logPageTiming('Page Engagement', `Time on ${pageName}`, timeSpent);
    };
  }, [location, pageLoadTime]);

  return null;
}

// 创建一个包装组件来处理页面过渡
function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page-transition"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/public-engagement" element={<PublicEngagement />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

function App() {
  useEffect(() => {
    const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID;
    if (measurementId) {
      initGA(measurementId);
    } else {
      console.warn('Google Analytics Measurement ID is not defined');
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <TrackingComponent />
      <div className="app">
        <AppContent />
        <footer>
          {/* Add footer content if needed */}
        </footer>
      </div>
    </Router>
  );
}

export default App; 
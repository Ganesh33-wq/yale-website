import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PythonTraining from './pages/courses/PythonTraining';
import JavaTraining from './pages/courses/JavaTraining';
import FullStackTraining from './pages/courses/FullStackTraining';
import DigitalMarketing from './pages/courses/DigitalMarketing';
import UIUXDesign from './pages/courses/UIUXDesign';
import ArtificialIntelligence from './pages/courses/ArtificialIntelligence';
import DataScience from './pages/courses/DataScience';
import CyberSecurity from './pages/courses/CyberSecurity';
import BlogListPage from './pages/blog/BlogListPage';
import BlogDetailPage from './pages/blog/BlogDetailPage';
import InternshipTraining from './pages/services/InternshipTraining';
import FinalYearProject from './pages/services/FinalYearProject';

// Styles (you'll need to copy your CSS from Django static files)
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Course Routes */}
            <Route path="/course/best-python-training-in-coimbatore" element={<PythonTraining />} />
            <Route path="/course/python-training" element={<PythonTraining />} />
            <Route path="/course/best-java-course-in-coimbatore" element={<JavaTraining />} />
            <Route path="/course/java-training" element={<JavaTraining />} />
            <Route path="/course/best-full-stack-course-in-coimbatore" element={<FullStackTraining />} />
            <Route path="/course/full-stack-training" element={<FullStackTraining />} />
            <Route path="/course/best-digital-marketing-course-in-coimbatore" element={<DigitalMarketing />} />
            <Route path="/course/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/course/best-ui-ux-designer-course-in-coimbatore" element={<UIUXDesign />} />
            <Route path="/course/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/course/best-artificial-intelligence-course-in-coimbatore" element={<ArtificialIntelligence />} />
            <Route path="/course/ai" element={<ArtificialIntelligence />} />
            <Route path="/course/best-data-science-course-in-coimbatore" element={<DataScience />} />
            <Route path="/course/data-science" element={<DataScience />} />
            <Route path="/course/best-cyber-security-course-in-coimbatore" element={<CyberSecurity />} />
            <Route path="/course/cyber-security" element={<CyberSecurity />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            
            {/* Service Routes */}
            <Route path="/services/internship" element={<InternshipTraining />} />
            <Route path="/internship-training-in-coimbatore" element={<InternshipTraining />} />
            <Route path="/services/final-year-project" element={<FinalYearProject />} />
            <Route path="/services/final-year-project-center-in-coimbatore" element={<FinalYearProject />} />
            
            {/* 404 Page */}
            <Route path="*" element={
              <div className="container section-padding">
                <div className="text-center">
                  <h1>404 - Page Not Found</h1>
                  <p>The page you're looking for doesn't exist.</p>
                </div>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;

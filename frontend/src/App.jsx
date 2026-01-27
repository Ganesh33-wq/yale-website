// COPILOT: React Router mapping of Django URL patterns (including trailing slashes). TODO: add routes per templates list (DJANGO_TEMPLATE_LIST). Keep paths/classnames unchanged when rendering components.
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import PythonTraining from './pages/PythonTraining';
import JavaTraining from './pages/JavaTraining';
import FullStackTraining from './pages/FullStackTraining';
import DigitalMarketingCourse from './pages/DigitalMarketingCourse';
import UIUXDesignCourse from './pages/UIUXDesignCourse';
import AICourse from './pages/AICourse';
import DataScienceCourse from './pages/DataScienceCourse';
import CyberSecurityCourse from './pages/CyberSecurityCourse';
import InternshipTraining from './pages/InternshipTraining';
import FinalYearProject from './pages/FinalYearProject';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/" element={<About />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact/" element={<Contact />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/blog/" element={<BlogList />} />
    <Route path="/blog" element={<BlogList />} />
    <Route path="/blog/:slug/" element={<BlogDetail />} />
    <Route path="/blog/:slug" element={<BlogDetail />} />
    <Route path="/course/best-python-training-in-coimbatore/" element={<PythonTraining />} />
    <Route path="/course/best-python-training-in-coimbatore" element={<PythonTraining />} />
    <Route path="/course/best-java-course-in-coimbatore/" element={<JavaTraining />} />
    <Route path="/course/best-java-course-in-coimbatore" element={<JavaTraining />} />
    <Route path="/course/best-full-stack-course-in-coimbatore/" element={<FullStackTraining />} />
    <Route path="/course/best-full-stack-course-in-coimbatore" element={<FullStackTraining />} />
    <Route path="/course/best-digital-marketing-course-in-coimbatore/" element={<DigitalMarketingCourse />} />
    <Route path="/course/best-digital-marketing-course-in-coimbatore" element={<DigitalMarketingCourse />} />
    <Route path="/course/best-ui-ux-designer-course-in-coimbatore/" element={<UIUXDesignCourse />} />
    <Route path="/course/best-ui-ux-designer-course-in-coimbatore" element={<UIUXDesignCourse />} />
    <Route path="/course/best-artificial-intelligence-course-in-coimbatore/" element={<AICourse />} />
    <Route path="/course/best-artificial-intelligence-course-in-coimbatore" element={<AICourse />} />
    <Route path="/course/best-data-science-course-in-coimbatore/" element={<DataScienceCourse />} />
    <Route path="/course/best-data-science-course-in-coimbatore" element={<DataScienceCourse />} />
    <Route path="/course/best-cyber-security-course-in-coimbatore/" element={<CyberSecurityCourse />} />
    <Route path="/course/best-cyber-security-course-in-coimbatore" element={<CyberSecurityCourse />} />
    <Route path="/internship-training-in-coimbatore/" element={<InternshipTraining />} />
    <Route path="/internship-training-in-coimbatore" element={<InternshipTraining />} />
    <Route path="/services/final-year-project-center-in-coimbatore/" element={<FinalYearProject />} />
    <Route path="/services/final-year-project-center-in-coimbatore" element={<FinalYearProject />} />
    <Route path="/admin" element={<AdminLogin />} />
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
  </Routes>
);

export default App;

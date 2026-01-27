// COPILOT: React Router mapping of Django URL patterns (including trailing slashes). TODO: add routes per templates list (DJANGO_TEMPLATE_LIST). Keep paths/classnames unchanged when rendering components.
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const PythonTraining = lazy(() => import('./pages/PythonTraining'));
const JavaTraining = lazy(() => import('./pages/JavaTraining'));
const FullStackTraining = lazy(() => import('./pages/FullStackTraining'));
const DigitalMarketingCourse = lazy(() => import('./pages/DigitalMarketingCourse'));
const UIUXDesignCourse = lazy(() => import('./pages/UIUXDesignCourse'));
const AICourse = lazy(() => import('./pages/AICourse'));
const DataScienceCourse = lazy(() => import('./pages/DataScienceCourse'));
const CyberSecurityCourse = lazy(() => import('./pages/CyberSecurityCourse'));
const InternshipTraining = lazy(() => import('./pages/InternshipTraining'));
const FinalYearProject = lazy(() => import('./pages/FinalYearProject'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div>Loading...</div>
  </div>
);

const App = () => (
  <Suspense fallback={<PageLoader />}>
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
  </Suspense>
);

export default App;

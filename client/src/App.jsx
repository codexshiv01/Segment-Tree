import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Overview from './components/Overview';
import TrustedBy from './components/TrustedBy';
import Testimonials from './components/Testimonials';
import LearningPath from './components/LearningPath';
import Stats from './components/Stats';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import HldList from './pages/HldList';
import HldWorkspace from './pages/HldWorkspace';
import HldFeedback from './pages/HldFeedback';
import Course from './pages/Course';
import CourseChapter from './pages/CourseChapter';
import CsFundamentals from './pages/CsFundamentals';
import CsQuiz from './pages/CsQuiz';
import DsaDashboard from './pages/DsaDashboard';
import AssessmentWorkspace from './pages/AssessmentWorkspace';
import AssessmentSubmitted from './pages/AssessmentSubmitted';

const HomePage = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary/20 selection:text-primary">
    <Navbar />
    <main>
      <Hero />
      <TrustedBy />
      <Overview />
      <Stats />
      <LearningPath />
      <Features />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/hld" element={<HldList />} />
          <Route path="/hld/:slug" element={<HldWorkspace />} />
          <Route path="/hld/:slug/feedback" element={<HldFeedback />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:chapterSlug" element={<CourseChapter />} />
          <Route path="/cs-fundamentals" element={<CsFundamentals />} />
          <Route path="/cs-fundamentals/:topicId" element={<CsQuiz />} />
          <Route path="/dsa" element={<DsaDashboard />} />
          <Route path="/dsa/assessment/:id" element={<AssessmentWorkspace />} />
          <Route path="/assessment-submitted" element={<AssessmentSubmitted />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

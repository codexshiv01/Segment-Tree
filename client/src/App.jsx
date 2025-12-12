import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';


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
import Aptitude from './pages/Aptitude';
import LldList from './pages/LldList';
import LldWorkspace from './pages/LldWorkspace';
import ScrollReveal from './components/ScrollReveal';

const HomePage = () => (
  <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-primary/20 selection:text-primary">
    <Navbar />
    <main>
      <Hero />

      <ScrollReveal>
        <Stats />
      </ScrollReveal>

      <ScrollReveal>
        <LearningPath />
      </ScrollReveal>

      <ScrollReveal>
        <Features />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
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
          <Route path="/aptitude" element={<Aptitude />} />
          <Route path="/lld" element={<LldList />} />
          <Route path="/lld/:slug" element={<LldWorkspace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

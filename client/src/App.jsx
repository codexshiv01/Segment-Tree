import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Overview from './components/Overview';
import TrustedBy from './components/TrustedBy';
import Testimonials from './components/Testimonials';
import LearningPath from './components/LearningPath';
import Stats from './components/Stats';

function App() {
  return (
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
}

export default App;

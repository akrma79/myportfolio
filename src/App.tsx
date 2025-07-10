import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { OfflineIndicator } from './components/OfflineIndicator';
import { ErrorDebugPanel } from './components/ErrorDebugPanel';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900">
        <OfflineIndicator />
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ErrorDebugPanel />
      </div>
    </ErrorBoundary>
  );
}

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Akrama Nadim - B.Tech CSE Student | AI & Software Developer',
  '/about': 'About - Akrama Nadim',
  '/experience': 'Experience - Akrama Nadim',
  '/skills': 'Skills - Akrama Nadim',
  '/projects': 'Projects - Akrama Nadim',
  '/contact': 'Contact - Akrama Nadim',
};

function AppContent() {
  const location = useLocation();
  useEffect(() => {
    document.title = PAGE_TITLES[location.pathname] ?? 'Akrama Nadim';
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-900">
      {location.pathname !== '/' && <Header />}
      <main className={location.pathname !== '/' ? 'pt-20' : undefined}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
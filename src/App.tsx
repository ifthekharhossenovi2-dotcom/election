import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ElectionPage } from './pages/ElectionPage';
import { SkillsPage } from './pages/SkillsPage';
import { Gallery1Page, Gallery2Page, Gallery3Page } from './pages/GalleryPages';
import { ElectionSectionPage } from './pages/ElectionSectionPage';
import { FinanceDemoPage } from './pages/FinanceDemoPage';

// Scroll to top or to hash element on navigation
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="text-white bg-gradient-to-r from-[#020024] via-[#093A79] to-[#2F58C2] min-h-screen flex flex-col justify-between selection:bg-[#25a244] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/electionSection" element={<ElectionSectionPage />} />
            <Route path="/electionPage" element={<ElectionPage />} />
            <Route path="/gallery" element={<Gallery1Page />} />
            <Route path="/gallery1" element={<Gallery1Page />} />
            <Route path="/gallery2" element={<Gallery2Page />} />
            <Route path="/gallery3" element={<Gallery3Page />} />
            <Route path="/finance-demo" element={<FinanceDemoPage />} />
            {/* Fallback for any unknown route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

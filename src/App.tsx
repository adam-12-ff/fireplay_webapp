import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import AuthGuide from './pages/AuthGuide';
import HostPanel from './pages/HostPanel';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Copyright from './pages/Copyright';
import ApkDownloadModal from './components/ApkDownloadModal';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloadOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark text-gray-100 selection:bg-brand-orange selection:text-black">
      {/* Scroll Restorer */}
      <ScrollToTop />

      {/* Sticky Responsive Header */}
      <Header onDownloadClick={handleDownloadClick} />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onDownloadClick={handleDownloadClick} />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/auth-guide" element={<AuthGuide />} />
          <Route path="/host-panel" element={<HostPanel />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/copyright" element={<Copyright />} />
          {/* Fallback to Home */}
          <Route path="*" element={<Home onDownloadClick={handleDownloadClick} />} />
        </Routes>
      </main>

      {/* Shared Footer */}
      <Footer onDownloadClick={handleDownloadClick} />

      {/* Simulated APK Download Modal */}
      <ApkDownloadModal isOpen={isDownloadOpen} onClose={() => setIsDownloadOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
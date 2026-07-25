import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame, Download } from 'lucide-react';

interface HeaderProps {
  onDownloadClick: () => void;
}

export default function Header({ onDownloadClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'How to Use', path: '/how-to-use' },
    { name: 'Auth Guide', path: '/auth-guide' },
    { name: 'Host Panel', path: '/host-panel' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-dark/95 border-b border-brand-border/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-brand-orange/30 blur opacity-70 group-hover:opacity-100 transition-all"></div>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-brand-dark border border-brand-orange/40 text-brand-orange">
                <Flame className="w-6 h-6 fill-brand-orange animate-pulse" />
              </div>
            </div>
            <div>
              <span className="font-display text-2xl font-extrabold tracking-wider text-white">
                FIRE<span className="text-brand-orange glow-orange">PLAY</span>
              </span>
              <span className="block text-[9px] text-brand-gold font-bold tracking-[0.25em] uppercase -mt-1">
                Free Fire Esports
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-sm font-semibold uppercase tracking-wider transition-all hover:text-brand-orange ${
                  isActive(link.path) 
                    ? 'text-brand-orange glow-orange border-b-2 border-brand-orange pb-1' 
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Download CTA Button */}
          <div className="hidden md:block">
            <button
              id="downloadBtn"
              onClick={onDownloadClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg bg-gradient-to-r from-brand-orange to-brand-gold font-display text-xs font-bold text-black uppercase tracking-wider hover:shadow-glow transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-4 h-4 fill-black" />
              Download APK
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-brand-border transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/98 border-b border-brand-border backdrop-blur-lg transition-all">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display text-lg font-bold uppercase tracking-wider py-2 border-b border-brand-border/40 ${
                  isActive(link.path) ? 'text-brand-orange' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              id="downloadBtn"
              onClick={() => {
                setIsOpen(false);
                onDownloadClick();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-gold font-display text-sm font-bold text-black uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-glow"
            >
              <Download className="w-5 h-5 fill-black" />
              Download FirePlay APK
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
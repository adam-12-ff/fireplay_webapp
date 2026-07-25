import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Download, Shield, Award, Users, Mail, Compass, HelpCircle, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onDownloadClick: () => void;
}

export default function Footer({ onDownloadClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark border-t border-brand-border pt-16 pb-8 overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-gradient-to-b from-brand-orange/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
                <Flame className="w-5 h-5 fill-brand-orange" />
              </div>
              <span className="font-display text-xl font-extrabold tracking-wider text-white">
                FIRE<span className="text-brand-orange">PLAY</span>
              </span>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              FirePlay is the ultimate mobile tournament hub for Free Fire players. Compete in daily custom rooms, showcase your squad's skill, and withdraw real rewards instantly.
            </p>
            <div className="pt-2">
              <button
                id="downloadBtn"
                onClick={onDownloadClick}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-orange to-brand-gold font-display text-xs font-bold text-black uppercase tracking-wider hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 fill-black" />
                Download App (APK)
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-brand-orange" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors">Home Landing</Link>
              </li>
              <li>
                <Link to="/how-to-use" className="hover:text-brand-orange transition-colors">How to Join & Play</Link>
              </li>
              <li>
                <Link to="/auth-guide" className="hover:text-brand-orange transition-colors">Player Auth Guide</Link>
              </li>
              <li>
                <Link to="/host-panel" className="hover:text-brand-orange transition-colors">Host Dashboard</Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-brand-orange" />
              Legal & Rules
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/terms" className="hover:text-brand-orange transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/copyright" className="hover:text-brand-orange transition-colors">Copyright & DMCA</Link>
              </li>
              <li>
                <a href="#rules" className="hover:text-brand-orange transition-colors">Fair Play Policy</a>
              </li>
            </ul>
          </div>

          {/* Community & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-brand-orange" />
              Contact & Support
            </h4>
            <p className="text-xs text-gray-400 mb-3 leading-relaxed">
              Have questions or need tournament support? Reach out to our 24/7 moderation team.
            </p>
            <div className="space-y-2 text-xs text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-brand-orange">Email:</span> support@fireplay.app
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-orange">Discord:</span> discord.gg/fireplayff
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-orange">Hours:</span> 24/7 Live Moderation
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-border my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-[11px] text-gray-500">
              © {currentYear} FirePlay Esports. All rights reserved.
            </p>
            <p className="text-[10px] text-gray-600 max-w-4xl leading-normal">
              Disclaimer: FirePlay is an independent mobile esports platform. We are not affiliated with, authorized, or endorsed by Garena, Free Fire, or Garena International. All trademarks, game assets, and characters belong to their respective owners.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-green-500" /> Secure SSL
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-brand-gold" /> Fair Play Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
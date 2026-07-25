import React from 'react';
import { Shield, Eye, Lock, Database } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Header */}
      <section className="relative py-12 overflow-hidden border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-3">
          <Shield className="w-10 h-10 text-brand-orange mx-auto" />
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wide">
            Privacy <span className="text-brand-orange glow-orange">Policy</span>
          </h1>
          <p className="text-xs text-gray-400">Last updated: October 24, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-10 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
          
          <p>
            At FirePlay, we prioritize the privacy and security of our mobile esports community. This Privacy Policy outlines how we collect, process, and protect your personal information when you use our website, mobile application, and tournament lobbies.
          </p>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Database className="w-5 h-5 text-brand-orange" />
              1. Information We Collect
            </h2>
            <p>
              To provide automated tournament tracking and secure wallet payouts, we collect the following data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li><strong>Free Fire UID & IGN:</strong> Your Garena Free Fire Unique ID and In-Game Name are cached to verify match statistics, kills, and lobby placements.</li>
              <li><strong>Device Telemetry:</strong> We collect hardware signatures, operating system versions, and background application lists solely to detect emulators, macro tools, and active hacking overlays.</li>
              <li><strong>Contact Details:</strong> Your mobile number or email address is collected during registration to process secure OTP codes and account recovery.</li>
              <li><strong>Payment Data:</strong> To process withdrawals, we securely collect your UPI ID, wallet numbers, or bank details. We do not store credit card credentials on our servers.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-orange" />
              2. How We Use Your Information
            </h2>
            <p>
              We utilize your personal and gaming data to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Automate match results, bracket advancements, and leaderboard rankings.</li>
              <li>Monitor and enforce anti-cheat protocols to ensure 100% fair play.</li>
              <li>Process and audit secure wallet deposits and UPI withdrawals.</li>
              <li>Send critical match notifications, such as Custom Room IDs and password releases.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-orange" />
              3. Data Security & Retention
            </h2>
            <p>
              Your data is stored in secure, cloud-based servers encrypted with AES-256 protocols. Financial transactions are conducted through PCI-DSS compliant sandboxes. We retain your UID and transaction logs as long as your account is active. If you request account deletion, all personal data, UPI details, and IP logs will be permanently scrubbed from our systems within 30 days.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-orange" />
              4. Third-Party Sharing
            </h2>
            <p>
              We do not sell, rent, or distribute player data to third-party advertisers. Data is shared only with:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Secure payment processors (Razorpay, Paytm) to facilitate instant cashouts.</li>
              <li>Lobby moderators and hosts to verify your slot placement and in-game name.</li>
              <li>Law enforcement agencies if required by subpoena or to investigate financial fraud.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-orange" />
              5. Cookies & Analytics
            </h2>
            <p>
              Our website uses cookies and lightweight analytics (e.g. Google Analytics) to monitor traffic patterns, page load times, and user engagement. You can disable cookies in your browser settings, though some website features may not load correctly.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
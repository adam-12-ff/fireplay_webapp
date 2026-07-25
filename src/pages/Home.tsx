import React, { useState } from 'react';
import { Download, Trophy, Users, Shield, Zap, Flame, HelpCircle, ArrowRight, Star, Play, Award, CheckCircle } from 'lucide-react';
import TournamentCard, { Tournament } from '../components/TournamentCard';
import WalletSimulator from '../components/WalletSimulator';

interface HomeProps {
  onDownloadClick: () => void;
}

export default function Home({ onDownloadClick }: HomeProps) {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'SOLO' | 'DUO' | 'SQUAD'>('ALL');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const stats = [
    { value: '150K+', label: 'Registered Players' },
    { value: '$240K+', label: 'Total Prizes Distributed' },
    { value: '12,500+', label: 'Custom Rooms Hosted' },
    { value: '99.9%', label: 'Anti-Cheat Accuracy' },
  ];

  const tournaments: Tournament[] = [
    { id: '1', title: 'Bermuda Squad Showdown', type: 'SQUAD', prizePool: '$150.00', entryFee: '$10.00', slotsTotal: 48, slotsFilled: 42, time: 'Today, 6:00 PM', map: 'Bermuda', status: 'REGISTRATION OPEN' },
    { id: '2', title: 'Kalahari Solo Clash', type: 'SOLO', prizePool: '$50.00', entryFee: '$2.00', slotsTotal: 50, slotsFilled: 49, time: 'Today, 7:30 PM', map: 'Kalahari', status: 'REGISTRATION OPEN' },
    { id: '3', title: 'Alpine Duo Dominance', type: 'DUO', prizePool: '$80.00', entryFee: '$5.00', slotsTotal: 25, slotsFilled: 25, time: 'Today, 8:45 PM', map: 'Alpine', status: 'REGISTRATION OPEN' },
    { id: '4', title: 'Purgatory Rush Hour', type: 'SQUAD', prizePool: '$200.00', entryFee: '$15.00', slotsTotal: 12, slotsFilled: 10, time: 'Today, 10:00 PM', map: 'Purgatory', status: 'REGISTRATION OPEN' },
    { id: '5', title: 'Bermuda Clash Squad (CS)', type: 'SQUAD', prizePool: '$100.00', entryFee: '$8.00', slotsTotal: 16, slotsFilled: 16, time: 'Live Now', map: 'Bermuda', status: 'LIVE' },
    { id: '6', title: 'Kalahari Sniper Showdown', type: 'SOLO', prizePool: '$40.00', entryFee: 'Free', slotsTotal: 50, slotsFilled: 31, time: 'Tomorrow, 3:00 PM', map: 'Kalahari', status: 'REGISTRATION OPEN' },
  ];

  const filteredTournaments = activeFilter === 'ALL' 
    ? tournaments 
    : tournaments.filter(t => t.type === activeFilter);

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      title: 'Auto-Result Verification',
      description: 'No more manual screenshot submissions. Our platform integrates with Free Fire custom room APIs to fetch match stats and verify winners automatically.',
    },
    {
      icon: <Shield className="w-6 h-6 text-brand-gold" />,
      title: 'Kernel-Level Anti-Cheat',
      description: 'Zero tolerance for hacks, scripts, or emulators. Our proprietary mobile anti-cheat checks for active overlays, macro files, and modified APKs.',
    },
    {
      icon: <Trophy className="w-6 h-6 text-brand-orange" />,
      title: 'Instant Cashouts',
      description: 'Your winnings are credited to your FirePlay wallet the second the match results are locked. Withdraw instantly to UPI, Paytm, or GPay.',
    },
    {
      icon: <Users className="w-6 h-6 text-brand-gold" />,
      title: 'Dedicated Host Panels',
      description: 'Host custom rooms with automated lobby creation, bracket generation, and prize pool splits. Perfect for guilds, content creators, and sponsors.',
    },
  ];

  const faqs = [
    {
      q: 'How do I join a custom room on FirePlay?',
      a: 'Once you register for a tournament on the FirePlay mobile app, the Custom Room ID and Password will be sent to your app notification drawer and match lobby screen exactly 15 minutes before the match start time. Copy the credentials, open Free Fire, search for the Custom Room, and join your designated slot.',
    },
    {
      q: 'Are emulators or PC players allowed?',
      a: 'No. To ensure 100% fair play, FirePlay tournaments are strictly for mobile devices. Our mobile client automatically detects and blocks emulator signals, third-party keyboard/mouse mapping apps, and rooted/jailbroken devices.',
    },
    {
      q: 'What happens if someone cheats during a match?',
      a: 'We deploy real-time anti-cheat monitoring. If a player is flagged for wallhacks, auto-aim, or speedhacks, they are instantly banned from the lobby and their account is locked. Their entry fee is refunded to other players, and the match is re-evaluated.',
    },
    {
      q: 'How does the auto-result verification work?',
      a: 'We use secure custom room logs. Once the match finishes, our server fetches the official scoreboard. Placements and kills are calculated instantly, and prize money is distributed within 5-10 minutes.',
    },
    {
      q: 'Is there a minimum withdrawal amount?',
      a: 'The minimum withdrawal is just $5.00. Winnings can be transferred to UPI, Paytm, GPay, or Net Banking with zero hidden processing fees.',
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Background Esports Image with Dark/Orange Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/esports.jpg" 
            alt="Esports Arena Background" 
            className="w-full h-full object-cover opacity-15 scale-105 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark to-transparent"></div>
          
          {/* Glowing Accents */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-orange/10 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-gold/10 blur-[100px] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-brand-orange animate-pulse" />
                The Ultimate Free Fire Tournament Platform
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-none uppercase tracking-wide">
                COMPETE. CONQUER.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold glow-orange">
                  CASH OUT INSTANTLY.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Join daily Free Fire custom rooms, prove your tactical dominance, and earn real rewards. Built with automated result tracking, anti-cheat security, and instant payouts for players and guild hosts.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  id="downloadBtn"
                  onClick={onDownloadClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold font-display text-sm font-extrabold text-black uppercase tracking-wider hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5 fill-black" />
                  Download FirePlay APK
                </button>
                <a
                  href="#tournaments"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl border border-brand-border hover:border-brand-orange/50 bg-[#111116]/50 text-white font-display text-sm font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                >
                  Browse Matches
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  4.8 App Rating
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-border"></span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-green-500" />
                  Garena Fair Play Certified
                </span>
              </div>
            </div>

            {/* Right Column: Premium App Interface Mockup */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] rounded-[40px] border-[8px] border-brand-border bg-brand-dark overflow-hidden shadow-2xl shadow-brand-orange/10 flex flex-col">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-border rounded-b-2xl z-20"></div>

                {/* Simulated App Content */}
                <div className="flex-grow flex flex-col bg-[#0b0b0e] pt-8 overflow-y-auto overflow-x-hidden text-xs">
                  {/* App Header */}
                  <div className="px-4 py-3 flex items-center justify-between border-b border-brand-border/40">
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4 fill-brand-orange text-brand-orange" />
                      <span className="font-display font-extrabold text-sm tracking-wider text-white">FIREPLAY</span>
                    </div>
                    <div className="px-2 py-1 rounded bg-brand-orange/15 text-brand-orange font-bold text-[9px] flex items-center gap-1 border border-brand-orange/20">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                      $124.50 Balance
                    </div>
                  </div>

                  {/* App Banner */}
                  <div className="p-4">
                    <div className="relative rounded-xl overflow-hidden border border-brand-orange/30 bg-gradient-to-r from-brand-orange/20 to-[#16161c] p-3 text-left">
                      <span className="text-[8px] font-bold text-brand-gold uppercase tracking-wider">Lobby Open</span>
                      <h4 className="font-display font-bold text-sm text-white uppercase mt-0.5">Bermuda Pro League</h4>
                      <p className="text-[10px] text-gray-400 mt-1">SQUAD • Entry $5.00 • Prize $350</p>
                      <button className="mt-2.5 px-3 py-1 rounded bg-brand-orange text-black font-bold text-[9px] uppercase">
                        Register Now
                      </button>
                    </div>
                  </div>

                  {/* App Tournaments List */}
                  <div className="px-4 space-y-3 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-gray-300 uppercase tracking-wider text-[10px]">Active Custom Rooms</span>
                      <span className="text-[9px] text-brand-orange font-semibold">View All</span>
                    </div>

                    {[
                      { title: 'Kalahari Solo Cup', type: 'SOLO', prize: '$80', fee: '$2', slots: '45/50' },
                      { title: 'Alpine Squad Clash', type: 'SQUAD', prize: '$180', fee: '$10', slots: '12/12' },
                      { title: 'Bermuda Duo Rush', type: 'DUO', prize: '$100', fee: '$4', slots: '21/25' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-2.5 bg-brand-card border border-brand-border rounded-lg flex items-center justify-between">
                        <div className="space-y-0.5 text-left">
                          <p className="font-bold text-white text-[11px] truncate max-w-[120px]">{item.title}</p>
                          <p className="text-[9px] text-gray-500">{item.type} • Fee {item.fee}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-brand-gold text-[11px]">Prize {item.prize}</p>
                          <p className="text-[9px] text-gray-400">{item.slots} Slots</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* App Navigation Bar */}
                  <div className="mt-auto bg-[#16161c] border-t border-brand-border px-4 py-2.5 flex justify-between items-center text-[9px] text-gray-400">
                    <div className="flex flex-col items-center gap-0.5 text-brand-orange">
                      <Flame className="w-4 h-4" />
                      <span>Tournaments</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Trophy className="w-4 h-4" />
                      <span>Leaderboard</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Shield className="w-4 h-4" />
                      <span>Wallet</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Card 1 */}
              <div className="absolute -left-6 top-1/4 bg-brand-card border border-brand-border p-4 rounded-xl shadow-2xl hidden sm:block max-w-[160px] text-left">
                <Award className="w-6 h-6 text-brand-gold mb-2" />
                <p className="text-xs font-bold text-white uppercase">Guaranteed Payout</p>
                <p className="text-[10px] text-gray-400 mt-1">Direct to UPI / Paytm instantly.</p>
              </div>

              {/* Decorative Floating Card 2 */}
              <div className="absolute -right-6 bottom-1/4 bg-brand-card border border-brand-border p-4 rounded-xl shadow-2xl hidden sm:block max-w-[160px] text-left">
                <Shield className="w-6 h-6 text-green-500 mb-2" />
                <p className="text-xs font-bold text-white uppercase">Anti-Cheat Active</p>
                <p className="text-[10px] text-gray-400 mt-1">100% Mobile Players only. No Emulators.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Stats Banner */}
      <section className="bg-brand-card border-y border-brand-border py-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <p className="font-display text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-gold glow-orange">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Live Tournaments Section */}
      <section id="tournaments" className="container mx-auto px-4 max-w-7xl scroll-mt-24">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            Live Lobby Browser
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide">
            Today's <span className="text-brand-orange glow-orange">Free Fire Custom Rooms</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose your preferred battleground, register your squad, and get the custom room credentials directly inside the app. Slots fill up fast!
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-2 pt-4">
            {(['ALL', 'SOLO', 'DUO', 'SQUAD'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeFilter === filter
                    ? 'bg-brand-orange border-brand-orange text-black font-extrabold shadow-glow'
                    : 'bg-[#111116] border-brand-border text-gray-400 hover:text-white hover:border-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Tournament Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => (
            <TournamentCard 
              key={tournament.id} 
              tournament={tournament} 
              onJoinClick={onDownloadClick} 
            />
          ))}
        </div>
      </section>

      {/* 4. Core Features Section */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#111116]/40 border border-brand-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative radial gradient */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest block">Built For Esports</span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase leading-none">
                Why FirePlay Is <span className="text-brand-gold glow-gold">The Best</span> Choice
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                We've engineered a seamless tournament pipeline specifically for Free Fire players, eliminating screenshots, manual reporting, and emulator cheaters.
              </p>
              <div className="pt-2">
                <button
                  onClick={onDownloadClick}
                  className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-brand-orange uppercase tracking-wider hover:text-brand-gold transition-colors"
                >
                  Download App to Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right side grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feat, idx) => (
                <div key={idx} className="p-5 bg-brand-dark/60 border border-brand-border/60 rounded-2xl hover:border-brand-orange/30 transition-all duration-300">
                  <div className="mb-3 p-2.5 w-fit rounded-xl bg-brand-dark border border-brand-border">
                    {feat.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white uppercase mb-1.5">{feat.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{feat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Wallet Simulator Sandbox Section */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Wallet Simulator */}
          <div className="lg:col-span-7">
            <WalletSimulator />
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
              <CheckCircle className="w-3.5 h-3.5" />
              100% Secure Payments
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase leading-none">
              Instant Deposits & <span className="text-brand-orange glow-orange">Zero-Fee Withdrawals</span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience the fastest cashouts in the mobile gaming industry. No more waiting days for tournament organizers to manually audit payouts. Our smart contract systems verify lobby rankings and process your earnings instantly.
            </p>
            
            <div className="space-y-3.5 text-xs text-gray-400 text-left">
              <div className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-brand-orange/10 text-brand-orange mt-0.5">✓</span>
                <p><strong>Instant UPI Transations:</strong> Enter your UPI ID or phone number and receive money in less than 60 seconds.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-brand-orange/10 text-brand-orange mt-0.5">✓</span>
                <p><strong>Zero Platform Cashout Fees:</strong> What you win is 100% yours. We do not deduct any convenience fees during withdrawal.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="p-1 rounded-full bg-brand-orange/10 text-brand-orange mt-0.5">✓</span>
                <p><strong>Anti-Fraud Protection:</strong> Your financial sandbox data is fully encrypted with bank-grade SSL protocols.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Center
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide">
            Frequently Asked <span className="text-brand-gold glow-gold">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Have questions about rules, payouts, or device permissions? We have answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-brand-border rounded-xl bg-brand-card overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-5 text-left font-display font-bold text-white text-base sm:text-lg uppercase flex items-center justify-between gap-4 hover:bg-[#16161c] transition-all"
              >
                <span>{faq.q}</span>
                <span className={`text-brand-orange transition-transform duration-300 font-light text-2xl ${
                  activeFaq === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>
              
              {activeFaq === index && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-brand-border/40 bg-brand-dark/40">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Footer CTA Banner */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="relative rounded-3xl border border-brand-border bg-gradient-to-r from-brand-dark to-brand-card overflow-hidden p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          {/* Background Glows */}
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-60 h-60 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none"></div>

          <Flame className="w-12 h-12 text-brand-orange fill-brand-orange mx-auto animate-pulse" />
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide max-w-2xl mx-auto leading-tight">
            Ready to Claim Your <span className="text-brand-orange glow-orange">Free Fire Throne?</span>
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Download the FirePlay Android client today, register your UID, and jump into your first custom lobby. Compete, win, and cash out instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="downloadBtn"
              onClick={onDownloadClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-gold font-display text-sm font-extrabold text-black uppercase tracking-wider hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5 fill-black" />
              Download FirePlay APK
            </button>
            <a
              href="#tournaments"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-brand-border bg-[#111116]/40 text-white font-display text-sm font-bold uppercase tracking-wider text-center hover:border-brand-orange transition-all"
            >
              Browse Tournaments
            </a>
          </div>

          <p className="text-[10px] text-gray-500">
            Compatible with Android 8.0+ • Free Fire & Free Fire MAX Supported • 48.2 MB
          </p>
        </div>
      </section>

    </div>
  );
}
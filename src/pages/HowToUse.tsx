import React, { useState } from 'react';
import { Download, ShieldCheck, Flame, Play, Copy, Check, Info, Award, HelpCircle } from 'lucide-react';

export default function HowToUse() {
  const [copiedId, setCopiedId] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);
  const [simStep, setSimStep] = useState<'idle' | 'registered' | 'lobby_open' | 'joined'>('idle');

  const copyToClipboard = (text: string, type: 'id' | 'pass') => {
    navigator.clipboard.writeText(text);
    if (type === 'id') {
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    } else {
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2000);
    }
  };

  const steps = [
    {
      num: '1',
      title: 'Download & Install APK',
      desc: 'Click any "Download APK" button on our site. Enable "Install from Unknown Sources" in your Android security settings, and install the FirePlay client.',
    },
    {
      num: '2',
      title: 'Secure UID Authentication',
      desc: 'Create an account and register your official Free Fire UID. This links your in-game stats, kills, and placements directly to our leaderboards.',
    },
    {
      num: '3',
      title: 'Register for a Tournament',
      desc: 'Browse upcoming lobbies on the app home screen. Choose a match that fits your tier, pay the entry fee using your wallet, and lock in your slot.',
    },
    {
      num: '4',
      title: 'Get Room ID & Password',
      desc: 'Exactly 15 minutes before the match start time, the custom room ID and password will be revealed on your app match lobby screen.',
    },
    {
      num: '5',
      title: 'Enter Room & Dominate',
      desc: 'Open Free Fire, search for the Room ID in the Custom Match lobby list, enter the password, join your designated slot, and play to win!',
    },
    {
      num: '6',
      title: 'Instant Automated Cashout',
      desc: 'Our servers fetch the results directly from Garena after the match ends. Winnings are distributed to your wallet within 5-10 minutes.',
    },
  ];

  return (
    <div className="pt-24 pb-20 space-y-24">
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/mobile-gaming.jpg" 
            alt="Mobile Gaming" 
            className="w-full h-full object-cover opacity-10 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-4">
          <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest block">Step-By-Step Guide</span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-wide">
            How To <span className="text-brand-orange glow-orange">Join & Play</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            New to FirePlay? Follow this simple walkthrough to download the app, authenticating your account, joining custom rooms, and withdrawing cash prizes.
          </p>
        </div>
      </section>

      {/* Steps Grid */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.num} 
              className="relative p-6 rounded-2xl border border-brand-border bg-brand-card hover:border-brand-orange/30 transition-all duration-300 group"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-gold text-black font-display font-extrabold text-xl flex items-center justify-center shadow-glow">
                {step.num}
              </div>
              <div className="pt-4 space-y-2">
                <h3 className="font-display text-xl font-bold text-white uppercase group-hover:text-brand-orange transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Lobby Simulator */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="border border-brand-border bg-brand-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-[#16161c] p-6 border-b border-brand-border text-center sm:text-left">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
              <Play className="w-5 h-5 text-brand-orange fill-brand-orange" />
              Interactive Match Lobby Simulator
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Practice how to register, copy room details, and join a custom game.
            </p>
          </div>

          <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Simulator Controls */}
            <div className="md:col-span-5 space-y-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Simulator Sandbox</span>
                <h3 className="font-display text-lg font-bold text-white uppercase">Follow the steps below:</h3>
              </div>

              {simStep === 'idle' && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Step 1: Click "Register" to secure your slot in the upcoming Clash Squad tournament.
                  </p>
                  <button
                    onClick={() => setSimStep('registered')}
                    className="w-full py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-hover text-xs font-bold text-black uppercase tracking-wider transition-all"
                  >
                    Register for Match ($5.00)
                  </button>
                </div>
              )}

              {simStep === 'registered' && (
                <div className="space-y-4 animate-fade-in">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Step 2: You are registered! The match starts soon. Now wait for the lobby host to publish the credentials (usually 15 mins before start). Click "Simulate Host Reveal" to proceed.
                  </p>
                  <button
                    onClick={() => setSimStep('lobby_open')}
                    className="w-full py-3 rounded-lg bg-brand-gold text-xs font-bold text-black uppercase tracking-wider transition-all shadow-glow-gold"
                  >
                    Simulate Host Reveal (Credentials)
                  </button>
                </div>
              )}

              {simStep === 'lobby_open' && (
                <div className="space-y-4">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Step 3: The custom room details are live! Copy the Room ID and Password, open Free Fire, search the Custom Room ID, enter the password, and sit in slot #14.
                  </p>
                  <div className="p-3 bg-brand-dark rounded-lg border border-brand-border space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Room ID:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">88439201</span>
                        <button 
                          onClick={() => copyToClipboard('88439201', 'id')}
                          className="p-1 rounded hover:bg-brand-border text-brand-orange"
                        >
                          {copiedId ? <span className="text-[10px] text-green-500">Copied!</span> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Password:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">fire99</span>
                        <button 
                          onClick={() => copyToClipboard('fire99', 'pass')}
                          className="p-1 rounded hover:bg-brand-border text-brand-orange"
                        >
                          {copiedPass ? <span className="text-[10px] text-green-500">Copied!</span> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSimStep('joined')}
                    className="w-full py-3 rounded-lg bg-green-500 text-xs font-bold text-black uppercase tracking-wider transition-all"
                  >
                    Simulate Joining Lobby in Game
                  </button>
                </div>
              )}

              {simStep === 'joined' && (
                <div className="space-y-4 animate-pulse">
                  <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-center text-xs text-green-400 font-semibold">
                    🎉 Practice Complete! You have joined slot #14.
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    You're ready for the real deal! Download the app now, join any of our active lobbies, and start competing for real cash.
                  </p>
                  <button
                    onClick={() => setSimStep('idle')}
                    className="w-full py-2.5 rounded-lg border border-brand-border hover:border-brand-orange text-xs font-bold text-white uppercase tracking-wider transition-all"
                  >
                    Reset Simulator
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Visual Feedback */}
            <div className="md:col-span-7 bg-brand-dark p-6 rounded-2xl border border-brand-border flex flex-col justify-center min-h-[300px] text-center relative overflow-hidden">
              {simStep === 'idle' && (
                <div className="space-y-3">
                  <Flame className="w-12 h-12 text-gray-600 mx-auto" />
                  <p className="font-display text-sm font-bold text-gray-400 uppercase">Lobby Status: Offline</p>
                  <p className="text-xs text-gray-500">Register on the left to start the simulation flow.</p>
                </div>
              )}

              {simStep === 'registered' && (
                <div className="space-y-3 animate-pulse">
                  <div className="w-4 h-4 bg-brand-orange rounded-full mx-auto animate-ping"></div>
                  <p className="font-display text-sm font-bold text-brand-orange uppercase">Lobby Status: Slot Reserved</p>
                  <p className="text-xs text-gray-400">Waiting for room details. Estimated countdown: 5 seconds.</p>
                </div>
              )}

              {simStep === 'lobby_open' && (
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-2 text-brand-gold">
                    <span className="w-2.5 h-2.5 bg-brand-gold rounded-full animate-ping"></span>
                    <span className="font-display text-xs font-bold uppercase tracking-wider">Credentials Released</span>
                  </div>
                  <div className="bg-[#16161c] border border-brand-border p-4 rounded-xl space-y-2">
                    <p className="text-[10px] text-gray-500 uppercase font-bold">Lobby Rules</p>
                    <ul className="text-[11px] text-gray-400 space-y-1">
                      <li>• Do not share the credentials. Account ban if shared.</li>
                      <li>• Emulators are strictly blocked from this lobby.</li>
                      <li>• Sit in your assigned slot (#14). Do not sit in other slots.</li>
                    </ul>
                  </div>
                </div>
              )}

              {simStep === 'joined' && (
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500 mx-auto mb-2">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="font-display text-base font-bold text-white uppercase">In Lobby Slot #14</p>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto">
                    Verification successful. Anti-cheat has scanned your device client and approved your session. Good luck, survivor!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Fair Play */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="border border-brand-border bg-[#111116]/40 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest block">Fair Play Mandate</span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white uppercase">
                Lobby <span className="text-brand-gold">Rules & Regulations</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                To keep tournaments competitive and rewarding, all registered players must strictly adhere to our community guidelines.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <div className="p-5 bg-brand-dark/60 border border-brand-border rounded-xl">
                <h4 className="font-display text-base font-bold text-white uppercase mb-2 flex items-center gap-1.5">
                  <span className="text-brand-orange">•</span> Slot Discipline
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  You must sit in the slot specified in your app lobby. Sitting in other players' slots or guest slots will result in an automatic kick from the room and forfeiture of your entry fee.
                </p>
              </div>

              <div className="p-5 bg-brand-dark/60 border border-brand-border rounded-xl">
                <h4 className="font-display text-base font-bold text-white uppercase mb-2 flex items-center gap-1.5">
                  <span className="text-brand-orange">•</span> Emulator Restrictions
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Lobbies are strictly monitored for hardware signatures. Emulator players, keyboard/mouse bypass tools, and rooted devices are auto-kicked by our background API.
                </p>
              </div>

              <div className="p-5 bg-brand-dark/60 border border-brand-border rounded-xl">
                <h4 className="font-display text-base font-bold text-white uppercase mb-2 flex items-center gap-1.5">
                  <span className="text-brand-orange">•</span> Teaming & Collusion
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Teaming up with opponents in solo matches or colluding with other squads in battle royale lobbies will lead to an immediate lifetime ban and confiscation of wallet balance.
                </p>
              </div>

              <div className="p-5 bg-brand-dark/60 border border-brand-border rounded-xl">
                <h4 className="font-display text-base font-bold text-white uppercase mb-2 flex items-center gap-1.5">
                  <span className="text-brand-orange">•</span> Score Audits
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  If there is an API lag, our support team will manually audit the match logs. Do not leave the custom room scoreboard immediately; keep a screenshot of your stats as a backup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
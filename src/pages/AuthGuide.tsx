import React, { useState } from 'react';
import { ShieldCheck, Eye, EyeOff, Smartphone, Mail, Lock, CheckCircle, Flame, User, Info } from 'lucide-react';

export default function AuthGuide() {
  const [uid, setUid] = useState('');
  const [username, setUsername] = useState('');
  const [authStep, setAuthStep] = useState<'form' | 'otp' | 'completed'>('form');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uid.trim() || !username.trim()) return;
    setAuthStep('otp');
  };

  const handleOtpVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') {
      setAuthStep('completed');
      setOtpError(false);
    } else {
      setOtpError(true);
    }
  };

  return (
    <div className="pt-24 pb-20 space-y-24">
      {/* Header */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/player.jpg" 
            alt="Esports Player" 
            className="w-full h-full object-cover opacity-10 filter blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center space-y-4">
          <span className="text-xs font-extrabold text-brand-orange uppercase tracking-widest block">Authentication Protocol</span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white uppercase tracking-wide">
            Player <span className="text-brand-orange glow-orange">Auth & Security</span> Guide
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Learn how we secure your gaming profile, verify your Garena Free Fire UID, and protect your earnings with Multi-Factor OTP Authentication.
          </p>
        </div>
      </section>

      {/* Core Auth Concepts */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Garena UID Link */}
          <div className="p-6 rounded-2xl border border-brand-border bg-brand-card space-y-4">
            <div className="p-3 w-fit rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase">1. Why Garena UID is Mandatory</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              Your Free Fire UID (e.g., <code>1234567890</code>) is a unique 10-digit number. Linking it to FirePlay allows our automated script to track your in-game kills, placements, and MVP status. Once registered, your UID cannot be changed to prevent smurfing or profile sharing.
            </p>
          </div>

          {/* Card 2: OTP Verification */}
          <div className="p-6 rounded-2xl border border-brand-border bg-brand-card space-y-4">
            <div className="p-3 w-fit rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase">2. Multi-Factor OTP Security</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              Every wallet transaction, cashout request, or account recovery requires a 4-digit SMS/Email OTP verification. This guarantees that even if someone gains access to your device, they cannot withdraw your hard-earned tournament funds.
            </p>
          </div>

          {/* Card 3: Anti-Smurf Policy */}
          <div className="p-6 rounded-2xl border border-brand-border bg-brand-card space-y-4">
            <div className="p-3 w-fit rounded-xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-white uppercase">3. Strict One-Device Profile</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              We enforce a strict "One Account, One Device, One UID" rule. Logging in from multiple devices in quick succession triggers our security system, putting your wallet on a temporary hold until our moderators manually verify your identity.
            </p>
          </div>

        </div>
      </section>

      {/* Interactive Authentication Sandbox */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="border border-brand-border bg-brand-card rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column: Form & Sandbox */}
            <div className="p-6 md:p-10 md:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Interactive Sandbox</span>
                <h3 className="font-display text-xl font-bold text-white uppercase">Simulate Player Registration</h3>
                <p className="text-xs text-gray-400">Experience our quick registration and OTP flow below.</p>
              </div>

              {authStep === 'form' && (
                <form onSubmit={handleAuthSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-brand-orange" />
                      Desired Username
                    </label>
                    <input 
                      type="text" 
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2.5 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="e.g. VagueSurvior"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5 flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-brand-orange" />
                      Free Fire UID (8-12 Digits)
                    </label>
                    <input 
                      type="text" 
                      required
                      pattern="[0-9]{8,12}"
                      value={uid}
                      onChange={(e) => setUid(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-4 py-2.5 bg-brand-dark border border-brand-border rounded-lg text-xs text-white focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="e.g. 582910482"
                    />
                    <span className="text-[10px] text-gray-500 mt-1 block">Must match your in-game profile ID.</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-brand-orange to-brand-gold text-xs font-bold text-black uppercase tracking-wider hover:shadow-glow transition-all"
                  >
                    Initiate Authentication
                  </button>
                </form>
              )}

              {authStep === 'otp' && (
                <form onSubmit={handleOtpVerify} className="space-y-4 text-left animate-fade-in">
                  <div className="p-3 bg-brand-orange/10 border border-brand-orange/20 rounded-lg text-xs text-brand-orange">
                    🔒 Security OTP sent to your simulator. Use test code <strong>1234</strong> to verify.
                  </div>

                  <div>
                    <label className="block text-[10px] text-gray-400 uppercase font-bold mb-1.5 flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-brand-orange" />
                      Enter 4-Digit OTP
                    </label>
                    <input 
                      type="text" 
                      required
                      maxLength={4}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      className="w-full px-4 py-2.5 bg-brand-dark border border-brand-border rounded-lg text-center text-lg font-bold text-white tracking-widest focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="0 0 0 0"
                    />
                    {otpError && (
                      <span className="text-[10px] text-red-500 mt-1 block font-semibold">
                        Invalid OTP! Use test code 1234.
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <button 
                      type="button"
                      onClick={() => setAuthStep('form')}
                      className="flex-1 py-2.5 rounded-lg border border-brand-border text-xs text-gray-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-2.5 rounded-lg bg-brand-orange text-xs font-bold text-black uppercase tracking-wider hover:bg-brand-orange-hover transition-colors"
                    >
                      Verify OTP
                    </button>
                  </div>
                </form>
              )}

              {authStep === 'completed' && (
                <div className="space-y-5 text-center py-6 animate-pulse">
                  <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500 mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display text-lg font-bold text-white uppercase">Profile Authenticated!</h4>
                    <p className="text-xs text-gray-400">
                      Username: <strong className="text-white">{username}</strong> • UID: <strong className="text-white">{uid}</strong>
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setAuthStep('form');
                      setUid('');
                      setUsername('');
                      setOtp('');
                    }}
                    className="px-4 py-2 bg-brand-dark border border-brand-border hover:border-brand-orange text-xs text-white uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Register Another Account
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: In-Game UID Visual Guide */}
            <div className="bg-[#16161c] p-6 md:p-10 md:col-span-5 flex flex-col justify-center border-t md:border-t-0 md:border-l border-brand-border">
              <h4 className="font-display text-base font-bold text-white uppercase mb-3 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-brand-gold" />
                How to find your UID
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Don't know where your Free Fire UID is? Follow these quick in-game steps:
              </p>
              
              <ol className="space-y-3 text-xs text-gray-300 text-left">
                <li className="flex gap-2">
                  <span className="text-brand-orange font-bold">1.</span>
                  <p>Open <strong>Garena Free Fire</strong> on your phone.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange font-bold">2.</span>
                  <p>Tap your <strong>Avatar / Profile Banner</strong> in the top-left corner.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange font-bold">3.</span>
                  <p>Select the <strong>"Gallery"</strong> tab.</p>
                </li>
                <li className="flex gap-2">
                  <span className="text-brand-orange font-bold">4.</span>
                  <p>Look below your character name. You will see <strong>UID: 1234567890</strong>. Tap the copy icon next to it.</p>
                </li>
              </ol>

              <div className="mt-5 p-3 bg-brand-dark border border-brand-border rounded-lg text-[10px] text-gray-500 leading-relaxed">
                ⚠️ <strong>Note:</strong> Ensure you copy the exact digits. Registering an incorrect UID will block you from entering custom lobbies and may lead to a temporary account suspension.
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
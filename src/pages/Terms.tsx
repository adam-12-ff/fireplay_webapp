import React from 'react';
import { Shield, FileText, Scale, AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Header */}
      <section className="relative py-12 overflow-hidden border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-3">
          <FileText className="w-10 h-10 text-brand-orange mx-auto" />
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wide">
            Terms of <span className="text-brand-orange glow-orange">Service</span>
          </h1>
          <p className="text-xs text-gray-400">Last updated: October 24, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-10 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
          
          <div className="p-4 bg-brand-orange/5 border border-brand-orange/20 rounded-xl flex gap-3">
            <AlertCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400">
              Please read these Terms of Service carefully before downloading or using the FirePlay mobile application. By accessing our platform, you agree to be bound by these terms, including our Fair Play and Anti-Cheat regulations.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-orange" />
              1. Eligibility & Player Accounts
            </h2>
            <p>
              To participate in FirePlay tournaments, custom rooms, or cash matches, you must:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Be at least 18 years of age (or the age of majority in your jurisdiction).</li>
              <li>Register with a single, valid Garena Free Fire UID that belongs to you.</li>
              <li>Reside in a region where mobile esports cash-tournaments are legally permitted. Residents of states/regions that restrict cash gaming are prohibited from entering paid lobbies.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-orange" />
              2. Fair Play & Anti-Cheat Policy
            </h2>
            <p>
              FirePlay is committed to providing a 100% hacker-free competitive environment. The following behaviors are strictly prohibited and will result in an immediate lifetime ban, forfeiture of wallet balances, and device hardware bans:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>Using modified game clients (APKs/IPAs), wallhacks, auto-aim, speedhacks, or recoil scripts.</li>
              <li>Playing on emulators (PC, BlueStacks, LDPlayer) or mapping physical keyboard/mouse peripherals to bypass mobile lobbies.</li>
              <li>Teaming up with opponents in solo matches, sharing coordinates, or intentionally throwing matches (match-fixing).</li>
              <li>Exploiting in-game bugs, map glitches, or server lags to gain an unfair tactical advantage.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              3. Wallet, Deposits, & Withdrawals
            </h2>
            <p>
              All financial transactions are processed securely through encrypted sandboxes and payment gateways:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li><strong>Deposits:</strong> Funds deposited into your wallet are converted to mock coins or cash credits for lobby entry. Deposits are non-refundable once used to register for a tournament.</li>
              <li><strong>Withdrawals:</strong> Players may withdraw their tournament winnings to UPI, Paytm, GPay, or Net Banking. The minimum withdrawal threshold is $5.00.</li>
              <li><strong>Auditing:</strong> We reserve the right to audit match logs, anti-cheat signatures, and scoreboard reports for up to 48 hours before processing large withdrawal requests.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-brand-orange" />
              4. Refund Policy
            </h2>
            <p>
              Entry fees for tournaments are fully refundable if:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>The tournament is cancelled or postponed by the host/moderator.</li>
              <li>The custom room fails to launch due to server errors or API failures.</li>
              <li>You unregister from the tournament at least 30 minutes prior to the scheduled start time.</li>
            </ul>
            <p className="text-gray-400">
              No refunds will be provided if you are kicked from the room for sitting in an incorrect slot, failing to join on time, or being flagged by the anti-cheat system.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-orange" />
              5. Limitation of Liability
            </h2>
            <p>
              FirePlay operates as an independent tournament platform. We are not liable for any game lag, Garena server outages, network disconnects on the player's end, or sudden changes in Free Fire's third-party API policies. All games are played at the user's own risk.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
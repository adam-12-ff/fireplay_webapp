import React from 'react';
import { Award, ShieldAlert, FileText, Scale } from 'lucide-react';

export default function Copyright() {
  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Header */}
      <section className="relative py-12 overflow-hidden border-b border-brand-border">
        <div className="container mx-auto px-4 max-w-7xl text-center space-y-3">
          <ShieldAlert className="w-10 h-10 text-brand-orange mx-auto" />
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white uppercase tracking-wide">
            Copyright & <span className="text-brand-orange glow-orange">DMCA</span> Policy
          </h1>
          <p className="text-xs text-gray-400">Last updated: October 24, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 max-w-4xl">
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 md:p-10 space-y-8 text-xs sm:text-sm text-gray-300 leading-relaxed text-left">
          
          <div className="p-4 bg-brand-orange/5 border border-brand-orange/20 rounded-xl flex gap-3">
            <Award className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
            <p className="text-xs text-gray-400">
              FirePlay respects intellectual property rights. This document outlines our legal status regarding Garena Free Fire trademarks, tournament broadcasting, and user-generated content policies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-orange" />
              1. Trademark Disclaimer
            </h2>
            <p>
              <strong>Garena, Free Fire, Free Fire MAX</strong>, and all associated logos, characters, maps, and weapons are trademarks or registered trademarks of Garena International or Garena Online Private Limited. 
            </p>
            <p>
              FirePlay is an independent, community-driven mobile esports platform. We are <strong>not affiliated with, endorsed by, or sponsored by Garena</strong>. All game assets, characters, and trademarks displayed on this site and in our application are used strictly for informational, educational, and tournament coordination purposes under fair use guidelines.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-orange" />
              2. User-Generated Tournament Content
            </h2>
            <p>
              Tournament hosts, guilds, and content creators may upload custom logos, descriptions, and banners to our platform. By uploading content to FirePlay, you warrant that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>You own the copyright or have explicit permission to use and display the uploaded assets.</li>
              <li>The content does not violate any third-party copyrights, trademark rights, or publicity rights.</li>
              <li>The content does not feature highly offensive, copyrighted, or malicious materials.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-brand-orange" />
              3. DMCA Takedown Notice
            </h2>
            <p>
              If you believe that any content hosted on the FirePlay website or mobile application infringes upon your copyright, you may submit a formal DMCA Takedown Notice to our designated agent at <strong>dmca@fireplay.app</strong>. Your notice must include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-gray-400">
              <li>A physical or electronic signature of the copyright owner or authorized representative.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Identification of the infringing material on our platform (including specific URLs or lobby IDs).</li>
              <li>Your contact information (email, phone number, and physical address).</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner.</li>
              <li>A statement, under penalty of perjury, that the information in your notice is 100% accurate.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-lg sm:text-xl font-bold text-white uppercase flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-orange" />
              4. Counter-Notification
            </h2>
            <p>
              If your tournament lobby or uploaded banner was removed due to a DMCA claim and you believe this was an error, you may file a counter-notification containing your signature, identification of the removed material, and a statement consenting to the jurisdiction of your local federal courts.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
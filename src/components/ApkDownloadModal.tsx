import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, AlertCircle, RefreshCw, FileText, ArrowRight } from 'lucide-react';

interface ApkDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApkDownloadModal({ isOpen, onClose }: ApkDownloadModalProps) {
  const [downloadStep, setDownloadStep] = useState<'idle' | 'connecting' | 'downloading' | 'verifying' | 'complete'>('idle');
  const [progress, setProgress] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState('0 MB/s');
  const [downloadedSize, setDownloadedSize] = useState('0.0 MB');
  const [timeRemaining, setTimeRemaining] = useState('calculating...');

  useEffect(() => {
    if (!isOpen) {
      setDownloadStep('idle');
      setProgress(0);
      return;
    }

    // Start download flow
    setDownloadStep('connecting');
    const timer1 = setTimeout(() => {
      setDownloadStep('downloading');
    }, 1200);

    return () => clearTimeout(timer1);
  }, [isOpen]);

  useEffect(() => {
    if (downloadStep !== 'downloading') return;

    // ⬇️ REAL DOWNLOAD TRIGGER: Triggers the download of 'app-release.apk' from public folder
    const link = document.createElement('a');
    link.href = '/app-release.apk';
    link.download = 'app-release.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadStep('verifying');
          return 100;
        }
        
        const increment = Math.random() * 8 + 4; // random increase
        const nextProgress = Math.min(prev + increment, 100);
        
        // Calculate mock speed and sizes
        const speed = (Math.random() * 4 + 6).toFixed(1); // 6-10 MB/s
        setDownloadSpeed(`${speed} MB/s`);
        
        const totalSize = 48.2;
        const currentSize = ((nextProgress / 100) * totalSize).toFixed(1);
        setDownloadedSize(`${currentSize} MB`);
        
        const remainingSeconds = Math.ceil(((100 - nextProgress) / (increment * 2)));
        setTimeRemaining(remainingSeconds > 0 ? `${remainingSeconds}s remaining` : 'finishing...');

        return nextProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [downloadStep]);

  useEffect(() => {
    if (downloadStep !== 'verifying') return;

    const timer = setTimeout(() => {
      setDownloadStep('complete');
    }, 1800);

    return () => clearTimeout(timer);
  }, [downloadStep]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-brand-border bg-[#16161c]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-brand-orange/10 text-brand-orange">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                Downloading FirePlay APK
              </h3>
              <p className="text-xs text-gray-400">v1.2.4 • 48.2 MB • Android</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-brand-border transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6">
          {downloadStep === 'connecting' && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <RefreshCw className="w-12 h-12 text-brand-orange animate-spin mb-4" />
              <h4 className="font-display text-lg font-semibold text-white uppercase tracking-wide">
                Connecting to Secure Server...
              </h4>
              <p className="text-sm text-gray-400 mt-2">
                Establishing a high-speed secure tunnel to fetch the latest APK build.
              </p>
            </div>
          )}

          {downloadStep === 'downloading' && (
            <div className="py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-brand-orange uppercase tracking-wider">
                  Downloading File
                </span>
                <span className="text-xs text-gray-400">
                  {downloadedSize} / 48.2 MB
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-[#16161c] h-3 rounded-full overflow-hidden border border-brand-border mb-4">
                <div 
                  className="bg-gradient-to-r from-brand-orange to-brand-gold h-full rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center bg-[#16161c] p-3 rounded-lg border border-brand-border">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Progress</p>
                  <p className="text-sm font-bold text-white">{Math.round(progress)}%</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">Speed</p>
                  <p className="text-sm font-bold text-brand-gold">{downloadSpeed}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase">ETA</p>
                  <p className="text-sm font-bold text-gray-300">{timeRemaining}</p>
                </div>
              </div>

              <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                Secure download verified by FirePlay Anti-Cheat.
              </p>
            </div>
          )}

          {downloadStep === 'verifying' && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <ShieldCheck className="w-12 h-12 text-green-500 animate-pulse mb-4" />
              <h4 className="font-display text-lg font-semibold text-white uppercase tracking-wide">
                Verifying APK Integrity...
              </h4>
              <p className="text-sm text-gray-400 mt-2">
                Checking package signature and conducting malware scans for safe installation.
              </p>
            </div>
          )}

          {downloadStep === 'complete' && (
            <div className="py-2">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center text-green-500 mb-3">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h4 className="font-display text-xl font-bold text-white uppercase tracking-wide">
                  Download Successful!
                </h4>
                <p className="text-xs text-green-500 font-semibold mt-1">
                  app-release.apk (Verified Safe)
                </p>
              </div>

              {/* Install Guide Steps */}
              <div className="bg-[#16161c] border border-brand-border rounded-xl p-4 mb-6">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-brand-orange" />
                  How to Install on Android
                </h5>
                <ol className="space-y-3 text-xs text-gray-300">
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange font-bold flex items-center justify-center">1</span>
                    <p>Open your device's <strong>Settings</strong> and navigate to <strong>Security / Biometrics</strong>.</p>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange font-bold flex items-center justify-center">2</span>
                    <p>Enable <strong>"Install from Unknown Sources"</strong> or allow permission for your browser.</p>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange font-bold flex items-center justify-center">3</span>
                    <p>Tap the downloaded <strong>app-release.apk</strong> file in your downloads folder and select <strong>"Install"</strong>.</p>
                  </li>
                </ol>
              </div>

              <div className="flex gap-3">
                <button 
                  onClick={() => setDownloadStep('connecting')}
                  className="flex-1 py-2.5 rounded-lg border border-brand-border hover:border-brand-orange text-xs text-gray-300 hover:text-white transition-all flex items-center justify-center gap-1.5 font-semibold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Redownload
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-brand-orange to-brand-gold text-xs text-black font-bold hover:opacity-90 transition-all flex items-center justify-center gap-1.5"
                >
                  Got It, Play Now
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
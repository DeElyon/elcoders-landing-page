'use client';

import { useEffect, useRef } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Auto-play failed, fallback to static background
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
          <p className="text-sm text-cyan-400 font-semibold">Welcome to the future of development</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-balance">
          Code Shipped in 24 Hours
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Zero Fluff. Daily Velocity.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto text-balance">
          Dedicated dev team for Web, Mobile, AI/ML & more.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.link/oktez7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold text-lg hover:opacity-90 transition transform hover:scale-105 text-center"
          >
            Start Your Project
          </a>
          <a
            href="https://wa.link/oktez7"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-slate-700 text-white rounded-lg font-semibold text-lg hover:bg-slate-800 transition text-center"
          >
            WhatsApp Connect
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-700">
          <div className="group">
            <div className="flex items-center justify-center mb-2 text-cyan-400 text-2xl group-hover:scale-110 transition transform">
              ⚡
            </div>
            <p className="text-2xl md:text-3xl font-bold text-white">24hrs</p>
            <p className="text-slate-400 text-sm">First Commit</p>
          </div>
          <div className="group">
            <div className="flex items-center justify-center mb-2 text-blue-400 text-2xl group-hover:scale-110 transition transform">
              🎯
            </div>
            <p className="text-2xl md:text-3xl font-bold text-white">500+</p>
            <p className="text-slate-400 text-sm">Dev Hours</p>
          </div>
          <div className="group">
            <div className="flex items-center justify-center mb-2 text-cyan-400 text-2xl group-hover:scale-110 transition transform">
              😊
            </div>
            <p className="text-2xl md:text-3xl font-bold text-white">98%</p>
            <p className="text-slate-400 text-sm">Satisfaction</p>
          </div>
          <div className="group">
            <div className="flex items-center justify-center mb-2 text-blue-400 text-2xl group-hover:scale-110 transition transform">
              🌍
            </div>
            <p className="text-2xl md:text-3xl font-bold text-white">40+</p>
            <p className="text-slate-400 text-sm">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/elcoders-logo.png" 
            alt="ELCODERS Logo" 
            width={40} 
            height={40}
            className="rounded-full border border-cyan-500/50"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-none">
              ELCODERS
            </span>
            <span className="text-[10px] text-cyan-500 font-bold tracking-tighter uppercase leading-none mt-1">
              EL VERSE ECOSYSTEM
            </span>
          </div>
        </Link>
        
        <div className="hidden md:flex gap-8">
          <a href="#services" className="text-slate-300 hover:text-white transition">
            Services
          </a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">
            Pricing
          </a>
          <a href="#timeline" className="text-slate-300 hover:text-white transition">
            Timeline
          </a>
          <a href="#faq" className="text-slate-300 hover:text-white transition">
            FAQ
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <a
          href="https://wa.link/oktez7"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Get Started
        </a>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 p-4">
          <div className="flex flex-col gap-4">
            <a href="#services" className="text-slate-300 hover:text-white transition">
              Services
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">
              Pricing
            </a>
            <a href="#timeline" className="text-slate-300 hover:text-white transition">
              Timeline
            </a>
            <a href="#faq" className="text-slate-300 hover:text-white transition">
              FAQ
            </a>
            <a
              href="https://wa.link/oktez7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition text-center block"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

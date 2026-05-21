'use client';

import React from 'react';
import { Heart, Github, Twitter, Linkedin, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-glass)] bg-[var(--bg-tertiary)]/20 py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background glow strip */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Main Footer Layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Branding column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-extrabold text-[var(--text-primary)] flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center text-white text-xs">
                EC
              </span>
              EmotiCare AI
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mb-6 leading-relaxed">
              An award-winning, emotion-aware AI healthcare companion engineered to map stress levels, sleep cycles, and daily habits to preempt chronic burnout.
            </p>
            {/* Social Grid */}
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] border border-[var(--border-glass)] hover:border-[var(--accent-cyan)]/30 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] border border-[var(--border-glass)] hover:border-[var(--accent-cyan)]/30 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-[var(--bg-tertiary)] hover:bg-[var(--bg-primary)] border border-[var(--border-glass)] hover:border-[var(--accent-cyan)]/30 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick links columns */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[var(--accent-cyan)] mb-4">Companion Stack</h4>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><a href="#" className="hover:text-[var(--accent-cyan)] transition-colors">Diagnostic Suite</a></li>
              <li><a href="#" className="hover:text-[var(--accent-cyan)] transition-colors">Breathing Check-in</a></li>
              <li><a href="#" className="hover:text-[var(--accent-cyan)] transition-colors">HRV Analytics</a></li>
              <li><a href="#" className="hover:text-[var(--accent-cyan)] transition-colors">Developer API</a></li>
            </ul>
          </div>

          {/* Legal columns */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-[var(--accent-purple)] mb-4">Legal Core</h4>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><a href="#" className="hover:text-[var(--accent-purple)] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--accent-purple)] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[var(--accent-purple)] transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="hover:text-[var(--accent-purple)] transition-colors">Contact Support</a></li>
            </ul>
          </div>

        </div>

        {/* HEALTHCARE DISCLAIMER - Glassmorphic Warning Panel */}
        <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 text-amber-900 dark:text-amber-200/80 flex gap-4 items-start">
          <ShieldAlert size={20} className="text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs leading-relaxed">
            <span className="font-extrabold uppercase tracking-wide">Healthcare & Informational Disclaimer:</span> EmotiCare AI and its chatbot assistant are designed purely for lifestyle guidance, stress management, sleep hygiene logging, and general emotional support. It is not an alternative to professional medical diagnosis, psychotherapy, clinical therapy, or pharmaceutical prescriptions. Always seek the advice of clinical professionals regarding medical conditions.
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-[var(--border-glass)] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-secondary)] gap-4">
          <p>© {new Date().getFullYear()} EmotiCare AI. Built for premium digital health hackathons.</p>
          <p className="flex items-center gap-1.5">
            Engineered with <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" /> for emotional well-being.
          </p>
        </div>

      </div>
    </footer>
  );
}

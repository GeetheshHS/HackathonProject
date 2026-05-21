'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Brain, ShieldAlert, Sparkles, Heart } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onTryChatbot: () => void;
}

export default function Hero({ onGetStarted, onTryChatbot }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
      
      {/* Hero Left Content */}
      <div className="flex-1 text-left z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[var(--accent-cyan)]/25 text-[var(--accent-cyan)] text-xs font-bold uppercase tracking-wider mb-6 cursor-pointer"
        >
          <Sparkles size={14} className="animate-pulse text-[var(--accent-cyan)]" />
          <span>Award-Winning Emotion Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gradient-cyan-purple mb-6"
        >
          Emotion-Aware AI<br />
          <span className="text-[var(--text-primary)]">Healthcare Companion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-xl mb-10 leading-relaxed"
        >
          Analyze emotions, stress, sleep, and wellness patterns with AI-powered healthcare intelligence. Achieve mental clarity and optimal daily habits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={onGetStarted}
            id="hero-get-started-btn"
            className="px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] hover:from-cyan-400 hover:to-indigo-500 text-white shadow-lg shadow-[var(--accent-cyan)]/10 hover:shadow-[var(--accent-cyan)]/20 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </button>
          
          <button
            onClick={onTryChatbot}
            id="hero-try-ai-btn"
            className="px-8 py-4 rounded-xl font-bold glass-card text-[var(--text-primary)] border border-[var(--border-glass)] hover:border-[var(--accent-cyan)]/30 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Brain size={18} className="text-[var(--accent-cyan)]" />
            <span>Try AI Assistant</span>
          </button>
        </motion.div>
      </div>

      {/* Hero Right Visuals (Interactive 3D Biotech Orb & Floating Health Panels) */}
      <div className="flex-1 relative w-full max-w-md lg:max-w-xl aspect-square flex items-center justify-center z-10">
        
        {/* Animated Cyber Core - Biometric Orb Orbit 1 */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-dashed border-[var(--accent-cyan)]/20 flex items-center justify-center"
        >
          {/* Orbit 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="w-48 h-48 sm:w-60 sm:h-60 rounded-full border border-dashed border-[var(--accent-purple)]/25 flex items-center justify-center"
          />
        </motion.div>

        {/* Central Glowing Core representing EmotiCare AI Mind */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[var(--accent-cyan)]/20 via-[var(--accent-purple)]/20 to-[var(--accent-pink)]/20 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex items-center justify-center border border-[var(--accent-cyan)]/30"
        >
          <div className="text-[var(--accent-cyan)] flex flex-col items-center gap-2">
            <Heart size={44} className="fill-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] animate-pulse" />
            <span className="text-[9px] uppercase font-bold tracking-widest text-[var(--text-primary)]">EmotiCare Core</span>
          </div>
        </motion.div>

        {/* Floating Health Metrics Widget 1 (Heart Rate - Cyan Glow) */}
        <motion.div
          initial={{ x: -100, y: -80, opacity: 0 }}
          animate={{ x: -70, y: -90, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.06, y: -95 }}
          className="absolute glass-card p-4 rounded-2xl flex items-center gap-3 border border-[var(--accent-cyan)]/20 shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:border-[var(--accent-cyan)]/40 cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)] flex items-center justify-center pulse-indicator">
            <Activity size={18} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest font-extrabold">Heart Rate</p>
            <p className="text-lg font-extrabold text-[var(--text-primary)]">72 <span className="text-xs font-normal">BPM</span></p>
          </div>
        </motion.div>

        {/* Floating Health Metrics Widget 2 (Burnout Indicator - Purple/Pink Glow) */}
        <motion.div
          initial={{ x: 100, y: 80, opacity: 0 }}
          animate={{ x: 80, y: 90, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.06, y: 85 }}
          className="absolute glass-card p-4 rounded-2xl flex items-center gap-3 border border-[var(--accent-purple)]/20 shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.18)] hover:border-[var(--accent-purple)]/40 cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] flex items-center justify-center">
            <Brain size={18} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest font-extrabold">Cognitive Load</p>
            <p className="text-lg font-extrabold text-[var(--text-primary)]">Optimal</p>
          </div>
        </motion.div>

        {/* Floating Health Metrics Widget 3 (Stress Risk - Emerald Glow) */}
        <motion.div
          initial={{ x: -120, y: 100, opacity: 0 }}
          animate={{ x: -100, y: 80, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          whileHover={{ scale: 1.06, y: 75 }}
          className="absolute glass-card p-4 rounded-2xl flex items-center gap-3 border border-[var(--accent-emerald)]/20 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.18)] hover:border-[var(--accent-emerald)]/40 cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-emerald)]/10 text-[var(--accent-emerald)] flex items-center justify-center">
            <ShieldAlert size={18} />
          </div>
          <div>
            <p className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest font-extrabold">Stress Risk</p>
            <p className="text-lg font-extrabold text-[var(--accent-emerald)]">Very Low</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { useTheme } from '@/components/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle-btn"
      className="relative flex items-center justify-between w-16 h-8 p-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border-glass)] cursor-pointer overflow-hidden transition-all duration-300 hover:border-[var(--accent-cyan)]/20 shadow-inner"
      aria-label="Toggle Dark and Light Mode"
    >
      {/* Dynamic Background Slider Capsule */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] shadow-[0_0_12px_rgba(6,182,212,0.4)]"
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ left: theme === 'dark' ? '4px' : '34px' }}
      />

      <div className={`flex items-center justify-center w-6 h-6 z-10 transition-colors duration-300 ${
        theme === 'dark' ? 'text-white' : 'text-[var(--text-secondary)]'
      }`}>
        <Moon size={13} className="transition-transform duration-300" />
      </div>

      <div className={`flex items-center justify-center w-6 h-6 z-10 transition-colors duration-300 ${
        theme === 'light' ? 'text-white' : 'text-[var(--text-secondary)]'
      }`}>
        <Sun size={13} className="transition-transform duration-300" />
      </div>
    </button>
  );
}

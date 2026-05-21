'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Brain, 
  Sparkles, 
  Menu, 
  X, 
  Activity, 
  Moon
} from 'lucide-react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Dashboard from '@/components/Dashboard';
import AIChatbot from '@/components/AIChatbot';
import ThemeToggle from '@/components/ThemeToggle';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'landing' | 'dashboard' | 'chat'>('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scrolling to add glassy overlay to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (sectionId: string) => {
    setActiveTab('landing');
    setMobileMenuOpen(false);
    
    // Slight delay to ensure tab state switches first, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden transition-colors duration-500">
      
      {/* Dynamic Futuristic Mesh Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-cyber -z-20 pointer-events-none" />

      {/* Aurora Ambient Drifting Mesh Blobs */}
      <div className="absolute top-[10vw] left-[5vw] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-cyan-500/10 via-teal-500/5 to-transparent bg-blob -z-30 pointer-events-none" />
      <div className="absolute top-[40vh] right-[5vw] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent bg-blob -z-30 pointer-events-none" style={{ animationDelay: '-7s', animationDuration: '24s' }} />
      <div className="absolute bottom-[10vh] left-[15vw] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-pink-500/10 via-rose-500/5 to-transparent bg-blob -z-30 pointer-events-none" style={{ animationDelay: '-14s', animationDuration: '28s' }} />

      {/* HEADER / NAVIGATION BAR */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-[var(--bg-glass)] backdrop-blur-md border-b border-[var(--border-glass)] shadow-lg' 
          : 'py-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('landing')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-650 flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform duration-300">
              EC
            </span>
            <span className="text-xl font-extrabold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
              EmotiCare<span className="text-[var(--accent-cyan)] font-bold">.AI</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <button 
              onClick={() => { setActiveTab('landing'); navigateToSection('features-section'); }}
              className="hover:text-[var(--accent-cyan)] text-[var(--text-secondary)] transition-colors relative py-1"
            >
              Features
            </button>
            <button 
              onClick={() => { setActiveTab('landing'); navigateToSection('how-it-works'); }}
              className="hover:text-[var(--accent-cyan)] text-[var(--text-secondary)] transition-colors relative py-1"
            >
              How It Works
            </button>
            <button 
              onClick={() => setActiveTab('chat')}
              className={`hover:text-[var(--accent-cyan)] transition-colors relative py-1 ${activeTab === 'chat' ? 'text-[var(--accent-cyan)] font-bold' : 'text-[var(--text-secondary)]'}`}
            >
              AI Assistant
              {activeTab === 'chat' && (
                <motion.span layoutId="activeNavTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
              )}
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`hover:text-[var(--accent-cyan)] transition-colors relative py-1 ${activeTab === 'dashboard' ? 'text-[var(--accent-cyan)] font-bold' : 'text-[var(--text-secondary)]'}`}
            >
              Wellness Dashboard
              {activeTab === 'dashboard' && (
                <motion.span layoutId="activeNavTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
              )}
            </button>
          </nav>

          {/* Action Hub (Theme Toggle + CTA Buttons) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setActiveTab('dashboard')}
              id="nav-dashboard-cta"
              className="px-5 py-2.5 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-indigo-650 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-cyan-500/5 hover:shadow-cyan-500/15 transform hover:-translate-y-0.5 transition-all duration-300 text-xs"
            >
              Launch Dashboard
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-400 border border-slate-700/50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* MOBILE DRAWER NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[73px] left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 z-40 overflow-hidden md:hidden shadow-2xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-base font-bold text-slate-600 dark:text-slate-400">
              <button 
                onClick={() => { setActiveTab('landing'); navigateToSection('features-section'); }}
                className="text-left hover:text-teal-600 dark:hover:text-teal-400"
              >
                Features
              </button>
              <button 
                onClick={() => { setActiveTab('landing'); navigateToSection('how-it-works'); }}
                className="text-left hover:text-teal-600 dark:hover:text-teal-400"
              >
                How It Works
              </button>
              <button 
                onClick={() => { setActiveTab('chat'); setMobileMenuOpen(false); }}
                className="text-left hover:text-teal-600 dark:hover:text-teal-400"
              >
                AI Assistant
              </button>
              <button 
                onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
                className="text-left hover:text-teal-600 dark:hover:text-teal-400"
              >
                Wellness Dashboard
              </button>
              <button
                onClick={() => { setActiveTab('dashboard'); setMobileMenuOpen(false); }}
                className="w-full py-3.5 rounded-xl font-bold bg-gradient-to-r from-teal-600 to-indigo-600 text-white text-center shadow-lg"
              >
                Launch Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN LAYOUT ORCHESTRATION WITH SMOOTH TABS TRANSITIONS */}
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {activeTab === 'landing' && (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* 1. HERO SECTION */}
              <Hero 
                onGetStarted={() => setActiveTab('dashboard')} 
                onTryChatbot={() => setActiveTab('chat')} 
              />
              
              {/* 2. FEATURES GRID */}
              <Features />

              {/* 3. HOW IT WORKS TIMELINE */}
              <HowItWorks />

              {/* 4. PREVIEW COMPANION SECTION (Inline trigger) */}
              <section className="py-20 px-4 md:px-8 max-w-4xl mx-auto text-center border-t border-slate-200 dark:border-slate-900">
                <div className="glass-card p-10 md:p-12 rounded-[36px] border border-teal-500/20 relative overflow-hidden group">
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/5 rounded-full bg-blob -z-10" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/5 rounded-full bg-blob -z-10" />

                  <Heart size={44} className="mx-auto text-emerald-500 fill-emerald-500/10 mb-6 animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gradient-cyan-purple mb-4">
                    Ready to map your wellness ecosystem?
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                    Access real-time anxiety check-ins, wind-down sleep engines, and clinical support pipelines.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setActiveTab('chat')}
                      className="px-8 py-3.5 rounded-xl font-bold bg-gradient-to-r from-teal-600 to-indigo-600 text-white shadow-lg shadow-teal-500/10"
                    >
                      Initialize Chatbot
                    </button>
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className="px-8 py-3.5 rounded-xl font-bold glass-card text-slate-800 dark:text-white border border-slate-300 dark:border-slate-800"
                    >
                      View Realtime Dashboard
                    </button>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-24"
            >
              {/* Premium Dashboard Module */}
              <Dashboard />
            </motion.div>
          )}

          {activeTab === 'chat' && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="pt-24"
            >
              {/* Premium Chatbot Module */}
              <AIChatbot />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

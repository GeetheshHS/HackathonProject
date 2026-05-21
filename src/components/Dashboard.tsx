'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Moon, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Sparkles,
  Users,
  Plus,
  Trash2
} from 'lucide-react';

export default function Dashboard() {
  // Interactive Wellness Actions State
  const [actions, setActions] = useState([
    { id: 1, text: 'Log 8h Deep Sleep', points: 15, checked: true, isCustom: false },
    { id: 2, text: 'Complete 10m Boxed Breathing', points: 10, checked: false, isCustom: false },
    { id: 3, text: 'Drink 3L Purified Water', points: 10, checked: true, isCustom: false },
    { id: 4, text: 'Maintain Light Cardio (30m)', points: 15, checked: false, isCustom: false },
    { id: 5, text: 'Digital Sunset (Screens off by 9 PM)', points: 10, checked: false, isCustom: false },
  ]);

  // States for adding custom stack items
  const [newActionText, setNewActionText] = useState('');
  const [newActionPoints, setNewActionPoints] = useState(10);

  // Base wellness score is 40. Completed actions add up to a max of 100.
  const [wellnessScore, setWellnessScore] = useState(65);

  useEffect(() => {
    const baseScore = 40;
    const addedScore = actions.reduce((sum, item) => sum + (item.checked ? item.points : 0), 0);
    // Cap overall wellness score at 100
    setWellnessScore(Math.min(100, baseScore + addedScore));
  }, [actions]);

  const toggleAction = (id: number) => {
    setActions(actions.map(act => act.id === id ? { ...act, checked: !act.checked } : act));
  };

  const addCustomAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newActionText.trim()) return;
    const newAction = {
      id: Date.now(),
      text: newActionText.trim(),
      points: Number(newActionPoints) || 10,
      checked: false,
      isCustom: true
    };
    setActions([...actions, newAction]);
    setNewActionText('');
  };

  const deleteAction = (id: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggling checking state when deleting
    setActions(actions.filter(act => act.id !== id));
  };

  // Stats Data
  const stats = [
    { label: "Active Companions", count: "48,290", change: "+12% this week" },
    { label: "Stress Assessments", count: "1.2 Million", change: "98.4% precision" },
    { label: "Breathing Minutes", count: "420,000+", change: "100% stress drop" }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Dr. Clara Mercer",
      role: "Clinical Psychologist",
      quote: "EmotiCare AI bridges the gap between biometric tracking and actionable cognitive reframing. It is a breakthrough in emotional companion tech.",
      avatarBg: "bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]"
    },
    {
      name: "Marcus Vance",
      role: "Software Architect",
      quote: "Managing high-stress release cycles used to burn me out. Tracking my HRV and executing the custom breathing suggestions literally saved my health.",
      avatarBg: "bg-[var(--accent-purple)]/20 text-[var(--accent-purple)]"
    }
  ];

  // Radial Gauge Calculations
  const radius = 60;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (wellnessScore / 100) * circumference;

  return (
    <section id="dashboard" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-[var(--accent-cyan)] mb-3">Futuristic Interface</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
          Biometric Wellness Dashboard
        </p>
        <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* PANEL 1: INTERACTIVE WELLNESS SCORE CARD */}
        <div className="glass-card p-8 rounded-3xl border border-[var(--border-glass)] flex flex-col items-center justify-center text-center relative overflow-hidden group">
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/25 text-[var(--accent-cyan)] text-[10px] uppercase font-bold tracking-widest">
            <Sparkles size={10} className="animate-pulse" />
            <span>AI Realtime Score</span>
          </div>

          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Wellness Rating</h3>

          {/* Glowing Radial SVG Circle with embedded luxury filters */}
          <div className="relative w-36 h-36 flex items-center justify-center mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <defs>
                <linearGradient id="wellnessRadialGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-cyan)" />
                  <stop offset="100%" stopColor="var(--accent-purple)" />
                </linearGradient>
                <filter id="wellnessRadialGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Background Track */}
              <circle
                cx="72"
                cy="72"
                r={radius}
                className="stroke-slate-200/40 dark:stroke-slate-800/40 fill-none"
                strokeWidth={strokeWidth}
              />
              {/* Active Animated Gauge */}
              <motion.circle
                cx="72"
                cy="72"
                r={radius}
                stroke="url(#wellnessRadialGradient)"
                filter="url(#wellnessRadialGlow)"
                className="fill-none"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-[var(--text-primary)]">{wellnessScore}</span>
              <span className="text-[10px] uppercase tracking-widest text-[var(--accent-cyan)] font-extrabold">Scale</span>
            </div>
          </div>

          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
            {wellnessScore >= 80 
              ? "Excellent! Your autonomic nervous system is highly resilient today. Keep stacks active."
              : "Moderate strain. Activating box breathing or improving sleep will boost score +20 points."}
          </p>

          <div className="h-0.5 w-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full opacity-35" />
        </div>

        {/* PANEL 2: INTERACTIVE WELLNESS CHECKS */}
        <div className="glass-card p-8 rounded-3xl border border-[var(--border-glass)] lg:col-span-2">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-[var(--accent-cyan)]" size={20} />
            <span>Interactive Lifestyle Stacks</span>
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mb-6">
            Complete daily wellness actions to dynamically train the EmotiCare companion and optimize your biometric curves.
          </p>

          <div className="space-y-4">
            {actions.map((act) => (
              <motion.div
                key={act.id}
                onClick={() => toggleAction(act.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer select-none transition-all duration-300 ${
                  act.checked 
                    ? 'bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)]/35 text-[var(--text-primary)] shadow-sm' 
                    : 'bg-[var(--bg-tertiary)] border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--accent-cyan)]/25'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                    act.checked 
                      ? 'bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-purple)] border-transparent text-white' 
                      : 'border-slate-350 dark:border-slate-700'
                  }`}>
                    {act.checked && <CheckCircle2 size={12} className="stroke-[3]" />}
                  </div>
                  <span className="text-sm font-semibold">{act.text}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-md transition-colors ${
                    act.checked ? 'bg-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]' : 'bg-[var(--bg-primary)] text-[var(--text-secondary)]'
                  }`}>
                    +{act.points} Score
                  </span>
                  {act.isCustom && (
                    <button
                      onClick={(e) => deleteAction(act.id, e)}
                      className="p-1.5 rounded-lg text-[var(--text-secondary)] hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                      title="Remove Stack"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add Custom Action Form */}
          <form onSubmit={addCustomAction} className="mt-8 pt-6 border-t border-[var(--border-glass)]">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[var(--text-secondary)] mb-4">
              Add Custom Lifestyle Extra
            </h4>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={newActionText}
                onChange={(e) => setNewActionText(e.target.value)}
                placeholder="e.g., Morning Yoga, Gratitude Journaling..."
                className="flex-1 glass-input px-4 py-3 rounded-xl text-sm"
              />
              <div className="flex gap-2">
                <select
                  value={newActionPoints}
                  onChange={(e) => setNewActionPoints(Number(e.target.value))}
                  className="glass-input px-3 py-3 rounded-xl text-sm font-semibold select-none cursor-pointer"
                >
                  <option value="5" className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">+5 Pts</option>
                  <option value="10" className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">+10 Pts</option>
                  <option value="15" className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">+15 Pts</option>
                  <option value="20" className="bg-[var(--bg-secondary)] text-[var(--text-primary)]">+20 Pts</option>
                </select>
                <button
                  type="submit"
                  disabled={!newActionText.trim()}
                  className="px-5 py-3 rounded-xl font-bold bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] hover:from-cyan-400 hover:to-indigo-500 text-white flex items-center gap-1.5 shadow-lg shadow-[var(--accent-cyan)]/10 hover:shadow-[var(--accent-cyan)]/20 disabled:opacity-40 disabled:shadow-none transition-all duration-300 shrink-0 text-sm"
                >
                  <Plus size={16} />
                  <span>Add Stack</span>
                </button>
              </div>
            </div>
          </form>
        </div>

      </div>

      {/* BIOMETRIC CARDS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        {/* Stress & Burnout Panel */}
        <div className="glass-card p-6 rounded-3xl border border-[var(--border-glass)] relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">Stress Index</h4>
            <Activity className="text-[var(--accent-purple)] animate-pulse" size={20} />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-extrabold text-[var(--text-primary)]">18%</span>
            <span className="text-xs text-[var(--accent-emerald)] font-bold flex items-center gap-1">
              <TrendingUp size={12} className="rotate-180" /> Low Risk
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-6">
            Burnout metric parsed from HRV trends and text expression. Autonomic activity is calm.
          </p>
          <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] h-full rounded-full w-[18%]" />
          </div>
        </div>

        {/* Sleep Restorative Index */}
        <div className="glass-card p-6 rounded-3xl border border-[var(--border-glass)] relative overflow-hidden group">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">Restorative Sleep</h4>
            <Moon className="text-[var(--accent-pink)]" size={20} />
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-extrabold text-[var(--text-primary)]">88%</span>
            <span className="text-xs text-[var(--accent-emerald)] font-bold flex items-center gap-1">
              <TrendingUp size={12} /> Excellent
            </span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mb-6">
            Deep sleep cycles (2.2h) and REM phases (1.8h) verified by circadian matching algorithm.
          </p>
          <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-purple)] h-full rounded-full w-[88%]" />
          </div>
        </div>

        {/* Suggestion Feed Panel */}
        <div className="glass-card p-6 rounded-3xl border border-[var(--border-glass)] relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[var(--text-secondary)]">Dynamic AI Suggestion</h4>
            <AlertCircle className="text-[var(--accent-cyan)]" size={20} />
          </div>
          <div className="p-3.5 rounded-2xl bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/25 text-[var(--text-primary)] flex gap-3 items-start mb-4">
            <Clock size={16} className="text-[var(--accent-cyan)] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-extrabold">Melatonin Lock</span>: Sunset triggers in 1 hour. Lower indoor blue light exposure.
            </div>
          </div>
          <p className="text-[10px] text-[var(--text-secondary)] leading-normal">
            Updated based on your checked habits and target circadian sleep score of 8h.
          </p>
        </div>

      </div>

      {/* STAT COUNTERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="p-6 rounded-3xl bg-[var(--bg-tertiary)] border border-[var(--border-glass)] text-center hover:border-[var(--accent-cyan)]/30 transition-all duration-300"
          >
            <p className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-extrabold mb-2">{stat.label}</p>
            <p className="text-3xl font-extrabold text-[var(--text-primary)] mb-1">{stat.count}</p>
            <p className="text-[10px] text-[var(--accent-cyan)] uppercase font-extrabold tracking-wider">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* TESTIMONIAL PANEL */}
      <div className="border-t border-[var(--border-glass)] pt-16">
        <div className="text-center mb-12">
          <h4 className="text-xs uppercase tracking-widest text-[var(--accent-purple)] font-extrabold mb-2 flex items-center justify-center gap-1.5">
            <Users size={14} /> Clinical Review
          </h4>
          <p className="text-2xl font-extrabold text-[var(--text-primary)]">Validation From Health Pioneers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-[var(--border-glass)] flex flex-col justify-between relative">
              <p className="text-[var(--text-secondary)] text-sm italic leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-xs ${t.avatarBg}`}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-[var(--text-primary)]">{t.name}</h5>
                  <p className="text-xs text-[var(--text-secondary)]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

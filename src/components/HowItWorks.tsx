'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Cpu, LineChart, CheckSquare } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    number: "01",
    title: "Share Feelings or Symptoms",
    description: "Input how you are feeling, log your sleep duration, or describe stress spikes via our secure emotion-aware chat console.",
    icon: <FileText size={20} className="text-[var(--accent-cyan)]" />,
    color: "from-[var(--accent-cyan)] to-blue-500"
  },
  {
    number: "02",
    title: "AI Pattern Diagnosis",
    description: "EmotiCare's deep learning core parses semantic vocal tracks, stressors, and emotional anomalies to diagnose real-time cognitive strains.",
    icon: <Cpu size={20} className="text-[var(--accent-purple)]" />,
    color: "from-[var(--accent-purple)] to-[var(--accent-pink)]"
  },
  {
    number: "03",
    title: "Generate Wellness Insights",
    description: "The system models dynamic wellness curves, calculates burnout indices, and maps custom stress resilience statistics.",
    icon: <LineChart size={20} className="text-[var(--accent-pink)]" />,
    color: "from-[var(--accent-pink)] to-rose-500"
  },
  {
    number: "04",
    title: "Execute Personalized Suggestion Protocol",
    description: "Receive actionable lifestyle plans, custom wind-down routines, breathing exercise sequences, and micro-habit stacks to restore vitality.",
    icon: <CheckSquare size={20} className="text-[var(--accent-emerald)]" />,
    color: "from-[var(--accent-emerald)] to-[var(--accent-cyan)]"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative">
      
      {/* Background visual accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[var(--accent-purple)]/5 rounded-full bg-blob -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[var(--accent-cyan)]/5 rounded-full bg-blob -z-10" />

      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-[var(--accent-purple)] mb-3">Diagnostic Pipeline</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
          How EmotiCare AI Works
        </p>
        <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] rounded-full mx-auto" />
      </div>

      {/* Vertical Timeline container */}
      <div className="relative border-l border-[var(--border-glass)] md:ml-32">
        {TIMELINE_STEPS.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="mb-16 last:mb-0 pl-8 md:pl-12 relative group"
          >
            {/* Step Number Dot indicator */}
            <div className={`absolute -left-6 top-1.5 w-12 h-12 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-glass)] flex items-center justify-center z-10 group-hover:border-[var(--accent-cyan)]/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300`}>
              <span className="text-sm font-extrabold text-gradient-cyan-purple">{step.number}</span>
            </div>

            {/* Floating Visual Connector Line */}
            <div className="absolute -left-[1px] top-6 bottom-0 w-[1px] bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-purple)] to-transparent scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-700 -z-10" />

            {/* Glassmorphic step card */}
            <div className="glass-card p-6 md:p-8 rounded-3xl border border-[var(--border-glass)] hover:border-[var(--accent-cyan)]/25">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-tertiary)] flex items-center justify-center border border-[var(--border-glass)]">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Flame, Moon, Compass, Sparkles, BrainCircuit } from 'lucide-react';

const FEATURES_DATA = [
  {
    icon: <HeartHandshake size={24} />,
    title: "Emotion Detection",
    description: "Real-time analysis of vocal tones and written expression to map your emotional spectrum and deliver immediate support.",
    color: "from-[var(--accent-cyan)] to-blue-500",
    shadow: "shadow-[var(--accent-cyan)]/5"
  },
  {
    icon: <Flame size={24} />,
    title: "Stress Monitoring",
    description: "Evaluates biometric indicators, cognitive strain, and activity spikes to prevent chronic burnout and overload.",
    color: "from-[var(--accent-purple)] to-[var(--accent-pink)]",
    shadow: "shadow-[var(--accent-purple)]/5"
  },
  {
    icon: <Moon size={24} />,
    title: "Sleep Analysis",
    description: "Tracks REM, Deep, and Light sleep stages paired with custom wind-down programs to lock in your circadian rhythm.",
    color: "from-[var(--accent-pink)] to-rose-500",
    shadow: "shadow-[var(--accent-pink)]/5"
  },
  {
    icon: <Compass size={24} />,
    title: "Wellness Tracking",
    description: "Aggregates daily activities, exercises, and hydration goals to build a reliable physiological baseline.",
    color: "from-[var(--accent-emerald)] to-[var(--accent-cyan)]",
    shadow: "shadow-[var(--accent-emerald)]/5"
  },
  {
    icon: <Sparkles size={24} />,
    title: "AI Recommendations",
    description: "Actionable micro-habits, exercise tweaks, and mindfulness prompts generated strictly for your wellness indicators.",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/5"
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "Mental Health Insights",
    description: "Deep analytics that flag early signs of anxiety, depression, and stress patterns, empowering proactive mental care.",
    color: "from-violet-500 to-indigo-600",
    shadow: "shadow-violet-500/5"
  }
];

export default function Features() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="features-section" className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--accent-cyan)]/5 to-[var(--accent-purple)]/5 rounded-full bg-blob -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-[var(--accent-cyan)] mb-3">Core Capabilities</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
          Futuristic Health Engineering
        </p>
        <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full mx-auto mb-6" />
        <p className="text-[var(--text-secondary)] text-base sm:text-lg">
          EmotiCare AI leverages bleeding-edge analytical models to track and safeguard your physiological and psychological state.
        </p>
      </div>

      {/* Grid containing the 6 gorgeous cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {FEATURES_DATA.map((feat, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`glass-card p-8 rounded-3xl border border-[var(--border-glass)] flex flex-col justify-between group shadow-xl ${feat.shadow}`}
          >
            <div>
              {/* Glowing Icon Wrapper */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feat.color} text-white flex items-center justify-center mb-8 shadow-md shadow-slate-950/20 transform group-hover:rotate-6 transition-transform duration-300`}>
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--accent-cyan)] transition-colors duration-300">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                {feat.description}
              </p>
            </div>

            {/* Glowing Accent strip */}
            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${feat.color} rounded-full transition-all duration-500`} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

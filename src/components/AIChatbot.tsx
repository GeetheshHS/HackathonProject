'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Brain, ShieldAlert, User, RefreshCw } from 'lucide-react';
import { validatePrompt, REFUSAL_MESSAGE } from '@/utils/aiFilter';

// Mood Primers to help user trigger relevant prompts
const MOODS = [
  { emoji: "😰", label: "Anxious", prompt: "I am feeling extremely anxious and overwhelmed about my exams. What can I do?" },
  { emoji: "😫", label: "Stressed", prompt: "I am having massive stress and burnout at my corporate job. Help me." },
  { emoji: "🥱", label: "Exhausted", prompt: "My sleep habits are horrible. How do I optimize my REM sleep and fall asleep faster?" },
  { emoji: "😔", label: "Low", prompt: "I am feeling down and lonely today. Give me emotional support." },
  { emoji: "😌", label: "Calm", prompt: "What are some healthy habits to maintain my mental wellness and meditate daily?" }
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
  isFiltered?: boolean;
}

export default function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I am your EmotiCare Healthcare Companion. I specialize in analyzing your stress, emotional habits, physical routine, and sleep health.\n\nSelect a mood below or type how you are feeling, and let's explore custom wellness insights together."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeMood, setActiveMood] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    const prompt = textToSend.trim();
    if (!prompt) return;

    setInput('');
    setActiveMood(null);

    // 1. Add user message
    const userMsg: Message = { role: 'user', content: prompt };
    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    // 2. Perform frontend keyword validation first
    const isTopicValid = validatePrompt(prompt);

    if (!isTopicValid) {
      // Unrelated question: Trigger custom offline stream response instantly without hitting API
      setTimeout(() => {
        setIsLoading(false);
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: REFUSAL_MESSAGE,
          isFiltered: true
        }]);
      }, 1000);
      return;
    }

    // 3. Trigger API Call to Route
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({ role: m.role, content: m.content }))
        })
      });

      if (!response.ok) throw new Error("Network Response error");

      const data = await response.json();
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.content,
        isFiltered: data.isFiltered
      }]);

    } catch (err) {
      console.error("Chat error:", err);
      // Fallback message
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I apologize, my neural networks encountered a slight connection delay. However, please remember to keep hydrated, monitor your breathing, and check back shortly!"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoodSelect = (mood: typeof MOODS[0]) => {
    setActiveMood(mood.label);
    setInput(mood.prompt);
  };

  const resetChat = () => {
    setMessages([
      {
        role: 'assistant',
        content: "Hello! I am your EmotiCare Healthcare Companion. I specialize in analyzing your stress, emotional habits, physical routine, and sleep health.\n\nSelect a mood below or type how you are feeling, and let's explore custom wellness insights together."
      }
    ]);
  };

  return (
    <section id="ai-companion" className="py-24 px-4 md:px-8 max-w-5xl mx-auto relative">
      
      {/* Visual glowing overlay behind the chatbot container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-[4/3] bg-gradient-to-tr from-[var(--accent-cyan)]/5 via-[var(--accent-purple)]/5 to-[var(--accent-pink)]/5 rounded-[50px] blur-3xl -z-10" />

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-xs uppercase font-extrabold tracking-widest text-[var(--accent-cyan)] mb-3">Emotion Intellect</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
          Chat with EmotiCare AI
        </p>
        <div className="h-1.5 w-16 bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] rounded-full mx-auto mb-4" />
        <p className="text-xs text-[var(--text-secondary)]">
          Secure <span className="text-[var(--accent-cyan)] font-extrabold">Groq Llama-3.3-70b-versatile</span> Engine Active. Real-time cognitive tracking enabled.
        </p>
      </div>

      {/* MAIN PREMIUM CHAT CONSOLE */}
      <div className="glass-card rounded-[32px] border border-[var(--border-glass)] shadow-2xl flex flex-col h-[650px] overflow-hidden">
        
        {/* Chat Console Header */}
        <div className="px-6 py-4 border-b border-[var(--border-glass)] bg-[var(--bg-tertiary)]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Pulsing indicator logo */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[var(--accent-cyan)] to-[var(--accent-purple)] flex items-center justify-center pulse-indicator text-white">
              <Brain size={18} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-[var(--text-primary)] flex items-center gap-1.5">
                EmotiCare Intelligence 
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] uppercase font-bold tracking-widest">v1.2</span>
              </h3>
              <p className="text-[10px] text-emerald-500 dark:text-emerald-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active Biometric Receiver
              </p>
            </div>
          </div>
          
          <button 
            onClick={resetChat}
            className="w-8 h-8 rounded-lg bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-glass)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
            title="Reset Conversation"
          >
            <RefreshCw size={14} />
          </button>
        </div>

        {/* Dynamic Message Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg, index) => {
              const isUser = msg.role === 'user';
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                >
                  {/* Avatar Icon */}
                  <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center border font-bold text-xs ${
                    isUser 
                      ? 'bg-[var(--accent-purple)]/10 border-[var(--accent-purple)]/20 text-[var(--accent-purple)]' 
                      : 'bg-[var(--accent-cyan)]/10 border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]'
                  }`}>
                    {isUser ? <User size={14} /> : <Brain size={14} />}
                  </div>

                  {/* Message Bubble Body */}
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed border ${
                    isUser 
                      ? 'bg-gradient-to-br from-[var(--accent-purple)] to-[var(--accent-pink)] text-white rounded-tr-none border-[var(--accent-purple)]/25 shadow-lg shadow-[var(--accent-purple)]/15' 
                      : msg.isFiltered
                        ? 'bg-rose-500/10 border-rose-500/30 text-rose-500 dark:text-rose-300 rounded-tl-none font-semibold'
                        : 'glass-card border-[var(--border-glass)] text-[var(--text-primary)] rounded-tl-none'
                  }`}>
                    {/* Filter validation tag if blocked */}
                    {msg.isFiltered && (
                      <div className="flex items-center gap-1.5 mb-2 text-rose-500 dark:text-rose-400 text-[10px] uppercase font-extrabold tracking-wider">
                        <ShieldAlert size={12} />
                        <span>Topic Boundary Filtered</span>
                      </div>
                    )}
                    
                    {/* Rendering linebreaks correctly */}
                    <div className="whitespace-pre-line">
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Glowing Animated Typing Indicator */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3 mr-auto items-center"
            >
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)] flex items-center justify-center font-bold text-xs">
                <Brain size={14} className="animate-pulse" />
              </div>
              <div className="glass-card py-3 px-5 rounded-2xl rounded-tl-none border border-[var(--border-glass)] flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[var(--accent-cyan)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-[var(--accent-cyan)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-[var(--accent-cyan)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Interactive Mood Selector Bar */}
        <div className="px-6 py-3 border-t border-[var(--border-glass)] bg-[var(--bg-tertiary)]/20">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--text-secondary)] mb-2">Prime AI with your Emotional baseline:</p>
          <div className="flex flex-wrap gap-2">
            {MOODS.map((m, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleMoodSelect(m)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
                  activeMood === m.label
                    ? 'bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] border-transparent text-white shadow-md shadow-[var(--accent-cyan)]/10 font-bold'
                    : 'bg-[var(--bg-tertiary)] border-[var(--border-glass)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/20'
                }`}
              >
                <span>{m.emoji}</span>
                <span>{m.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Input Console Area */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(input);
          }}
          className="p-4 border-t border-[var(--border-glass)] flex gap-3 bg-[var(--bg-tertiary)]/50"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about stress, sleep quality, anxiety, or healthy routines..."
              className="w-full glass-input px-5 py-4 pr-12 rounded-2xl text-sm transition-all shadow-inner focus:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
            />
            {/* Mini Sparkle logo */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--accent-cyan)]/35 select-none">
              <Sparkles size={16} />
            </div>
          </div>

          <button
            type="submit"
            id="chat-send-btn"
            disabled={!input.trim() || isLoading}
            className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-purple)] hover:from-cyan-400 hover:to-indigo-500 text-white flex items-center justify-center shadow-lg shadow-[var(--accent-cyan)]/5 hover:shadow-[var(--accent-cyan)]/15 transform active:scale-95 disabled:opacity-40 disabled:scale-100 disabled:shadow-none transition-all duration-300 shrink-0"
          >
            <Send size={18} />
          </button>
        </form>

      </div>
    </section>
  );
}

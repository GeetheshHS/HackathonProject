import React from 'react';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';

export const metadata = {
  title: 'EmotiCare AI | Emotion-Aware AI Healthcare Companion',
  description: 'EmotiCare AI is a futuristic, emotion-aware AI healthcare companion. Analyze emotions, stress levels, voice/text patterns, and sleep habits to detect anxiety and burnout while receiving personalized suggestions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts integration */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen selection:bg-cyan-500 selection:text-slate-900 transition-colors duration-300">
        {children}
      </body>
    </ThemeProvider>
  );
}

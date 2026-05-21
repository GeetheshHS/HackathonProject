# 🩺 EmotiCare AI — Emotion-Aware AI Healthcare Companion

An award-winning, premium, emotion-aware digital healthcare companion platform designed to track stress, analyze sleep architecture, evaluate vocal/text expressiveness, and preempt physical & emotional burnout.

Built with a high-fidelity **"Aurora Ethereal Glassmorphism"** theme inspired by premium, modern Apple, Linear, and OpenAI web interfaces.

---

## 🚀 Key Platform Capabilities

### 1. 🎨 Aurora Ethereal Design System
* **Drifting Mesh Blobs**: Moving, organic radial gradient spheres float gracefully in the background, creating a live, breathing biophilic feel.
* **Double-Layer Frosted Glass**: Frosted cards (`.glass-card`) feature crisp inner reflection rings (`inset 0 1px 1px 0 rgba(255,255,255,0.06)`) and premium blur filters.
* **Micro-interactions**: Hovering over stats cards triggers distinct ambient light blooms (Heart Rate glows **Cyan**, Cognitive Load glows **Indigo**, and Stress Risk glows **Emerald**).
* **Sliding Navigation**: Tab button changes are guided by layout-animated spring underlines that glide fluidly between views.

### 2. 📊 Live Biometric Wellness Dashboard
* **Linear Gradient Radial Gauge**: Redesigned SVG score indicator that utilizes a linear color-gradient path and a soft glowing filter to render your active stress resilience level.
* **Interactive Lifestyle Stacks**: Complete custom lifestyle habits. You can add your own extras (e.g. *"Morning Yoga"*, selected as **+15 Pts**) and delete them seamlessly with a dedicated trash bin icon.
* **Circadian Sleep Index**: Visual indicators tracking Deep, REM, and Light sleep stages matched against target goals.

### 3. 💬 Emotion-Aware AI Companion
* **Active Groq Llama-3.3 Integration**: Live, streaming chat responses powered by the high-speed Llama-3.3-70b-versatile engine.
* **Topic Boundary Guardrails**: Strict client & server-side regex validation checks. Non-healthcare/non-wellness prompts (e.g. coding requests, game codes, lyrics) are gracefully intercepted and blocked BEFORE hitting the API to keep resources safe and aligned.
* **Mood Primers**: Select a baseline emotional category (Anxious, Stressed, Low, Calm) to automatically prime the chatbot with structured context.

---

## 🛠️ Technical Architecture & Stack
* **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) & custom HSL-controlled CSS variables
* **Animations**: [Framer Motion](https://www.framer.com/motion/) (Spring-physics transitions & Shared Layouts)
* **Icons**: [Lucide React](https://lucide.dev/)
* **AI Core**: [Groq Cloud API Endpoint](https://console.groq.com/) (Llama-3.3-70b-versatile)

---

## 🔒 Security-First Infrastructure
* **Zero Secret Leakage**: Your active Groq API Key is securely held inside `.env.local` which is omitted from version control using a custom `.gitignore` setup.
* **Local Parsing**: Safe parsing of body structures, route headers, and error catches.

---

## 💻 Local Quickstart Guide

### 1. Prerequisites
Ensure you have [Node.js (v18.x or later)](https://nodejs.org/) installed.

### 2. Clone & Install Dependencies
Open your command terminal and execute:
```bash
# Clone the repository
git clone <your-repository-url>
cd <project-folder-name>

# Install the packages
npm install
```

### 3. Configure Local Environment Variables
Create a file named `.env.local` in your root directory and paste your API key:
```env
GROQ_API_KEY=gsk_YOUR_GROQ_API_KEY_HERE
```

### 4. Boot Up the Development Server
Run the local dev command:
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view your platform!

---

## 📄 License & Disclaimer
EmotiCare AI is developed purely for digital health hackathons and wellness logging. It is **not** an alternative to professional clinical medical diagnosis, psychotherapy, or pharmaceutical prescriptions. Always seek the advice of clinical professionals regarding medical conditions.

import { NextRequest, NextResponse } from 'next/server';
import { validatePrompt, REFUSAL_MESSAGE } from '@/utils/aiFilter';

// API KEY LOADED SECURELY FROM ENVIRONMENT VARIABLES (Keeps key safe on GitHub)
const API_KEY = process.env.GROQ_API_KEY || "PASTE_YOUR_API_KEY_HERE";

// System prompt restriction required
const SYSTEM_PROMPT = `You are an emotion-aware AI healthcare assistant. Only answer healthcare, wellness, emotional health, stress, sleep, and mental wellness questions. Refuse anything unrelated. Keep your responses highly supportive, actionable, structured, and emotionally intelligent.`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const lastUserMessage = messages[messages.length - 1];
    const userPrompt = lastUserMessage.content || "";

    // 1. Perform our robust keyword/context filter validation
    const isValid = validatePrompt(userPrompt);

    if (!isValid) {
      // Unrelated topic: Reject politely with user's exact required message
      return NextResponse.json({
        role: "assistant",
        content: REFUSAL_MESSAGE,
        isFiltered: true
      });
    }

    // 2. If valid, check if they have configured a real API key
    if (API_KEY && API_KEY.trim() !== "" && !API_KEY.startsWith("PASTE_YOUR")) {
      // Connect to a real AI model. Here we implement Groq API integration
      try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...messages.map((m: any) => ({ role: m.role, content: m.content }))
            ],
            temperature: 0.7,
            max_tokens: 1024
          })
        });

        const data = await response.json();
        const aiText = data.choices?.[0]?.message?.content;

        if (aiText) {
          return NextResponse.json({
            role: "assistant",
            content: aiText
          });
        }
      } catch (err) {
        console.error("AI API Call failed, falling back to simulated engine...", err);
      }
    }

    // 3. Simulated Emotionally Intelligent AI responses (Fallback/Demo Mode)
    // We parse the query and generate custom-made answers tailored to the health topic to make the app feel incredibly realistic.
    const promptLower = userPrompt.toLowerCase();
    let responseText = "";

    if (promptLower.includes("stress") || promptLower.includes("burnout") || promptLower.includes("exhausted") || promptLower.includes("tired")) {
      responseText = `I hear how exhausted you are, and I want to validate that experiencing stress or burnout is incredibly taxing on both your mind and body. Let's take a gentle step back.

### 🧘 Quick Stress-Relief Protocol:
1. **Box Breathing (4-4-4-4)**: Inhale for 4 seconds, hold for 4, exhale for 4, and hold empty for 4. Repeat this 3 times to deactivate your fight-or-flight response.
2. **Cognitive Offloading**: Write down everything you need to do on a piece of paper, then cross out things that aren't critical *today*.
3. **Micro-Breaks**: Stand up, roll your shoulders back, and look at something 20 feet away for 20 seconds.

**Personalized Wellness Suggestion:** I notice you might be pushing through high cognitive strain. Would you like me to guide you through a 2-minute mindfulness breathing check-in right now?`;
    } else if (promptLower.includes("sleep") || promptLower.includes("insomnia") || promptLower.includes("nightmare")) {
      responseText = `Sleep is the foundational pillar of emotional resilience and physical restoration. If you are struggling to fall asleep or experiencing disruptive sleep, let's look at optimizing your sleep hygiene.

### 🌙 Optimal Wind-Down Protocol:
* **The 10-3-2-1-0 Rule**:
  * **10 hours before bed**: No more caffeine.
  * **3 hours before bed**: No more heavy food or alcohol.
  * **2 hours before bed**: No more active working or cognitive strain.
  * **1 hour before bed**: Turn off all screens (emits disruptive blue light).
  * **0**: The number of times you should hit snooze in the morning.
* **Environment Check**: Ensure your bedroom is pitch dark and kept at a cool temperature (~18°C or 65°F).

**Sleep Science Tip:** Your melatonin production is heavily regulated by light. Try getting 10 minutes of direct morning sunlight tomorrow to lock in your circadian rhythm. Shall we track your sleep scores in the dashboard?`;
    } else if (promptLower.includes("anxi") || promptLower.includes("panic") || promptLower.includes("fear")) {
      responseText = `Feeling anxious or panicky is an intense physical sensation. Remember that you are safe in this moment, and this feeling *will* pass. Let's redirect your nervous system's energy.

### ⚓ Grounding Exercise (The 5-4-3-2-1 Technique):
Take a slow, deep breath, look around your room, and identify:
* **5** things you can **see** (e.g., your desk, a window, a plant)
* **4** things you can **touch** (e.g., your clothes, the chair, the cool table)
* **3** things you can **hear** (e.g., humming AC, wind, distance traffic)
* **2** things you can **smell** (e.g., coffee, fresh air)
* **1** thing you can **taste** (e.g., mint, water)

This triggers the prefrontal cortex and guides you back into the present moment. I am here with you. Take all the time you need.`;
    } else if (promptLower.includes("depress") || promptLower.includes("sad") || promptLower.includes("lonely") || promptLower.includes("down")) {
      responseText = `I'm really sorry you're feeling this way, but I want to thank you for reaching out. Feelings of sadness, loneliness, or depression can feel like a heavy fog, but you don't have to navigate this alone.

### 💜 Compassionate Steps for Today:
1. **Release Judgment**: Accept that it is completely okay to not be okay today. Give yourself permission to rest.
2. **Behavioral Activation**: Choose one tiny, simple action. Just drinking a glass of water, stretching for 60 seconds, or opening a window for fresh air.
3. **Micro-Connection**: Send a text to a friend or family member, even just a simple emoji or asking how they are, to bridge the distance.

*If these feelings become overwhelming or persistent, please consider reaching out to a mental health professional or counselor who can provide dedicated, comprehensive support. You deserve care.*`;
    } else if (promptLower.includes("habit") || promptLower.includes("routine") || promptLower.includes("exercise") || promptLower.includes("diet")) {
      responseText = `Building sustainable, healthy habits is the secret to long-term wellness. Instead of drastic shifts, we focus on **habit stacking**—attaching a new habit to an existing routine.

### ⚡ Atomic Habits for Wellness:
* **Hydration Habit**: Place a glass of water on your bedside table every night, so you drink it immediately upon waking.
* **Movement Snack**: After you close your laptop for lunch, take a 5-minute brisk walk.
* **Mindfulness Trigger**: While waiting for your coffee or tea to brew, close your eyes and take 5 deep belly breaths.

Which area would you like to prioritize first: your morning routine, physical activity level, or night-time wind-down habits?`;
    } else {
      responseText = `Thank you for sharing that with me. As your emotion-aware healthcare companion, I am dedicated to helping you optimize your lifestyle, habits, and mental wellness.

To help me tailor my suggestions, could you tell me a little more about your current **stress level**, **sleep patterns**, or what **daily activities** you feel could use a healthy boost?

In the meantime, taking a slow, deep breath is always a wonderful starting point for grounding your mind. I am ready when you are!`;
    }

    // Return the custom simulated response
    return NextResponse.json({
      role: "assistant",
      content: responseText
    });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

/**
 * EmotiCare AI - Emotion-Aware Healthcare Filtering Logic
 * 
 * Verifies if a user prompt is strictly healthcare, wellness, or emotional health related.
 */

// Permitted topics: keyword list & semantic roots
const ALLOWED_KEYWORDS = [
  'stress', 'anxiety', 'anxious', 'emotion', 'depress', 'sad', 'lonely', 'happy', 'feeling', 'mood',
  'burnout', 'sleep', 'insomnia', 'nightmare', 'dream', 'wellness', 'health', 'habit', 'meditat', 
  'breath', 'calm', 'mindful', 'physical', 'exercise', 'diet', 'nutrition', 'workout', 'tired', 
  'exhausted', 'fatigue', 'wellness', 'symptom', 'therapy', 'counsel', 'mental', 'heart', 'pulse', 
  'body', 'doctor', 'medical', 'recovery', 'relax', 'routine', 'yoga', 'panic', 'grief', 'fear',
  'frustrated', 'anger', 'mind', 'clinical', 'pill', 'prescrip', 'cycle', 'fit', 'nutrition', 'cardio'
];

// Blocked keywords/topics that must be immediately rejected
const BLOCKED_KEYWORDS = [
  'song lyrics', 'generate lyrics', 'write code', 'programming', 'python', 'javascript', 'html', 
  'css', 'hack', 'exploit', 'bypass', 'movie recommendation', 'film', 'netflix', 'joke', 'tell a joke',
  'funny story', 'riddle', 'game', 'play a game', 'weather forecast', 'stock price', 'crypto', 
  'blockchain', 'bitcoin', 'write an essay', 'do homework', 'math equation'
];

/**
 * Validates whether the given prompt is relevant to healthcare, wellness, and mental/emotional support.
 * @param prompt The user's input string
 * @returns boolean true if relevant, false if unrelated
 */
export function validatePrompt(prompt: string): boolean {
  if (!prompt || typeof prompt !== 'string') return false;
  
  const normalized = prompt.toLowerCase().trim();
  
  // 1. Check for immediate explicit blocks
  for (const block of BLOCKED_KEYWORDS) {
    if (normalized.includes(block)) {
      return false;
    }
  }

  // 2. Check if the prompt contains any of our allowed healthcare/emotional wellness keywords
  const hasAllowedKeyword = ALLOWED_KEYWORDS.some(keyword => {
    // Word boundary or substring matching to catch plurals / variations
    const regex = new RegExp(`\\b${keyword}|${keyword}\\b`, 'i');
    return regex.test(normalized);
  });

  // 3. Fallback semantic checks for general emotional statements (e.g., "I feel bad", "I am hurt")
  const feelingPhrases = [
    'feel', 'feeling', 'i\'m feeling', 'i am', 'struggling with', 'having a hard time', 
    'hurts', 'pain', 'broken', 'help me with my', 'how to stop'
  ];
  
  const hasFeelingContext = feelingPhrases.some(phrase => normalized.includes(phrase)) && 
    (normalized.split(' ').length < 15); // short statements about feelings are allowed

  return hasAllowedKeyword || hasFeelingContext;
}

/**
 * Standard system refusal message
 */
export const REFUSAL_MESSAGE = 
  "I’m designed specifically for emotional and healthcare wellness support. Please ask a health, stress, wellness, or emotion-related question.";

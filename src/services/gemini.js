import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

/**
 * Uses Gemini AI model to suggest a movie title based on mood prompt.
 * @param {string} userMoodPrompt - Natural language mood string.
 * @returns {Promise<string>} Single movie title.
 */
export const getMovieFromMood = async (userMoodPrompt) => {
  if (!ai) {
    console.warn("Gemini API key is not configured.");
    return "Inception";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Suggest ONE movie based on this user mood or context: "${userMoodPrompt}". Return ONLY the exact movie title as plain text. Do not include quotes, markdown formatting, or any extra text.`,
    });

    return response.text ? response.text.trim() : "Inception";
  } catch (error) {
    console.error("Gemini AI Processing Error:", error);
    return "Inception";
  }
};
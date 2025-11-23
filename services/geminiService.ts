import { GoogleGenAI, Type } from "@google/genai";
import { FoodRecommendation } from "../types";

const GEMINI_API_KEY = process.env.API_KEY || '';

export const getFoodRecommendation = async (tags: string[]): Promise<FoodRecommendation> => {
  if (!GEMINI_API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  const modelId = "gemini-2.5-flash";

  const now = new Date();
  const dateTimeStr = now.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
  const hours = now.getHours();
  
  // Infer "Situation"
  let timeContext = "Regular meal time";
  if (hours >= 6 && hours < 10) timeContext = "Breakfast";
  if (hours >= 11 && hours < 14) timeContext = "Lunch";
  if (hours >= 17 && hours < 21) timeContext = "Dinner";
  if (hours >= 21 || hours < 4) timeContext = "Late Night Snack (宵夜)";

  const tagsStr = tags.length > 0 ? tags.join(", ") : "Anything tasty";

  const prompt = `
    I am a user in Beijing, China. 
    Current Date/Time: ${dateTimeStr}.
    Context: It is ${timeContext}.
    My Preferences: [${tagsStr}].

    Please recommend ONE single specific dish or meal that is perfect for this exact moment in Beijing.
    Consider the weather typical for this date in Beijing, the time of day, and my preferences.
    If the preferences are contradictory, prioritize the 'Context' (time of day).
    
    The response must be in Simplified Chinese.
  `;

  const response = await ai.models.generateContent({
    model: modelId,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          dishName: { type: Type.STRING, description: "Name of the dish" },
          shortDescription: { type: Type.STRING, description: "A mouth-watering 1-sentence description" },
          reasoning: { type: Type.STRING, description: "Why this is perfect for right now in Beijing (weather/time/vibe)" },
          restaurantType: { type: Type.STRING, description: "Type of place to find it (e.g. 'Small Hutong Shop', 'Shopping Mall Chain')" },
          estimatedPrice: { type: Type.STRING, description: "Price range estimation (e.g. '¥20-40')" },
          calories: { type: Type.STRING, description: "Rough calorie estimation (e.g. 'High', 'Low', 'approx 500kcal')" },
          flavorProfile: {
            type: Type.OBJECT,
            properties: {
              spicy: { type: Type.NUMBER, description: "0-100" },
              salty: { type: Type.NUMBER, description: "0-100" },
              sweet: { type: Type.NUMBER, description: "0-100" },
              sour: { type: Type.NUMBER, description: "0-100" },
              greasy: { type: Type.NUMBER, description: "0-100" },
            },
            required: ["spicy", "salty", "sweet", "sour", "greasy"]
          }
        },
        required: ["dishName", "shortDescription", "reasoning", "restaurantType", "estimatedPrice", "calories", "flavorProfile"]
      }
    }
  });

  const text = response.text;
  if (!text) throw new Error("No response from AI");

  return JSON.parse(text) as FoodRecommendation;
};
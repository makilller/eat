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
  
  // Infer "Situation" with Beijing context
  let timeContext = "Regular meal time";
  let mealType = "正餐";
  if (hours >= 5 && hours < 10) { timeContext = "Early Morning / Breakfast"; mealType = "早餐"; }
  else if (hours >= 11 && hours < 14) { timeContext = "Lunch Peak"; mealType = "午餐"; }
  else if (hours >= 14 && hours < 17) { timeContext = "Afternoon Tea / Snack"; mealType = "下午茶"; }
  else if (hours >= 17 && hours < 21) { timeContext = "Dinner Time"; mealType = "晚餐"; }
  else if (hours >= 21 || hours < 5) { timeContext = "Late Night / Midnight Snack"; mealType = "宵夜"; }

  const tagsStr = tags.length > 0 ? tags.join(", ") : "Surprise me with something authentic";

  // Prompt engineered for Beijing locality
  const prompt = `
    Role: Expert Beijing Local Food Guide.
    Task: Recommend ONE single specific dish for a user in Beijing right now.
    
    Current Status in Beijing:
    - Date/Time: ${dateTimeStr}
    - Meal Context: ${mealType} (${timeContext})
    - User Preferences: [${tagsStr}]

    Instructions:
    1. Infer the likely weather/season in Beijing based on the date (${now.getMonth() + 1}月). e.g., If it's winter, suggest hot pot or warm stew; if summer, maybe cold noodles.
    2. If it's late night, suggest Gui Jie (Ghost Street) style or street food. If morning, suggest Jianbing or Douzhi.
    3. The recommendation MUST be a specific dish (e.g., "Beijing Roast Duck", "Zhajiangmian", "Lamb Spine Hot Pot"), not a generic category.
    4. Provide a reasoning that connects the *current moment* (time/season) to the food.

    Output JSON Format:
    {
      "dishName": "Name in Chinese",
      "shortDescription": "One sexy, appetizing sentence description",
      "reasoning": "Why this is the perfect choice for right now in Beijing",
      "restaurantType": "Best type of place to eat this (e.g. Hutong fly restaurant, Lao Zi Hao, Modern Mall)",
      "estimatedPrice": "Price range (RMB)",
      "calories": "Calorie estimate",
      "flavorProfile": { "spicy": 0-100, "salty": 0-100, "sweet": 0-100, "sour": 0-100, "greasy": 0-100 }
    }
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
          restaurantType: { type: Type.STRING, description: "Type of place to find it" },
          estimatedPrice: { type: Type.STRING, description: "Price range estimation" },
          calories: { type: Type.STRING, description: "Rough calorie estimation" },
          flavorProfile: {
            type: Type.OBJECT,
            properties: {
              spicy: { type: Type.NUMBER },
              salty: { type: Type.NUMBER },
              sweet: { type: Type.NUMBER },
              sour: { type: Type.NUMBER },
              greasy: { type: Type.NUMBER },
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
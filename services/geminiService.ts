import { GoogleGenAI, Type } from "@google/genai";
import { QueryResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeUserQuery = async (queryText: string): Promise<QueryResponse> => {
  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      You are an expert IT consultant for "TechNova IT Solutions". 
      Analyze the following user query and provide a structured JSON response.
      
      User Query: "${queryText}"
      
      Our Services: Website Development, Web & Mobile Applications, Branding, Digital Marketing.
      
      Determine which service best fits their needs, estimate the technical complexity (Low/Medium/High), and provide a brief professional analysis/recommendation.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING, description: "A brief, professional analysis of the user's needs." },
            recommendedService: { type: Type.STRING, description: "The most relevant service from TechNova." },
            estimatedComplexity: { type: Type.STRING, description: "Estimated complexity: Low, Medium, or High." }
          },
          required: ["analysis", "recommendedService", "estimatedComplexity"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as QueryResponse;
    }
    
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};

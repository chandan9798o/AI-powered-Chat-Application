import { GoogleGenerativeAI } from "@google/generative-ai";

// 📍 UPDATED: Model name set to gemini-3.1-flash-lite
const MODEL_NAME = "gemini-3.1-flash-lite"; 

// `.env` file se safe tarike se API key fetch ho rahi hai
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: MODEL_NAME });

async function runChat(prompt) {
    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        
        const text = response.text();
        console.log("Gemini Response:\n", text);
        
        return  response.text(); // Yeh text return karega taaki aap isse UI me display kar sakein
    } catch (error) {
        console.error("API Call Error Details:", error);
        throw error; // Error ko throw kiya taaki Context.jsx me catch ho sake
    }
}

// Browser console testing ke liye window object par attach kiya
window.runChat = runChat;

export default runChat;
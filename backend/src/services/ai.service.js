const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("API Key:", process.env.GOOGLE_GEMINI_KEY); // Debug line

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `You are an expert code reviewer. Your task is to analyze code, identify issues, suggest improvements, and provide a fixed version. 
                     Your response should include:
                     1. An explanation of bad practices or issues in the given code.
                     2. A fixed and improved version of the code.
                     3. Suggestions for making the code more efficient and cleaner.
                     Keep your response concise and to the point.`,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  return result.response.text();
}

module.exports = generateContent;

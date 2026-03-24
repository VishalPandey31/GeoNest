import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyBtST1kVYbTLLUoVxVeOuQ5MkjFZ2dPWdU");

async function run() {
  console.log("Fetching models...");
  try {
    const models = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent("Test");
    console.log("gemini-1.5-flash works");
  } catch (e) {
    console.error("1.5-flash error:", e.message);
  }
}

run();

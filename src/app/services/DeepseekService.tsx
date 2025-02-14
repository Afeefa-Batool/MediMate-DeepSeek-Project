// import axios from "axios";

// const API_KEY: string | undefined = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY;
// // const API_URL: string = "https://api.deepseek.com/v1/chat/completions";
// const API_URL: string = "https://api.deepseek.com/chat/completions";
// interface Message {
//   role: "user" | "assistant" | "system";
//   content: string;
// }

// interface DeepSeekResponse {
//   choices: { message: Message }[];
// }

// export const getDeepSeekResponse = async (userMessage: string): Promise<string> => {
//   if (!API_KEY) {
//     console.error("DeepSeek API Key is missing.");
//     return "API key is missing.";
//   }

//   try {
//     const response = await axios.post<DeepSeekResponse>(
//       API_URL,
//       {
//         model: "deepseek-model-name", // Replace with the actual model name
//         messages: [{ role: "user", content: userMessage }],
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data.choices[0]?.message.content || "No response from AI.";
//   } catch (error) {
//     console.error("DeepSeek API Error:", error);
//     return "Error fetching response.";
//   }
// };
import { OpenAI } from "openai";

const API_KEY: string | undefined = process.env.NEXT_PUBLIC_AIML_API_KEY;
// const BASE_URL: string = "https://api.aimlapi.com/v1";
const BASE_URL: string = "https://api.aimlapi.com/v1/chat/completions";
interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

export const getAIMLResponse = async (userMessage: string): Promise<string> => {
  if (!API_KEY) {
    console.error("AIML API Key is missing.");
    return "API key is missing.";
  }

  const api = new OpenAI({
    apiKey: API_KEY,
    baseURL: BASE_URL,
  });

  try {
    const response = await api.chat.completions.create({
      model: "mistralai/Mistral-7B-Instruct-v0.2",
      messages: [{ role: "user", content: userMessage }],
      temperature: 0.7,
      max_tokens: 256,
    });

    return response.choices[0]?.message.content || "No response from AI.";
  } catch (error) {
    console.error("AIML API Error:", error);
    return "Error fetching response.";
  }
};

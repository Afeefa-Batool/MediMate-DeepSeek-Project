// ==================== DeepseekService.ts ====================

const API_KEY: string | undefined = process.env.NEXT_PUBLIC_AIML_API_KEY;
const BASE_URL: string = "https://api.aimlapi.com/v1/chat/completions";

// interface Message {
//   role: "user" | "assistant" | "system";
//   content: string;
// }

export const getAIMLResponse = async (
  userMessage: string,
  onStream: (token: string) => void
): Promise<void> => {
  if (!API_KEY) {
    console.error("AIML API Key is missing.");
    onStream("API key is missing.");
    return;
  }

  const systemPrompt =
    "You are a Doctor AI. Respond concisely and provide general medical guidance, always advising a professional consult when necessary.";

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 256,
        stream: true,
      }),
    });

    if (!response.ok || !response.body) {
      const errorDetails = await response.text();
      console.error("API Error:", errorDetails);
      onStream("Error while processing request.");
      return;
    }

    let buffer = "";
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunk = decoder.decode(value, { stream: true });
      buffer += chunk;

      const lines = buffer.split("\n").filter((l) => l.trim() !== "");
      for (let i = 0; i < lines.length - 1; i++) {
        const line = lines[i];
        if (line.startsWith("data: ")) {
          const data = line.replace("data: ", "").trim();
          if (data === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(data);
            const token = parsed.choices[0]?.delta?.content || "";
            onStream(token);
          } catch (error) {
            console.error("Error parsing token:", error);
          }
        }
      }
      buffer = lines.length > 0 ? lines[lines.length - 1] : "";
    }
  } catch (error) {
    console.error("API Error:", error);
    onStream("Error while processing request.");
  }
};
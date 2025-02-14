// "use client";

// import { useState } from "react";
// import { getDeepSeekResponse } from "../services/DeepseekService";

// export default function DeepSeekChat() {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async () => {
//     if (!input.trim()) return;
//     setLoading(true);
//     const result = await getDeepSeekResponse(input);
//     setResponse(result);
//     setLoading(false);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-xl font-bold mb-4">DeepSeek AI Chat</h1>
//       <textarea
//         className="w-full p-2 border rounded-lg focus:outline-none"
//         rows={3}
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type your message..."
//       />
//       <button
//         className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
//         onClick={handleSubmit}
//         disabled={loading}
//       >
//         {loading ? "Thinking..." : "Send"}
//       </button>
//       {response && (
//         <p className="mt-4 p-3 bg-gray-100 rounded-lg">
//           <strong>DeepSeek:</strong> {response}
//         </p>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { getAIMLResponse } from "../services/DeepseekService"; // Updated import

export default function AIMLChat() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await getAIMLResponse(input); // Updated function call
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">AIML AI Chat</h1> {/* Updated title */}
      <textarea
        className="w-full p-2 border rounded-lg focus:outline-none"
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button
        className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 disabled:opacity-50"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Send"}
      </button>
      {response && (
        <p className="mt-4 p-3 bg-gray-100 rounded-lg">
          <strong>AIML:</strong> {response} {/* Updated AI label */}
        </p>
      )}
    </div>
  );
}

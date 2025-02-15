// "use client";

// import { useState, useEffect, useRef, KeyboardEvent } from "react";
// import { getAIMLResponse } from "../services/DeepseekService";

// interface ChatMessage {
//   role: "user" | "assistant";
//   content: string;
// }

// /**
//  * Returns the part of the new token that is not already present at the end of the existing content.
//  * This prevents overlapping (duplicated) text.
//  */
// const appendTokenWithoutOverlap = (existing: string, token: string): string => {
//   let overlapLength = 0;
//   const maxOverlap = Math.min(existing.length, token.length);
//   for (let i = 1; i <= maxOverlap; i++) {
//     if (existing.slice(-i) === token.slice(0, i)) {
//       overlapLength = i;
//     }
//   }
//   return token.slice(overlapLength);
// };

// export default function AIMLChat() {
//   const [input, setInput] = useState("");
//   const [conversation, setConversation] = useState<ChatMessage[]>([]);
//   const [showLoader, setShowLoader] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement | null>(null);
//   const lastTokenRef = useRef<string>("");

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "end",
//       inline: "nearest",
//     });
//   }, [conversation]);

//   // Remove duplicate words that are concatenated (e.g., "hellohello" becomes "hello")
//   const removeConcatenatedDuplicates = (word: string): string => {
//     if (word.length % 2 !== 0) return word;
//     const half = word.length / 2;
//     const first = word.slice(0, half).toLowerCase();
//     const second = word.slice(half).toLowerCase();
//     return first === second ? first : word;
//   };

//   // Remove adjacent duplicate words after cleaning up each word.
//   const removeDuplicates = (text: string): string => {
//     const words = text
//       .split(/\s+/)
//       .map(removeConcatenatedDuplicates)
//       .filter((word) => word.trim() !== "");
//     return words
//       .filter((word, idx, arr) => idx === 0 || word.toLowerCase() !== arr[idx - 1].toLowerCase())
//       .join(" ");
//   };

//   // Format <think> tags to be rendered as italicized text.
//   const formatThinkTags = (text: string): string =>
//     text.replace(/<think>(.*?)<\/think>/gi, "<i>$1</i>");

//   // Combined formatter: remove duplicate words, add line breaks,
//   // format think tags, and convert **bold** markdown to <strong>.
//   const formatMessage = (text: string): string => {
//     if (!text) return "";
//     const cleaned = removeDuplicates(text.replace(/\n/g, " [linebreak] "));
//     const withLineBreaks = cleaned.replace(/\[linebreak\]/g, "<br>");
//     const withThink = formatThinkTags(withLineBreaks);
//     // Bold any text between ** **
//     const withBold = withThink.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
//     return withBold;
//   };

//   const handleCopy = (message: string) => {
//     navigator.clipboard.writeText(message);
//     alert("Message copied to clipboard!");
//   };

//   // When editing a user message, load its text into the input and remove all subsequent messages.
//   const handleEdit = (index: number) => {
//     if (conversation[index].role === "user") {
//       setInput(conversation[index].content);
//       setConversation((prev) => prev.slice(0, index + 1));
//     }
//   };

//   const handleSend = async () => {
//     if (input.trim().length === 0) return;
//     // Append the new messages (user & placeholder for assistant).
//     setConversation((prev) => [
//       ...prev,
//       { role: "user", content: input },
//       { role: "assistant", content: "" },
//     ]);
//     setShowLoader(true);
//     const currentInput = input;
//     setInput("");

//     await getAIMLResponse(currentInput, (token) => {
//       if (!token) return;
//       setConversation((prev) => {
//         const updated = [...prev];
//         const lastIdx = updated.length - 1;
//         if (updated[lastIdx].role === "assistant") {
//           const existingContent = updated[lastIdx].content;
//           const tokenToAdd = appendTokenWithoutOverlap(existingContent, token);
//           updated[lastIdx].content += tokenToAdd;
//         }
//         return updated;
//       });
//     });

//     setShowLoader(false);
//   };

//   // Listen for Enter key (without Shift) to send message.
//   const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-6 min-h-screen">
//       {/* Chat Card Container with fixed height */}
//       <div className="mx-auto w-full max-w-3xl h-[80vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl ring-1 ring-slate-900/10 overflow-hidden">
//         <div className="flex flex-col h-full">
//           {/* Chat messages with custom scrollbar styling */}
//           <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//             {conversation.map((msg, idx) => {
//               const displayContent =
//                 msg.role === "assistant" ? formatMessage(msg.content) : msg.content;
//               return (
//                 <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
//                   <div className="flex items-end space-x-3 max-w-full">
//                     {msg.role === "assistant" && (
//                       <div className="flex-shrink-0">
//                         <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
//                           AI
//                         </div>
//                       </div>
//                     )}
//                     <div className="relative group">
//                       <div
//                         className={`rounded-xl px-5 py-4 shadow-lg transition transform hover:scale-105 ${msg.role === "user"
//                           ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
//                           : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
//                           } max-w-xs sm:max-w-sm md:max-w-md break-words`}
//                       >
//                         <p className="text-xs font-semibold mb-1 opacity-80">
//                           {msg.role === "user" ? "You" : "Doctor AI"}
//                         </p>
//                         <div className="text-sm" dangerouslySetInnerHTML={{ __html: displayContent }} />
//                       </div>
//                       {/* Action Buttons */}
//                       <div className="absolute top-1 right-1 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
//                         <button
//                           onClick={() => handleCopy(msg.content)}
//                           className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                           aria-label="Copy message"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-4 w-4 text-gray-600 dark:text-gray-300"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                           >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M8 16h8M8 12h8" />
//                           </svg>
//                         </button>
//                         {msg.role === "user" && (
//                           <button
//                             onClick={() => handleEdit(idx)}
//                             className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//                             aria-label="Edit message"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-4 w-4 text-gray-600 dark:text-gray-300"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M11 5h6m-3-3v6m4 4l3 3m-9 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4m4 4l2 2"
//                               />
//                             </svg>
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                     {msg.role === "user" && (
//                       <div className="flex-shrink-0">
//                         <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shadow-lg">
//                           You
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//             {showLoader && (
//               <div className="flex justify-center items-center space-x-2">
//                 <div className="h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
//                 <span className="text-sm text-gray-700 dark:text-gray-300">Crafting response...</span>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>
//           {/* Input Area */}
//           <div className="border-t border-gray-300 dark:border-gray-700 p-4">
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSend();
//               }}
//               className="flex items-center space-x-3"
//             >
//               <textarea
//                 placeholder="Type your message..."
//                 className="flex-1 resize-none rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 rows={2}
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//               ></textarea>
//               <button
//                 type="submit"
//                 disabled={showLoader}
//                 className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-md px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition transform hover:scale-105"
//               >
//                 {showLoader ? (
//                   <div className="h-6 w-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
//                 ) : (
//                   "Send"
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { getAIMLResponse } from "../services/DeepseekService";
import Image from 'next/image';
import icon1 from '../images/diet.png';
import icon2 from '../images/diagnosis.png';
import icon3 from '../images/elderly.png';
import icon4 from '../images/healthcare.png';
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/**
 * Returns the part of the new token that is not already present at the end of the existing content.
 * This prevents overlapping (duplicated) text.
 */
const appendTokenWithoutOverlap = (existing: string, token: string): string => {
  let overlapLength = 0;
  const maxOverlap = Math.min(existing.length, token.length);
  for (let i = 1; i <= maxOverlap; i++) {
    if (existing.slice(-i) === token.slice(0, i)) {
      overlapLength = i;
    }
  }
  return token.slice(overlapLength);
};

export default function AIMLChat() {
  const [input, setInput] = useState("");
  const [conversation, setConversation] = useState<ChatMessage[]>([]);
  const [showLoader, setShowLoader] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [conversation]);

  // Remove duplicate words that are concatenated (e.g., "hellohello" => "hello")
  const removeConcatenatedDuplicates = (word: string): string => {
    if (word.length % 2 !== 0) return word;
    const half = word.length / 2;
    const first = word.slice(0, half).toLowerCase();
    const second = word.slice(half).toLowerCase();
    return first === second ? first : word;
  };

  // Remove adjacent duplicate words after cleaning each word.
  const removeDuplicates = (text: string): string => {
    const words = text
      .split(/\s+/)
      .map(removeConcatenatedDuplicates)
      .filter((word) => word.trim() !== "");
    return words.filter((word, idx, arr) => 
      idx === 0 || word.toLowerCase() !== arr[idx - 1].toLowerCase()
    ).join(" ");
  };

  // Format <think> tags as italicized text.
  const formatThinkTags = (text: string): string =>
    text.replace(/<think>(.*?)<\/think>/gi, "<i>$1</i>");

  // Combined formatter: remove duplicates, add line breaks, format <think> tags, convert **bold** to <strong>.
  const formatMessage = (text: string): string => {
    if (!text) return "";
    const cleaned = removeDuplicates(text.replace(/\n/g, " [linebreak] "));
    const withLineBreaks = cleaned.replace(/\[linebreak\]/g, "<br>");
    const withThink = formatThinkTags(withLineBreaks);
    const withBold = withThink.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return withBold;
  };

  const handleCopy = (message: string) => {
    navigator.clipboard.writeText(message);
    alert("Message copied to clipboard!");
  };

  // When editing a user message, load its text into the input and remove all subsequent messages.
  const handleEdit = (index: number) => {
    if (conversation[index].role === "user") {
      setInput(conversation[index].content);
      setConversation((prev) => prev.slice(0, index + 1));
    }
  };

  const handleSend = async () => {
    if (input.trim().length === 0) return;
    // Append new user message + placeholder for the assistant.
    setConversation((prev) => [
      ...prev,
      { role: "user", content: input },
      { role: "assistant", content: "" },
    ]);
    setShowLoader(true);
    const currentInput = input;
    setInput("");

    await getAIMLResponse(currentInput, (token) => {
      if (!token) return;
      setConversation((prev) => {
        const updated = [...prev];
        const lastIdx = updated.length - 1;
        if (updated[lastIdx].role === "assistant") {
          const existingContent = updated[lastIdx].content;
          const tokenToAdd = appendTokenWithoutOverlap(existingContent, token);
          updated[lastIdx].content += tokenToAdd;
        }
        return updated;
      });
    });

    setShowLoader(false);
  };

  // Listen for Enter key (without Shift) to send message.
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    // Parent container with relative positioning for the absolute back button
    <div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Back button in the very top-left corner (outside the chat container) */}
      <a
        href="/"
        className="absolute top-4 left-4 inline-flex items-center
                   rounded-full border-2 border-white p-2 text-white
                   hover:text-gray-200 bg-transparent"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="ml-2 hidden sm:inline">Back</span>
      </a>
      <br />
      <br /><br />

      {/* Main content area */}
      <div className="p-4 sm:p-6 flex items-center justify-center">
        {/* A container to control max-width */}
        <div className="flex w-full max-w-7xl">
          {/* Sidebar with some margin from the chatbot */}
          <div className="h-[84vh] w-20 bg-gray-800 text-white
                          flex flex-col items-center py-6 space-y-8
                          mr-8 rounded-2xl shadow-lg">
            {/* Example sidebar icons */}
            <a href="https://huggingface.co/spaces/Sameer747/MediMateAIAgent" className="hover:text-gray-300">
             
                <Image src={icon1} alt="Icon" className="w-14 h-14" />
            </a>
            <p>Diet</p>
            <a href="https://huggingface.co/spaces/Sameer747/MediMateAIAgentWomensHealth" className="hover:text-gray-300">
            <Image src={icon2} alt="Icon" className="w-14 h-14" />
            </a>
            <p>Women</p>
            <a href="https://huggingface.co/spaces/Sameer747/MediMateAIAgentElderly" className="hover:text-gray-300">
            <Image src={icon3} alt="Icon" className="w-14 h-14" />
            </a>
            <p>Elders</p>
            <a href="https://huggingface.co/spaces/Sameer747/MediMateAIAgentChildHealthAndGrowth" className="hover:text-gray-300">
            <Image src={icon4} alt="Icon" className="w-14 h-14" />
            </a>
            <p>Kids</p>
          </div>

          {/* Chat Container */}
          <div className="flex-1 h-[84vh] bg-white dark:bg-slate-900
                          rounded-3xl shadow-2xl ring-1 ring-slate-900/10
                          overflow-hidden flex flex-col">
            {/* Top Bar: heading centered */}
            <div className="relative h-16 flex items-center justify-center
                            border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              AI Patient Support
              </h1>
            </div>

            {/* Chat Content */}
            <div className="flex flex-col h-full">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6
                              scrollbar-thin scrollbar-thumb-gray-400
                              scrollbar-track-gray-200">
                {conversation.map((msg, idx) => {
                  const displayContent =
                    msg.role === "assistant" ? formatMessage(msg.content) : msg.content;
                  return (
                    <div
                      key={idx}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className="flex items-end space-x-3 max-w-full">
                        {msg.role === "assistant" && (
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-600 text-white
                                            flex items-center justify-center font-bold shadow-lg">
                              AI
                            </div>
                          </div>
                        )}
                        <div className="relative group">
                          <div
                            className={`rounded-xl px-5 py-4 shadow-lg
                              transition transform hover:scale-105 ${
                                msg.role === "user"
                                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                              } max-w-xs sm:max-w-sm md:max-w-md break-words`}
                          >
                            <p className="text-xs font-semibold mb-1 opacity-80">
                              {msg.role === "user" ? "You" : "Doctor AI"}
                            </p>
                            <div
                              className="text-sm"
                              dangerouslySetInnerHTML={{ __html: displayContent }}
                            />
                          </div>
                          {/* Action Buttons (copy/edit) */}
                          <div className="absolute top-1 right-1 flex space-x-1
                                          opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleCopy(msg.content)}
                              className="p-1 rounded-full hover:bg-gray-200
                                         dark:hover:bg-gray-700"
                              aria-label="Copy message"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-600 dark:text-gray-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-2M8 16h8M8 12h8"
                                />
                              </svg>
                            </button>
                            {msg.role === "user" && (
                              <button
                                onClick={() => handleEdit(idx)}
                                className="p-1 rounded-full hover:bg-gray-200
                                           dark:hover:bg-gray-700"
                                aria-label="Edit message"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-gray-600 dark:text-gray-300"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M11 5h6m-3-3v6m4 4l3 3m-9 2H5a2 2 0 01-2-2V7a2 2 0 012-2h4m4 4l2 2"
                                  />
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                        {msg.role === "user" && (
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-green-500 text-white
                                            flex items-center justify-center font-bold shadow-lg">
                              You
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {showLoader && (
                  <div className="flex justify-center items-center space-x-2">
                    <div className="h-6 w-6 border-4 border-blue-500
                                    border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      Crafting response...
                    </span>
                  </div>
                )}

                {/* Reference for auto-scroll */}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-300 dark:border-gray-700 p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex items-center space-x-3"
                >
                  <textarea
                    placeholder="Type your message..."
                    className="flex-1 resize-none rounded-md
                               border border-gray-300 dark:border-gray-600
                               bg-white dark:bg-slate-800
                               text-gray-800 dark:text-gray-200 p-3
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={2}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                  <button
                    type="submit"
                    disabled={showLoader}
                    className="bg-blue-500 hover:bg-blue-600
                               dark:bg-blue-600 dark:hover:bg-blue-700
                               text-white rounded-md px-5 py-3
                               focus:outline-none focus:ring-2
                               focus:ring-blue-500 disabled:opacity-50
                               transition transform hover:scale-105"
                  >
                    {showLoader ? (
                      <div className="h-6 w-6 border-4 border-white
                                      border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Send"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

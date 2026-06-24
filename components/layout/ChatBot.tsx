'use client';

import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const RESPONSES = {
  apply: [
    "Great question! Applying is simple - just click 'Apply Now' and fill out our quick 3-minute form. You'll get matched with lenders instantly!",
    "Easy! Hit the 'Apply Now' button, complete our short application, and we'll connect you with the best lenders for your situation.",
    "To apply, click 'Apply Now' at the top of the page. Our streamlined process takes just a few minutes and you'll see your offers right away!"
  ],
  rates: [
    "Interest rates vary by lender and your credit profile, typically ranging from 5.99% to 35.99% APR. Apply to see personalized rates with no credit impact!",
    "Rates depend on your creditworthiness and chosen lender. Most of our partners offer rates between 5.99% - 35.99% APR. Check your rate in minutes!",
    "Our network offers competitive rates from 5.99% to 35.99% APR based on your credit score and financial situation. Get your personalized rate now!"
  ],
  funding: [
    "Many of our lenders can fund you within 24 hours of approval! Some even offer same-day funding if you apply early in the day.",
    "Fast! Most approved applicants receive funds within 1 business day. Some lenders even offer same-day deposits!",
    "You could get funded as soon as the next business day after approval. Some lenders offer same-day funding for qualifying applicants!"
  ],
  documents: [
    "You'll typically need: valid ID, proof of income (pay stubs or bank statements), and your banking information. It's that simple!",
    "Most lenders require a government-issued ID, recent pay stubs or bank statements, and your bank account details. Have these ready to speed up the process!",
    "Basic documents needed: photo ID, proof of income (last 2-3 pay stubs), and your bank account info. Some lenders may ask for additional verification."
  ],
  default: [
    "I'm here to help! You can ask me about our application process, interest rates, funding times, or required documents. What would you like to know?",
    "Happy to assist! Feel free to ask about applying for a loan, our rates, how quickly you can get funded, or what documents you'll need.",
    "I can help with questions about loan applications, rates, funding speed, or requirements. What information are you looking for?"
  ]
};

const GREETING = "Hello! I'm here to help you find the perfect loan. How can I assist you today?";

const QUICK_REPLIES = [
  "How do I apply for a loan?",
  "What are your interest rates?",
  "How fast can I get funded?",
  "What documents do I need?",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: GREETING,
      isBot: true,
      timestamp: new Date(),
    },
  ]);

  // Function to get a random response variation
  const getRandomResponse = (questionText: string) => {
    const lowerText = questionText.toLowerCase().trim();

    let responses: string[];

    if (lowerText.includes('apply')) {
      responses = RESPONSES.apply;
    } else if (lowerText.includes('interest') || lowerText.includes('rate')) {
      responses = RESPONSES.rates;
    } else if (lowerText.includes('fast') || lowerText.includes('fund')) {
      responses = RESPONSES.funding;
    } else if (lowerText.includes('document') || lowerText.includes('need')) {
      responses = RESPONSES.documents;
    } else {
      responses = RESPONSES.default;
    }

    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot response with variation
    setTimeout(() => {
      const response = getRandomResponse(text);

      const botMessage: Message = {
        id: messages.length + 2,
        text: response,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[80] w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 group"
        style={{ backgroundColor: '#10B981' }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        {!isOpen && (
          <span
            className="absolute -top-1 -right-1 w-4 h-4 rounded-full animate-pulse border-2 border-white"
            style={{ backgroundColor: '#EF4444' }}
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-6 z-[80] w-96 max-w-[calc(100vw-3rem)] rounded-3xl shadow-2xl border overflow-hidden animate-in slide-in-from-bottom-10 zoom-in-95 duration-300"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: '#E2E8F0'
          }}
          role="dialog"
          aria-labelledby="chatbot-title"
        >
          {/* Header */}
          <div
            className="p-6 flex items-center gap-3"
            style={{ backgroundColor: '#10B981' }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 id="chatbot-title" className="font-bold text-white">Ask4Loan Assistant</h3>
              <p className="text-xs text-white/80">Usually replies instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div
            className="h-80 overflow-y-auto p-6 space-y-4 bg-slate-50/50"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm`}
                  style={{
                    backgroundColor: message.isBot ? '#FFFFFF' : '#10B981',
                    border: message.isBot ? '1px solid #E2E8F0' : 'none'
                  }}
                >
                  {message.isBot ? (
                    <Bot className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-sm ${
                    message.isBot ? "rounded-tl-none bg-white text-slate-700 border border-slate-100" : "rounded-tr-none bg-emerald-600 text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2">
                <div
                  className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center shadow-sm"
                >
                  <Bot className="w-4 h-4 text-emerald-600" />
                </div>
                <div
                  className="rounded-2xl rounded-tl-none px-4 py-3 bg-white border border-slate-100 shadow-sm"
                >
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full animate-bounce bg-slate-300" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce bg-slate-300" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce bg-slate-300" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div
            className="px-6 py-4 border-t bg-white"
            style={{ borderColor: '#F1F5F9' }}
          >
            <p className="text-[10px] uppercase font-bold tracking-wider mb-3 text-slate-400">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {QUICK_REPLIES.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all border border-slate-200 bg-white text-slate-600 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div
            className="p-4 border-t bg-white"
            style={{ borderColor: '#F1F5F9' }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex gap-2"
            >
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 h-10 px-4 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                aria-label="Type your message..."
              />

              <button
                type="submit"
                className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                  inputValue.trim() ? "bg-emerald-600 text-white shadow-lg shadow-emerald-100" : "bg-slate-100 text-slate-400"
                }`}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;

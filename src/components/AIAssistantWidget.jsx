import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, Sparkles, Loader2, Home } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { properties } from '../data/properties';

// Read from environment variables securely
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY_HERE";

const AIAssistantWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am your AI Property Assistant powered by Gemini. Ask me anything about our projects in Dombivli, Kalyan, or Thakurli!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: 'Please configure your Gemini API Key in the AIAssistantWidget.jsx file to enable real AI responses!' }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const allLocationNames = [...new Set(properties.map(p => p.location))].join(', ');
      
      const systemPrompt = `You are a highly professional real estate AI Assistant for GeoNest. 
We have premium 1 BHK, 2 BHK, and 3 BHK projects actively available in ALL of the following locations: ${allLocationNames}.
Pricing: ₹30 Lakhs to ₹3 Crores depending on the area.
When a user asks about BHKs or ANY of these locations, confidently say YES we have multiple premium properties there, mention the budget, and politely ask for their mobile number to schedule a site visit or share the brochure. ALWAYS respond enthusiastically like a top-tier sales agent!`;

      // Build chat history for Gemini
      const chat = model.startChat({
        history: [
          { role: "user", parts: [{ text: systemPrompt }] },
          { role: "model", parts: [{ text: "Understood. I will act as the GeoNest assistant." }] },
          ...messages.filter(m => m.role !== 'assistant' || !m.content.includes('Hi! I am your')).map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.content }]
          }))
        ]
      });

      const result = await chat.sendMessage(userMessage);
      const responseText = result.response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: `Error: ${error.message}. Please verify your API Key or connection.` }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-8 z-[90]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] glass-morphism rounded-2xl shadow-2xl overflow-hidden animate-slide-up border-[#c5a059]/30 flex flex-col bg-[#0f0f0f]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] p-5 text-white flex justify-between items-center border-b border-[#c5a059]/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c5a059]/20 rounded-full flex items-center justify-center border border-[#c5a059]">
                <Sparkles size={20} className="text-[#c5a059]" />
              </div>
              <div>
                <h4 className="font-bold text-base leading-none mb-1 flex items-center gap-2">
                  Gemini AI
                  <span className="bg-[#c5a059] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded-full">Beta</span>
                </h4>
                <p className="text-[#c5a059] text-[10px] uppercase font-bold tracking-widest">Property Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c5a059] hover:text-black transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[#c5a059]/10 flex-shrink-0 flex items-center justify-center mr-2 mt-1 border border-[#c5a059]/30">
                    <Bot size={16} className="text-[#c5a059]" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl p-3 text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-[#c5a059] text-black rounded-tr-sm font-medium'
                    : 'bg-[#1a1a1a] text-gray-200 rounded-tl-sm border border-white/10'
                    }`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {msg.content}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center ml-2 mt-1">
                    <User size={16} className="text-gray-400" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="w-8 h-8 rounded-full bg-[#c5a059]/10 flex-shrink-0 flex items-center justify-center mr-2 mt-1 border border-[#c5a059]/30">
                  <Bot size={16} className="text-[#c5a059]" />
                </div>
                <div className="bg-[#1a1a1a] rounded-2xl rounded-tl-sm border border-white/10 p-3 text-sm text-gray-400 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-[#c5a059]" /> Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Pre-defined chips */}
          {messages.length === 1 && (
            <div className="px-5 pb-2 flex gap-2 overflow-x-auto hide-scrollbar">
              <button onClick={() => setInput("Show me 2BHK in Kalyan")} className="shrink-0 bg-white/5 hover:bg-[#c5a059]/20 border border-white/10 text-xs text-gray-300 py-1.5 px-3 rounded-full transition-colors whitespace-nowrap">
                Show me 2BHK in Kalyan
              </button>
              <button onClick={() => setInput("Luxurious projects in Dombivli")} className="shrink-0 bg-white/5 hover:bg-[#c5a059]/20 border border-white/10 text-xs text-gray-300 py-1.5 px-3 rounded-full transition-colors whitespace-nowrap">
                Luxurious projects in Dombivli
              </button>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-[#1a1a1a] border-t border-white/10">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Gemini about properties..."
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-full pl-5 pr-12 py-3.5 text-white text-sm outline-none focus:border-[#c5a059] transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-2 w-10 h-10 bg-[#c5a059] rounded-full flex items-center justify-center text-black disabled:opacity-50 transition-all hover:bg-white"
              >
                <Send size={16} className={input.trim() ? "translate-x-0.5" : ""} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#1a1a1a] border border-[#c5a059] shadow-lg shadow-[#c5a059]/20 flex items-center justify-center transition-all hover:scale-110 z-50 group hover:animate-none animate-pulse-gold group"
      >
        <Sparkles className="text-[#c5a059] absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0" size={24} />
        <Bot className="text-[#c5a059] absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100" size={24} />
      </button>
    </div>
  );
};

export default AIAssistantWidget;

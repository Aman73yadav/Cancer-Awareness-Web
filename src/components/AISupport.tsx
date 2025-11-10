import { useState } from 'react';
import { MessageCircle, Send, X, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AISupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello! I'm here to provide support and answer questions about cancer awareness, treatment options, and emotional support. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const predefinedResponses: Record<string, string> = {
    support: "Remember, you are stronger than you know. Cancer is a journey, but you don't walk it alone. Our community and resources are here for you every step of the way. Would you like to know about support groups or counseling services?",
    treatment: "There are various treatment options available including surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapy. Each person's treatment plan is unique. It's important to discuss with your oncologist to find the best approach for your specific situation.",
    symptoms: "Common symptoms to watch for include unexplained weight loss, persistent fatigue, lumps, changes in skin, persistent cough, or unusual bleeding. However, many cancers don't show early symptoms. Regular screenings are crucial for early detection.",
    prevention: "Cancer prevention includes: maintaining a healthy weight, regular exercise, avoiding tobacco, limiting alcohol, protecting skin from sun, eating a balanced diet rich in fruits and vegetables, and getting regular screenings. Early detection saves lives!",
    emotional: "It's completely normal to feel overwhelmed, scared, or anxious. These feelings are valid. Consider talking to a therapist, joining support groups, practicing mindfulness, staying connected with loved ones, and taking things one day at a time.",
    diet: "A healthy diet during cancer treatment should include plenty of fruits, vegetables, whole grains, lean proteins, and staying hydrated. Some people may need to adjust their diet based on treatment side effects. Consult with a nutritionist for personalized advice.",
    exercise: "Gentle exercise can help reduce fatigue, improve mood, and boost overall well-being. Activities like walking, yoga, swimming, or stretching are great options. Always consult your doctor before starting any exercise program during treatment.",
    family: "Supporting a loved one with cancer: Listen without judgment, offer practical help (meals, rides, chores), respect their wishes, stay positive but realistic, and take care of your own emotional health too. Your presence matters more than words.",
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('support') || lowerMessage.includes('help') || lowerMessage.includes('scared') || lowerMessage.includes('alone')) {
      return predefinedResponses.support;
    } else if (lowerMessage.includes('treatment') || lowerMessage.includes('therapy') || lowerMessage.includes('chemo')) {
      return predefinedResponses.treatment;
    } else if (lowerMessage.includes('symptom') || lowerMessage.includes('sign') || lowerMessage.includes('warning')) {
      return predefinedResponses.symptoms;
    } else if (lowerMessage.includes('prevent') || lowerMessage.includes('avoid') || lowerMessage.includes('reduce risk')) {
      return predefinedResponses.prevention;
    } else if (lowerMessage.includes('feel') || lowerMessage.includes('emotion') || lowerMessage.includes('depress') || lowerMessage.includes('anxious')) {
      return predefinedResponses.emotional;
    } else if (lowerMessage.includes('diet') || lowerMessage.includes('food') || lowerMessage.includes('eat') || lowerMessage.includes('nutrition')) {
      return predefinedResponses.diet;
    } else if (lowerMessage.includes('exercise') || lowerMessage.includes('physical') || lowerMessage.includes('activity')) {
      return predefinedResponses.exercise;
    } else if (lowerMessage.includes('family') || lowerMessage.includes('caregiver') || lowerMessage.includes('loved one')) {
      return predefinedResponses.family;
    } else {
      return "Thank you for reaching out. I can provide information about cancer support, treatments, prevention, symptoms, emotional wellbeing, nutrition, exercise, and family support. What would you like to know more about? For specific medical advice, please consult with healthcare professionals.";
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const response = getAIResponse(userMessage);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 group"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="font-semibold">AI Support</span>
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 border-2 border-rose-100 overflow-hidden">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Sparkles className="w-7 h-7 text-white" />
                <div className="absolute inset-0 blur-md bg-white opacity-50 animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">AI Support Assistant</h3>
                <p className="text-rose-100 text-sm">Here to help 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-rose-50/30 to-white">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white'
                      : 'bg-white text-gray-800 shadow-md border border-rose-100'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-md border border-rose-100">
                  <Loader2 className="w-5 h-5 text-rose-600 animate-spin" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t-2 border-rose-100 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-rose-500 focus:ring-2 focus:ring-rose-100 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="px-5 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl hover:from-rose-700 hover:to-pink-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

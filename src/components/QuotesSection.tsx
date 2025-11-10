import { useState, useEffect } from 'react';
import { Quote, RefreshCw, Sparkles, Clock, Zap, Share2 } from 'lucide-react';

interface QuoteData {
  text: string;
  author: string;
  source?: string;
}

export default function QuotesSection() {
  const [quote, setQuote] = useState<QuoteData>({ text: '', author: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quoteHistory, setQuoteHistory] = useState<QuoteData[]>([]);
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  const inspirationalQuotes: QuoteData[] = [
    {
      text: "Cancer may have started the fight, but I will finish it with strength, courage, and hope.",
      author: "Unknown",
    },
    {
      text: "You never know how strong you are until being strong is the only choice you have.",
      author: "Bob Marley",
    },
    {
      text: "Cancer is a word, not a sentence.",
      author: "John Diamond",
    },
    {
      text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
      author: "Mary Anne Radmacher",
    },
    {
      text: "When you come out of the storm, you won't be the same person who walked in. That's what the storm is all about.",
      author: "Haruki Murakami",
    },
    {
      text: "Hope is the only thing stronger than fear.",
      author: "Suzanne Collins",
    },
    {
      text: "Every day may not be good, but there is something good in every day.",
      author: "Alice Morse Earle",
    },
    {
      text: "The human spirit is stronger than anything that can happen to it.",
      author: "C.C. Scott",
    },
    {
      text: "Life is not about waiting for the storm to pass, it's about learning to dance in the rain.",
      author: "Vivian Greene",
    },
    {
      text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
      author: "A.A. Milne",
    },
  ];

  const fetchQuote = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('https://api.quotable.io/random?tags=inspirational|hope|courage|perseverance');

      if (!response.ok) throw new Error('API failed');

      const data = await response.json();
      const newQuote: QuoteData = {
        text: data.content,
        author: data.author,
        source: 'quotable.io',
      };
      setQuote(newQuote);
      setQuoteHistory([newQuote, ...quoteHistory.slice(0, 4)]);
      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch (err) {
      const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];
      setQuote(randomQuote);
      setQuoteHistory([randomQuote, ...quoteHistory.slice(0, 4)]);
      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } finally {
      setLoading(false);
    }
  };

  const shareQuote = () => {
    const text = `"${quote.text}" — ${quote.author}`;
    if (navigator.share) {
      navigator.share({
        title: 'Inspirational Quote',
        text: text,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert('Quote copied to clipboard!');
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchQuote();
    }, 60000);

    return () => clearInterval(interval);
  }, [autoRefresh, quoteHistory]);

  return (
    <section id="quotes" className="py-20 bg-gradient-to-br from-rose-900 via-pink-800 to-orange-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Daily Inspiration</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Words of Hope & Strength
          </h2>
          <p className="text-xl text-rose-100">
            Real-time inspirational quotes to uplift your spirit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/95 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500"></div>

            <div className="flex items-start justify-between mb-6">
              <Quote className="w-16 h-16 text-rose-200" />
              <div className="flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-700">Live</span>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <RefreshCw className="w-12 h-12 text-rose-600 animate-spin" />
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-2xl sm:text-3xl font-serif text-gray-800 leading-relaxed italic">
                  "{quote.text}"
                </p>
                <div className="flex items-center justify-between pt-6 border-t-2 border-rose-100">
                  <div className="flex flex-col">
                    <p className="text-lg font-semibold text-rose-700">— {quote.author}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Clock className="w-4 h-4" />
                      Updated {lastUpdated}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={shareQuote}
                      className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-all duration-200 shadow-md hover:shadow-lg"
                      title="Share quote"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={fetchQuote}
                      disabled={loading}
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-xl hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50"
                    >
                      <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                      <span className="font-semibold">New</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-rose-50 rounded-xl mt-6 border border-rose-200">
                  <input
                    type="checkbox"
                    checked={autoRefresh}
                    onChange={(e) => setAutoRefresh(e.target.checked)}
                    id="autoRefresh"
                    className="w-4 h-4 rounded cursor-pointer"
                  />
                  <label htmlFor="autoRefresh" className="text-sm text-gray-700 cursor-pointer flex-1">
                    Auto-refresh quotes every minute
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              Recent Quotes
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {quoteHistory.length === 0 ? (
                <p className="text-gray-500 text-sm">No quote history yet</p>
              ) : (
                quoteHistory.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border-l-4 border-rose-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
                    onClick={() => setQuote(q)}
                  >
                    <p className="text-sm font-serif text-gray-700 line-clamp-2 group-hover:text-rose-700">
                      "{q.text}"
                    </p>
                    <p className="text-xs text-gray-600 mt-1">— {q.author}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-white">1M+</span>
            </div>
            <p className="text-white font-semibold text-lg">Lives Touched</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-white">24/7</span>
            </div>
            <p className="text-white font-semibold text-lg">Support Available</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-white">100%</span>
            </div>
            <p className="text-white font-semibold text-lg">Free Resources</p>
          </div>
        </div>
      </div>
    </section>
  );
}

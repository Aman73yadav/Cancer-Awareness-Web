import { Heart, Users, HandHeart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3962630/pexels-photo-3962630.jpeg?auto=compress&cs=tinysrgb&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-pink-400/5 to-orange-400/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-rose-300 opacity-40 animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Together We Are
            <span className="block bg-gradient-to-r from-rose-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Stronger Than Cancer
            </span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our community of survivors, fighters, and supporters.
            Every journey matters, every story inspires, and together we create hope.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-rose-600 to-pink-600 rounded-full hover:from-rose-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Support
              <HandHeart className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#quotes"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-rose-700 bg-white rounded-full hover:bg-rose-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Find Inspiration
              <Users className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Support</h3>
            <p className="text-gray-600 leading-relaxed">
              Access compassionate support anytime, anywhere. You're never alone in this journey.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect with survivors and families who understand. Share hope, strength, and stories.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <HandHeart className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Resources</h3>
            <p className="text-gray-600 leading-relaxed">
              Expert guidance, educational materials, and tools to help you navigate every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Zap, Shield, Users, Lightbulb, Award, Activity } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
}

export default function BestFeatures() {
  const features: Feature[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Intelligence",
      description: "Get instant access to latest research, clinical trials, and treatment breakthroughs powered by AI algorithms",
      highlight: "Updates every hour"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Medical Verified",
      description: "All information reviewed and validated by certified oncologists and medical professionals",
      highlight: "100% Verified Content"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Connect with 50,000+ survivors and supporters sharing experiences, tips, and encouragement",
      highlight: "Active Community"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Personalized Guidance",
      description: "AI-powered recommendations tailored to your specific cancer type and treatment stage",
      highlight: "Smart Recommendations"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Resources",
      description: "Access comprehensive guides, videos, and tools created by leading cancer care experts",
      highlight: "Premium Content"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Wellness Tracking",
      description: "Monitor your health metrics, side effects, and progress with intelligent tracking tools",
      highlight: "Health Dashboard"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Award className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Premium Features</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry-leading features designed to empower cancer patients, survivors, and caregivers with the best support available
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <div className="text-white">{feature.icon}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              <div className="inline-block px-3 py-1 bg-blue-100 rounded-full">
                <p className="text-xs font-semibold text-blue-700">{feature.highlight}</p>
              </div>

              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-100/30 to-transparent rounded-tr-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>

          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">Join Thousands Already Benefiting</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <p className="text-4xl font-bold mb-2">50K+</p>
                <p className="text-blue-100">Active Members</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">500K+</p>
                <p className="text-blue-100">Resources Shared</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">99%</p>
                <p className="text-blue-100">Would Recommend</p>
              </div>
            </div>

            <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center gap-2">
              Start Your Journey
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/4386901/pexels-photo-4386901.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Support group"
              className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Expert Community</h4>
                <p className="text-blue-100">Connect with healthcare professionals and fellow patients</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Wellness resources"
              className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-6">
              <div>
                <h4 className="text-2xl font-bold text-white mb-2">Comprehensive Resources</h4>
                <p className="text-blue-100">Access educational materials and wellness programs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

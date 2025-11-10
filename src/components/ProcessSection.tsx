import { CheckCircle2, Users, Zap, Heart, Brain, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface Process {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  color: string;
}

export default function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState(0);

  const processes: Process[] = [
    {
      id: 1,
      icon: <Heart className="w-8 h-8" />,
      title: "Awareness",
      description: "Learn about cancer types, risk factors, and early warning signs",
      details: [
        "Understand common symptoms",
        "Know risk factors and prevention",
        "Regular health screenings",
        "Build health literacy"
      ],
      color: "from-rose-500 to-pink-500"
    },
    {
      id: 2,
      icon: <Brain className="w-8 h-8" />,
      title: "Education",
      description: "Access comprehensive resources and expert guidance",
      details: [
        "Treatment options explained",
        "Clinical trial information",
        "Specialist recommendations",
        "Evidence-based information"
      ],
      color: "from-pink-500 to-orange-500"
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Connect with others sharing similar experiences",
      details: [
        "Support group meetings",
        "Peer mentorship programs",
        "Family resources",
        "Survivor success stories"
      ],
      color: "from-orange-500 to-amber-500"
    },
    {
      id: 4,
      icon: <Zap className="w-8 h-8" />,
      title: "Treatment",
      description: "Personalized care plans and ongoing medical support",
      details: [
        "Oncologist coordination",
        "Treatment planning",
        "Side effect management",
        "Progress monitoring"
      ],
      color: "from-amber-500 to-rose-500"
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Recovery",
      description: "Comprehensive support for healing and moving forward",
      details: [
        "Post-treatment care",
        "Mental health support",
        "Lifestyle adjustments",
        "Long-term wellness plans"
      ],
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full mb-6">
            <CheckCircle2 className="w-5 h-5 text-rose-600" />
            <span className="text-sm font-semibold text-rose-700">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to Better Health
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five comprehensive steps designed to support you from awareness through recovery, backed by medical expertise and community strength.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {processes.map((process, index) => (
            <button
              key={process.id}
              onClick={() => setActiveProcess(index)}
              className={`relative p-6 rounded-2xl transition-all duration-300 group ${
                activeProcess === index
                  ? `bg-gradient-to-br ${process.color} text-white shadow-xl scale-105`
                  : 'bg-white text-gray-800 shadow-md hover:shadow-lg'
              }`}
            >
              <div className={`flex flex-col items-center gap-3 ${
                activeProcess === index ? 'opacity-100' : 'opacity-75 group-hover:opacity-100'
              }`}>
                <div className={`p-3 rounded-xl ${
                  activeProcess === index ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  {activeProcess === index ? (
                    <div className={`text-white`}>{process.icon}</div>
                  ) : (
                    <div className={`bg-gradient-to-br ${process.color} bg-clip-text text-transparent`}>
                      {process.icon}
                    </div>
                  )}
                </div>
                <h3 className={`font-bold text-sm sm:text-base ${
                  activeProcess === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {process.title}
                </h3>
              </div>

              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 transition-all ${
                activeProcess === index
                  ? `border-l-transparent border-r-transparent border-t-white`
                  : 'opacity-0'
              }`}></div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${processes[activeProcess].color} px-8 py-12 text-white`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-white/20 rounded-2xl">
                {processes[activeProcess].icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{processes[activeProcess].title}</h3>
                <p className="text-lg opacity-90">{processes[activeProcess].description}</p>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Key Focus Areas:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processes[activeProcess].details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${processes[activeProcess].color} flex-shrink-0 mt-1`}>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-blue-900">Pro Tip:</span> Each step builds upon the previous one. Engagement at every stage improves outcomes and ensures comprehensive support tailored to your needs.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">5K+</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Success Stories</h3>
            <p className="text-gray-600">Real lives transformed through our comprehensive approach</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">98%</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Rate</h3>
            <p className="text-gray-600">Participants report improved outcomes and support quality</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">24/7</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Support</h3>
            <p className="text-gray-600">Access guidance, resources, and community whenever needed</p>
          </div>
        </div>
      </div>
    </section>
  );
}


import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Zap, 
  Shield, 
  Target, 
  Cpu,
  Terminal,
  Database,
  Rocket,
  Brain
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "BRUTAL CODING CHALLENGES",
      description: "Real-world projects that will break you and rebuild you stronger",
      color: "from-red-500 to-pink-500",
      badge: "HARDCORE"
    },
    {
      icon: Database,
      title: "SYSTEM ARCHITECTURE",
      description: "Design scalable systems that handle millions of concurrent users",
      color: "from-purple-500 to-blue-500",
      badge: "ADVANCED"
    },
    {
      icon: Brain,
      title: "AI/ML WARFARE",
      description: "Build intelligent systems that adapt and evolve in real-time",
      color: "from-cyan-500 to-green-500",
      badge: "FUTURE"
    },
    {
      icon: Shield,
      title: "CYBERSECURITY OPS",
      description: "Defend against advanced persistent threats and zero-day exploits",
      color: "from-orange-500 to-red-500",
      badge: "CRITICAL"
    },
    {
      icon: Rocket,
      title: "DEVOPS MASTERY",
      description: "Deploy at scale with zero downtime using cutting-edge automation",
      color: "from-pink-500 to-purple-500",
      badge: "ELITE"
    },
    {
      icon: Terminal,
      title: "PERFORMANCE OPTIMIZATION",
      description: "Squeeze every nanosecond out of your code for maximum efficiency",
      color: "from-yellow-500 to-orange-500",
      badge: "EXTREME"
    }
  ];

  const stats = [
    { icon: Target, value: "1-50hrs", label: "INTENSITY LEVELS" },
    { icon: Zap, value: "100%", label: "COMPLETION RATE" },
    { icon: Cpu, value: "25+", label: "TECH STACKS" },
    { icon: Shield, value: "∞", label: "CHALLENGES" }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-6 px-6 py-3 text-black bg-gradient-to-r from-pink-500 to-orange-500 border-0 font-bold tracking-wider">
            SIMULATION WARFARE
          </Badge>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">MASTER THE</span>
            <br />
            <span className="text-neon">DIGITAL BATTLEFIELD</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono">
            Each simulation is a war zone. Only the strongest survive. 
            Are you ready to prove your worth?
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="aggressive-card p-6 text-center glow-effect hover:scale-105 transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-black" />
              </div>
              <div className="text-3xl font-bold text-neon font-mono mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 font-bold tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="aggressive-card p-8 group hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Badge */}
              <Badge 
                className="absolute top-4 right-4 text-xs bg-gradient-to-r from-pink-500 to-orange-500 text-black border-0 font-bold"
              >
                {feature.badge}
              </Badge>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-black" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors font-mono tracking-wider">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-500">
          <p className="text-lg text-gray-300 mb-8 font-mono">
            Ready to enter the battlefield? Only warriors need apply.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-aggressive">
              ENTER COMBAT MODE
            </button>
            <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black px-8 py-4 font-bold tracking-wider bg-transparent transition-all duration-300">
              VIEW BATTLEGROUND
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

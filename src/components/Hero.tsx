
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Play, 
  Zap, 
  Code,
  Target,
  Shield,
  Cpu,
  Terminal
} from 'lucide-react';

const Hero = () => {
  const floatingElements = [
    { icon: Code, delay: '0s', position: 'top-20 left-10' },
    { icon: Target, delay: '0.5s', position: 'top-40 right-20' },
    { icon: Shield, delay: '1s', position: 'bottom-32 left-20' },
    { icon: Cpu, delay: '1.5s', position: 'bottom-20 right-10' },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <div 
            key={index}
            className={`absolute ${element.position} w-16 h-16 cyber-border glow-effect`}
            style={{ animationDelay: element.delay }}
          >
            <div className="w-full h-full bg-black flex items-center justify-center">
              <element.icon className="w-8 h-8 text-pink-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-pink-500 text-black border-0 font-bold tracking-wider px-4 py-2 animate-fade-in-up">
              <Terminal className="w-4 h-4 mr-2" />
              NEXT-GEN SIMULATION PLATFORM
            </Badge>

            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight animate-fade-in-up animate-delay-200">
                <span className="text-white">FORGE YOUR</span>
                <br />
                <span className="text-neon">FUTURE</span>
                <br />
                <span className="text-cyber">IN CODE</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed animate-fade-in-up animate-delay-300 font-mono">
                Experience brutal real-world challenges. Master cutting-edge tech. 
                Dominate the competition. Your career transformation starts NOW.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animate-delay-400">
              <button className="btn-aggressive">
                LAUNCH SIMULATION
                <ArrowRight className="ml-3 w-5 h-5" />
              </button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black px-8 py-6 text-lg font-bold tracking-wider bg-transparent"
              >
                <Play className="mr-3 w-5 h-5" />
                WATCH DEMO
              </Button>
            </div>

            {/* Aggressive Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up animate-delay-500">
              <div className="text-center cyber-border p-4">
                <div className="text-4xl font-bold text-neon font-mono">100K+</div>
                <div className="text-sm text-gray-400 font-bold tracking-wider">WARRIORS</div>
              </div>
              <div className="text-center cyber-border p-4">
                <div className="text-4xl font-bold text-neon font-mono">1000+</div>
                <div className="text-sm text-gray-400 font-bold tracking-wider">MISSIONS</div>
              </div>
              <div className="text-center cyber-border p-4">
                <div className="text-4xl font-bold text-neon font-mono">99%</div>
                <div className="text-sm text-gray-400 font-bold tracking-wider">HIRED</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Terminal */}
          <div className="relative animate-scale-in animate-delay-300">
            <div className="aggressive-card p-8 glow-effect">
              <div className="border-b border-pink-500/30 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 font-mono text-sm">simulation_terminal.exe</span>
                </div>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="text-green-400">$ initializing_career_forge...</div>
                <div className="text-yellow-400">$ loading_virtual_environments...</div>
                <div className="text-blue-400">$ calibrating_skill_matrix...</div>
                <div className="text-pink-400">$ system_ready_for_deployment</div>
                <div className="text-white">$ select_your_domain:</div>
                
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {['BACKEND', 'FRONTEND', 'DEVOPS', 'AI/ML'].map((tech, index) => (
                    <div 
                      key={index}
                      className="aggressive-card p-3 hover:bg-pink-500/20 cursor-pointer transition-all duration-300"
                    >
                      <div className="text-center text-white font-bold text-xs">{tech}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-pink-500 font-bold animate-pulse">READY TO DEPLOY?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border-2 border-pink-500 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-pink-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

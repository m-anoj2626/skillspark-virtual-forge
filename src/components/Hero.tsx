
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden particle-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge 
              variant="secondary" 
              className="bg-white/20 text-purple-700 border-purple-200 animate-fade-in-up glass-card px-4 py-2"
            >
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              #1 Virtual Work Experience Platform
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up animate-delay-200">
                Build Your
                <span className="block text-gradient-purple">Career</span>
                Through Real
                <span className="block text-gradient">Experiences</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up animate-delay-300">
                Master real-world skills through immersive simulations, virtual internships, 
                and hands-on projects designed by industry experts. Start your journey today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover-glow transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-xl glass-card transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up animate-delay-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-purple">50K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-purple">500+</div>
                <div className="text-sm text-gray-600">Simulations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient-purple">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6 animate-scale-in animate-delay-300">
              {/* Floating Cards */}
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-2xl floating-animation hover-glow transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Virtual Internships</h3>
                  <p className="text-sm text-gray-600">20-40 hour immersive experiences</p>
                </div>

                <div className="glass-card p-6 rounded-2xl floating-animation hover-glow transition-all duration-300 cursor-pointer" style={{animationDelay: '1s'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Quick Tasks</h3>
                  <p className="text-sm text-gray-600">1-3 hour skill builders</p>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <div className="glass-card p-6 rounded-2xl floating-animation hover-glow transition-all duration-300 cursor-pointer" style={{animationDelay: '0.5s'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Certifications</h3>
                  <p className="text-sm text-gray-600">Industry-recognized credentials</p>
                </div>

                <div className="glass-card p-6 rounded-2xl floating-animation hover-glow transition-all duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Expert Mentorship</h3>
                  <p className="text-sm text-gray-600">Learn from industry leaders</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-yellow-300 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-pink-300 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

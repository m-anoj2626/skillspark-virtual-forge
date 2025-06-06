
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Briefcase, 
  TrendingUp, 
  Users, 
  Award, 
  Zap,
  Clock,
  Target,
  BookOpen
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Code,
      title: "Tech Simulations",
      description: "Full-stack development, DevOps, and software engineering projects",
      color: "from-blue-500 to-cyan-500",
      badge: "Popular"
    },
    {
      icon: Briefcase,
      title: "Business & Finance",
      description: "Investment analysis, consulting projects, and strategic planning",
      color: "from-green-500 to-emerald-500",
      badge: "High Demand"
    },
    {
      icon: TrendingUp,
      title: "Marketing & Sales",
      description: "Campaign creation, market research, and growth strategies",
      color: "from-purple-500 to-pink-500",
      badge: "Creative"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with peers on real-world projects and build networks",
      color: "from-orange-500 to-red-500",
      badge: "Collaborative"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "Earn credentials recognized by top companies worldwide",
      color: "from-indigo-500 to-purple-500",
      badge: "Verified"
    },
    {
      icon: Zap,
      title: "AI-Powered Learning",
      description: "Personalized recommendations and intelligent skill assessment",
      color: "from-yellow-500 to-orange-500",
      badge: "AI Enhanced"
    }
  ];

  const stats = [
    { icon: Clock, value: "1-40hrs", label: "Flexible Duration" },
    { icon: Target, value: "98%", label: "Completion Rate" },
    { icon: BookOpen, value: "15+", label: "Industries" },
    { icon: Users, value: "50K+", label: "Active Students" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-purple-700 bg-purple-100">
            Why Choose SkillSpark?
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Experience Real
            <span className="block text-gradient-purple">Work Environments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform simulates authentic workplace scenarios, giving you hands-on experience 
            that employers value most.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 glass-card rounded-2xl animate-scale-in hover-glow transition-all duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient-purple mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up glass-card overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Badge */}
                <Badge 
                  variant="outline" 
                  className="absolute top-4 right-4 text-xs border-purple-200 text-purple-600"
                >
                  {feature.badge}
                </Badge>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animate-delay-500">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your career? Join thousands of students already building their future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover-glow transition-all duration-300">
              Explore Simulations
            </button>
            <button className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

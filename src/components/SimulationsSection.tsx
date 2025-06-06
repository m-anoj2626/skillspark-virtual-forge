
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SimulationCard from './SimulationCard';
import { ArrowRight, Filter } from 'lucide-react';

const SimulationsSection = () => {
  const featuredSimulations = [
    {
      title: "Full-Stack E-commerce Platform",
      category: "Software Engineering",
      duration: "25-30 hours",
      difficulty: "Advanced" as const,
      rating: 4.9,
      enrolledCount: 2847,
      description: "Build a complete e-commerce platform with React, Node.js, and MongoDB. Implement payment processing, user authentication, and admin dashboard.",
      skills: ["React", "Node.js", "MongoDB", "Payment Integration", "AWS"],
      image: "/api/placeholder/400/200",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Marketing Campaign",
      category: "Marketing",
      duration: "15-20 hours", 
      difficulty: "Intermediate" as const,
      rating: 4.8,
      enrolledCount: 1923,
      description: "Create and execute a complete digital marketing campaign including social media strategy, content creation, and performance analytics.",
      skills: ["Social Media", "Content Strategy", "Analytics", "SEO", "PPC"],
      image: "/api/placeholder/400/200",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Investment Portfolio Analysis",
      category: "Finance",
      duration: "12-15 hours",
      difficulty: "Intermediate" as const,
      rating: 4.7,
      enrolledCount: 1456,
      description: "Analyze market trends, build diversified portfolios, and create investment strategies using real financial data and tools.",
      skills: ["Financial Analysis", "Excel", "Risk Management", "Portfolio Theory"],
      image: "/api/placeholder/400/200",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "UI/UX Design Sprint",
      category: "Design",
      duration: "8-12 hours",
      difficulty: "Beginner" as const,
      rating: 4.6,
      enrolledCount: 3241,
      description: "Complete a 5-day design sprint to solve a real user problem. Includes user research, prototyping, and user testing.",
      skills: ["Figma", "User Research", "Prototyping", "User Testing", "Design Systems"],
      image: "/api/placeholder/400/200",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Data Science Project",
      category: "Data Science",
      duration: "20-25 hours",
      difficulty: "Advanced" as const,
      rating: 4.8,
      enrolledCount: 1834,
      description: "Analyze large datasets, build machine learning models, and create interactive dashboards to derive business insights.",
      skills: ["Python", "Machine Learning", "Pandas", "Visualization", "SQL"],
      image: "/api/placeholder/400/200",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Startup Business Plan",
      category: "Business Strategy",
      duration: "18-22 hours",
      difficulty: "Intermediate" as const,
      rating: 4.5,
      enrolledCount: 987,
      description: "Develop a comprehensive business plan for a tech startup including market analysis, financial projections, and pitch deck.",
      skills: ["Business Planning", "Market Research", "Financial Modeling", "Pitch Decks"],
      image: "/api/placeholder/400/200",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const categories = [
    "All Categories",
    "Software Engineering", 
    "Marketing",
    "Finance",
    "Design",
    "Data Science",
    "Business Strategy",
    "Consulting"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-purple-700 bg-purple-100">
            Featured Simulations
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Choose Your
            <span className="block text-gradient-purple">Learning Path</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From quick skill-builders to comprehensive virtual internships, 
            find the perfect simulation to advance your career.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up animate-delay-200">
          <Button variant="outline" size="sm" className="bg-purple-50 border-purple-200 text-purple-700">
            <Filter className="w-4 h-4 mr-2" />
            All Categories
          </Button>
          {categories.slice(1, 6).map((category, index) => (
            <Button 
              key={index}
              variant="ghost" 
              size="sm"
              className="hover:bg-purple-50 hover:text-purple-700 transition-colors"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Simulations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredSimulations.map((simulation, index) => (
            <div 
              key={index}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <SimulationCard {...simulation} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up animate-delay-500">
          <p className="text-lg text-gray-600 mb-6">
            Over 500+ simulations across 15+ industries. Find your perfect match.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover-glow transition-all duration-300"
          >
            View All Simulations
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SimulationsSection;

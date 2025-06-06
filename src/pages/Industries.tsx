
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Briefcase, 
  TrendingUp, 
  Stethoscope, 
  Palette, 
  Building, 
  Users, 
  Globe,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Code,
      title: "Technology & Software",
      description: "Full-stack development, DevOps, cybersecurity, data science, and AI/ML projects",
      simulations: 120,
      avgDuration: "15-25 hours",
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Python", "AWS", "Docker", "Machine Learning"]
    },
    {
      icon: Briefcase,
      title: "Business & Consulting",
      description: "Strategic planning, market analysis, process optimization, and business development",
      simulations: 85,
      avgDuration: "10-20 hours", 
      color: "from-green-500 to-emerald-500",
      skills: ["Strategy", "Analytics", "Project Management", "Consulting", "Excel"]
    },
    {
      icon: TrendingUp,
      title: "Finance & Banking",
      description: "Investment analysis, risk management, financial modeling, and portfolio management",
      simulations: 95,
      avgDuration: "12-18 hours",
      color: "from-purple-500 to-pink-500", 
      skills: ["Financial Modeling", "Risk Analysis", "Excel", "Bloomberg", "Valuation"]
    },
    {
      icon: Users,
      title: "Marketing & Sales",
      description: "Digital campaigns, content strategy, lead generation, and customer acquisition",
      simulations: 110,
      avgDuration: "8-15 hours",
      color: "from-orange-500 to-red-500",
      skills: ["SEO/SEM", "Content Creation", "Analytics", "CRM", "Social Media"]
    },
    {
      icon: Palette,
      title: "Design & Creative",
      description: "UI/UX design, brand development, creative campaigns, and design systems",
      simulations: 75,
      avgDuration: "10-16 hours",
      color: "from-pink-500 to-rose-500",
      skills: ["Figma", "Adobe Creative Suite", "UI/UX", "Branding", "Prototyping"]
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Life Sciences",
      description: "Clinical research, healthcare technology, pharmaceutical development, and medical analysis",
      simulations: 65,
      avgDuration: "15-30 hours",
      color: "from-indigo-500 to-purple-500",
      skills: ["Clinical Research", "Healthcare IT", "Regulatory", "Data Analysis", "Medical Writing"]
    },
    {
      icon: Building,
      title: "Engineering & Manufacturing",
      description: "Product design, quality control, process engineering, and supply chain optimization",
      simulations: 55,
      avgDuration: "20-35 hours",
      color: "from-yellow-500 to-orange-500",
      skills: ["CAD", "Process Design", "Quality Control", "Lean Six Sigma", "Project Management"]
    },
    {
      icon: Globe,
      title: "Non-Profit & Social Impact",
      description: "Program management, fundraising, community outreach, and social entrepreneurship",
      simulations: 45,
      avgDuration: "12-20 hours",
      color: "from-teal-500 to-cyan-500",
      skills: ["Grant Writing", "Program Management", "Community Engagement", "Impact Measurement", "Fundraising"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-purple-700 bg-purple-100">
              Explore Industries
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient-purple">
              Choose Your Career Path
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover hands-on simulations across 15+ industries. From tech startups to healthcare, 
              find the perfect field to launch your career.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card 
                key={index}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden glass-card"
              >
                <CardContent className="p-8 relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{industry.simulations} simulations</span>
                    <span>{industry.avgDuration}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.skills.slice(0, 3).map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="text-xs bg-purple-50 text-purple-700 border-purple-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {industry.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600 border-gray-200">
                        +{industry.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group-hover:shadow-lg transition-all duration-300"
                  >
                    Explore Simulations
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students already building their careers through real-world simulations.
          </p>
          <Button 
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;

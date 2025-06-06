
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "/api/placeholder/150/150",
      bio: "Former Google engineer with 10+ years in EdTech"
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      image: "/api/placeholder/150/150", 
      bio: "Ex-Microsoft architect, expert in scalable platforms"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Head of Content",
      image: "/api/placeholder/150/150",
      bio: "PhD in Education, former university professor"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Real-World Relevance",
      description: "Every simulation mirrors actual workplace scenarios and challenges"
    },
    {
      icon: Users,
      title: "Inclusive Learning",
      description: "Accessible education for learners from all backgrounds and experiences"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Highest quality content created by industry experts"
    },
    {
      icon: Heart,
      title: "Student Success",
      description: "Dedicated to transforming careers and unlocking potential"
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
              About SkillSpark
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-gradient-purple">
              Bridging the Gap Between Education and Career Success
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to revolutionize how students prepare for their careers through 
              immersive, real-world simulations that build confidence and competence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Traditional education often leaves a gap between theoretical knowledge and practical 
                application. We created SkillSpark to solve this problem by providing immersive, 
                hands-on experiences that prepare students for real workplace challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our platform, students gain confidence, build portfolios, and develop 
                the skills employers actually need - all before they graduate.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gradient-purple">50K+</div>
                  <div className="text-sm text-gray-600">Students Empowered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-purple">500+</div>
                  <div className="text-sm text-gray-600">Simulations Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-purple">95%</div>
                  <div className="text-sm text-gray-600">Job Placement Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-purple">200+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the experience we create for our students.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our diverse team of educators, technologists, and industry experts are passionate about student success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4"></div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <div className="text-purple-600 font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

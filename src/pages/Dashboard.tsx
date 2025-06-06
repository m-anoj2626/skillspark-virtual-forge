
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Award, 
  Clock, 
  TrendingUp, 
  Target,
  PlayCircle,
  Calendar,
  Star,
  ArrowRight
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: BookOpen, label: "Completed", value: "12", color: "text-green-600" },
    { icon: Clock, label: "In Progress", value: "3", color: "text-blue-600" },
    { icon: Award, label: "Certificates", value: "8", color: "text-purple-600" },
    { icon: TrendingUp, label: "Skill Points", value: "2,430", color: "text-orange-600" }
  ];

  const inProgress = [
    {
      title: "Full-Stack E-commerce Platform",
      progress: 65,
      timeLeft: "8 hours left",
      category: "Software Engineering",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Marketing Campaign",
      progress: 30,
      timeLeft: "12 hours left",
      category: "Marketing",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Investment Analysis Project",
      progress: 85,
      timeLeft: "2 hours left",
      category: "Finance",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const recommended = [
    {
      title: "Data Science with Python",
      duration: "20-25 hours",
      difficulty: "Advanced",
      rating: 4.9,
      category: "Data Science"
    },
    {
      title: "UI/UX Design Sprint",
      duration: "8-12 hours", 
      difficulty: "Beginner",
      rating: 4.7,
      category: "Design"
    },
    {
      title: "Business Strategy Case Study",
      duration: "15-18 hours",
      difficulty: "Intermediate", 
      rating: 4.8,
      category: "Business"
    }
  ];

  const achievements = [
    { title: "First Simulation Complete", date: "2 days ago", icon: "🎯" },
    { title: "Week Streak", date: "1 week ago", icon: "🔥" },
    { title: "Skill Master", date: "2 weeks ago", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-gray-600">Continue your learning journey and unlock new opportunities.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Progress */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-purple-600" />
                  Continue Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {inProgress.map((simulation, index) => (
                  <div key={index} className="p-4 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold mb-1">{simulation.title}</h3>
                        <Badge variant="outline" className="text-xs">{simulation.category}</Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{simulation.progress}%</p>
                        <p className="text-xs text-gray-500">{simulation.timeLeft}</p>
                      </div>
                    </div>
                    <Progress value={simulation.progress} className="mb-3" />
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommended */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-600" />
                  Recommended for You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommended.map((simulation, index) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors">
                      <h3 className="font-semibold mb-2">{simulation.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{simulation.duration}</span>
                        <Badge variant="outline" className="text-xs">{simulation.difficulty}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span>{simulation.rating}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Start Simulation
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <BookOpen className="mr-2 w-4 h-4" />
                  Browse Simulations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="mr-2 w-4 h-4" />
                  View Certificates
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Learning
                </Button>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Recent Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50">
                      <div className="text-2xl">{achievement.icon}</div>
                      <div>
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Learning Streak */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">🔥</div>
                <h3 className="font-bold text-xl mb-1">7 Day Streak!</h3>
                <p className="text-sm text-gray-600">Keep it up to unlock rewards</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

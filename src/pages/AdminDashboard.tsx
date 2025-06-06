
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award,
  Plus,
  Settings,
  BarChart3,
  FileText,
  Mail,
  Upload,
  Edit,
  Eye
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { icon: Users, label: "Total Users", value: "12,456", change: "+12%", color: "text-blue-600" },
    { icon: BookOpen, label: "Active Simulations", value: "524", change: "+8%", color: "text-green-600" },
    { icon: TrendingUp, label: "Completion Rate", value: "87%", change: "+5%", color: "text-purple-600" },
    { icon: Award, label: "Certificates Issued", value: "8,924", change: "+15%", color: "text-orange-600" }
  ];

  const recentSimulations = [
    { title: "Advanced React Development", category: "Technology", status: "Published", submissions: 45 },
    { title: "Digital Marketing Strategy", category: "Marketing", status: "Draft", submissions: 0 },
    { title: "Financial Analysis Project", category: "Finance", status: "Published", submissions: 32 },
    { title: "UX Research Methods", category: "Design", status: "Review", submissions: 12 }
  ];

  const recentUsers = [
    { name: "Sarah Johnson", email: "sarah@email.com", joined: "2 hours ago", status: "Active" },
    { name: "Mike Chen", email: "mike@email.com", joined: "5 hours ago", status: "Active" },
    { name: "Emily Davis", email: "emily@email.com", joined: "1 day ago", status: "Pending" },
    { name: "Alex Kumar", email: "alex@email.com", joined: "2 days ago", status: "Active" }
  ];

  const pendingReviews = [
    { student: "John Doe", simulation: "Full-Stack Project", submitted: "2 hours ago", priority: "High" },
    { student: "Jane Smith", simulation: "Marketing Campaign", submitted: "4 hours ago", priority: "Medium" },
    { student: "Bob Wilson", simulation: "Data Analysis", submitted: "1 day ago", priority: "Low" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your platform and monitor performance</p>
          </div>
          <div className="flex gap-3">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="mr-2 w-4 h-4" />
              Create Simulation
            </Button>
            <Button variant="outline">
              <Settings className="mr-2 w-4 h-4" />
              Settings
            </Button>
          </div>
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
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="simulations">Simulations</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Simulations */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                    Recent Simulations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentSimulations.map((sim, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                        <div>
                          <h3 className="font-medium">{sim.title}</h3>
                          <p className="text-sm text-gray-500">{sim.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={sim.status === 'Published' ? 'default' : 'secondary'}>
                            {sim.status}
                          </Badge>
                          <span className="text-sm text-gray-500">{sim.submissions} submissions</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Users */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-600" />
                    Recent Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentUsers.map((user, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                        <div>
                          <h3 className="font-medium">{user.name}</h3>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{user.joined}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pending Reviews */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  Pending Reviews
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingReviews.map((review, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-100">
                      <div>
                        <h3 className="font-medium">{review.student}</h3>
                        <p className="text-sm text-gray-500">{review.simulation}</p>
                        <p className="text-xs text-gray-400">Submitted {review.submitted}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant={review.priority === 'High' ? 'destructive' : review.priority === 'Medium' ? 'default' : 'secondary'}>
                          {review.priority}
                        </Badge>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm">
                            Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="simulations">
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Simulation Management</CardTitle>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Plus className="mr-2 w-4 h-4" />
                  Create New
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Manage all simulations, create new ones, and track performance.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">View and manage all platform users, their progress, and access levels.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Submission Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Review student submissions, provide feedback, and approve certificates.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Analytics & Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">View detailed analytics, generate reports, and track platform performance.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Content Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Manage media library, email templates, and blog content.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;

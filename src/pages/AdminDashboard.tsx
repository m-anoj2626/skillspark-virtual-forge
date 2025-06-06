
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  Award,
  Settings,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import StatsCard from '@/components/admin/StatsCard';
import QuickActions from '@/components/admin/QuickActions';
import ActivityFeed from '@/components/admin/ActivityFeed';
import PerformanceMetrics from '@/components/admin/PerformanceMetrics';

const AdminDashboard = () => {
  const stats = [
    { 
      icon: Users, 
      label: "Active Users", 
      value: "12,456", 
      change: "+12.3%", 
      trend: 'up' as const,
      description: "vs last month"
    },
    { 
      icon: BookOpen, 
      label: "Total Simulations", 
      value: "524", 
      change: "+8.7%", 
      trend: 'up' as const,
      description: "new this month"
    },
    { 
      icon: TrendingUp, 
      label: "Completion Rate", 
      value: "87.3%", 
      change: "+5.1%", 
      trend: 'up' as const,
      description: "improvement"
    },
    { 
      icon: Award, 
      label: "Certificates Issued", 
      value: "8,924", 
      change: "+15.2%", 
      trend: 'up' as const,
      description: "this quarter"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your platform and monitor performance</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <QuickActions />
        </div>

        {/* Main Content Tabs */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:grid-cols-6">
              <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
              <TabsTrigger value="simulations" className="text-sm">Simulations</TabsTrigger>
              <TabsTrigger value="users" className="text-sm">Users</TabsTrigger>
              <TabsTrigger value="reviews" className="text-sm">Reviews</TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm">Analytics</TabsTrigger>
              <TabsTrigger value="content" className="text-sm">Content</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <PerformanceMetrics />
                </div>
                <div>
                  <ActivityFeed />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="simulations" className="space-y-6">
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Simulation Management</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Create, edit, and manage all your simulations. Track performance and user engagement.
                </p>
                <Button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600">
                  Create New Simulation
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">User Management</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  View and manage all platform users, their progress, and access levels.
                </p>
                <Button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600">
                  Manage Users
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="text-center py-12">
                <Award className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Submission Reviews</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Review student submissions, provide feedback, and approve certificates.
                </p>
                <Button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600">
                  Review Submissions
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Analytics & Reports</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  View detailed analytics, generate reports, and track platform performance.
                </p>
                <Button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600">
                  View Analytics
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <div className="text-center py-12">
                <Settings className="w-16 h-16 text-purple-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Content Management</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Manage media library, email templates, and blog content.
                </p>
                <Button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600">
                  Manage Content
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

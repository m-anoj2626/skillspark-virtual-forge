
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  User, 
  BookOpen, 
  Award, 
  AlertCircle,
  ChevronRight 
} from 'lucide-react';

const ActivityFeed = () => {
  const activities = [
    {
      id: 1,
      type: 'submission',
      icon: BookOpen,
      title: 'New submission received',
      description: 'Sarah Johnson submitted "Full-Stack Project"',
      time: '2 minutes ago',
      priority: 'high',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      type: 'user',
      icon: User,
      title: 'New user registration',
      description: 'Mike Chen joined the platform',
      time: '15 minutes ago',
      priority: 'medium',
      color: 'bg-green-500'
    },
    {
      id: 3,
      type: 'certificate',
      icon: Award,
      title: 'Certificate issued',
      description: 'Emily Davis completed "React Development"',
      time: '1 hour ago',
      priority: 'low',
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      type: 'alert',
      icon: AlertCircle,
      title: 'System alert',
      description: 'Storage usage at 85% capacity',
      time: '2 hours ago',
      priority: 'high',
      color: 'bg-red-500'
    }
  ];

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: 'bg-red-100 text-red-700 border-red-200',
      medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      low: 'bg-green-100 text-green-700 border-green-200'
    };
    return variants[priority as keyof typeof variants] || variants.low;
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-purple-600" />
          Recent Activity
        </CardTitle>
        <Button variant="ghost" size="sm">
          View All
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
            <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center flex-shrink-0`}>
              <activity.icon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                    {activity.title}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{activity.time}</p>
                </div>
                <Badge variant="outline" className={`text-xs ${getPriorityBadge(activity.priority)}`}>
                  {activity.priority}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Plus, 
  Settings, 
  Upload, 
  FileText, 
  Users, 
  Mail,
  BarChart3,
  Download
} from 'lucide-react';

const QuickActions = () => {
  const actions = [
    { icon: Plus, label: 'New Simulation', variant: 'default' as const, gradient: true },
    { icon: Users, label: 'Manage Users', variant: 'outline' as const },
    { icon: FileText, label: 'Review Submissions', variant: 'outline' as const },
    { icon: Upload, label: 'Upload Content', variant: 'outline' as const },
    { icon: Mail, label: 'Send Notifications', variant: 'outline' as const },
    { icon: BarChart3, label: 'Analytics', variant: 'outline' as const },
    { icon: Download, label: 'Export Data', variant: 'outline' as const },
    { icon: Settings, label: 'Settings', variant: 'outline' as const },
  ];

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </div>
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className={`h-auto p-4 flex-col gap-2 hover:scale-105 transition-transform duration-200 ${
                action.gradient ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white' : ''
              }`}
            >
              <action.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;

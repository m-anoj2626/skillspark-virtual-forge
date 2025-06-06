
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const PerformanceMetrics = () => {
  const metrics = [
    {
      label: 'Platform Usage',
      value: '94.2%',
      change: '+2.4%',
      trend: 'up' as const,
      description: 'vs last month'
    },
    {
      label: 'Avg. Completion Rate',
      value: '87.5%',
      change: '+5.2%',
      trend: 'up' as const,
      description: 'vs last month'
    },
    {
      label: 'User Satisfaction',
      value: '4.8/5',
      change: '0%',
      trend: 'neutral' as const,
      description: 'stable rating'
    },
    {
      label: 'Response Time',
      value: '1.2s',
      change: '-0.3s',
      trend: 'up' as const,
      description: 'improved'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-600" />;
      default: return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          Performance Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="p-4 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-blue-50 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">{metric.label}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                  {metric.change}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">{metric.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceMetrics;

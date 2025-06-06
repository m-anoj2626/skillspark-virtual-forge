
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Star, 
  Users, 
  Award,
  ArrowRight,
  Play
} from 'lucide-react';

interface SimulationCardProps {
  title: string;
  category: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  enrolledCount: number;
  description: string;
  skills: string[];
  image: string;
  color: string;
}

const SimulationCard: React.FC<SimulationCardProps> = ({
  title,
  category,
  duration,
  difficulty,
  rating,
  enrolledCount,
  description,
  skills,
  image,
  color
}) => {
  const getDifficultyColor = (level: string) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-700 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden glass-card animate-scale-in">
      <div className="relative">
        {/* Header Image/Gradient */}
        <div className={`h-48 bg-gradient-to-br ${color} relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-gray-800">
              {category}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className={`${getDifficultyColor(difficulty)} bg-white/90`}>
              {difficulty}
            </Badge>
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          {/* Stats Row */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {duration}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500" />
              {rating}
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {enrolledCount.toLocaleString()}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.slice(0, 3).map((skill, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="text-xs bg-purple-50 text-purple-700 border-purple-200"
              >
                {skill}
              </Badge>
            ))}
            {skills.length > 3 && (
              <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600 border-gray-200">
                +{skills.length - 3} more
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group-hover:shadow-lg transition-all duration-300"
            >
              Start Simulation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              Preview
            </Button>
          </div>

          {/* Certificate Badge */}
          <div className="flex items-center gap-2 mt-4 text-xs text-gray-600">
            <Award className="w-4 h-4 text-yellow-500" />
            Certificate upon completion
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default SimulationCard;

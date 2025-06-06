
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  ChevronDown,
  Zap,
  Users,
  BookOpen,
  Award
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { 
      label: 'Simulations', 
      href: '#simulations',
      hasDropdown: true,
      icon: Zap
    },
    { 
      label: 'Industries', 
      href: '#industries',
      hasDropdown: true,
      icon: BookOpen
    },
    { 
      label: 'For Students', 
      href: '#students',
      icon: Users
    },
    { 
      label: 'Certifications', 
      href: '#certifications',
      icon: Award
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gradient-purple">SkillSpark</span>
              <Badge variant="secondary" className="ml-2 text-xs bg-yellow-100 text-yellow-700 border-yellow-200">
                Beta
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <a 
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {/* Dropdown indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 hover:text-purple-600">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 bg-white/95 backdrop-blur-md">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              
              <div className="px-4 pt-4 border-t border-purple-100 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-gray-700">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

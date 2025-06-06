
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Zap,
  Code,
  Target,
  Shield,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { 
      label: 'SIMULATIONS', 
      href: '/#simulations',
      icon: Code
    },
    { 
      label: 'INDUSTRIES', 
      href: '/industries',
      icon: Target
    },
    { 
      label: 'ABOUT', 
      href: '/about',
      icon: Shield
    },
    { 
      label: 'DASHBOARD', 
      href: '/dashboard',
      icon: Cpu
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b-2 border-pink-500">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 clip-path-polygon relative">
              <div className="absolute inset-1 bg-black flex items-center justify-center">
                <Zap className="w-6 h-6 text-pink-500" />
              </div>
            </div>
            <div>
              <span className="text-3xl font-bold text-neon tracking-wider">SKILLFORGE</span>
              <Badge variant="secondary" className="ml-2 text-xs bg-pink-500 text-black border-0 font-bold">
                ALPHA
              </Badge>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link 
                key={index}
                to={item.href}
                className="relative group px-6 py-3 text-white hover:text-pink-400 transition-all duration-300 font-bold tracking-wider"
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-white hover:text-pink-400 font-bold tracking-wider">
                LOGIN
              </Button>
            </Link>
            <Link to="/auth">
              <button className="btn-aggressive">
                START NOW
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white hover:text-pink-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-pink-500/30 bg-black/95 backdrop-blur-md">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-white hover:text-pink-400 hover:bg-pink-500/10 transition-colors font-bold tracking-wider"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
              
              <div className="px-4 pt-4 border-t border-pink-500/30 space-y-3">
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start text-white font-bold">
                    LOGIN
                  </Button>
                </Link>
                <Link to="/auth" onClick={() => setIsOpen(false)}>
                  <button className="btn-aggressive w-full">
                    START NOW
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

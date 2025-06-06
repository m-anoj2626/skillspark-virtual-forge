
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Zap, 
  Mail, 
  Lock, 
  User, 
  Chrome, 
  Linkedin,
  ArrowRight,
  Shield
} from 'lucide-react';

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle auth logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-cyber-grid flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      {/* Dynamic Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" 
          style={{
            backgroundSize: '50px 50px',
            backgroundImage: 'linear-gradient(0deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 110, 0.1) 1px, transparent 1px)',
            backgroundPosition: 'center center'
          }}>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-orange-500 clip-path-polygon relative flex items-center justify-center">
              <div className="absolute inset-1 bg-black flex items-center justify-center">
                <Zap className="w-8 h-8 text-pink-500" />
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-neon font-rajdhani tracking-wider">SKILLFORGE</h1>
              <Badge className="text-xs bg-gradient-to-r from-pink-500 to-orange-500 text-black border-0 font-bold">
                ALPHA ACCESS
              </Badge>
            </div>
          </div>
          <p className="text-gray-400 font-mono text-sm mt-2">SECURE AUTHENTICATION PORTAL</p>
        </div>

        <Card className="aggressive-card border-0 shadow-2xl overflow-visible">
          <CardHeader className="text-center border-b border-pink-500/30 pb-4">
            <CardTitle className="text-2xl font-bold text-white font-rajdhani tracking-wider">ACCESS CONTROL</CardTitle>
          </CardHeader>

          <CardContent className="pt-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/50 border border-pink-500/30">
                <TabsTrigger 
                  value="login" 
                  className="font-rajdhani tracking-wider font-bold data-[state=active]:bg-gradient-to-r from-pink-500/20 to-orange-500/20 data-[state=active]:text-pink-400"
                >
                  SIGN IN
                </TabsTrigger>
                <TabsTrigger 
                  value="register" 
                  className="font-rajdhani tracking-wider font-bold data-[state=active]:bg-gradient-to-r from-pink-500/20 to-orange-500/20 data-[state=active]:text-pink-400"
                >
                  REGISTER
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="animate-fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-mono text-xs tracking-wider">EMAIL</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-pink-500" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your-email@domain.com"
                        className="pl-11 bg-black/70 border-pink-500/50 focus:border-pink-500 h-12 font-mono text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white font-mono text-xs tracking-wider">PASSWORD</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-pink-500" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••••••"
                        className="pl-11 bg-black/70 border-pink-500/50 focus:border-pink-500 h-12 font-mono text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="remember" className="w-4 h-4 accent-pink-500" />
                      <label htmlFor="remember" className="text-gray-400 text-xs font-mono">REMEMBER ME</label>
                    </div>
                    <a href="#" className="text-pink-500 text-xs font-mono hover:text-pink-400 transition-colors">FORGOT PASSWORD?</a>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-aggressive w-full mt-6 group"
                    disabled={isLoading}
                  >
                    <span className="flex items-center justify-center">
                      {isLoading ? "AUTHENTICATING..." : "ACCESS SYSTEM"}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </TabsContent>

              <TabsContent value="register" className="animate-fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white font-mono text-xs tracking-wider">FULL NAME</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-pink-500" />
                      <Input 
                        id="name" 
                        type="text" 
                        placeholder="Your Full Name"
                        className="pl-11 bg-black/70 border-pink-500/50 focus:border-pink-500 h-12 font-mono text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-white font-mono text-xs tracking-wider">EMAIL</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-pink-500" />
                      <Input 
                        id="register-email" 
                        type="email" 
                        placeholder="your-email@domain.com"
                        className="pl-11 bg-black/70 border-pink-500/50 focus:border-pink-500 h-12 font-mono text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-white font-mono text-xs tracking-wider">PASSWORD</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-pink-500" />
                      <Input 
                        id="register-password" 
                        type="password" 
                        placeholder="••••••••••••"
                        className="pl-11 bg-black/70 border-pink-500/50 focus:border-pink-500 h-12 font-mono text-white"
                        required
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-aggressive w-full mt-6 group"
                    disabled={isLoading}
                  >
                    <span className="flex items-center justify-center">
                      {isLoading ? "CREATING ACCESS..." : "CREATE ACCOUNT"}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </TabsContent>
            </Tabs>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-pink-500/30" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-black px-4 text-xs text-gray-400 font-mono">ALTERNATIVE ACCESS</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="flex items-center justify-center space-x-3 px-4 py-3 bg-black/50 border border-pink-500/30 hover:bg-pink-500/10 transition-colors">
                  <Chrome className="h-5 w-5 text-pink-500" />
                  <span className="text-sm font-mono text-white">GOOGLE</span>
                </button>
                <button className="flex items-center justify-center space-x-3 px-4 py-3 bg-black/50 border border-pink-500/30 hover:bg-pink-500/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-pink-500" />
                  <span className="text-sm font-mono text-white">LINKEDIN</span>
                </button>
              </div>
            </div>

            {/* Security Info */}
            <div className="mt-8 p-4 border border-pink-500/30 bg-black/50">
              <div className="flex items-center mb-3">
                <Shield className="h-5 w-5 text-pink-500 mr-3" />
                <p className="text-sm font-bold text-white font-rajdhani">ELITE ACCESS BENEFITS</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-300 font-mono">
                  <div className="w-1 h-1 bg-pink-500 mr-2"></div>
                  Access to 500+ combat simulations
                </div>
                <div className="flex items-center text-xs text-gray-300 font-mono">
                  <div className="w-1 h-1 bg-pink-500 mr-2"></div>
                  Military-grade skill certification
                </div>
                <div className="flex items-center text-xs text-gray-300 font-mono">
                  <div className="w-1 h-1 bg-pink-500 mr-2"></div>
                  Advanced analytics dashboard
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-gray-400 mt-6 font-mono">
          SECURITY PROTOCOL: BY ACCESSING THIS SYSTEM YOU AGREE TO OUR <a href="#" className="text-pink-500 hover:text-pink-400">TERMS OF SERVICE</a>
        </p>
      </div>
    </div>
  );
};

export default Auth;

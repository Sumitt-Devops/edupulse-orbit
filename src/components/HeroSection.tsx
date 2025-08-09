import { Button } from "./ui/enhanced-button";
import { Play, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "10M+", label: "Active Learners" },
    { icon: BookOpen, value: "5000+", label: "Expert Courses" },
    { icon: Award, value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">#1 E-Learning Platform</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-poppins font-bold text-white leading-tight">
                Transform Your
                <span className="block text-yellow-300">Learning Journey</span>
              </h1>
              
              <p className="text-xl text-white/90 max-w-lg">
                Join millions of learners worldwide. Access expert-led courses, 
                interactive content, and personalized learning paths designed to 
                accelerate your growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="glass" size="xl" className="group">
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Learning Free
              </Button>
              <Button variant="outline" size="xl" className="bg-white text-primary border-white hover:bg-white/90">
                Explore Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-poppins font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-strong">
              <img
                src={heroImage}
                alt="Students learning with EduPulse"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success rounded-2xl p-4 shadow-medium animate-bounce-soft">
                <Award className="h-8 w-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-warning rounded-2xl p-4 shadow-medium animate-bounce-soft" style={{ animationDelay: "1s" }}>
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
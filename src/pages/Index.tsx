import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/enhanced-button";
import { ArrowRight, CheckCircle, Zap, Shield, Globe } from "lucide-react";

const Index = () => {
  const featuredCourses = [
    {
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      rating: 4.7,
      students: 45230,
      duration: "65 hours",
      price: "$89.99",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop",
      level: "Beginner",
      category: "Programming"
    },
    {
      title: "Machine Learning A-Z™",
      instructor: "Kirill Eremenko",
      rating: 4.5,
      students: 67890,
      duration: "44 hours",
      price: "$94.99",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      level: "Intermediate",
      category: "Data Science"
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Daniel Walter Scott",
      rating: 4.8,
      students: 34567,
      duration: "32 hours",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
      level: "Beginner",
      category: "Design"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with real-world experience"
    },
    {
      icon: CheckCircle,
      title: "Verified Certificates",
      description: "Earn recognized certificates to boost your career prospects"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connect with millions of learners from around the world"
    },
    {
      icon: Shield,
      title: "Lifetime Access",
      description: "Access your courses anytime, anywhere, for life"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold mb-4">
              Why Choose <span className="text-gradient">EduPulse</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join the platform trusted by millions of learners worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gradient-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-poppins font-bold mb-4">Featured Courses</h2>
              <p className="text-xl text-muted-foreground">
                Handpicked courses to accelerate your learning
              </p>
            </div>
            <Button variant="hero" size="lg" asChild>
              <a href="/courses">
                View All Courses
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join millions of learners who have advanced their careers with EduPulse. 
            Start your learning journey today with our expert-led courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="xl">
              Start Free Trial
            </Button>
            <Button variant="outline" size="xl" className="bg-white text-primary border-white hover:bg-white/90">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <ArrowRight className="h-6 w-6 text-white rotate-45" />
              </div>
              <span className="text-2xl font-poppins font-bold">EduPulse</span>
            </div>
            <p className="text-white/70 mb-6">
              Empowering learners worldwide with quality education.
            </p>
            <p className="text-white/50 text-sm">
              © 2024 EduPulse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

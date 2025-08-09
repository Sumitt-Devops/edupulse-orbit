import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/enhanced-button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Clock, 
  Trophy, 
  TrendingUp, 
  Play,
  Calendar,
  Users,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const stats = [
    { icon: BookOpen, label: "Enrolled Courses", value: "12", color: "bg-primary" },
    { icon: Trophy, label: "Completed", value: "8", color: "bg-success" },
    { icon: Clock, label: "Hours Learned", value: "156", color: "bg-warning" },
    { icon: TrendingUp, label: "Streak Days", value: "23", color: "bg-destructive" },
  ];

  const currentCourses = [
    {
      title: "React - The Complete Guide",
      instructor: "Maximilian Schwarzmüller",
      progress: 65,
      nextLesson: "Redux State Management",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      timeLeft: "2h 30m"
    },
    {
      title: "UI/UX Design Masterclass",
      instructor: "Daniel Walter Scott",
      progress: 45,
      nextLesson: "Color Theory Basics",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=300&h=200&fit=crop",
      timeLeft: "1h 45m"
    },
    {
      title: "Python for Data Science",
      instructor: "Jose Portilla",
      progress: 80,
      nextLesson: "Machine Learning Intro",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop",
      timeLeft: "45m"
    }
  ];

  const achievements = [
    { title: "Fast Learner", description: "Completed 5 courses in a month", icon: "🚀" },
    { title: "Consistent", description: "7-day learning streak", icon: "🔥" },
    { title: "Explorer", description: "Tried 3 different categories", icon: "🌟" },
  ];

  const upcomingEvents = [
    { title: "Live Q&A Session", time: "Today, 3:00 PM", type: "live" },
    { title: "Web Development Workshop", time: "Tomorrow, 10:00 AM", type: "workshop" },
    { title: "Assignment Due: React Project", time: "In 2 days", type: "deadline" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-poppins font-bold text-white">
                Welcome back, Sarah! 👋
              </h1>
              <p className="text-white/90 mt-2">
                Ready to continue your learning journey?
              </p>
            </div>
            <Button variant="glass" size="lg">
              <Calendar className="h-5 w-5 mr-2" />
              View Schedule
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-card rounded-2xl p-6 shadow-soft animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center space-x-3">
                <div className={cn("p-3 rounded-xl", stat.color)}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-poppins font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6">Continue Learning</h2>
              <div className="space-y-6">
                {currentCourses.map((course, index) => (
                  <div key={index} className="bg-gradient-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-start space-x-4">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-20 h-20 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-poppins font-semibold text-lg mb-1">{course.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">by {course.instructor}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground">Next:</p>
                            <p className="font-medium">{course.nextLesson}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm text-muted-foreground">{course.timeLeft} left</span>
                            <Button variant="hero" size="sm">
                              <Play className="h-4 w-4 mr-2" />
                              Continue
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6">Recent Achievements</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-gradient-card rounded-2xl p-6 text-center shadow-soft animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl mb-3">{achievement.icon}</div>
                    <h3 className="font-poppins font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <section>
              <h3 className="text-xl font-poppins font-semibold mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-gradient-card rounded-xl p-4 shadow-soft animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1">
                        {event.type === "live" && <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>}
                        {event.type === "workshop" && <Users className="h-4 w-4 text-primary" />}
                        {event.type === "deadline" && <Clock className="h-4 w-4 text-warning" />}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{event.title}</p>
                        <p className="text-muted-foreground text-xs">{event.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section>
              <h3 className="text-xl font-poppins font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse New Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="h-4 w-4 mr-2" />
                  Rate Recent Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Join Study Groups
                </Button>
              </div>
            </section>

            {/* Performance Card */}
            <section className="bg-gradient-success rounded-2xl p-6 text-center shadow-soft">
              <Trophy className="h-8 w-8 text-white mx-auto mb-3" />
              <h3 className="text-white font-poppins font-semibold text-lg mb-2">
                Top 10% Learner!
              </h3>
              <p className="text-white/90 text-sm mb-4">
                You're performing better than 90% of learners this month.
              </p>
              <Button variant="glass" size="sm">
                View Details
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
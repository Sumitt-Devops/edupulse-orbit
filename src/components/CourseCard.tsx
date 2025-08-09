import { Button } from "./ui/enhanced-button";
import { Clock, Users, Star, Play } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
  image: string;
  level: string;
  category: string;
}

const CourseCard = ({
  title,
  instructor,
  rating,
  students,
  duration,
  price,
  image,
  level,
  category,
}: CourseCardProps) => {
  return (
    <div className="bg-gradient-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="glass" size="icon" className="rounded-full">
            <Play className="h-5 w-5" />
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Level Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 text-foreground text-xs font-medium px-2 py-1 rounded-full">
            {level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-3">
          <h3 className="font-poppins font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm">
            by {instructor}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{rating}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{students.toLocaleString()}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-2">
            <div className="space-y-1">
              <span className="text-2xl font-poppins font-bold text-primary">
                {price}
              </span>
            </div>
            
            <Button variant="hero" size="sm" className="group-hover:scale-105">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
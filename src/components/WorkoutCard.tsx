import { motion } from "framer-motion";
import { Play, Clock, Flame, Dumbbell, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkoutCardProps {
  title: string;
  duration: string;
  calories: string;
  level: string;
  category: string;
  exercises: number;
  image?: string;
  className?: string;
  onClick?: () => void;
  id?: string;
}

const levelColors: Record<string, string> = {
  Beginner: "bg-success/20 text-success",
  Intermediate: "bg-warning/20 text-warning",
  Advanced: "bg-destructive/20 text-destructive",
};

const WorkoutCard = ({
  title,
  duration,
  calories,
  level,
  category,
  exercises,
  image,
  className,
  onClick,
  id,
}: WorkoutCardProps) => {
  const isCompleted = id ? !!((() => { try { return JSON.parse(localStorage.getItem("fitpulse_completed") || "{}"); } catch { return {}; } })()[id]) : false;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={cn(
        "glass-card overflow-hidden cursor-pointer group transition-all duration-300 hover:border-primary/30",
        className
      )}
    >
      {/* Image Area */}
      <div className="relative h-40 bg-secondary overflow-hidden">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", levelColors[level] || "bg-muted text-muted-foreground")}>
            {level}
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-success/90 text-success-foreground">
              <CheckCircle2 className="w-3 h-3" /> Done
            </span>
          )}
        </div>
        <button className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{category}</p>
        <h3 className="font-display text-base font-semibold text-foreground mb-3">{title}</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {duration}
          </span>
          <span className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5" /> {calories}
          </span>
          <span className="flex items-center gap-1">
            <Dumbbell className="w-3.5 h-3.5" /> {exercises}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkoutCard;

import { motion } from "framer-motion";
import { Trophy, ChevronRight, Calendar, Flame, Clock } from "lucide-react";

const programs = [
  {
    title: "30-Day Fat Burn Challenge",
    description: "Torch fat with progressive HIIT and cardio workouts designed to maximize calorie burn.",
    duration: "30 days",
    level: "Intermediate",
    workoutsPerWeek: 5,
    calories: "8,000+",
    color: "from-destructive/20 to-destructive/5",
  },
  {
    title: "Beginner Strength Builder",
    description: "Build a solid foundation of strength with bodyweight exercises and progressive overload.",
    duration: "8 weeks",
    level: "Beginner",
    workoutsPerWeek: 3,
    calories: "12,000+",
    color: "from-success/20 to-success/5",
  },
  {
    title: "Flexibility & Mobility",
    description: "Improve your range of motion with daily yoga and dynamic stretching routines.",
    duration: "4 weeks",
    level: "All Levels",
    workoutsPerWeek: 6,
    calories: "3,000+",
    color: "from-info/20 to-info/5",
  },
  {
    title: "HIIT Bootcamp",
    description: "Intense interval training that pushes your limits and builds explosive fitness.",
    duration: "6 weeks",
    level: "Advanced",
    workoutsPerWeek: 4,
    calories: "15,000+",
    color: "from-primary/20 to-primary/5",
  },
];

const Programs = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Programs</h1>
        <p className="text-sm text-muted-foreground">Structured plans to reach your goals</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {programs.map((program, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass-card overflow-hidden cursor-pointer group"
          >
            <div className={`h-2 bg-gradient-to-r ${program.color}`} />
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">{program.title}</h3>
                    <span className="text-xs text-muted-foreground">{program.level}</span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {program.duration}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {program.workoutsPerWeek}x/week</span>
                <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5" /> {program.calories}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;

import { motion } from "framer-motion";
import {
  Flame,
  Dumbbell,
  Clock,
  TrendingUp,
  ChevronRight,
  Zap,
  Target,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import StatCard from "@/components/StatCard";
import WorkoutCard from "@/components/WorkoutCard";
import BMICalculator from "@/components/BMICalculator";
import WaterTracker from "@/components/WaterTracker";
import heroImage from "@/assets/hero-workout.jpg";
import hiitImage from "@/assets/workout-hiit.jpg";
import yogaImage from "@/assets/workout-yoga.jpg";
import strengthImage from "@/assets/workout-strength.jpg";

interface IndexProps {
  userName: string;
}

const todayWorkouts = [
  {
    id: "full-body-hiit",
    title: "Morning HIIT Blast",
    duration: "25 min",
    calories: "320 kcal",
    level: "Intermediate",
    category: "HIIT",
    exercises: 8,
    image: hiitImage,
  },
  {
    id: "morning-yoga-flow",
    title: "Core & Flexibility Flow",
    duration: "20 min",
    calories: "180 kcal",
    level: "Beginner",
    category: "Yoga",
    exercises: 10,
    image: yogaImage,
  },
  {
    id: "push-up-mastery",
    title: "Upper Body Strength",
    duration: "30 min",
    calories: "280 kcal",
    level: "Intermediate",
    category: "Strength",
    exercises: 12,
    image: strengthImage,
  },
];

const Index = ({ userName }: IndexProps) => {
  const navigate = useNavigate();

  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17) return "Good evening";

    return "Good night";
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-2xl overflow-hidden h-56 lg:h-64"
      >
        <img
          src={heroImage}
          alt="Workout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

        <div className="absolute inset-0 flex items-center p-8">
          <div>
            <p className="text-sm text-primary font-medium mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {getGreeting()},{" "}
              <span className="font-semibold">{userName}</span> 👋
            </p>

            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Let's crush your
              <br />
              <span className="text-gradient">workout today</span>
            </h1>

            <p className="text-sm text-muted-foreground">
              3 workouts scheduled · 825 kcal goal
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Flame}
          label="Calories Burned"
          value="1,284"
          subtitle="This week"
          trend="+12% from last week"
        />
        <StatCard
          icon={Dumbbell}
          label="Workouts Done"
          value="12"
          subtitle="This month"
          trend="On track!"
        />
        <StatCard
          icon={Clock}
          label="Active Minutes"
          value="340"
          subtitle="This week"
          trend="+8% improvement"
        />
        <StatCard
          icon={TrendingUp}
          label="Current Streak"
          value="7"
          subtitle="Days in a row"
          trend="Personal best! 🔥"
        />
      </div>

      {/* BMI + Water */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BMICalculator />
        <WaterTracker />
      </div>

      {/* Today's Workouts */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Today's Workouts
          </h2>

          <button
            onClick={() => navigate("/workouts")}
            className="text-xs text-primary flex items-center gap-1 hover:underline"
          >
            View all <ChevronRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {todayWorkouts.map((workout, i) => (
            <div
              key={i}
              onClick={() => navigate(`/workouts/${workout.id}`)}
              className="cursor-pointer hover:scale-[1.02] transition"
            >
              <WorkoutCard {...workout} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
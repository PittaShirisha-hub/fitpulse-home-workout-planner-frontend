import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import WorkoutCard from "@/components/WorkoutCard";
import { allWorkouts } from "@/data/workouts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["All", "Strength", "HIIT", "Yoga", "Cardio", "Stretching"];

const Workouts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const filtered = activeCategory === "All" ? allWorkouts : allWorkouts.filter(w => w.category === activeCategory);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Workouts</h1>
        <p className="text-sm text-muted-foreground">Choose a workout that fits your goals</p>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {filtered.map((workout, i) => (
          <WorkoutCard
            key={workout.id}
            {...workout}
            onClick={() => navigate(`/workouts/${workout.id}`)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Workouts;

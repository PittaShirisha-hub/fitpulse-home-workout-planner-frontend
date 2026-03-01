import { motion } from "framer-motion";
import { Heart, Moon, Wind, Droplets, Sparkles } from "lucide-react";

const tips = [
  {
    icon: Moon,
    title: "Sleep 7-9 Hours",
    description: "Quality sleep is essential for muscle recovery and hormone regulation. Aim for consistent sleep and wake times.",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily. Increase intake on workout days to replenish lost fluids.",
  },
  {
    icon: Wind,
    title: "Deep Breathing",
    description: "Practice 5 minutes of deep breathing after workouts to lower cortisol and promote relaxation.",
  },
  {
    icon: Sparkles,
    title: "Active Recovery",
    description: "Light walking, gentle yoga, or foam rolling on rest days helps improve blood flow and reduce soreness.",
  },
];

const stretches = [
  { name: "Hamstring Stretch", duration: "30 sec each side", muscle: "Legs" },
  { name: "Cat-Cow Stretch", duration: "1 min", muscle: "Back" },
  { name: "Chest Opener", duration: "30 sec", muscle: "Chest" },
  { name: "Hip Flexor Stretch", duration: "30 sec each side", muscle: "Hips" },
  { name: "Child's Pose", duration: "1 min", muscle: "Full Body" },
  { name: "Neck Rolls", duration: "30 sec each direction", muscle: "Neck" },
];

const Recovery = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Recovery & Wellness</h1>
        <p className="text-sm text-muted-foreground">Rest well to perform better</p>
      </div>

      {/* Wellness Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-5 flex gap-4"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <tip.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{tip.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Post-Workout Stretches */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-5"
      >
        <h2 className="font-display text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Heart className="w-4 h-4 text-primary" /> Post-Workout Stretching Routine
        </h2>
        <div className="space-y-3">
          {stretches.map((s, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-muted-foreground">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.muscle}</p>
                </div>
              </div>
              <span className="text-xs text-primary font-medium">{s.duration}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Recovery;

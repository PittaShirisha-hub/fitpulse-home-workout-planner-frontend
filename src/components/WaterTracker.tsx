import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "fitpulse_water_intake";
const DAILY_GOAL = 8;

const WaterTracker = () => {
  const [glasses, setGlasses] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const { count, date } = JSON.parse(saved);
      if (date === new Date().toDateString()) return count;
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ count: glasses, date: new Date().toDateString() })
    );
  }, [glasses]);

  const percentage = Math.min((glasses / DAILY_GOAL) * 100, 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="glass-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Droplets className="w-4 h-4 text-info" />
          <h2 className="font-display text-sm font-semibold text-foreground">Water Intake</h2>
        </div>
        <span className="text-xs text-muted-foreground">{glasses}/{DAILY_GOAL} glasses</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="relative h-3 w-full rounded-full bg-secondary overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-info"
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {glasses >= DAILY_GOAL
              ? "🎉 Daily goal reached!"
              : `${DAILY_GOAL - glasses} more to reach your goal`}
          </p>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setGlasses((g: number) => g + 1)}
          className="shrink-0 border-info/30 hover:bg-info/10"
        >
          <Plus className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default WaterTracker;

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";
import { TrendingUp, Flame, Dumbbell, Clock, Award } from "lucide-react";
import StatCard from "@/components/StatCard";

const weeklyData = [
  { day: "Mon", calories: 320, minutes: 45 },
  { day: "Tue", calories: 280, minutes: 35 },
  { day: "Wed", calories: 400, minutes: 50 },
  { day: "Thu", calories: 350, minutes: 40 },
  { day: "Fri", calories: 0, minutes: 0 },
  { day: "Sat", calories: 0, minutes: 0 },
  { day: "Sun", calories: 0, minutes: 0 },
];

const monthlyProgress = [
  { week: "W1", workouts: 4, goal: 5 },
  { week: "W2", workouts: 5, goal: 5 },
  { week: "W3", workouts: 3, goal: 5 },
  { week: "W4", workouts: 4, goal: 5 },
];

const milestones = [
  { label: "First Workout", done: true },
  { label: "7-Day Streak", done: true },
  { label: "50 Workouts", done: false, progress: "38/50" },
  { label: "10K Calories", done: false, progress: "7,284/10,000" },
];

const Progress = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Progress</h1>
        <p className="text-sm text-muted-foreground">Track your fitness journey over time</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={Flame} label="Total Calories" value="7,284" subtitle="All time" />
        <StatCard icon={Dumbbell} label="Total Workouts" value="38" subtitle="All time" />
        <StatCard icon={Clock} label="Total Hours" value="24.5" subtitle="All time" />
        <StatCard icon={TrendingUp} label="Best Streak" value="7 days" subtitle="Current" />
      </div>

      {/* Calories Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-5"
      >
        <h2 className="font-display text-sm font-semibold text-foreground mb-4">Calories Burned This Week</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 18%, 10%)",
                  border: "1px solid hsl(220, 15%, 18%)",
                  borderRadius: "8px",
                  color: "hsl(0, 0%, 95%)",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="calories" fill="hsl(82, 85%, 55%)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Active Minutes Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-card p-5"
      >
        <h2 className="font-display text-sm font-semibold text-foreground mb-4">Active Minutes</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={weeklyData}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "hsl(220, 10%, 50%)", fontSize: 12 }} />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(220, 18%, 10%)",
                  border: "1px solid hsl(220, 15%, 18%)",
                  borderRadius: "8px",
                  color: "hsl(0, 0%, 95%)",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="minutes"
                stroke="hsl(200, 80%, 55%)"
                fill="hsl(200, 80%, 55%)"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-5"
      >
        <h2 className="font-display text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-primary" /> Milestones
        </h2>
        <div className="space-y-3">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${m.done ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
                  {m.done ? "✓" : i + 1}
                </div>
                <span className={`text-sm ${m.done ? "text-foreground" : "text-muted-foreground"}`}>{m.label}</span>
              </div>
              {m.progress && <span className="text-xs text-muted-foreground">{m.progress}</span>}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Progress;

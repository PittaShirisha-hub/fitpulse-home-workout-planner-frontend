import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, SkipForward } from "lucide-react";

type TimerMode = "work" | "rest";

const presets = [
  { label: "Tabata", work: 20, rest: 10, rounds: 8 },
  { label: "HIIT 30/30", work: 30, rest: 30, rounds: 10 },
  { label: "EMOM", work: 50, rest: 10, rounds: 12 },
  { label: "Custom", work: 45, rest: 15, rounds: 6 },
];

const TimerPage = () => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>("work");
  const [currentRound, setCurrentRound] = useState(1);
  const [timeLeft, setTimeLeft] = useState(presets[0].work);

  const preset = presets[selectedPreset];
  const totalTime = mode === "work" ? preset.work : preset.rest;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  const reset = useCallback(() => {
    setIsRunning(false);
    setMode("work");
    setCurrentRound(1);
    setTimeLeft(presets[selectedPreset].work);
  }, [selectedPreset]);

  useEffect(() => {
    reset();
  }, [selectedPreset, reset]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (mode === "work") {
            setMode("rest");
            return preset.rest;
          } else {
            if (currentRound >= preset.rounds) {
              setIsRunning(false);
              return 0;
            }
            setCurrentRound((r) => r + 1);
            setMode("work");
            return preset.work;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning, mode, currentRound, preset]);

  const skipInterval = () => {
    if (mode === "work") {
      setMode("rest");
      setTimeLeft(preset.rest);
    } else {
      if (currentRound >= preset.rounds) {
        setIsRunning(false);
        setTimeLeft(0);
        return;
      }
      setCurrentRound((r) => r + 1);
      setMode("work");
      setTimeLeft(preset.work);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Interval Timer</h1>
        <p className="text-sm text-muted-foreground">Stay on pace with timed intervals</p>
      </div>

      {/* Presets */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {presets.map((p, i) => (
          <button
            key={p.label}
            onClick={() => setSelectedPreset(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
              selectedPreset === i
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 flex flex-col items-center"
      >
        <span className={`text-xs font-bold uppercase tracking-widest mb-2 ${mode === "work" ? "text-primary" : "text-info"}`}>
          {mode === "work" ? "Work" : "Rest"}
        </span>

        {/* Circular Progress */}
        <div className="relative w-56 h-56 mb-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(220, 15%, 15%)" strokeWidth="6" />
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke={mode === "work" ? "hsl(82, 85%, 55%)" : "hsl(200, 80%, 55%)"}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 90}`}
              strokeDashoffset={`${2 * Math.PI * 90 * (1 - progress / 100)}`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-6xl font-bold text-foreground tabular-nums">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              Round {currentRound} of {preset.rounds}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button onClick={reset} className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground glow-primary transition-transform hover:scale-105"
          >
            {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
          </button>
          <button onClick={skipInterval} className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <SkipForward className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Preset Details */}
      <div className="glass-card p-5">
        <h2 className="font-display text-sm font-semibold text-foreground mb-3">{preset.label} Details</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="stat-number text-lg text-primary">{preset.work}s</p>
            <p className="text-xs text-muted-foreground">Work</p>
          </div>
          <div>
            <p className="stat-number text-lg text-info">{preset.rest}s</p>
            <p className="text-xs text-muted-foreground">Rest</p>
          </div>
          <div>
            <p className="stat-number text-lg text-foreground">{preset.rounds}</p>
            <p className="text-xs text-muted-foreground">Rounds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;

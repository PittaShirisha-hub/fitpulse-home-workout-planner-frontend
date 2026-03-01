import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const getBMICategory = (bmi: number) => {
  if (bmi < 18.5) return { label: "Underweight", color: "text-info" };
  if (bmi < 25) return { label: "Normal", color: "text-primary" };
  if (bmi < 30) return { label: "Overweight", color: "text-warning" };
  return { label: "Obese", color: "text-destructive" };
};

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(parseFloat((w / (h * h)).toFixed(1)));
    }
  };

  const category = bmi ? getBMICategory(bmi) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="glass-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="w-4 h-4 text-primary" />
        <h2 className="font-display text-sm font-semibold text-foreground">BMI Calculator</h2>
      </div>

      <form onSubmit={calculateBMI} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label className="text-xs text-muted-foreground">Height (cm)</Label>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="170"
              required
              className="bg-secondary border-border h-9 text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs text-muted-foreground">Weight (kg)</Label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="70"
              required
              className="bg-secondary border-border h-9 text-sm"
            />
          </div>
        </div>
        <Button type="submit" size="sm" className="w-full font-medium">
          Calculate BMI
        </Button>
      </form>

      {bmi !== null && category && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 rounded-lg bg-secondary text-center"
        >
          <p className="text-xs text-muted-foreground mb-1">Your BMI</p>
          <p className="font-display text-2xl font-bold text-foreground">{bmi}</p>
          <p className={`text-sm font-medium ${category.color}`}>({category.label})</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BMICalculator;

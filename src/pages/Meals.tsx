import { motion } from "framer-motion";
import MealCard from "@/components/MealCard";
import mealImage from "@/assets/meal-prep.jpg";
import { Apple, Droplets, Flame } from "lucide-react";

const meals = [
  { title: "Grilled Chicken & Quinoa Bowl", calories: 450, protein: 38, carbs: 42, fat: 12, mealType: "Lunch", image: mealImage },
  { title: "Greek Yogurt Parfait", calories: 280, protein: 20, carbs: 35, fat: 8, mealType: "Breakfast", image: mealImage },
  { title: "Salmon & Sweet Potato", calories: 520, protein: 42, carbs: 38, fat: 18, mealType: "Dinner", image: mealImage },
  { title: "Protein Smoothie Bowl", calories: 320, protein: 28, carbs: 30, fat: 10, mealType: "Snack", image: mealImage },
  { title: "Turkey Wrap with Veggies", calories: 380, protein: 32, carbs: 28, fat: 14, mealType: "Lunch", image: mealImage },
  { title: "Overnight Oats", calories: 350, protein: 15, carbs: 50, fat: 10, mealType: "Breakfast", image: mealImage },
];

const Meals = () => {
  const totalCalories = 2100;
  const consumed = 1250;
  const percentage = Math.round((consumed / totalCalories) * 100);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">Meal Plan</h1>
        <p className="text-sm text-muted-foreground">Nutrition that fuels your workouts</p>
      </div>

      {/* Daily Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-5"
      >
        <h2 className="font-display text-sm font-semibold text-foreground mb-4">Today's Nutrition</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Flame className="w-5 h-5 text-primary" />
            </div>
            <p className="stat-number text-xl text-foreground">{consumed}</p>
            <p className="text-xs text-muted-foreground">of {totalCalories} kcal</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-info/10 flex items-center justify-center mb-2">
              <Droplets className="w-5 h-5 text-info" />
            </div>
            <p className="stat-number text-xl text-foreground">6</p>
            <p className="text-xs text-muted-foreground">of 8 glasses</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-2">
              <Apple className="w-5 h-5 text-success" />
            </div>
            <p className="stat-number text-xl text-foreground">4</p>
            <p className="text-xs text-muted-foreground">of 5 meals</p>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Daily Calories</span>
            <span>{percentage}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-secondary">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full rounded-full bg-primary"
            />
          </div>
        </div>
      </motion.div>

      {/* Meal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {meals.map((meal, i) => (
          <MealCard key={i} {...meal} />
        ))}
      </div>
    </div>
  );
};

export default Meals;

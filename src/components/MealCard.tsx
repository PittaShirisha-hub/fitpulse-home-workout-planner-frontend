import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MealCardProps {
  title: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  image?: string;
  mealType: string;
  className?: string;
}

const MealCard = ({ title, calories, protein, carbs, fat, image, mealType, className }: MealCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className={cn("glass-card overflow-hidden cursor-pointer group", className)}
    >
      <div className="relative h-36 bg-secondary overflow-hidden">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
          {mealType}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-sm font-semibold text-foreground mb-3">{title}</h3>
        <div className="flex items-center justify-between text-xs">
          <div className="text-center">
            <p className="font-semibold text-foreground">{calories}</p>
            <p className="text-muted-foreground">kcal</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-info">{protein}g</p>
            <p className="text-muted-foreground">protein</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-warning">{carbs}g</p>
            <p className="text-muted-foreground">carbs</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-destructive">{fat}g</p>
            <p className="text-muted-foreground">fat</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MealCard;

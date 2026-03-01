import hiitImage from "@/assets/workout-hiit.jpg";
import yogaImage from "@/assets/workout-yoga.jpg";
import strengthImage from "@/assets/workout-strength.jpg";
import cardioImage from "@/assets/workout-cardio.jpg";

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  rest: string;
  description: string;
}

export interface Workout {
  id: string;
  title: string;
  duration: string;
  calories: string;
  level: string;
  category: string;
  exercises: number;
  image: string;
  description: string;
  exerciseList: Exercise[];
}

export const allWorkouts: Workout[] = [
  {
    id: "full-body-hiit",
    title: "Full Body HIIT",
    duration: "30 min",
    calories: "400 kcal",
    level: "Advanced",
    category: "HIIT",
    exercises: 12,
    image: hiitImage,
    description: "A high-intensity interval training session targeting every major muscle group. Push your limits with explosive movements and short rest periods.",
    exerciseList: [
      { name: "Jumping Jacks", sets: 3, reps: "30 sec", rest: "10 sec", description: "Stand with feet together, jump while spreading arms and legs, then return." },
      { name: "Burpees", sets: 3, reps: "10", rest: "20 sec", description: "Drop to a push-up, jump back up with arms overhead." },
      { name: "Mountain Climbers", sets: 3, reps: "30 sec", rest: "10 sec", description: "In plank position, alternate driving knees toward chest rapidly." },
      { name: "Squat Jumps", sets: 3, reps: "12", rest: "15 sec", description: "Perform a squat, then explode upward into a jump." },
      { name: "High Knees", sets: 3, reps: "30 sec", rest: "10 sec", description: "Run in place, driving knees up to hip height." },
      { name: "Push-Ups", sets: 3, reps: "15", rest: "15 sec", description: "Lower your chest to the floor and push back up, keeping core tight." },
      { name: "Plank Hold", sets: 3, reps: "30 sec", rest: "10 sec", description: "Hold a straight-arm or forearm plank with a tight core." },
      { name: "Lunge Jumps", sets: 3, reps: "10 each", rest: "15 sec", description: "Alternate jumping lunges, switching legs mid-air." },
      { name: "Bicycle Crunches", sets: 3, reps: "20", rest: "10 sec", description: "Lie on your back and alternate elbow-to-opposite-knee crunches." },
      { name: "Box Jumps (Step-Up)", sets: 3, reps: "10", rest: "15 sec", description: "Jump or step onto a sturdy elevated surface, then step back down." },
      { name: "Tricep Dips", sets: 3, reps: "12", rest: "15 sec", description: "Using a chair, lower and raise your body by bending your arms." },
      { name: "Cool-Down Stretch", sets: 1, reps: "2 min", rest: "—", description: "Gentle full-body stretching to bring heart rate down." },
    ],
  },
  {
    id: "morning-yoga-flow",
    title: "Morning Yoga Flow",
    duration: "20 min",
    calories: "150 kcal",
    level: "Beginner",
    category: "Yoga",
    exercises: 8,
    image: yogaImage,
    description: "Start your day with a calming yoga flow that improves flexibility, balance, and mental clarity. Perfect for all skill levels.",
    exerciseList: [
      { name: "Cat-Cow Stretch", sets: 1, reps: "1 min", rest: "—", description: "Alternate between arching and rounding your spine on all fours." },
      { name: "Downward Dog", sets: 1, reps: "45 sec", rest: "—", description: "Form an inverted V-shape, pressing heels toward the floor." },
      { name: "Warrior I", sets: 1, reps: "30 sec each", rest: "—", description: "Lunge forward with arms raised overhead, back foot angled." },
      { name: "Warrior II", sets: 1, reps: "30 sec each", rest: "—", description: "Open hips to the side, arms extended, gaze over front hand." },
      { name: "Tree Pose", sets: 1, reps: "30 sec each", rest: "—", description: "Balance on one leg with the other foot on your inner thigh." },
      { name: "Seated Forward Fold", sets: 1, reps: "1 min", rest: "—", description: "Sit with legs extended, fold forward reaching for your toes." },
      { name: "Bridge Pose", sets: 1, reps: "45 sec", rest: "—", description: "Lie on your back, lift hips toward the ceiling squeezing glutes." },
      { name: "Savasana", sets: 1, reps: "2 min", rest: "—", description: "Lie flat on your back, close eyes, and focus on breathing." },
    ],
  },
  {
    id: "push-up-mastery",
    title: "Push-Up Mastery",
    duration: "15 min",
    calories: "200 kcal",
    level: "Intermediate",
    category: "Strength",
    exercises: 6,
    image: strengthImage,
    description: "Master the push-up with progressive variations that build upper body and core strength. No equipment needed.",
    exerciseList: [
      { name: "Standard Push-Ups", sets: 3, reps: "12", rest: "30 sec", description: "Classic push-up with hands shoulder-width apart." },
      { name: "Wide Push-Ups", sets: 3, reps: "10", rest: "30 sec", description: "Hands placed wider than shoulders to target chest." },
      { name: "Diamond Push-Ups", sets: 3, reps: "8", rest: "30 sec", description: "Hands close together forming a diamond shape under chest." },
      { name: "Decline Push-Ups", sets: 3, reps: "10", rest: "30 sec", description: "Feet elevated on a chair to increase difficulty." },
      { name: "Slow Negative Push-Ups", sets: 3, reps: "6", rest: "30 sec", description: "Lower for 4 seconds, push up explosively." },
      { name: "Push-Up Hold", sets: 3, reps: "20 sec", rest: "20 sec", description: "Hold at the bottom of a push-up position." },
    ],
  },
  {
    id: "fat-burn-cardio",
    title: "Fat Burn Cardio",
    duration: "25 min",
    calories: "350 kcal",
    level: "Intermediate",
    category: "Cardio",
    exercises: 10,
    image: cardioImage,
    description: "Torch calories with this fast-paced cardio session. Combines bodyweight movements to keep your heart rate elevated throughout.",
    exerciseList: [
      { name: "Jump Rope (Imaginary)", sets: 3, reps: "1 min", rest: "15 sec", description: "Mimic jump rope motion with light hops and wrist circles." },
      { name: "Butt Kicks", sets: 3, reps: "30 sec", rest: "10 sec", description: "Jog in place kicking heels up to your glutes." },
      { name: "Star Jumps", sets: 3, reps: "12", rest: "15 sec", description: "Jump into a star shape with arms and legs spread wide." },
      { name: "Skaters", sets: 3, reps: "20", rest: "15 sec", description: "Lateral jumps landing on one foot, mimicking skating." },
      { name: "Fast Feet", sets: 3, reps: "30 sec", rest: "10 sec", description: "Rapid small steps in place as fast as possible." },
      { name: "Tuck Jumps", sets: 3, reps: "8", rest: "20 sec", description: "Jump and pull knees to chest at the top." },
      { name: "Lateral Shuffles", sets: 3, reps: "30 sec", rest: "10 sec", description: "Quick side-to-side shuffle in an athletic stance." },
      { name: "Sprint in Place", sets: 3, reps: "20 sec", rest: "10 sec", description: "All-out sprint without moving forward." },
      { name: "Power Jacks", sets: 3, reps: "15", rest: "15 sec", description: "Deep squat jumping jacks with full arm extension." },
      { name: "Cool-Down Walk", sets: 1, reps: "2 min", rest: "—", description: "Walk slowly in place, focusing on deep breaths." },
    ],
  },
  {
    id: "core-destroyer",
    title: "Core Destroyer",
    duration: "20 min",
    calories: "250 kcal",
    level: "Advanced",
    category: "Strength",
    exercises: 8,
    image: strengthImage,
    description: "An intense core-focused session that targets abs, obliques, and lower back for a rock-solid midsection.",
    exerciseList: [
      { name: "Plank", sets: 3, reps: "45 sec", rest: "15 sec", description: "Hold a forearm plank with core braced." },
      { name: "Russian Twists", sets: 3, reps: "20", rest: "15 sec", description: "Sit with feet lifted, twist torso side to side." },
      { name: "Leg Raises", sets: 3, reps: "12", rest: "15 sec", description: "Lie flat, raise straight legs to 90° and lower slowly." },
      { name: "Dead Bug", sets: 3, reps: "10 each", rest: "15 sec", description: "Lie on back, extend opposite arm and leg while keeping core stable." },
      { name: "Side Plank", sets: 3, reps: "30 sec each", rest: "10 sec", description: "Hold a side plank on forearm, hips lifted." },
      { name: "Flutter Kicks", sets: 3, reps: "30 sec", rest: "10 sec", description: "Lie on back, alternate small rapid leg kicks." },
      { name: "V-Ups", sets: 3, reps: "10", rest: "15 sec", description: "Simultaneously lift legs and torso to touch toes." },
      { name: "Superman Hold", sets: 3, reps: "30 sec", rest: "15 sec", description: "Lie face down, lift arms and legs off the ground." },
    ],
  },
  {
    id: "relaxation-stretch",
    title: "Relaxation Stretch",
    duration: "15 min",
    calories: "80 kcal",
    level: "Beginner",
    category: "Stretching",
    exercises: 10,
    image: yogaImage,
    description: "Unwind with gentle stretches that release tension, improve flexibility, and promote relaxation after a long day.",
    exerciseList: [
      { name: "Neck Rolls", sets: 1, reps: "1 min", rest: "—", description: "Slowly roll your head in circles to release neck tension." },
      { name: "Shoulder Shrugs", sets: 1, reps: "10", rest: "—", description: "Lift shoulders to ears, hold briefly, then release." },
      { name: "Chest Opener", sets: 1, reps: "30 sec", rest: "—", description: "Clasp hands behind back and lift arms gently." },
      { name: "Standing Quad Stretch", sets: 1, reps: "30 sec each", rest: "—", description: "Pull heel to glute while standing, hold for balance." },
      { name: "Hamstring Stretch", sets: 1, reps: "30 sec each", rest: "—", description: "Place foot on a low surface and lean forward gently." },
      { name: "Hip Flexor Stretch", sets: 1, reps: "30 sec each", rest: "—", description: "Kneel on one knee, push hips forward gently." },
      { name: "Seated Spinal Twist", sets: 1, reps: "30 sec each", rest: "—", description: "Sit and twist torso, using arm on opposite knee for leverage." },
      { name: "Butterfly Stretch", sets: 1, reps: "1 min", rest: "—", description: "Sit with soles of feet together, gently press knees down." },
      { name: "Child's Pose", sets: 1, reps: "1 min", rest: "—", description: "Kneel and fold forward with arms extended, forehead on floor." },
      { name: "Deep Breathing", sets: 1, reps: "2 min", rest: "—", description: "Sit comfortably, breathe deeply in through nose, out through mouth." },
    ],
  },
  {
    id: "tabata-burn",
    title: "Tabata Burn",
    duration: "20 min",
    calories: "300 kcal",
    level: "Advanced",
    category: "HIIT",
    exercises: 8,
    image: hiitImage,
    description: "Classic Tabata protocol — 20 seconds of all-out effort followed by 10 seconds of rest. Eight rounds of pure intensity.",
    exerciseList: [
      { name: "Burpees", sets: 4, reps: "20 sec", rest: "10 sec", description: "Full burpee with push-up and jump." },
      { name: "Mountain Climbers", sets: 4, reps: "20 sec", rest: "10 sec", description: "Drive knees to chest in plank position as fast as possible." },
      { name: "Jump Squats", sets: 4, reps: "20 sec", rest: "10 sec", description: "Deep squat into explosive vertical jump." },
      { name: "Push-Ups", sets: 4, reps: "20 sec", rest: "10 sec", description: "As many push-ups as possible in 20 seconds." },
      { name: "High Knees", sets: 4, reps: "20 sec", rest: "10 sec", description: "Sprint in place bringing knees to hip height." },
      { name: "Plank Jacks", sets: 4, reps: "20 sec", rest: "10 sec", description: "In plank, jump feet wide and back together." },
      { name: "Lunge Jumps", sets: 4, reps: "20 sec", rest: "10 sec", description: "Alternating jump lunges at maximum speed." },
      { name: "Bicycle Crunches", sets: 4, reps: "20 sec", rest: "10 sec", description: "Fast alternating elbow-to-knee crunches on your back." },
    ],
  },
  {
    id: "leg-day-power",
    title: "Leg Day Power",
    duration: "35 min",
    calories: "380 kcal",
    level: "Intermediate",
    category: "Strength",
    exercises: 10,
    image: cardioImage,
    description: "Build powerful legs with this comprehensive lower body workout. Targets quads, hamstrings, glutes, and calves.",
    exerciseList: [
      { name: "Bodyweight Squats", sets: 4, reps: "15", rest: "30 sec", description: "Feet shoulder-width, lower until thighs are parallel." },
      { name: "Walking Lunges", sets: 3, reps: "12 each", rest: "30 sec", description: "Step forward into a lunge, alternate legs as you walk." },
      { name: "Glute Bridges", sets: 3, reps: "15", rest: "20 sec", description: "Lie on back, drive hips up squeezing glutes at the top." },
      { name: "Bulgarian Split Squats", sets: 3, reps: "10 each", rest: "30 sec", description: "Rear foot elevated on a chair, squat on the front leg." },
      { name: "Calf Raises", sets: 4, reps: "20", rest: "15 sec", description: "Rise onto toes, hold briefly, then lower slowly." },
      { name: "Sumo Squats", sets: 3, reps: "15", rest: "25 sec", description: "Wide stance squat with toes pointed out." },
      { name: "Single-Leg Deadlift", sets: 3, reps: "10 each", rest: "20 sec", description: "Hinge at hip on one leg, extending the other behind you." },
      { name: "Wall Sit", sets: 3, reps: "30 sec", rest: "20 sec", description: "Back against wall, thighs parallel to ground." },
      { name: "Side Lunges", sets: 3, reps: "10 each", rest: "20 sec", description: "Step wide to the side, bending one knee while keeping the other straight." },
      { name: "Squat Pulse", sets: 3, reps: "20", rest: "15 sec", description: "Hold at the bottom of a squat and pulse up and down slightly." },
    ],
  },
  {
    id: "sunrise-yoga",
    title: "Sunrise Yoga",
    duration: "30 min",
    calories: "120 kcal",
    level: "Beginner",
    category: "Yoga",
    exercises: 12,
    image: yogaImage,
    description: "A gentle, energizing morning yoga session to awaken the body and set a positive tone for the day ahead.",
    exerciseList: [
      { name: "Easy Seated Meditation", sets: 1, reps: "2 min", rest: "—", description: "Sit cross-legged, close eyes, and focus on breath." },
      { name: "Neck Stretches", sets: 1, reps: "1 min", rest: "—", description: "Gently tilt head side to side and forward." },
      { name: "Cat-Cow", sets: 1, reps: "1 min", rest: "—", description: "Flow between arching and rounding spine on all fours." },
      { name: "Sun Salutation A", sets: 3, reps: "1 flow", rest: "—", description: "Classic sequence: forward fold, plank, cobra, downward dog." },
      { name: "Warrior I", sets: 1, reps: "30 sec each", rest: "—", description: "Deep lunge with arms reaching overhead." },
      { name: "Warrior II", sets: 1, reps: "30 sec each", rest: "—", description: "Open stance, arms wide, gaze over front hand." },
      { name: "Triangle Pose", sets: 1, reps: "30 sec each", rest: "—", description: "Extend torso over front leg, reach one arm up." },
      { name: "Tree Pose", sets: 1, reps: "30 sec each", rest: "—", description: "Balance on one leg, other foot on inner thigh." },
      { name: "Pigeon Pose", sets: 1, reps: "1 min each", rest: "—", description: "Deep hip opener with one leg folded in front." },
      { name: "Seated Twist", sets: 1, reps: "30 sec each", rest: "—", description: "Twist torso while seated for spinal mobility." },
      { name: "Legs Up the Wall", sets: 1, reps: "2 min", rest: "—", description: "Lie with legs extended up a wall for relaxation." },
      { name: "Final Savasana", sets: 1, reps: "3 min", rest: "—", description: "Complete relaxation lying flat on your back." },
    ],
  },
];

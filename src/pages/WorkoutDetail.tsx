import { useParams, Link } from "react-router-dom";
import { allWorkouts } from "@/data/workouts";

const WorkoutDetail = () => {
  const { id } = useParams();

  const workout = allWorkouts.find(
    (w) => w.id === id
  );

  if (!workout) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Workout not found
          </h2>
          <Link
            to="/workouts"
            className="text-primary underline"
          >
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">
        {workout.title}
      </h1>

      <img
        src={workout.image}
        alt={workout.title}
        className="w-full max-w-xl rounded-lg mb-6"
      />

      <p className="mb-4">{workout.description}</p>

      <h2 className="text-xl font-semibold mb-2">
        Exercises
      </h2>

      <ul className="space-y-3">
        {workout.exerciseList.map((exercise, index) => (
          <li
            key={index}
            className="bg-secondary p-4 rounded-lg"
          >
            <h3 className="font-bold">{exercise.name}</h3>
            <p>
              {exercise.sets} sets • {exercise.reps}
            </p>
            <p className="text-sm text-muted-foreground">
              {exercise.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutDetail;
import { useQuery, gql } from '@apollo/client'
import QueryResult from './QueryResults'
import ExerciseCard from './ExerciseCard'

const EXERCISES = gql`
  query Exercises {
    exercises {
      id
      name
      description
      image_url
      category
    }
  }
`

const toggleExercise = (exercise) => {
  setSelectedExercises((prev) =>
    prev.includes(exercise)
      ? prev.filter((e) => e !== exercise)
      : [...prev, exercise]
  )
}

export default function Step2({
  onNext,
  exerciseCount,
  exercises,
  selectedExercises,
  setSelectedExercises,
}) {
  const { loading, error, data } = useQuery(EXERCISES)

  const toggleExercise = (exercise) => {
    setSelectedExercises((prev) =>
      prev.includes(exercise)
        ? prev.filter((e) => e !== exercise)
        : [...prev, exercise]
    )
  }

  return (
    <section className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
      <p className="text-4xl uppercase font-bold">Step 2</p>
      <h2 className="text-3xl uppercase">Choisis tes exercices</h2>
      <div>Les exercices</div>
      <QueryResult error={error} loading={loading} data={data}>
        <div className="grid grid-cols-6 gap-2">
          {data?.exercises?.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              selectedExercises={selectedExercises}
              toggleExercise={toggleExercise}
            />
          ))}
        </div>
      </QueryResult>
      <div>
        <h3 className="uppercase">
          Aperçu des {exerciseCount} exercices sélectionnés
        </h3>
        <div className="grid grid-cols-6">
          {selectedExercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              selectedExercises={selectedExercises}
              toggleExercise={toggleExercise}
            />
          ))}
        </div>
      </div>

      <button onClick={onNext}>Valider</button>
    </section>
  )
}

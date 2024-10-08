import { useQuery, gql } from '@apollo/client'
import QueryResult from './QueryResults'

const EXERCISES = gql`
  query Exercises {
    exercises {
      id
      name
      description
    }
  }
`

export default function Step2({
  onNext,
  exerciseCount,
  exercises,
  selectedExercises,
  setSelectedExercises,
}) {
  const { loading, error, data } = useQuery(EXERCISES)

  return (
    <section className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
      <p className="text-4xl uppercase font-bold">Step 2</p>
      <h2 className="text-3xl uppercase">Choisis tes exercices</h2>
      <div>Les exercices</div>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.exercises?.map((exercise) => (
          <p key={exercise.name}>nom: {exercise.name}</p>
        ))}
      </QueryResult>
      <div>
        <h3>Aperçu des exercices sélectionnés</h3>
        <p>nb exercices: {exerciseCount}</p>
        {selectedExercises.map((exercise) => (
          <div key={exercise.id}>{exercise.name}</div>
        ))}
      </div>

      <button onClick={onNext}>Valider</button>
    </section>
  )
}

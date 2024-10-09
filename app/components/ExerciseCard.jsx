import Image from 'next/image'

export default function ExerciseCard({
  exercise,
  toggleExercise,
  selectedExercises,
}) {
  return (
    <article className="border-[1px] p-2 border-black rounded-lg flex flex-col">
      <Image
        className="self-center"
        src={exercise.image_url}
        alt={`illustration de l'exercice ${exercise.name}`}
        width={100}
        height={100}
      ></Image>
      <h3 className="self-center uppercase font-bold">{exercise.name}</h3>
      <p>catégorie : {exercise.category}</p>
      <p>{exercise.description}</p>
      <button onClick={() => toggleExercise(exercise)}>
        {selectedExercises.includes(exercise) ? 'Deselect' : 'Select'}
      </button>
    </article>
  )
}

import Image from 'next/image'
import { useState } from 'react'
import arm from '../src/fire.png'
import armDisabled from '../src/fire-disabled.png'

export default function ExerciseCard({
  exercise,
  toggleExercise,
  selectedExercises,
  isDisabled,
}) {
  const difficultyLevel = {
    beginner: 1,
    intermediate: 2,
    expert: 3,
  }
  const range = [1, 2, 3]
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleDescription = () => {
    setIsExpanded((prev) => !prev)
  }
  const truncatedInstruction = exercise.instructions[0] + '...'

  return (
    <article className="relative border-[1px] p-2 border-black rounded-lg flex flex-col gap-2 w-80">
      <Image
        className="self-center rounded-lg h-48 object-cover"
        src={`/${exercise.images[0]}`}
        alt={`illustration de l'exercice ${exercise.name}`}
        width={300}
        height={150}
      ></Image>
      <h3 className="self-center uppercase font-bold text-lg text-center">
        {exercise.name}
      </h3>
      <p>
        {isExpanded
          ? exercise.instructions
          : `${truncatedInstruction.slice(0, 50)}...`}
      </p>
      <button
        onClick={handleToggleDescription}
        className="text-blue-500 underline"
      >
        {isExpanded ? 'Afficher moins' : 'Afficher plus'}
      </button>
      <div className="flex-grow"></div>
      <div className="flex">
        {range.map((rangeElem) =>
          difficultyLevel[exercise.level] >= rangeElem ? (
            <Image key="rangeElem" src={arm} alt="" width={20} height={20} />
          ) : (
            <Image
              key="rangeElem"
              src={armDisabled}
              alt=""
              width={20}
              height={20}
            />
          )
        )}
      </div>
      <button
        onClick={() => toggleExercise(exercise)}
        disabled={isDisabled}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={selectedExercises.includes(exercise) ? 'currentColor' : 'none'}
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="absolute z-10 drop-shadow top-3 right-3 w-7 text-lime-400 hover:text-lime-500 cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          ></path>
        </svg>
      </button>
    </article>
  )
}

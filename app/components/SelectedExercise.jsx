import Image from 'next/image'

export default function SelectedCard({
  exercise,
  toggleExercise,
  selectedExercises,
}) {
  return (
    <article className="relative border-[1px] p-2 border-black rounded-lg flex flex-col justify-center size-44">
      <div className="flex-grow"></div>
      <h3 className="self-center uppercase text-sm font-bold text-center">
        {exercise.name}
      </h3>
      <Image
        className="self-center rounded-lg h-24 object-cover"
        src={`/${exercise.images[0]}`}
        alt={`illustration de l'exercice ${exercise.name}`}
        width={200}
        height={150}
      ></Image>

      {toggleExercise ? (
        <button onClick={() => toggleExercise(exercise)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="absolute z-10 drop-shadow md:top-1.5 md:right-1.5 w-8 md:w-6 text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <path
              fill="#af1212"
              d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2m2.59 6L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41z"
            />
          </svg>
        </button>
      ) : (
        ''
      )}
    </article>
  )
}

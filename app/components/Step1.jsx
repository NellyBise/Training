'use client'
import { useState } from 'react'

export default function Step1({ onNext, setExerciseCount }) {
  const [count, setCount] = useState(9)

  return (
    <section className="flex flex-col items-center">
      <h2 className="text-4xl">Étape 1: Choisis le nombre d'exercices</h2>
      <p>
        Conseil : la durée idéale d'une séance est de 30 à 60 minutes. Pour un
        circuit de 9 exercices le nombre de répétitions est entre 4 et 6, pour
        un circuit de 12 exercices, entre 3 et 5.{' '}
      </p>
      <div className="flex">
        <button
          className={count === 9 ? 'bg-blue-500' : 'bg-white'}
          onClick={() => setCount(9)}
        >
          9 exercices
        </button>
        <button
          className={count === 12 ? 'bg-blue-500' : 'bg-white'}
          onClick={() => setCount(12)}
        >
          12 exercices
        </button>
      </div>

      <button
        onClick={() => {
          setExerciseCount(count)
          onNext()
        }}
      >
        Valider
      </button>
      <div className="size-96 bg-blue-400"></div>
    </section>
  )
}

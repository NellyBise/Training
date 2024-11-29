'use client'
import { useState } from 'react'
import Image from 'next/image'
import step1 from '../src/circuit-training.webp'
import Button from './ui/Button'
import Link from 'next/link'

export default function Step1({
  onNext,
  setExerciseCount,
  exerciseCount,
  setSelectedExercises,
}) {
  const [count, setCount] = useState(9)

  const handleCountChange = (event) => {
    if (event.target.value >= 5 && event.target.value <= 15) {
      setCount(parseInt(event.target.value))
    } else {
      setCount(5)
    }
  }

  return (
    <article className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 py-12 px-8">
      <div className="md:w-1/2 flex flex-col items-center gap-8">
        <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
          1
        </p>
        <h2 className="text-3xl uppercase text-center mb-8">
          Choisis le nombre d&rsquo;exercices de ton programme
        </h2>
        <p className="flex flex-col gap-2">
          Sélectionne le nombre d&rsquo;exercices selon le type d&rsquo;activité
          que tu as prévu. Pour du circuit training, la recommandation est de 9
          ou 12 exercices.
          <Link
            href="/planifier-son-entrainement"
            className="text-blue-700 underline decoration-transparent hover:decoration-inherit duration-300"
          >
            Conseils pour réussir ton programme d&rsquo;entraînement
          </Link>
        </p>

        <div className="flex flex-col items-center gap-12 flex-wrap justify-center">
          <div className="relative mt-4">
            <label
              htmlFor="count"
              className="w-full block mb-1 text-sm text-center text-slate-600"
            >
              Nombre d&rsquo;exercices (5 à 15)
            </label>
            <div className="relative">
              <button
                className="absolute left-1 top-1 rounded bg-slate-700 p-1.5 border border-transparent text-center text-sm text-white transition-all focus:bg-lime-400 hover:bg-lime-400 focus:text-slate-700 hover:text-slate-700"
                type="button"
                aria-label="Moins"
                onClick={() => {
                  count > 5 ? setCount(count - 1) : ''
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                </svg>
              </button>
              <input
                type="number"
                name="count"
                id="count"
                min="5"
                max="15"
                value={count}
                onChange={handleCountChange}
                className="w-full bg-white text-center pl-2.5 placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              />

              <button
                className="absolute right-1 top-1 rounded bg-slate-700 p-1.5 border border-transparent text-center text-sm text-white transition-all focus:bg-lime-400 hover:bg-lime-400 focus:text-slate-700 hover:text-slate-700"
                type="button"
                aria-label="Plus"
                onClick={() => {
                  count < 15 ? setCount(count + 1) : ''
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              </button>
            </div>
          </div>
          <Button
            title="Valider"
            clickFunction={() => {
              if (count < exerciseCount) {
                setSelectedExercises([])
              }
              setExerciseCount(count)
              onNext()
            }}
          />
        </div>
      </div>
      <Image
        className="md:w-1/2 rounded-lg"
        src={step1}
        alt=""
        width={2000}
        height="auto"
        priority
      />
    </article>
  )
}
